import re,json
s=open('make_ig.py',encoding='utf-8').read()
R=[
('("Dic 2026","Proyecto de informe del Parlamento","previsto")','("11-11-2026","Proyecto de informe del Parlamento","hecho")'),
('("Mar 2027","Votación en comisión","previsto")','("Mar 2027","Votación en comisión; pleno en abril","previsto")'),
('del ecosistema de V-Valley en España y Portugal','del canal tecnológico en España y Portugal'),
('y V-Valley ocupa el eslabón que ve a todos','y el mayorista de valor ocupa el eslabón que ve a todos'),
('peso del Grupo Esprinet en la península','peso de un gran grupo de distribución en la península'),
('("V-Valley (mayorista de valor)",','("Mayorista de valor",'),
('["V-Valley en el grupo (2024)",','["División de valor de un gran grupo (2024)",'),
('fabricantes, V-Valley e integradores','fabricantes, mayoristas e integradores'),
('[R46] V-Valley (Rittal, Huawei Digital Power)','[R46] prensa de mayoristas'),
('[R46][R77] V-Valley','[R46][R77] prensa de mayoristas'),
('[R46] V-Valley','[R46] prensa de mayoristas'),
('[R45] Innovexya','[R45] El Español'),
('("Rol de V-Valley",','("Rol del mayorista",'),
('"AESIA y PLO de gobernanza de la IA (en tramitación)"','"AESIA; la ley de IA caducó con la disolución de las Cortes"'),
('"RD de centros de datos: 80 % renovable horaria"','"RD de centros de datos: 80 % renovable horaria (≥ 10 MW)"'),
('permite a V-Valley ofrecer','permite al mayorista ofrecer'),
('["PLO de IA","En tramitación","IA en el sector público"]','["PLO de IA","Caducado (6-10-2026)","IA en el sector público"]'),
('["RD centros de datos","Audiencia (ago.–sep. 2026)","Energía y soberanía"]','["RD centros de datos","Consejo de Estado (nov. 2026)","Energía y soberanía"]'),
('[R37][R44] Esprinet.','[R37][R44] Esprinet; [R93][R95] actualización 14-11-2026.'),
('"Operadores regionales, Templus"','"Operadores regionales de colocation"'),
('[R77] Templus','[R77] colocation para IA'),
('("+24,6 %","V-Valley España 1T 2026","Crecimiento de la división")','("+21 %","Esprinet España 1S 2026","Gran mayorista ibérico")'),
('"Proyecto de RD para centros ≥ 1 MW"','"RD para centros ≥ 10 MW (rampa a 2031)"'),
('"Cadena de compra y oferta de V-Valley"','"Cadena de compra de un centro de datos"'),
('"SAI, distribución, Huawei Digital Power"','"SAI, distribución, energía digital"'),
('"Armarios y climatización, Rittal"','"Armarios y climatización"'),
('"Templus, preparada para IA"','"Operadores regionales, preparada para IA"'),
('"Servicio de V-Valley"','"Servicio del mayorista"'),
('"Cuatro perfiles de cliente de V-Valley ante la CADA"','"Cuatro perfiles de integrador ante la CADA"'),
('header(s,25,"V-Valley",','header(s,25,"Mayorista de valor",'),
('V-Valley Academy e Innovexya','academias de partners'),
('Academy e Innovexya','academias de partners'),
('[R47] Esprinet; [R45] El Español;','[R47] Esprinet; [R45] El Español;'),
('Escala y catálogo alternativo de V-Valley','Escala y catálogo alternativo del mayorista'),
('Acciones de V-Valley, fabricantes e integradores','Acciones de mayoristas, fabricantes e integradores'),
('Extensión a Portugal y al grupo','Extensión a Portugal y a otros mercados'),
('Recomendaciones prioritarias para cada actor del ecosistema de V-Valley','Recomendaciones prioritarias para cada actor de la cadena de valor'),
('"V-Valley · ','"Mayorista · '),
('"V-Valley: ','"Mayorista: '),
('(fichas) y fabricante','(fichas) y fabricante'),
('"V-Valley (fichas) y fabricante"','"Mayorista (fichas) y fabricante"'),
('"V-Valley e integradores"','"Mayoristas e integradores"'),
('"V-Valley y soc','"Mayoristas y soc'),
('"V-Valley"','"Mayorista"'),
]
for a,b in R:
    if a not in s: print('MISS',a[:60])
    s=s.replace(a,b)
left=[l[:200] for l in s.split('\n') if 'V-Valley' in l or 'Innovexya' in l or 'Templus' in l or 'Rittal' in l]
print('LEFT',left)
rmap={int(k):v for k,v in json.load(open('rmap.json')).items()}
def rr(m):
    n=int(m.group(1)); return f'[R{rmap[n]}]' if n in rmap else ''
# careful: new refs R92-95 just added are in rmap? only if cited in body
s=re.sub(r'\[R(\d+)\]', rr, s)
open('make_ig_es.py','w',encoding='utf-8').write(s)
