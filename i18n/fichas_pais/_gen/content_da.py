from common import section_body as S_, ROW_TR

SPAIN = "Spanien"
NAV = "Danmark"
SRC = "Kilder for Danmark"

CHIPS_RX = [(r"<tr><td><b>24-5-2022</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"<tr><td><b>14-7-2026</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"\s*<li>(?:(?!</li>).)*fundacionbankinter(?:(?!</li>).)*</li>", "")]
ECO_ROW = r'<tr><td><a href="/regulacion/rd-centros-datos/">(?:(?!</tr>).)*</tr>'

EU = {
"rgpd": {
 "sec": S_("Danmark", "Databeskyttelse i Danmark", [
   ("Ramme og myndighed", [
     "<b>Databeskyttelsesloven</b> (lov nr. 502 af 23-5-2018) supplerer forordningen.",
     "<b>Datatilsynet</b> er tilsynsmyndighed.",
     "Bøder pålægges ikke af Datatilsynet selv: sagen går til politiet, og domstolene fastsætter bøden."]),
   ("Hvad det betyder",
     "Det danske bødesystem er langsommere og mere forudsigeligt end i andre lande. For grænseoverskridende sager gælder den nye procesforordning fra 2-4-2027.")]),
 "src": [("Danmark", "Databeskyttelsesloven (retsinformation.dk)", "https://www.retsinformation.dk/eli/lta/2018/502")],
 "R": [("<dt>Spanien</dt><dd>Organisk lov 3/2018 (LOPDGDD) · AEPD</dd>", "<dt>Danmark</dt><dd>Databeskyttelsesloven · Datatilsynet</dd>"),
       ("I Spanien starter mange af AEPD's sager med et brud og ender med at gennemgå hele virksomhedens databeskyttelse.",
        "I Danmark indstiller Datatilsynet til bøde, men det er domstolene, der fastsætter den.")],
 "RX": [(ROW_TR("<td>Spanien: "), "")]},
"du": {
 "sec": S_("Danmark", "Sådan lander strategien i Danmark", [
   ("Datastyring", [
     "<b>Digitaliseringsstyrelsen</b> er myndighed for både datadelingsloven (lov 1618 af 16-12-2025, Data Act) og lov 42/2025 (DGA).",
     "Datatilsynet fører tilsyn med personoplysninger.",
     "Bøder pålægges kun ad domstolsvejen."]),
   ("Dataområder",
     "Danmarks Statistik giver forskere sikker adgang til mikrodata. På sundhedsområdet samler Digital Sundhed Danmark (fra 2027) adgangen til sundhedsdata.")]),
 "src": [("Danmark", "Lovguiden: datadelingsloven, lov 1618 af 16-12-2025", "https://www.lovguiden.dk/loven/datadelingsloven/4"),
         ("Danmark", "Retsinformation: lov 42/2025 om DGA (PDF)", "https://www.retsinformation.dk/eli/lta/2025/42/pdf")]},
"chips": {
 "sec": S_("Danmark", "Chips i Danmark", [
   ("Projekter", [
     "<b>Danish Chips Competence Centre</b> (DKCCC) ved DTU, lanceret i 2025, med fokus på kvantechips.",
     "Stærke miljøer inden for chipdesign, fotonik og kvanteteknologi.",
     "Ingen store fabrikker; deltagelse via kompetencecentre og pilotlinjer."]),
   ("Hvad det betyder",
     "For Danmark handler Chips Act 2.0 om design, kvante og adgang til europæiske pilotlinjer for virksomheder og start-ups.")]),
 "src": [("Danmark", "DkCCC: om Danish Chips Competence Centre", "https://chips-competence-centre.dtu.dk/en/about")],
 "RX": CHIPS_RX},
"eco": {
 "sec": S_("Danmark", "Datacentre i Danmark", [
   ("National ramme", [
     "Energirapportering for datacentre fra 500 kW (BEK 926/2024).",
     "En nødlov om elnettet (august 2026) sætter datacentre bagerst i køen til nettilslutning.",
     "Overskudsvarme til fjernvarme med forenklede prisregler."]),
   ("Status",
     "Datacentre bruger allerede omkring 7 % af elforbruget. Nye projekter blev sat på pause i maj 2026.")]),
 "src": [("Danmark", "Retsinformation: BEK 926 af 9-7-2024 (PDF)", "https://www.retsinformation.dk/eli/lta/2024/926/pdf"),
         ("Danmark", "IENE: nødlov sætter datacentre bagerst (20-8-2026)", "https://www.iene.eu/energy-news/denmark-publishes-emergency-grid-law-that-puts-data-centers-last-p8700.html")],
 "RX": [(ECO_ROW, "<tr><td><b>BEK 926/2024</b></td><td>Dansk energirapportering for datacentre og prioritering i nettilslutningskøen.</td></tr>")]},
}

NAT = {
"raee": {"sec": S_("Danmark", "Og i Danmark?", [
   ("Producenternes pligter", [
     "<b>Elektronikaffaldsbekendtgørelsen</b> gennemfører WEEE-direktivet.",
     "Registrering i producentregistret hos <b>DPA-System</b> før markedsføring.",
     "Tilslutning til en kollektiv ordning eller individuel ordning og årlig indberetning af mængder.",
     "Erhvervsudstyr (servere, netværk) er også omfattet."]),
   ("Handel",
     "Kommunerne indsamler fra husholdninger; forhandlere tager brugt udstyr retur ved køb af tilsvarende nyt.")],
   srctitle=SRC, srcs=[("DPA", "DPA-System", "https://www.dpa-system.dk/")])},
"factura-electronica": {"sec": S_("Danmark", "Og i Danmark?", [
   ("E-faktura", [
     "B2G siden 2005, det ældste i EU; <b>ingen B2B-pligt</b> pr. transaktion.",
     "Bogføringsloven kræver digitale bogføringssystemer, der kan sende e-fakturaer (OIOUBL og Peppol).",
     "Automatisk tilmelding til <b>Nemhandel</b> fra 29-9-2026 (opt-out).",
     "Nemhandel Faktura (Peppol BIS 4) 2028–2029; SAF-T 2.0 fra 2027."]),
   ("Hvis I også sælger i Spanien",
     "Fakturaer til spanske erhvervskunder følger de spanske frister (oktober 2027 og 2028). Et system, der understøtter EN 16931, dækker begge lande.")],
   srctitle=SRC, srcs=[("KPMG", "KPMG: Danmarks 2026-dagsorden for digital bogføring og e-faktura", "https://kpmg.com/us/en/taxnewsflash/news/2026/03/denmark-latest-work-2026-agenda-digital-bookkeeping-and-e-invoicing.html"),
                       ("Nemhandel", "Erhvervsstyrelsen: dokumentstrategi for e-faktura (PDF)", "https://nemhandel.dk/sites/default/files/2026-03/Dokumentstrategi_h%C3%B8ringsnotat_ERST_040326_alirodocs-a_WA.pdf")])},
"ens": {"sec": S_("Danmark", "Og i Danmark?", [
   ("Offentlige myndigheder", [
     "Alle statslige myndigheder skal implementere <b>ISO 27001</b>.",
     "Derudover gælder obligatoriske <b>tekniske minimumskrav</b> til it-sikkerhed (29 krav i 2024-versionen).",
     "Ingen certificering som den spanske ENS."]),
   ("NIS2",
     "Lov 434 af 6-5-2025 gælder fra 1-7-2025; tilsynet er sektoropdelt og koordineres af SAMSIK. Registrering sker på virk.dk.")],
   srctitle=SRC, srcs=[("Sikkerdigital", "Vejledning til de 29 tekniske minimumskrav 2024 (PDF)", "https://www.sikkerdigital.dk/Media/638550029138627340/Vejledning%20til%20de%2029%20tekniske%20minimumskrav%202024%20-%20juni.pdf"),
                       ("Digst", "ISO 27001-modenhed i staten 2022 (PDF)", "https://digst.dk/media/zk5nd1mc/iso-27001-modenhed-i-staten-2022.pdf")])},
"ley-gobernanza-ia": {"sec": S_("Danmark", "Og i Danmark?", [
   ("Supplerende lov", [
     "Lov 467 af 14-5-2025 gælder fra <b>2-8-2025</b>, den første i EU.",
     "<b>Digitaliseringsstyrelsen</b> er bemyndigende myndighed, kontaktpunkt og tilsyn med forbudt praksis; Datatilsynet og Domstolsstyrelsen har også roller.",
     "Strafferetlige sanktioner; regulatorisk sandkasse siden 2024."]),
   ("Forskellen til Spanien",
     "Danmark har allerede det, som det bortfaldne spanske lovforslag skulle indføre: udpegede myndigheder og sanktioner.")],
   srctitle=SRC, srcs=[("Analyse", "AI-Regulation: Danmark offentliggør sin nationale lov", "https://ai-regulation.com/eu-ai-act-implementation-denmark-published-its-national-law/")])},
"rd-centros-datos": {"sec": S_("Danmark", "Og i Danmark?", [
   ("Nettet først", [
     "Energirapportering fra 500 kW (BEK 926/2024).",
     "Nødloven om elnettet (august 2026) placerer datacentre bagerst i køen; nye projekter på pause siden maj 2026.",
     "Overskudsvarme til fjernvarme, omkring 15.000 husstande."]),
   ("Sammenlignet",
     "Spanien stiller krav ved nettilslutning; Danmark prioriterer andre forbrugere i køen. Begge veje gør nettet til den afgørende flaskehals.")],
   srctitle=SRC, srcs=[("IENE", "Nødlov sætter datacentre bagerst i køen (20-8-2026)", "https://www.iene.eu/energy-news/denmark-publishes-emergency-grid-law-that-puts-data-centers-last-p8700.html"),
                       ("DOI", "Aagaard vil kunne sætte datacentre bag i køen", "https://www.doi.dk/en/ptx/artikel/aagaard-vil-have-mulighed-for-at-saette-datacentre-bag-i-koeen")])},
}
