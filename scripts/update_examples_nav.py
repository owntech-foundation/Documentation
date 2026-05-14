#!/usr/bin/env python3
"""Generate the MkDocs Examples navigation from examples/library.json."""

from __future__ import annotations

import argparse
import json
import sys
from collections import Counter, defaultdict
from pathlib import Path


PRODUCT_ORDER = ["SPIN", "TWIST", "OWNVERTER"]

CATEGORY_TITLES = {
    ("SPIN", "ADC"): "ADC",
    ("SPIN", "DAC"): "DAC",
    ("SPIN", "LED"): "LED",
    ("SPIN", "PWM"): "PWM",
    ("SPIN", "TIMER"): "Timer",
    ("TWIST", "Basic"): "BASIC",
    ("TWIST", "DC_DC"): "DC DC topology examples",
    ("TWIST", "Microgrid"): "Microgrid examples",
    ("TWIST", "DC_AC"): "DC AC topology examples",
    ("TWIST", "Communication"): "Communication",
}

CATEGORY_ORDER = {
    "SPIN": ["ADC", "DAC", "LED", "PWM", "Timer"],
    "TWIST": [
        "BASIC",
        "DC DC topology examples",
        "Microgrid examples",
        "DC AC topology examples",
        "Communication",
    ],
    "OWNVERTER": ["Hall Sensors"],
}


def yaml_key(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def humanize(value: str) -> str:
    words = value.replace("_", " ").replace("-", " ").split()
    return " ".join(word.upper() if word.isupper() else word.capitalize() for word in words)


def category_for(product: str, parts: list[str]) -> str:
    raw_category = parts[1] if len(parts) > 1 else "Examples"

    if product == "OWNVERTER" and "hall_sensor" in raw_category.lower():
        return "Hall Sensors"

    if (product, raw_category) in CATEGORY_TITLES:
        return CATEGORY_TITLES[(product, raw_category)]

    return humanize(raw_category)


def sort_by_order(values: list[str], preferred_order: list[str]) -> list[str]:
    order = {value: index for index, value in enumerate(preferred_order)}
    return sorted(values, key=lambda value: (order.get(value, len(order)), value.lower()))


def build_examples_nav(library_path: Path) -> list[str]:
    library = json.loads(library_path.read_text(encoding="utf-8"))
    groups: dict[str, dict[str, list[dict[str, str]]]] = defaultdict(lambda: defaultdict(list))
    generated_paths: list[str] = []
    missing_readmes: list[str] = []

    for example in library.get("examples", []):
        base = example.get("base")
        title = example.get("title") or example.get("name")
        files = example.get("files", [])
        if not base or "README.md" not in files:
            continue

        parts = base.split("/")
        product = parts[0]
        category = category_for(product, parts)
        groups[product][category].append(
            {
                "title": title,
                "path": f"examples/{base}/README.md",
            }
        )
        generated_paths.append(f"examples/{base}/README.md")

        readme_path = library_path.parent / base / "README.md"
        if not readme_path.exists():
            missing_readmes.append(str(readme_path))

    if missing_readmes:
        raise FileNotFoundError(
            "Examples listed in library.json are missing README.md files:\n"
            + "\n".join(missing_readmes)
        )

    duplicate_paths = [
        (path, count) for path, count in Counter(generated_paths).items() if count > 1
    ]
    for path, count in duplicate_paths:
        print(f"warning: {path} appears {count} times in the generated nav", file=sys.stderr)

    lines = [
        "    - Examples:\n",
        "        - Home: examples/docs/home.md\n",
    ]

    products = sort_by_order(list(groups), PRODUCT_ORDER)
    for product in products:
        lines.append(f"        - {yaml_key(product)}:\n")
        categories = sort_by_order(list(groups[product]), CATEGORY_ORDER.get(product, []))
        for category in categories:
            lines.append(f"            - {yaml_key(category)}:\n")
            for example in sorted(groups[product][category], key=lambda item: item["title"].lower()):
                lines.append(f"                - {yaml_key(example['title'])}: {example['path']}\n")

    return lines


def replace_examples_nav(mkdocs_path: Path, examples_nav: list[str]) -> None:
    lines = mkdocs_path.read_text(encoding="utf-8").splitlines(keepends=True)

    start = next(
        (index for index, line in enumerate(lines) if line.startswith("    - Examples:")),
        None,
    )
    if start is None:
        raise ValueError(f"Could not find top-level Examples nav item in {mkdocs_path}")

    end = start + 1
    while end < len(lines):
        if lines[end].startswith("    - ") and not lines[end].startswith("        "):
            break
        end += 1

    mkdocs_path.write_text("".join(lines[:start] + examples_nav + lines[end:]), encoding="utf-8")


def count_examples(examples_nav: list[str]) -> int:
    return sum(1 for line in examples_nav if line.startswith("                - "))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--mkdocs", default="version-specific-yaml/mkdocs_1.0.yml", type=Path)
    parser.add_argument("--library", default="docs/examples/library.json", type=Path)
    args = parser.parse_args()

    examples_nav = build_examples_nav(args.library)
    replace_examples_nav(args.mkdocs, examples_nav)
    print(f"Generated {count_examples(examples_nav)} examples in {args.mkdocs} from {args.library}")


if __name__ == "__main__":
    main()
