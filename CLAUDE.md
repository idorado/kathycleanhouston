# Kathy Clean Houston — Project Context

## El negocio

**Kathy Clean Houston** es un servicio de limpieza residencial en Houston, TX.

- **Teléfono**: (346) 488-6044
- **Oficina**: 9219 Katy Fwy #136, Houston TX 77024
- **Web**: https://kathycleanhouston.com
- **Servicios**: Recurring (weekly/biweekly/monthly), Deep Clean, Move-In/Move-Out, Post-Construction
- **Operación**: Cleaners basadas cerca de Katy TX. Radio operacional cómodo: ~30 min de manejo desde la oficina. Cubre toda el área Houston–Katy.

---

## Stack técnico

- **Framework**: Next.js (App Router) + TypeScript + Tailwind CSS
- **Hosting**: Vercel
- **Sitemap/robots**: `next-sitemap` — se genera en build, auto-detecta todas las `page.tsx`
- **Schema JSON-LD**: centralizado en `src/config/json-ld.ts`
- **Imágenes externas**: allowlisted en `next.config.ts` → `r2kd0cre8z.ufs.sh`, `tv7odam5so.ufs.sh`, `upload.wikimedia.org`
- **Analytics**: PostHog (ruteado por proxy `/ingest/` para evitar ad blockers)

---

## Zonas target — Análisis de mercado

### Contexto
La estrategia inicial apuntaba a Memorial Villages (alto poder adquisitivo). Ese mercado es difícil online porque es "dinero viejo" — los clientes tienen cleaners de confianza de años y no buscan en Google.

### Zonas de tracción real (validadas con datos de clientes)

| ZIP | Barrio | Por qué funciona |
|---|---|---|
| **77007** | Rice Military / Heights | Profesionales jóvenes, dual-income, digitalmente activos. Mayor cluster de clientes. |
| **77008** | Houston Heights | Mismo perfil que 77007. Alta CVR en Google Ads (17%). |
| **77024** | Memorial / Katy Fwy | Zona de la oficina. Funciona bien orgánico y directo, NO en Ads (CVR 1%). |
| **77079** | Energy Corridor | Expats corporativos (BP, Shell, ConocoPhillips). CVR 15% en Ads. |
| **77080** | Spring Branch | Produjo el cliente de mayor valor ($15,496, weekly). |
| **77018/77092** | Oak Forest / Garden Oaks | Clientes existentes, sin páginas dedicadas aún. |

### Zonas de largo plazo (buen mercado, sin tracción aún)
- Sugar Land (77478/79) — Fort Bend, dual-income, muy activos online
- Katy / Cinco Ranch (77449/77494) — Volumen alto, cleaners operan cerca
- The Woodlands (77380+) — Lejos, corporate relocation, largo plazo

### Evitar para adquisición online
- River Oaks, Memorial Villages (viejo dinero, sin búsqueda online)

---

## Google Ads — Estado actual

**Campaña**: PMAX HOUSTON
- **Budget**: $60/día
- **Bidding**: Maximize Conversions (sin Target CPA — esperar 40-50 conv. totales antes de setearlo, estimado ~$68-75)
- **Targeting geográfico**: Washington Ave/Memorial Park, ZIP 77008, 77079, 77007, 77092
  - ZIP 77024 **excluido** (CVR 1.1%, $223/conv — gasta sin retorno)
- **Exclusión demográfica**: 18-24 años

### Asset Groups

**1. Recurrent Group**
- Final URL: `https://kathycleanhouston.com/house-cleaning-houston`
- Audience signals: PERSONALIZADA + In-market (Home Cleaning, Professional Cleaning)
- Sitelinks recomendados: incluir Energy Corridor-specific

**2. Heights Group** *(creado Abril 2026)*
- Final URL: `https://kathycleanhouston.com/service-areas/greater-heights`
- Messaging: bungalows to townhomes, dual-income Heights professionals, 77007/77008
- Sitelinks: Heights-specific + generales (sin Memorial ni West U)

### Performance benchmark (Mar-Abr 2026)
- CVR promedio: 5.26%
- Cost/conv promedio: $61.39
- Mejor zona: Heights (77008) → 17% CVR, $53/conv

### Señal de alerta
Si el CPC cae por debajo de $3 y el CTR baja de 2%, PMax está derivando a Display/YouTube de baja intención. Revisar y considerar setear Target CPA.

---

## SEO / GEO — Estado de páginas

### Páginas de service area existentes
`/service-areas/` + los siguientes slugs:

| Slug | Estado | Notas |
|---|---|---|
| `greater-heights` | ✅ Live | Principal zona de conversión |
| `spring-branch` | ✅ Live | Zona de alto valor ($15k cliente) |
| `memorial` | ✅ Live | |
| `briar-forest` | ✅ Live | |
| `bellaire` | ✅ Live | |
| `west-university` | ✅ Live | |
| `galleria` | ✅ Live | |
| `medical-center-area` | ✅ Live | |
| `energy-corridor` | ✅ Creada, pendiente deploy | ZIP 77079, corporate angle |
| `katy` | ✅ Creada, pendiente deploy | Cinco Ranch, Grand Pkwy |
| `sugar-land` | ✅ Creada, pendiente deploy | First Colony, Riverstone |
| `the-woodlands` | ✅ Creada, pendiente deploy | Villages, Waterway |
| `westchase` | ✅ Creada, pendiente deploy | Apartments, corporate housing |

### Páginas pendientes de crear (alta prioridad)
- `/service-areas/rice-military` — ZIP 77007, mayor cluster de clientes
- `/service-areas/oak-forest` — ZIP 77018/77092, clientes existentes

### Patrón de páginas
Todas las páginas de service area usan el componente `LocationServiceAreaPage` en `src/components/service-areas/LocationServiceAreaPage.tsx`. Las imágenes y mapas se configuran en `src/lib/service-areas/houstonLocations.ts`.

---

## Mejoras GEO/SEO implementadas (Abril 2026)

- ✅ Schema JSON-LD centralizado y mejorado (`src/config/json-ld.ts`): `@type: ["LocalBusiness", "CleaningService"]`, AggregateRating, GeoCoordinates correctas (Katy Fwy, no downtown)
- ✅ `public/llms.txt` creado — visibilidad para AI crawlers
- ✅ `robots.txt` actualizado — permite GPTBot, ClaudeBot, PerplexityBot, etc.
- ✅ FAQ sections: reemplazadas de Radix UI Accordion → `<details>/<summary>` HTML nativo (visible para AI crawlers)
- ✅ Security headers en `vercel.json`
- ✅ Canonical URLs corregidas
- ✅ Imágenes de service areas: Wikimedia Commons, específicas por zona (no repetidas)

---

## Clientes actuales — Resumen de data (al 23 Abr 2026)

19 deals ganados, casi todos vía Google Ads.

**Top ZIP clusters:**
- 77024: 5 clientes (Memorial/Katy Fwy — orgánico + directo)
- 77007: 4 clientes (Rice Military — Ads)
- 77008: 2 clientes (Heights — Ads)
- 77080: 1 cliente, $15,496 LTV (Spring Branch — Ads)

**Productos más comunes**: Bi-weekly recurring, Move-In, Deep Clean

**Cliente de mayor valor**: Tamara East, 77080, Weekly, $15,496

---

## Decisiones tomadas / Aprendizajes

1. **Memorial Villages no es target online** — dinero viejo, sin búsqueda activa en Google
2. **El Heights-Rice Military corridor es el sweet spot** — CVR más alto, perfil ideal
3. **77024 excluido de Ads** — funciona orgánico/directo, no pago
4. **PMax sin tCPA hasta ~50 conversiones** — después setear en $68-75
5. **Asset group por zona** — mejor que un solo grupo genérico
6. **Imágenes deben ser de la zona específica** — no reutilizar entre páginas de distintas áreas
