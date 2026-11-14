from common import section_body as S_, ROW_TR

SPAIN = "Spanje"
NAV = "Nederland"
SRC = "Bronnen voor Nederland"

CHIPS_RX = [(r"<tr><td><b>24-5-2022</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"<tr><td><b>14-7-2026</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"\s*<li>(?:(?!</li>).)*fundacionbankinter(?:(?!</li>).)*</li>", "")]
ECO_ROW = r'<tr><td><a href="/regulacion/rd-centros-datos/">(?:(?!</tr>).)*</tr>'

EU = {
"rgpd": {
 "sec": S_("Nederland", "Privacytoezicht in Nederland", [
   ("Kader en toezichthouder", [
     "De <b>Uitvoeringswet AVG (UAVG)</b> vult de AVG aan, onder meer voor bijzondere persoonsgegevens, het BSN en strafrechtelijke gegevens.",
     "De <b>Autoriteit Persoonsgegevens (AP)</b> is de enige toezichthouder en sinds 2023 ook coördinerend toezichthouder op algoritmes.",
     "Datalekken meldt u binnen 72 uur via het meldloket van de AP."]),
   ("Wat dit betekent",
     "De AP legde in 2024 hoge boetes op aan Uber (290 mln. €, doorgifte naar de VS) en Clearview AI (30,5 mln. €), en op 21-8-2026 nog eens 825 mln. € aan Uber voor geautomatiseerde besluitvorming (Uber gaat in beroep). Voor grensoverschrijdende zaken geldt vanaf 2-4-2027 de nieuwe procedureverordening.")]),
 "src": [("Nederland", "NOS: 290 miljoen euro boete voor Uber", "https://nos.nl/l/2534629"),
         ("Nederland", "Associated Press: 825 mln. € boete voor Uber (21-8-2026)", "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/08/21/uber-fined-nearly-1-billion-by-dutch-regulators-over-automated-suspensions-of-driver-accounts"),
         ("Nederland", "Uitvoeringswet AVG (wetten.overheid.nl)", "https://wetten.overheid.nl/BWBR0040940/")],
 "R": [("<dt>Spanje</dt><dd>Organieke wet 3/2018 (LOPDGDD) · AEPD</dd>", "<dt>Nederland</dt><dd>UAVG · Autoriteit Persoonsgegevens</dd>"),
       ("In Spanje beginnen veel onderzoeken van de AEPD met een datalek en eindigen ze met een toetsing van het hele privacybeheer.",
        "In Nederland is de AP de enige toezichthouder en gebruikt zij boetes vooral bij doorgiftes en grootschalige verwerking.")],
 "RX": [(ROW_TR("<td>Spanje: "), "")]},
"du": {
 "sec": S_("Nederland", "Hoe de strategie in Nederland landt", [
   ("Datagovernance", [
     "De <b>ACM</b> is sinds 21-11-2025 bevoegde autoriteit en datacoördinator voor de Data Act en publiceerde als eerste nationale toezichthouder leidraden over datadeling en cloud.",
     "De AP houdt toezicht op de privacyaspecten.",
     "Voor beschermde data biedt het <b>CBS</b> remote access aan onderzoekers."]),
   ("Dataruimten",
     "<b>TNO</b> coördineert het Data Spaces Support Centre (DSSC) van de EU, en het iSHARE-afsprakenstelsel komt uit de Nederlandse logistiek. Nederlandse bedrijven hebben zo directe toegang tot de bouwstenen van de gemeenschappelijke dataruimten.")]),
 "src": [("Nederland", "ACM: bevoegd voor de Data Act (21-11-2025)", "https://www.acm.nl/nl/node/28519"),
         ("Nederland", "Data Spaces Support Centre", "https://dssc.eu/")]},
"chips": {
 "sec": S_("Nederland", "Chips in Nederland", [
   ("Projecten", [
     "<b>Project Beethoven</b> (28-3-2024): 2,51 mld. € om ASML in Eindhoven te houden en de regio Brainport te versterken (talent, woningen, infrastructuur).",
     "Het <b>ChipNL Competence Centre</b> (gestart 16-12-2024, 12 mln. € van de EU en RVO) helpt mkb en start-ups bij toegang tot Europese pilotlijnen.",
     "Sterke posities in lithografie (ASML), apparatuur en geïntegreerde fotonica (PhotonDelta)."]),
   ("Wat dit betekent",
     "Nederland is vooral leverancier van machines en ontwerpkennis. Voor de Chips Act 2.0 telt de vraag naar exportcontrole en het behoud van kennis in Europa.")]),
 "src": [("Nederland", "Brainport Eindhoven: start ChipNL Competence Centre", "https://brainporteindhoven.com/int/news/the-netherlands-introduces-the-chipnl-competence-centre-to-drive-semiconductor-innovation"),
         ("Nederland", "Rijksoverheid: 2,51 miljard voor Brainport Eindhoven (28-3-2024)", "https://www.rijksoverheid.nl/actueel/nieuws/2024/03/28/nederland-investeert-25-miljard-euro-in-sterk-ondernemingsklimaat-voor-microchipsector-brainport-eindhoven")],
 "RX": CHIPS_RX},
"eco": {
 "sec": S_("Nederland", "Datacenters in Nederland", [
   ("Nationaal kader", [
     "Hyperscale-datacenters (meer dan 10 ha <b>en</b> 70 MW) zijn verboden buiten Eemshaven en Wieringermeer.",
     "Lokale moratoria, zoals in Amsterdam, en netcongestie beperken ook middelgrote projecten.",
     "Datacenters vanaf 500 kW rapporteren hun prestaties in de Europese databank (EED)."]),
   ("Stand",
     "Nederland is het meest restrictieve land van de groep. De Tweede Kamer vroeg in maart 2026 om een strengere definitie om verkapte hyperscale-projecten tegen te houden.")]),
 "src": [("Nederland", "NOS: hyperscales alleen welkom op twee plekken", "https://nos.nl/l/2432219"),
         ("Nederland", "Dutch IT Channel: Kamer wil strengere regels voor verkapte hyperscales", "https://www.dutchitchannel.nl/news/725894/kamer-wil-strengere-regels-voor-verkapte-hyperscale-datacenters")],
 "RX": [(ECO_ROW, "<tr><td><b>Hyperscale-verbod</b></td><td>Nederlands ruimtelijk kader dat grote datacenters beperkt tot twee locaties.</td></tr>")]},
}

NAT = {
"raee": {"sec": S_("Nederland", "En in Nederland?", [
   ("Verplichtingen van producenten", [
     "<b>Regeling afgedankte elektrische en elektronische apparatuur</b> en het Besluit beheer elektrische en elektronische apparatuur.",
     "Producenten melden zich bij het <b>Nationaal (W)EEE Register</b> en sluiten zich meestal aan bij <b>Stichting OPEN</b>.",
     "Jaarlijkse rapportage van de op de markt gebrachte hoeveelheden; buitenlandse producenten wijzen een gemachtigde aan.",
     "Voor zakelijke apparatuur (servers, netwerk) gelden eigen inzamelafspraken."]),
   ("Handel",
     "Winkels nemen een oud apparaat in bij aankoop van een vergelijkbaar nieuw; grote winkels nemen kleine apparaten ook zonder aankoop in.")],
   srctitle=SRC, srcs=[("Register", "Nationaal (W)EEE Register", "https://www.nationaalweeeregister.nl/"),
                       ("Organisatie", "Stichting OPEN", "https://www.stichting-open.org/")])},
"factura-electronica": {"sec": S_("Nederland", "En in Nederland?", [
   ("E-factuur", [
     "B2B is nog <b>vrijwillig</b> en vraagt instemming van de afnemer.",
     "B2G is verplicht via Peppol of Digipoort.",
     "Het kabinet besloot op 11-9-2026 tot een binnenlandse B2B-verplichting vanaf <b>1-7-2030</b> en e-reporting vanaf 2031, op basis van EN 16931.",
     "Peppol wordt aanbevolen, maar er is nog geen definitief besluit; consultatie in het vierde kwartaal van 2026."]),
   ("Als u ook in Spanje verkoopt",
     "Voor Spaanse zakelijke klanten gelden de Spaanse termijnen (oktober 2027 en 2028). Een systeem dat EN 16931 en Peppol ondersteunt, dekt beide landen.")],
   srctitle=SRC, srcs=[("Analyse", "Sovos: verplichte e-facturatie vanaf juli 2030", "https://sovos.com/regulatory-updates/global-vat/netherlands-confirms-plans-for-mandatory-e-invoicing-from-july-2030/"),
                       ("Analyse", "Fiscal Requirements: B2B blijft vrijwillig in 2026", "https://www.fiscal-requirements.com/news/5786-dutch-b2b-e-invoicing-voluntary-in-2026-mandates-vida-timeline-and-compliance-rules")])},
"ens": {"sec": S_("Nederland", "En in Nederland?", [
   ("Overheid", [
     "De <b>Baseline Informatiebeveiliging Overheid (BIO2)</b> geldt voor rijk, provincies, gemeenten en waterschappen; vastgesteld op 23-9-2025 en via de Cbw verplicht.",
     "Versie 1.3 is gepubliceerd in de Staatscourant (Stcrt. 2026, 7416).",
     "Geen certificering zoals het Spaanse ENS: aantonen gaat via ISO 27001 en ENSIA-verantwoording."]),
   ("NIS2",
     "De Cyberbeveiligingswet (Cbw) geldt sinds 15-8-2026 zonder overgangsperiode. Toezicht is sectoraal; registratie bij het NCSC.")],
   srctitle=SRC, srcs=[("Staatscourant", "Stcrt. 2026, 7416: BIO2 versie 1.3", "https://zoek.officielebekendmakingen.nl/stcrt-2026-7416.pdf"),
                       ("Eerste Kamer", "Dossier 36764 Cyberbeveiligingswet", "https://www.eerstekamer.nl/wetsvoorstel/36764_cyberbeveiligingswet?df1=all")])},
"ley-gobernanza-ia": {"sec": S_("Nederland", "En in Nederland?", [
   ("Uitvoeringswet in consultatie", [
     "De Uitvoeringswet AI-verordening (Uvai) lag van 20-4 tot 1-6-2026 in internetconsultatie; in november 2026 was er nog geen wet.",
     "Tien toezichthouders (AP, RDI, ILT, IGJ, NVWA, Arbeidsinspectie, AFM, DNB en anderen); de <b>AP</b> en de <b>RDI</b> coördineren.",
     "De RDI wordt contactpunt en aanmeldende autoriteit."]),
   ("Net als in Spanje",
     "Ook Nederland heeft nog geen wet met autoriteiten en sancties. De AI-verordening geldt rechtstreeks en de AP houdt al sinds 2023 toezicht op algoritmes.")],
   srctitle=SRC, srcs=[("Consultatie", "Internetconsultatie Uitvoeringswet AI-verordening", "https://www.internetconsultatie.nl/uaiv"),
                       ("Rijksoverheid", "Kabinet zet stap met toezicht op Europese AI-regels (20-4-2026)", "https://www.rijksoverheid.nl/actueel/nieuws/2026/04/20/kabinet-zet-stap-met-toezicht-op-europese-ai-regels")])},
"rd-centros-datos": {"sec": S_("Nederland", "En in Nederland?", [
   ("Ruimtelijk verbod", [
     "Hyperscale (meer dan 10 ha en 70 MW) alleen in Eemshaven en Wieringermeer.",
     "Lokale moratoria (Amsterdam) en netcongestie: ongeveer 15.000 bedrijven wachten op een aansluiting.",
     "Geen voorwaarden voor uurlijkse hernieuwbare stroom of efficiëntieklasse zoals in Spanje."]),
   ("In vergelijking",
     "Spanje stelt voorwaarden aan de netaansluiting; Nederland beperkt de locatie. Wie in beide landen bouwt, krijgt met allebei te maken.")],
   srctitle=SRC, srcs=[("NOS", "Hyperscales alleen welkom op twee plekken", "https://nos.nl/l/2432219"),
                       ("Tweede Kamer", "Antwoorden over nieuwe hyperscale in Amsterdam (2-4-2026)", "https://zoek.officielebekendmakingen.nl/ah-tk-20252026-1519.pdf")])},
}
