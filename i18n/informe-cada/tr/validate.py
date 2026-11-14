import sys,json,re,os
lang=sys.argv[1]; B=os.path.dirname(os.path.abspath(__file__))
err=[]
def kind(l):
    for p in ('## ','### ','- ','> '):
        if l.startswith(p): return p
    if l.startswith('|'): return '|%d'%l.count(' | ')
    return '' if not l.strip() else 'p'
for k in range(1,7):
    a=open(f'{B}/es/part{k}.md',encoding='utf-8').read().rstrip('\n').split('\n')
    try: b=open(f'{B}/{lang}/part{k}.md',encoding='utf-8').read().rstrip('\n').split('\n')
    except FileNotFoundError: err.append(f'part{k}: falta'); continue
    if len(a)!=len(b): err.append(f'part{k}: {len(a)} líneas en es, {len(b)} en {lang}')
    for i,(x,y) in enumerate(zip(a,b),1):
        if kind(x)!=kind(y): err.append(f'part{k} línea {i}: tipo {kind(x)!r} vs {kind(y)!r}: {y[:60]}')
        if re.findall(r'\[R\d+\]',x)!=re.findall(r'\[R\d+\]',y): err.append(f'part{k} línea {i}: citas distintas')
        if x.strip() and x.strip()==y.strip() and len(x)>40 and not x.startswith('|'): err.append(f'part{k} línea {i}: sin traducir')
ra=open(f'{B}/es/refs.txt',encoding='utf-8').read().split('\n'); 
try:
    rb=open(f'{B}/{lang}/refs.txt',encoding='utf-8').read().split('\n')
    ia=[l.split(' ')[0] for l in ra if l]; ib=[l.split(' ')[0] for l in rb if l]
    if ia!=ib: err.append('refs: ids distintos')
    ua=[re.sub('/ES/','/X/',l.split(' ')[-1]) for l in ra if l]; ub=[re.sub(r'/(EN|FR|DE|NL|PT|IT|DA)/','/X/',l.split(' ')[-1]) for l in rb if l]
    if ua!=ub: err.append('refs: URLs distintas')
except FileNotFoundError: err.append('refs: falta')
for fn in ('ig_strings.json','labels.json'):
    try:
        a=json.load(open(f'{B}/es/{fn}',encoding='utf-8')); b=json.load(open(f'{B}/{lang}/{fn}',encoding='utf-8'))
        if set(a)!=set(b): err.append(f'{fn}: claves distintas ({len(set(a)-set(b))} faltan)')
        same=[k for k in a if k in b and a[k]==b[k] and re.search(r'[a-záéíóúñ]{4}',a[k])]
        if len(same)>40: err.append(f'{fn}: {len(same)} valores sin traducir')
    except FileNotFoundError: err.append(f'{fn}: falta')
    except json.JSONDecodeError as e: err.append(f'{fn}: JSON inválido {e}')
print('\n'.join(err[:60]) if err else 'OK'); print(len(err),'errores')
