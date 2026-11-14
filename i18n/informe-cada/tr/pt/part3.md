## 13. DORA, DMA e a reorganização dos programas de cloud
### O DORA e a supervisão dos fornecedores tecnológicos
O DORA é o primeiro regime europeu que supervisiona diretamente fornecedores tecnológicos. Em 18 de novembro de 2025, as autoridades europeias designaram 19 prestadores terceiros críticos de serviços de TIC, entre os quais a AWS, a Google Cloud, a Microsoft, a Oracle e a SAP, operadores como a Orange e a Deutsche Telekom e consultoras como a Accenture, a Capgemini ou a NTT DATA [R46]. As entidades financeiras têm de incluir nos seus contratos cláusulas de localização, acesso, auditoria e saída.
### DMA: AWS e Azure como controladores de acesso
Em 25 de junho de 2026, a Comissão comunicou a sua conclusão preliminar de que a AWS e o Azure devem ser designados controladores de acesso ao abrigo do Regulamento dos Mercados Digitais; se tal se confirmar, terão seis meses para cumprir obrigações de interoperabilidade, portabilidade e não autopreferência [R47]. Isto pode alterar as condições de licenciamento e a possibilidade de executar software em clouds de terceiros, o que também interessa aos parceiros que vendem esse software.
### Os programas dos hiperescaladores já estão a mudar
Independentemente da regulamentação, os grandes fornecedores estão a reorganizar a sua relação com o canal:
- A Microsoft tornou mais exigente a autorização do programa Cloud Solution Provider, com limiares de 1 milhão de dólares de receitas para parceiros de faturação direta e de 30 milhões para distribuidores indiretos [R48], e converteu o seu marketplace numa via de venda através do canal, com as «resale enabled offers» em disponibilidade geral desde novembro de 2025 e as ofertas privadas multiparte disponíveis em 30 mercados europeus desde maio de 2026 [R49][R50].
- A Broadcom encerrou em janeiro de 2026 o programa de fornecedores de cloud da VMware para boa parte dos pequenos parceiros europeus, e a CISPE apresentou uma queixa à Comissão [R51].
- Segundo a Omdia, os parceiros gerarão 59 % das vendas nos marketplaces dos hiperescaladores até 2030 [R52].
### Leitura para a cadeia de valor
O cerco regulamentar (DMA, DORA, Data Act e CADA) empurra para arquiteturas com mais opções de implementação. Para os fabricantes de software, isso exige licenças que permitam executar os seus produtos em infraestrutura europeia e em ambientes do cliente. Para os integradores que trabalham com banca, seguros ou fintech, implica responder a questionários DORA e CADA com um mesmo pacote de evidências. Para o grossista de valor acrescentado, a reorganização dos programas de cloud tem duas faces: os limiares da Microsoft e o encerramento do programa da VMware concentram o negócio em distribuidores com escala, e as alternativas de virtualização e cloud privada geram procura de novas plataformas, formação e migração.
> A CADA não atua sozinha: o DMA, o DORA, o Data Act e as alterações de programa dos hiperescaladores empurram na mesma direção. O distribuidor com escala e catálogo alternativo ganha relevância.
| Instrumento | Facto | Efeito para o canal |
| DORA | 19 prestadores críticos designados (nov. 2025) | Cláusulas de saída e auditoria no setor financeiro |
| DMA | Conclusão preliminar sobre AWS e Azure (jun. 2026) | Licenças e interoperabilidade |
| Microsoft CSP | Limiares de 1 M$ e 30 M$ | Concentração em distribuidores com escala |
| Microsoft Marketplace | Revenda e ofertas multiparte em 30 mercados | Venda de software através do canal |
| Broadcom/VMware | Encerramento do programa VCSP (jan. 2026) | Procura de alternativas e migração |

## 14. Dados e espaços de dados: Data Union Strategy, Simpl, EHDS e Gaia-X
### A estratégia de dados por trás da CADA
A Data Union Strategy, apresentada em 19 de novembro de 2025, orienta a política de dados para a implementação: mais acesso a dados de qualidade para a IA, regras mais simples e proteção da soberania. Inclui «Data Labs» que ligam os espaços comuns de dados às AI Factories e um reforço de 100 milhões de euros para os espaços de dados a partir de 2026, e coloca a CADA entre as suas ações emblemáticas [R53].
### A infraestrutura dos espaços de dados
Os espaços comuns europeus de dados (saúde, mobilidade, energia, indústria, agricultura, finanças, administração pública, contratação) apoiam-se no Data Spaces Support Centre, no Simpl, o middleware aberto da Comissão, e nas especificações da indústria: o Dataspace Protocol da IDSA, os componentes Eclipse Dataspace e o quadro de confiança da Gaia-X [R54][R30].
### EHDS
O Espaço Europeu de Dados de Saúde (Regulamento (UE) 2025/327) regula a utilização primária e secundária dos dados de saúde; a Comissão deve adotar os seus principais atos de execução até 26 de março de 2027 [R55]. Os organismos de acesso aos dados de saúde e os ambientes de tratamento seguro serão provavelmente atividades de ordem pública na CADA, com exigência de nível 2 ou superior.
### Federação versus centralização
Os espaços de dados são federados: os dados permanecem na origem e são partilhados ao abrigo de políticas de utilização legíveis por máquina, com conectores e credenciais verificáveis. Articula-se com a CADA porque reduz a necessidade de concentrar dados em grandes plataformas e permite aplicar diferentes níveis de garantia a cada nó.
### Um nó de espaço de dados é infraestrutura
Cada participante num espaço de dados precisa de um conector implementado em infraestrutura própria ou de confiança, com identidade, armazenamento, segurança e monitorização. Para o canal, isto é procura de servidores na periferia, armazenamento seguro e serviços de operação, sobretudo nos setores da indústria, saúde, logística e energia, onde os integradores já têm clientes.
### Leitura para a cadeia de valor
Os fabricantes de infraestrutura podem preparar com o seu grossista configurações de nó de espaço de dados (servidor, armazenamento, segurança e software aberto) prontas a ser implementadas pelos integradores. Os integradores com soluções setoriais estão sentados sobre dados valiosos para espaços industriais, de saúde ou de economia circular e podem oferecer aos seus clientes a participação com garantias de soberania. A equipa autora deste relatório participou em três demonstradores de espaços de dados federados financiados pela Secretaria de Estado da Digitalização espanhola (saúde, contratação pública e economia circular), experiência transferível para os clientes do canal.
> Os espaços de dados são a versão «de dados» da soberania que a CADA aplica à cloud: federação, controlo na origem e confiança verificável, implementados pelo canal.
| Peça | Situação | Papel numa oferta do canal |
| Data Union Strategy | Comunicação (nov. 2025) | Prioridade política e financiamento |
| Simpl | Middleware aberto em implementação | Base técnica comum |
| IDSA, Eclipse, Gaia-X | Especificações e componentes | Conectores, protocolo e confiança |
| EHDS | Atos de execução 2026–2027 | Procura de infraestrutura de saúde soberana |

## 15. Normas de produto que já afetam o grossista: REEE, ecodesign e faturação eletrónica
### A CADA chega a um canal já regulado
O grossista tecnológico não é novo no cumprimento normativo. Cada referência que distribui tem de cumprir normas sobre resíduos, eficiência, segurança dos produtos e, cada vez mais, cibersegurança. Compreender estas obrigações é útil por duas razões: mostram que o canal sabe gerir a conformidade à escala e trazem processos que podem ser reutilizados para a evidência de soberania.
### REEE
Em Espanha, o Real Decreto 110/2015 regula os resíduos de equipamentos elétricos e eletrónicos. Os produtores, incluindo quem importa e coloca equipamentos no mercado pela primeira vez, têm de se inscrever no registo, declarar os equipamentos colocados no mercado e financiar a gestão dos resíduos, normalmente através de sistemas coletivos de responsabilidade alargada; os distribuidores têm de recolher equipamentos usados em determinadas situações [R56]. O número de registo do produtor deve constar das faturas entre produtores e distribuidores. É um exemplo de como a regulamentação já reparte obrigações por elo.
### Ecodesign de servidores e armazenamento
O Regulamento (UE) 2019/424 estabelece requisitos de conceção ecológica para servidores e produtos de armazenamento de dados em linha, centrados na eficiência das fontes de alimentação, no desempenho em estado ativo, na informação sobre materiais e na facilidade de desmontagem e de apagamento seguro de dados para reutilização; o regulamento está em revisão [R57]. A revisão, juntamente com os objetivos de eficiência do Anexo I da CADA e o pacote europeu de eficiência dos centros de dados [R58], antecipa requisitos mais exigentes para o hardware vendido a centros de dados.
### Equipamentos recondicionados
A economia circular cresce no canal: segundo a CONTEXT, as vendas de PC recondicionados no canal de distribuição cresceram 7 % no quarto trimestre de 2025 nos cinco grandes mercados europeus, e os grossistas, incluindo a Esprinet, ganharam peso nesta categoria [R59]. A CADA, que exige apagamento seguro e controlo de ativos para a evidência, e o ecodesign, que facilita a reutilização, empurram na mesma direção.
### Faturação eletrónica
Espanha aprovou o Real Decreto 238/2026, que torna obrigatória a fatura eletrónica entre empresas, e a Orden HAC/1028/2026, que regula a solução pública; o sistema VERI*FACTU foi adiado para outubro de 2028 para coincidir com o calendário da fatura eletrónica das PME e dos trabalhadores independentes [R60]. Afeta todo o software de gestão vendido pelo canal e os processos de faturação de grossistas e integradores.
### Leitura para a cadeia de valor
O grossista já mantém, para milhares de referências, dados de registo de produtor, eficiência, marcação e garantias. Acrescentar uma ficha de soberania (localização da telemetria, origem do suporte, componentes, controlo) é uma extensão natural desse sistema. Para os fabricantes, oferecer num único pacote a conformidade REEE, ecodesign, CRA e CADA reduzirá o atrito na venda. Para os integradores, os serviços de retirada, apagamento certificado e reutilização de equipamentos (ITAD) passam a fazer parte do ciclo de vida soberano do cliente.
> O canal já sabe gerir a conformidade dos produtos à escala. A CADA acrescenta mais uma coluna à ficha de cada referência: a soberania.
| Norma | Obrigação principal | Elo afetado |
| RD 110/2015 (REEE) | Registo, declaração e financiamento dos resíduos; recolha | Produtor/importador e distribuidor |
| Regulamento 2019/424 | Ecodesign de servidores e armazenamento (em revisão) | Fabricante; informação ao canal |
| CRA | Conformidade, marcação e verificação | Fabricante, importador e distribuidor |
| RD 238/2026 e VERI*FACTU | Fatura eletrónica B2B; software de faturação (out. 2028) | Fabricantes de software, canal e clientes |
| CADA | Evidência de soberania por serviço | Toda a cadeia |

## 16. O quadro espanhol e português
### Governação da IA em Espanha
Espanha foi pioneira na Europa ao criar uma autoridade nacional de supervisão da IA, a AESIA. O Conselho de Ministros enviou às Cortes, em 26 de maio de 2026, o Projeto de Lei Orgânica para a boa utilização e a governação da IA (Proyecto de Ley Orgánica para el buen uso y la gobernanza de la IA), que designava a AESIA como autoridade principal, regulava ambientes de testagem e sanções e incluía um título sobre a utilização da IA no setor público estatal [R61]. O projeto caducou com a dissolução das Cortes em 6 de outubro de 2026 (Real Decreto 806/2026), antes das eleições gerais de 29 de novembro [R42]. Hoje não existe lei espanhola de IA: o AI Act aplica-se diretamente e a AESIA continua a funcionar, mas falta o regime sancionatório nacional. O próximo Governo terá de apresentar um novo texto.
### Esquema Nacional de Segurança
O Real Decreto 311/2022 regula o Esquema Nacional de Segurança espanhol (Esquema Nacional de Seguridad, ENS), obrigatório para o setor público e os seus fornecedores tecnológicos. O seu sistema de categorias e a certificação de conformidade são hoje a chave de acesso ao mercado público espanhol de cloud e a base natural do futuro reconhecimento CADA.
### Soberania digital e centros de dados
Em 24 de fevereiro de 2026, o Governo apresentou o Roteiro para acelerar a Soberania Digital (Hoja de Ruta para acelerar la Soberanía Digital), que coloca a cloud e os centros de dados como espinha dorsal [R62]. Em 27 de agosto de 2026, submeteu a audição pública um projeto de real decreto sobre centros de dados sustentáveis que, para instalações de 1 MW ou mais, exigia que pelo menos 80 % do consumo de cada hora fosse coberto por renováveis dessa mesma hora e que o operador estivesse estabelecido na UE [R63]. Após mais de 600 contributos e um parecer crítico da CNMC de 22 de setembro [R64], o texto revisto eleva o limiar para 10 MW, permite uma rampa até 80 % de renováveis horárias até 2031 e concentra a soberania nos centros que alojam sistemas públicos de categoria ALTA do ENS, cujos dados terão de permanecer na UE. O Conselho de Estado deu-lhe parecer favorável em novembro com quatro alterações e o Governo prevê aprová-lo em 17 ou 24 de novembro de 2026; por ser um real decreto, não caducou com a dissolução das Cortes [R65]. Parte da indústria mantém a sua oposição; o Governo apresenta-o como uma forma de ordenar o crescimento.
### Programas públicos e o canal
A experiência do Kit Digital, com a sua rede de agentes digitalizadores, demonstrou que o canal é o veículo mais eficaz para levar a digitalização às PME e aos trabalhadores independentes: a Red.es articulou-o através de milhares de fornecedores tecnológicos homologados [R66]. É razoável esperar que a estratégia nacional de cloud e IA exigida pela CADA se apoie em mecanismos semelhantes (análise própria).
### Portugal
Portugal tem um setor TIC dinâmico, com mais de 13.000 empresas tecnológicas e cerca de 245.000 profissionais, e consolida-se como centro de serviços de proximidade para empresas europeias [R67]. Para a distribuição, é o mercado com maior crescimento relativo: o Grupo Esprinet cresceu ali 47 % em 2025 e 37 % no primeiro semestre de 2026 [R17][R7]. Portugal terá de designar a sua autoridade CADA, adotar a sua estratégia de cloud e IA e concluir a sua própria transposição da NIS2.
### Leitura para a cadeia de valor
Espanha e Portugal podem estar entre os primeiros mercados a aplicar a CADA com agilidade: Espanha tem autoridade de IA, esquema de segurança e roteiro de soberania. Para os fabricantes, a certificação ENS dos seus produtos e serviços será um ativo diferenciador. Para os integradores, manter e elevar as suas certificações ENS e acompanhar a futura estratégia nacional é prioritário. Para o grossista de valor acrescentado, operar com uma mesma organização em ambos os países permite-lhe oferecer configurações validadas para os dois quadros nacionais.
> A Península pode ser um mercado precoce da CADA: tem esquema de segurança, autoridade de IA, roteiro de soberania e um canal que já demonstrou a sua capacidade para executar programas públicos.
| Instrumento | Situação | Relação com a CADA |
| PLO de governação da IA (Espanha) | Caducado (dissolução das Cortes, 6-10-2026) | Aplicação do AI Act e utilização pública da IA |
| ENS (RD 311/2022) | Em vigor | Base técnica do reconhecimento |
| Roteiro de Soberania Digital | Fev. 2026 | Orientação política |
| RD de centros de dados | Parecer do Conselho de Estado (nov. 2026); aprovação prevista | Requisitos energéticos e de soberania |
| Portugal: autoridade e estratégia CADA | Após a entrada em vigor | Mercado com maior crescimento relativo |
## 17. O mercado europeu de cloud: dependência, concentração e procura soberana
### Uma dependência mensurável
Os fornecedores europeus de cloud passaram de 29 % do mercado europeu em 2017 para 15 % em 2022, quota que se manteve, enquanto três hiperescaladores não europeus ultrapassam 70 % [R1]. Os dados da Synergy Research para o primeiro trimestre de 2026 situam só a AWS e o Azure em cerca de 65–70 % das receitas de cloud da UE [R47].
### Uma procura que muda de natureza
A Gartner prevê que a despesa europeia em infraestrutura como serviço soberana passe de 6.900 milhões de dólares em 2025 para 12.600 milhões em 2026 e se aproxime dos 23.100 milhões em 2027 [R68]. O estudo encomendado pela Comissão para a avaliação de impacto quantifica ainda o fosso entre a capacidade de computação existente e a procura prevista [R69]. É uma mudança estrutural na forma de comprar. Os hiperescaladores responderam com ofertas «soberanas» e grandes investimentos em centros de dados europeus, como os 33.700 milhões de euros anunciados pela AWS em Espanha [R63].
### Capacidade de computação para IA
O Bruegel sublinha que a UE está muito atrás dos Estados Unidos em capacidade de chips de IA e alerta para o facto de critérios de soberania rigorosos poderem encarecer a capacidade [R70]. Os centros de dados consumiram cerca de 68 TWh na UE em 2024 e a sua procura poderá quase duplicar até 2030 [R58].
### O que a CADA procura mudar
A CADA não pretende expulsar os hiperescaladores, mas sim criar um segmento de mercado, o público e, por extensão, o crítico, onde a concorrência assente também no controlo e na resiliência. Se esse segmento atingir massa crítica, os fornecedores europeus poderão ganhar escala e os não europeus terão incentivos para oferecer estruturas de controlo e operação europeias, como já fazem algumas alianças (S3NS, entre a Thales e a Google, ou Bleu, entre a Orange, a Capgemini e a Microsoft).
### A cloud não é apenas pública
Para o canal, há uma nuance essencial: a soberania também se constrói fora da cloud pública. Clouds privadas no centro de dados do cliente, clouds de fornecedores regionais, colocation e modelos de consumo de infraestrutura como serviço (HPE GreenLake, Dell APEX ou Lenovo TruScale) permitem oferecer controlo e localização com hardware vendido através do canal. Grande parte da procura soberana traduzir-se-á em compras de servidores, armazenamento, redes e software de virtualização, proteção de dados e segurança, e não em subscrições de hiperescaladores.
### Onde está o valor para o canal
A CADA tende a fragmentar a infraestrutura (mais fornecedores, mais níveis, mais regiões), e a fragmentação aumenta o valor de quem a sabe orquestrar. Para os fabricantes de infraestrutura, o segmento soberano é uma oportunidade de recuperar cargas de trabalho que tinham migrado para a cloud pública. Para os integradores, o valor está na camada de serviços: migração, integração, operação híbrida, segurança e conformidade. Para o grossista de valor acrescentado, a oportunidade é agregar as peças em ofertas de referência por nível.
> A concentração do mercado não desaparecerá com a CADA, mas abrir-se-á um segmento com regras próprias, onde a dimensão importa menos do que o controlo demonstrável e onde o hardware e os serviços do canal recuperam protagonismo.
| Indicador | Valor | Fonte |
| Quota dos fornecedores da UE em 2017 | 29 % | Exposição de motivos COM(2026) 502 |
| Quota dos fornecedores da UE em 2022 | 15 % | Exposição de motivos COM(2026) 502 |
| Três hiperescaladores não UE | Mais de 70 % | Exposição de motivos COM(2026) 502 |
| Despesa em IaaS soberana na Europa 2026 | 12.600 M$ (previsão) | Gartner via CSA |
| Consumo elétrico dos centros de dados na UE (2024) | ≈ 68 TWh | Comissão Europeia |

## 18. O mercado da distribuição de TI na Europa, em Espanha e em Portugal
### Espanha: um ano recorde para o grossista
Segundo os dados da CONTEXT recolhidos pela Newsbook, o negócio dos grossistas em Espanha cresceu 15,1 % em 2025 [R6]. O impulso veio da renovação de equipamentos face ao fim do suporte do Windows 10 em outubro de 2025, do crescimento da infraestrutura para centros de dados e da cibersegurança. O Relatório 2026 da Alimarket situa entre os principais grossistas a TD SYNNEX, a Esprinet, a Ingram Micro, a MCR, a Riba Mundo Tecnología, a Inforpor, a Depau, a DMI, a Infortisa e a Globomatik, entre outros [R15].
### Europa: um 2026 mais moderado
Para o conjunto da Europa, a CONTEXT prevê que a distribuição de TI cresça cerca de 2,1 % em 2026 [R71]. O fim do efeito Windows 10 e a escassez de memória, que impulsionou compras antecipadas e pressiona os preços no segundo semestre, desenham um ano mais irregular para o posto de trabalho [R72]. A infraestrutura de centros de dados, a segurança e o software mantêm o crescimento.
### O canal perde quota, mas ganha influência
A Omdia estima que a quota da despesa em TI canalizada por parceiros desça de 70,1 % em 2025 para 66,7 % em 2026, devido ao crescimento da venda direta de servidores a hiperescaladores e de software na cloud [R10]. Ao mesmo tempo, a despesa absoluta através de parceiros continua a crescer, 82 % da despesa em TI das PME da EMEA passa por eles [R11] e a cibersegurança depende do canal em mais de 90 % [R12]. No Canalys Forum EMEA 2026, alertou-se para o facto de que até 30 % dos parceiros atuais não existirão na sua forma atual em 2030, com o crescimento concentrado em especialistas em IA, cibersegurança e dados [R73].
### O grossista como orquestrador
O GTDC, associação dos grandes grossistas tecnológicos de que a Esprinet faz parte [R74], defende no seu relatório de julho de 2026 que a distribuição pode elevar acima de 80 % a capacidade de execução dos fabricantes nas funções-chave de entrada no mercado, e que os fabricantes dão prioridade à visibilidade do retorno (88 %), ao alinhamento estratégico (85 %) e ao recrutamento e capacitação de parceiros (83 %) [R75]. Em Espanha, a mesa-redonda da Newsbook sobre a cloud reuniu a Arrow, a Ingram Micro, a TD SYNNEX e a V-Valley para analisar por que razão o grossista continua a ser essencial também no ambiente cloud [R76]. O relatório do GTDC de março de 2026 sublinha que o valor do grossista já vai muito além da logística e do crédito: integração multifabricante, modelos de subscrição e consumo, e capacitação de parceiros [R9].
### Leitura para a cadeia de valor
O canal ibérico cresce acima da Europa e a componente de valor cresce acima do conjunto. Isto dá margem para investir na preparação para a CADA. Mas o aviso da Omdia é claro: o canal que não evoluir para serviços e especialização perderá relevância. A CADA é uma oportunidade para acelerar essa evolução com uma razão regulamentar que os clientes compreendem.
> O canal ibérico chega à CADA a crescer, mas com uma mensagem de fundo: a quota ganha-se com especialização e serviço, não com volume. A soberania é uma especialização.

## 19. Os programas de fabricante em transformação
### 2026, ano de reformulação dos programas de parceiros
Quase todos os grandes fabricantes reformularam em 2025 e 2026 os seus programas de canal. As alterações partilham três traços: menos níveis e mais competências, incentivos ligados ao valor e ao ciclo de vida do cliente, e mais peso dos serviços geridos e da IA.
### As principais alterações
- A HPE unifica a partir de 1 de novembro de 2026 os programas da HPE e da Juniper Networks no HPE Partner Ready Vantage, com um único conjunto de níveis, competências e remuneração, e alarga a gama de produtos que vende exclusivamente através do canal [R77]. Em Espanha, cerca de 90 % das oportunidades ganhas pela HPE Aruba Networking são identificadas por um parceiro [R78].
- A Cisco lançou em fevereiro de 2026 o Cisco 360 Partner Program: elimina os níveis Gold, Premier e Select, cria duas categorias (Partner e Preferred Partner), mede o valor acrescentado ao longo do ciclo de vida do cliente e acrescenta especializações em infraestrutura segura para IA e redes seguras [R79].
- A Google Cloud lançou no primeiro trimestre de 2026 a sua Partner Network com os níveis Select, Premier e Diamond, competências baseadas em capacidade e contribuição validada, e uma transição de seis meses [R80].
- A Microsoft tornou mais exigentes os requisitos do seu programa CSP e levou a venda do canal para o seu marketplace [R49][R48].
- A Dell apresentou o seu programa de parceiros 2026 orientado para novas oportunidades em IA e centros de dados [R81]; a Lenovo define-se como empresa de canal e integrou a sua oferta de PC, servidores e serviços numa mesma abordagem; a HP impulsiona programas de renovação de equipamentos.
- A Broadcom encerrou o programa de fornecedores de cloud da VMware para boa parte dos pequenos parceiros europeus [R51].
### Que relação têm com a CADA
Nenhum destes programas inclui ainda critérios de soberania no sentido da CADA. Mas todos avançam para a medição do valor que o parceiro acrescenta ao cliente: competências, serviços, ciclo de vida. É razoável antecipar (análise própria) que, quando a CADA for aplicada, os fabricantes incorporarão nos seus programas competências de «implementação soberana» ou «setor público europeu», tal como hoje incorporam competências de segurança ou IA.
### Leitura para a cadeia de valor
Para os fabricantes, a recomendação é antecipar-se: definir já que configurações do seu catálogo podem suportar os níveis 1, 2 e 3, e que evidência fornecerão ao parceiro. Para os integradores, a complexidade crescente dos programas torna mais valioso um grossista que traduza requisitos, gira certificações e ajude a cumprir limiares. Para o grossista de valor acrescentado, a oportunidade é tornar-se o ponto onde os fabricantes «carregam» a sua soberania e os integradores a «descarregam» pronta a usar, com formação e certificação nas suas academias de parceiros.
> Os programas de parceiros já medem competências e valor. A soberania será a próxima competência, e o grossista que a normalizar primeiro definirá o formato do mercado.
| Fabricante | Alteração 2025–2026 | Implicação para o canal |
| HPE | Partner Ready Vantage unifica HPE e Juniper (1-11-2026) | Um único programa; mais produtos só via canal |
| Cisco | Cisco 360: dois níveis e medição do valor | Especialização em IA segura |
| Google Cloud | Partner Network: Select, Premier, Diamond | Competências por contribuição |
| Microsoft | Limiares CSP; venda via marketplace | Concentração em distribuidores com escala |
| Broadcom | Encerramento do programa VCSP na Europa | Procura de alternativas |
