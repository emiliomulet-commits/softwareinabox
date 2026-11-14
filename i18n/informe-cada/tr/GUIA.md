# Guía de traducción — Informe CADA para la cadena de valor (Software in a Box)

Traduce del español al idioma destino TODOS los archivos de `tr/es/` y escribe el resultado en `tr/<lang>/` con el mismo nombre:
`part1.md` … `part6.md`, `refs.txt`, `ig_strings.json`, `labels.json`.

Público: directivos de fabricantes TI, mayoristas, distribuidores/integradores e industria cliente final. Registro profesional, claro, de informe de consultoría. Traducción fiel y completa (no resumas, no omitas frases), pero natural en el idioma destino (no calco).

## Reglas de formato (se validan automáticamente)
1. Markdown: MISMO número de líneas que el original y MISMO tipo de línea en cada posición: `## `, `### `, `- `, `> `, `| … |` (misma cantidad de celdas) o párrafo. Las líneas vacías se mantienen vacías. No unas ni dividas líneas.
2. Citas `[R12]`, `[R3][R4]`: idénticas y en la misma frase. No las muevas ni las quites.
3. `**negrita**` se conserva.
4. Números: adapta separadores al idioma (en: 15.1 %, 1,765.4; de/nl/pt/it/da/es: 15,1 %, 1.765,4; fr: 15,1 %, 1 765,4). Fechas: formato natural del idioma (en: 3 June 2026 / 3-6-2026 en tablas puede quedarse). Moneda: «M€» → en: «EUR m» o «€m»; resto según uso local (Mio. €, M€, mln €, mio. €).
5. Nombres propios, siglas de normas y organismos: se mantienen (CADA, AI Act, Data Act, NIS2, CRA, DORA, DMA, EHDS, EUCS, CSA2, ENS, RAEE→ WEEE en en/WEEE; DEEE fr; Elektro-Altgeräte/WEEE de; AEEA nl; REEE pt; RAEE it; WEEE da), CNMC, AESIA, CCN, Red.es, Kit Digital, VERI*FACTU, TFUE (en: TFEU; fr: TFUE; de: AEUV; nl: VWEU; pt: TFUE; it: TFUE; da: TEUF), RGPD (en/de: GDPR/DSGVO; fr: RGPD; nl: AVG; pt: RGPD; it: GDPR; da: GDPR/databeskyttelsesforordningen). Empresas tal cual.
6. Títulos de leyes españolas: traduce descriptivamente y deja el nombre oficial español entre paréntesis la primera vez si ayuda (p. ej. en: «Spain's National Security Framework (ENS)»).
7. `refs.txt`: una referencia por línea, formato `Rxx texto URL`. Traduce SOLO la descripción; no toques `Rxx` ni la URL. Si la URL es de EUR-Lex con `/ES/`, cámbiala al código del idioma (`/EN/`, `/FR/`, `/DE/`, `/NL/`, `/PT/`, `/IT/`, `/DA/`). Títulos de artículos de prensa: tradúcelos descriptivamente.
8. `ig_strings.json`: objeto `{id: texto}`; traduce cada valor, conserva cada clave. Son textos de infografías con espacio limitado: sé conciso (longitud similar o menor que el español; nunca mucho más largo). Respeta mayúsculas totales si el original las usa (p. ej. «INTEGRADOR»). Unidades tipo " M€", "%" se adaptan. Valores que sean solo cifras/códigos (p. ej. "2027", "COM(2026) 502") se dejan iguales.
9. `labels.json`: traduce los valores.
10. Escribe UTF-8. JSON válido (comillas escapadas).

## Terminología fijada (obligatoria)
| ES | en | fr | de | nl | pt | it | da |
|---|---|---|---|---|---|---|---|
| nivel de garantía (de soberanía) | (sovereignty) assurance level | niveau d'assurance (de souveraineté) | (Souveränitäts-)Vertrauensstufe | (soevereiniteits)zekerheidsniveau | nível de garantia (de soberania) | livello di garanzia (di sovranità) | (suverænitets)sikringsniveau |
| mayorista (de valor) | (value-added) distributor | grossiste (à valeur ajoutée) | (Value-Add-)Distributor | (value-added) distributeur | grossista (de valor acrescentado) | distributore (a valore aggiunto) | (value-added) distributør |
| mayorista generalista | broadline distributor | grossiste généraliste | Broadline-Distributor | broadline-distributeur | grossista generalista | distributore broadline | broadline-distributør |
| distribuidor / integrador | reseller / integrator | revendeur / intégrateur | Reseller / Systemintegrator | reseller / integrator | revendedor / integrador | rivenditore / integratore | forhandler / integrator |
| canal (de distribución) | (distribution) channel | canal (de distribution) | (Vertriebs-)Kanal | (distributie)kanaal | canal (de distribuição) | canale (di distribuzione) | (distributions)kanal |
| fabricante | vendor (manufacturer en hardware) | fabricant / éditeur (software) | Hersteller | leverancier/fabrikant | fabricante | produttore / vendor | producent / leverandør |
| industria cliente final | end-customer industry | industrie cliente finale | Endkundenindustrie | eindklantindustrie | indústria cliente final | industria cliente finale | slutkundeindustri |
| ficha de soberanía | sovereignty sheet | fiche de souveraineté | Souveränitätsdatenblatt | soevereiniteitsfiche | ficha de soberania | scheda di sovranità | suverænitetsark |
| expediente de soberanía | sovereignty file | dossier de souveraineté | Souveränitätsdossier | soevereiniteitsdossier | dossier de soberania | fascicolo di sovranità | suverænitetsdossier |
| configuración de referencia | reference configuration | configuration de référence | Referenzkonfiguration | referentieconfiguratie | configuração de referência | configurazione di riferimento | referencekonfiguration |
| evaluación de riesgos (del sector público) | (public-sector) risk assessment | évaluation des risques | Risikobewertung | risicobeoordeling | avaliação de riscos | valutazione dei rischi | risikovurdering |
| actividades de orden público | public-order activities | activités d'ordre public | Tätigkeiten der öffentlichen Ordnung | activiteiten van openbare orde | atividades de ordem pública | attività di ordine pubblico | aktiviteter vedrørende den offentlige orden |
| zona de aceleración de centros de datos | data centre acceleration zone | zone d'accélération des centres de données | Beschleunigungsgebiet für Rechenzentren | versnellingszone voor datacenters | zona de aceleração de centros de dados | zona di accelerazione dei data center | accelerationszone for datacentre |
| responsable del despliegue (AI Act) | deployer | déployeur | Betreiber | gebruiksverantwoordelijke | responsável pela implantação | deployer | idriftsætter |
| guardián de acceso (DMA) | gatekeeper | contrôleur d'accès | Torwächter | poortwachter | controlador de acesso | gatekeeper | gatekeeper |
| entidades esenciales/importantes (NIS2) | essential/important entities | entités essentielles/importantes | wesentliche/wichtige Einrichtungen | essentiële/belangrijke entiteiten | entidades essenciais/importantes | soggetti essenziali/importanti | væsentlige/vigtige enheder |
| proveedor TIC tercero crítico (DORA) | critical ICT third-party provider | prestataire tiers critique de services TIC | kritischer IKT-Drittdienstleister | kritieke derde aanbieder van ICT-diensten | prestador terceiro crítico de serviços de TIC | fornitore terzo critico di servizi TIC | kritisk tredjepartsudbyder af IKT-tjenester |
| repatriación de cargas | workload repatriation | rapatriement des charges de travail | Workload-Rückverlagerung | repatriëring van workloads | repatriamento de cargas de trabalho | rimpatrio dei carichi di lavoro | hjemtagning af workloads |
| centro de datos (CPD) | data centre | centre de données | Rechenzentrum | datacenter | centro de dados | data center | datacenter |
| nube | cloud | cloud / nuage (usa «cloud») | Cloud | cloud | nuvem / cloud | cloud | cloud/sky (usa «cloud») |
| pliego (de licitación) | tender specifications | cahier des charges | Ausschreibungsunterlagen | aanbestedingsdocumenten | caderno de encargos | capitolato di gara | udbudsmateriale |
| pyme | SME | PME | KMU | kmo (nl-NL: mkb; usa «mkb») | PME | PMI | SMV |
| AI Factories / gigafactorías de IA | AI Factories / AI gigafactories | AI Factories / gigausines d'IA | AI Factories / KI-Gigafabriken | AI Factories / AI-gigafabrieken | AI Factories / gigafábricas de IA | AI Factories / gigafactory dell'IA | AI Factories / AI-gigafabrikker |

En inglés usa ortografía británica (centre, organisation), coherente con la web (en_GB).
EUR-Lex: cambia `/ES/` por el código del idioma.

Al terminar, ejecuta `python3 tr/validate.py <lang>` y corrige hasta que no haya errores.
