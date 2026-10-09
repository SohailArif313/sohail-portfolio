# /// script
# requires-python = ">=3.10"
# dependencies = ["pillow"]
# ///
"""Crop an image to 16:9, resize it to 1600x900 and save it as WebP."""

import argparse
from pathlib import Path

from PIL import Image

TARGET_WIDTH = 1600
TARGET_HEIGHT = 900
TARGET_RATIO = TARGET_WIDTH / TARGET_HEIGHT


def optimize(source: Path, destination: Path, anchor: str) -> None:
    image = Image.open(source).convert("RGB")
    width, height = image.size

    if width / height > TARGET_RATIO:
        # Too wide: crop the sides equally.
        new_width = int(height * TARGET_RATIO)
        left = (width - new_width) // 2
        image = image.crop((left, 0, left + new_width, height))
    else:
        # Too tall: keep the top (screenshots) or the middle (artwork).
        new_height = int(width / TARGET_RATIO)
        top = 0 if anchor == "top" else (height - new_height) // 2
        image = image.crop((0, top, width, top + new_height))

    image = image.resize(
        (TARGET_WIDTH, TARGET_HEIGHT), Image.Resampling.LANCZOS
    )

    destination.parent.mkdir(parents=True, exist_ok=True)
    image.save(destination, "WEBP", quality=82, method=6)
    print(f"Saved {destination} ({destination.stat().st_size // 1024} KB)")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="Path to the original image")
    parser.add_argument("destination", type=Path, help="Output .webp path")
    parser.add_argument(
        "--anchor",
        choices=["top", "center"],
        default="top",
        help="Which part to keep when the image is too tall (default: top)",
    )
    args = parser.parse_args()
    optimize(args.source, args.destination, args.anchor)


if __name__ == "__main__":
    main()