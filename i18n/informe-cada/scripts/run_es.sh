#!/bin/bash
cd "$(dirname "$0")"; IG_LANG=es IG_OUT=out/es/ig python3 make_ig_es.py && python3 build_pdf.py es
