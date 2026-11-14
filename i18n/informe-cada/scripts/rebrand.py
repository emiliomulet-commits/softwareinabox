# Versión propia (Software in a Box) del informe CADA para la cadena de valor.
# Quita el enfoque V-Valley / Esprinet y aplica las novedades del 14-11-2026.
import re
L = open('src_es.md', encoding='utf-8').read().split('\n')
def ln(n): return L[n-1]
def setl(n, s): L[n-1] = s
DEL = set()

def sub(n, a, b, count=1):
    s = ln(n)
    assert a in s, (n, a)
    setl(n, s.replace(a, b, count))

# --- reescrituras de línea completas o parciales ---
setl(4, "Este informe analiza la propuesta desde el lugar donde se decide cómo llega la tecnología a las empresas y administraciones de España y Portugal: el canal de distribución. Sigue la cadena de valor completa. En un extremo están los fabricantes de infraestructura de datos, servidores, almacenamiento, redes, ciberseguridad, componentes para centros de datos e IA. En medio, los mayoristas de valor que los representan en la península y los cientos de distribuidores e integradores que les compran para diseñar, implantar y operar soluciones. En el otro extremo, la industria y las empresas de servicios que usan esa tecnología.")
setl(11, "- Para los mayoristas de valor, la norma refuerza su papel como orquestadores: el catálogo multifabricante, la preventa técnica, la logística en la Unión, la financiación y la formación son exactamente los recursos que necesita un ecosistema que debe probar soberanía.")
sub(14, "El Parlamento Europeo prevé su proyecto de informe en diciembre de 2026 y la votación en comisión hacia marzo de 2027 [R12].",
    "El Parlamento Europeo presentó su proyecto de informe conjunto el 11 de noviembre de 2026, lo debatirá en comisión el 1 de diciembre y prevé votarlo en comisión hacia marzo de 2027 y en el pleno en abril [R12][R92].")
setl(15, "### Lectura para la cadena de valor")
sub(16, "y el Grupo Esprinet aumentó sus ingresos", "y uno de los grandes mayoristas de la península, el Grupo Esprinet, aumentó sus ingresos")
setl(20, "| Mayoristas de valor | Orquestar catálogo por niveles, evidencia y servicios | Alta |")
setl(25, "## 2. El canal tecnológico ibérico y el papel del mayorista de valor")
sub(32, "Los mayoristas de valor, como V-Valley, Arrow,", "Los mayoristas de valor, como Arrow, V-Valley,")
setl(33, "### El mayorista de valor en cifras")
setl(34, "Los grandes grupos de distribución trabajan con cientos de fabricantes y decenas de miles de revendedores: el Grupo Esprinet, por ejemplo, declara más de 650 fabricantes y más de 31.000 revendedores en el sur de Europa [R47], y en 2025 facturó 1.765,4 millones de euros de ingresos brutos en España (+10 %) y 106 millones en Portugal (+47 %) [R37]. En el primer semestre de 2026 sus ingresos crecieron un 21 % en España y un 37 % en Portugal [R44]. En 2024, su división de valor aportó en torno al 25 % de la facturación y más del 60 % del EBITDA del grupo [R78]: el valor añadido es el motor de la rentabilidad del mayorista.")
setl(35, "Los mayoristas de valor amplían su catálogo con acuerdos recientes en ciberseguridad, observabilidad, infraestructura física, movilidad, energía digital y colocation preparada para IA [R46][R77], y crean unidades específicas de formación y acompañamiento en IA para sus partners [R45].")
sub(62, "A 13 de noviembre de 2026", "A 14 de noviembre de 2026")
sub(62, "En el Parlamento, el ponente Diego Solier ha apuntado que los requisitos podrían suavizarse y que se aclararán las reglas para empresas internacionales [R12].",
    "En el Parlamento, los ponentes presentaron el proyecto de informe conjunto el 11 de noviembre de 2026; el debate en comisión está previsto el 1 de diciembre, la votación en comisión a mediados de marzo de 2027 y la del pleno en abril [R92]. El borrador pide más inversión en infraestructura europea de nube e IA, más protección de sectores críticos, más compra pública a proveedores europeos y permisos más rápidos para centros de datos. Uno de los ponentes, Diego Solier, ha señalado que los requisitos podrían suavizarse y que se aclararán las reglas para empresas internacionales [R12].")
sub(64, "Para V-Valley,", "Para un mayorista de valor,")
setl(68, "| Proyecto de informe del Parlamento | 11 nov 2026 | Hecho |")
setl(82, "### Lectura para fabricantes, mayoristas e integradores")
sub(83, "Para V-Valley, que distribuye infraestructura de centro de datos y ha firmado acuerdos con Rittal, Huawei Digital Power y Templus [R46][R77], la ola",
    "Para los mayoristas de valor, que distribuyen infraestructura de centro de datos y cierran acuerdos con fabricantes de energía y climatización y con operadores de colocation [R46][R77], la ola")
sub(107, "Si V-Valley le entrega", "Si su mayorista le entrega")
sub(158, "que venden a través de V-Valley", "que venden a través del canal ibérico")
for n in (164, 187, 207, 252, 293, 355, 375, 417, 438, 609):
    s = ln(n)
    s = s.replace("Para V-Valley, que distribuye", "Para el mayorista de valor, que distribuye")
    s = s.replace("Para V-Valley,", "Para el mayorista de valor,")
    setl(n, s)
sub(207, "un terreno en el que ya ha incorporado fabricantes como Canonical o Trilio [R46]", "un terreno en el que los mayoristas ya incorporan fabricantes como Canonical o Trilio [R46]")
sub(227, "con el negocio de V-Valley", "con el negocio del mayorista de valor")
sub(227, "En Iberia, la unidad Innovexya de Esprinet nace precisamente para formar y acompañar a los partners en IA [R45].",
    "En Iberia, los mayoristas ya crean unidades específicas para formar y acompañar a los partners en IA [R45].")
sub(229, "V-Valley puede ofrecer", "El mayorista de valor puede ofrecer")
sub(267, "España no ha completado aún la transposición, que el sector espera para finales de 2026;",
    "España no ha completado aún la transposición: la Comisión la llevó al Tribunal de Justicia en julio de 2026 y, con la disolución de las Cortes, la ley queda para la próxima legislatura [R93];")
sub(273, "V-Valley, con un portfolio de ciberseguridad amplio y una unidad específica reforzada con Lidera Network [R87], puede",
    "Un mayorista de valor con un portfolio de ciberseguridad amplio y una unidad especializada puede")
sub(314, "pueden preparar con V-Valley", "pueden preparar con su mayorista")
sub(314, "Ullswater Investments, autor de este informe, ha participado", "El equipo autor de este informe ha participado")
setl(345, "España fue pionera en Europa al crear una autoridad nacional de supervisión de la IA, la AESIA. El Consejo de Ministros remitió a las Cortes el 26 de mayo de 2026 el Proyecto de Ley Orgánica para el buen uso y la gobernanza de la IA, que designaba a la AESIA como autoridad principal, regulaba entornos de pruebas y sanciones e incluía un título sobre el uso de la IA en el sector público estatal [R32]. El proyecto caducó con la disolución de las Cortes el 6 de octubre de 2026 (Real Decreto 806/2026), antes de las elecciones generales del 29 de noviembre [R93]. Hoy no hay ley española de IA: el AI Act se aplica directamente y la AESIA sigue funcionando, pero falta el régimen sancionador nacional. El próximo Gobierno tendrá que presentar un nuevo texto.")
setl(349, "El 24 de febrero de 2026 el Gobierno presentó la Hoja de Ruta para acelerar la Soberanía Digital, que sitúa la nube y los centros de datos como columna vertebral [R34]. El 27 de agosto de 2026 sometió a audiencia un proyecto de real decreto de centros de datos sostenibles que, para instalaciones de 1 MW o más, exigía que al menos el 80 % del consumo de cada hora estuviera respaldado por renovables de esa misma hora y que el operador estuviera establecido en la UE [R33]. Tras más de 600 alegaciones y un informe crítico de la CNMC del 22 de septiembre [R94], el texto revisado sube el umbral a 10 MW, permite una rampa del 80 % renovable horario hasta 2031 y concentra la soberanía en los centros que alojan sistemas públicos de categoría ALTA del ENS, cuyos datos deberán quedarse en la UE. El Consejo de Estado lo avaló en noviembre con cuatro cambios y el Gobierno prevé aprobarlo el 17 o el 24 de noviembre de 2026; al ser real decreto, no decayó con la disolución de las Cortes [R95]. Parte de la industria mantiene su rechazo; el Gobierno lo presenta como una forma de ordenar el crecimiento.")
setl(353, "Portugal tiene un sector TIC dinámico, con más de 13.000 empresas tecnológicas y unos 245.000 profesionales, y se consolida como centro de servicios cercano para empresas europeas [R76]. Para la distribución es el mercado de mayor crecimiento relativo: el Grupo Esprinet creció allí un 47 % en 2025 y un 37 % en el primer semestre de 2026 [R37][R44]. Portugal deberá designar su autoridad CADA, adoptar su estrategia de nube e IA y completar su propia transposición de NIS2.")
sub(356, "esquema de seguridad, autoridad de IA, hoja de ruta de soberanía", "esquema de seguridad, autoridad de IA, hoja de ruta de soberanía") if "hoja de ruta de soberanía" in ln(356) else None
setl(358, "| PLO de gobernanza de la IA (España) | Caducado (disolución de las Cortes, 6-10-2026) | Aplicación del AI Act y uso público de IA |")
setl(361, "| RD de centros de datos | Dictamen del Consejo de Estado (nov. 2026); aprobación prevista | Requisitos energéticos y de soberanía |")
setl(362, "| Portugal: autoridad y estrategia CADA | Tras la entrada en vigor | Mercado de mayor crecimiento relativo |")
sub(353, "Portugal tiene", "Portugal tiene")
sub(417, "con formación y certificación en la V-Valley Academy y en Innovexya.", "con formación y certificación en sus academias de partners.")
sub(430, "V-Valley subrayó la necesidad", "los mayoristas de valor subrayaron la necesidad")
setl(431, "### Los acuerdos de los mayoristas en este terreno")
setl(432, "En 2025 y 2026, los mayoristas de valor han reforzado su oferta de centro de datos con acuerdos con fabricantes de armarios y climatización, con proveedores de energía y refrigeración para centros de datos y con operadores de colocation preparada para IA en centros de datos regionales [R46][R77].")
setl(444, "| RD centros de datos | 80 % renovable horaria (≥ 10 MW, rampa hasta 2031) | Requisito de eficiencia |")
setl(445, "| Acuerdos de los mayoristas | Armarios, energía digital, colocation | Oferta de centro de datos |")
setl(490, "## 23. Impacto para los fabricantes que venden a través del canal")
sub(492, "El catálogo de V-Valley reúne", "El catálogo de un mayorista de valor reúne")
setl(509, "### Cómo puede ayudarles el mayorista")
sub(510, "V-Valley puede ofrecer", "El mayorista de valor puede ofrecer")
sub(523, "Los clientes de V-Valley son", "Los clientes del mayorista de valor son")
sub(541, "V-Valley puede ser la diferencia", "el mayorista de valor puede ser la diferencia")
setl(550, "## 25. El mayorista de valor como orquestador de soberanía")
setl(553, "### Cinco capacidades que el mayorista de valor ya tiene")
setl(554, "- Catálogo multifabricante en infraestructura, centro de datos, seguridad, cloud e IA, con cientos de fabricantes en los grandes grupos [R47].")
setl(556, "- Formación y certificación a través de academias de partners y de unidades específicas de IA [R45].")
sub(562, "(el acuerdo con Templus es un primer paso [R77])", "(los primeros acuerdos de mayoristas con operadores de colocation preparada para IA van en esa dirección [R77])")
sub(566, "organizar la oferta de V-Valley", "organizar la oferta del mayorista de valor")
setl(570, "### Por qué el mayorista de valor está bien situado")
sub(571, "V-Valley combina tamaño (grupo líder en el sur de Europa), especialización (la división de valor aporta la mayor parte del EBITDA [R78]),",
    "El mayorista de valor combina tamaño, especialización (en los grandes grupos, la división de valor aporta la mayor parte del EBITDA [R78]),")
sub(591, "- V-Valley:", "- Mayoristas de valor:")
sub(598, "| V-Valley, fabricantes alternativos, integradores |", "| Mayoristas de valor, fabricantes alternativos, integradores |")
setl(613, "La CADA exigirá perfiles que hoy escasean: arquitectos de nube soberana, especialistas en cumplimiento, auditores de cadena de software. Las academias de partners de los mayoristas y de los fabricantes pueden incorporar itinerarios específicos de soberanía, AI Act y CRA para el canal.")
sub(615, "Ullswater Investments trabaja en esta intersección", "Software in a Box, junto con Ullswater Investments, trabaja en esta intersección")
sub(618, "V-Valley (fichas)", "Mayorista de valor (fichas)")
sub(620, "| V-Valley e integradores |", "| Mayoristas de valor e integradores |")
sub(621, "| V-Valley y socios financieros |", "| Mayoristas de valor y socios financieros |")
sub(622, "| V-Valley Academy, Innovexya |", "| Academias de mayoristas y fabricantes |")
setl(661, "El requisito español de renovable horaria para centros de 10 MW o más, con rampa hasta 2031 [R33][R94], puede retrasar centros regionales que serían la plataforma natural de los servicios de nivel 2 y 3 del canal.")
setl(687, "- Formación compartida en el ecosistema (academias de mayoristas y fabricantes).")
setl(703, "### Hoja de ruta para el mayorista de valor")
sub(706, "ampliar a Portugal y a otros mercados del grupo.", "ampliar a Portugal y a otros mercados.")
setl(716, "| Año | Mayorista de valor | Fabricantes | Integradores |")
sub(720, "Extensión a Portugal y al grupo", "Extensión a Portugal y a otros mercados")
setl(729, "- El mayorista de valor está bien situado para ser el orquestador de la soberanía del canal ibérico: tiene catálogo, especialización, presencia en ambos países, formación y financiación.")
setl(730, "### Recomendaciones para los mayoristas de valor")
setl(735, "- Incorporar la soberanía a sus academias de partners.")
sub(748, "| V-Valley |", "| Mayorista de valor |")
setl(807, "| 26-5-2026 | España | Proyecto de Ley Orgánica de gobernanza de la IA remitido a las Cortes (caducado el 6-10-2026) |")
setl(818, "| 1-12-2026 | CADA | Debate del proyecto de informe en la comisión del Parlamento Europeo |")
setl(848, "### Mayorista de valor")
# Tabla de cifras de Esprinet (sección 18): se elimina
for n in range(393, 400): DEL.add(n)

# --- sustituciones globales restantes ---
out = []
for i, s in enumerate(L, 1):
    if i in DEL: continue
    s = s.replace("### Lectura para el ecosistema de V-Valley", "### Lectura para la cadena de valor")
    out.append(s)
txt = '\n'.join(out)

# Anexo B: hitos nuevos
txt = txt.replace("| 27-8-2026 | España | Audiencia del real decreto de centros de datos sostenibles |",
  "| 27-8-2026 | España | Audiencia del real decreto de centros de datos (umbral de 1 MW) |\n| 22-9-2026 | España | Informe de la CNMC sobre el real decreto de centros de datos |")
txt = txt.replace("| 5-10-2026 | España | Orden HAC/1028/2026 de la solución pública de factura electrónica |",
  "| 5-10-2026 | España | Orden HAC/1028/2026 de la solución pública de factura electrónica |\n| 6-10-2026 | España | Disolución de las Cortes (RD 806/2026): caduca el proyecto de ley de IA |\n| 26-10-2026 | España | Texto revisado del real decreto de centros de datos (10 MW) al Consejo de Estado |")
txt = txt.replace("| 1-11-2026 | HPE | Programa unificado HPE y Juniper en Partner Ready Vantage |",
  "| 1-11-2026 | HPE | Programa unificado HPE y Juniper en Partner Ready Vantage |\n| 11-11-2026 | CADA | Proyecto de informe conjunto del Parlamento Europeo |\n| Nov. 2026 | España | Dictamen del Consejo de Estado sobre el real decreto de centros de datos |")
txt = txt.replace("| 1-12-2026 | CADA | Debate del proyecto de informe en la comisión del Parlamento Europeo |",
  "| 17 o 24-11-2026 | España | Aprobación prevista del real decreto de centros de datos |\n| 29-11-2026 | España | Elecciones generales |\n| 1-12-2026 | CADA | Debate del proyecto de informe en la comisión del Parlamento Europeo |")
txt = txt.replace("| Fin 2026 | NIS2 (España) | Transposición prevista |", "| 2027 | NIS2 (España) | Transposición en la próxima legislatura |")
txt = txt.replace("| Mar. 2027 | CADA | Votación en comisión del Parlamento |",
  "| Mar. 2027 | CADA | Votación en comisión del Parlamento |\n| Abr. 2027 | CADA | Votación en el pleno del Parlamento |")
assert 'V-Valley' not in txt.split('\n## Referencias')[0].replace('Arrow, V-Valley,', '').replace('TD SYNNEX y V-Valley', '').replace('| V-Valley, Arrow', ''), [l for l in txt.split('\n') if 'V-Valley' in l][:5]
open('sb_es_raw.md', 'w', encoding='utf-8').write(txt)
print('ok')
