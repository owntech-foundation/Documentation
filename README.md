# OwnTech Documentation Center

This repository generates and publishes the OwnTech documentation center at
[docs.owntech.org](https://docs.owntech.org).

The documentation center is built with MkDocs Material, MkDoxy, Doxygen, and
`mike`. Most content is not authored directly in this repository. Instead, the
GitHub Actions workflows collect documentation from the repositories that own
the related source code, assemble it under `docs/`, then publish the generated
site.

## Documentation Model

OwnTech documentation is decentralized: each project keeps its documentation as
close as possible to its source files.

Documentation repositories should follow these conventions:

- The generic documentation folder is named `docs/`.
- Documentation files are written in Markdown.
- Extra UI elements can use
  [Material for MkDocs syntax](https://squidfunk.github.io/mkdocs-material/reference/).
- Schematics are created with draw.io.
- Generated images are stored under an `images/` folder.
- Editable `.drawio` schematics are stored under `images/` as well.

This repository is responsible for assembling those decentralized files into a
single MkDocs source tree.

## Repository Layout

- `LOCAL_GENERATION.md` explains how to assemble and run the documentation
  center locally.
- `.github/workflows/ci.yml` builds the documentation center when another
  repository triggers a `repository_dispatch` event.
- `.github/workflows/manual.yml` is a manually triggered publishing workflow for
  the standard documentation set.
- `.github/workflows/publish_1.0.yml` is a manually triggered publishing
  workflow for the `1.0.0` documentation version, including current hardware
  documentation versions.
- `mkdocs-common.yml` contains shared MkDocs, theme, plugin, MkDoxy, JavaScript,
  and homepage configuration.
- `mkdocs.yml` is a placeholder. During CI it is replaced by a file from
  `version-specific-yaml/`.
- `version-specific-yaml/` contains version-specific navigation files.
- `overrides/` contains MkDocs Material template overrides, including the custom
  hardware version selector.
- `docs/` contains local site assets and landing page content. During CI, this
  folder also becomes the assembly point for checked-out external repositories.
- `template-custom/` contains MkDoxy template customizations.

## CI Generation Flow

The publishing workflows build the documentation in several stages:

1. Check out this repository with `fetch-depth: 0`.

   A full checkout is required because `mike` updates and pushes the versioned
   documentation branch. Shallow history can cause fast-forward issues.

2. Check out external OwnTech documentation repositories into `docs/`.

   The workflows use `actions/checkout@v4` multiple times with different
   `repository`, `ref`, and `path` values. For example, Core is checked out into
   `docs/core`, Bootloader into `docs/bootloader`, Control Library into
   `docs/controlLibrary`, and so on.

3. Use sparse checkout when only part of a repository is needed.

   Several repositories only contribute selected Markdown files and images.
   Sparse checkout keeps the generated workspace smaller and avoids importing
   unrelated files.

4. Normalize hardware documentation paths.

   Hardware documentation is stored in branch-specific folders first, such as
   `docs/twistV14` or `docs/spinV12`. The workflow then moves those files into
   URL-oriented paths such as:

   - `docs/twist/1.4.1/getting_started.md`
   - `docs/twist/1.3.0/getting_started.md`
   - `docs/spin/1.2.0/getting_started.md`
   - `docs/ownverter/1.1.0/getting_started.md`

   This matters because MkDocs page paths determine the final URLs, and hardware
   documentation URLs must include the board version.

5. Install build dependencies.

   The workflows install Doxygen, Python, MkDocs Material, MkDoxy, `mike`, and
   the MkDocs plugins used by the site.

6. Select the version-specific MkDocs navigation.

   CI removes the placeholder `mkdocs.yml` and copies the relevant file from
   `version-specific-yaml/`. For example, `publish_1.0.yml` copies
   `version-specific-yaml/mkdocs_1.0.yml` to `mkdocs.yml`.

7. Configure Git identity.

   `mike` commits and pushes generated documentation, so the workflow configures
   `user.name` and `user.email` before deployment.

8. Deploy with `mike`.

   The workflows publish the generated site with commands such as:

   ```sh
   mike deploy --push --update-aliases 1.0.0 latest
   ```

   The `latest` alias is currently assigned by `publish_1.0.yml`.

## Documentation Versioning

The documentation center has two versioning layers.

### API Versioning

Main documentation versioning is handled by `mike`. Each generated API
documentation release is deployed as a MkDocs version, for example `1.0.0`.
The MkDocs Material version selector is configured in `mkdocs-common.yml` under:

```yaml
extra:
  version:
    provider: mike
    alias: true
```

### Hardware Versioning

Hardware documentation uses a custom version selector because the hardware
version is part of the page path inside a single `mike` documentation version.

The implementation has three parts:

1. The publishing workflow checks out hardware documentation branches and moves
   their files into board/version paths under `docs/`.
2. `overrides/partials/content.html` checks `page.file.src_path`. If the path
   contains `twist/`, `spin/`, or `ownverter/`, it renders a board-specific
   version dropdown.
3. `docs/javascripts/version_selector.js` reads the current URL and updates the
   dropdown button so it displays the currently opened hardware version.

For now, hardware versioning is deployed under the `1.0.0` API documentation
version.

Current hardware entries in `publish_1.0.yml` are:

- TWIST: `1.4.1`, `1.3.0`, `1.2.0`
- SPIN: `1.2.0`, `1.1.0`, `1.0.0`
- OWNVERTER: `1.1.0`, `1.0.0`

## Adding Documentation For A New Hardware Version

To add a new hardware documentation version:

1. Edit the publishing workflow, currently
   `.github/workflows/publish_1.0.yml`, to check out the new hardware branch and
   its `docs/` content.
2. In the same workflow, move the checked-out files into the final board/version
   path, for example `docs/twist/1.5.0/getting_started.md`.
3. Edit `overrides/partials/content.html` to add the new version to the
   board-specific dropdown.
4. Edit `docs/javascripts/version_selector.js` so the dropdown button displays
   the correct version and alias when that page is open.
5. If the new version should be the default page in the main navigation, edit
   the relevant file in `version-specific-yaml/`, for example
   `version-specific-yaml/mkdocs_1.0.yml`.

## Adding Or Moving A Documentation Page

When adding a regular documentation page:

1. Keep the page in the repository that owns the related source or product.
2. Make sure the publishing workflow checks out that file or folder.
3. Add or update the page entry in the relevant `version-specific-yaml/`
   navigation file.
4. If the page uses images, make sure the workflow also checks out the required
   `images/` files.

## MkDocs Material Configuration

Shared MkDocs Material configuration lives in `mkdocs-common.yml`. It defines:

- Site metadata and analytics.
- Theme options and palette.
- Shared plugins.
- Markdown extensions.
- Extra JavaScript.
- Homepage configuration.

Version-specific navigation lives in `version-specific-yaml/` so different API
documentation versions can expose different page trees.

## MkDoxy Configuration

MkDoxy is configured in `mkdocs-common.yml` under the `mkdoxy` plugin.

It currently generates API documentation for:

- `powerAPI`, from `docs/core/`
- `controlLibrary`, from `docs/controlLibrary/src`

The generated pages are referenced from the version-specific navigation files.

## Homepage

The documentation center landing page is custom built. Local homepage content
and assets live under `docs/`, while homepage theme variables are configured in
`mkdocs-common.yml`.

## License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/owntech-foundation/documentation">OwnTech Documentation Center</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.owntech.org">OwnTech Foundation</a> is licensed under <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>
