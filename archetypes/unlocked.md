+++
title = "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
draft = true
# Unguessable slug -- this IS the gate. Filled in automatically; leave it alone.
slug = "{{ .Name }}-{{ substr (md5 (printf "%d" now.UnixNano)) 0 6 }}"
# One line shown under the title
subtitle = ""
# Optional: a PDF in static/unlocked/ to embed + offer for download
pdf = ""
pdf_label = "Download the PDF"
# Optional: true turns the page into a worksheet. Use the q, freedom and pick-four
# shortcodes in the body (see content/unlocked/intentional-founder.md); answers autosave
# in the reader's browser
interactive = false
noindex = true

[_build]
  render = "always"
  list = "never"
+++

Intro copy goes here. Keep it short; the good stuff is below.
