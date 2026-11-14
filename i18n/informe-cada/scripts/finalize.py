import re,json
raw=open('sb_es_raw.md',encoding='utf-8').read()
body,refs=raw.split('\n## Referencias',1)
refs=[l for l in refs.split('\n') if re.match(r'^R\d+ ',l)]
refs+=[
"R92 Euronews, los eurodiputados presentan el proyecto de informe conjunto sobre la CADA (11 de noviembre de 2026). https://euronews.com/2026/11/11/eu-lawmakers-push-to-reduce-europes-dependence-on-foreign-cloud-providers",
"R93 Euronews, las leyes que decaen con la convocatoria electoral del 29 de noviembre (8 de octubre de 2026). https://es.euronews.com/2026/10/08/el-otro-29-n-las-leyes-y-promesas-del-gobierno-de-coalicion-que-decaen-con-la-convocatoria",
"R94 CNMC, informe IPN/CNMC/038/26 sobre el proyecto de real decreto de centros de datos (22 de septiembre de 2026). https://www.cnmc.es/sites/default/files/6855348.pdf",
"R95 Mundiario, el Consejo de Estado avala el real decreto de centros de datos con cuatro cambios (7 de noviembre de 2026). https://www.mundiario.com/economia/decision-que-permite-gobierno-acelerar-decreto-centros-datos/20261107122123451488.html",
]
ig=open('make_ig.py',encoding='utf-8').read()
cited=[]
for m in re.finditer(r'\[R(\d+)\]', body):
    n=int(m.group(1))
    if n not in cited: cited.append(n)
# order of first appearance in body; keep only cited
rmap={old:i+1 for i,old in enumerate(cited)}
refd={int(r.split()[0][1:]):r for r in refs}
missing=[n for n in cited if n not in refd]; assert not missing, missing
dropped=sorted(set(refd)-set(cited)); print('dropped',[refd[d][:60] for d in dropped])
rx=lambda s: re.sub(r'\[R(\d+)\]', lambda m: f'[R{rmap[int(m.group(1))]}]' if int(m.group(1)) in rmap else '[R?%s]'%m.group(1), s)
body=rx(body).strip()+'\n'
newrefs=[f"R{rmap[o]} "+refd[o].split(' ',1)[1] for o in cited]
open('sb_es.md','w',encoding='utf-8').write(body)
open('refs_es.txt','w',encoding='utf-8').write('\n'.join(newrefs)+'\n')
json.dump(rmap,open('rmap.json','w'))
print(len(newrefs))
