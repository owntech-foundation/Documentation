# Run The Documentation Center Locally

This guide explains how to build or serve the OwnTech documentation center on a
local machine.

## Prerequisites

Install:

- Python 3
- Git
- Doxygen

On Ubuntu/Debian:

```sh
sudo apt update
sudo apt install python3 python3-venv git doxygen
```

On macOS with Homebrew:

```sh
brew install python git doxygen
```

## Install Python Dependencies

Create a virtual environment from the repository root:

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install mkdocs-material mkdoxy pillow cairosvg mkdocs-macros-plugin mkdocs-drawio mike mkdocs-glightbox mkdocs-caption
pip install --upgrade Jinja2
```

Check that MkDocs is available:

```sh
mkdocs --version
```

### Install Docker

On Ubuntu/Debian:

```sh
sudo apt update
sudo apt install docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker "$USER"
```

After adding yourself to the `docker` group, log out and log back in so the new
group membership is applied.

After this, run `act` as your regular user. Avoid `sudo act` unless you are
deliberately using root's Docker and `act` configuration.

Check Docker:

```sh
docker version
docker run --rm hello-world
```

On macOS, install and start Docker Desktop before running `act`.

### Install act

On Linux:

```sh
curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash -s -- -b /usr/local/bin
```

If `act` is still not found, check where it was installed:

```sh
sudo find / -name act -type f 2>/dev/null
```

Then either run it with the full path or move it into a directory that is in
`PATH`, for example:

```sh
sudo mv ./bin/act /usr/local/bin/act
```

On macOS with Homebrew:

```sh
brew install act
```

Check the installation:

```sh
act --version
```

Check that `act` can reach Docker:

```sh
act --list
```

### Install GitHub CLI And Configure Secrets

`act` can use the same `actions/checkout` steps as GitHub Actions, but those
steps need a `GITHUB_TOKEN` secret when repositories are private or GitHub rate
limits anonymous access.

On Ubuntu/Debian:

```sh
sudo apt update
sudo apt install gh
```

If your distribution does not package `gh`, use the official GitHub CLI Linux
installation instructions.

On macOS with Homebrew:

```sh
brew install gh
```

Log in to GitHub and configure Git to use SSH for normal repository access:

```sh
gh auth login --git-protocol ssh --web
gh auth status
```

Create an `act` secrets file from the GitHub CLI token:

```sh
printf 'GITHUB_TOKEN=%s\n' "$(gh auth token)" > .secrets
chmod 600 .secrets
```

Make sure `.secrets` is ignored by Git:

```sh
grep -qxF '.secrets' .gitignore || printf '\n.secrets\n' >> .gitignore
```

This repository also blocks Codex from reading local secrets through
`.codex/config.toml`. Keep these entries in that file:

```toml
":project_roots" = {
  "." = "write",
  ".secrets" = "none",
  "**/.secrets" = "none",
  "**/*.secrets" = "none",
  "**/.env*" = "none"
}
```

## Run A GitHub Actions Workflow Locally

Now you've installed `act` you can run GitHub Actions workflows locally. This way you not only build the documentation to check it locally, but also you verify the build logic in the CI files.

The local `act` flow is:

1. Docker starts a temporary runner container.
2. `act --bind` mounts this repository into that container.
3. The workflow checks out external documentation repositories under `docs/`.
4. The workflow copies the version-specific MkDocs config to `mkdocs.yml`.
5. The workflow runs a local MkDocs build instead of `mike deploy --push`.
6. MkDocs writes the generated static site to `site/` in this repository.

After the workflow finishes, `site/` is the output to open or serve locally.
Use `--bind` when running `act`; otherwise the workspace may be copied into the
container and generated files can disappear when the container exits.

The workflows detect local `act` runs through the `ACT=true` environment
variable set by `act`. When that variable is present, publish steps using
`mike deploy --push` are skipped and replaced with a local MkDocs build.

`act` runs jobs in Docker containers, so Docker must be installed and the Docker
daemon must be running before `act` can start a workflow.

### Test `publish_1.0.yml` Locally

`publish_1.0.yml` is the easiest workflow to test locally because it uses
`workflow_dispatch` and does not need a custom event payload.

When this workflow runs under `act`, it runs the same `actions/checkout` steps
as GitHub Actions. The only local difference is the final step: `act` runs
`mkdocs build`, while GitHub Actions runs `mike deploy --push`.

Use `--bind` for this workflow. The generated `site/` directory and checked-out
external docs are then written into this repository, where you can inspect them
after the run.

Run the `1.0.0` build:

```sh
act --bind workflow_dispatch \
  -W .github/workflows/publish_1.0.yml \
  --secret-file .secrets
```

With `--bind`, checkout actions operate on the mounted working tree. Run it from
a clean worktree if you do not want checkout cleanup or generated files mixed
with local edits.

To build and serve the generated site in one `act` run:

```sh
act --bind workflow_dispatch \
  -W .github/workflows/publish_1.0.yml \
  --secret-file .secrets \
  --env ACT_SERVE=true \
  --container-options "-p 8000:8000" \
```

Then open in your browser:

```text
http://127.0.0.1:8000
```

This keeps the `act` job running until you stop it with `Ctrl+C`. Change the
port with `--env ACT_SERVE_PORT=8080` and the matching container option
`--container-options "-p 8080:8080"`.

If you ran `act` with `sudo`, generated files may be owned by `root`. Fix that
from the repository root if needed:

```sh
sudo chown -R "$USER:$USER" site docs mkdocs.yml
```

### Test `ci.yml` Locally

`ci.yml` is triggered by `repository_dispatch`, so it needs an event payload.

Create `event-v1.0.json`:

```json
{
  "client_payload": {
    "version": "v1.0"
  }
}
```

Create `event-v0.9.json` if you want to test the `0.9.0` path:

```json
{
  "client_payload": {
    "version": "v0.9"
  }
}
```

Run the `v1.0` path:

```sh
act --bind repository_dispatch \
  -W .github/workflows/ci.yml \
  -e event-v1.0.json \
  --secret-file .secrets
```

Or the `v0.9` path:

```sh
act --bind repository_dispatch \
  -W .github/workflows/ci.yml \
  -e event-v0.9.json \
  --secret-file .secrets
```

### Notes About act

- If `act` reports `failed to connect to the docker API at
  unix:///var/run/docker.sock`, Docker is not installed, the daemon is not
  running, or the current user cannot access the Docker socket.
- The first run can be slow because `act` downloads the runner image.
- Public repository checkouts usually work without a token. Private repository
  checkouts need a GitHub token.
- The local environment is close to GitHub Actions, but not identical. Use it to
  catch workflow, checkout, dependency, MkDocs, and navigation errors before
  pushing.
- The publish step is guarded with `env.ACT != 'true'`, so a normal `act` run
  validates generation without pushing documentation.

## Test Hardware Version Selection

After serving the `1.0.0` documentation locally, open one of these URL in your browser:

```text
http://127.0.0.1:8000/
```

The hardware version dropdown is injected by `overrides/partials/content.html`.
The displayed version is updated by `docs/javascripts/version_selector.js`.

The dropdown links currently point to `https://docs.owntech.org/...`, so clicking
them from a local server opens the published site. To test local links, edit the
links temporarily or use the browser address bar.

## Common Issues

### Missing File In Navigation

If MkDocs reports that a page in `mkdocs.yml` does not exist, the corresponding
external repository was not checked out or was checked out on the wrong branch.
Compare the local `docs/` layout with `.github/workflows/publish_1.0.yml`.

### MkDoxy Or Doxygen Errors

MkDoxy reads source files from checked-out repositories such as `docs/core/` and
`docs/controlLibrary/src`. Make sure those repositories exist locally and that
`doxygen` is installed.

### Draw.io Diagrams Do Not Render

Make sure `mkdocs-drawio` is installed in the active Python environment and that
the referenced `.drawio` or exported image files were copied into `docs/`.

### Avoid Accidental Publish

Use `mkdocs serve` and `mkdocs build` for local validation. `mike deploy --push`
publishes generated documentation and should be reserved for CI or intentional
release work.
