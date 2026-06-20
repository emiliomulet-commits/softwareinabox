import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useLocale } from "@/i18n/useLocale";
import type { Locale } from "@/i18n/config";
import i18n from "@/i18n/config";
import { hreflangLinks } from "@/i18n/seo";
import { useLocalizedMeta } from "@/i18n/useLocalizedMeta";

export const Route = createFileRoute("/resources/hardware")({
  head: () => ({
    meta: [
      { title: i18n.t("seo.hardware.title") as string },
      { name: "description", content: i18n.t("seo.hardware.description") as string },
      { property: "og:title", content: i18n.t("seo.hardware.ogTitle") as string },
      { property: "og:description", content: i18n.t("seo.hardware.ogDescription") as string },
      { property: "og:url", content: "/resources/hardware" },
    ],
    links: [
      { rel: "canonical", href: "/resources/hardware" },
      ...hreflangLinks("/resources/hardware"),
    ],
  }),
  component: HardwarePage,
});

type Vendor = "dell" | "lenovo" | "hpe" | "xfusion";

type ModelCard = {
  name: string;
  tagline: string;
  specs: { label: string; value: string }[];
};

type Content = {
  breadcrumb: { home: string; resources: string; hardware: string };
  hero: { eyebrow: string; title: string; subtitle: string };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
    stats: string[];
  };
  vendorSection: { eyebrow: string };
  vendorMeta: Record<Vendor, { label: string; family: string; intro: string }>;
  models: Record<Vendor, ModelCard[]>;
  table: {
    eyebrow: string;
    title: string;
    headers: [string, string, string, string, string, string, string];
    rows: [string, string, string, string, string, string, string][];
  };
  useCases: {
    eyebrow: string;
    title: string;
    items: { code: string; title: string; desc: string; chips: string[] }[];
  };
  cta: { title: string; body: string; button: string };
};

const VENDOR_LABELS: Record<Vendor, string> = {
  dell: "DELL",
  lenovo: "LENOVO",
  hpe: "HPE",
  xfusion: "XFUSION",
};

const VENDOR_FAMILIES: Record<Vendor, string> = {
  dell: "PowerEdge XR-Series",
  lenovo: "ThinkEdge",
  hpe: "ProLiant Edge & Edgeline",
  xfusion: "FusionXpark & FusionServer",
};

const PLACEHOLD = (text: string) =>
  `https://placehold.co/800x450/102540/B8893E?text=${encodeURIComponent(text).replace(/%20/g, "+")}`;
const LOCAL_IMG = (slug: string) => `/images/hardware/${slug}.jpg`;

// Keyed by the exact ModelCard.name (brand strings are identical across locales).
const MODEL_IMAGES: Record<string, { src: string; fallback: string }> = {
  // Dell
  "Dell PowerEdge XR4000": { src: PLACEHOLD("Dell PowerEdge XR4000"), fallback: LOCAL_IMG("dell-poweredge-xr4000") },
  "Dell PowerEdge XR5610": { src: PLACEHOLD("Dell PowerEdge XR5610"), fallback: LOCAL_IMG("dell-poweredge-xr5610") },
  "Dell PowerEdge XR7620": { src: PLACEHOLD("Dell PowerEdge XR7620"), fallback: LOCAL_IMG("dell-poweredge-xr7620") },
  "Dell PowerEdge XR8000": { src: PLACEHOLD("Dell PowerEdge XR8000"), fallback: LOCAL_IMG("dell-poweredge-xr8000") },
  "Dell PowerEdge XR9700": { src: PLACEHOLD("Dell PowerEdge XR9700"), fallback: LOCAL_IMG("dell-poweredge-xr9700") },
  // Lenovo
  "Lenovo ThinkEdge SE100": { src: PLACEHOLD("Lenovo ThinkEdge SE100"), fallback: LOCAL_IMG("lenovo-thinkedge-se100") },
  "Lenovo ThinkEdge SE350 V2": { src: PLACEHOLD("Lenovo ThinkEdge SE350 V2"), fallback: LOCAL_IMG("lenovo-thinkedge-se350-v2") },
  "Lenovo ThinkEdge SE360 V2": { src: PLACEHOLD("Lenovo ThinkEdge SE360 V2"), fallback: LOCAL_IMG("lenovo-thinkedge-se360-v2") },
  "Lenovo ThinkEdge SE450": { src: PLACEHOLD("Lenovo ThinkEdge SE450"), fallback: LOCAL_IMG("lenovo-thinkedge-se450") },
  "Lenovo ThinkEdge SE455 V3 / SE455i V3": { src: PLACEHOLD("Lenovo ThinkEdge SE455 V3"), fallback: LOCAL_IMG("lenovo-thinkedge-se455-v3") },
  // HPE
  "HPE ProLiant DL145 Gen11": { src: PLACEHOLD("HPE ProLiant DL145 Gen11"), fallback: LOCAL_IMG("hpe-proliant-dl145-gen11") },
  "HPE Edgeline EL8000 / EL8000t": { src: PLACEHOLD("HPE Edgeline EL8000"), fallback: LOCAL_IMG("hpe-edgeline-el8000") },
  "HPE Compute Edge Server e930t": { src: PLACEHOLD("HPE Compute Edge e930t"), fallback: LOCAL_IMG("hpe-compute-edge-e930t") },
  "HPE Compute Edge Server e920d": { src: PLACEHOLD("HPE Compute Edge e920d"), fallback: LOCAL_IMG("hpe-compute-edge-e920d") },
  // xFusion
  "xFusion FusionXpark GB10": { src: PLACEHOLD("xFusion FusionXpark GB10"), fallback: LOCAL_IMG("xfusion-fusionxpark-gb10") },
  "xFusion FusionServer 1288 V8": { src: PLACEHOLD("xFusion FusionServer 1288 V8"), fallback: LOCAL_IMG("xfusion-fusionserver-1288-v8") },
  "xFusion FusionServer 2288 V8": { src: PLACEHOLD("xFusion FusionServer 2288 V8"), fallback: LOCAL_IMG("xfusion-fusionserver-2288-v8") },
  "xFusion FusionServer G5500 V7": { src: PLACEHOLD("xFusion FusionServer G5500 V7"), fallback: LOCAL_IMG("xfusion-fusionserver-g5500-v7") },
  "xFusion FusionXtation X3": { src: PLACEHOLD("xFusion FusionXtation X3"), fallback: LOCAL_IMG("xfusion-fusionxtation-x3") },
};

const VENDOR_FALLBACK: Record<Vendor, { src: string; fallback: string }> = {
  dell: { src: PLACEHOLD("Dell PowerEdge"), fallback: PLACEHOLD("Dell PowerEdge") },
  lenovo: { src: PLACEHOLD("Lenovo ThinkEdge"), fallback: PLACEHOLD("Lenovo ThinkEdge") },
  hpe: { src: PLACEHOLD("HPE ProLiant"), fallback: PLACEHOLD("HPE ProLiant") },
  xfusion: { src: PLACEHOLD("xFusion Server"), fallback: PLACEHOLD("xFusion Server") },
};

// ============= Spanish (base) =============
const ES: Content = {
  breadcrumb: { home: "Home", resources: "Recursos", hardware: "Hardware" },
  hero: {
    eyebrow: "§ HARDWARE · CATÁLOGO TÉCNICO",
    title: "Servidores AI Edge Computing",
    subtitle: "Catálogo técnico comparado de los appliances certificados para Cognitive Server — Dell · Lenovo · HPE · xFusion.",
  },
  intro: {
    eyebrow: "QUÉ ES UN SERVIDOR AI EDGE",
    title: "Computación en el extremo con aceleración de IA",
    body: "Los servidores de AI edge computing trasladan el procesamiento al lugar donde se generan los datos: plantas industriales, tiendas, torres 5G, hospitales o ubicaciones remotas. Reducen latencia, minimizan el tráfico hacia el cloud y mantienen la soberanía del dato. Incorporan aceleración GPU, NPU o superchips dedicados para inferencia on-premise.",
    stats: ["4 fabricantes certificados", "20+ modelos disponibles", "Operación 100% on-premise"],
  },
  vendorSection: { eyebrow: "CATÁLOGO POR FABRICANTE" },
  vendorMeta: {
    dell: { label: "DELL", family: "PowerEdge XR-Series", intro: "La cartera más amplia de servidores edge ruggerizados de profundidad reducida, desde el modular XR4000 hasta la aceleración densa XR7620 y la plataforma RAN XR8000." },
    lenovo: { label: "LENOVO", family: "ThinkEdge", intro: "Gama muy completa orientada a IA, desde el ultracompacto SE100 con NPU integrada hasta el SE455 V3 con AMD EPYC «Siena» y hasta 6 GPU L4 como buque insignia de inferencia." },
    hpe: { label: "HPE", family: "ProLiant Edge & Edgeline", intro: "Dos familias complementarias: ProLiant para cargas estándar en el edge y Edgeline para entornos industriales con tolerancia extendida a temperatura y vibración." },
    xfusion: { label: "XFUSION", family: "FusionXpark & FusionServer", intro: "Apuesta diferenciada de xFusion (filial de Huawei): IA portátil con el superchip FusionXpark GB10 (1 PFLOP FP4), servidores near-edge 1288/2288 V8 y la serie G de centros de datos de IA." },
  },
  models: {
    dell: [
      { name: "Dell PowerEdge XR4000", tagline: "Plataforma modular sled-based de profundidad mínima", specs: [
        { label: "Formato", value: "2U, profundidad ultrareducida (≈356 mm)" },
        { label: "CPU", value: "Intel Xeon D-2700 (hasta 20 núcleos/sled)" },
        { label: "Memoria", value: "Hasta 256 GB RDIMM / 512 GB LRDIMM por sled" },
        { label: "GPU", value: "Hasta 2× GPU SW 150 W o 1× GPU DW 250 W" },
        { label: "Red", value: "4× 10GbE / 4× 25GbE SFP; OCP 3.0" },
        { label: "Gestión", value: "iDRAC9 + Dell NativeEdge" },
        { label: "Caso de uso", value: "Retail, telecomunicaciones, far-edge modular" },
      ]},
      { name: "Dell PowerEdge XR5610", tagline: "1U rugged de perfil bajo para despliegues 5G MEC", specs: [
        { label: "Formato", value: "1U, profundidad reducida" },
        { label: "CPU", value: "Intel Xeon D-2700 serie (hasta 20 núcleos)" },
        { label: "Memoria", value: "Hasta 512 GB DDR5" },
        { label: "GPU", value: "Hasta 1× GPU PCIe de un solo ancho" },
        { label: "Red", value: "2× 25GbE + OCP 3.0; opciones SmartNIC" },
        { label: "Gestión", value: "iDRAC9 + OpenManage" },
        { label: "Caso de uso", value: "5G MEC, far-edge telco, retail" },
      ]},
      { name: "Dell PowerEdge XR7620", tagline: "2U de doble socket con hasta 2 GPU de alto rendimiento", specs: [
        { label: "Formato", value: "2U, profundidad reducida rugged" },
        { label: "CPU", value: "2× Intel Xeon Scalable 4ª gen. (hasta 300 W TDP)" },
        { label: "Memoria", value: "Hasta 4 TB DDR5" },
        { label: "GPU", value: "Hasta 2× GPU DW 300 W (H100/A100 PCIe)" },
        { label: "Red", value: "4× 25GbE / opciones 100GbE; OCP 3.0" },
        { label: "Gestión", value: "iDRAC9 con LC; NativeEdge" },
        { label: "Caso de uso", value: "Inferencia densa, visión artificial, industria 4.0" },
      ]},
      { name: "Dell PowerEdge XR8000", tagline: "Plataforma modular para Cloud RAN y vRAN", specs: [
        { label: "Formato", value: "Modular, profundidad ultrareducida" },
        { label: "CPU", value: "Intel Xeon D o ARM Ampere (según configuración)" },
        { label: "Aceleración", value: "FPGAs Intel/Xilinx para L1 vRAN" },
        { label: "Red", value: "Interfaces fronthaul de alta densidad" },
        { label: "Gestión", value: "iDRAC9 + NativeEdge + OpenRAN compatible" },
        { label: "Caso de uso", value: "5G vRAN, Cloud RAN, telco far-edge" },
      ]},
      { name: "Dell PowerEdge XR9700", tagline: "El servidor edge más potente de la gama XR", specs: [
        { label: "Formato", value: "2U rugged" },
        { label: "CPU", value: "Hasta 2× Intel Xeon Scalable 5ª gen. (Emerald Rapids)" },
        { label: "Memoria", value: "Hasta 8 TB DDR5" },
        { label: "GPU", value: "Hasta 4× GPU PCIe de alto rendimiento" },
        { label: "Red", value: "Hasta 400GbE; OCP 3.0" },
        { label: "Gestión", value: "iDRAC9 + NativeEdge" },
        { label: "Caso de uso", value: "HPC en el edge, IA generativa on-premise, agregación" },
      ]},
    ],
    lenovo: [
      { name: "Lenovo ThinkEdge SE100", tagline: "Ultracompacto con NPU integrada para inferencia ligera", specs: [
        { label: "Formato", value: "Mini/desktop, sin ventilador (fanless opcional)" },
        { label: "CPU", value: "Intel Core Ultra con NPU integrada (AI Boost)" },
        { label: "Memoria", value: "Hasta 64 GB DDR5" },
        { label: "Almacenamiento", value: "SSD NVMe M.2" },
        { label: "Red", value: "2× 2.5GbE + Wi-Fi 6E opcional" },
        { label: "Gestión", value: "Lenovo XClarity + ThinkShield" },
        { label: "Caso de uso", value: "Retail POS, oficina, IoT gateway" },
      ]},
      { name: "Lenovo ThinkEdge SE350 V2", tagline: "1U rugged corto para entornos sin CPD", specs: [
        { label: "Formato", value: "1U, profundidad 295 mm" },
        { label: "CPU", value: "Intel Xeon D-2700 (hasta 20 núcleos)" },
        { label: "Memoria", value: "Hasta 256 GB DDR4" },
        { label: "GPU", value: "Hasta 1× GPU PCIe de un solo ancho" },
        { label: "Red", value: "4× 1GbE / 2× 25GbE; OCP 2.0" },
        { label: "Gestión", value: "XClarity Controller 2 (XCC2)" },
        { label: "Caso de uso", value: "Far-edge ruggerizado, telecomunicaciones, manufactura" },
      ]},
      { name: "Lenovo ThinkEdge SE360 V2", tagline: "2U ultra-silencioso para entornos de usuario", specs: [
        { label: "Formato", value: "2U, profundidad reducida" },
        { label: "CPU", value: "Intel Xeon D-2700 serie" },
        { label: "Memoria", value: "Hasta 256 GB DDR4 ECC" },
        { label: "GPU", value: "Hasta 1× GPU PCIe SW" },
        { label: "Red", value: "4× 1GbE; opciones 25GbE" },
        { label: "Gestión", value: "XCC2 + XClarity Administrator" },
        { label: "Caso de uso", value: "Oficinas, retail, entornos sin personal TI" },
      ]},
      { name: "Lenovo ThinkEdge SE450", tagline: "1U con GPU para inferencia de IA en el edge", specs: [
        { label: "Formato", value: "1U, profundidad media" },
        { label: "CPU", value: "Intel Xeon Scalable 3ª gen. (Ice Lake)" },
        { label: "Memoria", value: "Hasta 1 TB DDR4" },
        { label: "GPU", value: "Hasta 3× GPU PCIe de un solo ancho (A2/L4)" },
        { label: "Red", value: "2× 25GbE + OCP 3.0" },
        { label: "Gestión", value: "XCC2 + XClarity" },
        { label: "Caso de uso", value: "Inferencia IA, visión artificial, NLP" },
      ]},
      { name: "Lenovo ThinkEdge SE455 V3 / SE455i V3", tagline: "El más potente de ThinkEdge — AMD EPYC «Siena» hasta 6 GPU", specs: [
        { label: "Formato", value: "1U, profundidad completa" },
        { label: "CPU", value: "AMD EPYC 9004 «Siena» (hasta 64 núcleos)" },
        { label: "Memoria", value: "Hasta 3 TB DDR5" },
        { label: "GPU", value: "Hasta 6× GPU PCIe SW (L4) o 2× DW (A100/H100)" },
        { label: "Red", value: "2× 100GbE; OCP 3.0" },
        { label: "Gestión", value: "XCC2 + XClarity Administrator" },
        { label: "Caso de uso", value: "Inferencia densa, LLM on-premise, HPC edge" },
      ]},
    ],
    hpe: [
      { name: "HPE ProLiant DL145 Gen11", tagline: "1U AMD EPYC de bajo consumo para edge denso", specs: [
        { label: "Formato", value: "1U, factor rack estándar" },
        { label: "CPU", value: "AMD EPYC 9004 «Genoa» (hasta 96 núcleos)" },
        { label: "Memoria", value: "Hasta 1.5 TB DDR5 (12× DIMM)" },
        { label: "GPU", value: "Hasta 3× GPU PCIe de un solo ancho (75 W)" },
        { label: "Red", value: "2× 10GbE Base-T + 2× 10/25GbE SFP28" },
        { label: "Gestión", value: "HPE iLO 6" },
        { label: "Caso de uso", value: "Near-edge, consolidación de carga, telco NFV" },
      ]},
      { name: "HPE Edgeline EL8000 / EL8000t", tagline: "Plataforma industrial convergente para far-edge y telco con soporte GPU y FPGA", specs: [
        { label: "Formato", value: "Modular 4U (hasta 8 cartuchos de cómputo)" },
        { label: "CPU", value: "Intel Xeon Scalable (por cartucho)" },
        { label: "Aceleración", value: "GPU PCIe + FPGA (SmartNIC/DPU)" },
        { label: "Temperatura", value: "-5 °C a +55 °C (ext. opcional)" },
        { label: "Red", value: "Fronthaul de alta densidad; RAN compatible" },
        { label: "Gestión", value: "HPE OneView + iLO 5" },
        { label: "Caso de uso", value: "Industrial, 5G MEC, planta ruggerizada" },
      ]},
      { name: "HPE Compute Edge Server e930t", tagline: "Servidor compacto rugged para telecomunicaciones y 5G", specs: [
        { label: "Formato", value: "1U rugged, profundidad reducida" },
        { label: "CPU", value: "Intel Xeon D serie" },
        { label: "Memoria", value: "Hasta 256 GB DDR4" },
        { label: "GPU", value: "Hasta 1× GPU PCIe SW" },
        { label: "Red", value: "Múltiples interfaces de alta velocidad" },
        { label: "Gestión", value: "iLO 5" },
        { label: "Caso de uso", value: "Telco far-edge, vRAN" },
      ]},
      { name: "HPE Compute Edge Server e920d", tagline: "Versión desktop de la plataforma e9-series para despliegues distribuidos", specs: [
        { label: "Formato", value: "Desktop / rack compacto" },
        { label: "CPU", value: "Intel Xeon D serie" },
        { label: "Memoria", value: "Hasta 128 GB DDR4" },
        { label: "Red", value: "4× 1GbE / 2× 10GbE" },
        { label: "Gestión", value: "iLO 5 + HPE GreenLake edge management" },
        { label: "Caso de uso", value: "Retail, sucursales, edge distribuido" },
      ]},
    ],
    xfusion: [
      { name: "xFusion FusionXpark GB10", tagline: "Superchip de IA portátil — 1 PFLOP FP4 en formato mini", specs: [
        { label: "Formato", value: "Mini-PC / desktop ultracompacto" },
        { label: "SoC", value: "NVIDIA Grace Blackwell GB10 (72× Arm Neoverse V2 + GPU Blackwell)" },
        { label: "Rendimiento", value: "1 PFLOP FP4 / 200 TOPS INT8" },
        { label: "Memoria", value: "128 GB LPDDR5X unificada (CPU+GPU)" },
        { label: "Almacenamiento", value: "SSD NVMe M.2 interno" },
        { label: "Red", value: "2× 10GbE + Wi-Fi 6E" },
        { label: "Caso de uso", value: "Desarrollo IA on-device, inferencia LLM local, edge IA autónomo" },
      ]},
      { name: "xFusion FusionServer 1288 V8", tagline: "1U near-edge de alto rendimiento con Intel Xeon 6", specs: [
        { label: "Formato", value: "1U rack estándar" },
        { label: "CPU", value: "Intel Xeon 6 (P-core o E-core, hasta 128 núcleos)" },
        { label: "Memoria", value: "Hasta 2 TB DDR5" },
        { label: "GPU", value: "Hasta 3× GPU PCIe de un solo ancho" },
        { label: "Red", value: "2× 25GbE + OCP 3.0; opciones 100GbE" },
        { label: "Gestión", value: "iBMC + xFusion Management Platform" },
        { label: "Caso de uso", value: "Near-edge IA, consolidación, NFV" },
      ]},
      { name: "xFusion FusionServer 2288 V8", tagline: "2U near-edge de doble socket para cargas densas", specs: [
        { label: "Formato", value: "2U rack estándar" },
        { label: "CPU", value: "2× Intel Xeon 6 (hasta 256 núcleos totales)" },
        { label: "Memoria", value: "Hasta 8 TB DDR5" },
        { label: "GPU", value: "Hasta 6× GPU PCIe SW o 4× GPU DW" },
        { label: "PCIe", value: "Hasta 6× PCIe Gen5" },
        { label: "Red", value: "4× 25GbE / opciones 100GbE; OCP 3.0" },
        { label: "Gestión", value: "iBMC + xFusion Management Platform" },
        { label: "Caso de uso", value: "Inferencia densa, fine-tuning, HPC near-edge" },
      ]},
      { name: "xFusion FusionServer G5500 V7", tagline: "Servidor de IA de alta densidad GPU para CPD near-edge", specs: [
        { label: "Formato", value: "4U, alta densidad" },
        { label: "CPU", value: "2× Intel Xeon Scalable" },
        { label: "GPU", value: "Hasta 8× GPU PCIe de doble ancho (H100/A100)" },
        { label: "Memoria", value: "Hasta 4 TB DDR5 + memoria HBM GPU" },
        { label: "Red", value: "InfiniBand / 400GbE para clústeres" },
        { label: "Gestión", value: "iBMC + plataforma de gestión centralizada" },
        { label: "Caso de uso", value: "LLM training/fine-tuning near-edge, IA centralizada de planta" },
      ]},
      { name: "xFusion FusionXtation X3", tagline: "Workstation de IA para edge creativo e industrial", specs: [
        { label: "Formato", value: "Workstation torre" },
        { label: "CPU", value: "Intel Xeon W o AMD Threadripper PRO" },
        { label: "GPU", value: "Hasta 2× GPU profesional (RTX / A-series)" },
        { label: "Memoria", value: "Hasta 512 GB DDR5" },
        { label: "Red", value: "2× 10GbE + Thunderbolt" },
        { label: "Gestión", value: "Gestión local + integración xFusion Platform" },
        { label: "Caso de uso", value: "Diseño IA, simulación, edge creativo industrial" },
      ]},
    ],
  },
  table: {
    eyebrow: "COMPARATIVA TRANSVERSAL",
    title: "Los 20 modelos en una vista",
    headers: ["Fabricante", "Modelo", "Formato", "CPU", "Memoria máx.", "GPU máx.", "Caso de uso principal"],
    rows: [
      ["Dell", "XR4000", "2U modular", "Xeon D-2700", "512 GB", "2× GPU SW 150W", "Far-edge modular"],
      ["Dell", "XR5610", "1U rugged", "Xeon D-2700", "512 GB", "1× GPU SW", "5G MEC, telco"],
      ["Dell", "XR7620", "2U rugged", "2× Xeon Scalable", "4 TB", "2× GPU DW 300W", "IA densa, industria"],
      ["Dell", "XR8000", "Modular", "Xeon D / ARM", "—", "FPGA L1", "vRAN, Cloud RAN"],
      ["Dell", "XR9700", "2U rugged", "2× Xeon 5ª gen", "8 TB", "4× GPU PCIe", "HPC edge, IA gen."],
      ["Lenovo", "SE100", "Mini/desktop", "Core Ultra NPU", "64 GB", "NPU integrada", "Retail, IoT"],
      ["Lenovo", "SE350 V2", "1U rugged", "Xeon D-2700", "256 GB", "1× GPU SW", "Far-edge, manufactura"],
      ["Lenovo", "SE360 V2", "2U silencioso", "Xeon D-2700", "256 GB", "1× GPU SW", "Oficina, retail"],
      ["Lenovo", "SE450", "1U", "Xeon Scalable", "1 TB", "3× GPU SW (L4)", "Inferencia IA"],
      ["Lenovo", "SE455 V3", "1U", "AMD EPYC Siena", "3 TB", "6× GPU SW / 2× DW", "LLM on-premise"],
      ["HPE", "DL145 Gen11", "1U", "AMD EPYC Genoa", "1.5 TB", "3× GPU SW 75W", "Near-edge, NFV"],
      ["HPE", "EL8000", "4U modular", "Xeon Scalable", "variable", "GPU + FPGA", "Industrial, 5G MEC"],
      ["HPE", "e930t", "1U rugged", "Xeon D", "256 GB", "1× GPU SW", "Telco far-edge, vRAN"],
      ["HPE", "e920d", "Desktop", "Xeon D", "128 GB", "—", "Retail, sucursales"],
      ["xFusion", "GB10", "Mini-PC", "NVIDIA GB10 SoC", "128 GB", "1 PFLOP FP4", "IA on-device, LLM local"],
      ["xFusion", "1288 V8", "1U", "Intel Xeon 6", "2 TB", "3× GPU SW", "Near-edge, NFV"],
      ["xFusion", "2288 V8", "2U", "2× Intel Xeon 6", "8 TB", "6× GPU SW / 4× DW", "IA densa, HPC"],
      ["xFusion", "G5500 V7", "4U", "2× Xeon Scalable", "4 TB", "8× GPU DW", "LLM training near-edge"],
      ["xFusion", "G5200 V7", "2U", "2× Xeon Scalable", "2 TB", "4× GPU SW", "Inferencia, NLP"],
      ["xFusion", "XtationX3", "Torre", "Xeon W / TR PRO", "512 GB", "2× GPU pro", "Edge creativo"],
    ],
  },
  useCases: {
    eyebrow: "GUÍA DE SELECCIÓN",
    title: "El appliance adecuado para cada despliegue",
    items: [
      { code: "UC1", title: "Inferencia de IA de bajo consumo (tienda / oficina)", desc: "Procesamiento local sin infraestructura CPD. Consumo <100W. Sin ventilador opcional.", chips: ["ThinkEdge SE100", "PowerEdge XR5610", "HPE e920d", "FusionXpark GB10"] },
      { code: "UC2", title: "Aceleración densa de IA (planta industrial / agregación)", desc: "Cargas de GPU intensivas. Temperatura extendida. Alta disponibilidad.", chips: ["ThinkEdge SE455 V3", "PowerEdge XR7620", "FusionServer 2288 V8", "HPE EL8000"] },
      { code: "UC3", title: "Telecomunicaciones, 5G vRAN y far-edge", desc: "Perfil corto, ruggerizado, fronthaul de alta densidad. OpenRAN compatible.", chips: ["PowerEdge XR8000", "PowerEdge XR5610", "HPE e930t", "ThinkEdge SE350 V2"] },
      { code: "UC4", title: "Desarrollo y despliegue de agentes IA on-device", desc: "LLM local, fine-tuning ligero, prototipado rápido. Sin dependencia cloud.", chips: ["FusionXpark GB10", "ThinkEdge SE455 V3", "PowerEdge XR9700"] },
      { code: "UC5", title: "HPC near-edge y IA generativa on-premise", desc: "Alta densidad GPU, InfiniBand/400GbE, clústeres de inferencia / fine-tuning.", chips: ["FusionServer G5500 V7", "PowerEdge XR9700", "ThinkEdge SE455 V3"] },
    ],
  },
  cta: {
    title: "¿Necesitas ayuda para elegir el appliance?",
    body: "Nuestro equipo de ingeniería te ayuda a seleccionar, dimensionar y certificar el hardware adecuado para tu despliegue de Cognitive Server.",
    button: "Hablar con ingeniería →",
  },
};

// ============= English =============
const EN: Content = {
  breadcrumb: { home: "Home", resources: "Resources", hardware: "Hardware" },
  hero: {
    eyebrow: "§ HARDWARE · TECHNICAL CATALOG",
    title: "AI Edge Computing Servers",
    subtitle: "Comparative technical catalog of certified appliances for Cognitive Server — Dell · Lenovo · HPE · xFusion.",
  },
  intro: {
    eyebrow: "WHAT IS AN AI EDGE SERVER",
    title: "Computing at the edge with AI acceleration",
    body: "AI edge computing servers move processing to where data is generated: industrial plants, retail stores, 5G towers, hospitals or remote sites. They cut latency, minimise cloud traffic and preserve data sovereignty. They embed GPU, NPU or dedicated superchip acceleration for on-premise inference.",
    stats: ["4 certified vendors", "20+ available models", "100% on-premise operation"],
  },
  vendorSection: { eyebrow: "CATALOG BY VENDOR" },
  vendorMeta: {
    dell: { label: "DELL", family: "PowerEdge XR-Series", intro: "The broadest portfolio of short-depth ruggedized edge servers, from the modular XR4000 to the dense XR7620 and the XR8000 RAN platform." },
    lenovo: { label: "LENOVO", family: "ThinkEdge", intro: "A wide AI-oriented range, from the ultra-compact SE100 with integrated NPU to the SE455 V3 with AMD EPYC «Siena» and up to 6 L4 GPUs as the inference flagship." },
    hpe: { label: "HPE", family: "ProLiant Edge & Edgeline", intro: "Two complementary families: ProLiant for standard edge workloads and Edgeline for industrial environments with extended temperature and vibration tolerance." },
    xfusion: { label: "XFUSION", family: "FusionXpark & FusionServer", intro: "xFusion (Huawei subsidiary) differentiated bet: portable AI with the FusionXpark GB10 superchip (1 PFLOP FP4), 1288/2288 V8 near-edge servers and the G-series AI datacenter line." },
  },
  models: {
    dell: [
      { name: "Dell PowerEdge XR4000", tagline: "Sled-based modular platform with minimum depth", specs: [
        { label: "Form factor", value: "2U, ultra-short depth (~356 mm)" },
        { label: "CPU", value: "Intel Xeon D-2700 (up to 20 cores/sled)" },
        { label: "Memory", value: "Up to 256 GB RDIMM / 512 GB LRDIMM per sled" },
        { label: "GPU", value: "Up to 2× SW 150 W GPU or 1× DW 250 W GPU" },
        { label: "Network", value: "4× 10GbE / 4× 25GbE SFP; OCP 3.0" },
        { label: "Management", value: "iDRAC9 + Dell NativeEdge" },
        { label: "Use case", value: "Retail, telco, modular far-edge" },
      ]},
      { name: "Dell PowerEdge XR5610", tagline: "Low-profile 1U rugged for 5G MEC deployments", specs: [
        { label: "Form factor", value: "1U, short depth" },
        { label: "CPU", value: "Intel Xeon D-2700 series (up to 20 cores)" },
        { label: "Memory", value: "Up to 512 GB DDR5" },
        { label: "GPU", value: "Up to 1× single-width PCIe GPU" },
        { label: "Network", value: "2× 25GbE + OCP 3.0; SmartNIC options" },
        { label: "Management", value: "iDRAC9 + OpenManage" },
        { label: "Use case", value: "5G MEC, far-edge telco, retail" },
      ]},
      { name: "Dell PowerEdge XR7620", tagline: "Dual-socket 2U with up to 2 high-performance GPUs", specs: [
        { label: "Form factor", value: "2U, rugged short depth" },
        { label: "CPU", value: "2× Intel Xeon Scalable 4th gen (up to 300 W TDP)" },
        { label: "Memory", value: "Up to 4 TB DDR5" },
        { label: "GPU", value: "Up to 2× DW 300 W GPU (H100/A100 PCIe)" },
        { label: "Network", value: "4× 25GbE / 100GbE options; OCP 3.0" },
        { label: "Management", value: "iDRAC9 with LC; NativeEdge" },
        { label: "Use case", value: "Dense inference, machine vision, industry 4.0" },
      ]},
      { name: "Dell PowerEdge XR8000", tagline: "Modular platform for Cloud RAN and vRAN", specs: [
        { label: "Form factor", value: "Modular, ultra-short depth" },
        { label: "CPU", value: "Intel Xeon D or ARM Ampere (configuration dependent)" },
        { label: "Acceleration", value: "Intel/Xilinx FPGAs for L1 vRAN" },
        { label: "Network", value: "High-density fronthaul interfaces" },
        { label: "Management", value: "iDRAC9 + NativeEdge + OpenRAN compatible" },
        { label: "Use case", value: "5G vRAN, Cloud RAN, telco far-edge" },
      ]},
      { name: "Dell PowerEdge XR9700", tagline: "The most powerful edge server in the XR range", specs: [
        { label: "Form factor", value: "2U rugged" },
        { label: "CPU", value: "Up to 2× Intel Xeon Scalable 5th gen (Emerald Rapids)" },
        { label: "Memory", value: "Up to 8 TB DDR5" },
        { label: "GPU", value: "Up to 4× high-performance PCIe GPU" },
        { label: "Network", value: "Up to 400GbE; OCP 3.0" },
        { label: "Management", value: "iDRAC9 + NativeEdge" },
        { label: "Use case", value: "Edge HPC, on-premise generative AI, aggregation" },
      ]},
    ],
    lenovo: [
      { name: "Lenovo ThinkEdge SE100", tagline: "Ultra-compact with integrated NPU for light inference", specs: [
        { label: "Form factor", value: "Mini/desktop, fanless option" },
        { label: "CPU", value: "Intel Core Ultra with integrated NPU (AI Boost)" },
        { label: "Memory", value: "Up to 64 GB DDR5" },
        { label: "Storage", value: "M.2 NVMe SSD" },
        { label: "Network", value: "2× 2.5GbE + optional Wi-Fi 6E" },
        { label: "Management", value: "Lenovo XClarity + ThinkShield" },
        { label: "Use case", value: "Retail POS, office, IoT gateway" },
      ]},
      { name: "Lenovo ThinkEdge SE350 V2", tagline: "Short 1U rugged for non-datacenter environments", specs: [
        { label: "Form factor", value: "1U, 295 mm depth" },
        { label: "CPU", value: "Intel Xeon D-2700 (up to 20 cores)" },
        { label: "Memory", value: "Up to 256 GB DDR4" },
        { label: "GPU", value: "Up to 1× single-width PCIe GPU" },
        { label: "Network", value: "4× 1GbE / 2× 25GbE; OCP 2.0" },
        { label: "Management", value: "XClarity Controller 2 (XCC2)" },
        { label: "Use case", value: "Ruggedized far-edge, telco, manufacturing" },
      ]},
      { name: "Lenovo ThinkEdge SE360 V2", tagline: "Ultra-silent 2U for user environments", specs: [
        { label: "Form factor", value: "2U, short depth" },
        { label: "CPU", value: "Intel Xeon D-2700 series" },
        { label: "Memory", value: "Up to 256 GB DDR4 ECC" },
        { label: "GPU", value: "Up to 1× SW PCIe GPU" },
        { label: "Network", value: "4× 1GbE; 25GbE options" },
        { label: "Management", value: "XCC2 + XClarity Administrator" },
        { label: "Use case", value: "Offices, retail, sites without IT staff" },
      ]},
      { name: "Lenovo ThinkEdge SE450", tagline: "1U with GPU for AI inference at the edge", specs: [
        { label: "Form factor", value: "1U, mid depth" },
        { label: "CPU", value: "Intel Xeon Scalable 3rd gen (Ice Lake)" },
        { label: "Memory", value: "Up to 1 TB DDR4" },
        { label: "GPU", value: "Up to 3× single-width PCIe GPU (A2/L4)" },
        { label: "Network", value: "2× 25GbE + OCP 3.0" },
        { label: "Management", value: "XCC2 + XClarity" },
        { label: "Use case", value: "AI inference, machine vision, NLP" },
      ]},
      { name: "Lenovo ThinkEdge SE455 V3 / SE455i V3", tagline: "The most powerful ThinkEdge — AMD EPYC «Siena» up to 6 GPUs", specs: [
        { label: "Form factor", value: "1U, full depth" },
        { label: "CPU", value: "AMD EPYC 9004 «Siena» (up to 64 cores)" },
        { label: "Memory", value: "Up to 3 TB DDR5" },
        { label: "GPU", value: "Up to 6× SW PCIe GPU (L4) or 2× DW (A100/H100)" },
        { label: "Network", value: "2× 100GbE; OCP 3.0" },
        { label: "Management", value: "XCC2 + XClarity Administrator" },
        { label: "Use case", value: "Dense inference, on-premise LLM, edge HPC" },
      ]},
    ],
    hpe: [
      { name: "HPE ProLiant DL145 Gen11", tagline: "Low-power 1U AMD EPYC for dense edge", specs: [
        { label: "Form factor", value: "1U, standard rack" },
        { label: "CPU", value: "AMD EPYC 9004 «Genoa» (up to 96 cores)" },
        { label: "Memory", value: "Up to 1.5 TB DDR5 (12× DIMM)" },
        { label: "GPU", value: "Up to 3× single-width PCIe GPU (75 W)" },
        { label: "Network", value: "2× 10GbE Base-T + 2× 10/25GbE SFP28" },
        { label: "Management", value: "HPE iLO 6" },
        { label: "Use case", value: "Near-edge, workload consolidation, telco NFV" },
      ]},
      { name: "HPE Edgeline EL8000 / EL8000t", tagline: "Converged industrial platform for far-edge and telco with GPU and FPGA support", specs: [
        { label: "Form factor", value: "Modular 4U (up to 8 compute cartridges)" },
        { label: "CPU", value: "Intel Xeon Scalable (per cartridge)" },
        { label: "Acceleration", value: "PCIe GPU + FPGA (SmartNIC/DPU)" },
        { label: "Temperature", value: "-5 °C to +55 °C (extended optional)" },
        { label: "Network", value: "High-density fronthaul; RAN compatible" },
        { label: "Management", value: "HPE OneView + iLO 5" },
        { label: "Use case", value: "Industrial, 5G MEC, ruggedized plant" },
      ]},
      { name: "HPE Compute Edge Server e930t", tagline: "Compact rugged server for telco and 5G", specs: [
        { label: "Form factor", value: "1U rugged, short depth" },
        { label: "CPU", value: "Intel Xeon D series" },
        { label: "Memory", value: "Up to 256 GB DDR4" },
        { label: "GPU", value: "Up to 1× SW PCIe GPU" },
        { label: "Network", value: "Multiple high-speed interfaces" },
        { label: "Management", value: "iLO 5" },
        { label: "Use case", value: "Telco far-edge, vRAN" },
      ]},
      { name: "HPE Compute Edge Server e920d", tagline: "Desktop version of the e9-series for distributed deployments", specs: [
        { label: "Form factor", value: "Desktop / compact rack" },
        { label: "CPU", value: "Intel Xeon D series" },
        { label: "Memory", value: "Up to 128 GB DDR4" },
        { label: "Network", value: "4× 1GbE / 2× 10GbE" },
        { label: "Management", value: "iLO 5 + HPE GreenLake edge management" },
        { label: "Use case", value: "Retail, branches, distributed edge" },
      ]},
    ],
    xfusion: [
      { name: "xFusion FusionXpark GB10", tagline: "Portable AI superchip — 1 PFLOP FP4 in a mini form factor", specs: [
        { label: "Form factor", value: "Ultra-compact mini-PC / desktop" },
        { label: "SoC", value: "NVIDIA Grace Blackwell GB10 (72× Arm Neoverse V2 + Blackwell GPU)" },
        { label: "Performance", value: "1 PFLOP FP4 / 200 TOPS INT8" },
        { label: "Memory", value: "128 GB unified LPDDR5X (CPU+GPU)" },
        { label: "Storage", value: "Internal M.2 NVMe SSD" },
        { label: "Network", value: "2× 10GbE + Wi-Fi 6E" },
        { label: "Use case", value: "On-device AI development, local LLM inference, autonomous edge AI" },
      ]},
      { name: "xFusion FusionServer 1288 V8", tagline: "High-performance 1U near-edge with Intel Xeon 6", specs: [
        { label: "Form factor", value: "1U standard rack" },
        { label: "CPU", value: "Intel Xeon 6 (P-core or E-core, up to 128 cores)" },
        { label: "Memory", value: "Up to 2 TB DDR5" },
        { label: "GPU", value: "Up to 3× single-width PCIe GPU" },
        { label: "Network", value: "2× 25GbE + OCP 3.0; 100GbE options" },
        { label: "Management", value: "iBMC + xFusion Management Platform" },
        { label: "Use case", value: "Near-edge AI, consolidation, NFV" },
      ]},
      { name: "xFusion FusionServer 2288 V8", tagline: "Dual-socket 2U near-edge for dense workloads", specs: [
        { label: "Form factor", value: "2U standard rack" },
        { label: "CPU", value: "2× Intel Xeon 6 (up to 256 total cores)" },
        { label: "Memory", value: "Up to 8 TB DDR5" },
        { label: "GPU", value: "Up to 6× SW PCIe GPU or 4× DW GPU" },
        { label: "PCIe", value: "Up to 6× PCIe Gen5" },
        { label: "Network", value: "4× 25GbE / 100GbE options; OCP 3.0" },
        { label: "Management", value: "iBMC + xFusion Management Platform" },
        { label: "Use case", value: "Dense inference, fine-tuning, near-edge HPC" },
      ]},
      { name: "xFusion FusionServer G5500 V7", tagline: "High-density GPU AI server for near-edge datacenters", specs: [
        { label: "Form factor", value: "4U, high density" },
        { label: "CPU", value: "2× Intel Xeon Scalable" },
        { label: "GPU", value: "Up to 8× double-width PCIe GPU (H100/A100)" },
        { label: "Memory", value: "Up to 4 TB DDR5 + GPU HBM" },
        { label: "Network", value: "InfiniBand / 400GbE for clusters" },
        { label: "Management", value: "iBMC + centralized management platform" },
        { label: "Use case", value: "Near-edge LLM training/fine-tuning, plant-centralised AI" },
      ]},
      { name: "xFusion FusionXtation X3", tagline: "AI workstation for creative and industrial edge", specs: [
        { label: "Form factor", value: "Tower workstation" },
        { label: "CPU", value: "Intel Xeon W or AMD Threadripper PRO" },
        { label: "GPU", value: "Up to 2× professional GPU (RTX / A-series)" },
        { label: "Memory", value: "Up to 512 GB DDR5" },
        { label: "Network", value: "2× 10GbE + Thunderbolt" },
        { label: "Management", value: "Local management + xFusion Platform integration" },
        { label: "Use case", value: "AI design, simulation, industrial creative edge" },
      ]},
    ],
  },
  table: {
    eyebrow: "CROSS-VENDOR COMPARISON",
    title: "All 20 models in one view",
    headers: ["Vendor", "Model", "Form factor", "CPU", "Max memory", "Max GPU", "Primary use case"],
    rows: [
      ["Dell", "XR4000", "2U modular", "Xeon D-2700", "512 GB", "2× GPU SW 150W", "Modular far-edge"],
      ["Dell", "XR5610", "1U rugged", "Xeon D-2700", "512 GB", "1× GPU SW", "5G MEC, telco"],
      ["Dell", "XR7620", "2U rugged", "2× Xeon Scalable", "4 TB", "2× GPU DW 300W", "Dense AI, industry"],
      ["Dell", "XR8000", "Modular", "Xeon D / ARM", "—", "FPGA L1", "vRAN, Cloud RAN"],
      ["Dell", "XR9700", "2U rugged", "2× Xeon 5th gen", "8 TB", "4× GPU PCIe", "Edge HPC, gen AI"],
      ["Lenovo", "SE100", "Mini/desktop", "Core Ultra NPU", "64 GB", "Integrated NPU", "Retail, IoT"],
      ["Lenovo", "SE350 V2", "1U rugged", "Xeon D-2700", "256 GB", "1× GPU SW", "Far-edge, manufacturing"],
      ["Lenovo", "SE360 V2", "2U silent", "Xeon D-2700", "256 GB", "1× GPU SW", "Office, retail"],
      ["Lenovo", "SE450", "1U", "Xeon Scalable", "1 TB", "3× GPU SW (L4)", "AI inference"],
      ["Lenovo", "SE455 V3", "1U", "AMD EPYC Siena", "3 TB", "6× GPU SW / 2× DW", "On-premise LLM"],
      ["HPE", "DL145 Gen11", "1U", "AMD EPYC Genoa", "1.5 TB", "3× GPU SW 75W", "Near-edge, NFV"],
      ["HPE", "EL8000", "4U modular", "Xeon Scalable", "variable", "GPU + FPGA", "Industrial, 5G MEC"],
      ["HPE", "e930t", "1U rugged", "Xeon D", "256 GB", "1× GPU SW", "Telco far-edge, vRAN"],
      ["HPE", "e920d", "Desktop", "Xeon D", "128 GB", "—", "Retail, branches"],
      ["xFusion", "GB10", "Mini-PC", "NVIDIA GB10 SoC", "128 GB", "1 PFLOP FP4", "On-device AI, local LLM"],
      ["xFusion", "1288 V8", "1U", "Intel Xeon 6", "2 TB", "3× GPU SW", "Near-edge, NFV"],
      ["xFusion", "2288 V8", "2U", "2× Intel Xeon 6", "8 TB", "6× GPU SW / 4× DW", "Dense AI, HPC"],
      ["xFusion", "G5500 V7", "4U", "2× Xeon Scalable", "4 TB", "8× GPU DW", "Near-edge LLM training"],
      ["xFusion", "G5200 V7", "2U", "2× Xeon Scalable", "2 TB", "4× GPU SW", "Inference, NLP"],
      ["xFusion", "XtationX3", "Tower", "Xeon W / TR PRO", "512 GB", "2× GPU pro", "Creative edge"],
    ],
  },
  useCases: {
    eyebrow: "SELECTION GUIDE",
    title: "The right appliance for each deployment",
    items: [
      { code: "UC1", title: "Low-power AI inference (store / office)", desc: "Local processing without datacenter infrastructure. <100W consumption. Optional fanless.", chips: ["ThinkEdge SE100", "PowerEdge XR5610", "HPE e920d", "FusionXpark GB10"] },
      { code: "UC2", title: "Dense AI acceleration (industrial plant / aggregation)", desc: "Intensive GPU workloads. Extended temperature. High availability.", chips: ["ThinkEdge SE455 V3", "PowerEdge XR7620", "FusionServer 2288 V8", "HPE EL8000"] },
      { code: "UC3", title: "Telco, 5G vRAN and far-edge", desc: "Short profile, ruggedized, high-density fronthaul. OpenRAN compatible.", chips: ["PowerEdge XR8000", "PowerEdge XR5610", "HPE e930t", "ThinkEdge SE350 V2"] },
      { code: "UC4", title: "On-device AI agent development and deployment", desc: "Local LLM, light fine-tuning, rapid prototyping. No cloud dependency.", chips: ["FusionXpark GB10", "ThinkEdge SE455 V3", "PowerEdge XR9700"] },
      { code: "UC5", title: "Near-edge HPC and on-premise generative AI", desc: "High GPU density, InfiniBand/400GbE, inference / fine-tuning clusters.", chips: ["FusionServer G5500 V7", "PowerEdge XR9700", "ThinkEdge SE455 V3"] },
    ],
  },
  cta: {
    title: "Need help picking the right appliance?",
    body: "Our engineering team helps you select, size and certify the right hardware for your Cognitive Server deployment.",
    button: "Talk to engineering →",
  },
};

// ============= Italian =============
const IT: Content = {
  breadcrumb: { home: "Home", resources: "Risorse", hardware: "Hardware" },
  hero: {
    eyebrow: "§ HARDWARE · CATALOGO TECNICO",
    title: "Server AI Edge Computing",
    subtitle: "Catalogo tecnico comparato degli appliance certificati per Cognitive Server — Dell · Lenovo · HPE · xFusion.",
  },
  intro: {
    eyebrow: "COS'È UN SERVER AI EDGE",
    title: "Calcolo al margine con accelerazione AI",
    body: "I server AI edge computing spostano l'elaborazione dove vengono generati i dati: impianti industriali, negozi, torri 5G, ospedali o sedi remote. Riducono la latenza, minimizzano il traffico verso il cloud e preservano la sovranità del dato. Integrano accelerazione GPU, NPU o superchip dedicati per l'inferenza on-premise.",
    stats: ["4 vendor certificati", "20+ modelli disponibili", "Operatività 100% on-premise"],
  },
  vendorSection: { eyebrow: "CATALOGO PER VENDOR" },
  vendorMeta: {
    dell: { label: "DELL", family: "PowerEdge XR-Series", intro: "Il portafoglio più ampio di server edge ruggedizzati a profondità ridotta, dal modulare XR4000 all'accelerazione densa XR7620 e alla piattaforma RAN XR8000." },
    lenovo: { label: "LENOVO", family: "ThinkEdge", intro: "Gamma molto completa orientata all'AI, dall'ultracompatto SE100 con NPU integrata al SE455 V3 con AMD EPYC «Siena» e fino a 6 GPU L4 come ammiraglia per l'inferenza." },
    hpe: { label: "HPE", family: "ProLiant Edge & Edgeline", intro: "Due famiglie complementari: ProLiant per carichi standard al margine ed Edgeline per ambienti industriali con tolleranza estesa a temperatura e vibrazione." },
    xfusion: { label: "XFUSION", family: "FusionXpark & FusionServer", intro: "Scommessa differenziata di xFusion (controllata Huawei): AI portatile con il superchip FusionXpark GB10 (1 PFLOP FP4), server near-edge 1288/2288 V8 e la serie G per datacenter AI." },
  },
  models: {
    dell: [
      { name: "Dell PowerEdge XR4000", tagline: "Piattaforma modulare sled-based a profondità minima", specs: [
        { label: "Formato", value: "2U, profondità ultra-ridotta (~356 mm)" },
        { label: "CPU", value: "Intel Xeon D-2700 (fino a 20 core/sled)" },
        { label: "Memoria", value: "Fino a 256 GB RDIMM / 512 GB LRDIMM per sled" },
        { label: "GPU", value: "Fino a 2× GPU SW 150 W o 1× GPU DW 250 W" },
        { label: "Rete", value: "4× 10GbE / 4× 25GbE SFP; OCP 3.0" },
        { label: "Gestione", value: "iDRAC9 + Dell NativeEdge" },
        { label: "Caso d'uso", value: "Retail, telco, far-edge modulare" },
      ]},
      { name: "Dell PowerEdge XR5610", tagline: "1U rugged a basso profilo per deployment 5G MEC", specs: [
        { label: "Formato", value: "1U, profondità ridotta" },
        { label: "CPU", value: "Intel Xeon D-2700 (fino a 20 core)" },
        { label: "Memoria", value: "Fino a 512 GB DDR5" },
        { label: "GPU", value: "Fino a 1× GPU PCIe single-width" },
        { label: "Rete", value: "2× 25GbE + OCP 3.0; opzioni SmartNIC" },
        { label: "Gestione", value: "iDRAC9 + OpenManage" },
        { label: "Caso d'uso", value: "5G MEC, far-edge telco, retail" },
      ]},
      { name: "Dell PowerEdge XR7620", tagline: "2U dual-socket con fino a 2 GPU ad alte prestazioni", specs: [
        { label: "Formato", value: "2U, rugged a profondità ridotta" },
        { label: "CPU", value: "2× Intel Xeon Scalable 4ª gen. (fino a 300 W TDP)" },
        { label: "Memoria", value: "Fino a 4 TB DDR5" },
        { label: "GPU", value: "Fino a 2× GPU DW 300 W (H100/A100 PCIe)" },
        { label: "Rete", value: "4× 25GbE / opzioni 100GbE; OCP 3.0" },
        { label: "Gestione", value: "iDRAC9 con LC; NativeEdge" },
        { label: "Caso d'uso", value: "Inferenza densa, machine vision, industria 4.0" },
      ]},
      { name: "Dell PowerEdge XR8000", tagline: "Piattaforma modulare per Cloud RAN e vRAN", specs: [
        { label: "Formato", value: "Modulare, profondità ultra-ridotta" },
        { label: "CPU", value: "Intel Xeon D o ARM Ampere (in base alla configurazione)" },
        { label: "Accelerazione", value: "FPGA Intel/Xilinx per L1 vRAN" },
        { label: "Rete", value: "Interfacce fronthaul ad alta densità" },
        { label: "Gestione", value: "iDRAC9 + NativeEdge + OpenRAN compatibile" },
        { label: "Caso d'uso", value: "5G vRAN, Cloud RAN, telco far-edge" },
      ]},
      { name: "Dell PowerEdge XR9700", tagline: "Il server edge più potente della gamma XR", specs: [
        { label: "Formato", value: "2U rugged" },
        { label: "CPU", value: "Fino a 2× Intel Xeon Scalable 5ª gen. (Emerald Rapids)" },
        { label: "Memoria", value: "Fino a 8 TB DDR5" },
        { label: "GPU", value: "Fino a 4× GPU PCIe ad alte prestazioni" },
        { label: "Rete", value: "Fino a 400GbE; OCP 3.0" },
        { label: "Gestione", value: "iDRAC9 + NativeEdge" },
        { label: "Caso d'uso", value: "HPC al margine, AI generativa on-premise, aggregazione" },
      ]},
    ],
    lenovo: [
      { name: "Lenovo ThinkEdge SE100", tagline: "Ultracompatto con NPU integrata per inferenza leggera", specs: [
        { label: "Formato", value: "Mini/desktop, fanless opzionale" },
        { label: "CPU", value: "Intel Core Ultra con NPU integrata (AI Boost)" },
        { label: "Memoria", value: "Fino a 64 GB DDR5" },
        { label: "Storage", value: "SSD NVMe M.2" },
        { label: "Rete", value: "2× 2.5GbE + Wi-Fi 6E opzionale" },
        { label: "Gestione", value: "Lenovo XClarity + ThinkShield" },
        { label: "Caso d'uso", value: "Retail POS, ufficio, gateway IoT" },
      ]},
      { name: "Lenovo ThinkEdge SE350 V2", tagline: "1U rugged corto per ambienti senza CED", specs: [
        { label: "Formato", value: "1U, profondità 295 mm" },
        { label: "CPU", value: "Intel Xeon D-2700 (fino a 20 core)" },
        { label: "Memoria", value: "Fino a 256 GB DDR4" },
        { label: "GPU", value: "Fino a 1× GPU PCIe single-width" },
        { label: "Rete", value: "4× 1GbE / 2× 25GbE; OCP 2.0" },
        { label: "Gestione", value: "XClarity Controller 2 (XCC2)" },
        { label: "Caso d'uso", value: "Far-edge ruggedizzato, telco, manifattura" },
      ]},
      { name: "Lenovo ThinkEdge SE360 V2", tagline: "2U ultra-silenzioso per ambienti utente", specs: [
        { label: "Formato", value: "2U, profondità ridotta" },
        { label: "CPU", value: "Intel Xeon D-2700 serie" },
        { label: "Memoria", value: "Fino a 256 GB DDR4 ECC" },
        { label: "GPU", value: "Fino a 1× GPU PCIe SW" },
        { label: "Rete", value: "4× 1GbE; opzioni 25GbE" },
        { label: "Gestione", value: "XCC2 + XClarity Administrator" },
        { label: "Caso d'uso", value: "Uffici, retail, sedi senza personale IT" },
      ]},
      { name: "Lenovo ThinkEdge SE450", tagline: "1U con GPU per inferenza AI al margine", specs: [
        { label: "Formato", value: "1U, profondità media" },
        { label: "CPU", value: "Intel Xeon Scalable 3ª gen. (Ice Lake)" },
        { label: "Memoria", value: "Fino a 1 TB DDR4" },
        { label: "GPU", value: "Fino a 3× GPU PCIe single-width (A2/L4)" },
        { label: "Rete", value: "2× 25GbE + OCP 3.0" },
        { label: "Gestione", value: "XCC2 + XClarity" },
        { label: "Caso d'uso", value: "Inferenza AI, machine vision, NLP" },
      ]},
      { name: "Lenovo ThinkEdge SE455 V3 / SE455i V3", tagline: "Il più potente ThinkEdge — AMD EPYC «Siena» fino a 6 GPU", specs: [
        { label: "Formato", value: "1U, profondità piena" },
        { label: "CPU", value: "AMD EPYC 9004 «Siena» (fino a 64 core)" },
        { label: "Memoria", value: "Fino a 3 TB DDR5" },
        { label: "GPU", value: "Fino a 6× GPU PCIe SW (L4) o 2× DW (A100/H100)" },
        { label: "Rete", value: "2× 100GbE; OCP 3.0" },
        { label: "Gestione", value: "XCC2 + XClarity Administrator" },
        { label: "Caso d'uso", value: "Inferenza densa, LLM on-premise, HPC edge" },
      ]},
    ],
    hpe: [
      { name: "HPE ProLiant DL145 Gen11", tagline: "1U AMD EPYC a basso consumo per edge denso", specs: [
        { label: "Formato", value: "1U, rack standard" },
        { label: "CPU", value: "AMD EPYC 9004 «Genoa» (fino a 96 core)" },
        { label: "Memoria", value: "Fino a 1.5 TB DDR5 (12× DIMM)" },
        { label: "GPU", value: "Fino a 3× GPU PCIe single-width (75 W)" },
        { label: "Rete", value: "2× 10GbE Base-T + 2× 10/25GbE SFP28" },
        { label: "Gestione", value: "HPE iLO 6" },
        { label: "Caso d'uso", value: "Near-edge, consolidamento, telco NFV" },
      ]},
      { name: "HPE Edgeline EL8000 / EL8000t", tagline: "Piattaforma industriale convergente per far-edge e telco con supporto GPU e FPGA", specs: [
        { label: "Formato", value: "Modulare 4U (fino a 8 cartucce di calcolo)" },
        { label: "CPU", value: "Intel Xeon Scalable (per cartuccia)" },
        { label: "Accelerazione", value: "GPU PCIe + FPGA (SmartNIC/DPU)" },
        { label: "Temperatura", value: "-5 °C a +55 °C (estesa opzionale)" },
        { label: "Rete", value: "Fronthaul ad alta densità; RAN compatibile" },
        { label: "Gestione", value: "HPE OneView + iLO 5" },
        { label: "Caso d'uso", value: "Industriale, 5G MEC, impianto ruggedizzato" },
      ]},
      { name: "HPE Compute Edge Server e930t", tagline: "Server rugged compatto per telco e 5G", specs: [
        { label: "Formato", value: "1U rugged, profondità ridotta" },
        { label: "CPU", value: "Intel Xeon D serie" },
        { label: "Memoria", value: "Fino a 256 GB DDR4" },
        { label: "GPU", value: "Fino a 1× GPU PCIe SW" },
        { label: "Rete", value: "Interfacce multiple ad alta velocità" },
        { label: "Gestione", value: "iLO 5" },
        { label: "Caso d'uso", value: "Telco far-edge, vRAN" },
      ]},
      { name: "HPE Compute Edge Server e920d", tagline: "Versione desktop della piattaforma e9-series per deployment distribuiti", specs: [
        { label: "Formato", value: "Desktop / rack compatto" },
        { label: "CPU", value: "Intel Xeon D serie" },
        { label: "Memoria", value: "Fino a 128 GB DDR4" },
        { label: "Rete", value: "4× 1GbE / 2× 10GbE" },
        { label: "Gestione", value: "iLO 5 + HPE GreenLake edge management" },
        { label: "Caso d'uso", value: "Retail, filiali, edge distribuito" },
      ]},
    ],
    xfusion: [
      { name: "xFusion FusionXpark GB10", tagline: "Superchip AI portatile — 1 PFLOP FP4 in formato mini", specs: [
        { label: "Formato", value: "Mini-PC / desktop ultracompatto" },
        { label: "SoC", value: "NVIDIA Grace Blackwell GB10 (72× Arm Neoverse V2 + GPU Blackwell)" },
        { label: "Prestazioni", value: "1 PFLOP FP4 / 200 TOPS INT8" },
        { label: "Memoria", value: "128 GB LPDDR5X unificata (CPU+GPU)" },
        { label: "Storage", value: "SSD NVMe M.2 interno" },
        { label: "Rete", value: "2× 10GbE + Wi-Fi 6E" },
        { label: "Caso d'uso", value: "Sviluppo AI on-device, inferenza LLM locale, edge AI autonomo" },
      ]},
      { name: "xFusion FusionServer 1288 V8", tagline: "1U near-edge ad alte prestazioni con Intel Xeon 6", specs: [
        { label: "Formato", value: "1U rack standard" },
        { label: "CPU", value: "Intel Xeon 6 (P-core o E-core, fino a 128 core)" },
        { label: "Memoria", value: "Fino a 2 TB DDR5" },
        { label: "GPU", value: "Fino a 3× GPU PCIe single-width" },
        { label: "Rete", value: "2× 25GbE + OCP 3.0; opzioni 100GbE" },
        { label: "Gestione", value: "iBMC + xFusion Management Platform" },
        { label: "Caso d'uso", value: "AI near-edge, consolidamento, NFV" },
      ]},
      { name: "xFusion FusionServer 2288 V8", tagline: "2U near-edge dual-socket per carichi densi", specs: [
        { label: "Formato", value: "2U rack standard" },
        { label: "CPU", value: "2× Intel Xeon 6 (fino a 256 core totali)" },
        { label: "Memoria", value: "Fino a 8 TB DDR5" },
        { label: "GPU", value: "Fino a 6× GPU PCIe SW o 4× GPU DW" },
        { label: "PCIe", value: "Fino a 6× PCIe Gen5" },
        { label: "Rete", value: "4× 25GbE / opzioni 100GbE; OCP 3.0" },
        { label: "Gestione", value: "iBMC + xFusion Management Platform" },
        { label: "Caso d'uso", value: "Inferenza densa, fine-tuning, HPC near-edge" },
      ]},
      { name: "xFusion FusionServer G5500 V7", tagline: "Server AI ad alta densità GPU per datacenter near-edge", specs: [
        { label: "Formato", value: "4U, alta densità" },
        { label: "CPU", value: "2× Intel Xeon Scalable" },
        { label: "GPU", value: "Fino a 8× GPU PCIe double-width (H100/A100)" },
        { label: "Memoria", value: "Fino a 4 TB DDR5 + memoria HBM GPU" },
        { label: "Rete", value: "InfiniBand / 400GbE per cluster" },
        { label: "Gestione", value: "iBMC + piattaforma di gestione centralizzata" },
        { label: "Caso d'uso", value: "LLM training/fine-tuning near-edge, AI centralizzata d'impianto" },
      ]},
      { name: "xFusion FusionXtation X3", tagline: "Workstation AI per edge creativo e industriale", specs: [
        { label: "Formato", value: "Workstation tower" },
        { label: "CPU", value: "Intel Xeon W o AMD Threadripper PRO" },
        { label: "GPU", value: "Fino a 2× GPU professionale (RTX / A-series)" },
        { label: "Memoria", value: "Fino a 512 GB DDR5" },
        { label: "Rete", value: "2× 10GbE + Thunderbolt" },
        { label: "Gestione", value: "Gestione locale + integrazione xFusion Platform" },
        { label: "Caso d'uso", value: "Design AI, simulazione, edge creativo industriale" },
      ]},
    ],
  },
  table: {
    eyebrow: "COMPARATIVA TRASVERSALE",
    title: "I 20 modelli in un colpo d'occhio",
    headers: ["Vendor", "Modello", "Formato", "CPU", "Memoria max", "GPU max", "Caso d'uso principale"],
    rows: [
      ["Dell", "XR4000", "2U modulare", "Xeon D-2700", "512 GB", "2× GPU SW 150W", "Far-edge modulare"],
      ["Dell", "XR5610", "1U rugged", "Xeon D-2700", "512 GB", "1× GPU SW", "5G MEC, telco"],
      ["Dell", "XR7620", "2U rugged", "2× Xeon Scalable", "4 TB", "2× GPU DW 300W", "AI densa, industria"],
      ["Dell", "XR8000", "Modulare", "Xeon D / ARM", "—", "FPGA L1", "vRAN, Cloud RAN"],
      ["Dell", "XR9700", "2U rugged", "2× Xeon 5ª gen", "8 TB", "4× GPU PCIe", "HPC edge, AI gen."],
      ["Lenovo", "SE100", "Mini/desktop", "Core Ultra NPU", "64 GB", "NPU integrata", "Retail, IoT"],
      ["Lenovo", "SE350 V2", "1U rugged", "Xeon D-2700", "256 GB", "1× GPU SW", "Far-edge, manifattura"],
      ["Lenovo", "SE360 V2", "2U silenzioso", "Xeon D-2700", "256 GB", "1× GPU SW", "Ufficio, retail"],
      ["Lenovo", "SE450", "1U", "Xeon Scalable", "1 TB", "3× GPU SW (L4)", "Inferenza AI"],
      ["Lenovo", "SE455 V3", "1U", "AMD EPYC Siena", "3 TB", "6× GPU SW / 2× DW", "LLM on-premise"],
      ["HPE", "DL145 Gen11", "1U", "AMD EPYC Genoa", "1.5 TB", "3× GPU SW 75W", "Near-edge, NFV"],
      ["HPE", "EL8000", "4U modulare", "Xeon Scalable", "variabile", "GPU + FPGA", "Industriale, 5G MEC"],
      ["HPE", "e930t", "1U rugged", "Xeon D", "256 GB", "1× GPU SW", "Telco far-edge, vRAN"],
      ["HPE", "e920d", "Desktop", "Xeon D", "128 GB", "—", "Retail, filiali"],
      ["xFusion", "GB10", "Mini-PC", "NVIDIA GB10 SoC", "128 GB", "1 PFLOP FP4", "AI on-device, LLM locale"],
      ["xFusion", "1288 V8", "1U", "Intel Xeon 6", "2 TB", "3× GPU SW", "Near-edge, NFV"],
      ["xFusion", "2288 V8", "2U", "2× Intel Xeon 6", "8 TB", "6× GPU SW / 4× DW", "AI densa, HPC"],
      ["xFusion", "G5500 V7", "4U", "2× Xeon Scalable", "4 TB", "8× GPU DW", "LLM training near-edge"],
      ["xFusion", "G5200 V7", "2U", "2× Xeon Scalable", "2 TB", "4× GPU SW", "Inferenza, NLP"],
      ["xFusion", "XtationX3", "Tower", "Xeon W / TR PRO", "512 GB", "2× GPU pro", "Edge creativo"],
    ],
  },
  useCases: {
    eyebrow: "GUIDA ALLA SELEZIONE",
    title: "L'appliance giusto per ogni deployment",
    items: [
      { code: "UC1", title: "Inferenza AI a basso consumo (negozio / ufficio)", desc: "Elaborazione locale senza infrastruttura CED. Consumo <100W. Fanless opzionale.", chips: ["ThinkEdge SE100", "PowerEdge XR5610", "HPE e920d", "FusionXpark GB10"] },
      { code: "UC2", title: "Accelerazione AI densa (impianto industriale / aggregazione)", desc: "Carichi GPU intensivi. Temperatura estesa. Alta disponibilità.", chips: ["ThinkEdge SE455 V3", "PowerEdge XR7620", "FusionServer 2288 V8", "HPE EL8000"] },
      { code: "UC3", title: "Telco, 5G vRAN e far-edge", desc: "Profilo corto, ruggedizzato, fronthaul ad alta densità. OpenRAN compatibile.", chips: ["PowerEdge XR8000", "PowerEdge XR5610", "HPE e930t", "ThinkEdge SE350 V2"] },
      { code: "UC4", title: "Sviluppo e deployment di agenti AI on-device", desc: "LLM locale, fine-tuning leggero, prototipazione rapida. Nessuna dipendenza cloud.", chips: ["FusionXpark GB10", "ThinkEdge SE455 V3", "PowerEdge XR9700"] },
      { code: "UC5", title: "HPC near-edge e AI generativa on-premise", desc: "Alta densità GPU, InfiniBand/400GbE, cluster di inferenza / fine-tuning.", chips: ["FusionServer G5500 V7", "PowerEdge XR9700", "ThinkEdge SE455 V3"] },
    ],
  },
  cta: {
    title: "Hai bisogno di aiuto per scegliere l'appliance?",
    body: "Il nostro team di ingegneria ti aiuta a selezionare, dimensionare e certificare l'hardware giusto per il tuo deployment Cognitive Server.",
    button: "Parla con l'ingegneria →",
  },
};

// ============= Portuguese =============
const PT: Content = {
  breadcrumb: { home: "Home", resources: "Recursos", hardware: "Hardware" },
  hero: {
    eyebrow: "§ HARDWARE · CATÁLOGO TÉCNICO",
    title: "Servidores AI Edge Computing",
    subtitle: "Catálogo técnico comparado dos appliances certificados para Cognitive Server — Dell · Lenovo · HPE · xFusion.",
  },
  intro: {
    eyebrow: "O QUE É UM SERVIDOR AI EDGE",
    title: "Computação no extremo com aceleração de IA",
    body: "Os servidores de AI edge computing deslocam o processamento para onde os dados são gerados: fábricas, lojas, torres 5G, hospitais ou locais remotos. Reduzem a latência, minimizam o tráfego para a cloud e mantêm a soberania do dado. Integram aceleração GPU, NPU ou superchips dedicados para inferência on-premise.",
    stats: ["4 fabricantes certificados", "20+ modelos disponíveis", "Operação 100% on-premise"],
  },
  vendorSection: { eyebrow: "CATÁLOGO POR FABRICANTE" },
  vendorMeta: {
    dell: { label: "DELL", family: "PowerEdge XR-Series", intro: "A carteira mais ampla de servidores edge ruggedizados de profundidade reduzida, do modular XR4000 à aceleração densa XR7620 e à plataforma RAN XR8000." },
    lenovo: { label: "LENOVO", family: "ThinkEdge", intro: "Gama muito completa orientada à IA, do ultracompacto SE100 com NPU integrada ao SE455 V3 com AMD EPYC «Siena» e até 6 GPU L4 como referência de inferência." },
    hpe: { label: "HPE", family: "ProLiant Edge & Edgeline", intro: "Duas famílias complementares: ProLiant para cargas standard no edge e Edgeline para ambientes industriais com tolerância estendida a temperatura e vibração." },
    xfusion: { label: "XFUSION", family: "FusionXpark & FusionServer", intro: "Aposta diferenciada da xFusion (subsidiária da Huawei): IA portátil com o superchip FusionXpark GB10 (1 PFLOP FP4), servidores near-edge 1288/2288 V8 e a série G de datacenters de IA." },
  },
  models: {
    dell: [
      { name: "Dell PowerEdge XR4000", tagline: "Plataforma modular sled-based de profundidade mínima", specs: [
        { label: "Formato", value: "2U, profundidade ultrarreduzida (~356 mm)" },
        { label: "CPU", value: "Intel Xeon D-2700 (até 20 núcleos/sled)" },
        { label: "Memória", value: "Até 256 GB RDIMM / 512 GB LRDIMM por sled" },
        { label: "GPU", value: "Até 2× GPU SW 150 W ou 1× GPU DW 250 W" },
        { label: "Rede", value: "4× 10GbE / 4× 25GbE SFP; OCP 3.0" },
        { label: "Gestão", value: "iDRAC9 + Dell NativeEdge" },
        { label: "Caso de uso", value: "Retail, telco, far-edge modular" },
      ]},
      { name: "Dell PowerEdge XR5610", tagline: "1U rugged de perfil baixo para deployments 5G MEC", specs: [
        { label: "Formato", value: "1U, profundidade reduzida" },
        { label: "CPU", value: "Intel Xeon D-2700 série (até 20 núcleos)" },
        { label: "Memória", value: "Até 512 GB DDR5" },
        { label: "GPU", value: "Até 1× GPU PCIe single-width" },
        { label: "Rede", value: "2× 25GbE + OCP 3.0; opções SmartNIC" },
        { label: "Gestão", value: "iDRAC9 + OpenManage" },
        { label: "Caso de uso", value: "5G MEC, far-edge telco, retail" },
      ]},
      { name: "Dell PowerEdge XR7620", tagline: "2U dual-socket com até 2 GPU de alto desempenho", specs: [
        { label: "Formato", value: "2U, rugged de profundidade reduzida" },
        { label: "CPU", value: "2× Intel Xeon Scalable 4ª gen. (até 300 W TDP)" },
        { label: "Memória", value: "Até 4 TB DDR5" },
        { label: "GPU", value: "Até 2× GPU DW 300 W (H100/A100 PCIe)" },
        { label: "Rede", value: "4× 25GbE / opções 100GbE; OCP 3.0" },
        { label: "Gestão", value: "iDRAC9 com LC; NativeEdge" },
        { label: "Caso de uso", value: "Inferência densa, visão por computador, indústria 4.0" },
      ]},
      { name: "Dell PowerEdge XR8000", tagline: "Plataforma modular para Cloud RAN e vRAN", specs: [
        { label: "Formato", value: "Modular, profundidade ultrarreduzida" },
        { label: "CPU", value: "Intel Xeon D ou ARM Ampere (conforme configuração)" },
        { label: "Aceleração", value: "FPGAs Intel/Xilinx para L1 vRAN" },
        { label: "Rede", value: "Interfaces fronthaul de alta densidade" },
        { label: "Gestão", value: "iDRAC9 + NativeEdge + OpenRAN compatível" },
        { label: "Caso de uso", value: "5G vRAN, Cloud RAN, telco far-edge" },
      ]},
      { name: "Dell PowerEdge XR9700", tagline: "O servidor edge mais potente da gama XR", specs: [
        { label: "Formato", value: "2U rugged" },
        { label: "CPU", value: "Até 2× Intel Xeon Scalable 5ª gen. (Emerald Rapids)" },
        { label: "Memória", value: "Até 8 TB DDR5" },
        { label: "GPU", value: "Até 4× GPU PCIe de alto desempenho" },
        { label: "Rede", value: "Até 400GbE; OCP 3.0" },
        { label: "Gestão", value: "iDRAC9 + NativeEdge" },
        { label: "Caso de uso", value: "HPC no edge, IA generativa on-premise, agregação" },
      ]},
    ],
    lenovo: [
      { name: "Lenovo ThinkEdge SE100", tagline: "Ultracompacto com NPU integrada para inferência ligeira", specs: [
        { label: "Formato", value: "Mini/desktop, fanless opcional" },
        { label: "CPU", value: "Intel Core Ultra com NPU integrada (AI Boost)" },
        { label: "Memória", value: "Até 64 GB DDR5" },
        { label: "Armazenamento", value: "SSD NVMe M.2" },
        { label: "Rede", value: "2× 2.5GbE + Wi-Fi 6E opcional" },
        { label: "Gestão", value: "Lenovo XClarity + ThinkShield" },
        { label: "Caso de uso", value: "Retail POS, escritório, gateway IoT" },
      ]},
      { name: "Lenovo ThinkEdge SE350 V2", tagline: "1U rugged curto para ambientes sem CPD", specs: [
        { label: "Formato", value: "1U, profundidade 295 mm" },
        { label: "CPU", value: "Intel Xeon D-2700 (até 20 núcleos)" },
        { label: "Memória", value: "Até 256 GB DDR4" },
        { label: "GPU", value: "Até 1× GPU PCIe single-width" },
        { label: "Rede", value: "4× 1GbE / 2× 25GbE; OCP 2.0" },
        { label: "Gestão", value: "XClarity Controller 2 (XCC2)" },
        { label: "Caso de uso", value: "Far-edge ruggedizado, telco, indústria" },
      ]},
      { name: "Lenovo ThinkEdge SE360 V2", tagline: "2U ultra-silencioso para ambientes de utilizador", specs: [
        { label: "Formato", value: "2U, profundidade reduzida" },
        { label: "CPU", value: "Intel Xeon D-2700 série" },
        { label: "Memória", value: "Até 256 GB DDR4 ECC" },
        { label: "GPU", value: "Até 1× GPU PCIe SW" },
        { label: "Rede", value: "4× 1GbE; opções 25GbE" },
        { label: "Gestão", value: "XCC2 + XClarity Administrator" },
        { label: "Caso de uso", value: "Escritórios, retail, sítios sem pessoal TI" },
      ]},
      { name: "Lenovo ThinkEdge SE450", tagline: "1U com GPU para inferência de IA no edge", specs: [
        { label: "Formato", value: "1U, profundidade média" },
        { label: "CPU", value: "Intel Xeon Scalable 3ª gen. (Ice Lake)" },
        { label: "Memória", value: "Até 1 TB DDR4" },
        { label: "GPU", value: "Até 3× GPU PCIe single-width (A2/L4)" },
        { label: "Rede", value: "2× 25GbE + OCP 3.0" },
        { label: "Gestão", value: "XCC2 + XClarity" },
        { label: "Caso de uso", value: "Inferência IA, visão por computador, NLP" },
      ]},
      { name: "Lenovo ThinkEdge SE455 V3 / SE455i V3", tagline: "O mais potente ThinkEdge — AMD EPYC «Siena» até 6 GPU", specs: [
        { label: "Formato", value: "1U, profundidade completa" },
        { label: "CPU", value: "AMD EPYC 9004 «Siena» (até 64 núcleos)" },
        { label: "Memória", value: "Até 3 TB DDR5" },
        { label: "GPU", value: "Até 6× GPU PCIe SW (L4) ou 2× DW (A100/H100)" },
        { label: "Rede", value: "2× 100GbE; OCP 3.0" },
        { label: "Gestão", value: "XCC2 + XClarity Administrator" },
        { label: "Caso de uso", value: "Inferência densa, LLM on-premise, HPC edge" },
      ]},
    ],
    hpe: [
      { name: "HPE ProLiant DL145 Gen11", tagline: "1U AMD EPYC de baixo consumo para edge denso", specs: [
        { label: "Formato", value: "1U, rack standard" },
        { label: "CPU", value: "AMD EPYC 9004 «Genoa» (até 96 núcleos)" },
        { label: "Memória", value: "Até 1.5 TB DDR5 (12× DIMM)" },
        { label: "GPU", value: "Até 3× GPU PCIe single-width (75 W)" },
        { label: "Rede", value: "2× 10GbE Base-T + 2× 10/25GbE SFP28" },
        { label: "Gestão", value: "HPE iLO 6" },
        { label: "Caso de uso", value: "Near-edge, consolidação, telco NFV" },
      ]},
      { name: "HPE Edgeline EL8000 / EL8000t", tagline: "Plataforma industrial convergente para far-edge e telco com suporte GPU e FPGA", specs: [
        { label: "Formato", value: "Modular 4U (até 8 cartuchos de cálculo)" },
        { label: "CPU", value: "Intel Xeon Scalable (por cartucho)" },
        { label: "Aceleração", value: "GPU PCIe + FPGA (SmartNIC/DPU)" },
        { label: "Temperatura", value: "-5 °C a +55 °C (estendida opcional)" },
        { label: "Rede", value: "Fronthaul de alta densidade; RAN compatível" },
        { label: "Gestão", value: "HPE OneView + iLO 5" },
        { label: "Caso de uso", value: "Industrial, 5G MEC, planta ruggedizada" },
      ]},
      { name: "HPE Compute Edge Server e930t", tagline: "Servidor rugged compacto para telco e 5G", specs: [
        { label: "Formato", value: "1U rugged, profundidade reduzida" },
        { label: "CPU", value: "Intel Xeon D série" },
        { label: "Memória", value: "Até 256 GB DDR4" },
        { label: "GPU", value: "Até 1× GPU PCIe SW" },
        { label: "Rede", value: "Múltiplas interfaces de alta velocidade" },
        { label: "Gestão", value: "iLO 5" },
        { label: "Caso de uso", value: "Telco far-edge, vRAN" },
      ]},
      { name: "HPE Compute Edge Server e920d", tagline: "Versão desktop da plataforma e9-series para deployments distribuídos", specs: [
        { label: "Formato", value: "Desktop / rack compacto" },
        { label: "CPU", value: "Intel Xeon D série" },
        { label: "Memória", value: "Até 128 GB DDR4" },
        { label: "Rede", value: "4× 1GbE / 2× 10GbE" },
        { label: "Gestão", value: "iLO 5 + HPE GreenLake edge management" },
        { label: "Caso de uso", value: "Retail, filiais, edge distribuído" },
      ]},
    ],
    xfusion: [
      { name: "xFusion FusionXpark GB10", tagline: "Superchip de IA portátil — 1 PFLOP FP4 em formato mini", specs: [
        { label: "Formato", value: "Mini-PC / desktop ultracompacto" },
        { label: "SoC", value: "NVIDIA Grace Blackwell GB10 (72× Arm Neoverse V2 + GPU Blackwell)" },
        { label: "Desempenho", value: "1 PFLOP FP4 / 200 TOPS INT8" },
        { label: "Memória", value: "128 GB LPDDR5X unificada (CPU+GPU)" },
        { label: "Armazenamento", value: "SSD NVMe M.2 interno" },
        { label: "Rede", value: "2× 10GbE + Wi-Fi 6E" },
        { label: "Caso de uso", value: "Desenvolvimento IA on-device, inferência LLM local, edge IA autónomo" },
      ]},
      { name: "xFusion FusionServer 1288 V8", tagline: "1U near-edge de alto desempenho com Intel Xeon 6", specs: [
        { label: "Formato", value: "1U rack standard" },
        { label: "CPU", value: "Intel Xeon 6 (P-core ou E-core, até 128 núcleos)" },
        { label: "Memória", value: "Até 2 TB DDR5" },
        { label: "GPU", value: "Até 3× GPU PCIe single-width" },
        { label: "Rede", value: "2× 25GbE + OCP 3.0; opções 100GbE" },
        { label: "Gestão", value: "iBMC + xFusion Management Platform" },
        { label: "Caso de uso", value: "Near-edge IA, consolidação, NFV" },
      ]},
      { name: "xFusion FusionServer 2288 V8", tagline: "2U near-edge dual-socket para cargas densas", specs: [
        { label: "Formato", value: "2U rack standard" },
        { label: "CPU", value: "2× Intel Xeon 6 (até 256 núcleos totais)" },
        { label: "Memória", value: "Até 8 TB DDR5" },
        { label: "GPU", value: "Até 6× GPU PCIe SW ou 4× GPU DW" },
        { label: "PCIe", value: "Até 6× PCIe Gen5" },
        { label: "Rede", value: "4× 25GbE / opções 100GbE; OCP 3.0" },
        { label: "Gestão", value: "iBMC + xFusion Management Platform" },
        { label: "Caso de uso", value: "Inferência densa, fine-tuning, HPC near-edge" },
      ]},
      { name: "xFusion FusionServer G5500 V7", tagline: "Servidor de IA de alta densidade GPU para CPD near-edge", specs: [
        { label: "Formato", value: "4U, alta densidade" },
        { label: "CPU", value: "2× Intel Xeon Scalable" },
        { label: "GPU", value: "Até 8× GPU PCIe double-width (H100/A100)" },
        { label: "Memória", value: "Até 4 TB DDR5 + memória HBM GPU" },
        { label: "Rede", value: "InfiniBand / 400GbE para clusters" },
        { label: "Gestão", value: "iBMC + plataforma de gestão centralizada" },
        { label: "Caso de uso", value: "LLM training/fine-tuning near-edge, IA centralizada de planta" },
      ]},
      { name: "xFusion FusionXtation X3", tagline: "Workstation de IA para edge criativo e industrial", specs: [
        { label: "Formato", value: "Workstation tower" },
        { label: "CPU", value: "Intel Xeon W ou AMD Threadripper PRO" },
        { label: "GPU", value: "Até 2× GPU profissional (RTX / A-series)" },
        { label: "Memória", value: "Até 512 GB DDR5" },
        { label: "Rede", value: "2× 10GbE + Thunderbolt" },
        { label: "Gestão", value: "Gestão local + integração xFusion Platform" },
        { label: "Caso de uso", value: "Design IA, simulação, edge criativo industrial" },
      ]},
    ],
  },
  table: {
    eyebrow: "COMPARATIVA TRANSVERSAL",
    title: "Os 20 modelos numa só vista",
    headers: ["Fabricante", "Modelo", "Formato", "CPU", "Memória máx.", "GPU máx.", "Caso de uso principal"],
    rows: [
      ["Dell", "XR4000", "2U modular", "Xeon D-2700", "512 GB", "2× GPU SW 150W", "Far-edge modular"],
      ["Dell", "XR5610", "1U rugged", "Xeon D-2700", "512 GB", "1× GPU SW", "5G MEC, telco"],
      ["Dell", "XR7620", "2U rugged", "2× Xeon Scalable", "4 TB", "2× GPU DW 300W", "IA densa, indústria"],
      ["Dell", "XR8000", "Modular", "Xeon D / ARM", "—", "FPGA L1", "vRAN, Cloud RAN"],
      ["Dell", "XR9700", "2U rugged", "2× Xeon 5ª gen", "8 TB", "4× GPU PCIe", "HPC edge, IA gen."],
      ["Lenovo", "SE100", "Mini/desktop", "Core Ultra NPU", "64 GB", "NPU integrada", "Retail, IoT"],
      ["Lenovo", "SE350 V2", "1U rugged", "Xeon D-2700", "256 GB", "1× GPU SW", "Far-edge, indústria"],
      ["Lenovo", "SE360 V2", "2U silencioso", "Xeon D-2700", "256 GB", "1× GPU SW", "Escritório, retail"],
      ["Lenovo", "SE450", "1U", "Xeon Scalable", "1 TB", "3× GPU SW (L4)", "Inferência IA"],
      ["Lenovo", "SE455 V3", "1U", "AMD EPYC Siena", "3 TB", "6× GPU SW / 2× DW", "LLM on-premise"],
      ["HPE", "DL145 Gen11", "1U", "AMD EPYC Genoa", "1.5 TB", "3× GPU SW 75W", "Near-edge, NFV"],
      ["HPE", "EL8000", "4U modular", "Xeon Scalable", "variável", "GPU + FPGA", "Industrial, 5G MEC"],
      ["HPE", "e930t", "1U rugged", "Xeon D", "256 GB", "1× GPU SW", "Telco far-edge, vRAN"],
      ["HPE", "e920d", "Desktop", "Xeon D", "128 GB", "—", "Retail, filiais"],
      ["xFusion", "GB10", "Mini-PC", "NVIDIA GB10 SoC", "128 GB", "1 PFLOP FP4", "IA on-device, LLM local"],
      ["xFusion", "1288 V8", "1U", "Intel Xeon 6", "2 TB", "3× GPU SW", "Near-edge, NFV"],
      ["xFusion", "2288 V8", "2U", "2× Intel Xeon 6", "8 TB", "6× GPU SW / 4× DW", "IA densa, HPC"],
      ["xFusion", "G5500 V7", "4U", "2× Xeon Scalable", "4 TB", "8× GPU DW", "LLM training near-edge"],
      ["xFusion", "G5200 V7", "2U", "2× Xeon Scalable", "2 TB", "4× GPU SW", "Inferência, NLP"],
      ["xFusion", "XtationX3", "Tower", "Xeon W / TR PRO", "512 GB", "2× GPU pro", "Edge criativo"],
    ],
  },
  useCases: {
    eyebrow: "GUIA DE SELEÇÃO",
    title: "O appliance certo para cada deployment",
    items: [
      { code: "UC1", title: "Inferência de IA de baixo consumo (loja / escritório)", desc: "Processamento local sem infraestrutura CPD. Consumo <100W. Fanless opcional.", chips: ["ThinkEdge SE100", "PowerEdge XR5610", "HPE e920d", "FusionXpark GB10"] },
      { code: "UC2", title: "Aceleração densa de IA (planta industrial / agregação)", desc: "Cargas GPU intensivas. Temperatura estendida. Alta disponibilidade.", chips: ["ThinkEdge SE455 V3", "PowerEdge XR7620", "FusionServer 2288 V8", "HPE EL8000"] },
      { code: "UC3", title: "Telco, 5G vRAN e far-edge", desc: "Perfil curto, ruggedizado, fronthaul de alta densidade. OpenRAN compatível.", chips: ["PowerEdge XR8000", "PowerEdge XR5610", "HPE e930t", "ThinkEdge SE350 V2"] },
      { code: "UC4", title: "Desenvolvimento e deployment de agentes IA on-device", desc: "LLM local, fine-tuning leve, prototipagem rápida. Sem dependência cloud.", chips: ["FusionXpark GB10", "ThinkEdge SE455 V3", "PowerEdge XR9700"] },
      { code: "UC5", title: "HPC near-edge e IA generativa on-premise", desc: "Alta densidade GPU, InfiniBand/400GbE, clusters de inferência / fine-tuning.", chips: ["FusionServer G5500 V7", "PowerEdge XR9700", "ThinkEdge SE455 V3"] },
    ],
  },
  cta: {
    title: "Precisas de ajuda para escolher o appliance?",
    body: "A nossa equipa de engenharia ajuda-te a selecionar, dimensionar e certificar o hardware adequado para o teu deployment Cognitive Server.",
    button: "Falar com engenharia →",
  },
};

const CONTENT: Record<Locale, Content> = { es: ES, en: EN, it: IT, pt: PT };
// touch to satisfy unused import lint
void VENDOR_LABELS; void VENDOR_FAMILIES;

function HardwarePage() {
  const { locale, t } = useLocale();
  useLocalizedMeta("seo.hardware.title", "seo.hardware.description");
  const c = CONTENT[locale] ?? ES;
  const [tab, setTab] = useState<Vendor>("dell");
  const vendors: Vendor[] = ["dell", "lenovo", "hpe", "xfusion"];

  return (
    <div className="bg-[var(--cream)]">
      {/* 1. HERO */}
      <header className="section section-navy relative overflow-hidden"
        style={{ backgroundImage: "radial-gradient(circle at 85% 20%, rgba(183,132,31,0.22), transparent 55%)" }}>
        <div className="container-1200 py-20 lg:py-28 relative">
          <nav className="flex items-center gap-2 font-mono text-xs text-[var(--gold)] mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[var(--gold-light)]">{c.breadcrumb.home}</Link>
            <span className="text-[var(--navy-2)]">/</span>
            <Link to="/resources" className="hover:text-[var(--gold-light)]">{t("nav.resources")}</Link>
            <span className="text-[var(--navy-2)]">/</span>
            <span className="text-[var(--cream)]">{c.breadcrumb.hardware}</span>
          </nav>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--gold)]">
            {c.hero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl lg:text-6xl tracking-tight text-balance text-[var(--cream)]">
            {c.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--blue-soft)] leading-relaxed">
            {c.hero.subtitle}
          </p>
        </div>
      </header>

      {/* 2. INTRO */}
      <section className="section section-cream">
        <div className="container-1200 py-16 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
            {c.intro.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight text-navy max-w-3xl">
            {c.intro.title}
          </h2>
          <p className="mt-6 max-w-3xl text-body-mid leading-relaxed">
            {c.intro.body}
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {c.intro.stats.map((s) => (
              <div key={s} className="border border-[var(--gold)]/60 bg-[var(--cream)] p-5">
                <p className="font-display text-xl text-navy">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VENDOR TABS */}
      <section className="section section-navy">
        <div className="container-1200 py-16 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--gold)]">
            {c.vendorSection.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight text-[var(--cream)]">
            {c.vendorMeta[tab].label} — {c.vendorMeta[tab].family}
          </h2>

          {/* Tabs */}
          <div role="tablist" aria-label={t("hardware.tabs.label")} className="mt-8 flex flex-wrap gap-2 border-b border-[var(--navy-2)]">
            {vendors.map((v) => (
              <button
                key={v}
                role="tab"
                aria-selected={tab === v}
                onClick={() => setTab(v)}
                className={`px-5 py-3 font-mono text-[12px] tracking-[0.18em] uppercase transition border-b-2 -mb-px ${
                  tab === v
                    ? "text-[var(--gold)] border-[var(--gold)]"
                    : "text-[var(--blue-soft)] border-transparent hover:text-[var(--cream)]"
                }`}
              >
                {c.vendorMeta[v].label}
              </button>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-[var(--blue-soft)] leading-relaxed">
            {c.vendorMeta[tab].intro}
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {c.models[tab].map((m) => {
              const img = MODEL_IMAGES[m.name] ?? VENDOR_FALLBACK[tab];
              return (
              <article key={m.name} className="bg-[var(--cream)] border border-[var(--gold)]/30 rounded-md hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src={img.src}
                  alt={m.name}
                  className="w-full aspect-[16/9] object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = img.fallback;
                    target.onerror = null;
                  }}
                />
                <div className="p-7">
                  <h3 className="font-display text-2xl text-navy">{m.name}</h3>
                  <p className="mt-2 italic text-[var(--gold)] text-sm">{m.tagline}</p>
                  <dl className="mt-6 grid grid-cols-1 gap-y-2 text-sm">
                    {m.specs.map((s) => (
                      <div key={s.label} className="grid grid-cols-[120px_1fr] gap-3 border-b border-line/60 pb-2">
                        <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-body-mute pt-0.5">
                          {s.label}
                        </dt>
                        <dd className="text-body-dark">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="section section-cream">
        <div className="container-1200 py-16 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
            {c.table.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight text-navy">
            {c.table.title}
          </h2>
          <div className="mt-10 overflow-x-auto border border-line">
            <table className="w-full text-sm">
              <thead className="bg-[var(--gold)]/10 border-b border-[var(--gold)]">
                <tr>
                  {c.table.headers.map((h, i) => (
                    <th key={h} className={`px-3 py-3 text-left font-mono text-[10px] tracking-[0.15em] uppercase text-navy whitespace-nowrap ${i === 0 ? "sticky left-0 bg-[var(--gold)]/10 z-10" : ""}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.table.rows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-[var(--cream)]" : "bg-white"}>
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-3 py-3 align-top text-body-dark ${ci === 0 ? `sticky left-0 z-10 font-mono text-[11px] tracking-[0.1em] uppercase text-gold ${idx % 2 === 0 ? "bg-[var(--cream)]" : "bg-white"}` : ""} ${ci === 1 ? "font-medium text-navy whitespace-nowrap" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. USE CASE GUIDE */}
      <section className="section section-navy">
        <div className="container-1200 py-16 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--gold)]">
            {c.useCases.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl tracking-tight text-[var(--cream)]">
            {c.useCases.title}
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {c.useCases.items.map((uc) => (
              <article key={uc.code} className="bg-[var(--cream)] p-7 border-l-4 border-[var(--gold)]">
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gold">{uc.code}</p>
                <h3 className="mt-2 font-display text-xl text-navy">{uc.title}</h3>
                <p className="mt-3 text-sm text-body-mid leading-relaxed">{uc.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {uc.chips.map((ch) => (
                    <li key={ch} className="bg-[var(--gold)]/15 border border-[var(--gold)]/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] uppercase text-navy">
                      {ch}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="section section-cream">
        <div className="container-1200 py-16 lg:py-20 text-center">
          <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-navy max-w-2xl mx-auto">
            {c.cta.title}
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-body-mid leading-relaxed">
            {c.cta.body}
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block bg-[var(--gold)] hover:bg-[var(--gold-light)] text-navy font-mono text-[12px] tracking-[0.18em] uppercase px-7 py-3 transition"
            >
              {c.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
