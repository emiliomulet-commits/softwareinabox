from common import table

SPAIN = "Spain"
NAV = "Across the EU"
H = ["Country", "National rule", "Authority", "Key point"]


def sec(h2, intro, rows, note):
    return ('<div class="wrap">\n<div class="sec-h"><div class="eyebrow">Across the EU</div>'
            f'<h2>{h2}</h2></div>\n<p>{intro}</p>\n' + table(h2, H, rows) +
            f'\n<div class="callout">{note}</div>\n</div>')


NAT = {
"raee": {"sec": sec("How other Member States apply the WEEE Directive",
  "The WEEE Directive is transposed in every Member State, but registration, schemes and take-back rules differ. A producer needs a registration in each country where it sells.",
  [["Germany", "ElektroG", "stiftung ear", "Own take-back offer required for B2B-only equipment"],
   ["France", "Environment Code R543-172", "ADEME (SYDEREP)", "Approved schemes ecosystem or Ecologic; unique ID on invoices"],
   ["Netherlands", "WEEE Regulation", "National WEEE Register", "Most producers join Stichting OPEN"],
   ["Belgium", "Regional rules", "Regions", "Recupel or an individual waste plan"],
   ["Portugal", "DL 152-D/2017", "APA", "ERP Portugal or Electrão"],
   ["Italy", "D.Lgs. 49/2014", "Chambers of commerce (AEE Register)", "Coordinated by the CdC RAEE"],
   ["Denmark", "WEEE executive order", "DPA-System", "Registration before placing on the market"]],
  "Foreign producers without an establishment usually need an authorised representative in each country.")},
"factura-electronica": {"sec": sec("E-invoicing in other Member States",
  "ViDA sets a common EU framework, but each country is moving at its own pace and with its own architecture.",
  [["Germany", "§ 14 UStG", "BMF", "Receiving since 2025; issuing from 2027 (over €800,000) and 2028"],
   ["France", "CGI art. 289 bis", "DGFiP", "Approved platforms; receiving since 1-9-2026, issuing 2026 and 2027"],
   ["Netherlands", "Cabinet decision 11-9-2026", "Belastingdienst", "B2B voluntary; mandatory from 1-7-2030"],
   ["Belgium", "VAT Code art. 53 §2bis", "FPS Finance", "B2B via Peppol since 1-1-2026; e-reporting 2028"],
   ["Portugal", "CIUS-PT", "AT", "No B2B mandate; PDF needs a qualified signature from 2027"],
   ["Italy", "SdI (D.Lgs. 127/2015)", "Agenzia delle Entrate", "Clearance for B2B and B2C since 2019"],
   ["Denmark", "Bookkeeping Act", "Danish Business Authority", "E-invoice-ready software; Nemhandel by default"]],
  "A system that produces EN 16931 invoices and connects to Peppol covers most of these markets.")},
"ens": {"sec": sec("Public-sector security frameworks in other Member States",
  "The ENS is Spanish. Other countries rely on their own frameworks, usually alongside ISO 27001 and the NIS2 transposition.",
  [["Germany", "IT-Grundschutz, C5", "BSI", "C5 attestation for cloud providers"],
   ["France", "RGS, SecNumCloud", "ANSSI", "SecNumCloud for sensitive state data"],
   ["Netherlands", "BIO2", "Ministry of the Interior", "Mandatory for government through the Cbw"],
   ["Belgium", "CyberFundamentals", "CCB", "Presumption of NIS2 conformity"],
   ["Portugal", "QNRCS, DL 125/2025", "CNCS", "Managers personally liable"],
   ["Italy", "ACN Cloud Regulation", "ACN", "Qualification levels QC1–QC4"],
   ["Denmark", "ISO 27001 + 29 minimum requirements", "Agency for Digital Government", "Mandatory for state bodies"]],
  "Only Spain and Belgium have a national certification scheme comparable to the ENS.")},
"ley-gobernanza-ia": {"sec": sec("AI Act implementation in other Member States",
  "Spain's bill lapsed; several Member States already have national AI laws designating authorities and penalties.",
  [["Germany", "KI-MIG (July 2026)", "BNetzA", "AI service desk and regulatory sandbox"],
   ["France", "DDADUE bill", "DGCCRF / CNIL (disputed)", "Not yet adopted"],
   ["Netherlands", "Uvai (consultation)", "AP and RDI", "Ten supervisors"],
   ["Belgium", "—", "BIPT (announced)", "No legal basis yet"],
   ["Portugal", "—", "ANACOM (announced)", "No decree published"],
   ["Italy", "L. 132/2025 + D.Lgs. 179/2026", "AgID and ACN", "Obligations beyond the AI Act"],
   ["Denmark", "Act 467/2025", "Agency for Digital Government", "First in the EU (2-8-2025)"]],
  "The AI Act applies directly everywhere; national laws decide who supervises and how penalties are imposed.")},
"rd-centros-datos": {"sec": sec("Data-centre rules in other Member States",
  "Spain's decree ties grid access to renewables, efficiency and data sovereignty. Other countries either restrict or attract data centres.",
  [["Germany", "EnEfG", "BNetzA / BfEE", "PUE 1.2 for new data centres"],
   ["France", "Law 2026-403", "Prefectures, RTE", "Major national interest projects"],
   ["Netherlands", "Hyperscale ban", "Ministry, provinces", "Only Eemshaven and Wieringermeer"],
   ["Belgium", "—", "Regions, Elia, CREG", "Capped grid capacity"],
   ["Portugal", "National Data Centre Plan", "AICEP", "Decree in preparation"],
   ["Italy", "DL 21/2026", "MASE, regions", "Single authorisation in 10 months"],
   ["Denmark", "BEK 926/2024", "Danish Energy Agency", "Last in the grid queue"]],
  "All share the EU reporting duty for data centres from 500 kW under the Energy Efficiency Directive.")},
}
