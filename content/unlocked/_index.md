+++
# Gated content lives here. Each page is reachable ONLY by its direct URL.
# The section itself (/unlocked/) is never rendered, and child pages are
# excluded from the homepage, RSS, sitemap and every other page collection.
# Give each page an unguessable slug, e.g. slug = "my-thing-4f9a2c".
title = "Unlocked"

[_build]
  render = "never"
  list = "never"

[cascade]
  noindex = true
  [cascade._build]
    render = "always"
    list = "never"
+++
