## 1. Resumé
### Hvorfor denne rapport
Cloud and AI Development Act (CADA) blev foreslået af Europa-Kommissionen den 3. juni 2026 som det centrale element i pakken om teknologisk suverænitet. Det er den første EU-regel, der omsætter digital suverænitet til verificerbare krav til offentlige indkøb af cloud- og AI-tjenester. Forslaget har to mål: at tredoble Europas datacenterkapacitet inden for fem til syv år og at skabe orden på det offentlige marked gennem fire suverænitetssikringsniveauer og en obligatorisk risikovurdering i den offentlige sektor [R1][R2].
Denne rapport analyserer forslaget fra det sted, hvor det afgøres, hvordan teknologien når ud til virksomheder og myndigheder i Spanien og Portugal: distributionskanalen. Den følger hele værdikæden. I den ene ende står producenterne af datainfrastruktur, servere, lagring, netværk, cybersikkerhed, komponenter til datacentre og AI. I midten står de value-added distributører, der repræsenterer dem på Den Iberiske Halvø, og de hundredvis af forhandlere og integratorer, der køber hos dem for at designe, implementere og drive løsninger. I den anden ende står industrien og servicevirksomhederne, der bruger teknologien.
Spørgsmålet, der styrer dokumentet, er praktisk: hvad ændrer CADA i forretningen for hvert led, hvilke flaskehalse kan den skabe, og hvilke muligheder åbner den for dem, der forbereder sig først?
### Hovedkonklusioner
- CADA regulerer ikke hele cloudmarkedet, men adgangen til det offentlige marked. Sikringsniveauet vil dog blive et kommercielt kvalitetsstempel, som også private kunder i kritiske sektorer (energi, sundhed, finans, vand, transport) vil efterspørge [R1][R3].
- Sikringsniveauet tildeles den enkelte tjeneste, ikke den enkelte virksomhed. Derfor opbygges suverænitet i kæden: Integratoren, der leverer tjenesten, har brug for dokumentation, som kun producenten af hardware og software kan levere – og i stigende grad den distributør, der leverer, konfigurerer og supporterer produkterne.
- For producenterne indfører CADA en ny konkurrencedimension: hvor data og telemetri behandles, hvorfra supporten leveres, hvem der kontrollerer virksomheden, og hvad dens softwarekæde indeholder. De, der dokumenterer svarene i god tid, vil blive foretrukket af kanalen.
- For integratorerne kan niveau 1 opnås ved selvevaluering. Niveau 2 til 4 kræver revision, certificering og arkitekturer under europæisk kontrol, som de færreste kan opbygge alene.
- For de value-added distributører styrker reglerne deres rolle som orkestratorer: multileverandørkataloget, den tekniske presales, logistikken i EU, finansieringen og uddannelsen er netop de ressourcer, et økosystem har brug for, når det skal bevise suverænitet.
- De mest sandsynlige flaskehalse er certificeringen (den europæiske EUCS-ordning er fortsat blokeret), manglen på europæisk kapacitet og GPU'er, prispresset på hukommelse i 2026, manglen på kompetencer og risikoen for, at hver medlemsstat anvender reglerne på sin egen måde.
### Forventet tidsplan
Forslaget er under behandling. Europa-Parlamentet fremlagde sit udkast til fælles betænkning den 11. november 2026, drøfter det i udvalget den 1. december og forventer at stemme om det i udvalget omkring marts 2027 og i plenum i april [R4][R5]. Det politiske mål er en aftale i fjerde kvartal 2027. I basisscenariet vil de første praktiske forpligtelser komme mellem 2028 og 2029, og de første udbud med krav om sikringsniveauer mellem 2029 og 2030.
### Læsning for værdikæden
Den iberiske kanal møder CADA i god form. Det spanske distributionsmarked voksede med 15,1 % i 2025 ifølge CONTEXT [R6], og en af halvøens store distributører, Esprinet-koncernen, øgede sin omsætning i Spanien med 21 % og i Portugal med 37 % i første halvår 2026 [R7]. Denne styrke er grundlaget for at investere i det, CADA vil kræve: dokumentation, niveaudelte arkitekturer og servicekapacitet.
> Hovedbudskab: Suverænitet dokumenteres ikke af en enkelt aktør. Den dokumenteres af en dokumenteret forsyningskæde. Den value-added distributør, der organiserer denne kæde for sine producenter og integratorer, vil have en fordel, der er svær at kopiere, mellem 2027 og 2030.
| Aktør | CADA's vigtigste effekt | Hastegrad |
| Producenter | Dokumentere kontrol, lokalisering, support og softwarekæde | Høj |
| Value-added distributører | Orkestrere niveaudelt katalog, dokumentation og tjenester | Høj |
| Integratorer | Trinvist katalog og suverænitetsdossier pr. tjeneste | Høj |
| Offentlige kunder | Risikovurdering og indkøb efter niveau | Middel (2028–2029) |
| Kritiske private kunder | Frivillig vurdering; mulig sektorforpligtelse | Middel |

## 2. Den iberiske teknologikanal og den value-added distributørs rolle
### Hvordan teknologien når slutkunden
I Europa, og især i Spanien og Portugal, sælges størstedelen af den professionelle teknologi ikke direkte af producenten. Den bevæger sig gennem en kæde i to trin: Producenten sælger til distributøren, distributøren sælger til forhandleren eller integratoren, og denne sælger, implementerer og driver løsningen for slutkunden. Modellen findes, fordi ingen producent effektivt kan håndtere tusindvis af relationer med små og mellemstore forhandlere; distributøren samler efterspørgslen, finansierer lageret, påtager sig kreditrisikoen og leverer logistik og teknisk uddannelse [R8][R9].
Marginerne i hvert led er snævre. Inden for hardware ligger distributørens margin typisk mellem 3 % og 8 %, hvilket opvejes af volumen, incitamenter fra producenterne og værdiskabende tjenester; distributørens og forhandlerens samlede marginer kan udgøre mellem 35 % og 50 % af slutprisen afhængigt af kategorien [R8]. Derfor skal enhver regulatorisk ændring, der tilføjer arbejde i kæden, omsættes til en fakturerbar tjeneste eller en kommerciel fordel for ikke at udhule rentabiliteten.
### Kanalens vægt i it-forbruget
Ifølge Omdia formidlede partnere 70,1 % af det globale it-forbrug i 2025 og vil formidle 66,7 % i 2026: Andelen falder i forhold til de store leverandørers direkte salg, men den absolutte volumen vokser fortsat, og indflydelsen på beslutningerne stiger [R10]. Hos SMV'er i Europa, Mellemøsten og Afrika går 82 % af it-forbruget gennem partnere [R11], og inden for cybersikkerhed når andelen op på 91,7 % [R12]. I Spanien er kanalstrukturen meget fragmenteret: Ifølge Dell er 98 % af virksomhedens partnere SMV'er [R13]. Desuden beslutter kunden ikke længere alene: Ifølge Canalys gennemløber B2B-køberen i gennemsnit 28 kontaktpunkter, før leverandøren vælges, ledsaget af flere betroede partnere, hvilket giver kanalen indflydelse ud over selve transaktionen [R14].
### Broadline-distributører og value-added distributører
På halvøen findes to typer distributører side om side. Broadline-distributørerne (bl.a. TD SYNNEX, Ingram Micro, Esprinet, MCR, Infortisa, DMI og Globomatik) flytter volumen inden for arbejdspladsudstyr, periferiudstyr og forbrugerelektronik med logistisk effektivitet [R15]. De value-added distributører, såsom Arrow, V-Valley, Exclusive Networks og Westcon-Comstor, er specialiseret i datacenter, netværk, cybersikkerhed, cloud og AI med teknisk presales, laboratorier, uddannelse, professionelle tjenester og finansiering.
### Den value-added distributør i tal
De store distributionskoncerner arbejder med hundredvis af producenter og titusindvis af forhandlere: Esprinet-koncernen oplyser for eksempel over 650 producenter og over 31.000 forhandlere i Sydeuropa [R16], og i 2025 havde den en bruttoomsætning på 1.765,4 mio. euro i Spanien (+10 %) og 106 mio. euro i Portugal (+47 %) [R17]. I første halvår 2026 voksede omsætningen med 21 % i Spanien og 37 % i Portugal [R7]. I 2024 bidrog koncernens value-added division med omkring 25 % af omsætningen og over 60 % af EBITDA [R18]: Merværdien er motoren i distributørens rentabilitet.
De value-added distributører udvider deres katalog med nye aftaler inden for cybersikkerhed, observability, fysisk infrastruktur, mobilitet, digital energi og AI-klar colocation [R19][R20] og opretter særlige enheder for uddannelse og AI-rådgivning til deres partnere [R21].
### Hvorfor CADA vil blive afgjort i kanalen
CADA måler suveræniteten for hver tjeneste ud fra data, der er spredt i kæden: Producenten ved, hvor udstyret sender sin telemetri hen, og hvem der vedligeholder koden; distributøren ved, hvorfra førstelinjesupporten leveres, og hvordan licenserne administreres; integratoren ved, hvor tjenesten afvikles, og hvem der driver den. Intet led har alle oplysningerne. Den, der samler dem, normaliserer dem og stiller dem til rådighed for de andre, bliver uundværlig.
> Kanalen er ikke et passivt mellemled i CADA: Den er det eneste punkt i kæden, der ser producenten, integratoren og kunden på samme tid.
| Led | Funktion i kanalen | Eksempler på Den Iberiske Halvø |
| Producent | Produkt, partnerprogram, incitamenter | Dell, HP, Lenovo, HPE, Cisco, Huawei, Vertiv, Fortinet |
| Value-added distributør | Presales, multileverandørintegration, finansiering | V-Valley, Arrow, Exclusive Networks, Westcon-Comstor |
| Broadline-distributør | Logistik, lager, kredit, volumen | TD SYNNEX, Ingram Micro, MCR, Infortisa, DMI |
| Integrator / MSP | Projekt, implementering, drift | SEIDOR, Nunsys, Telefónica Tech, INTEGRA, ACICATECH |
| Slutkunde | Brug af teknologien | Industri, tjenester, offentlig sektor, SMV'er |

## 3. Hvad er CADA: oprindelse, opbygning og tidsplan
### Fra Draghi til pakken om teknologisk suverænitet
Idéen om en europæisk lov om udvikling af cloud og AI optræder i Draghi-rapporten om konkurrenceevne (september 2024). Kommissionen indarbejdede den i AI Continent Action Plan (april 2025), indkaldte dokumentation i 2025 og vedtog forslaget COM(2026) 502 den 3. juni 2026 sammen med Chips Act 2.0, den europæiske open source-strategi og en køreplan for digitalisering af energisektoren [R1][R2][R22]. Retsgrundlaget er artikel 114 og 173, stk. 3, i TEUF, og retsakten har form af en forordning, der finder direkte anvendelse i alle medlemsstater.
### Diagnosen
Kommissionen identificerer to problemer. Det første er en utilstrækkelig og koncentreret computerkapacitet: Efterspørgslen efter AI vokser hurtigere end det europæiske udbud af datacentre. Det andet er afhængighed: De europæiske cloududbyderes markedsandel faldt fra 29 % i 2017 til 15 % i 2022, mens tre ikke-europæiske hyperscalere har over 70 % af markedet [R1].
### Forslagets opbygning
Forslaget er opdelt i fem afsnit, 48 artikler og tre bilag [R1]:
- Afsnit I: genstand og definitioner.
- Afsnit II (art. 3–9): lederskabsinitiativer for cloud og AI, AI-centre baseret på de digitale innovationsknudepunkter, nationale strategier og frontier-AI-projekter.
- Afsnit III (art. 10–15): accelerationszoner for datacentre, centrale informationskontaktpunkter, tilladelser og strategiske projekter.
- Afsnit IV (art. 16–44): suverænitetsramme med fire niveauer, anerkendelse, revision, myndigheder, risikovurdering i den offentlige sektor, offentlige indkøb, EuroCloud Federation, fælles indkøb og open source.
- Afsnit V (art. 45–48): delegerede retsakter, revision og ikrafttræden.
- Bilag: store teknologiske udfordringer (I), krav til hvert niveau (II) og revisionsdokumentation (III).
### Hvad CADA ikke er
CADA forbyder ikke nogen leverandør at operere på det private marked, pålægger ikke alle virksomheder datalokalisering og erstatter ikke AI Act. De direkte forpligtelser påhviler den offentlige sektor og de leverandører, der søger om anerkendelse af et niveau. Den indirekte effekt bliver dog bred, fordi artikel 31 giver kritiske private enheder mulighed for frivillige vurderinger og bemyndiger Kommissionen til at gøre dem obligatoriske i sektorer med høj kritikalitet [R1].
### Tidsplan
Pr. 14. november 2026 er CADA under førstebehandling. I Rådet behandles forslaget i arbejdsgruppen for telekommunikation; det irske formandskab forbereder en statusrapport til årsskiftet, og Rådets Juridiske Tjeneste anser forslaget for foreneligt med WTO-reglerne med justeringer af de europæiske præferencer [R23]. I Parlamentet fremlagde ordførerne udkastet til fælles betænkning den 11. november 2026; udvalgsdebatten er planlagt til den 1. december, afstemningen i udvalget til midten af marts 2027 og afstemningen i plenum til april [R5]. Udkastet kræver flere investeringer i europæisk cloud- og AI-infrastruktur, bedre beskyttelse af kritiske sektorer, flere offentlige indkøb hos europæiske leverandører og hurtigere tilladelser til datacentre. En af ordførerne, Diego Solier, har udtalt, at kravene kan blive lempet, og at reglerne for internationale virksomheder vil blive præciseret [R4]. Teksten træder i kraft 20 dage efter offentliggørelsen og finder anvendelse et år senere med forskudte frister for medlemsstaterne (Det Europæiske Økonomiske og Sociale Udvalg og Den Europæiske Tilsynsførende for Databeskyttelse har allerede afgivet deres udtalelser [R24][R25]): seks måneder for accelerationszonerne, tolv for myndigheder, strategier og risikovurderinger og højst tolv måneder til at migrere tjenester, når vurderingen kræver det.
### Læsning for kanalen
Tidsplanen giver et forberedelsesvindue på to år. For en producent er det tiden til at dokumentere forsyningskæden og tilpasse supportkontrakterne. For en value-added distributør er det tiden til at klassificere kataloget og designe dokumentationstjenester. For en integrator er det tiden til at kortlægge tjenesterne og beslutte, hvilke der skal løftes til højere niveauer.
> Anbefalet tidsplan: 2027 som år for diagnose og design af tilbud, 2028 som år for dokumentation og alliancer og 2029 som året for de første udbud med CADA-krav.
| Milepæl | Dato | Type |
| Forslag COM(2026) 502 | 3. jun. 2026 | Sket |
| Parlamentets udkast til betænkning | 11. nov. 2026 | Sket |
| Afstemning i udvalget | Mar. 2027 | Planlagt |
| Politisk aftale | 4. kvt. 2027 | Vejledende mål |
| Generel anvendelse | 2029 (basisscenarie) | Skøn |

## 4. Afsnit II og III: lederskab, frontier-AI og datacentre
### Lederskabsinitiativerne
Artikel 3 til 6 opretter et Cloud Leadership Initiative og et AI Leadership Initiative med F&U-mål: næste generations cloud- og AI-teknologier, åbne og effektive stakke, der dækker alt fra kanten (edge) til data, samt industriel, fysisk og frontier-AI [R1][R3]. De har ikke deres eget budget: De gennemføres via Horisont Europa, programmet for et digitalt Europa og den kommende europæiske konkurrenceevnefond. Artikel 5 opretter et netværk af AI-centre baseret på de europæiske digitale innovationsknudepunkter (EDIH), som skal bringe AI-eksperimenter tættere på SMV'er og myndigheder i tråd med Kommissionens Apply AI-strategi [R26].
### Nationale strategier
Artikel 7 forpligter hver medlemsstat til inden for tolv måneder at vedtage en national strategi for cloud og AI, der er afstemt med Det Digitale Årti (75 % af virksomhederne bruger cloud, big data og AI, og 10.000 sikre edge-noder) og omfatter støtteforanstaltninger til stakke baseret på åben hardware og software [R1]. Strategierne vil blive omsat til planer for offentlige indkøb og SMV-udbredelse, hvilket er direkte efterspørgsel for kanalen.
### Frontier-AI og gigafabrikker
Artikel 8 og 9 gør det muligt at anerkende prioriterede frontier-AI-projekter og tildele dem computerkraft i koordination med AI Factories og de kommende AI-gigafabrikker under EuroHPC. Indkaldelsen til gigafabrikker, der lukkede den 12. november 2026, omfatter op til syv anlæg med over 100.000 AI-processorer hver [R27]. Spanien har indsendt en fælles ansøgning fra Madrid og Catalonien.
### Accelerationszoner og strategiske projekter
Afsnit III tager fat på den fysiske knaphed. Artikel 10 kræver, at der udpeges mindst én accelerationszone for datacentre inden for seks måneder; artikel 13 begrænser sagsbehandlingen af tilladelser til de mest relevante projekter til tolv måneder; artikel 14 gør det muligt at udpege strategiske projekter, der opfylder mindst to af fem kriterier: væsentlige offentlige funktioner, bæredygtighed eller innovation, netstabilitet, brug af chips, servere eller kvantecomputere fremstillet i EU eller afhjælpning af en identificeret mangel på computerkraft [R1]. Centre med europæiske chips eller lavere energiaftryk kan få prioriteret nettilslutning og bedre nettariffer [R22].
### Læsning for producenter, distributører og integratorer
For producenter af servere, lagring, strøm og køling er afsnit III en efterspørgselspolitik: Flere datacentre betyder flere ordrer på kritisk infrastruktur. Kriteriet om hardware fremstillet i EU kan belønne dem, der har europæisk produktion eller samling, og målet i bilag I (gennemsnitlig PUE på 1,15 og serverudnyttelse på omkring 50 %) favoriserer mere effektivt udstyr. For de value-added distributører, der distribuerer datacenterinfrastruktur og indgår aftaler med producenter af strøm- og køleløsninger og med colocation-operatører [R19][R20], er investeringsbølgen den mest håndgribelige mulighed på kort sigt. For integratorerne åbner AI-centrene og de nationale strategier for udbredelsesprojekter hos SMV'er og myndigheder, og AI Factories tilbyder computerkraft til at finjustere sektormodeller.
> Afsnit III omsætter suverænitet til megawatt: Den kæde, der leverer servere, strøm, køling og effektive racks til de nye europæiske datacentre, vil indfange CADA's første værdibølge.
| Foranstaltning | Artikel | Frist | Mulighed for kanalen |
| Lederskabsinitiativer | 3–6 | EU-programmer | Åbne stakke, edge, finansierede projekter |
| AI-centre | 5 | Netværk baseret på EDIH | SMV-kanal og pilotprojekter |
| National strategi | 7 | 12 måneder | Indkøbs- og udbredelsesplaner |
| Accelerationszoner | 10 | 6 måneder | Efterspørgsel efter datacenterinfrastruktur |
| Strategiske projekter | 14 | Indkaldelser | Europæisk og effektiv hardware |

## 5. Suverænitetsrammen: fire sikringsniveauer
### Kernen i forslaget
Artikel 16 opretter EU's ramme for cloudsuverænitet med fire sikringsniveauer, som er nærmere beskrevet i bilag II. Den overfører kriterier om ejerskab, kontrol og eksponering for udenlandske jurisdiktioner, som var blevet fjernet fra EUCS-certificeringsordningen på grund af manglende enighed mellem medlemsstaterne, til bindende ret [R28]. De advokatfirmaer, der har analyseret forslaget, understreger, at det i praksis skaber nye compliancetrin også for softwareleverandører [R29]. Niveauerne er frivillige for leverandørerne, men afgør, hvilke tjenester myndighederne kan købe til hver aktivitet.
### Hvad hvert niveau kræver
Niveau 1. Leverandør etableret i EU; infrastruktur og aktiver, herunder underleverandørers, i EU, medmindre den offentlige kunde ønsker andet; kundedata, metadata og telemetri i EU; outsourcet support uden for EU, der ikke bringer den operationelle autonomi i fare; tidssvarende cybersikkerhed; oplyste underleverandører; og, hvis der er kontrol fra et tredjeland, garanti for, at ingen udenlandsk lov kræver, at sårbarheder videregives, før det vides, at de udnyttes [R1].
Niveau 2. Derudover: leverandør, underleverandører, infrastruktur og personale i EU; europæisk cybersikkerhedscertifikat på niveau »betydelig« (eller nationale ordninger, indtil et sådant findes); forbud mod at bruge tjenestens data til at træne AI for enheder fra tredjelande; support, der initieres og leveres udelukkende fra EU; kontrol med softwarekæden (SBOM, kontrol med fjernfunktioner, kodegennemgang af komponenter fra tredjelande, migrationsplaner); og juridisk, teknisk og organisatorisk adskillelse fra moderselskabet uden for EU [R1].
Niveau 3. Personale med EU-statsborgerskab og om nødvendigt sikkerhedsgodkendelse; certifikat på niveau »betydelig«; leverandør, der ikke er kontrolleret af et tredjeland, undtagen ved en fravigelse knyttet til et anerkendt tredjeland med garantier som rimelig adgang til koden [R1].
Niveau 4. Ingen kontrol fra tredjelande; følsomme data altid i EU; certifikat på niveau »høj«; og effektiv kontrol med softwarekæden, så intet tredjeland kontrollerer design, udvikling, vedligeholdelse eller videreudvikling af komponenterne [R1].
### Hvordan niveauet dokumenteres
Niveau 1 dokumenteres ved selvevaluering, og SMV'ers erklæringer gælder i hele EU uden forudgående anerkendelse (art. 17, stk. 3, og art. 19). Niveau 2 til 4 kræver uafhængig revision med dokumentationen i bilag III (art. 20); anerkendte tjenester optages i et centralt register hos Kommissionen, og væsentlige ændringer skal indberettes (art. 22 og 23) [R1].
### Hvorfor springet mellem niveauerne angår hele kæden
Det kritiske spring ligger mellem niveau 1 og 2. Niveau 2 kræver, at supporten leveres fra EU, at softwarekæden er dokumenteret, og at data ikke træner andres modeller. Ingen af de tre betingelser afhænger alene af integratoren: Anden- og tredjelinjesupporten leveres af producenten; SBOM'en genereres af producenten; vilkårene for brug af data står i producentens kontrakter. Og det er ofte distributøren, der håndterer førstelinjesupport, licenser og reservedelslogistik. Niveau 3 og 4 afhænger desuden af, hvem der kontrollerer producenten – noget, hverken distributøren eller integratoren kan ændre.
### Eksempel på et trinvist katalog
En integrator, der tilbyder backup, virtualisering, cloudbaseret ERP og overvågning, vil vurdere hver tjeneste for sig. Backup på lagring fra en producent med support i EU, hostet i et europæisk datacenter, kan sigte mod niveau 2 eller 3. ERP på en ikke-europæisk hyperscaler kan dokumentere niveau 1, hvis kravene til lokalisering, telemetri og gennemsigtighed er opfyldt. Den rigtige strategi er ikke at vælge ét niveau for hele virksomheden, men at opbygge et niveaudelt katalog med produkter, som distributøren allerede har klassificeret.
### Praktisk eksempel: backup på niveau 2 til et hospital
En regional integrator vil tilbyde et offentligt hospital en administreret backuptjeneste. Hvis risikovurderingen klassificerer patientjournalen som en aktivitet vedrørende den offentlige orden, skal tjenesten mindst nå niveau 2. Integratoren skal bruge: et datacenter etableret i EU med personale i EU; et lagersystem og en databeskyttelsessoftware, hvis avancerede support leveres fra EU; en administrationskonsol, der ikke sender telemetri ud af Europa; SBOM for komponenterne; og en accepteret cybersikkerhedscertificering (i Spanien ENS i kategorien høj, indtil det europæiske certifikat findes). Integratoren fremstiller ingen af disse dele. Hvis distributøren leverer en referencekonfiguration med producenter, der allerede stiller denne dokumentation til rådighed, og en regional operatør med anerkendt niveau, kan integratoren forberede sit dossier på uger i stedet for måneder.
> Niveauet tildeles tjenesten, men vindes i kæden. En producent, der ikke leverer sin del af dokumentationen, holder sine integratorer ude af niveau 2 til 4.
| Niveau | Dokumentation | Certifikat | Kontrol fra tredjeland | Support |
| 1 | Selvevaluering | Tidssvarende | Tilladt med garantier | Uden for EU uden at bringe autonomi i fare |
| 2 | Revision | EU »betydelig« | Tilladt med adskillelse | Udelukkende fra EU |
| 3 | Revision | EU »betydelig« | Nej (undtagen anerkendt land) | EU, personale med EU-statsborgerskab |
| 4 | Revision | EU »høj« | Nej | EU, statsborgerskab og godkendelse |

## 6. Dokumentationen i bilag II og III gennem hele forsyningskæden
### Fra principper til beviser
Bilag III fastlægger, hvordan hvert krav dokumenteres, og omsætter suverænitet til et dossier, som en revisor verificerer [R1]. Kriterierne er:
- A. Etablering i EU: stiftelsesdokumenter, hjemsted, hovedkontor og fast tilstedeværelse.
- B. Infrastruktur, aktiver og personale: adresser for al infrastruktur, herunder backup, katastrofeberedskab og logfiler, samt aktivfortegnelser.
- C. Datalokalisering: adgangslogfiler, dataflowdiagrammer og kontrakter, der dokumenterer, at der ikke sker overførsler ud af EU uden godkendelse.
- D. Personalets statsborgerskab: identiteter, organisationsdiagrammer og adgangskontrol.
- E. Cybersikkerhedscertificering: certifikater i henhold til forordning (EU) 2019/881 eller, indtil en ordning findes, i overensstemmelse med CEN/TS 18026:2024 eller nationale ordninger.
- F. AI fra tredjelande: klausuler, der forbyder træning på data, MLOps-logfiler i EU, model cards og dataafstamning.
- G. Ejerskab og kontrol: aktionærer med mindst 5 %, ledelsesregler og register over anmodninger om adgang fra tredjelande.
- H. Support fra EU: klausuler, register over underleverandører, administrative adgangsveje og tilbagekaldelse af adgange.
- I. Gennemsigtighed i softwareforsyningskæden.
### Hvem har hvilket bevis
Set fra kanalen er bilag III en arbejdsdeling. Kriterium A og en stor del af C håndteres af integratoren eller tjenesteoperatøren. B kræver viden om, hvor udstyr og reservedele befinder sig, og hvem der vedligeholder dem – oplysninger, der deles mellem distributør og integrator. E afhænger af certificeringen af produkterne og tjenesten. Kriterierne F, G, H og I afhænger først og fremmest af producenten: Kun producenten kan oplyse sin ejerstruktur, hvorfra den avancerede support leveres, hvilke fjernfunktioner firmwaren eller softwaren indeholder, og hvilke komponenter fra tredjelande der indgår.
### Distributørens rolle
For en mellemstor integrator er det umuligt at indhente disse oplysninger fra snesevis af producenter. En value-added distributør kan normalisere dem: anmode hver producent om et suverænitetsark pr. produktfamilie, holde det opdateret, oversætte det til bilag III's sprog og stille det til rådighed for partnerne på sin portal. Det er en tjeneste svarende til den, distributøren allerede yder med datablade, certificeringer, garantier og overholdelse af krav om genanvendelse eller produktsikkerhed.
### Omkostninger og vanskeligheder
Kriterierne A, C og H er overkommelige for europæiske leverandører. Kriterierne D, F, G og I er dyre, når stakken omfatter komponenter fra ikke-europæiske producenter, fordi beviset afhænger af oplysninger, som kun de har. Den Europæiske Tilsynsførende for Databeskyttelse har desuden krævet, at dokumentationen af personalets statsborgerskab respekterer dataminimering [R25].
### Værktøjer
Praksis vil kombinere platforme for governance, risk og compliance, automatiske aktivfortegnelser, SBOM'er genereret i continuous integration, logfiler over dataafstamning for AI og standardklausuler med leverandører. Verificerbare legitimationsoplysninger og selvbeskrivelser fra fødererede dataområder (Gaia-X, IDSA) kan fungere som et genanvendeligt format til udveksling af dokumentation mellem virksomheder [R30].
> Et suverænitetsark pr. produkt, vedligeholdt af distributøren med data fra producenten, kan spare hver integrator for ugers arbejde pr. tjeneste og blive en de facto-standard i den iberiske kanal.
| Kriterium | Hvem leverer beviset | Vanskelighed med ikke-europæisk stak |
| A Etablering | Integrator / operatør | Lav |
| B Infrastruktur og aktiver | Integrator og distributør | Middel |
| C Datalokalisering | Integrator og producent (telemetri) | Middel |
| D Personalets statsborgerskab | Integrator, producent og distributør (support) | Middel |
| E Certificering | Producent og integrator | Middel |
| F AI fra tredjelande | Producent | Høj |
| G Ejerskab og kontrol | Producent | Høj |
| H Support fra EU | Producent og distributør | Høj |
| I Softwarekæde | Producent | Høj |

