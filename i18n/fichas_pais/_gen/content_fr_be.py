from common import section_body as S_, ROW_TR

SPAIN = "Espagne"
NAV = "Belgique"
SRC = "Sources pour la Belgique"

CHIPS_RX = [(r"<tr><td><b>24-5-2022</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"<tr><td><b>14-7-2026</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"\s*<li>(?:(?!</li>).)*fundacionbankinter(?:(?!</li>).)*</li>", "")]
ECO_ROW = r'<tr><td><a href="/regulacion/rd-centros-datos/">(?:(?!</tr>).)*</tr>'

EU = {
"rgpd": {
 "sec": S_("Belgique", "La protection des données en Belgique", [
   ("Cadre et autorité", [
     "La <b>loi du 30-7-2018</b> relative à la protection des personnes physiques complète le RGPD.",
     "L'<b>Autorité de protection des données (APD)</b>, créée par la loi du 3-12-2017, est l'autorité de contrôle.",
     "L'APD a été réformée en 2023 et 2024 (composition et recours de tiers)."]),
   ("Ce qu'il faut retenir",
     "L'APD traite les plaintes par sa Chambre contentieuse, dont les décisions peuvent être contestées devant la Cour des marchés. Pour les cas transfrontaliers, le nouveau règlement de procédure s'applique à partir du 2-4-2027.")]),
 "src": [("Belgique", "Loyens & Loeff : protection des données en Belgique (réforme de l'APD) (PDF)", "https://www.loyensloeff.com/legal-500-belgium-data-protection--cybersecurity.pdf"),
         ("Belgique", "Legal500 : Belgium, Data Protection & Cybersecurity", "https://www.legal500.com/guides/chapter/belgium-data-protection-cybersecurity/")],
 "R": [("<dt>Espagne</dt><dd>Loi organique 3/2018 (LOPDGDD) · AEPD</dd>", "<dt>Belgique</dt><dd>Loi du 30-7-2018 · APD</dd>"),
       ("En Espagne, de nombreuses procédures de l'AEPD commencent par une violation et finissent par examiner toute la gestion de la protection des données.",
        "En Belgique, l'APD traite surtout des plaintes individuelles, tranchées par sa Chambre contentieuse.")],
 "RX": [(ROW_TR("<td>Espagne : "), "")]},
"du": {
 "sec": S_("Belgique", "Comment la stratégie arrive en Belgique", [
   ("Gouvernance des données", [
     "L'<b>IBPT</b> doit devenir l'autorité du Data Act, avec le SPF Économie et l'APD ; la réforme de son statut est en préparation.",
     "En Flandre, <b>Athumi</b> exploite des espaces de données personnels (Solid).",
     "La <b>Health Data Agency</b> (HDA), active depuis janvier 2024, est déjà l'organisme d'accès aux données de santé."]),
   ("Espaces de données",
     "La Belgique fait partie des rares pays dotés d'un organisme d'accès aux données de santé opérationnel. Statbel offre un accès sécurisé aux microdonnées pour la recherche.")]),
 "src": [("Belgique", "Chambre : note de politique de l'IBPT 2026 (PDF)", "https://www.dekamer.be/FLWB/PDF/56/1282/56K1282007.pdf"),
         ("Belgique", "HDA : European Health Data Space", "https://www.hda.belgium.be/en/european-health-data-space")],
 "R": [("comme le CASD en France.", "comme l'accès sécurisé aux microdonnées de Statbel.")]},
"chips": {
 "sec": S_("Belgique", "Les puces en Belgique", [
   ("Projets", [
     "<b>NanoIC</b>, ligne pilote du Chips Act chez imec à Louvain : 2,5 Md€, dont 700 M€ de l'UE, inaugurée le 9-2-2026.",
     "Le <b>Flanders Chips Competence Center</b> (FC3) accompagne PME et start-ups.",
     "imec est l'un des principaux centres mondiaux de recherche en nanoélectronique."]),
   ("Ce que cela signifie",
     "La Belgique est le laboratoire du Chips Act pour les nœuds au-delà de 2 nm. Pour la version 2.0, l'enjeu est l'accès des entreprises européennes à ces lignes pilotes.")]),
 "src": [("Belgique", "Commission : NanoIC, 700 M€ de l'UE (9-2-2026)", "https://digital-strategy.ec.europa.eu/en/news/eu-invests-eu700-million-newly-opened-nanoic-europes-largest-chips-act-pilot-line")],
 "RX": CHIPS_RX},
"eco": {
 "sec": S_("Belgique", "Les centres de données en Belgique", [
   ("Cadre", [
     "Pas de loi spécifique : permis régionaux.",
     "Elia crée une catégorie « data centre » avec une capacité maximale ; la CREG modifie le code de raccordement (« use it or lose it », 29-1-2026).",
     "La Flandre propose de placer les centres de données en fin de file ; la Wallonie recueille les rapports EED."]),
   ("Situation",
     "En Belgique, le goulot d'étranglement est le réseau, pas un régime propre aux centres de données.")]),
 "src": [("Belgique", "ITdaily : la Flandre placerait les centres de données en fin de file", "https://itdaily.com/blogs/datacenter/eu-weakens-climate-rules-for-data-centers/"),
         ("Belgique", "A&O Shearman : cadre juridique des centres de données en Belgique", "https://www.aoshearman.com/en/insights/navigating-the-legal-framework-for-data-centre-development-in-belgium")],
 "RX": [(ECO_ROW, "<tr><td><b>Réseau (Elia, CREG)</b></td><td>Règles belges de raccordement qui limitent la capacité allouée aux centres de données.</td></tr>")]},
}

NAT = {
"raee": {"sec": S_("Belgique", "Et en Belgique ?", [
   ("Obligations des producteurs", [
     "Obligation de reprise réglée par les <b>trois Régions</b> (Vlarema en Flandre, arrêtés wallons et bruxellois).",
     "Adhésion à <b>Recupel</b> ou plan individuel de gestion des déchets.",
     "Déclaration des quantités mises sur le marché.",
     "Les équipements professionnels (serveurs, réseau) sont aussi couverts."]),
   ("Distribution",
     "Reprise « un pour un » en magasin ; points de collecte Recupel et parcs à conteneurs.")],
   srctitle=SRC, srcs=[("Recupel", "Recupel", "https://www.recupel.be/")])},
"factura-electronica": {"sec": S_("Belgique", "Et en Belgique ?", [
   ("Facture électronique B2B", [
     "Obligatoire depuis le <b>1-1-2026</b> entre entreprises établies en Belgique (tolérance jusqu'au 31-3-2026) ; le PDF ne suffit plus.",
     "Format <b>Peppol BIS 3.0</b> sur le réseau à quatre coins.",
     "E-reporting quasi en temps réel à partir du <b>1-1-2028</b>, qui remplace le listing clients annuel.",
     "Amendes de 1 500, 3 000 et 5 000 €."]),
   ("Si vous vendez aussi en Espagne",
     "Les factures aux clients espagnols suivent le calendrier espagnol (octobre 2027 et 2028). Un système Peppol conforme à EN 16931 couvre les deux pays.")],
   srctitle=SRC, srcs=[("SPF Finances", "eFacture : SPF Finances", "https://efacture.belgium.be/"),
                       ("Analyse", "VATCalc : Peppol B2B 2026 et e-reporting 2028", "https://www.vatcalc.com/belgium/belgium-e-invoicing-proposal/")])},
"ens": {"sec": S_("Belgique", "Et en Belgique ?", [
   ("CyberFundamentals", [
     "Le <b>CCB</b> a créé son propre cadre de conformité, <b>CyberFundamentals (CyFun®)</b>, avec vérification ou certification selon la catégorie.",
     "CyFun® ou ISO 27001 valent présomption de conformité à NIS2.",
     "Pas d'amendes NIS2 pour les administrations publiques."]),
   ("NIS2",
     "La loi du 26-4-2024 s'applique depuis le 18-10-2024. CyFun® est l'équivalent le plus proche de l'ENS espagnol, mais il vise toutes les entités NIS2, pas seulement le secteur public.")],
   srctitle=SRC, srcs=[("CCB", "Safeonweb@work", "https://atwork.safeonweb.be/"),
                       ("CCB", "CCB : mesures de cybersécurité NIS2 (CyFun)", "https://ccb.belgium.be/fr/node/406")])},
"ley-gobernanza-ia": {"sec": S_("Belgique", "Et en Belgique ?", [
   ("Pas encore de loi", [
     "L'<b>IBPT</b> est annoncé comme autorité principale depuis 2025 (accord de gouvernement 2025-2029).",
     "Le SPF Économie coordonne.",
     "En septembre 2026, aucune base légale."]),
   ("Comme en Espagne",
     "La Belgique n'a pas encore de loi désignant autorités et sanctions. Le règlement s'applique directement.")],
   srctitle=SRC, srcs=[("IBPT", "IBPT : application de l'AI Act", "https://www.ibpt.be/operators/digital/ia-act/ia-definition-and-goals")])},
"rd-centros-datos": {"sec": S_("Belgique", "Et en Belgique ?", [
   ("Le réseau d'abord", [
     "Pas de loi spécifique ; permis régionaux.",
     "Elia plafonne la capacité attribuée aux centres de données ; la CREG applique le « use it or lose it ».",
     "La Flandre veut placer les centres de données en fin de file."]),
   ("En comparaison",
     "L'Espagne conditionne le raccordement à des exigences environnementales ; la Belgique limite la capacité.")],
   srctitle=SRC, srcs=[("ITdaily", "La Flandre et la file d'attente du réseau", "https://itdaily.com/blogs/datacenter/eu-weakens-climate-rules-for-data-centers/")])},
}
