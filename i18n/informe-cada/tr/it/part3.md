## 13. DORA, DMA e il riassetto dei programmi cloud
### DORA e la vigilanza sui fornitori tecnologici
DORA è il primo regime europeo che vigila direttamente sui fornitori tecnologici. Il 18 novembre 2025 le autorità europee hanno designato 19 fornitori terzi critici di servizi TIC, tra cui AWS, Google Cloud, Microsoft, Oracle e SAP, operatori come Orange e Deutsche Telekom e società di consulenza come Accenture, Capgemini o NTT DATA [R46]. Le entità finanziarie devono inserire nei loro contratti clausole di localizzazione, accesso, audit e uscita.
### DMA: AWS e Azure come gatekeeper
Il 25 giugno 2026 la Commissione ha comunicato la conclusione preliminare secondo cui AWS e Azure devono essere designati gatekeeper ai sensi della legge sui mercati digitali; se confermata, avranno sei mesi per rispettare obblighi di interoperabilità, portabilità e divieto di autopreferenza [R47]. Ciò può cambiare le condizioni di licenza e la possibilità di eseguire software su cloud di terzi, il che interessa anche i partner che vendono quel software.
### I programmi degli hyperscaler stanno già cambiando
Indipendentemente dalla regolamentazione, i grandi fornitori stanno riorganizzando il loro rapporto con il canale:
- Microsoft ha inasprito l'autorizzazione al programma Cloud Solution Provider, con soglie di 1 milione di dollari di ricavi per i partner a fatturazione diretta e di 30 milioni per i distributori indiretti [R48], e ha trasformato il proprio marketplace in una via di vendita attraverso il canale, con le «resale enabled offers» in disponibilità generale da novembre 2025 e le offerte private multiparte disponibili in 30 mercati europei da maggio 2026 [R49][R50].
- Nel gennaio 2026 Broadcom ha chiuso il programma per i cloud provider di VMware a buona parte dei piccoli partner europei e CISPE ha presentato un reclamo alla Commissione [R51].
- Secondo Omdia, entro il 2030 i partner genereranno il 59 % delle vendite nei marketplace degli hyperscaler [R52].
### Lettura per la catena del valore
L'accerchiamento normativo (DMA, DORA, Data Act e CADA) spinge verso architetture con più opzioni di implementazione. Per i produttori di software, ciò richiede licenze che consentano di eseguire i loro prodotti su infrastruttura europea e negli ambienti del cliente. Per gli integratori che lavorano con banche, assicurazioni o fintech, significa rispondere ai questionari DORA e CADA con uno stesso pacchetto di evidenze. Per il distributore a valore aggiunto, il riassetto dei programmi cloud ha due facce: le soglie di Microsoft e la chiusura di VMware concentrano il business nei distributori con scala, mentre le alternative di virtualizzazione e cloud privato generano domanda di nuove piattaforme, formazione e migrazione.
> Il CADA non agisce da solo: DMA, DORA, Data Act e i cambiamenti nei programmi degli hyperscaler spingono nella stessa direzione. Il distributore con scala e un catalogo alternativo acquista rilevanza.
| Strumento | Fatto | Effetto per il canale |
| DORA | 19 fornitori critici designati (nov. 2025) | Clausole di uscita e di audit nel settore finanziario |
| DMA | Conclusione preliminare su AWS e Azure (giu. 2026) | Licenze e interoperabilità |
| Microsoft CSP | Soglie di 1 mln $ e 30 mln $ | Concentrazione nei distributori con scala |
| Microsoft Marketplace | Rivendita e offerte multiparte in 30 mercati | Vendita di software attraverso il canale |
| Broadcom/VMware | Chiusura del programma VCSP (gen. 2026) | Domanda di alternative e migrazione |

## 14. Dati e spazi di dati: Data Union Strategy, Simpl, EHDS e Gaia-X
### La strategia sui dati dietro il CADA
La Data Union Strategy, presentata il 19 novembre 2025, orienta la politica dei dati verso l'attuazione: maggiore accesso a dati di qualità per l'IA, norme più semplici e tutela della sovranità. Comprende «Data Labs» che collegano gli spazi comuni di dati con le AI Factories e un rafforzamento di 100 milioni di euro per gli spazi di dati dal 2026, e colloca il CADA tra le sue azioni faro [R53].
### L'infrastruttura degli spazi di dati
Gli spazi comuni europei di dati (sanità, mobilità, energia, industria, agricoltura, finanza, pubblica amministrazione, appalti) si basano sul Data Spaces Support Centre, su Simpl, il middleware aperto della Commissione, e sulle specifiche dell'industria: il Dataspace Protocol di IDSA, i componenti Eclipse Dataspace e il quadro di fiducia di Gaia-X [R54][R30].
### EHDS
Lo spazio europeo dei dati sanitari (regolamento (UE) 2025/327) disciplina l'uso primario e secondario dei dati sanitari; la Commissione deve adottare i principali atti di esecuzione entro il 26 marzo 2027 [R55]. Gli organismi di accesso ai dati sanitari e gli ambienti di trattamento sicuri saranno probabilmente attività di ordine pubblico ai fini del CADA, con requisito di livello 2 o superiore.
### Federazione contro centralizzazione
Gli spazi di dati sono federati: i dati restano all'origine e vengono condivisi secondo policy di utilizzo leggibili dalle macchine, con connettori e credenziali verificabili. Si sposa con il CADA perché riduce la necessità di concentrare i dati in grandi piattaforme e consente di applicare livelli di garanzia diversi a ciascun nodo.
### Un nodo di uno spazio di dati è infrastruttura
Ogni partecipante a uno spazio di dati ha bisogno di un connettore implementato su infrastruttura propria o di fiducia, con identità, storage, sicurezza e monitoraggio. Per il canale, ciò significa domanda di server edge, storage sicuro e servizi di gestione, soprattutto nei settori dell'industria, della sanità, della logistica e dell'energia, dove gli integratori hanno già clienti.
### Lettura per la catena del valore
I produttori di infrastruttura possono preparare con il proprio distributore configurazioni di nodo per spazi di dati (server, storage, sicurezza e software aperto) pronte per essere implementate dagli integratori. Gli integratori con soluzioni settoriali siedono su dati preziosi per spazi industriali, sanitari o di economia circolare e possono offrire ai propri clienti la partecipazione con garanzie di sovranità. Il team autore di questo rapporto ha partecipato a tre dimostratori di spazi di dati federati finanziati dalla Segreteria di Stato per la Digitalizzazione spagnola (sanità, appalti pubblici ed economia circolare), un'esperienza trasferibile ai clienti del canale.
> Gli spazi di dati sono la versione «dei dati» della sovranità che il CADA applica al cloud: federazione, controllo all'origine e fiducia verificabile, implementati dal canale.
| Elemento | Stato | Ruolo in un'offerta del canale |
| Data Union Strategy | Comunicazione (nov. 2025) | Priorità politica e finanziamento |
| Simpl | Middleware aperto in fase di diffusione | Base tecnica comune |
| IDSA, Eclipse, Gaia-X | Specifiche e componenti | Connettori, protocollo e fiducia |
| EHDS | Atti di esecuzione 2026–2027 | Domanda di infrastruttura sanitaria sovrana |

## 15. Normativa di prodotto che riguarda già il distributore: RAEE, ecodesign e fatturazione elettronica
### Il CADA arriva su un canale già regolamentato
Il distributore tecnologico non è nuovo alla conformità. Ogni referenza che distribuisce deve rispettare norme su rifiuti, efficienza, sicurezza dei prodotti e, sempre più, cybersicurezza. Comprendere questi obblighi è utile per due ragioni: dimostrano che il canale sa gestire la conformità su scala e forniscono processi riutilizzabili per le evidenze di sovranità.
### RAEE
In Spagna, il Real Decreto 110/2015 disciplina i rifiuti di apparecchiature elettriche ed elettroniche (RAEE). I produttori, compresi coloro che importano e immettono per la prima volta apparecchiature sul mercato, devono iscriversi al registro, dichiarare le apparecchiature immesse sul mercato e finanziare la gestione dei rifiuti, di norma attraverso sistemi collettivi di responsabilità estesa; i distributori devono ritirare le apparecchiature usate in determinati casi [R56]. Il numero di registro del produttore deve figurare nelle fatture tra produttori e distributori. È un esempio di come la normativa ripartisca già gli obblighi per anello.
### Ecodesign di server e storage
Il regolamento (UE) 2019/424 stabilisce requisiti di ecodesign per server e prodotti di archiviazione dati online, incentrati sull'efficienza degli alimentatori, sulle prestazioni in stato attivo, sulle informazioni sui materiali e sulla facilità di smontaggio e di cancellazione sicura dei dati per il riutilizzo; il regolamento è in revisione [R57]. La revisione, insieme agli obiettivi di efficienza dell'Allegato I del CADA e al pacchetto europeo sull'efficienza dei data center [R58], lascia prevedere requisiti più stringenti per l'hardware venduto ai data center.
### Apparecchiature ricondizionate
L'economia circolare cresce nel canale: secondo CONTEXT, le vendite di PC ricondizionati nel canale di distribuzione sono cresciute del 7 % nel quarto trimestre del 2025 nei cinque grandi mercati europei, e i distributori, Esprinet compresa, hanno guadagnato peso in questa categoria [R59]. Il CADA, che richiede cancellazione sicura e controllo degli asset ai fini delle evidenze, e l'ecodesign, che facilita il riutilizzo, spingono nella stessa direzione.
### Fatturazione elettronica
La Spagna ha approvato il Real Decreto 238/2026 sulla fattura elettronica obbligatoria tra imprese e l'Orden HAC/1028/2026 che disciplina la soluzione pubblica; il sistema VERI*FACTU è stato rinviato a ottobre 2028 per farlo coincidere con il calendario della fattura elettronica di PMI e lavoratori autonomi [R60]. Riguarda tutto il software gestionale venduto dal canale e i processi di fatturazione di distributori e integratori.
### Lettura per la catena del valore
Il distributore gestisce già, per migliaia di referenze, dati su registro del produttore, efficienza, marcatura e garanzie. Aggiungere una scheda di sovranità (localizzazione della telemetria, origine dell'assistenza, componenti, controllo) è un'estensione naturale di questo sistema. Per i produttori, offrire in un unico pacchetto la conformità a RAEE, ecodesign, CRA e CADA ridurrà l'attrito di vendita. Per gli integratori, i servizi di ritiro, cancellazione certificata e riutilizzo delle apparecchiature (ITAD) diventano parte del ciclo di vita sovrano del cliente.
> Il canale sa già gestire la conformità dei prodotti su scala. Il CADA aggiunge una colonna in più alla scheda di ogni referenza: la sovranità.
| Norma | Obbligo principale | Anello interessato |
| RD 110/2015 (RAEE) | Registro, dichiarazione e finanziamento dei rifiuti; ritiro | Produttore/importatore e distributore |
| Regolamento 2019/424 | Ecodesign di server e storage (in revisione) | Produttore; informazioni al canale |
| CRA | Conformità, marcatura e verifica | Produttore, importatore e distributore |
| RD 238/2026 e VERI*FACTU | Fattura elettronica B2B; software di fatturazione (ott. 2028) | Produttori di software, canale e clienti |
| CADA | Evidenze di sovranità per servizio | Tutta la catena |

## 16. Il quadro spagnolo e portoghese
### Governance dell'IA in Spagna
La Spagna è stata pioniera in Europa creando un'autorità nazionale di vigilanza sull'IA, l'AESIA. Il 26 maggio 2026 il Consiglio dei ministri ha trasmesso alle Cortes il progetto di legge organica per il buon uso e la governance dell'IA (Proyecto de Ley Orgánica para el buen uso y la gobernanza de la IA), che designava l'AESIA come autorità principale, disciplinava sandbox e sanzioni e includeva un titolo sull'uso dell'IA nel settore pubblico statale [R61]. Il progetto è decaduto con lo scioglimento delle Cortes il 6 ottobre 2026 (Real Decreto 806/2026), prima delle elezioni politiche del 29 novembre [R42]. Oggi non esiste una legge spagnola sull'IA: l'AI Act si applica direttamente e l'AESIA continua a operare, ma manca il regime sanzionatorio nazionale. Il prossimo governo dovrà presentare un nuovo testo.
### Schema nazionale di sicurezza
Il Real Decreto 311/2022 disciplina lo Schema nazionale di sicurezza (Esquema Nacional de Seguridad, ENS), obbligatorio per il settore pubblico e i suoi fornitori tecnologici. Il suo sistema di categorie e la certificazione di conformità sono oggi la chiave di accesso al mercato pubblico del cloud in Spagna e la base naturale del futuro riconoscimento CADA.
### Sovranità digitale e data center
Il 24 febbraio 2026 il governo ha presentato la Tabella di marcia per accelerare la sovranità digitale (Hoja de Ruta para acelerare la Soberanía Digital), che colloca cloud e data center come spina dorsale [R62]. Il 27 agosto 2026 ha posto in consultazione un progetto di regio decreto sui data center sostenibili che, per gli impianti da 1 MW in su, richiedeva che almeno l'80 % del consumo di ogni ora fosse coperto da rinnovabili della stessa ora e che l'operatore fosse stabilito nell'UE [R63]. Dopo oltre 600 osservazioni e un parere critico della CNMC del 22 settembre [R64], il testo rivisto alza la soglia a 10 MW, consente una rampa dell'80 % di rinnovabili su base oraria fino al 2031 e concentra la sovranità sui data center che ospitano sistemi pubblici di categoria ALTA dell'ENS, i cui dati dovranno restare nell'UE. Il Consiglio di Stato lo ha avallato a novembre con quattro modifiche e il governo prevede di approvarlo il 17 o il 24 novembre 2026; essendo un regio decreto, non è decaduto con lo scioglimento delle Cortes [R65]. Parte dell'industria continua a respingerlo; il governo lo presenta come un modo per ordinare la crescita.
### Programmi pubblici e canale
L'esperienza del Kit Digital, con la sua rete di agenti digitalizzatori, ha dimostrato che il canale è il veicolo più efficace per portare la digitalizzazione a PMI e lavoratori autonomi: Red.es lo ha attuato attraverso migliaia di fornitori tecnologici accreditati [R66]. È ragionevole attendersi che la strategia nazionale per il cloud e l'IA richiesta dal CADA si basi su meccanismi analoghi (analisi propria).
### Portogallo
Il Portogallo ha un settore TIC dinamico, con oltre 13.000 imprese tecnologiche e circa 245.000 professionisti, e si consolida come centro di servizi di prossimità per le imprese europee [R67]. Per la distribuzione è il mercato con la crescita relativa più elevata: il Gruppo Esprinet vi è cresciuto del 47 % nel 2025 e del 37 % nel primo semestre del 2026 [R17][R7]. Il Portogallo dovrà designare la propria autorità CADA, adottare la propria strategia per il cloud e l'IA e completare il proprio recepimento della NIS2.
### Lettura per la catena del valore
Spagna e Portogallo possono essere tra i primi mercati ad applicare il CADA con agilità: la Spagna dispone di un'autorità per l'IA, di uno schema di sicurezza e di una tabella di marcia per la sovranità. Per i produttori, la certificazione ENS dei loro prodotti e servizi sarà un asset distintivo. Per gli integratori, mantenere ed elevare le proprie certificazioni ENS e seguire la futura strategia nazionale è prioritario. Per il distributore a valore aggiunto, operare con un'unica organizzazione in entrambi i paesi consente di offrire configurazioni convalidate per i due quadri nazionali.
> La penisola può essere un mercato precoce del CADA: dispone di uno schema di sicurezza, di un'autorità per l'IA, di una tabella di marcia per la sovranità e di un canale che ha già dimostrato la propria capacità di attuare programmi pubblici.
| Strumento | Stato | Relazione con il CADA |
| Progetto di legge organica sulla governance dell'IA (Spagna) | Decaduto (scioglimento delle Cortes, 6-10-2026) | Applicazione dell'AI Act e uso pubblico dell'IA |
| ENS (RD 311/2022) | In vigore | Base tecnica del riconoscimento |
| Tabella di marcia per la sovranità digitale | Feb. 2026 | Orientamento politico |
| RD sui data center | Parere del Consiglio di Stato (nov. 2026); approvazione prevista | Requisiti energetici e di sovranità |
| Portogallo: autorità e strategia CADA | Dopo l'entrata in vigore | Mercato con la crescita relativa più elevata |
## 17. Il mercato cloud europeo: dipendenza, concentrazione e domanda sovrana
### Una dipendenza misurabile
I fornitori cloud europei sono passati dal 29 % del mercato europeo nel 2017 al 15 % nel 2022, quota che si è mantenuta, mentre tre hyperscaler non europei superano il 70 % [R1]. I dati di Synergy Research per il primo trimestre del 2026 attribuiscono ai soli AWS e Azure circa il 65–70 % dei ricavi cloud dell'UE [R47].
### Una domanda che cambia natura
Gartner prevede che la spesa europea in infrastruttura come servizio sovrana passi da 6,9 miliardi di dollari nel 2025 a 12,6 miliardi nel 2026 e si avvicini a 23,1 miliardi nel 2027 [R68]. Lo studio commissionato dalla Commissione per la valutazione d'impatto quantifica inoltre il divario tra la capacità di calcolo esistente e la domanda prevista [R69]. È un cambiamento strutturale nel modo di acquistare. Gli hyperscaler hanno risposto con offerte «sovrane» e grandi investimenti in data center europei, come i 33,7 miliardi di euro annunciati da AWS in Spagna [R63].
### Capacità di calcolo per l'IA
Bruegel sottolinea che l'UE è molto indietro rispetto agli Stati Uniti in termini di capacità di chip per l'IA e avverte che criteri di sovranità rigidi potrebbero rendere la capacità più costosa [R70]. I data center hanno consumato circa 68 TWh nell'UE nel 2024 e la loro domanda potrebbe quasi raddoppiare entro il 2030 [R58].
### Che cosa cerca di cambiare il CADA
Il CADA non mira a espellere gli hyperscaler, ma a creare un segmento di mercato, quello pubblico e per estensione quello critico, in cui la concorrenza si basi anche sul controllo e sulla resilienza. Se quel segmento raggiungerà una massa critica, i fornitori europei potranno crescere di scala e quelli non europei avranno incentivi a offrire strutture di controllo e gestione europee, come già fanno alcune alleanze (S3NS tra Thales e Google o Bleu tra Orange, Capgemini e Microsoft).
### Il cloud non è solo pubblico
Per il canale, una sfumatura è essenziale: la sovranità si costruisce anche al di fuori del cloud pubblico. Cloud privati nel data center del cliente, cloud di fornitori regionali, colocation e modelli di consumo di infrastruttura come servizio (HPE GreenLake, Dell APEX o Lenovo TruScale) consentono di offrire controllo e localizzazione con hardware venduto attraverso il canale. Gran parte della domanda sovrana si tradurrà in acquisti di server, storage, reti e software di virtualizzazione, protezione dei dati e sicurezza, non in abbonamenti agli hyperscaler.
### Dove si trova il valore per il canale
Il CADA tende a frammentare l'infrastruttura (più fornitori, più livelli, più regioni) e la frammentazione aumenta il valore di chi sa orchestrarla. Per i produttori di infrastruttura, il segmento sovrano è un'opportunità per recuperare carichi che erano migrati verso il cloud pubblico. Per gli integratori, il valore sta nello strato dei servizi: migrazione, integrazione, gestione ibrida, sicurezza e conformità. Per il distributore a valore aggiunto, l'opportunità è aggregare i componenti in offerte di riferimento per livello.
> La concentrazione del mercato non scomparirà con il CADA, ma si aprirà un segmento con regole proprie in cui la dimensione conta meno del controllo dimostrabile e in cui l'hardware e i servizi del canale tornano protagonisti.
| Indicatore | Valore | Fonte |
| Quota dei fornitori UE nel 2017 | 29 % | Relazione COM(2026) 502 |
| Quota dei fornitori UE nel 2022 | 15 % | Relazione COM(2026) 502 |
| Tre hyperscaler non UE | Oltre il 70 % | Relazione COM(2026) 502 |
| Spesa in IaaS sovrana in Europa 2026 | 12,6 mld $ (previsione) | Gartner tramite CSA |
| Consumo elettrico dei data center nell'UE (2024) | ≈ 68 TWh | Commissione europea |

## 18. Il mercato della distribuzione IT in Europa, Spagna e Portogallo
### Spagna: un anno record per il distributore
Secondo i dati di CONTEXT riportati da Newsbook, il business dei distributori in Spagna è cresciuto del 15,1 % nel 2025 [R6]. La spinta è venuta dal rinnovo delle apparecchiature in vista della fine del supporto di Windows 10 nell'ottobre 2025, dalla crescita dell'infrastruttura per data center e dalla cybersicurezza. Il Rapporto 2026 di Alimarket colloca tra i principali distributori TD SYNNEX, Esprinet, Ingram Micro, MCR, Riba Mundo Tecnología, Inforpor, Depau, DMI, Infortisa e Globomatik, tra gli altri [R15].
### Europa: un 2026 più moderato
Per l'Europa nel suo insieme, CONTEXT prevede che la distribuzione IT cresca di circa il 2,1 % nel 2026 [R71]. La fine dell'effetto Windows 10 e la scarsità di memoria, che ha spinto acquisti anticipati e mette sotto pressione i prezzi nel secondo semestre, delineano un anno più irregolare per la postazione di lavoro [R72]. L'infrastruttura per data center, la sicurezza e il software mantengono la crescita.
### Il canale perde quota, ma guadagna influenza
Omdia stima che la quota della spesa IT veicolata dai partner scenda dal 70,1 % nel 2025 al 66,7 % nel 2026, per la crescita della vendita diretta di server agli hyperscaler e di software in cloud [R10]. Allo stesso tempo, la spesa assoluta attraverso i partner continua a crescere, l'82 % della spesa IT delle PMI dell'area EMEA passa attraverso di loro [R11] e la cybersicurezza dipende dal canale per oltre il 90 % [R12]. Al Canalys Forum EMEA 2026 è stato segnalato che fino al 30 % degli attuali partner non esisterà più nella forma attuale nel 2030, con una crescita concentrata negli specialisti di IA, cybersicurezza e dati [R73].
### Il distributore come orchestratore
Il GTDC, l'associazione dei grandi distributori tecnologici di cui fa parte Esprinet [R74], sostiene nel suo rapporto di luglio 2026 che la distribuzione può portare oltre l'80 % la capacità di esecuzione dei vendor nelle funzioni chiave di go-to-market e che i vendor danno priorità alla visibilità del ritorno (88 %), all'allineamento strategico (85 %) e al reclutamento e alla formazione dei partner (83 %) [R75]. In Spagna, la tavola rotonda di Newsbook sul cloud ha riunito Arrow, Ingram Micro, TD SYNNEX e V-Valley per analizzare perché il distributore resta essenziale anche nel contesto cloud [R76]. Il rapporto del GTDC di marzo 2026 sottolinea che il valore del distributore va ormai ben oltre la logistica e il credito: integrazione multivendor, modelli in abbonamento e a consumo e formazione dei partner [R9].
### Lettura per la catena del valore
Il canale iberico cresce più dell'Europa e la componente a valore cresce più del totale. Ciò dà margine per investire nella preparazione al CADA. Ma l'avvertimento di Omdia è chiaro: il canale che non evolverà verso i servizi e la specializzazione perderà rilevanza. Il CADA è un'opportunità per accelerare questa evoluzione con una motivazione normativa che i clienti comprendono.
> Il canale iberico arriva al CADA in crescita, ma con un messaggio di fondo: la quota si conquista con la specializzazione e il servizio, non con il volume. La sovranità è una specializzazione.

## 19. I programmi dei vendor in trasformazione
### Il 2026, anno di riprogettazione dei programmi partner
Quasi tutti i grandi vendor hanno riprogettato nel 2025 e nel 2026 i propri programmi di canale. I cambiamenti condividono tre tratti: meno livelli e più competenze, incentivi legati al valore e al ciclo di vita del cliente e più peso ai servizi gestiti e all'IA.
### I cambiamenti principali
- Dal 1° novembre 2026 HPE unifica i programmi di HPE e Juniper Networks in HPE Partner Ready Vantage, con un unico insieme di livelli, competenze e compensi, e amplia la gamma di prodotti venduti esclusivamente attraverso il canale [R77]. In Spagna, circa il 90 % delle opportunità vinte da HPE Aruba Networking viene individuato da un partner [R78].
- Nel febbraio 2026 Cisco ha lanciato il Cisco 360 Partner Program: elimina i livelli Gold, Premier e Select, crea due categorie (Partner e Preferred Partner), misura il valore apportato lungo il ciclo di vita del cliente e aggiunge specializzazioni in infrastruttura sicura per l'IA e reti sicure [R79].
- Nel primo trimestre del 2026 Google Cloud ha lanciato la sua Partner Network con livelli Select, Premier e Diamond, competenze basate su capacità e contributo convalidato e una transizione di sei mesi [R80].
- Microsoft ha inasprito i requisiti del programma CSP e ha portato la vendita del canale sul proprio marketplace [R49][R48].
- Dell ha presentato il suo programma partner 2026 orientato a nuove opportunità nell'IA e nei data center [R81]; Lenovo si definisce un'azienda di canale e ha integrato la propria offerta di PC, server e servizi in un unico approccio; HP promuove programmi di rinnovo delle apparecchiature.
- Broadcom ha chiuso il programma per i cloud provider di VMware a buona parte dei piccoli partner europei [R51].
### Che cosa hanno a che fare con il CADA
Nessuno di questi programmi include ancora criteri di sovranità nel senso del CADA. Ma tutti si muovono verso la misurazione del valore che il partner apporta al cliente: competenze, servizi, ciclo di vita. È ragionevole prevedere (analisi propria) che, quando il CADA sarà applicato, i vendor inseriranno nei loro programmi competenze di «implementazione sovrana» o «settore pubblico europeo», così come oggi inseriscono competenze di sicurezza o di IA.
### Lettura per la catena del valore
Per i produttori, la raccomandazione è giocare d'anticipo: definire fin d'ora quali configurazioni del proprio catalogo possono sostenere i livelli 1, 2 e 3 e quali evidenze forniranno al partner. Per gli integratori, la crescente complessità dei programmi rende più prezioso un distributore che traduca i requisiti, gestisca le certificazioni e aiuti a raggiungere le soglie. Per il distributore a valore aggiunto, l'opportunità è diventare il punto in cui i vendor «caricano» la propria sovranità e gli integratori la «scaricano» pronta all'uso, con formazione e certificazione nelle proprie academy per i partner.
> I programmi partner misurano già competenze e valore. La sovranità sarà la prossima competenza e il distributore che la standardizzerà per primo definirà il formato del mercato.
| Vendor | Cambiamento 2025–2026 | Implicazione per il canale |
| HPE | Partner Ready Vantage unifica HPE e Juniper (1-11-2026) | Un unico programma; più prodotti solo tramite canale |
| Cisco | Cisco 360: due livelli e misurazione del valore | Specializzazione in IA sicura |
| Google Cloud | Partner Network: Select, Premier, Diamond | Competenze basate sul contributo |
| Microsoft | Soglie CSP; vendita tramite marketplace | Concentrazione nei distributori con scala |
| Broadcom | Chiusura del programma VCSP in Europa | Domanda di alternative |
