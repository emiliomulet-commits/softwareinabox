## 13. DORA, DMA y la reordenación de los programas cloud
### DORA y la supervisión de proveedores tecnológicos
DORA es el primer régimen europeo que supervisa directamente a proveedores tecnológicos. El 18 de noviembre de 2025 las autoridades europeas designaron 19 proveedores terceros TIC críticos, entre ellos AWS, Google Cloud, Microsoft, Oracle y SAP, operadores como Orange y Deutsche Telekom y consultoras como Accenture, Capgemini o NTT DATA [R46]. Las entidades financieras deben incluir en sus contratos cláusulas de localización, acceso, auditoría y salida.
### DMA: AWS y Azure como guardianes de acceso
El 25 de junio de 2026 la Comisión comunicó su conclusión preliminar de que AWS y Azure deben designarse guardianes de acceso de la Ley de Mercados Digitales; si se confirma, tendrán seis meses para cumplir obligaciones de interoperabilidad, portabilidad y no autopreferencia [R47]. Esto puede cambiar las condiciones de licencia y la posibilidad de ejecutar software en nubes de terceros, lo que también interesa a los partners que venden ese software.
### Los programas de los hiperescaladores ya están cambiando
Al margen de la regulación, los grandes proveedores están reordenando su relación con el canal:
- Microsoft endureció la autorización del programa Cloud Solution Provider, con umbrales de 1 millón de dólares de ingresos para partners de facturación directa y de 30 millones para distribuidores indirectos [R48], y ha convertido su marketplace en una vía de venta a través del canal, con las «resale enabled offers» en disponibilidad general desde noviembre de 2025 y las ofertas privadas multiparte disponibles en 30 mercados europeos desde mayo de 2026 [R49][R50].
- Broadcom cerró en enero de 2026 el programa de proveedores cloud de VMware para buena parte de los pequeños partners europeos, y CISPE presentó una queja ante la Comisión [R51].
- Según Omdia, los partners generarán el 59 % de las ventas en los marketplaces de los hiperescalares hacia 2030 [R52].
### Lectura para la cadena de valor
El cerco regulatorio (DMA, DORA, Data Act y CADA) empuja hacia arquitecturas con más opciones de despliegue. Para los fabricantes de software, eso exige licencias que permitan ejecutar sus productos en infraestructura europea y en entornos del cliente. Para los integradores que trabajan con banca, seguros o fintech, implica responder a cuestionarios DORA y CADA con un mismo paquete de evidencias. Para el mayorista de valor, la reordenación de los programas cloud tiene dos caras: los umbrales de Microsoft y el cierre de VMware concentran el negocio en distribuidores con escala, y las alternativas de virtualización y nube privada generan demanda de nuevas plataformas, formación y migración.
> La CADA no actúa sola: DMA, DORA, Data Act y los cambios de programa de los hiperescaladores empujan en la misma dirección. El distribuidor con escala y catálogo alternativo gana relevancia.
| Instrumento | Hecho | Efecto para el canal |
| DORA | 19 proveedores críticos designados (nov. 2025) | Cláusulas de salida y auditoría en el sector financiero |
| DMA | Conclusión preliminar sobre AWS y Azure (jun. 2026) | Licencias e interoperabilidad |
| Microsoft CSP | Umbrales de 1 M$ y 30 M$ | Concentración en distribuidores con escala |
| Microsoft Marketplace | Reventa y ofertas multiparte en 30 mercados | Venta de software a través del canal |
| Broadcom/VMware | Cierre del programa VCSP (ene. 2026) | Demanda de alternativas y migración |

## 14. Datos y espacios de datos: Data Union Strategy, Simpl, EHDS y Gaia-X
### La estrategia de datos detrás de la CADA
La Data Union Strategy, presentada el 19 de noviembre de 2025, orienta la política de datos hacia la implementación: más acceso a datos de calidad para la IA, normas más sencillas y protección de la soberanía. Incluye «Data Labs» que conectan los espacios comunes de datos con las AI Factories y un refuerzo de 100 millones de euros para los espacios de datos desde 2026, y sitúa la CADA entre sus acciones emblemáticas [R53].
### La infraestructura de los espacios de datos
Los espacios comunes europeos de datos (salud, movilidad, energía, industria, agricultura, finanzas, administración pública, contratación) se apoyan en el Data Spaces Support Centre, en Simpl, el middleware abierto de la Comisión, y en las especificaciones de la industria: el Dataspace Protocol de IDSA, los componentes Eclipse Dataspace y el marco de confianza de Gaia-X [R54][R30].
### EHDS
El Espacio Europeo de Datos Sanitarios (Reglamento (UE) 2025/327) regula el uso primario y secundario de los datos de salud; la Comisión debe adoptar sus principales actos de ejecución antes del 26 de marzo de 2027 [R55]. Los organismos de acceso a datos sanitarios y los entornos de tratamiento seguro serán probablemente actividades de orden público en la CADA, con exigencia de nivel 2 o superior.
### Federación frente a centralización
Los espacios de datos son federados: los datos permanecen en origen y se comparten bajo políticas de uso legibles por máquina, con conectores y credenciales verificables. Encaja con la CADA porque reduce la necesidad de concentrar datos en grandes plataformas y permite aplicar distintos niveles de garantía a cada nodo.
### Un nodo de espacio de datos es infraestructura
Cada participante en un espacio de datos necesita un conector desplegado en infraestructura propia o de confianza, con identidad, almacenamiento, seguridad y monitorización. Para el canal, esto es demanda de servidores en el borde, almacenamiento seguro y servicios de operación, sobre todo en sectores de industria, salud, logística y energía, donde los integradores ya tienen clientes.
### Lectura para la cadena de valor
Los fabricantes de infraestructura pueden preparar con su mayorista configuraciones de nodo de espacio de datos (servidor, almacenamiento, seguridad y software abierto) listas para desplegar por los integradores. Los integradores con soluciones sectoriales están sentados sobre datos valiosos para espacios industriales, sanitarios o de economía circular y pueden ofrecer a sus clientes la participación con garantías de soberanía. El equipo autor de este informe ha participado en tres demostradores de espacios de datos federados financiados por la Secretaría de Estado de Digitalización (salud, contratación pública y economía circular), experiencia trasladable a los clientes del canal.
> Los espacios de datos son la versión «de datos» de la soberanía que la CADA aplica a la nube: federación, control en origen y confianza verificable, desplegados por el canal.
| Pieza | Estado | Papel en una oferta del canal |
| Data Union Strategy | Comunicación (nov. 2025) | Prioridad política y financiación |
| Simpl | Middleware abierto en despliegue | Base técnica común |
| IDSA, Eclipse, Gaia-X | Especificaciones y componentes | Conectores, protocolo y confianza |
| EHDS | Actos de ejecución 2026–2027 | Demanda de infraestructura sanitaria soberana |

## 15. Normativa de producto que ya toca al mayorista: RAEE, ecodiseño y facturación electrónica
### La CADA llega sobre un canal ya regulado
El mayorista tecnológico no es nuevo en el cumplimiento. Cada referencia que distribuye debe cumplir normas de residuos, eficiencia, seguridad de producto y, cada vez más, ciberseguridad. Entender estas obligaciones es útil por dos razones: muestran que el canal sabe gestionar cumplimiento a escala y aportan procesos que pueden reutilizarse para la evidencia de soberanía.
### RAEE
En España, el Real Decreto 110/2015 regula los residuos de aparatos eléctricos y electrónicos. Los productores, incluidos quienes importan y ponen en el mercado equipos por primera vez, deben inscribirse en el registro, declarar los aparatos puestos en el mercado y financiar la gestión de los residuos, normalmente a través de sistemas colectivos de responsabilidad ampliada; los distribuidores deben recoger aparatos usados en determinados supuestos [R56]. El número de registro del productor debe figurar en las facturas entre productores y distribuidores. Es un ejemplo de cómo la normativa ya reparte obligaciones por eslabón.
### Ecodiseño de servidores y almacenamiento
El Reglamento (UE) 2019/424 establece requisitos de ecodiseño para servidores y productos de almacenamiento en línea, centrados en la eficiencia de las fuentes de alimentación, el rendimiento en estado activo, la información sobre materiales y la facilidad de desmontaje y borrado seguro de datos para reutilización; el reglamento está en revisión [R57]. La revisión, junto con los objetivos de eficiencia del Anexo I de la CADA y el paquete europeo de eficiencia de centros de datos [R58], anticipa requisitos más exigentes para el hardware que se vende a centros de datos.
### Equipos reacondicionados
La economía circular crece en el canal: según CONTEXT, las ventas de PC reacondicionados en el canal de distribución crecieron un 7 % en el cuarto trimestre de 2025 en los cinco grandes mercados europeos, y los mayoristas, Esprinet incluido, han ganado peso en esta categoría [R59]. La CADA, que exige borrado seguro y control de activos para la evidencia, y el ecodiseño, que facilita la reutilización, empujan en la misma dirección.
### Facturación electrónica
España aprobó el Real Decreto 238/2026 de factura electrónica obligatoria entre empresas y la Orden HAC/1028/2026 que regula la solución pública; el sistema VERI*FACTU se ha aplazado a octubre de 2028 para hacerlo coincidir con el calendario de la factura electrónica de pymes y autónomos [R60]. Afecta a todo el software de gestión que vende el canal y a los procesos de facturación de mayoristas e integradores.
### Lectura para la cadena de valor
El mayorista ya mantiene, para miles de referencias, datos de registro de productor, eficiencia, marcado y garantías. Añadir una ficha de soberanía (localización de telemetría, origen del soporte, componentes, control) es una extensión natural de ese sistema. Para los fabricantes, ofrecer en un único paquete la conformidad RAEE, ecodiseño, CRA y CADA reducirá la fricción de venta. Para los integradores, los servicios de retirada, borrado certificado y reutilización de equipos (ITAD) se convierten en parte del ciclo de vida soberano del cliente.
> El canal ya sabe gestionar cumplimiento de producto a escala. La CADA añade una columna más a la ficha de cada referencia: la soberanía.
| Norma | Obligación principal | Eslabón afectado |
| RD 110/2015 (RAEE) | Registro, declaración y financiación de residuos; recogida | Productor/importador y distribuidor |
| Reglamento 2019/424 | Ecodiseño de servidores y almacenamiento (en revisión) | Fabricante; información al canal |
| CRA | Conformidad, marcado y verificación | Fabricante, importador y distribuidor |
| RD 238/2026 y VERI*FACTU | Factura electrónica B2B; software de facturación (oct. 2028) | Fabricantes de software, canal y clientes |
| CADA | Evidencia de soberanía por servicio | Toda la cadena |

## 16. El marco español y portugués
### Gobernanza de la IA en España
España fue pionera en Europa al crear una autoridad nacional de supervisión de la IA, la AESIA. El Consejo de Ministros remitió a las Cortes el 26 de mayo de 2026 el Proyecto de Ley Orgánica para el buen uso y la gobernanza de la IA, que designaba a la AESIA como autoridad principal, regulaba entornos de pruebas y sanciones e incluía un título sobre el uso de la IA en el sector público estatal [R61]. El proyecto caducó con la disolución de las Cortes el 6 de octubre de 2026 (Real Decreto 806/2026), antes de las elecciones generales del 29 de noviembre [R42]. Hoy no hay ley española de IA: el AI Act se aplica directamente y la AESIA sigue funcionando, pero falta el régimen sancionador nacional. El próximo Gobierno tendrá que presentar un nuevo texto.
### Esquema Nacional de Seguridad
El Real Decreto 311/2022 regula el ENS, obligatorio para el sector público y sus proveedores tecnológicos. Su sistema de categorías y la certificación de conformidad son hoy la llave de acceso al mercado público cloud español y la base natural del futuro reconocimiento CADA.
### Soberanía digital y centros de datos
El 24 de febrero de 2026 el Gobierno presentó la Hoja de Ruta para acelerar la Soberanía Digital, que sitúa la nube y los centros de datos como columna vertebral [R62]. El 27 de agosto de 2026 sometió a audiencia un proyecto de real decreto de centros de datos sostenibles que, para instalaciones de 1 MW o más, exigía que al menos el 80 % del consumo de cada hora estuviera respaldado por renovables de esa misma hora y que el operador estuviera establecido en la UE [R63]. Tras más de 600 alegaciones y un informe crítico de la CNMC del 22 de septiembre [R64], el texto revisado sube el umbral a 10 MW, permite una rampa del 80 % renovable horario hasta 2031 y concentra la soberanía en los centros que alojan sistemas públicos de categoría ALTA del ENS, cuyos datos deberán quedarse en la UE. El Consejo de Estado lo avaló en noviembre con cuatro cambios y el Gobierno prevé aprobarlo el 17 o el 24 de noviembre de 2026; al ser real decreto, no decayó con la disolución de las Cortes [R65]. Parte de la industria mantiene su rechazo; el Gobierno lo presenta como una forma de ordenar el crecimiento.
### Programas públicos y el canal
La experiencia del Kit Digital, con su red de agentes digitalizadores, demostró que el canal es el vehículo más eficaz para llevar la digitalización a pymes y autónomos: Red.es lo articuló a través de miles de proveedores tecnológicos homologados [R66]. Es razonable esperar que la estrategia nacional de nube e IA que exige la CADA se apoye en mecanismos similares (análisis propio).
### Portugal
Portugal tiene un sector TIC dinámico, con más de 13.000 empresas tecnológicas y unos 245.000 profesionales, y se consolida como centro de servicios cercano para empresas europeas [R67]. Para la distribución es el mercado de mayor crecimiento relativo: el Grupo Esprinet creció allí un 47 % en 2025 y un 37 % en el primer semestre de 2026 [R17][R7]. Portugal deberá designar su autoridad CADA, adoptar su estrategia de nube e IA y completar su propia transposición de NIS2.
### Lectura para la cadena de valor
España y Portugal pueden estar entre los primeros mercados en aplicar la CADA con agilidad: España tiene autoridad de IA, esquema de seguridad y hoja de ruta de soberanía. Para los fabricantes, la certificación ENS de sus productos y servicios será un activo diferencial. Para los integradores, mantener y elevar sus certificaciones ENS y seguir la futura estrategia nacional es prioritario. Para el mayorista de valor, operar con una misma organización en ambos países le permite ofrecer configuraciones validadas para los dos marcos nacionales.
> La península puede ser un mercado temprano de la CADA: tiene esquema de seguridad, autoridad de IA, hoja de ruta de soberanía y un canal que ya ha demostrado su capacidad para ejecutar programas públicos.
| Instrumento | Estado | Relación con la CADA |
| PLO de gobernanza de la IA (España) | Caducado (disolución de las Cortes, 6-10-2026) | Aplicación del AI Act y uso público de IA |
| ENS (RD 311/2022) | Vigente | Base técnica del reconocimiento |
| Hoja de Ruta de Soberanía Digital | Feb. 2026 | Orientación política |
| RD de centros de datos | Dictamen del Consejo de Estado (nov. 2026); aprobación prevista | Requisitos energéticos y de soberanía |
| Portugal: autoridad y estrategia CADA | Tras la entrada en vigor | Mercado de mayor crecimiento relativo |
## 17. El mercado cloud europeo: dependencia, concentración y demanda soberana
### Una dependencia medible
Los proveedores cloud europeos pasaron del 29 % del mercado europeo en 2017 al 15 % en 2022, cuota que se ha mantenido, mientras tres hiperescaladores no europeos superan el 70 % [R1]. Los datos de Synergy Research para el primer trimestre de 2026 sitúan solo a AWS y Azure en torno al 65–70 % de los ingresos cloud de la UE [R47].
### Una demanda que cambia de naturaleza
Gartner prevé que el gasto europeo en infraestructura como servicio soberana pase de 6.900 millones de dólares en 2025 a 12.600 millones en 2026 y se acerque a 23.100 millones en 2027 [R68]. El estudio encargado por la Comisión para la evaluación de impacto cuantifica además la brecha entre la capacidad de cómputo existente y la demanda prevista [R69]. Es un cambio estructural en la forma de comprar. Los hiperescaladores han respondido con ofertas «soberanas» y grandes inversiones en centros de datos europeos, como los 33.700 millones de euros anunciados por AWS en España [R63].
### Capacidad de cómputo para IA
Bruegel subraya que la UE va muy por detrás de Estados Unidos en capacidad de chips de IA y advierte de que criterios de soberanía estrictos podrían encarecer la capacidad [R70]. Los centros de datos consumieron unos 68 TWh en la UE en 2024 y su demanda podría casi duplicarse hacia 2030 [R58].
### Qué intenta cambiar la CADA
La CADA no aspira a expulsar a los hiperescaladores, sino a crear un segmento de mercado, el público y por extensión el crítico, donde la competencia se base también en el control y la resiliencia. Si ese segmento alcanza masa crítica, los proveedores europeos podrán escalar y los no europeos tendrán incentivos para ofrecer estructuras de control y operación europeas, como ya hacen algunas alianzas (S3NS entre Thales y Google o Bleu entre Orange, Capgemini y Microsoft).
### La nube no es solo pública
Para el canal, un matiz es esencial: la soberanía también se construye fuera de la nube pública. Nubes privadas en el centro de datos del cliente, nubes de proveedores regionales, colocation y modelos de consumo de infraestructura como servicio (HPE GreenLake, Dell APEX o Lenovo TruScale) permiten ofrecer control y localización con hardware que se vende a través del canal. Gran parte de la demanda soberana se traducirá en compras de servidores, almacenamiento, redes y software de virtualización, protección de datos y seguridad, no en suscripciones a hiperescaladores.
### Dónde está el valor para el canal
La CADA tiende a fragmentar la infraestructura (más proveedores, más niveles, más regiones), y la fragmentación aumenta el valor de quien sabe orquestarla. Para los fabricantes de infraestructura, el segmento soberano es una oportunidad de recuperar cargas que se habían ido a la nube pública. Para los integradores, el valor está en la capa de servicios: migración, integración, operación híbrida, seguridad y cumplimiento. Para el mayorista de valor, la oportunidad es agregar las piezas en ofertas de referencia por nivel.
> La concentración del mercado no desaparecerá con la CADA, pero se abrirá un segmento con reglas propias donde el tamaño importa menos que el control demostrable, y donde el hardware y los servicios del canal recuperan protagonismo.
| Indicador | Valor | Fuente |
| Cuota de proveedores UE en 2017 | 29 % | Memoria COM(2026) 502 |
| Cuota de proveedores UE en 2022 | 15 % | Memoria COM(2026) 502 |
| Tres hiperescaladores no UE | Más del 70 % | Memoria COM(2026) 502 |
| Gasto en IaaS soberana en Europa 2026 | 12.600 M$ (previsión) | Gartner vía CSA |
| Consumo eléctrico de CPD en la UE (2024) | ≈ 68 TWh | Comisión Europea |

## 18. El mercado de la distribución TI en Europa, España y Portugal
### España: un año de récord para el mayorista
Según los datos de CONTEXT recogidos por Newsbook, el negocio de los mayoristas en España creció un 15,1 % en 2025 [R6]. El impulso vino de la renovación de equipos ante el fin del soporte de Windows 10 en octubre de 2025, del crecimiento de la infraestructura para centro de datos y de la ciberseguridad. El Informe 2026 de Alimarket sitúa entre los principales mayoristas a TD SYNNEX, Esprinet, Ingram Micro, MCR, Riba Mundo Tecnología, Inforpor, Depau, DMI, Infortisa y Globomatik, entre otros [R15].
### Europa: un 2026 más moderado
Para el conjunto de Europa, CONTEXT prevé que la distribución TI crezca alrededor de un 2,1 % en 2026 [R71]. El fin del efecto Windows 10 y la escasez de memoria, que ha impulsado compras anticipadas y presiona los precios en el segundo semestre, dibujan un año más irregular para el puesto de trabajo [R72]. La infraestructura de centro de datos, la seguridad y el software mantienen el crecimiento.
### El canal pierde cuota, pero gana influencia
Omdia estima que la cuota del gasto TI canalizada por partners baja del 70,1 % en 2025 al 66,7 % en 2026, por el crecimiento de la venta directa de servidores a hiperescalares y de software en la nube [R10]. Al mismo tiempo, el gasto absoluto a través de partners sigue creciendo, el 82 % del gasto TI de las pymes de EMEA pasa por ellos [R11] y la ciberseguridad depende del canal en más de un 90 % [R12]. En el Canalys Forum EMEA 2026 se advirtió de que hasta un 30 % de los partners actuales no existirá en su forma actual en 2030, con crecimiento concentrado en especialistas en IA, ciberseguridad y datos [R73].
### El mayorista como orquestador
El GTDC, asociación de los grandes mayoristas tecnológicos de la que forma parte Esprinet [R74], sostiene en su informe de julio de 2026 que la distribución puede elevar por encima del 80 % la capacidad de ejecución de los fabricantes en las funciones clave de salida al mercado, y que los fabricantes priorizan la visibilidad del retorno (88 %), el alineamiento estratégico (85 %) y el reclutamiento y capacitación de partners (83 %) [R75]. En España, la mesa de Newsbook sobre la nube reunió a Arrow, Ingram Micro, TD SYNNEX y V-Valley para analizar por qué el mayorista sigue siendo esencial también en el entorno cloud [R76]. El informe del GTDC de marzo de 2026 subraya que el valor del mayorista ya va mucho más allá de la logística y el crédito: integración multifabricante, modelos de suscripción y consumo, y capacitación de partners [R9].
### Lectura para la cadena de valor
El canal ibérico crece por encima de Europa y la parte de valor crece por encima del conjunto. Esto da margen para invertir en la preparación para la CADA. Pero la advertencia de Omdia es clara: el canal que no evolucione hacia servicios y especialización perderá relevancia. La CADA es una oportunidad para acelerar esa evolución con una razón regulatoria que los clientes entienden.
> El canal ibérico llega a la CADA creciendo, pero con un mensaje de fondo: la cuota se gana con especialización y servicio, no con volumen. La soberanía es una especialización.

## 19. Los programas de fabricante en transformación
### 2026, año de rediseño de los programas de partners
Casi todos los grandes fabricantes han rediseñado en 2025 y 2026 sus programas de canal. Los cambios comparten tres rasgos: menos niveles y más competencias, incentivos ligados al valor y al ciclo de vida del cliente, y más peso de los servicios gestionados y la IA.
### Los cambios principales
- HPE unifica desde el 1 de noviembre de 2026 los programas de HPE y Juniper Networks en HPE Partner Ready Vantage, con un único conjunto de niveles, competencias y compensación, y amplía la gama de productos que vende exclusivamente a través del canal [R77]. En España, cerca del 90 % de las oportunidades que gana HPE Aruba Networking las identifica un partner [R78].
- Cisco lanzó en febrero de 2026 el Cisco 360 Partner Program: elimina los niveles Gold, Premier y Select, crea dos categorías (Partner y Preferred Partner), mide el valor aportado a lo largo del ciclo de vida del cliente y añade especializaciones en infraestructura segura para IA y redes seguras [R79].
- Google Cloud lanzó en el primer trimestre de 2026 su Partner Network con niveles Select, Premier y Diamond, competencias basadas en capacidad y contribución validada, y una transición de seis meses [R80].
- Microsoft endureció los requisitos de su programa CSP y ha llevado la venta del canal a su marketplace [R49][R48].
- Dell presentó su programa de partners 2026 orientado a nuevas oportunidades en IA y centro de datos [R81]; Lenovo se define como compañía de canal y ha integrado su oferta de PC, servidores y servicios bajo un mismo enfoque; HP impulsa programas de renovación de equipos.
- Broadcom cerró el programa de proveedores cloud de VMware para buena parte de los pequeños partners europeos [R51].
### Qué tienen que ver con la CADA
Ninguno de estos programas incluye aún criterios de soberanía en el sentido de la CADA. Pero todos se mueven hacia la medición del valor que el partner aporta al cliente: competencias, servicios, ciclo de vida. Es razonable anticipar (análisis propio) que, cuando la CADA se aplique, los fabricantes incorporarán a sus programas competencias de «despliegue soberano» o «sector público europeo», igual que hoy incorporan competencias de seguridad o IA.
### Lectura para la cadena de valor
Para los fabricantes, la recomendación es adelantarse: definir ya qué configuraciones de su catálogo pueden sostener los niveles 1, 2 y 3, y qué evidencia aportarán al partner. Para los integradores, la complejidad creciente de los programas hace más valioso a un mayorista que traduzca requisitos, gestione certificaciones y ayude a cumplir umbrales. Para el mayorista de valor, la oportunidad es convertirse en el punto donde los fabricantes «cargan» su soberanía y los integradores la «descargan» lista para usar, con formación y certificación en sus academias de partners.
> Los programas de partners ya miden competencias y valor. La soberanía será la próxima competencia, y el mayorista que la estandarice primero marcará el formato del mercado.
| Fabricante | Cambio 2025–2026 | Implicación para el canal |
| HPE | Partner Ready Vantage unifica HPE y Juniper (1-11-2026) | Un único programa; más productos solo vía canal |
| Cisco | Cisco 360: dos niveles y medición del valor | Especialización en IA segura |
| Google Cloud | Partner Network: Select, Premier, Diamond | Competencias por contribución |
| Microsoft | Umbrales CSP; venta por marketplace | Concentración en distribuidores con escala |
| Broadcom | Cierre del programa VCSP en Europa | Demanda de alternativas |

