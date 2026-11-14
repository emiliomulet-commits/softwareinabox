from common import section_body as S_, ROW_TR

SPAIN = "Espanha"
NAV = "Portugal"
SRC = "Fontes para Portugal"

CHIPS_RX = [(r"<tr><td><b>24-5-2022</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"<tr><td><b>14-7-2026</b></td>(?:(?!</tr>).)*</tr>\s*", ""),
            (r"\s*<li>(?:(?!</li>).)*fundacionbankinter(?:(?!</li>).)*</li>", "")]
ECO_ROW = r'<tr><td><a href="/regulacion/rd-centros-datos/">(?:(?!</tr>).)*</tr>'

EU = {
"rgpd": {
 "sec": S_("Portugal", "A proteção de dados em Portugal", [
   ("Quadro e autoridade", [
     "A <b>Lei 58/2019</b> assegura a execução do RGPD em Portugal.",
     "A <b>CNPD</b> é a autoridade de controlo.",
     "Encarregado de proteção de dados obrigatório em todo o setor público.",
     "Biometria no trabalho só para controlo de assiduidade e de acesso (art. 28.º, n.º 6)."]),
   ("O que convém saber",
     "Em 2019 a CNPD decidiu desaplicar várias normas da Lei 58/2019 por as considerar contrárias ao RGPD (Deliberação 2019/494). Nos casos transfronteiriços aplica-se, a partir de 2-4-2027, o novo regulamento processual.")]),
 "src": [("Portugal", "CNPD", "https://www.cnpd.pt/"),
         ("Portugal", "Lei n.º 58/2019 (Diário da República)", "https://diariodarepublica.pt/dr/detalhe/lei/58-2019-123815982")],
 "R": [("<dt>Espanha</dt><dd>Lei Orgânica 3/2018 (LOPDGDD) · AEPD</dd>", "<dt>Portugal</dt><dd>Lei 58/2019 · CNPD</dd>"),
       ("Em Espanha, muitas atuações da AEPD começam por uma violação e acabam por rever toda a gestão da proteção de dados.",
        "Em Portugal, a CNPD fiscaliza sobretudo o setor público, a videovigilância e os dados dos trabalhadores.")],
 "RX": [(ROW_TR("<td>Espanha: "), "")]},
"du": {
 "sec": S_("Portugal", "Como a estratégia chega a Portugal", [
   ("Governação de dados", [
     "O <b>DL 2/2025</b> executa o Regulamento Governação de Dados.",
     "Para o Data Act ainda não há autoridade designada.",
     "Na saúde, a <b>SPMS</b> prepara o acesso secundário (HealthData@PT); o INE dá acesso seguro a microdados para investigação."]),
   ("Espaços de dados",
     "Portugal participa nos espaços europeus através de centros de investigação e da Agenda Nacional de IA (RCM 2/2026). Para as empresas, o essencial é preparar dados e contratos para os espaços setoriais.")]),
 "src": [("Portugal", "Decreto-Lei n.º 2/2025 (Diário da República)", "https://diariodarepublica.pt/"),
         ("Portugal", "SPMS", "https://www.spms.min-saude.pt/")]},
"chips": {
 "sec": S_("Portugal", "Os chips em Portugal", [
   ("Projetos", [
     "Estratégia Nacional para os Semicondutores (dezembro de 2023).",
     "Centro de competências <b>POEMS</b> no INL, em Braga, inaugurado a 8-4-2025.",
     "O INL integra a linha-piloto <b>APECS</b> do Chips Act (integração heterogénea)."]),
   ("O que significa",
     "Portugal aposta no encapsulamento, nos testes e no talento. Para a versão 2.0 interessa sobretudo o apoio a PME e a centros de competências.")]),
 "src": [("Portugal", "INL – Laboratório Ibérico Internacional de Nanotecnologia", "https://inl.int/")],
 "RX": CHIPS_RX},
"eco": {
 "sec": S_("Portugal", "Os centros de dados em Portugal", [
   ("Quadro nacional", [
     "<b>Plano Nacional de Centros de Dados</b> (RCM 70/2026), com a AICEP como balcão único.",
     "Decreto-lei em preparação: prazos máximos de licenciamento e energia renovável obrigatória, sem obrigação de autoprodução.",
     "Reporte de energia e água desde 2024 (diretiva EED)."]),
   ("Situação",
     "Portugal quer atrair centros de dados (Sines). O Governo disse que o regime não será como o espanhol.")]),
 "src": [("Portugal", "AICEP", "https://www.portugalglobal.pt/")],
 "RX": [(ECO_ROW, "<tr><td><b>Plano Nacional</b></td><td>Plano Nacional de Centros de Dados (RCM 70/2026) e decreto-lei em preparação.</td></tr>")]},
}

NAT = {
"raee": {"sec": S_("Portugal", "E em Portugal?", [
   ("Obrigações dos produtores", [
     "Regime unificado de fluxos específicos de resíduos (<b>DL 152-D/2017</b>, UNILEX).",
     "Adesão a uma entidade gestora licenciada (<b>ERP Portugal</b> ou <b>Electrão</b>) ou sistema individual.",
     "Registo na Agência Portuguesa do Ambiente e reporte anual de quantidades.",
     "Os equipamentos profissionais (servidores, rede) também estão abrangidos."]),
   ("Distribuição",
     "A distribuição recebe o equipamento usado na compra de um equivalente; as grandes superfícies recebem pequenos equipamentos sem compra.")],
   srctitle=SRC, srcs=[("Lei", "DL 152-D/2017 (Diário da República)", "https://diariodarepublica.pt/"),
                       ("APA", "Agência Portuguesa do Ambiente", "https://apambiente.pt/")])},
"factura-electronica": {"sec": S_("Portugal", "E em Portugal?", [
   ("Faturação", [
     "<b>Sem obrigação B2B</b> de fatura estruturada.",
     "PDF válido até 31-12-2026; a partir de 2027 só com <b>assinatura eletrónica qualificada</b>.",
     "ATCUD e código QR obrigatórios; SAF-T contabilidade a partir de 2027.",
     "B2G obrigatória (CIUS-PT); micro e PME a partir de 1-1-2027, com possível adiamento de um ano."]),
   ("Se também vende em Espanha",
     "As faturas a clientes espanhóis seguem os prazos espanhóis (outubro de 2027 e 2028). Um sistema compatível com EN 16931 cobre os dois países.")],
   srctitle=SRC, srcs=[("AT", "Portal das Finanças", "https://www.portaldasfinancas.gov.pt/"),
                       ("eSPap", "eSPap: faturação eletrónica", "https://www.espap.gov.pt/")])},
"ens": {"sec": S_("Portugal", "E em Portugal?", [
   ("Quadro nacional", [
     "O <b>Quadro Nacional de Referência para a Cibersegurança (QNRCS)</b> do CNCS é a referência de medidas.",
     "O <b>DL 125/2025</b> (Regime Jurídico da Cibersegurança) transpõe a NIS2 e está em vigor desde 3-4-2026.",
     "Os gestores respondem pessoalmente por dolo ou culpa grave (art. 25.º, n.º 2)."]),
   ("Diferença face a Espanha",
     "Não há uma certificação como o ENS. Para vender à Administração portuguesa, valem o QNRCS, a ISO 27001 e as obrigações do DL 125/2025.")],
   srctitle=SRC, srcs=[("CNCS", "Centro Nacional de Cibersegurança", "https://www.cncs.gov.pt/")])},
"ley-gobernanza-ia": {"sec": S_("Portugal", "E em Portugal?", [
   ("Sem lei de execução", [
     "A <b>ANACOM</b> foi anunciada (19-9-2025) como autoridade de fiscalização do mercado e ponto de contacto único, mas sem diploma publicado.",
     "A CNPD trata dos dados pessoais; foram publicadas 14 entidades de direitos fundamentais.",
     "Regime sancionatório e sandbox nacionais ainda pendentes."]),
   ("Como em Espanha",
     "Portugal também não tem lei de IA com autoridades e sanções. O regulamento aplica-se diretamente.")],
   srctitle=SRC, srcs=[("ANACOM", "ANACOM", "https://www.anacom.pt/")])},
"rd-centros-datos": {"sec": S_("Portugal", "E em Portugal?", [
   ("Política de atração", [
     "Plano Nacional de Centros de Dados (RCM 70/2026) e decreto-lei previsto para o final de 2026.",
     "Prazos máximos de licenciamento e renováveis obrigatórias, sem autoprodução.",
     "A indústria tem prioridade na ligação à rede."]),
   ("Em comparação",
     "Espanha condiciona o acesso à rede; Portugal procura atrair investimento. O Governo afirmou que o regime português não será como o espanhol.")],
   srctitle=SRC, srcs=[("AICEP", "AICEP Portugal Global", "https://www.portugalglobal.pt/")])},
}
