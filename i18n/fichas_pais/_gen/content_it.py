from common import section_body as S_, ROW_TR

SPAIN = "Spagna"
NAV = "Italia"
SRC = "Fonti per l'Italia"

CHIPS_RX = [(r"<tr><td><b>24-5-2022</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"<tr><td><b>14-7-2026</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"\s*<li>(?:(?!</li>).)*fundacionbankinter(?:(?!</li>).)*</li>", "")]
ECO_ROW = r'<tr><td><a href="/regulacion/rd-centros-datos/">(?:(?!</tr>).)*</tr>'

EU = {
"rgpd": {
 "sec": S_("Italia", "La protezione dei dati in Italia", [
   ("Quadro e autorità", [
     "Il <b>Codice privacy</b> (D.Lgs. 196/2003, adeguato dal D.Lgs. 101/2018) integra il GDPR.",
     "Il <b>Garante per la protezione dei dati personali</b> è l'autorità di controllo.",
     "Regole nazionali su dati sanitari, ricerca, lavoro e consenso dei minori (14 anni)."]),
   ("Cosa sapere",
     "Il Garante è molto attivo sull'IA e sulle piattaforme. Ha bloccato DeepSeek (gennaio 2025). Aveva sanzionato OpenAI per 15 M€, ma il 18-3-2026 il Tribunale di Roma ha annullato la sanzione: la competenza spettava all'autorità irlandese (sportello unico). Il 14-11-2026 ha sanzionato Meta per 805 M€ perché Facebook accedeva alla galleria dei telefoni Android senza consenso. La base è l'art. 122 del Codice privacy (direttiva ePrivacy), dove lo sportello unico non si applica. Meta ha annunciato ricorso. Per i casi transfrontalieri si applica dal 2-4-2027 il nuovo regolamento procedurale.")]),
 "src": [("Italia", "ANSA: il Garante sanziona Meta per 805 M€ (14-11-2026)", "https://www.ansa.it/sito/notizie/politica/2026/11/14/garante-805-milioni-di-multa-a-meta-per-luso-di-foto-su-fb-senza-consenso_c28909e5-4d3b-4ec6-9d7c-e23ea349b64d.html"),
         ("Italia", "Diritto.it: il Tribunale di Roma annulla la sanzione a OpenAI", "https://www.diritto.it/open-ai-annullata-la-sanzione-del-garante-privacy/"),
         ("Italia", "Codice in materia di protezione dei dati personali (Normattiva)", "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-06-30;196")],
 "R": [("<dt>Spagna</dt><dd>Legge organica 3/2018 (LOPDGDD) · AEPD</dd>", "<dt>Italia</dt><dd>Codice privacy · Garante</dd>"),
       ("In Spagna molti procedimenti dell'AEPD iniziano da una violazione e finiscono per esaminare tutta la gestione della protezione dei dati.",
        "In Italia il Garante interviene spesso anche con provvedimenti d'urgenza, come nei casi dei servizi di IA generativa.")],
 "RX": [(ROW_TR("<td>Spagna: "), "")]},
"du": {
 "sec": S_("Italia", "Come arriva la strategia in Italia", [
   ("Governance dei dati", [
     "Il <b>D.Lgs. 144/2024</b> attua il Data Governance Act con <b>AgID</b> come autorità; dal maggio 2026 c'è uno sportello unico per i dati protetti.",
     "Per il Data Act non è ancora designata un'autorità.",
     "La <b>PDND</b> (Piattaforma Digitale Nazionale Dati) consente lo scambio di dati tra amministrazioni."]),
   ("Spazi di dati",
     "L'Istat offre l'accesso sicuro ai microdati (laboratorio ADELE). Nella sanità, il Fascicolo sanitario elettronico 2.0 e l'Ecosistema dati sanitari (PNRR) preparano lo spazio europeo dei dati sanitari.")]),
 "src": [("Italia", "AgID: sportello unico nazionale dei dati protetti", "https://www.agid.gov.it/en/node/426"),
         ("Italia", "PDND Interoperabilità", "https://www.interop.pagopa.it/")]},
"chips": {
 "sec": S_("Italia", "I chip in Italia", [
   ("Progetti", [
     "<b>STMicroelectronics Catania</b>: campus per il carburo di silicio, 5 Md€ di investimento e 2 Md€ di aiuti approvati il 31-5-2024.",
     "<b>Silicon Box Novara</b>: 1,3 Md€ di aiuti su 3,2 Md€ di investimento (approvati il 18-12-2024).",
     "Linea pilota WBG del Chips Act (Chip4Power) con il CNR-IMM di Catania."]),
   ("Cosa significa",
     "L'Italia punta su elettronica di potenza e packaging avanzato. Per la versione 2.0 conta la domanda dell'automotive e dell'energia.")]),
 "src": [("Italia", "Commissione: aiuto di Stato a Silicon Box (18-12-2024)", "https://italy.representation.ec.europa.eu/notizie-ed-eventi/notizie/la-commissione-approva-una-misura-italiana-di-aiuti-di-stato-13-miliardi-di-eu-favore-di-silicon-box-2024-12-18_it")],
 "RX": CHIPS_RX},
"eco": {
 "sec": S_("Italia", "I data center in Italia", [
   ("Quadro nazionale", [
     "<b>Autorizzazione unica</b> in 10 mesi (+3) che integra la VIA (DL 21/2026, art. 8; L. 49/2026).",
     "Disegno di legge delega al Senato: data center come infrastruttura strategica nazionale e preferenza per le aree dismesse.",
     "Comunicazione dei dati nella banca dati europea per i centri da 500 kW (direttiva EED)."]),
   ("Situazione",
     "L'Italia semplifica per attrarre investimenti. Le richieste di connessione alla rete, molte speculative, superano i 78 GW.")]),
 "src": [("Italia", "A&O Shearman: Italy cuts red tape for data centers", "https://www.aoshearman.com/en/insights/italy-cuts-red-tape-for-data-centers")],
 "RX": [(ECO_ROW, "<tr><td><b>Autorizzazione unica</b></td><td>Procedimento italiano unico per i data center (DL 21/2026).</td></tr>")]},
}

NAT = {
"raee": {"sec": S_("Italia", "E in Italia?", [
   ("Obblighi dei produttori", [
     "Disciplina RAEE del <b>D.Lgs. 49/2014</b>.",
     "Iscrizione al <b>Registro nazionale AEE</b> presso le Camere di commercio e numero di iscrizione sui documenti.",
     "Adesione a un sistema collettivo coordinato dal <b>Centro di Coordinamento RAEE</b>.",
     "Le apparecchiature professionali (server, rete) seguono il canale dei RAEE professionali."]),
   ("Distribuzione",
     "Ritiro «uno contro uno» all'acquisto e «uno contro zero» per i piccoli RAEE nei negozi oltre 400 m².")],
   srctitle=SRC, srcs=[("Registro", "Registro AEE", "https://www.registroaee.it/"),
                       ("CdC RAEE", "Centro di Coordinamento RAEE", "https://www.cdcraee.it/")])},
"factura-electronica": {"sec": S_("Italia", "E in Italia?", [
   ("Fatturazione elettronica", [
     "Obbligatoria B2B e B2C dal <b>1-1-2019</b> tramite il <b>Sistema di Interscambio (SdI)</b>; per i forfettari dal 2024.",
     "Modello «clearance»: ogni fattura passa dallo SdI in formato FatturaPA XML.",
     "Le fatture estere via SdI sostituiscono l'esterometro; autorizzazione UE prorogata fino al 31-12-2027."]),
   ("Se vende anche in Spagna",
     "Per i clienti spagnoli valgono le scadenze spagnole (ottobre 2027 e 2028). Lo SdI non basta: serve un sistema che produca EN 16931 per la Spagna.")],
   srctitle=SRC, srcs=[("Analisi", "Agenda Digitale: lo SdI centralizza la fatturazione", "https://www.agendadigitale.eu/?p=264360"),
                       ("Analisi", "PMI.it: autorizzazione UE prorogata al 31-12-2027", "https://www.pmi.it/tecnologia/software-e-web/492982/fatturazione-elettronica-novita-fatture-in-cloud.html")])},
"ens": {"sec": S_("Italia", "E in Italia?", [
   ("Pubblica amministrazione", [
     "Il <b>Regolamento cloud dell'ACN</b> (in vigore dal 1-8-2024) classifica dati e servizi e qualifica i fornitori in quattro livelli (QC1–QC4).",
     "Le amministrazioni possono usare solo servizi cloud qualificati.",
     "Misure minime di sicurezza ICT per le PA e Perimetro di sicurezza nazionale cibernetica."]),
   ("NIS2",
     "Il D.Lgs. 138/2024 è in vigore dal 16-10-2024; le misure di base sono esigibili dal 31-10-2026. La qualificazione ACN è l'equivalente più vicino alla certificazione ENS spagnola.")],
   srctitle=SRC, srcs=[("Analisi", "Agenda Digitale: il Regolamento cloud ACN (QC1–QC4)", "https://www.agendadigitale.eu/?p=212649"),
                       ("NIS2", "PuntoSicuro: misure NIS2 entro il 31-10-2026", "https://www.puntosicuro.it/security-C-125/scadenza-nis-2-entro-il-31-ottobre-2026-l-adeguamento-delle-misure-AR-26868/")])},
"ley-gobernanza-ia": {"sec": S_("Italia", "E in Italia?", [
   ("Legge nazionale sull'IA", [
     "La <b>L. 132/2025</b> (in vigore dal 10-10-2025) è la prima legge nazionale sull'IA nell'UE; il <b>D.Lgs. 179/2026</b> (dal 23-10-2026) completa il quadro.",
     "<b>AgID</b> è autorità di notifica e <b>ACN</b> di vigilanza del mercato e punto di contatto unico; Banca d'Italia, CONSOB e IVASS nel settore finanziario.",
     "Regole proprie su lavoro, sanità, professioni e PA; reato di deepfake; formazione sull'IA obbligatoria."]),
   ("La differenza con la Spagna",
     "L'Italia ha fatto ciò che il progetto spagnolo decaduto voleva fare, e anche di più: la legge aggiunge obblighi oltre all'AI Act.")],
   srctitle=SRC, srcs=[("Legge", "Lavori Pubblici: in GU la legge 132/2025", "https://www.lavoripubblici.it/news/intelligenza-artificiale-pubblicata-gazzetta-ufficiale-legge-ai-132-2025-36444"),
                       ("Decreto", "Agenda Digitale: D.Lgs. 179/2026 e i controlli", "https://www.agendadigitale.eu/sicurezza/ai-act-litalia-avvia-i-controlli-cosa-rischiano-le-imprese/")])},
"rd-centros-datos": {"sec": S_("Italia", "E in Italia?", [
   ("Semplificazione", [
     "Autorizzazione unica in 10 mesi (+3) che integra la VIA (DL 21/2026).",
     "MASE competente per gli impianti termici da 300 MW; regioni per gli altri; legge regionale in Lombardia.",
     "Legge delega in discussione: infrastruttura strategica, codice ATECO proprio, aree dismesse."]),
   ("In confronto",
     "La Spagna condiziona l'accesso alla rete; l'Italia accelera i permessi. Nessuna condizione italiana su rinnovabili orarie o classe di efficienza.")],
   srctitle=SRC, srcs=[("MASE", "Corriere Comunicazioni: linee guida MASE, iter unico in 10 mesi", "https://www.corrierecomunicazioni.it/pa-digitale/data-center-ecco-le-linee-guida-del-mase-iter-unico-e-autorizzazioni-in-10-mesi/")])},
}
