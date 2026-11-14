from common import section_body as S_, ROW_TR

SPAIN = "Espagne"
NAV = "France"
SRC = "Sources pour la France"

CHIPS_RX = [(r"<tr><td><b>24-5-2022</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"<tr><td><b>14-7-2026</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"\s*<li>(?:(?!</li>).)*fundacionbankinter(?:(?!</li>).)*</li>", "")]
ECO_ROW = r'<tr><td><a href="/regulacion/rd-centros-datos/">(?:(?!</tr>).)*</tr>'

EU = {
"rgpd": {
 "sec": S_("France", "La protection des données en France", [
   ("Cadre et autorité", [
     "La <b>loi Informatique et Libertés</b> (loi 78-17, modifiée en 2018) complète le RGPD, notamment pour les données de santé, la recherche et les mineurs (consentement seul à partir de 15 ans).",
     "La <b>CNIL</b> est l'autorité de contrôle unique ; elle publie référentiels, recommandations et lignes directrices sur les cookies.",
     "Procédure de sanction simplifiée pour les dossiers les moins graves (amendes jusqu'à 20 000 €)."]),
   ("Ce qu'il faut retenir",
     "La CNIL est l'une des autorités les plus actives sur les cookies : en septembre 2025, elle a infligé 325 M€ à Google et 150 M€ à Shein. Toute bannière doit permettre de refuser aussi facilement que d'accepter. Pour les cas transfrontaliers, le nouveau règlement de procédure s'applique à partir du 2-4-2027.")]),
 "src": [("France", "CNIL", "https://www.cnil.fr/"),
         ("France", "Loi n° 78-17 Informatique et Libertés (Légifrance)", "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000886460")],
 "R": [("<dt>Espagne</dt><dd>Loi organique 3/2018 (LOPDGDD) · AEPD</dd>", "<dt>France</dt><dd>Loi Informatique et Libertés · CNIL</dd>"),
       ("En Espagne, de nombreuses procédures de l'AEPD commencent par une violation et finissent par examiner toute la gestion de la protection des données.",
        "En France, la CNIL sanctionne aussi beaucoup sur les cookies et le consentement, avec des amendes parmi les plus élevées de l'UE.")],
 "RX": [(ROW_TR("<td>Espagne : "), "")]},
"du": {
 "sec": S_("France", "Comment la stratégie arrive en France", [
   ("Gouvernance des données", [
     "La <b>loi SREN</b> (2024) a anticipé le Data Act pour le cloud : l'<b>Arcep</b> encadre le changement de fournisseur et a fixé les frais de sortie à 0 €.",
     "L'Arcep a délivré les premiers labels européens d'intermédiaire de données (DGA).",
     "Pour les données protégées, le <b>CASD</b> offre un accès sécurisé aux chercheurs ; en santé, la Plateforme des données de santé (Health Data Hub)."]),
   ("Espaces de données",
     "La France anime un hub Gaia-X national et participe aux espaces européens de santé, de mobilité et d'industrie. L'exigence de cloud souverain (SecNumCloud) pèse sur le choix de l'hébergement des données sensibles.")]),
 "src": [("France", "Arcep : cloud et Data Act", "https://www.arcep.fr/"),
         ("France", "Loi SREN n° 2024-449 (Légifrance)", "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049563368")]},
"chips": {
 "sec": S_("France", "Les puces en France", [
   ("Projets", [
     "<b>FAMES</b>, ligne pilote du Chips Act au CEA-Leti de Grenoble (FD-SOI), inaugurée en janvier 2026.",
     "Le projet ST/GlobalFoundries de <b>Crolles</b> (7,5 Md€, aide de 2,9 Md€) est en pause.",
     "Grenoble-Crolles reste le principal pôle français, avec STMicroelectronics et Soitec ; France 2030 finance la filière."]),
   ("Ce que cela signifie",
     "La France mise sur la recherche (CEA-Leti) et sur les technologies FD-SOI. Pour la version 2.0, l'enjeu est de transformer les lignes pilotes en capacités industrielles.")]),
 "src": [("France", "CEA-Leti : ligne pilote FAMES", "https://www.leti-cea.com/"),
         ("France", "Commission : aides d'État pour des installations « premières du genre »", "https://digital-strategy.ec.europa.eu/en/node/10695")],
 "RX": CHIPS_RX},
"eco": {
 "sec": S_("France", "Les centres de données en France", [
   ("Cadre national", [
     "La loi 2026-403 de simplification (art. 35) définit le centre de données et permet de le qualifier de <b>projet d'intérêt national majeur</b> (PINM) : urbanisme accéléré et priorité de raccordement.",
     "RTE a réservé environ 18 GW pour quelque 80 projets.",
     "Les centres de plus de 500 kW déclarent leurs indicateurs dans la base européenne (directive EED)."]),
   ("Situation",
     "La France attire les centres de données plutôt qu'elle ne les restreint. Pour les données de santé, l'hébergeur doit être certifié HDS ; pour les données sensibles de l'État, SecNumCloud.")]),
 "src": [("France", "Loi n° 2026-403 de simplification de la vie économique (Légifrance)", "https://www.legifrance.gouv.fr/"),
         ("France", "RTE", "https://www.rte-france.com/")],
 "RX": [(ECO_ROW, "<tr><td><b>PINM</b></td><td>Qualification française de projet d'intérêt national majeur pour les centres de données (loi 2026-403).</td></tr>")]},
}

NAT = {
"raee": {"sec": S_("France", "Et en France ?", [
   ("Obligations des producteurs", [
     "Régime des DEEE du Code de l'environnement (art. R543-172 et suivants) et responsabilité élargie du producteur (REP).",
     "Adhésion à un éco-organisme agréé (<b>ecosystem</b> ou <b>Ecologic</b>) ou système individuel approuvé.",
     "Enregistrement au registre <b>SYDEREP</b> de l'ADEME et identifiant unique (IDU) sur les factures et CGV.",
     "Les équipements professionnels (serveurs, réseau) relèvent de la filière DEEE professionnels."]),
   ("Distribution",
     "Reprise « un pour un » en magasin et à la livraison, et « un pour zéro » pour les petits appareils dans les surfaces de vente de plus de 400 m².")],
   srctitle=SRC, srcs=[("ADEME", "SYDEREP : registre des filières REP", "https://www.syderep.ademe.fr/"),
                       ("Éco-organisme", "ecosystem", "https://www.ecosystem.eco/")])},
"factura-electronica": {"sec": S_("France", "Et en France ?", [
   ("La réforme française", [
     "Réception obligatoire des factures électroniques pour toutes les entreprises depuis le <b>1-9-2026</b>.",
     "Émission et e-reporting : grandes entreprises et ETI depuis le 1-9-2026 ; PME et microentreprises à partir du <b>1-9-2027</b>.",
     "Passage obligatoire par une <b>plateforme agréée</b> (PA) ; le portail public (PPF) sert d'annuaire. Formats UBL, CII ou Factur-X.",
     "E-reporting des ventes B2C et internationales ; amendes de 50 € par facture et 500 € par transmission manquante (plafond 15 000 € par an)."]),
   ("Si vous vendez aussi en Espagne",
     "Les factures aux clients espagnols suivent le calendrier espagnol (octobre 2027 et 2028) et son modèle hybride. Une plateforme compatible EN 16931 couvre les deux pays.")],
   srctitle=SRC, srcs=[("DGFiP", "impots.gouv.fr : facturation électronique", "https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees")])},
"ens": {"sec": S_("France", "Et en France ?", [
   ("Secteur public", [
     "Le <b>Référentiel général de sécurité (RGS)</b> fixe les règles de sécurité des systèmes d'information des administrations.",
     "La qualification <b>SecNumCloud</b> de l'ANSSI est exigée pour les données sensibles de l'État (doctrine « cloud au centre »).",
     "Pour les données de santé, l'hébergeur doit être certifié <b>HDS</b>."]),
   ("NIS2",
     "La loi « Résilience » qui transpose NIS2 était encore en débat à l'Assemblée en novembre 2026. L'ANSSI a publié son référentiel (ReCyf) et ouvert un pré-enregistrement pour environ 15 000 entités. Il n'existe pas d'équivalent français de la certification ENS.")],
   srctitle=SRC, srcs=[("ANSSI", "SecNumCloud", "https://cyber.gouv.fr/secnumcloud"),
                       ("ANSSI", "MonEspaceNIS2", "https://monespacenis2.cyber.gouv.fr/")])},
"ley-gobernanza-ia": {"sec": S_("France", "Et en France ?", [
   ("Pas encore de loi d'application", [
     "Le projet DDADUE, qui doit désigner les autorités de l'AI Act, n'était pas adopté en novembre 2026.",
     "Schéma de Bercy : la <b>DGCCRF</b> coordonne la surveillance du marché et la DGE représente la France au Comité IA.",
     "Des amendements donnent un rôle central à la <b>CNIL</b> ; le partage des compétences reste disputé."]),
   ("Comme en Espagne",
     "La France, comme l'Espagne, n'a pas encore de loi désignant autorités et sanctions. Le règlement s'applique directement, et la CNIL publie déjà des recommandations sur l'IA et les données personnelles.")],
   srctitle=SRC, srcs=[("CNIL", "CNIL : intelligence artificielle", "https://www.cnil.fr/fr/intelligence-artificielle")])},
"rd-centros-datos": {"sec": S_("France", "Et en France ?", [
   ("Une politique d'attraction", [
     "Qualification de <b>projet d'intérêt national majeur</b> (loi 2026-403, art. 35) avec l'accord du maire : urbanisme accéléré, priorité de raccordement et raison impérative d'intérêt public majeur.",
     "RTE réserve environ 18 GW pour quelque 80 projets ; un débat porte sur le passage du « premier arrivé » au « premier prêt ».",
     "Pas de conditions d'énergie renouvelable horaire ni de classe d'efficacité pour le raccordement."]),
   ("En comparaison",
     "Là où l'Espagne conditionne l'accès au réseau, la France facilite l'implantation. La contrainte française est ailleurs : SecNumCloud et HDS pour héberger des données sensibles.")],
   srctitle=SRC, srcs=[("RTE", "RTE", "https://www.rte-france.com/")])},
}
