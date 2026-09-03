#!/usr/bin/env bash
# Print the share link for every gated page in content/unlocked/.
# These pages are excluded from every Hugo listing on purpose, so this is
# the one place to look them up.   Usage: ./scripts/unlocked-links.sh
set -euo pipefail
cd "$(dirname "$0")/.."
base=$(sed -n 's/^baseURL *= *"\(.*\)\/"/\1/p' config.toml)
for f in content/unlocked/*.md; do
  [[ "$(basename "$f")" == "_index.md" ]] && continue
  title=$(sed -n 's/^title *= *"\(.*\)"/\1/p' "$f" | head -1)
  slug=$(sed -n 's/^slug *= *"\(.*\)"/\1/p' "$f" | head -1)
  draft=$(sed -n 's/^draft *= *\(.*\)/\1/p' "$f" | head -1)
  pdf=$(sed -n 's/^pdf *= *"\(.*\)"/\1/p' "$f" | head -1)
  flag=""; [[ "$draft" == "true" ]] && flag="  [DRAFT - not published]"
  printf '%s%s\n  %s/unlocked/%s/\n' "$title" "$flag" "$base" "$slug"
  [[ -n "$pdf" ]] && printf '  pdf: %s%s\n' "$base" "$pdf"
  echo
done
