#!/bin/bash
# Uso: ./run_lang.sh <lang>  -> infografías + PDF
set -e
L=$1; cd "$(dirname "$0")"
cp tr/$L/ig_strings.json ig_strings_$L.json
python3 igstrings.py gen $L
mkdir -p out/$L/ig
IG_LANG=$L IG_OUT=out/$L/ig python3 make_ig_${L}_gen.py
python3 build_pdf.py $L
