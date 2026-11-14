from common import section_body as S_, ROW_TR

SPAIN = "Spanje"
NAV = "België"
SRC = "Bronnen voor België"

CHIPS_RX = [(r"<tr><td><b>24-5-2022</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"<tr><td><b>14-7-2026</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"\s*<li>(?:(?!</li>).)*fundacionbankinter(?:(?!</li>).)*</li>", "")]
ECO_ROW = r'<tr><td><a href="/regulacion/rd-centros-datos/">(?:(?!</tr>).)*</tr>'

EU = {
"rgpd": {
 "sec": S_("België", "Gegevensbescherming in België", [
   ("Kader en toezichthouder", [
     "De <b>wet van 30-7-2018</b> betreffende de bescherming van natuurlijke personen vult de AVG aan.",
     "De <b>Gegevensbeschermingsautoriteit (GBA)</b>, opgericht bij de wet van 3-12-2017, is de toezichthouder.",
     "De GBA werd in 2023 en 2024 hervormd (samenstelling en beroep door derden)."]),
   ("Wat dit betekent",
     "De GBA behandelt klachten via haar geschillenkamer; beroep kan bij het Marktenhof. Voor grensoverschrijdende zaken geldt vanaf 2-4-2027 de nieuwe procedureverordening.")]),
 "src": [("België", "Gegevensbeschermingsautoriteit", "https://www.gegevensbeschermingsautoriteit.be/"),
         ("België", "Justel: wet van 30 juli 2018", "https://www.ejustice.just.fgov.be/")],
 "R": [("<dt>Spanje</dt><dd>Organieke wet 3/2018 (LOPDGDD) · AEPD</dd>", "<dt>België</dt><dd>Wet van 30-7-2018 · GBA</dd>"),
       ("In Spanje beginnen veel onderzoeken van de AEPD met een datalek en eindigen ze met een toetsing van het hele privacybeheer.",
        "In België behandelt de GBA vooral individuele klachten, waarover haar geschillenkamer beslist.")],
 "RX": [(ROW_TR("<td>Spanje: "), "")]},
"du": {
 "sec": S_("België", "Hoe de strategie in België landt", [
   ("Datagovernance", [
     "Het <b>BIPT</b> moet de autoriteit voor de Data Act worden, samen met de FOD Economie en de GBA; de hervorming van zijn statuut is in voorbereiding.",
     "In Vlaanderen beheert <b>Athumi</b> persoonlijke datakluizen (Solid).",
     "De <b>Health Data Agency</b> (HDA), actief sinds januari 2024, is al het toegangsorgaan voor gezondheidsgegevens."]),
   ("Dataruimten",
     "België is een van de weinige landen met een werkend toegangsorgaan voor gezondheidsdata. Statbel biedt beveiligde toegang tot microdata voor onderzoek.")]),
 "src": [("België", "BIPT", "https://www.bipt.be/"),
         ("België", "Athumi", "https://www.athumi.be/")],
 "R": [("zoals de remote-accessomgeving van het CBS.", "zoals de beveiligde microdatatoegang van Statbel.")]},
"chips": {
 "sec": S_("België", "Chips in België", [
   ("Projecten", [
     "<b>NanoIC</b>, pilotlijn van de Chips Act bij imec in Leuven: 2,5 Md€, waarvan 700 M€ van de EU, geopend op 9-2-2026.",
     "Het <b>Flanders Chips Competence Center</b> (FC3) ondersteunt kmo's en start-ups.",
     "imec is een van de belangrijkste onderzoekscentra voor nano-elektronica ter wereld."]),
   ("Wat dit betekent",
     "België is het laboratorium van de Chips Act voor nodes voorbij 2 nm. Voor versie 2.0 draait het om de toegang van Europese bedrijven tot die pilotlijnen.")]),
 "src": [("België", "imec: NanoIC", "https://www.imec-int.com/")],
 "RX": CHIPS_RX},
"eco": {
 "sec": S_("België", "Datacenters in België", [
   ("Kader", [
     "Geen specifieke wet: gewestelijke vergunningen.",
     "Elia maakt een categorie «datacenter» met een maximale capaciteit; de CREG wijzigt de aansluitingscode («use it or lose it», 29-1-2026).",
     "Vlaanderen stelt voor datacenters achteraan de wachtrij te zetten; Wallonië verzamelt de EED-rapporten."]),
   ("Stand",
     "In België is het net de flessenhals, niet een eigen regeling voor datacenters.")]),
 "src": [("België", "Elia", "https://www.elia.be/"), ("België", "CREG", "https://www.creg.be/")],
 "RX": [(ECO_ROW, "<tr><td><b>Net (Elia, CREG)</b></td><td>Belgische aansluitingsregels die de capaciteit voor datacenters beperken.</td></tr>")]},
}

NAT = {
"raee": {"sec": S_("België", "En in België?", [
   ("Verplichtingen van producenten", [
     "De terugnameplicht wordt geregeld door de <b>drie gewesten</b> (Vlarema in Vlaanderen, Waalse en Brusselse besluiten).",
     "Aansluiting bij <b>Recupel</b> of een individueel afvalbeheerplan.",
     "Aangifte van de op de markt gebrachte hoeveelheden.",
     "Professionele apparatuur (servers, netwerk) valt er ook onder."]),
   ("Handel",
     "«Eén-voor-één»-terugname in de winkel; inzamelpunten van Recupel en recyclageparken.")],
   srctitle=SRC, srcs=[("Recupel", "Recupel", "https://www.recupel.be/")])},
"factura-electronica": {"sec": S_("België", "En in België?", [
   ("B2B-e-facturatie", [
     "Verplicht sinds <b>1-1-2026</b> tussen in België gevestigde ondernemingen (tolerantie tot 31-3-2026); een pdf volstaat niet meer.",
     "Formaat <b>Peppol BIS 3.0</b> via het vierhoeksmodel.",
     "Bijna realtime e-reporting vanaf <b>1-1-2028</b>, ter vervanging van de jaarlijkse klantenlisting.",
     "Boetes van 1.500, 3.000 en 5.000 €."]),
   ("Als u ook in Spanje verkoopt",
     "Voor Spaanse klanten gelden de Spaanse termijnen (oktober 2027 en 2028). Een Peppol-systeem conform EN 16931 dekt beide landen.")],
   srctitle=SRC, srcs=[("FOD Financiën", "eFactuur: FOD Financiën", "https://efactuur.belgium.be/")])},
"ens": {"sec": S_("België", "En in België?", [
   ("CyberFundamentals", [
     "Het <b>CCB</b> ontwikkelde een eigen conformiteitskader, <b>CyberFundamentals (CyFun®)</b>, met verificatie of certificering per categorie.",
     "CyFun® of ISO 27001 gelden als vermoeden van conformiteit met NIS2.",
     "Geen NIS2-boetes voor overheidsdiensten."]),
   ("NIS2",
     "De wet van 26-4-2024 geldt sinds 18-10-2024. CyFun® komt het dichtst bij het Spaanse ENS, maar geldt voor alle NIS2-entiteiten en niet alleen voor de overheid.")],
   srctitle=SRC, srcs=[("CCB", "Safeonweb@work", "https://atwork.safeonweb.be/"),
                       ("CCB", "Centrum voor Cybersecurity België", "https://ccb.belgium.be/")])},
"ley-gobernanza-ia": {"sec": S_("België", "En in België?", [
   ("Nog geen wet", [
     "Het <b>BIPT</b> is sinds 2025 aangekondigd als hoofdautoriteit (regeerakkoord 2025-2029).",
     "De FOD Economie coördineert.",
     "In september 2026 was er nog geen wettelijke basis."]),
   ("Net als in Spanje",
     "België heeft nog geen wet met autoriteiten en sancties. De verordening geldt rechtstreeks.")],
   srctitle=SRC, srcs=[("BIPT", "BIPT", "https://www.bipt.be/")])},
"rd-centros-datos": {"sec": S_("België", "En in België?", [
   ("Eerst het net", [
     "Geen specifieke wet; gewestelijke vergunningen.",
     "Elia begrenst de capaciteit voor datacenters; de CREG past «use it or lose it» toe.",
     "Vlaanderen wil datacenters achteraan de wachtrij zetten."]),
   ("In vergelijking",
     "Spanje verbindt de aansluiting aan milieueisen; België beperkt de capaciteit.")],
   srctitle=SRC, srcs=[("Elia", "Elia", "https://www.elia.be/")])},
}
