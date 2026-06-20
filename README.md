# Software in a Box — Web React/TanStack (PRODUCCIÓN)

Web oficial de **Software in a Box** y su tecnología **COGNITIV**: el Servidor de IA propietario y soberano sobre hardware Lenovo ThinkSystem.

> Dominio: **https://www.softwareinabox.eu**

## Jerarquía de marca
- **Lenovo** — hardware (servidores ThinkSystem de IA)
- **COGNITIV** — software de IA soberano
- **Software in a Box** — empresa que desarrolla COGNITIV

Mensaje central: *inferencia dentro del perímetro (compute-to-data), los datos nunca salen, control 100% del cliente. Soberanía por arquitectura, no por contrato.*

## Stack
- React + TanStack Router (SSR / prerender)
- i18n (ES / EN / IT / PT)
- Sistema de diseño navy / gold / cream

## SEO técnico (CRÍTICO — ver carpeta /seo o el archivo SEO-JSON-LD-COGNITIV.html)
1. **SSR obligatorio**: el contenido debe llegar en el HTML (Gemini/ChatGPT no ejecutan JS).
2. **JSON-LD** en el `head()` de cada ruta:
   - `Organization` (layout raíz)
   - `SoftwareApplication` → /cognitiv
   - `LocalBusiness` → /contacto
   - `Article` (CaseStudy) → cada /casos-exito/*
   - `BreadcrumbList` por página interna
   - `FAQPage` → inicio / cognitiv
3. `public/sitemap.xml` y `public/robots.txt` (robots permite GPTBot, Google-Extended, PerplexityBot, ClaudeBot…).
4. `<title>`, `meta description`, Open Graph, canonical y `hreflang` por ruta.
5. Un solo `<h1>` por página; jerarquía semántica; `alt`/`aria-label` en infografías.

## Datos de contacto
- Email: emilio.mulet@softwareinabox.eu
- Tel: +34 601 398 868
- Dirección: Calle Ramírez de Arellano, 17, 4ª planta · 28043 Madrid

## Despliegue (Hostinger)
- hPanel → Avanzado → GIT → conectar este repo (rama `main`) → despliegue automático.
- Tras publicar: enviar `sitemap.xml` en Google Search Console y validar JSON-LD con la Prueba de Resultados Enriquecidos.

## Pendiente
- URL real del logo, imágenes Open Graph y `sameAs` (LinkedIn) en los JSON-LD.
- Activar FormSubmit con el primer envío del formulario de contacto.
