#!/bin/bash
cd "$(dirname "$0")"
D=${REPO:-../..}/descargas/informe-cada; mkdir -p $D
for L in "$@"; do
  cp out/$L/CADA_informe_$L.pdf $D/
  for n in 05 06 31; do convert out/$L/ig/ig$n.png -resize 760x -strip -quality 82 $D/ig${n}_$L.jpg; done
done
ls -la $D | tail -n +4
