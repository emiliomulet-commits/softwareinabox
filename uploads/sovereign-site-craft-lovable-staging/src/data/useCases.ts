export type Bilingual = { es: string; en: string; it?: string; pt?: string };

export type RegRow = {
  norm: string;
  requires: Bilingual;
  response: Bilingual;
};

export type Stat = {
  value: string;
  label: Bilingual;
  source?: string;
};

export type ExampleStep = {
  code: string;
  title: Bilingual;
  body: Bilingual;
};

export type Outcome = {
  metric: string;
  label: Bilingual;
};

export type FAQ = {
  q: Bilingual;
  a: Bilingual;
};

export type UseCase = {
  id: string; // USE-01..05
  slug: string;
  tint: string; // hex/oklch color used sparingly as sector accent
  sector: Bilingual;
  headline: Bilingual;
  title: Bilingual;
  subtitle: Bilingual;
  chips: string[];
  regRows: RegRow[];
  stats: Stat[];
  example: {
    title: Bilingual;
    steps: ExampleStep[];
  };
  outcomes: Outcome[];
  checklist: string[];
  faq: FAQ[];
};

export const useCases: UseCase[] = [
  {
    id: "USE-01",
    slug: "banking",
    tint: "#102540",
    sector: { es: "Banca", en: "Banking", it: "Banca", pt: "Banca" },
    headline: {
      es: "Inteligencia que se queda dentro del banco",
      en: "Intelligence that stays inside the bank",
      it: "Intelligenza che resta dentro la banca",
      pt: "Inteligência que fica dentro do banco",
    },
    title: {
      es: "Inteligencia que se queda dentro del banco.",
      en: "Intelligence that stays inside the bank.",
      it: "Intelligenza che resta dentro la banca.",
      pt: "Inteligência que fica dentro do banco.",
    },
    subtitle: {
      es: "Scoring, AML y análisis de riesgo sobre tu propio hardware. Cero datos a terceros.",
      en: "Scoring, AML and risk analytics on your own hardware. Zero data to third parties.",
      it: "Scoring, AML e analisi del rischio sul tuo hardware. Zero dati a terzi.",
      pt: "Scoring, AML e análise de risco no teu hardware. Zero dados a terceiros.",
    },
    chips: ["DORA", "Basel III", "MiFID II", "AML/KYC", "EU AI Act"],
    regRows: [
      {
        norm: "DORA",
        requires: {
          es: "Gestión del riesgo ICT, reporte de incidentes, control de terceros, resiliencia operativa.",
          en: "ICT risk management, incident reporting, third-party control, operational resilience.",
        },
        response: {
          es: "Appliance on-prem que reduce a cero la dependencia de terceros cloud. Logs firmados.",
          en: "On-prem appliance that brings third-party cloud dependency to zero. Signed logs.",
        },
      },
      {
        norm: "Basel III",
        requires: {
          es: "Linaje del dato y reproducibilidad de modelos de riesgo.",
          en: "Data lineage and reproducibility of risk models.",
        },
        response: {
          es: "Orquestación con linaje trazable. Cada artefacto firmado bajo el mismo Trace ID.",
          en: "Orchestration with traceable lineage. Every artifact signed under one Trace ID.",
        },
      },
      {
        norm: "MiFID II",
        requires: {
          es: "Idoneidad, mejor ejecución, conservación de registros durante años.",
          en: "Suitability, best execution, multi-year record retention.",
        },
        response: {
          es: "Registro inmutable de cada consulta y decisión en la Audit Chain.",
          en: "Immutable record of every query and decision in the Audit Chain.",
        },
      },
      {
        norm: "AML/KYC",
        requires: {
          es: "Monitorización de transacciones, screening de sanciones, explicabilidad.",
          en: "Transaction monitoring, sanctions screening, alert explainability.",
        },
        response: {
          es: "Inferencia sobre PII sin egress. Alertas con citas explícitas de la regla aplicada.",
          en: "Inference over PII with no egress. Alerts cite the exact rule applied.",
        },
      },
      {
        norm: "EU AI Act",
        requires: {
          es: "Credit scoring = Anexo III: documentación, supervisión humana, registros. Calendario dic 2027 / ago 2028.",
          en: "Credit scoring is Annex III: documentation, human oversight, logging. Timeline Dec 2027 / Aug 2028.",
        },
        response: {
          es: "Logging por diseño. Humano en el bucle obligatorio en decisiones de crédito.",
          en: "Logging by design. Mandatory human-in-the-loop on credit decisions.",
        },
      },
    ],
    stats: [
      { value: "0", label: { es: "datos a terceros cloud", en: "data to third-party cloud" } },
      { value: "100%", label: { es: "decisiones con Trace ID firmado", en: "decisions with signed Trace ID" } },
      { value: "4", label: { es: "roles RBAC nativos", en: "native RBAC roles" } },
    ],
    example: {
      title: {
        es: "Una alerta AML, de principio a fin.",
        en: "An AML alert, end to end.",
      },
      steps: [
        {
          code: "01",
          title: { es: "Ingesta", en: "Ingest" },
          body: {
            es: "El core bancario envía la transacción al appliance dentro del datacenter.",
            en: "The core banking system sends the transaction to the on-prem appliance.",
          },
        },
        {
          code: "02",
          title: { es: "Inferencia", en: "Inference" },
          body: {
            es: "El modelo evalúa riesgo, screening de sanciones y patrón histórico — sin egress.",
            en: "The model evaluates risk, sanctions screening and historical pattern — no egress.",
          },
        },
        {
          code: "03",
          title: { es: "Explicación", en: "Explanation" },
          body: {
            es: "La alerta incluye la regla aplicada y el peso de cada señal.",
            en: "The alert includes the rule applied and the weight of each signal.",
          },
        },
        {
          code: "04",
          title: { es: "Audit Chain", en: "Audit Chain" },
          body: {
            es: "Trace ID firmado, exportable a inspectores BCE/EBA bajo NDA.",
            en: "Signed Trace ID, exportable to ECB/EBA inspectors under NDA.",
          },
        },
        {
          code: "05",
          title: { es: "Revisión humana", en: "Human review" },
          body: {
            es: "El analista AML confirma o descarta con un clic; la decisión se sella.",
            en: "The AML analyst confirms or dismisses with one click; the decision is sealed.",
          },
        },
        {
          code: "06",
          title: { es: "Cierre", en: "Closure" },
          body: {
            es: "Caso cerrado, evidencia retenida durante el periodo legal exigido.",
            en: "Case closed, evidence retained for the required legal period.",
          },
        },
      ],
    },
    outcomes: [
      { metric: "-60%", label: { es: "tiempo de reporte de incidente DORA", en: "DORA incident reporting time" } },
      { metric: "0", label: { es: "incidentes de fuga de PII", en: "PII leak incidents" } },
      { metric: "x3", label: { es: "throughput de revisión AML", en: "AML review throughput" } },
    ],
    checklist: ["DORA", "Basel III", "MiFID II", "AML/KYC", "EU AI Act"],
    faq: [
      {
        q: { es: "¿Sustituye al core bancario?", en: "Does it replace the core banking system?" },
        a: {
          es: "No. Se integra sobre el core como capa de inferencia y trazabilidad.",
          en: "No. It sits on top of the core as an inference and traceability layer.",
        },
      },
      {
        q: { es: "¿Cómo se reporta a BCE/EBA?", en: "How do we report to ECB/EBA?" },
        a: {
          es: "Cada decisión genera un Trace ID exportable como evidencia firmada.",
          en: "Every decision generates a Trace ID exportable as signed evidence.",
        },
      },
    ],
  },

  {
    id: "USE-02",
    slug: "insurance",
    tint: "#2C6E6A",
    sector: { es: "Seguros", en: "Insurance", it: "Assicurazioni", pt: "Seguros" },
    headline: {
      es: "Suscribir más rápido sin perder el control",
      en: "Underwrite faster without losing control",
      it: "Sottoscrivere più velocemente senza perdere il controllo",
      pt: "Subscrever mais depressa sem perder o controlo",
    },
    title: {
      es: "Suscripción y siniestros sin fuga de datos.",
      en: "Underwriting and claims with no data leakage.",
      it: "Sottoscrizione e sinistri senza fughe di dati.",
      pt: "Subscrição e sinistros sem fuga de dados.",
    },
    subtitle: {
      es: "Modelos actuariales y peritaciones asistidas en tu perímetro. Trazabilidad para Solvency II e IDD.",
      en: "Actuarial models and assisted appraisals inside your perimeter. Traceability for Solvency II and IDD.",
      it: "Modelli attuariali e perizie assistite nel tuo perimetro. Tracciabilità per Solvency II e IDD.",
      pt: "Modelos atuariais e peritagens assistidas no teu perímetro. Rastreabilidade para Solvency II e IDD.",
    },
    chips: ["Solvency II", "IDD", "EU AI Act", "GDPR Art. 22"],
    regRows: [
      {
        norm: "Solvency II",
        requires: {
          es: "Gobernanza del riesgo, validación de modelos internos, ORSA.",
          en: "Risk governance, internal model validation, ORSA.",
        },
        response: {
          es: "Modelos reproducibles con linaje completo; validación versionada en la Audit Chain.",
          en: "Reproducible models with full lineage; versioned validation in the Audit Chain.",
        },
      },
      {
        norm: "IDD",
        requires: {
          es: "Información clara al cliente, idoneidad del producto, gestión de conflictos.",
          en: "Clear customer info, product suitability, conflict management.",
        },
        response: {
          es: "Cada recomendación incluye explicación legible y queda registrada por cliente.",
          en: "Every recommendation includes a readable explanation logged per customer.",
        },
      },
      {
        norm: "EU AI Act",
        requires: {
          es: "Pricing y suscripción de vida/salud son alto riesgo (Anexo III).",
          en: "Life/health pricing and underwriting are high-risk (Annex III).",
        },
        response: {
          es: "Humano en el bucle, documentación técnica y logging por diseño.",
          en: "Human-in-the-loop, technical documentation and logging by design.",
        },
      },
      {
        norm: "GDPR Art. 22",
        requires: {
          es: "Derecho a no ser sujeto a decisiones únicamente automatizadas.",
          en: "Right not to be subject to solely automated decisions.",
        },
        response: {
          es: "Aprobación humana obligatoria en denegaciones y revisiones de tarificación.",
          en: "Mandatory human approval on denials and pricing reviews.",
        },
      },
    ],
    stats: [
      { value: "-45%", label: { es: "tiempo medio de peritación", en: "average claim handling time" } },
      { value: "100%", label: { es: "decisiones con explicación", en: "decisions with explanation" } },
      { value: "0", label: { es: "datos de salud fuera del perímetro", en: "health data outside the perimeter" } },
    ],
    example: {
      title: { es: "Un siniestro asistido.", en: "An assisted claim." },
      steps: [
        {
          code: "01",
          title: { es: "Recepción", en: "Intake" },
          body: {
            es: "Parte, fotos y póliza entran al appliance interno.",
            en: "Report, photos and policy enter the internal appliance.",
          },
        },
        {
          code: "02",
          title: { es: "Evaluación", en: "Assessment" },
          body: {
            es: "Modelo de daños y verificación de cobertura sobre datos del cliente.",
            en: "Damage model and coverage check over the customer's own data.",
          },
        },
        {
          code: "03",
          title: { es: "Recomendación", en: "Recommendation" },
          body: {
            es: "Importe propuesto con explicación y referencia a la cláusula.",
            en: "Proposed amount with explanation and clause reference.",
          },
        },
        {
          code: "04",
          title: { es: "Validación humana", en: "Human approval" },
          body: {
            es: "Perito firma; el log queda asociado a póliza y siniestro.",
            en: "Adjuster signs off; the log is bound to policy and claim.",
          },
        },
        {
          code: "05",
          title: { es: "Notificación", en: "Notification" },
          body: {
            es: "Asegurado informado con motivación y referencia a la póliza.",
            en: "Insured notified with rationale and policy reference.",
          },
        },
        {
          code: "06",
          title: { es: "Cierre actuarial", en: "Actuarial closure" },
          body: {
            es: "Evento integrado en el modelo interno para el siguiente ORSA.",
            en: "Event fed into the internal model for the next ORSA cycle.",
          },
        },
      ],
    },
    outcomes: [
      { metric: "+30%", label: { es: "NPS en siniestros", en: "claims NPS" } },
      { metric: "-25%", label: { es: "fraude detectado tarde", en: "late-detected fraud" } },
      { metric: "100%", label: { es: "trazabilidad ORSA", en: "ORSA traceability" } },
    ],
    checklist: ["Solvency II", "IDD", "EU AI Act", "GDPR Art. 22"],
    faq: [
      {
        q: { es: "¿Se puede integrar con el sistema de pólizas?", en: "Does it integrate with the policy system?" },
        a: {
          es: "Sí, mediante APIs internas. El dato nunca abandona el perímetro.",
          en: "Yes, via internal APIs. Data never leaves the perimeter.",
        },
      },
    ],
  },

  {
    id: "USE-03",
    slug: "manufacturing",
    tint: "#4A5560",
    sector: { es: "Industria", en: "Manufacturing", it: "Industria", pt: "Indústria" },
    headline: {
      es: "Tu know-how no sube a la nube",
      en: "Your know-how doesn't go to the cloud",
      it: "Il tuo know-how non sale nel cloud",
      pt: "O teu know-how não vai para a nuvem",
    },
    title: {
      es: "Calidad y mantenimiento sobre tu propio dato industrial.",
      en: "Quality and maintenance on your own industrial data.",
      it: "Qualità e manutenzione sui tuoi dati industriali.",
      pt: "Qualidade e manutenção sobre os teus dados industriais.",
    },
    subtitle: {
      es: "Visión, MES y trazabilidad de planta sin enviar IP a la nube de un tercero.",
      en: "Vision, MES and shop-floor traceability without sending IP to a third-party cloud.",
      it: "Visione, MES e tracciabilità di fabbrica senza inviare IP a un cloud terzo.",
      pt: "Visão, MES e rastreabilidade de fábrica sem enviar IP para uma nuvem terceira.",
    },
    chips: ["EU AI Act", "IATF 16949", "ISO 9001", "REACH/RoHS"],
    regRows: [
      {
        norm: "EU AI Act",
        requires: {
          es: "Sistemas de seguridad y control de calidad pueden caer en alto riesgo.",
          en: "Safety and quality control systems may qualify as high-risk.",
        },
        response: {
          es: "Documentación técnica y logs reproducibles; humano en el bucle configurable.",
          en: "Technical documentation and reproducible logs; configurable human-in-the-loop.",
        },
      },
      {
        norm: "IATF 16949",
        requires: {
          es: "Trazabilidad pieza-proveedor-proceso en automoción.",
          en: "Part-supplier-process traceability in automotive.",
        },
        response: {
          es: "Trace ID que vincula inspección visual con lote, máquina y operario.",
          en: "Trace ID linking visual inspection to lot, machine and operator.",
        },
      },
      {
        norm: "ISO 9001",
        requires: {
          es: "Control de no conformidades, acciones correctivas, auditoría.",
          en: "Non-conformance control, corrective actions, audit.",
        },
        response: {
          es: "Detección automática + flujo de acción correctiva con registro firmado.",
          en: "Automatic detection + corrective action flow with signed record.",
        },
      },
      {
        norm: "REACH/RoHS",
        requires: {
          es: "Trazabilidad de sustancias y materiales.",
          en: "Substance and material traceability.",
        },
        response: {
          es: "Linaje de BOM auditable; alertas en alta de materiales restringidos.",
          en: "Auditable BOM lineage; alerts when restricted materials are introduced.",
        },
      },
    ],
    stats: [
      { value: "-35%", label: { es: "tasa de scrap", en: "scrap rate" } },
      { value: "+20%", label: { es: "OEE", en: "OEE" } },
      { value: "0", label: { es: "IP industrial enviada a la nube", en: "industrial IP sent to the cloud" } },
    ],
    example: {
      title: { es: "Inspección visual en línea.", en: "In-line visual inspection." },
      steps: [
        {
          code: "01",
          title: { es: "Captura", en: "Capture" },
          body: {
            es: "Cámaras de planta envían imágenes al appliance en el shopfloor.",
            en: "Shopfloor cameras stream images to the on-premise appliance.",
          },
        },
        {
          code: "02",
          title: { es: "Detección", en: "Detection" },
          body: {
            es: "El modelo identifica defectos y los liga al MES.",
            en: "The model identifies defects and links them to MES.",
          },
        },
        {
          code: "03",
          title: { es: "Acción", en: "Action" },
          body: {
            es: "Pieza rechazada, lote marcado, alerta al operario responsable.",
            en: "Part rejected, lot flagged, alert routed to the responsible operator.",
          },
        },
        {
          code: "04",
          title: { es: "Registro", en: "Record" },
          body: {
            es: "Evento firmado: pieza · lote · máquina · operario · turno.",
            en: "Signed event: part · lot · machine · operator · shift.",
          },
        },
        {
          code: "05",
          title: { es: "Latencia <50ms", en: "Latency <50ms" },
          body: {
            es: "Decisión devuelta al PLC en menos de 50 ms — sin parar la línea.",
            en: "Decision returned to the PLC in under 50 ms — line never stops.",
          },
        },
      ],
    },
    outcomes: [
      { metric: "-50%", label: { es: "paradas no planificadas", en: "unplanned downtime" } },
      { metric: "100%", label: { es: "lotes trazables", en: "traceable lots" } },
      { metric: "+15%", label: { es: "yield", en: "yield" } },
    ],
    checklist: ["EU AI Act", "IATF 16949", "ISO 9001", "REACH/RoHS"],
    faq: [
      {
        q: { es: "¿Funciona offline?", en: "Does it work offline?" },
        a: {
          es: "Sí, el appliance opera sin conexión a internet.",
          en: "Yes, the appliance operates without an internet connection.",
        },
      },
    ],
  },

  {
    id: "USE-04",
    slug: "public-sector",
    tint: "#2A4A7A",
    sector: { es: "Sector público", en: "Public sector", it: "Settore pubblico", pt: "Setor público" },
    headline: {
      es: "IA soberana para lo público",
      en: "Sovereign AI for the public sector",
      it: "IA sovrana per il settore pubblico",
      pt: "IA soberana para o setor público",
    },
    title: {
      es: "Decisiones administrativas asistidas y auditables.",
      en: "Assisted, auditable administrative decisions.",
      it: "Decisioni amministrative assistite e verificabili.",
      pt: "Decisões administrativas assistidas e auditáveis.",
    },
    subtitle: {
      es: "Tramitación, ayudas y atención ciudadana con explicabilidad y rendición de cuentas.",
      en: "Procedures, grants and citizen service with explainability and accountability.",
      it: "Procedure, sussidi e servizio al cittadino con spiegabilità e responsabilità.",
      pt: "Tramitação, apoios e atendimento ao cidadão com explicabilidade e prestação de contas.",
    },
    chips: ["EU AI Act Annex III", "GDPR", "Derecho administrativo", "Tribunal de Cuentas"],
    regRows: [
      {
        norm: "EU AI Act",
        requires: {
          es: "Servicios públicos esenciales son alto riesgo (Anexo III).",
          en: "Essential public services are high-risk (Annex III).",
        },
        response: {
          es: "Documentación, supervisión humana y logging por diseño.",
          en: "Documentation, human oversight and logging by design.",
        },
      },
      {
        norm: "GDPR",
        requires: {
          es: "Base jurídica, minimización del dato, derechos del interesado.",
          en: "Legal basis, data minimization, data subject rights.",
        },
        response: {
          es: "Procesamiento on-prem; el dato del ciudadano no sale del organismo.",
          en: "On-prem processing; citizen data does not leave the agency.",
        },
      },
      {
        norm: "Derecho administrativo",
        requires: {
          es: "Motivación de los actos, contradicción y revisión.",
          en: "Reasoned acts, contradiction and review.",
        },
        response: {
          es: "Cada propuesta lleva motivación legible y queda firmada en la Chain.",
          en: "Every proposal carries a readable rationale, signed in the Chain.",
        },
      },
      {
        norm: "Tribunal de Cuentas",
        requires: {
          es: "Fiscalización del gasto y de los procedimientos.",
          en: "Audit of spending and procedures.",
        },
        response: {
          es: "Logs exportables; reproducibilidad años después.",
          en: "Exportable logs; reproducibility years later.",
        },
      },
    ],
    stats: [
      { value: "-40%", label: { es: "tiempo medio de tramitación", en: "average procedure time" } },
      { value: "100%", label: { es: "actos con motivación trazable", en: "acts with traceable rationale" } },
      { value: "0", label: { es: "datos ciudadanos a terceros", en: "citizen data to third parties" } },
    ],
    example: {
      title: { es: "Una ayuda pública, paso a paso.", en: "A public grant, step by step." },
      steps: [
        {
          code: "01",
          title: { es: "Solicitud", en: "Application" },
          body: {
            es: "Documentación del ciudadano entra al sistema interno.",
            en: "Citizen documentation enters the internal system.",
          },
        },
        {
          code: "02",
          title: { es: "Comprobación", en: "Check" },
          body: {
            es: "El modelo verifica requisitos contra normativa vigente.",
            en: "The model verifies requirements against current regulation.",
          },
        },
        {
          code: "03",
          title: { es: "Propuesta", en: "Proposal" },
          body: {
            es: "Resolución propuesta con motivación y citas legales.",
            en: "Proposed resolution with rationale and legal citations.",
          },
        },
        {
          code: "04",
          title: { es: "Firma", en: "Sign-off" },
          body: {
            es: "El funcionario competente firma; queda evidencia en la Chain.",
            en: "The competent officer signs; evidence is stored in the Chain.",
          },
        },
        {
          code: "05",
          title: { es: "Notificación", en: "Notification" },
          body: {
            es: "Resolución notificada al ciudadano con motivación legible.",
            en: "Resolution notified to the citizen with a readable rationale.",
          },
        },
        {
          code: "06",
          title: { es: "Fiscalización", en: "Audit" },
          body: {
            es: "Trazabilidad disponible para el Tribunal de Cuentas años después.",
            en: "Traceability available to the Court of Auditors years later.",
          },
        },
      ],
    },
    outcomes: [
      { metric: "+50%", label: { es: "expedientes resueltos por FTE", en: "files resolved per FTE" } },
      { metric: "-70%", label: { es: "errores formales", en: "formal errors" } },
      { metric: "100%", label: { es: "fiscalizable", en: "auditable" } },
    ],
    checklist: ["EU AI Act Annex III", "GDPR", "Derecho administrativo", "Tribunal de Cuentas"],
    faq: [
      {
        q: { es: "¿La IA decide por sí sola?", en: "Does the AI decide on its own?" },
        a: {
          es: "No. Propone y motiva; el funcionario competente firma.",
          en: "No. It proposes and justifies; the competent officer signs.",
        },
      },
    ],
  },

  {
    id: "USE-05",
    slug: "healthcare",
    tint: "#3E7D63",
    sector: { es: "Sanidad", en: "Healthcare", it: "Sanità", pt: "Saúde" },
    headline: {
      es: "El dato del paciente no sale del hospital",
      en: "Patient data doesn't leave the hospital",
      it: "Il dato del paziente non lascia l’ospedale",
      pt: "O dado do paciente não sai do hospital",
    },
    title: {
      es: "Triage y soporte clínico sin sacar datos del hospital.",
      en: "Triage and clinical support without leaving the hospital.",
      it: "Triage e supporto clinico senza far uscire i dati dall’ospedale.",
      pt: "Triagem e apoio clínico sem retirar dados do hospital.",
    },
    subtitle: {
      es: "Codificación, decisiones asistidas y documentación con respeto absoluto al dato de salud.",
      en: "Coding, assisted decisions and documentation with full respect for health data.",
      it: "Codifica, decisioni assistite e documentazione nel pieno rispetto del dato sanitario.",
      pt: "Codificação, decisões assistidas e documentação com respeito total pelo dado de saúde.",
    },
    chips: ["GDPR Art. 9", "EU AI Act high-risk", "LOPDGDD", "Joint Commission", "ISO 9001"],
    regRows: [
      {
        norm: "GDPR Art. 9",
        requires: {
          es: "Datos de salud son categoría especial: base jurídica reforzada.",
          en: "Health data is special category: reinforced legal basis.",
        },
        response: {
          es: "Inferencia exclusivamente on-prem dentro del hospital.",
          en: "Inference exclusively on-prem within the hospital.",
        },
      },
      {
        norm: "EU AI Act",
        requires: {
          es: "Diagnóstico y triage son alto riesgo (Anexo III).",
          en: "Diagnosis and triage are high-risk (Annex III).",
        },
        response: {
          es: "Humano en el bucle, documentación y logs firmados.",
          en: "Human-in-the-loop, documentation and signed logs.",
        },
      },
      {
        norm: "LOPDGDD",
        requires: {
          es: "Marco español de protección de datos personales.",
          en: "Spanish personal data protection framework.",
        },
        response: {
          es: "RBAC clínico y trazabilidad de accesos por paciente.",
          en: "Clinical RBAC and per-patient access traceability.",
        },
      },
      {
        norm: "Joint Commission",
        requires: {
          es: "Estándares de calidad y seguridad asistencial.",
          en: "Care quality and safety standards.",
        },
        response: {
          es: "Alertas con cita de guía clínica aplicada.",
          en: "Alerts cite the clinical guideline applied.",
        },
      },
      {
        norm: "ISO 9001",
        requires: {
          es: "Sistema de gestión de calidad.",
          en: "Quality management system.",
        },
        response: {
          es: "Acciones correctivas y mejora continua basadas en logs reales.",
          en: "Corrective actions and continuous improvement based on real logs.",
        },
      },
    ],
    stats: [
      { value: "-30%", label: { es: "tiempo de codificación", en: "coding time" } },
      { value: "100%", label: { es: "datos clínicos en el hospital", en: "clinical data inside the hospital" } },
      { value: "+25%", label: { es: "pacientes atendidos por turno", en: "patients seen per shift" } },
    ],
    example: {
      title: { es: "Triage en urgencias.", en: "Triage in the ER." },
      steps: [
        {
          code: "01",
          title: { es: "Llegada", en: "Arrival" },
          body: {
            es: "Signos vitales y motivo de consulta se integran con la historia clínica.",
            en: "Vitals and chief complaint are merged with the medical record.",
          },
        },
        {
          code: "02",
          title: { es: "Priorización", en: "Prioritization" },
          body: {
            es: "El modelo propone nivel de triage con citas de la guía aplicada.",
            en: "The model proposes a triage level with citations from the guideline.",
          },
        },
        {
          code: "03",
          title: { es: "Decisión clínica", en: "Clinical decision" },
          body: {
            es: "Enfermería confirma o ajusta; la decisión se documenta.",
            en: "Nursing confirms or adjusts; the decision is documented.",
          },
        },
        {
          code: "04",
          title: { es: "Trazabilidad", en: "Traceability" },
          body: {
            es: "Evento firmado y asociado a paciente, profesional y guía.",
            en: "Signed event tied to patient, professional and guideline.",
          },
        },
        {
          code: "05",
          title: { es: "Documentación", en: "Documentation" },
          body: {
            es: "Nota clínica autogenerada para revisión; el profesional valida y firma.",
            en: "Clinical note auto-drafted for review; the professional validates and signs.",
          },
        },
      ],
    },
    outcomes: [
      { metric: "-20%", label: { es: "tiempo en sala de espera", en: "waiting room time" } },
      { metric: "100%", label: { es: "decisiones documentadas", en: "documented decisions" } },
      { metric: "0", label: { es: "PHI a terceros", en: "PHI to third parties" } },
    ],
    checklist: ["GDPR Art. 9", "EU AI Act high-risk", "LOPDGDD", "Joint Commission", "ISO 9001"],
    faq: [
      {
        q: { es: "¿Sustituye al criterio clínico?", en: "Does it replace clinical judgment?" },
        a: {
          es: "No. Asiste y documenta; el profesional decide y firma.",
          en: "No. It assists and documents; the professional decides and signs.",
        },
      },
    ],
  },
];

export const useCasesBySlug: Record<string, UseCase> = Object.fromEntries(
  useCases.map((u) => [u.slug, u]),
);