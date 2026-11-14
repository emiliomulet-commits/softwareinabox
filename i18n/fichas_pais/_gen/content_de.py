from common import section_body as S_, table, ROW_TR

SPAIN = "Spanien"
NAV = "Deutschland"
SRC = "Quellen für Deutschland"

CHIPS_RX = [(r"<tr><td><b>24-5-2022</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"<tr><td><b>14-7-2026</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"\s*<li>(?:(?!</li>).)*fundacionbankinter(?:(?!</li>).)*</li>", "")]
ECO_ROW = r'<tr><td><a href="/regulacion/rd-centros-datos/">(?:(?!</tr>).)*</tr>'

EU = {
"rgpd": {
 "sec": S_("Deutschland", "Datenschutzaufsicht in Deutschland", [
   ("Rechtsrahmen und Behörden", [
     "Das <b>BDSG</b> (2018) ergänzt die DSGVO, etwa bei Beschäftigtendaten, Videoüberwachung und Scoring.",
     "Die <b>BfDI</b> beaufsichtigt Bundesbehörden sowie Telekommunikations- und Postdienste; für Unternehmen ist die <b>Landesdatenschutzbehörde</b> am Sitz zuständig.",
     "Die <b>Datenschutzkonferenz (DSK)</b> stimmt die 18 Aufsichtsbehörden ab und veröffentlicht gemeinsame Positionen.",
     "Für personenbezogene Daten im Kontext des Data Act ist ausnahmsweise die BfDI zuständig, nicht die Länder."]),
   ("Was Unternehmen beachten sollten",
     "Ein Datenschutzbeauftragter ist schon ab 20 Personen Pflicht, die ständig mit der automatisierten Verarbeitung personenbezogener Daten befasst sind (§ 38 BDSG). Seit dem EuGH-Urteil C-34/21 (2023) ist § 26 BDSG als eigene Rechtsgrundlage für Beschäftigtendaten nur noch eingeschränkt nutzbar. Bei grenzüberschreitenden Fällen gilt ab dem 2-4-2027 die neue Verfahrensverordnung auch vor den deutschen Behörden.")]),
 "src": [("Deutschland", "Bundesdatenschutzgesetz (BDSG)", "https://www.gesetze-im-internet.de/bdsg_2018/"),
         ("Deutschland", "§ 38 BDSG: Datenschutzbeauftragte nichtöffentlicher Stellen", "https://www.gesetze-im-internet.de/bdsg_2018/__38.html"),
         ("Deutschland", "EuGH, Urteil C-34/21 (30-3-2023)", "https://curia.europa.eu/juris/liste.jsf?num=C-34/21")],
 "R": [("<dt>Spanien</dt><dd>Organgesetz 3/2018 (LOPDGDD) · AEPD</dd>", "<dt>Deutschland</dt><dd>BDSG · BfDI und Landesdatenschutzbehörden</dd>"),
       ("In Spanien beginnen viele Verfahren der AEPD mit einer Datenpanne und enden mit einer Prüfung des gesamten Datenschutzmanagements.",
        "In Deutschland ist die Aufsicht auf die BfDI und 16 Landesbehörden verteilt; Unternehmen haben es in der Regel mit der Behörde ihres Bundeslandes zu tun.")],
 "RX": [(ROW_TR("<td>Spanien: "), "")]},
"du": {
 "sec": S_("Deutschland", "Wie die Strategie in Deutschland ankommt", [
   ("Daten-Governance", [
     "Die <b>Bundesnetzagentur</b> ist zuständige Behörde für Data Act (DADG, seit Mai 2026) und Data Governance Act (Daten-Governance-Gesetz).",
     "Die <b>BfDI</b> übernimmt die datenschutzrechtliche Aufsicht im Anwendungsbereich des Data Act.",
     "Für geschützte Forschungsdaten gibt es die <b>Forschungsdatenzentren</b>; im Gesundheitsbereich das FDZ Gesundheit beim BfArM."]),
   ("Datenräume aus Deutschland",
     "Branchendatenräume wie <b>Catena-X</b> (Automobil) und die Initiative <b>Manufacturing-X</b> sind europäische Referenzen und nutzen Gaia-X- und IDSA-Konzepte. Wer hier anschließt, ist für die Datenlabore und die gemeinsamen Datenräume der Strategie gut aufgestellt.")]),
 "src": [("Deutschland", "Bundesnetzagentur: zuständig für den Data Act (30-5-2026)", "https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2026/20260530_DA.html?nn=660040"),
         ("Deutschland", "Bundestag: Gesetze zur Datennutzung (2./3. Lesung)", "https://www.bundestag.de/dokumente/textarchiv/2026/kw13-de-datennutzung-1156734"),
         ("Deutschland", "Bundesregierung: Data Act und DGA, BNetzA und BfDI (PDF)", "https://www.bundesregierung.de/resource/blob/975954/2403076/15c4a08b3d8727cdf1040d5b60ac400e/05-1-bmds-datenverordnung-bt-data.pdf?download=1")]},
"chips": {
 "sec": S_("Deutschland", "Chips in Deutschland", [
   ("Projekte", [
     "<b>ESMC Dresden</b> (TSMC 70 %, Bosch, Infineon, NXP je 10 %): Grundsteinlegung im August 2024, Richtfest im September 2026, rund 5 Mrd. € Beihilfe bei 10 Mrd. € Investition; Produktionsanlagen ab dem zweiten Halbjahr 2027 (28/22 nm und 16/12 nm).",
     "<b>Intel Magdeburg</b>: Das Projekt mit rund 10 Mrd. € zugesagter Förderung wurde im Juli 2025 endgültig abgesagt.",
     "Dresden (Silicon Saxony) bleibt mit Infineon, Bosch und GlobalFoundries Europas größter Halbleiterstandort.",
     "Fraunhofer koordiniert die Chips-Act-Pilotlinie <b>APECS</b> für Chiplets und heterogene Integration."]),
   ("Was das bedeutet",
     "Deutschland ist größter Empfänger von Beihilfen nach dem Chips Act 2023. Für Version 2.0 zählt vor allem die Nachfrage aus Automobil und Industrie, die Kunden von ESMC und Infineon sind.")]),
 "src": [("Deutschland", "Silicon Saxony: der Chips Act 2.0 im Gesetzgebungsverfahren", "https://silicon-saxony.de/en/european-chips-act-2-0-from-a-political-initiative-to-the-regular-legislative-process/"),
         ("Deutschland", "dpa-AFX: Richtfest der ESMC-Fabrik in Dresden (14-9-2026)", "https://www.deraktionaer.de/nachricht/offizielle-korrektur-richtfest-fuer-neue-dresdner-esmc-mikrochip-fabrik-551356.html"),
         ("Deutschland", "Kommission: Beihilfebeschlüsse für neuartige Anlagen", "https://digital-strategy.ec.europa.eu/en/node/10695")],
 "RX": CHIPS_RX},
"eco": {
 "sec": S_("Deutschland", "Rechenzentren in Deutschland: das EnEfG", [
   ("Energieeffizienzgesetz (EnEfG)", [
     "PUE von höchstens <b>1,2</b> für neue Rechenzentren ab dem 1-7-2026; die Reform gibt vier Jahre Zeit, den Wert zu erreichen.",
     "Bestand: geltend PUE 1,5 ab 2027 und 1,3 ab 2030; die Reform sieht 1,6 und 1,4 vor.",
     "Die Schwelle steigt von 300 kW Anschlussleistung auf 500 kW IT-Leistung; die Auskunftspflicht gegenüber Wärmenetzbetreibern entfällt.",
     "Meldungen an das Energieeffizienzregister des Bundes."]),
   ("Stand",
     "Die Bundesregierung hat die Reform am 24-6-2026 beschlossen; sie liegt im Bundestag. Zusammen mit der europäischen A–G-Einstufung ist das EnEfG der höchste Maßstab für neue Rechenzentren in der EU.")]),
 "src": [("Deutschland", "§ 11 EnEfG: Energieeffiziente Rechenzentren", "https://www.gesetze-im-internet.de/enefg/__11.html"),
         ("Deutschland", "Gleiss Lutz: Gesetzentwurf zur Änderung des EnEfG", "https://www.gleisslutz.com/de/know-how/update-rechenzentren-gesetzentwurf-zur-aenderung-des-energieeffizienzgesetzes-liegt-vor"),
         ("Deutschland", "CMS: EnEfG-Novelle bringt Entlastung für Rechenzentren", "https://cms.law/de/deu/legal-updates/enefg-novelle-bringt-entlastung-fuer-rechenzentren")],
 "RX": [(ECO_ROW, "<tr><td><b>EnEfG</b></td><td>Deutsche Effizienzvorgaben für Rechenzentren (PUE, Abwärme, erneuerbare Energie).</td></tr>")]},
}

NAT = {
"raee": {"sec": S_("Deutschland", "Und in Deutschland? Das ElektroG", [
   ("Pflichten der Hersteller", [
     "Registrierung bei der <b>stiftung elektro-altgeräte register (stiftung ear)</b>, bevor Geräte in Verkehr gebracht werden; die Registrierungsnummer gehört auf Rechnungen.",
     "Monatliche Mengenmeldungen und Garantie für Geräte, die in privaten Haushalten genutzt werden können.",
     "Für reine B2B-Geräte wie Server und Netzwerktechnik muss der Hersteller eine eigene Rücknahme anbieten.",
     "Ausländische Hersteller ohne Niederlassung brauchen einen Bevollmächtigten in Deutschland."]),
   ("Handel",
     "Händler mit mehr als 400 m² Verkaufsfläche für Elektrogeräte, Lebensmittelhändler ab 800 m² mit Elektroangebot und Onlinehändler nehmen Altgeräte zurück. Die Kommunen sammeln an Wertstoffhöfen.")],
   srctitle=SRC, srcs=[("Gesetz", "Elektro- und Elektronikgerätegesetz (ElektroG)", "https://www.gesetze-im-internet.de/elektrog_2015/"),
                       ("Gesetz", "§ 6 ElektroG: Registrierungspflicht", "https://www.gesetze-im-internet.de/elektrog_2015/__6.html")])},
"factura-electronica": {"sec": S_("Deutschland", "Und in Deutschland?", [
   ("E-Rechnung nach § 14 UStG", [
     "Seit 1-1-2025 müssen alle Unternehmen E-Rechnungen <b>empfangen</b> können.",
     "Ausstellungspflicht ab <b>1-1-2027</b> bei mehr als 800.000 € Vorjahresumsatz und ab <b>1-1-2028</b> für alle.",
     "Formate XRechnung oder ZUGFeRD (ab Profil EN 16931); EDI bleibt bis 2027 übergangsweise zulässig.",
     "Keine zentrale Plattform und kein Peppol-Zwang: Versand per E-Mail ist erlaubt; Kleinunternehmer nach § 19 UStG sind ausgenommen.",
     "Drittes BMF-Schreiben vom 15-10-2026: Eine sonstige Rechnung statt der Pflicht-E-Rechnung ist keine Ordnungswidrigkeit; die Pflicht bleibt bestehen."]),
   ("Wenn Sie auch nach Spanien verkaufen",
     "Für Rechnungen an spanische Geschäftskunden gelten die spanischen Fristen (Oktober 2027 bzw. 2028) und das dortige System mit öffentlicher Lösung der AEAT. Ein Rechnungssystem, das EN 16931 beherrscht, deckt beide Länder ab; die spanische Zahlungsstatusmeldung kommt hinzu.")],
   srctitle=SRC, srcs=[("IHK", "IHK Stuttgart: Ende der Übergangsfrist ab 800.000 €", "https://www.ihk.de/stuttgart/fuer-unternehmen/recht-und-steuern/steuerrecht/steuermeldungen/e-rechnung-5864496"),
                       ("Beratung", "Grant Thornton: E-Rechnungspflicht 2027", "https://www.grantthornton.de/themen/2026/e-rechnungspflicht-2027-die-wichtigsten-fragen-und-antworten-zur-e-rechnung/"),
                       ("IHK", "IHK Osnabrück: BMF-Schreiben vom 15-10-2026", "https://www.ihk.de/osnabrueck/recht-und-fair-play/steuerrecht/aktuell/e-rechnung-bmf-veroeffentlicht-weitere-klarstellungen-7217772")])},
"ens": {"sec": S_("Deutschland", "Und in Deutschland? IT-Grundschutz, C5 und NIS2", [
   ("Öffentlicher Sektor", [
     "Bundesbehörden arbeiten nach dem <b>IT-Grundschutz</b> des BSI und den BSI-Mindeststandards, darunter der Mindeststandard zur Nutzung externer Cloud-Dienste.",
     "Für Cloud-Anbieter ist der <b>C5-Kriterienkatalog</b> des BSI mit Testat eines Wirtschaftsprüfers der übliche Nachweis gegenüber Behörden.",
     "Länder und Kommunen haben eigene Regeln; viele verlangen IT-Grundschutz oder ISO 27001 auf Basis von IT-Grundschutz."]),
   ("NIS2",
     "Seit dem 6-12-2025 gilt das neue BSIG (NIS2UmsuCG) ohne Übergangsfrist; rund 29.500 Einrichtungen müssen sich beim BSI registrieren, und die Geschäftsleitung haftet nach § 38 BSIG. Ein deutsches Gegenstück zur spanischen ENS-Zertifizierung gibt es nicht: Nachweise laufen über ISO 27001, IT-Grundschutz oder C5.")],
   srctitle=SRC, srcs=[("BSI", "BSI: Kriterienkatalog C5", "https://bsi.bund.de/EN/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Kriterienkatalog-C5/kriterienkatalog-c5.html"),
                       ("NIS2", "usd: NIS2UmsuCG tritt am 6-12-2025 in Kraft", "https://www.usd.de/?p=62434")])},
"ley-gobernanza-ia": {"sec": S_("Deutschland", "Und in Deutschland? Das KI-MIG", [
   ("Durchführungsgesetz", [
     "Das <b>KI-Marktüberwachungs- und Innovationsförderungsgesetz (KI-MIG)</b> vom 22-7-2026 gilt seit dem 29-7-2026.",
     "Die <b>Bundesnetzagentur</b> ist Marktüberwachungsbehörde, zentrale Anlaufstelle und Beschwerdestelle; BaFin und andere Fachbehörden bleiben in ihren Sektoren zuständig.",
     "Eine unabhängige KI-Marktüberwachungskammer prüft bestimmte Hochrisikosysteme und berichtet dem Bundestag.",
     "KI-Service-Desk für KMU und ein Reallabor bei der Bundesnetzagentur; Einsprüche gegen Bußgelder gehen an das Amtsgericht."]),
   ("Der Unterschied zu Spanien",
     "Deutschland hat das, was Spanien mit dem verfallenen Gesetzentwurf vorhatte, bereits umgesetzt: benannte Behörden, Sanktionen und ein Reallabor. Für Anbieter in Deutschland ist das KI-MIG maßgeblich; das spanische Projekt zählt nur für den Verkauf nach Spanien.")],
   srctitle=SRC, srcs=[("Gesetz", "KI-MIG (gesetze-im-internet.de)", "https://www.gesetze-im-internet.de/ki-mig/BJNR0DF0B0026.html"),
                       ("BNetzA", "Bundesnetzagentur: zentrale Rolle bei der KI-Verordnung (29-7-2026)", "https://bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2026/20260729_KI_VO.html?nn=1056906"),
                       ("Analyse", "LTO: Das Gesetz hinter dem AI Act tritt in Kraft", "https://www.lto.de/recht/hintergruende/h/kuenstliche-intelligenz-ai-act-ki-mg-aufsicht-bussgeld")])},
"rd-centros-datos": {"sec": S_("Deutschland", "Und in Deutschland? Das EnEfG", [
   ("Vorgaben für Rechenzentren", [
     "PUE höchstens <b>1,2</b> für neue Rechenzentren; Bestand geltend 1,5 ab 2027 und 1,3 ab 2030 (Reform: 1,6 und 1,4).",
     "Pflicht zu erneuerbarem Strom und zur Abwärmenutzung; die Reform streicht die Auskunftspflicht gegenüber Wärmenetzbetreibern.",
     "Die Reform (Kabinett 24-6-2026) hebt die Schwelle von 300 kW auf 500 kW IT-Leistung an und liegt im Bundestag.",
     "Erste nationale Rechenzentrumsstrategie vom 18-3-2026."]),
   ("Im Vergleich",
     "Deutschland regelt Effizienz statt Netzzugang: Es gibt keine Bedingung wie die spanische Verknüpfung des Netzanschlusses mit Erneuerbaren, Klasse A und Datensouveränität. Wer in beiden Ländern baut, muss mit dem deutschen PUE und den spanischen Netzauflagen planen.")],
   srctitle=SRC, srcs=[("Gesetz", "§ 11 EnEfG", "https://www.gesetze-im-internet.de/enefg/__11.html"),
                       ("Strategie", "Gleiss Lutz: Bundesregierung beschließt Rechenzentrumsstrategie", "https://www.gleisslutz.com/de/know-how/update-rechenzentren-bundesregierung-beschliesst-erste-nationale-rechenzentrumsstrategie"),
                       ("Analyse", "Cloudmagazin: EnEfG-Novelle lockert PUE-Grenzen", "https://www.cloudmagazin.com/2026/07/06/enefg-novelle-rechenzentren-pflichten-gelockert/")])},
}
