from ig import *
import sys
OUT = os.environ.get("IG_OUT", "ig")
os.makedirs(OUT, exist_ok=True)
only = set(int(a) for a in sys.argv[1:])
def go(n): return not only or n in only
def fin(s, y, src, n): source(s, y, src); save(s, f"ig{n:02d}", OUT, y + 22)

# 01 Resumen: KPIs + barras
if go(1):
    s=SVG(); y=header(s,1,"Resumen ejecutivo","La CADA llega a un canal ibérico que crece: la soberanía se convertirá en la próxima especialización de valor","Cifras clave de la propuesta COM(2026) 502 y del canal tecnológico en España y Portugal")
    y=section_label(s,y+4,"La norma")
    y=kpis(s,y,[("4","Niveles de garantía de soberanía","Nivel 1 por autoevaluación; niveles 2–4 con auditoría independiente"),
       ("×3","Capacidad de centros de datos","Objetivo de la UE en cinco a siete años"),
       ("25 %","Compra innovadora a pymes","Objetivo para la nube e IA pública (art. 33)")],h=118)
    y=section_label(s,y+4,"El canal")
    y=kpis(s,y,[("+15,1 %","Mayoristas en España 2025","Crecimiento del negocio mayorista según CONTEXT"),
       ("+21 %","Esprinet España 1S 2026","866,2 M€ de ingresos; Portugal +37 %"),
       ("650+","Fabricantes en el Grupo Esprinet","Y más de 31.000 revendedores en el sur de Europa")],h=118,accent_idx=1)
    y=section_label(s,y+4,"Peso del canal en el gasto TI (Omdia, 2026)")
    y=bars(s,y,[("Ciberseguridad vía partners",91.7),("Gasto TI de pymes EMEA vía partners",82),("Gasto TI total vía partners",66.7)],100,"%",accent=0)
    y=band(s,y+6,"Lectura","El nivel se otorga a cada servicio, pero la evidencia está repartida entre fabricante, mayorista e integrador: la soberanía la acredita la cadena.")
    fin(s,y,"[R1] COM(2026) 502; [R6] CONTEXT vía Newsbook; [R7] Esprinet 1S 2026; [R16] Esprinet; [R10][R11][R12] Omdia.",1)

# 02 Canal: flujo + barras
if go(2):
    s=SVG(); y=header(s,2,"El canal ibérico","La tecnología profesional llega al cliente por una cadena en dos niveles, y el mayorista de valor ocupa el eslabón que ve a todos","Funciones de cada eslabón y peso de un gran grupo de distribución en la península")
    y=flow(s,y+8,[("Fabricante","Producto, programa de partners, incentivos, soporte avanzado"),
       ("Mayorista de valor","Preventa, integración multifabricante, formación, financiación, logística UE"),
       ("Integrador / MSP","Proyecto, implantación, operación y servicios gestionados"),
       ("Cliente final","Industria, servicios, sector público y pymes")],accent=1,bh=120)
    y=section_label(s,y+20,"Ingresos brutos del Grupo Esprinet (M€)")
    y=bars(s,y,[("España 2025",1765.4),("España 1S 2026",866.2),("Portugal 2025",106.0),("Portugal 1S 2026",60.2)],1900," M€",accent=0)
    y=section_label(s,y+6,"Economía del modelo")
    y=table(s,y,["Indicador","Valor","Fuente"],[["Margen del mayorista en hardware","3–8 %","Unifyr"],["Márgenes combinados del canal","35–50 % del precio final","Unifyr"],["División de valor de un gran grupo (2024)","≈ 25 % de la facturación; > 60 % del EBITDA","Newsbook"],["Partners pymes en España","98 % (Dell)","Newsbook"]],[300,250,162],accent_col=1)
    y=band(s,y,"Lectura","Con márgenes estrechos, cada nueva obligación debe convertirse en servicio facturable o en ventaja comercial para el canal.")
    fin(s,y,"[R17] Esprinet FY2025; [R7] 1S 2026; [R8] Unifyr; [R18] Newsbook; [R13] Newsbook/Gadesoft.",2)

# 03 Calendario: timeline + tabla
if go(3):
    s=SVG(); y=header(s,3,"Qué es la CADA","Cinco títulos, 48 artículos y dos años de ventana antes de la aplicación efectiva en 2029","Hitos de la tramitación y plazos que se activan con la entrada en vigor")
    y=timeline(s,y+10,[("3-6-2026","Propuesta COM(2026) 502","hecho"),("11-11-2026","Proyecto de informe del Parlamento","hecho"),
      ("Mar 2027","Votación en comisión; pleno en abril","previsto"),("4T 2027","Objetivo de acuerdo político","escenario"),
      ("2028","Publicación y entrada en vigor","escenario"),("2029","Aplicación general","escenario"),("2029–30","Primeras licitaciones por niveles","escenario")],h=230)
    y=section_label(s,y+10,"Plazos desde la entrada en vigor")
    y=table(s,y,["Obligación","Plazo","Artículo"],[["Zonas de aceleración de centros de datos","6 meses","10"],["Estrategia nacional de nube e IA","12 meses","7"],["Autoridades nacionales competentes","12 meses","25"],["Evaluación de riesgos del sector público","12 meses; luego cada 2 años","29"],["Migración al nivel exigido","Máximo 12 meses","29"],["Revisión de los Anexos II y III","Cada 18 meses","16"]],[340,230,142],accent_col=1)
    y=band(s,y,"Ventana","2027: diagnóstico y oferta. 2028: evidencia y alianzas. 2029: primeras licitaciones con requisitos CADA.")
    fin(s,y,"[R1] COM(2026) 502; [R2] OEIL; [R4] MLex. Fechas desde 2027: escenario base, ilustrativo.",3)

# 04 Títulos II y III: filas numeradas
if go(4):
    s=SVG(); y=header(s,4,"Títulos II y III","La CADA convierte la soberanía en megavatios: la primera ola de demanda será de infraestructura","Medidas de liderazgo y de capacidad y lo que significan para fabricantes, mayoristas e integradores")
    y=rows_numbered(s,y,[("Iniciativas de liderazgo (arts. 3–6)","Pilas cloud abiertas, edge, IA industrial y de frontera; financiadas con Horizonte Europa y Europa Digital.","Proyectos financiados"),
      ("Centros de IA (art. 5)","Red sobre los polos europeos de innovación digital para acercar la IA a pymes y administraciones.","Canal pyme"),
      ("Estrategia nacional (art. 7)","En 12 meses: planes de adopción y compra; apoyo a pilas de hardware y software abiertos.","Demanda pública"),
      ("Zonas de aceleración (art. 10)","Al menos una por Estado en 6 meses; permisos en máximo 12 meses para proyectos prioritarios.","Infraestructura CPD",True),
      ("Proyectos estratégicos (art. 14)","2 de 5 criterios: funciones públicas, sostenibilidad, red, hardware fabricado en la UE, escasez de cómputo.","Hardware europeo",True),
      ("Anexo I: grandes retos","PUE medio de 1,15 y utilización de servidores en torno al 50 % como metas de eficiencia.","Equipos eficientes")])
    y=section_label(s,y+8,"Qué compra un nuevo centro de datos")
    y=kpis(s,y,[("Energía","SAI y distribución","Alimentación, respaldo y gestión"),("Frío","Refrigeración","Aire, líquido, puertas refrigeradas"),("IT","Servidores y red","Cómputo, GPU, almacenamiento")],h=100)
    y=band(s,y,"Lectura","La cadena que suministre energía, refrigeración, racks y servidores eficientes a los nuevos centros europeos capturará la primera ola de valor.")
    fin(s,y,"[R1] COM(2026) 502; [R22] Freshfields/Jones Day; [R19] prensa de mayoristas.",4)

# 05 Niveles: ladder
if go(5):
    s=SVG(); y=header(s,5,"Marco de soberanía","Cuatro niveles de garantía: el salto crítico para el canal está entre el nivel 1 y el nivel 2","Requisitos acumulativos del Anexo II y forma de acreditación")
    y=ladder(s,y+4,[("Nivel 1","Autoevaluación; válida en toda la UE para pymes",["Proveedor establecido en la UE","Datos, metadatos y telemetría en la UE","Subcontratistas declarados","Ciberseguridad estado del arte","Soporte externo sin perder autonomía","Garantía sobre vulnerabilidades"],False),
      ("Nivel 2","Auditoría independiente",["Infraestructura y personal en la UE","Certificado UE «sustancial»","Soporte solo desde la UE","Datos no entrenan IA de terceros","SBOM y control de funciones remotas","Separación de la matriz no UE"],True),
      ("Nivel 3","Auditoría independiente",["Personal con ciudadanía UE","Habilitación si procede","Sin control de tercer país","Excepción: país reconocido","Acceso razonable al código","Certificado «sustancial»"],False),
      ("Nivel 4","Auditoría independiente",["Sin control de tercer país","Datos sensibles siempre en la UE","Certificado UE «alto»","Control efectivo del software","Diseño y evolución sin terceros","Casos más sensibles"],False)],h=112)
    y=section_label(s,y+8,"Quién aporta lo que exige el nivel 2")
    y=table(s,y,["Requisito del nivel 2","Fabricante","Mayorista","Integrador"],[["Soporte exclusivamente desde la UE","Soporte 2.º y 3.er nivel","Soporte 1.er nivel y repuestos","Operación del servicio"],["Cadena de software (SBOM)","Genera el SBOM","Normaliza y distribuye","Incorpora al expediente"],["Datos no entrenan IA ajena","Cláusula contractual","Traslada condiciones","Contrato con el cliente"]],[220,164,164,164])
    y=band(s,y,"Lectura","El nivel se otorga al servicio, pero se gana en la cadena: sin la parte del fabricante, el integrador no pasa del nivel 1.")
    fin(s,y,"[R1] COM(2026) 502, arts. 16–20 y Anexo II; reparto de tareas: análisis propio.",5)

# 06 Evidencia por actor: heatmap
if go(6):
    s=SVG(); y=header(s,6,"Anexo III","La evidencia de soberanía está repartida por la cadena: el fabricante concentra las pruebas más difíciles","Peso de cada actor en los criterios A–I del Anexo III (alto = aporta la prueba principal)")
    rows=["A · Establecimiento en la UE","B · Infraestructura y activos","C · Localización de datos y telemetría","D · Ciudadanía del personal","E · Certificación de ciberseguridad","F · IA de terceros países","G · Propiedad y control","H · Soporte desde la UE","I · Cadena de software"]
    vals=[[1,1,3],[2,2,3],[3,1,3],[2,1,2],[3,1,2],[3,1,1],[3,1,1],[3,2,1],[3,2,1]]
    y=heatmap(s,y+6,rows,["Fabricante","Mayorista","Integrador"],vals,legend=("Bajo","Medio","Alto"),labw=300,rh=34,accent_row=7,scale="weight")
    y=section_label(s,y+6,"Propuesta: ficha de soberanía por familia de producto")
    y=flow(s,y,[("Fabricante","Aporta datos de telemetría, soporte, control y SBOM"),("Mayorista","Normaliza al lenguaje del Anexo III y publica en el portal"),("Integrador","Reutiliza en el expediente de cada servicio"),("Auditor / autoridad","Verifica una evidencia homogénea")],accent=1,bh=96)
    y=band(s,y+20,"Lectura","Una ficha mantenida por el mayorista puede ahorrar a cada integrador semanas de trabajo por servicio y convertirse en estándar del canal ibérico.")
    fin(s,y,"[R1] Anexo III; asignación por actor y ficha de soberanía: análisis propio.",6)

# 07 Reconocimiento: flujo + tabla
if go(7):
    s=SVG(); y=header(s,7,"Reconocimiento","Un reconocimiento de nivel 2–4 puede resolverse en unos cuatro meses, pero la evidencia tarda de seis a doce","Procedimiento del artículo 17 y papel de cada actor")
    y=flow(s,y+8,[("Preparar evidencia","Proveedor con datos de fabricante y mayorista · 6–12 meses (est.)"),("Auditoría","Organismo independiente · niveles 2–4"),("Solicitud","Autoridad del Estado de establecimiento"),("Evaluación","60 días desde la admisión"),
       ("Revisión de otros Estados","60 días"),("Alegaciones","30 días antes de un rechazo"),("Repositorio central","Inclusión del servicio reconocido"),("Cambios materiales","Comunicación continua (art. 23)")],accent=0,bh=92)
    y=section_label(s,y+20,"Candidatas a autoridad competente")
    y=table(s,y,["País","Candidatos naturales","Base"],[["España","Centro Criptológico Nacional o unidad del Ministerio para la Transformación Digital","ENS y certificación"],["Portugal","Centro Nacional de Ciberseguridad","Ciberseguridad nacional"]],[110,420,182])
    y=band(s,y,"Riesgo","Si 27 autoridades arrancan a la vez con pocos auditores, los primeros 12–18 meses pueden generar colas: los expedientes completos y tempranos evitarán el atasco.")
    fin(s,y,"[R1] arts. 17–28; plazos de preparación y candidatas: análisis propio.",7)

# 08 Evaluación de riesgos: árbol + tabla
if go(8):
    s=SVG(); y=header(s,8,"Demanda pública","La evaluación de riesgos del artículo 29 será el mapa del mercado público cloud","Cómo se decide el nivel exigido en cada compra (arts. 29–33)")
    y=decision_tree(s,y+8,"¿Actividad de orden público según la evaluación?","Niveles 2, 3 o 4","Nivel 1 como mínimo",
      ["Sanidad, justicia, seguridad, tributos, defensa","Migración en máximo 12 meses","Derogaciones: sin servicio, licitación desierta o coste desproporcionado"],
      ["Gestión administrativa ordinaria","Autoevaluación del proveedor","Declaración pyme válida en toda la UE"])
    y=section_label(s,y+6,"Reglas que añaden puntos al canal")
    y=table(s,y,["Regla","Contenido","Beneficiario"],[["Valor añadido UE (art. 32)","Tecnología y hardware de la UE; hasta 15 de 120 puntos (orientativo)","Fabricantes con producción o desarrollo UE"],["Objetivo pyme (art. 33)","25 % de la compra innovadora a pymes innovadoras","Integradores pymes"],["Sector privado (art. 31)","Evaluación voluntaria en sectores NIS2; posible obligación","Integradores de clientes críticos"]],[190,320,202],accent_col=2)
    y=band(s,y,"Lectura","El canal que lea las evaluaciones de riesgo antes que la competencia llegará al pliego con la configuración ya validada.")
    fin(s,y,"[R1] arts. 29–33; [R3] activeMind.",8)

# 09 Contratación común, federación, código abierto: tarjetas
if go(9):
    s=SVG(); y=header(s,9,"Compra común y código abierto","La compra centralizada concentra volumen y el código abierto lo redistribuye: el canal debe estar en ambos","Instrumentos de los artículos 33–44 y su efecto en fabricantes, mayoristas e integradores")
    y=cards(s,y+6,[("Central de compras (37–40)","Grandes lotes con tarifa ≈ 2 %; ofertas agregadas multifabricante.","Favorece la escala; las pymes quedan como subcontratistas."),
      ("EuroCloud Federation (34–36)","Servicios sobre infraestructura pública compartida: migración, aplicaciones, soporte.","Parte de la infraestructura deja de contratarse al mercado."),
      ("Código abierto (41–44)","Soporte, integración y seguridad de soluciones abiertas; catálogo UE.","Obligación de fomento, no de preferencia."),
      ("Objetivo pyme (33)","25 % de la compra innovadora para pymes innovadoras.","Exige demostrar innovación."),
      ("Valor añadido UE (32)","Puntos para tecnología y hardware fabricados en la UE.","Criterio no decisivo."),
      ("Rol del mayorista","Agregar fabricantes, financiar y apoyar lotes regionales.","Requiere capacidad de licitación.")],cols=2,h=150,accent=5,tags=("GANA","FRENO"))
    y=band(s,y+4,"Lectura","Agregador en los grandes lotes y especialista en soluciones abiertas con soporte: dos posiciones complementarias para el canal.")
    fin(s,y,"[R1] arts. 32–44; [R32] CNLL; [R31] MBB; [R19] prensa de mayoristas.",9)

# 10 AI Act vs CADA: dos lados
if go(10):
    s=SVG(); y=header(s,10,"AI Act y CADA","La IA soberana se vende por el canal: servidores, GPU, almacenamiento y software ejecutados en la UE","Dos normas complementarias sobre la misma cadena de valor")
    y=two_sides(s,y+6,("AI Act · qué puede hacer la IA",TEAL,["Clasificación por riesgo de cada sistema","Alto riesgo: 2-12-2027 tras el Omnibus","Documentación técnica, datos, supervisión humana","Oficina de IA con poderes desde 2-8-2026"]),
      ("CADA · dónde se ejecuta y bajo qué control",NAVY,["Nivel 2+: datos no entrenan IA de terceros países","Criterio F: MLOps en la UE, model cards, linaje","API de IA para orden público: nivel 2 o superior","Favorece modelos abiertos en infraestructura UE"]),
      "IA doblemente conforme: modelos en infraestructura europea con nivel acreditado y documentación AI Act incluida.",h=150)
    y=section_label(s,y+6,"Configuración de referencia de IA local (propuesta)")
    y=stack(s,y,[("Aplicación","Asistentes, visión artificial, clasificación documental","INTEGRADOR"),("Modelos","Modelos abiertos, orquestación,, MLOps en la UE, registros","SOFTWARE"),("Cómputo","Servidores con aceleradores, almacenamiento rápido, red","FABRICANTE"),("CPD","Centro de datos local, regional o colocation preparado para IA","OPERADOR"),("Integración","Configuración validada, financiación, formación","MAYORISTA")],accent=4)[0]
    y=band(s,y+4,"Lectura","Lo que el AI Act pide documentar sobre datos y modelos es, en buena parte, lo que la CADA pide demostrar sobre dónde se procesan.")
    fin(s,y,"[R33] AI Act; [R34] Omnibus; [R1] Anexo III F; [R21] El Español; [R35] TD SYNNEX/NVIDIA.",10)

# 11 Data Act: timeline + flujo de migración
if go(11):
    s=SVG(); y=header(s,11,"Data Act","El Data Act es la salida de emergencia que hace creíbles los requisitos de la CADA: las migraciones serán negocio del canal","Fechas del cambio de proveedor y anatomía de una migración conforme")
    y=timeline(s,y+10,[("12-9-2025","Aplicación general del Data Act","hecho"),("12-1-2027","Cambio de proveedor sin cargos","previsto"),("12-9-2027","Aplicación a contratos anteriores","previsto"),("2029","Evaluaciones de riesgo CADA","escenario"),("2029–30","Migraciones en máximo 12 meses","escenario")],h=210)
    y=section_label(s,y+10,"Migración conforme: quién hace qué")
    y=flow(s,y,[("Inventario","Datos, metadatos y personalizaciones exportables"),("Destino","Infraestructura privada, regional o soberana"),("Contratos","Cláusulas estándar cloud del Data Act"),("Ejecución","Portabilidad, pruebas y documentación"),
       ("Hardware","Servidores, almacenamiento y protección de datos"),("Financiación","Renting o pago por uso vía mayorista"),("Expediente","Evidencia para el nivel exigido"),("Operación","Servicio gestionado posterior")],accent=5,bh=86)
    y=band(s,y+20,"Riesgo","Si muchas administraciones migran a la vez en 2029–2030, la capacidad de integradores y centros de destino puede saturarse: planificar pronto.")
    fin(s,y,"[R37] Data Act; [R38] cláusulas tipo; [R1] art. 29; ola de migraciones: análisis propio.",11)

# 12 Ciberseguridad: tabla + matriz de obligaciones
if go(12):
    s=SVG(); y=header(s,12,"Ciberseguridad","El CRA convierte al mayorista en un eslabón de control de conformidad, y la CADA depende de un certificado que aún no existe","Normas de ciberseguridad que sostienen la CADA y obligaciones por eslabón")
    y=table(s,y+4,["Norma","Estado (nov. 2026)","Exigencia relevante"],[["CADA niveles 2–4","Propuesta","Certificado UE «sustancial» o «alto»"],["EUCS","Bloqueado","Base técnica del certificado cloud"],["CSA2","Propuesta (ene. 2026)","Proveedores de alto riesgo; multas hasta 7 %"],["NIS2","Transposición pendiente en España","Cadena de suministro y notificación"],["CRA","Notificación desde 11-9-2026; resto 11-12-2027","SBOM; obligaciones de importador y distribuidor"],["ENS","Vigente (RD 311/2022)","Llave del mercado público español"]],[170,240,302],accent_col=2)
    y=section_label(s,y+4,"Obligaciones del CRA por eslabón")
    y=heatmap(s,y,["Evaluación de conformidad y marcado CE","Documentación técnica y SBOM","Verificar marcado y documentación antes de vender","No comercializar productos no conformes","Informar de riesgos al fabricante y autoridades"],["Fabricante","Importador","Distribuidor"],[[3,2,1],[3,2,1],[0,3,3],[3,3,3],[2,3,3]],legend=("Bajo","Medio","Alto"),labw=330,rh=32,scale="weight")
    y=band(s,y,"Lectura","Un único marco de controles ENS + NIS2 + CRA + CADA, mantenido en el canal, reduce el coste para fabricantes, mayorista e integradores.")
    fin(s,y,"[R41] NIS2; [R40] CSA2/EUCS; [R44] CRA; [R45] DEKRA; [R43] Newsbook.",12)

# 13 DORA, DMA y programas: filas numeradas
if go(13):
    s=SVG(); y=header(s,13,"DORA, DMA y programas cloud","Regulación y fabricantes empujan en la misma dirección: el negocio cloud se concentra en distribuidores con escala y catálogo alternativo","Movimientos de 2025–2026 que cambian la venta de nube a través del canal")
    y=rows_numbered(s,y,[("DORA (nov. 2025)","19 proveedores TIC críticos designados; cláusulas de localización, auditoría y salida en el sector financiero.","Banca y seguros"),
      ("DMA (jun. 2026)","Conclusión preliminar: AWS y Azure deben ser guardianes de acceso; interoperabilidad y licencias.","Más opciones de despliegue"),
      ("Microsoft CSP","Umbrales de 1 M$ para partners directos y 30 M$ para distribuidores.","Concentración",True),
      ("Microsoft Marketplace","Resale enabled offers (nov. 2025) y ofertas multiparte en 30 mercados europeos (may. 2026).","Venta vía canal",True),
      ("Broadcom / VMware","Cierre del programa VCSP para buena parte de los partners europeos (ene. 2026); queja de CISPE.","Demanda de alternativas"),
      ("Marketplaces en 2030","Los partners generarán el 59 % de las ventas en marketplaces de hiperescalares.","Oportunidad de software")])
    y=band(s,y+6,"Lectura","El distribuidor con escala para cumplir los umbrales y con catálogo alternativo de virtualización y nube privada gana relevancia.")
    fin(s,y,"[R46] DORA; [R47] DMA; [R48] CSP; [R49][R50] Marketplace; [R51] Broadcom; [R52] Omdia.",13)

# 14 Espacios de datos: stack
if go(14):
    s=SVG(); y=header(s,14,"Espacios de datos","Cada participante en un espacio de datos necesita un nodo: servidor, almacenamiento, seguridad y conector, desplegados por el canal","Piezas de la estrategia europea de datos y su traducción en infraestructura")
    y=stack(s,y+6,[("Data Union Strategy","Prioridad política; Data Labs con AI Factories; 100 M€ para espacios de datos desde 2026","POLÍTICA"),
      ("Simpl","Middleware abierto de la Comisión para federaciones cloud-edge y espacios de datos","PLATAFORMA"),
      ("IDSA · Gaia-X","Eclipse Dataspace, Dataspace Protocol, conectores y marco de confianza con credenciales verificables","ESTÁNDARES"),
      ("EHDS","Espacio sanitario: actos de ejecución antes del 26-3-2027; probable nivel 2+","SECTOR"),
      ("Nodo","Del participante: servidor en el borde, almacenamiento seguro, identidad, monitorización y operación","CANAL")],accent=4)[0]
    y=section_label(s,y+8,"Sectores con demanda de nodos y clientes del canal")
    y=kpis(s,y,[("Industria","Datos de producción","Mantenimiento predictivo, trazabilidad"),("Salud","EHDS","Entornos de tratamiento seguro"),("Logística","Movilidad y cadena","Trazabilidad y huella"),("Energía","Redes y consumo","Flexibilidad y eficiencia"),("Economía circular","Residuos","Pasaporte de producto"),("Contratación","Compra pública","Datos de licitación")],h=96,accent_idx=1)
    y=band(s,y,"Lectura","Los espacios de datos son la versión «de datos» de la soberanía de la CADA: federación y control en origen, sobre infraestructura del canal.")
    fin(s,y,"[R53] Data Union Strategy; [R55] EHDS; [R54] Simpl; [R30] IDSA.",14)

# 15 Normativa de producto: heatmap
if go(15):
    s=SVG(); y=header(s,15,"Normativa de producto","El canal ya gestiona cumplimiento a escala: la CADA añade una columna más a la ficha de cada referencia","Carga de cada norma por eslabón de la cadena")
    y=heatmap(s,y+6,["RAEE (RD 110/2015)","Ecodiseño servidores (2019/424)","CRA","Factura electrónica y VERI*FACTU","Data Act (productos conectados)","CADA (evidencia de soberanía)"],["Fabricante","Mayorista","Integrador","Cliente"],
      [[3,2,1,1],[3,1,1,0],[3,3,2,1],[2,2,2,3],[3,1,2,2],[3,2,3,2]],labw=270,rh=36,accent_row=5,scale="weight")
    y=section_label(s,y+6,"Hitos de producto")
    y=table(s,y,["Norma","Obligación principal","Fecha"],[["RAEE","Registro, declaración y financiación; recogida por el distribuidor","Vigente"],["Ecodiseño 2019/424","Eficiencia, información y borrado seguro; en revisión","Vigente / revisión"],["CRA","SBOM y obligaciones de importador y distribuidor","11-12-2027"],["RD 238/2026","Factura electrónica B2B; VERI*FACTU","Oct. 2028"],["Reacondicionados","PC reacondicionados +7 % en el 4T 2025 (5 grandes mercados)","Tendencia"]],[170,400,142])
    y=band(s,y,"Lectura","Ofrecer en un único paquete la conformidad RAEE, ecodiseño, CRA y CADA reduce la fricción de venta para fabricantes e integradores.")
    fin(s,y,"[R56] ERP España; [R57] Comisión; [R44][R45] CRA; [R60] CMS; [R59] Newsbook/CONTEXT.",15)

# 16 España y Portugal: dos lados
if go(16):
    s=SVG(); y=header(s,16,"España y Portugal","La península puede ser un mercado temprano de la CADA: tiene esquema de seguridad, autoridad de IA y un canal que crece","Instrumentos nacionales y señales de mercado en los dos países")
    y=two_sides(s,y+6,("España",NAVY,["AESIA; la ley de IA caducó con la disolución de las Cortes","ENS (RD 311/2022): llave del mercado público","Hoja de Ruta de Soberanía Digital (feb. 2026)","RD de centros de datos: 80 % renovable horaria (≥ 10 MW)","Kit Digital: el canal como vehículo de programas","Esprinet España: +21 % en el 1S 2026"]),
      ("Portugal",TEAL,["Más de 13.000 empresas TIC","Unos 245.000 profesionales TIC","Centro de servicios cercano para Europa","Autoridad CADA y estrategia por designar","NIS2 en transposición","Esprinet Portugal: +47 % en 2025, +37 % en 1S 2026"]),
      "Una misma organización en ambos países permite al mayorista ofrecer configuraciones válidas para los dos marcos nacionales.",h=175)
    y=section_label(s,y+6,"Instrumentos españoles y su relación con la CADA")
    y=table(s,y,["Instrumento","Estado","Relación con la CADA"],[["PLO de IA","Caducado (6-10-2026)","IA en el sector público"],["ENS","Vigente","Base del reconocimiento"],["RD centros de datos","Consejo de Estado (nov. 2026)","Energía y soberanía"],["Estrategia nube e IA","Tras la CADA","Planes de compra"]],[200,220,292])
    y=band(s,y,"Lectura","Certificación ENS de productos y servicios, seguimiento de la estrategia nacional y presencia en ambos países: las tres palancas ibéricas.")
    fin(s,y,"[R61][R63][R62] España; [R66] Red.es; [R67] AICEP; [R17][R7] Esprinet; [R42][R65] actualización 14-11-2026.",16)

# 17 Mercado cloud: barras
if go(17):
    s=SVG(); y=header(s,17,"Mercado cloud","La dependencia de tres hiperescaladores abre un segmento soberano donde el hardware y los servicios del canal recuperan protagonismo","Cuotas, demanda soberana y alternativas de despliegue")
    y=section_label(s,y+4,"Cuota del mercado cloud europeo")
    y=bars(s,y,[("Proveedores UE, 2017",29),("Proveedores UE, 2022",15),("Tres hiperescaladores no UE",70)],100,"%",accent=1)
    y=section_label(s,y+6,"Gasto europeo en IaaS soberana (miles de millones de dólares, Gartner)")
    y=bars(s,y,[("2025",6.9),("2026 (previsión)",12.6),("2027 (previsión)",23.1)],25," MM$",accent=2)
    y=section_label(s,y+6,"Dónde se construye la soberanía")
    y=table(s,y,["Modelo","Ejemplos","Papel del canal"],[["Nube privada del cliente","Virtualización, almacenamiento, protección de datos","Venta e implantación completa"],["Nube regional y colocation","Operadores regionales de colocation","Infraestructura y servicios"],["Infraestructura como servicio","GreenLake, APEX, TruScale","Venta por consumo"],["Hiperescalar con operación UE","S3NS, Bleu, Delos","Servicios sobre la plataforma"]],[200,270,242])
    y=band(s,y,"Lectura","La CADA fragmenta la infraestructura, y la fragmentación aumenta el valor de quien sabe orquestarla.")
    fin(s,y,"[R1] memoria; [R47] Synergy; [R68] Gartner vía CSA; [R20] colocation para IA.",17)

# 18 Distribución: KPIs + tabla
if go(18):
    s=SVG(); y=header(s,18,"Distribución TI","El canal ibérico crece por encima de Europa, pero la cuota se gana con especialización, no con volumen","Indicadores de la distribución en España, Portugal y Europa (2025–2026)")
    y=kpis(s,y+4,[("+15,1 %","Mayoristas España 2025","CONTEXT"),("+2,1 %","Distribución Europa 2026","Previsión de CONTEXT"),("+21 %","Esprinet España 1S 2026","Gran mayorista ibérico"),
       ("66,7 %","Gasto TI vía partners 2026","Desde el 70,1 % en 2025 (Omdia)"),("30 %","Partners que cambiarán de forma","Hasta 2030 (Canalys Forum EMEA)"),(">80 %","Ejecución con distribución","Capacidad de salida al mercado (GTDC)")],h=112,accent_idx=2)
    y=section_label(s,y+6,"Lo que priorizan los fabricantes de su distribuidor (GTDC, 2026)")
    y=bars(s,y,[("Visibilidad del retorno",88),("Alineamiento estratégico",85),("Reclutamiento y capacitación de partners",83)],100,"%",accent=2)
    y=band(s,y+6,"Lectura","La CADA da al canal una razón regulatoria, comprensible para el cliente, para acelerar su paso hacia servicios y especialización.")
    fin(s,y,"[R6] CONTEXT; [R71] CONTEXT; [R21] El Español; [R10] Omdia; [R73] Canalys; [R75] GTDC.",18)

# 19 Programas: tabla
if go(19):
    s=SVG(); y=header(s,19,"Programas de fabricante","2026 es el año de rediseño de los programas de partners: la soberanía será la próxima competencia","Cambios de 2025–2026 y su implicación para el canal ibérico")
    y=table(s,y+4,["Fabricante","Cambio","Implicación"],[["HPE","Partner Ready Vantage unifica HPE y Juniper desde 1-11-2026; más productos solo vía canal","Un programa; ~90 % de oportunidades en España las identifica un partner"],["Cisco","Cisco 360 (feb. 2026): Partner y Preferred Partner; medición del valor","Especialización en IA segura"],["Google Cloud","Partner Network: Select, Premier, Diamond; competencias","Recompensa la contribución validada"],["Microsoft","Umbrales CSP; venta por marketplace","Concentración en distribuidores con escala"],["Dell · Lenovo · HP","Programas 2026 orientados a IA, centro de datos y renovación","Más servicios y especialización"],["Broadcom","Cierre de VCSP en Europa","Demanda de alternativas y migración"]],[140,310,262],accent_col=0)
    y=section_label(s,y+4,"Tendencias comunes")
    y=kpis(s,y,[("Menos niveles","Más competencias","Cisco, Google, HPE"),("Valor","Ciclo de vida del cliente","Incentivos ligados a resultados"),("Servicios","MSP e IA","Nuevas especializaciones")],h=100)
    y=band(s,y,"Previsión","Cuando la CADA se aplique, los fabricantes añadirán competencias de «despliegue soberano»; el mayorista que la estandarice primero marcará el formato.")
    fin(s,y,"[R77] HPE; [R78] Newsbook; [R79] Cisco; [R80] Google; [R48] Microsoft; [R81] Dell; [R51] Broadcom; previsión: análisis propio.",19)

# 20 Centros de datos: KPIs + flujo
if go(20):
    s=SVG(); y=header(s,20,"Centros de datos","Cada megavatio nuevo en la península se traduce en energía, refrigeración, racks, servidores y servicios del canal","Inversión prevista y cadena de compra de un centro de datos")
    y=kpis(s,y+4,[("439 MW","Capacidad instalada","España, 2025 (Spain DC)"),("66.900 M€","Inversión hasta 2030","Previsión de Spain DC"),("16.000+","Empleos previstos","Hasta 2030"),
       ("80 %","Renovable horaria","RD para centros ≥ 10 MW (rampa a 2031)"),("1,15","PUE medio objetivo","Anexo I de la CADA"),("≈ 68 TWh","Consumo de CPD en la UE","2024; casi doble hacia 2030")],h=110,accent_idx=1)
    y=section_label(s,y+6,"Cadena de compra de un centro de datos")
    y=flow(s,y,[("Energía","SAI, distribución, energía digital"),("Refrigeración y racks","Armarios y climatización"),("Cómputo y almacenamiento","Servidores, GPU, almacenamiento"),("Colocation regional","Operadores regionales, preparada para IA")],accent=3,bh=92)
    y=band(s,y+20,"Lectura","La combinación de infraestructura física, IT, colocation y financiación permite ofrecer centros de datos «llave en mano» a operadores regionales e integradores.")
    fin(s,y,"[R82] Spain DC vía Forbes; [R63] RD; [R1] Anexo I; [R58] eficiencia; [R19][R20] prensa de mayoristas.",20)

# 21 Precedentes: tarjetas
if go(21):
    s=SVG(); y=header(s,21,"Precedentes","En todos los precedentes ganaron consorcios: operador, tecnología y servicios, el tipo de alianza que un mayorista puede facilitar","Lo que anticipan la Comisión, Francia y Alemania")
    y=cards(s,y+6,[("Comisión Europea · SEAL 0–4","180 M€; 4 adjudicatarios (SEAL-3 y SEAL-2); la soberanía se puntúa.","Ningún proveedor alcanzó SEAL-4."),
      ("Francia · SecNumCloud","Origen de los niveles 3–4; obligación legal (Ley SREN) para datos sensibles.","Excluye a proveedores con control extranjero."),
      ("Alemania · Deutschland-Stack","250 M€ para nube federal de IA con pilas abiertas.","Sin hiperescaladores de EE. UU. en los ganadores."),
      ("Alemania · Delos","Tecnología Microsoft operada en Alemania: nivel intermedio.","No alcanza los niveles máximos.")],cols=2,h=158,accent=0)
    y=section_label(s,y+4,"Lecciones para el canal")
    y=rows_numbered(s,y,[("La soberanía se mide","Los compradores puntuarán la evidencia.","Evidencia"),("El nivel 4 será escaso","Casi ningún servicio lo alcanzará a corto plazo.","Foco en niveles 2–3"),("Se compite en consorcio","Operador más tecnología más servicios.","Alianzas",True)],tagw=150)
    y=band(s,y+4,"Lectura","Para los fabricantes no europeos hay espacio en niveles intermedios con operación europea; para los europeos, el valor añadido UE es ventaja.")
    fin(s,y,"[R84] Comisión; [R85] CISPE; [R86] ANSSI; [R87] Deutschland-Stack y Delos.",21)

# 22 Debate y escenarios: matriz
if go(22):
    s=SVG(); y=header(s,22,"Debate","La CADA final será menos estricta en los detalles, pero conservará su arquitectura: el canal debe prepararse para los tres escenarios","Posiciones en el debate y tamaño previsible del segmento de niveles 2–4")
    y=matrix2x2(s,y+10,"Peso en la negociación","Exigencia de soberanía",["Exigentes, poco peso","Exigentes, mucho peso","Flexibles, poco peso","Flexibles, mucho peso"],
      [(0.35,0.85,"CISPE: preferencia europea",False),(0.25,0.75,"Software libre: «open source first»",False),(0.72,0.78,"Francia (SecNumCloud)",True),(0.7,0.25,"ITI y CCIA Europe",False),(0.4,0.3,"Bruegel, ICLE",False),(0.66,0.4,"Parlamento: suavizar requisitos",True)],size=330,fills=[GREEN_L,NAVY_L,AMBER_L,AMBER_L])
    y=section_label(s,y+14,"Escenarios de tamaño del segmento soberano")
    y=table(s,y,["Escenario","Niveles 2–4","Efecto para el canal"],[["Suave","Nicho: defensa, justicia, seguridad","Gana por centros de datos y nivel 1"],["Base","Sanidad, justicia, tributos, críticos","Primera ola de licitaciones 2029–2030"],["Estricto","Amplias categorías; privados críticos","Aceleración de infraestructura soberana"]],[150,280,282],accent_col=2)
    y=band(s,y,"Estrategia robusta","Nivel 1 para todo el catálogo y, con fabricantes seleccionados, una oferta de nivel 2 y otra de nivel 3 en las categorías de más demanda.")
    fin(s,y,"[R85] CISPE; [R89] ECIPE; [R70] Bruegel; [R90] ICLE; [R4] MLex. Posiciones: ilustrativo.",22)

# 23 Fabricantes: heatmap
if go(23):
    s=SVG(); y=header(s,23,"Fabricantes","Para un fabricante, la CADA es una barrera solo si deja que sus integradores descubran en una licitación que no puede aportar la evidencia","Impacto de los requisitos según el tipo de fabricante del catálogo")
    y=heatmap(s,y+6,["Hardware de infraestructura no UE","Infraestructura física (energía, frío, racks)","Software y seguridad cloud no UE","Software y seguridad europeos","Código abierto con soporte"],
      ["Telemetría","Soporte UE","Control","Cadena software","IA y datos"],[[2,2,2,2,1],[1,1,1,1,0],[3,3,3,3,3],[1,1,1,2,1],[1,2,1,1,1]],legend=("Bajo","Medio","Alto"),labw=250,rh=40,accent_row=2)
    y=section_label(s,y+6,"Lo que pedirán los integradores a cada fabricante")
    y=rows_numbered(s,y,[("Telemetría y diagnósticos","Dónde se procesan; opción de mantenerlos en la UE o desactivarlos.","Criterio C"),("Gestión local o región UE","Sin dependencia obligatoria de consolas fuera de la UE.","Criterio C"),("Soporte desde la UE","Segundo y tercer nivel con acceso remoto registrado.","Criterio H"),("SBOM y vulnerabilidades","Conforme al CRA.","Criterio I"),("Sin entrenamiento con datos","Cláusula de no uso para IA.","Criterio F"),("Propiedad y solicitudes","Estructura de control y peticiones de terceros países.","Criterio G")],tagw=120)
    y=band(s,y+4,"Servicio del mayorista","Plantilla de ficha de soberanía, revisión técnica, publicación, formación y configuraciones por nivel para entrar en el segmento soberano ibérico.")
    fin(s,y,"[R1] Anexo III; [R40] CSA2; [R44] CRA; valoración por tipo: análisis propio.",23)

# 24 Integradores: tarjetas
if go(24):
    s=SVG(); y=header(s,24,"Integradores","El integrador pyme no tiene que construir la soberanía solo: tiene que elegir productos, centros de datos y mayorista que se la permitan demostrar","Cuatro perfiles de integrador ante la CADA")
    y=cards(s,y+6,[("Gran integrador nacional","Niveles 2–3 propios; grandes lotes; centros de datos o alianzas (p. ej., SEIDOR 1.174 M€).","Coste de auditoría y talento."),
      ("Integrador regional","Cercanía y conocimiento sectorial; nivel 1 propio y nivel 2 con socios.","Sin estructura para auditorías complejas."),
      ("Proveedor de servicios gestionados","Su servicio es objeto directo de la CADA: oportunidad de nivel 2 en NIS2.","Herramientas de gestión con datos fuera de la UE."),
      ("Revendedor de producto","Asesor y suministrador de productos con evidencia del fabricante.","Riesgo de quedar como subcontratista.")],cols=2,h=160,accent=1)
    y=section_label(s,y+4,"Oportunidades específicas")
    y=kpis(s,y,[("25 %","Objetivo pyme","Compra innovadora (art. 33)"),("UE","Nivel 1 pyme","Válido en toda la Unión (art. 17.3)"),("Art. 31","Privados críticos","Evaluación voluntaria NIS2")],h=104)
    y=band(s,y,"Lectura","Configuraciones validadas, fichas de soberanía, formación, centros regionales y financiación del mayorista permiten a la pyme competir con los grandes.")
    fin(s,y,"[R91] SEIDOR; [R92] Nunsys; [R13] Newsbook; [R1] arts. 17, 31 y 33; [R73] Canalys.",24)

# 25 Mayorista orquestador: ciclo
if go(25):
    s=SVG(); y=header(s,25,"Mayorista de valor","La CADA convierte la información de la cadena de suministro en un activo comercial: el mayorista que la normalice se convierte en el orquestador","Modelo de servicio propuesto en tres capas")
    y=cycle(s,y+4,[("Fabricantes","Aportan datos de soberanía por producto"),("Ficha de soberanía","Normalizada al Anexo III en el portal"),("Configuraciones","Referencias por nivel con financiación"),("Integradores","Expediente y oferta escalonada"),("Clientes","Licitaciones y evaluaciones de riesgo"),("Aprendizaje","Cambios materiales y mejoras")],"Mayorista orquestador",r=190,accent=1)
    y=section_label(s,y+4,"Tres capas de servicio")
    y=table(s,y,["Capa","Contenido","Beneficio para el partner"],[["Información","Fichas de soberanía, matrices normativas, alertas","Ahorro de semanas de recopilación"],["Soluciones","Configuraciones por nivel documentadas","Oferta lista para licitar"],["Servicios","Preventa, formación, reconocimiento, consorcios","Niveles 2–3 sin estructura propia"]],[140,320,252],accent_col=0)
    y=band(s,y,"Ventaja de partida","Catálogo multifabricante, preventa, academias de partners, financiación y presencia en España y Portugal.")
    fin(s,y,"[R16] Esprinet; [R21] El Español; [R75][R74] GTDC; [R18] Newsbook; modelo de capas: análisis propio.",25)

# 26 Oportunidades I: filas numeradas
if go(26):
    s=SVG(); y=header(s,26,"Oportunidades (I)","La primera oportunidad de la CADA para el canal es física: cada carga que vuelve a un entorno controlado necesita infraestructura","Cinco motores de demanda de infraestructura soberana")
    y=rows_numbered(s,y,[("Repatriación de cargas","Coste, control, CADA y Data Act llevan cargas a entornos privados, híbridos o regionales.","Infraestructura"),
      ("Alternativas de virtualización","Cambios de licencia de Broadcom: nuevas plataformas, formación y migración.","Migración",True),
      ("IA local","Servidores con aceleradores, almacenamiento rápido, red y modelos abiertos en la UE.","IA soberana",True),
      ("Centros de datos regionales y edge","66.900 M€ hasta 2030; plantas, hospitales, logística y nodos de datos.","Centro de datos"),
      ("Hardware europeo y eficiente","Arts. 14 y 32, revisión del ecodiseño y metas del Anexo I.","Eficiencia")])
    y=section_label(s,y+6,"Quién captura cada oportunidad")
    y=heatmap(s,y,["Repatriación","Virtualización","IA local","Centros de datos","Hardware europeo"],["Fabricantes","Mayorista","Integradores"],[[3,2,3],[2,3,3],[3,3,2],[3,3,2],[3,2,1]],legend=("Bajo","Medio","Alto"),labw=220,rh=30,scale="weight")
    y=band(s,y,"Acción","Configuraciones de referencia de nube privada, protección de datos e IA local por nivel, con financiación incluida.")
    fin(s,y,"[R51] Broadcom; [R35] TD SYNNEX/NVIDIA; [R82] Spain DC; [R57] ecodiseño; [R1]. Valoración: análisis propio.",26)

# 27 Oportunidades II: matriz
if go(27):
    s=SVG(); y=header(s,27,"Oportunidades (II)","Las oportunidades de servicio se suman: el ecosistema que las ofrezca integradas multiplicará su valor por cliente","Servicios ligados a la CADA según impacto y facilidad de puesta en marcha")
    y=matrix2x2(s,y+10,"Facilidad de puesta en marcha","Impacto en ingresos",["Apostar con socios","Prioridad inmediata","Oportunista","Rápido, menor impacto"],
      [(0.75,0.8,"Expediente de soberanía",True),(0.55,0.85,"Servicios gestionados de nivel 2",True),(0.45,0.6,"Ofertas privadas en marketplace",False),(0.74,0.4,"Financiación y pago por uso",False),(0.85,0.3,"Formación en soberanía",False),(0.25,0.75,"Consorcios y proyectos europeos",False)],size=330,fills=[AMBER_L,GREEN_L,G5,NAVY_L])
    y=section_label(s,y+14,"Quién presta y quién habilita")
    y=table(s,y,["Servicio","Presta","Habilita"],[["Expediente de soberanía","Integrador con línea de cumplimiento","Mayorista (fichas) y fabricante"],["Servicios gestionados nivel 2","MSP","Herramientas con datos en la UE"],["Marketplace","Mayoristas e integradores","Fabricantes de software"],["Financiación","Mayoristas y socios","Modelos de consumo"]],[220,250,242])
    y=band(s,y,"Lectura","Evidencia, operación gestionada, marketplace, financiación y formación forman una oferta de servicio que el canal puede vender junta.")
    fin(s,y,"[R52][R49][R50] Marketplace; [R43] Newsbook; [R66] Red.es. Posición en la matriz: ilustrativo.",27)

# 28 Cuellos normativos: heatmap
if go(28):
    s=SVG(); y=header(s,28,"Cuellos de botella normativos","Los cuellos de botella normativos no impiden prepararse, pero castigan a quien se prepare solo","Probabilidad e impacto por actor (valoración cualitativa)")
    y=heatmap(s,y+6,["Certificación UE inexistente (EUCS)","Autoridades nacionales sin rodaje","Cambios en los Anexos II y III","Superposición normativa","Lista de terceros países reconocidos","Derogaciones y aplicación desigual"],["Probabilidad","Fabricantes","Mayorista","Integradores"],
      [[3,2,2,3],[2,1,1,3],[2,3,2,2],[3,3,3,3],[2,3,2,2],[2,2,2,2]],legend=("Bajo","Medio","Alto"),labw=270,rh=38)
    y=section_label(s,y+6,"Mitigación desde el canal")
    y=rows_numbered(s,y,[("Marco de controles común","CADA, NIS2, CRA y ENS en una sola matriz mantenida por el mayorista.","Coste compartido",True),("Cláusulas de adaptación","Contratos que prevén cambios en los anexos.","Contratos"),("Participación","Consultas y asociaciones sectoriales durante 2027.","Influencia")],tagw=150)
    y=band(s,y+4,"Lectura","El ENS es el puente natural hasta que exista un certificado europeo: elevarlo hoy es la mejor inversión defensiva.")
    fin(s,y,"[R40] CSA2/EUCS; [R4] MLex; [R45] CRA; [R1]. Valoración: análisis propio.",28)

# 29 Cuellos técnicos: timeline
if go(29):
    s=SVG(); y=header(s,29,"Cuellos de botella técnicos","El cuello de botella más probable no es la norma, sino el suministro: memoria, GPU, megavatios y modos de operación locales","Horizonte temporal de los principales cuellos de botella técnicos")
    y=timeline(s,y+10,[("2026","Escasez de memoria y presión de precios","hecho"),("2026–27","GPU y capacidad de IA escasas","previsto"),("2027–28","Telemetría y gestión remota por adaptar","previsto"),("12-2027","SBOM obligatorio por el CRA","previsto"),("2029–30","Migraciones simultáneas","escenario"),("2029–30","Megavatios de las zonas de aceleración","escenario")],h=230)
    y=section_label(s,y+10,"Respuesta del canal")
    y=table(s,y,["Cuello de botella","Efecto","Respuesta"],[["Memoria","Precios y plazos","Planificar inventario con fabricantes"],["GPU","Retraso de IA de nivel 2–3","Acuerdos de capacidad, como hacen otros mayoristas"],["Gestión remota","Productos limitados al nivel 1","Hoja de ruta de modos locales"],["SBOM","Esfuerzo documental","Usar el CRA como base común"],["Energía y permisos","Retraso de centros regionales","Diversificar operadores"]],[180,220,312],accent_col=2)
    y=band(s,y,"Lectura","El canal que planifique con sus fabricantes tendrá producto disponible cuando lleguen las licitaciones de 2029–2030.")
    fin(s,y,"[R72] CONTEXT; [R35] TD SYNNEX; [R44] CRA; [R63] RD; horizontes: análisis propio.",29)

# 30 Cuellos de mercado: dos lados
if go(30):
    s=SVG(); y=header(s,30,"Cuellos de botella de mercado","El riesgo de mercado es que la soberanía sea un privilegio de los grandes: el mayorista de valor es quien mejor puede evitarlo","Riesgos de márgenes, consolidación y talento, y su mitigación")
    y=two_sides(s,y+6,("Riesgos",RED,["Márgenes estrechos (3–8 % en hardware)","Consolidación: hasta 30 % de partners cambiarán","Umbrales que concentran el negocio cloud","Escasez de talento (16.000+ empleos en CPD)","Lotes grandes que excluyen a pymes","Venta directa creciendo ~3 veces más que la del canal"]),
      ("Mitigación",GREEN,["Servicios de soberanía facturables por nivel","Consorcios de pymes coordinados por el mayorista","Escala y catálogo alternativo del mayorista","Formación compartida: academias de partners","Subcontratación especializada en grandes lotes","Presencia en marketplaces y valor local"]),
      "La soberanía puede devolver peso al canal en el segmento público y crítico si se convierte en servicio y no en coste.",h=160)
    y=section_label(s,y+6,"Indicadores de presión")
    y=bars(s,y,[("Gasto TI vía partners 2025",70.1),("Gasto TI vía partners 2026",66.7),("Pymes EMEA vía partners",82)],100,"%",accent=1)
    y=band(s,y+6,"Lectura","La especialización en soberanía es una defensa frente a la desintermediación, pero solo si se vende como servicio.")
    fin(s,y,"[R8] Unifyr; [R73] Canalys; [R48] CSP; [R82] Spain DC; [R10][R11][R93] Omdia.",30)

# 31 Hoja de ruta: roadmap
if go(31):
    s=SVG(); y=header(s,31,"Hoja de ruta","La hoja de ruta funciona en los tres escenarios porque se apoya en lo estable: niveles, evidencia, evaluación de riesgos y valor añadido europeo","Acciones de mayoristas, fabricantes e integradores 2027–2030")
    y=roadmap(s,y+6,[("2027 · Diagnóstico","Preparar",["Mayorista: ficha de soberanía y clasificación del catálogo","Fabricantes: documentar telemetría, soporte y control","Integradores: inventario y autoevaluación de nivel 1","Formación CADA, CRA y AI Act"]),
       ("2028 · Evidencia","Construir",["Configuraciones de referencia por nivel","Modos locales, soporte UE y SBOM","Expedientes y elección de centros de datos","Primeros reconocimientos"]),
       ("2029–30 · Mercado","Vender",["Servicio de evidencia a escala","Consorcios para acuerdos marco","Primeras licitaciones CADA","Extensión a Portugal y a otros mercados"])],
      ["Acuerdo político y texto final (4T 2027)","Entrada en vigor y autoridades nacionales (2028–2029)"])
    y=section_label(s,y+6,"Escenarios")
    y=table(s,y,["Escenario","Probabilidad (propia)","Qué cambia"],[["Suave","Media","Nivel 1 domina; ganancia por centros de datos"],["Base","Más alta","Niveles 2–3 en sanidad, justicia, tributos"],["Estricto","Baja-media","Niveles altos amplios; privados obligados"]],[150,200,362],accent_col=1)
    y=band(s,y,"Clave","Organizarse juntos en 2027 y 2028 sitúa a la cadena en la primera fila cuando la administración empiece a comprar por niveles.")
    fin(s,y,"[R1]; [R4]. Escenarios y probabilidades: análisis propio, ilustrativo.",31)

# 32 Conclusiones: filas numeradas
if go(32):
    s=SVG(); y=header(s,32,"Conclusiones","La CADA premiará a las cadenas, no a los eslabones","Recomendaciones prioritarias para cada actor de la cadena de valor")
    y=rows_numbered(s,y,[("Mayorista · ficha de soberanía","Estándar por familia de producto y requisito de alta de nuevos fabricantes.","2027",True),
      ("Mayorista · configuraciones por nivel","Protección de datos, nube privada, seguridad, observabilidad e IA local.","2027–2028",True),
      ("Mayorista · marco de controles","CADA, CRA, NIS2 y ENS integrados para sus partners.","2027"),
      ("Fabricantes · documentar","Telemetría, soporte, control y cadena de software compartidos con el canal.","2027"),
      ("Fabricantes · adaptar producto","Modos locales, regiones UE, soporte desde la Unión, SBOM.","2028"),
      ("Integradores · autoevaluarse","Inventario de servicios y nivel 1 para todo el catálogo.","2027"),
      ("Integradores · elegir","Uno o dos servicios a nivel 2–3 con apoyo del mayorista.","2028"),
      ("Todos · aliarse","Consorcios para grandes lotes y proyectos europeos.","2028–2030")],tagw=120)
    y=band(s,y+6,"Mensaje final","Fabricantes, mayorista e integradores que se organicen juntos estarán en la primera fila de las licitaciones por niveles de 2029–2030.")
    fin(s,y,"Síntesis del informe; [R1] y fuentes citadas en cada sección.",32)

# 33 Anexo A: mapa de artículos
if go(33):
    s=SVG(); y=header(s,33,"Anexo A","Los artículos 16 a 33 deciden quién vende a la administración y con qué pruebas; el resto crea capacidad y vehículos de compra","Mapa de la propuesta con lectura de canal")
    y=stack(s,y+6,[("Título I (1–2)","Objeto y definiciones: servicio cloud, nivel de garantía, control por terceros países","DEFINICIONES"),
      ("Título II (3–9)","Liderazgo, Centros de IA, estrategias nacionales, IA de frontera","FINANCIACIÓN"),
      ("Título III (10–15)","Zonas de aceleración, permisos y proyectos estratégicos de centros de datos","INFRAESTRUCTURA"),
      ("Título IV (16–28)","Niveles, reconocimiento, auditoría, repositorio, autoridades y sanciones","NÚCLEO"),
      ("Título IV (29–33)","Evaluación de riesgos, reglas de compra, valor añadido UE y objetivo pyme","DEMANDA"),
      ("Título IV (34–44)","EuroCloud Federation, central de compras y código abierto","VEHÍCULOS"),
      ("Título V (45–48)","Actos delegados, evaluación y entrada en vigor","CALENDARIO")],accent=3)[0]
    y=section_label(s,y+6,"Anexos de la propuesta")
    y=kpis(s,y,[("Anexo I","Grandes retos","PUE 1,15 y uso de servidores ≈ 50 %"),("Anexo II","Requisitos por nivel","Acumulativos del 1 al 4"),("Anexo III","Evidencia A–I","Base del expediente de soberanía")],h=104,accent_idx=2)
    y=band(s,y,"Lectura","Para el canal, el núcleo está en los artículos 16–33 y en los Anexos II y III: ahí se decide qué puede venderse y con qué pruebas.")
    fin(s,y,"[R1] COM(2026) 502; [R3] Simmons & Simmons.",33)

# 34 Anexo B: calendario consolidado
if go(34):
    s=SVG(); y=header(s,34,"Anexo B","Dos picos de carga para el canal: 2027 (Data Act, AI Act, CRA) y 2029–2030 (CADA y migraciones)","Calendario normativo y de programas de fabricante consolidado")
    y=timeline(s,y+10,[("Ene 2026","Cierre VCSP de Broadcom","hecho"),("Feb 2026","Cisco 360","hecho"),("Jun 2026","Propuesta CADA","hecho"),("Sep 2026","CRA: notificación","hecho"),("Nov 2026","HPE Partner Ready Vantage unificado","hecho"),("Ene 2027","Data Act: cambio sin cargos","previsto"),("Dic 2027","CRA completo y AI Act alto riesgo","previsto"),("2029","Aplicación de la CADA","escenario")],h=250)
    y=section_label(s,y+10,"Carga para el canal por año")
    y=bars(s,y,[("2026: programas y CRA",2),("2027: Data Act, AI Act, CRA",4),("2028: entrada en vigor CADA",3),("2029–2030: aplicación y migraciones",5)],5,"",accent=3)
    y=band(s,y+6,"Lectura","El sistema de evidencias construido en 2027 para CRA, Data Act y AI Act es la base del expediente CADA de 2028–2029.")
    fin(s,y,"[R1]; [R37]; [R44]; [R34]; [R49]–[R79]; [R51]. Carga relativa (1–5): ilustrativo.",34)

# 35 Anexo C: lista de verificación por actor
if go(35):
    s=SVG(); y=header(s,35,"Anexo C","Una respuesta negativa no impide vender: indica el trabajo pendiente de cada eslabón","Resumen de la lista de verificación por actor")
    y=heatmap(s,y+6,["Telemetría y diagnósticos en la UE","Gestión local o región UE","Soporte desde la UE","SBOM y vulnerabilidades (CRA)","Cláusula de no entrenamiento de IA","Ficha de soberanía publicada","Verificación CRA en el alta","Establecimiento e infraestructura UE","Subcontratistas declarados","Responsable del expediente"],["Fabricante","Mayorista","Integrador"],
      [[3,1,2],[3,1,1],[3,2,1],[3,2,1],[3,1,2],[2,3,1],[1,3,0],[1,1,3],[1,1,3],[1,2,3]],legend=("Bajo","Medio","Alto"),labw=290,rh=32,scale="weight")
    y=band(s,y+4,"Uso","Cada actor puede responder su parte en 2027 y compartirla en la cadena: el expediente del integrador se construye con piezas del fabricante y del mayorista.")
    fin(s,y,"[R1] Anexos II y III; [R45] CRA. Asignación por actor: análisis propio.",35)
