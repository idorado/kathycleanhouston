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
- **GBP URL**: via env var `NEXT_PUBLIC_GBP_URL` (setear en Vercel si no está)

---

## Zonas target — Performance real por ZIP (Apr 2026)

| ZIP | Barrio | CVR Ads | Cost/conv | Notas |
|---|---|---|---|---|
| **77007** | Rice Military | **15.79%** | $38.25 | Más eficiente. Subservido (pocas impresiones). |
| **77008** | Houston Heights | **12.86%** | $42.82 | Más volumen. 9 conv. en abril. |
| **77079** | Energy Corridor | **12.20%** | $59.38 | Expats corporativos (BP, Shell, ConocoPhillips). Sólido. |
| Washington Ave/Memorial | Memorial Park | 8.89% | $55.83 | Decent, recibe mucho presupuesto. |
| **77024** | Memorial / Katy Fwy | 0.92% | $167.21 | ❌ Excluido de Ads (Apr 27). Funciona orgánico/directo. |
| **77080** | Spring Branch | — | — | Mayor LTV ($15,496, weekly). Sin datos Ads aún. |
| 77018/77092 | Oak Forest / Garden Oaks | 0% | — | Sin conversiones. Clientes existentes. |

### Zonas de largo plazo
- Sugar Land (77478/79) — Fort Bend, dual-income
- Katy / Cinco Ranch (77449/77494) — cleaners operan cerca
- The Woodlands (77380+) — corporate relocation

### Evitar para adquisición online
- River Oaks, Memorial Villages (viejo dinero, sin búsqueda activa en Google)
- 77024 (funciona orgánico, no Ads — excluido de campaña el 27 Apr 2026)

---

## Google Ads — Estado actual (al 27 Apr 2026)

**Campaña**: PMAX HOUSTON
- **Budget**: $80/día *(subido desde $60 el 27 Apr 2026)*
- **Bidding**: Maximize Conversions (sin Target CPA — setear ~$68-75 cuando llegue a 40-50 conv. totales)
- **Targeting geográfico**: Washington Ave/Memorial Park, ZIP 77008, 77079, 77007, 77092
- **Exclusiones geográficas**: ZIP 77024 excluido como location el 27 Apr 2026 (CVR 0.92%, $167/conv)
- **Exclusión demográfica**: 18-24 años

### Asset Groups

**1. Recurrent Group**
- Final URL: `https://kathycleanhouston.com/house-cleaning-houston`
- Audience signals: PERSONALIZADA + In-market (Home Cleaning, Professional Cleaning)

**2. Heights Group** *(creado Abril 2026 — datos insuficientes aún)*
- Final URL: `https://kathycleanhouston.com/service-areas/greater-heights`
- Messaging: bungalows to townhomes, dual-income Heights professionals, 77007/77008
- Monitorear en semana 6-8 para evaluar si es incremental vs Recurrent Group

**3. Energy Corridor Group** *(evaluar después de semana 6-8 de Heights)*
- Decisión: esperar más datos antes de crear. 77079 ya convierte bien desde Recurrent Group (12.20% CVR).
- Final URL propuesta: `https://kathycleanhouston.com/service-areas/energy-corridor`

### Performance acumulado Abril 2026
- **Conversiones**: 27 (al 27 Apr) — umbral para Target CPA: 40-50
- **CVR promedio**: 7.67% | Cost/conv: $56.63
- **Mejor zona**: 77007 Rice Military → 15.79% CVR, $38.25/conv
- **Mayor volumen**: 77008 Heights → 12.86% CVR, 9 conv.
- **Drain de presupuesto resuelto**: 77024 excluido (81 clics, 1 conv., $167/conv)

### Señal de alerta
Si CPC < $3 y CTR < 2%, PMax está derivando a Display/YouTube de baja intención.

---

## CRO — Cambios implementados (27 Apr 2026)

### `/house-cleaning-houston` (landing principal de Ads)
- ✅ **Hero subtext reposicionado**: de feature list a diferenciador vs plataformas gig
  - Antes: "Flat-rate pricing. Background-checked cleaners. Recurring, deep clean..."
  - Ahora: "The same trusted team, every visit — not a different stranger from an app. Background-checked, insured, and serving Memorial, Heights, Spring Branch, and West Houston."
- ✅ **Pricing section eliminada**: se removieron las cards "From $109 / $119 / $225". Decisión estratégica: no competir en precio, posicionarse en confianza/consistencia.
- ✅ **CTA**: "REQUEST A QUOTE" → "GET A QUOTE"
- ✅ **Sticky CTA mobile**: aparece al scrollear (IntersectionObserver), oculto en desktop. Componente: `src/components/ui/StickyCtaMobile.tsx`

### Contexto de decisión CRO
- Funnel de /house-cleaning-houston: 250 visitas → 15 CTA clicks (6%) → 6 leads. El 82% del tráfico es mobile.
- El bottleneck es el CTA click rate (6%), no el form completion (45-72% de quienes llegan al form).
- No mostrar precios: evita atraer leads price-sensitive. El cliente objetivo busca confianza, no precio bajo.
- KPI a monitorear en 2 semanas: CTA click rate en /house-cleaning-houston (objetivo: subir de 6% a 8-9%).

---

## SEO / GEO — Estado de páginas (al 27 Abr 2026)

### Páginas de service area — todas live
| Slug | ZIP | Notas |
|---|---|---|
| `greater-heights` | 77007/08/09 | Principal zona de conversión. Reescrita con contenido local. |
| `rice-military` | 77007 | Nueva. Mayor cluster de clientes Ads. |
| `oak-forest` | 77018/92 | Nueva. Garden Oaks, clientes existentes. |
| `spring-branch` | 77080 | Zona de mayor LTV ($15k cliente). |
| `energy-corridor` | 77079 | Nueva. Corporate angle, CVR 12.2% Ads. |
| `memorial` | 77024 | Live. |
| `westchase` | 77042/77 | Nueva. Corporate housing, apartments. |
| `katy` | 77449/94 | Nueva. Cinco Ranch, Grand Pkwy. |
| `sugar-land` | 77478/79 | Nueva. First Colony, Riverstone. |
| `the-woodlands` | 77380+ | Nueva. Villages, Waterway, ExxonMobil. |
| `briar-forest` | — | Live. |
| `bellaire` | — | Live. |
| `west-university-place` | — | Live. |
| `medical-center-area` | — | Live. |
| `galleria` | — | Live (ver `/greater-uptown`). |

### Páginas de recursos — todas live
| Slug | Tema |
|---|---|
| `house-cleaning-cost-houston` | Precios y factores de costo |
| `how-often-house-cleaning-houston` | Frecuencia de limpieza |
| `deep-cleaning-houston` | Deep clean: qué es y cuándo |
| `move-in-move-out-cleaning-houston` | Move-in/out: guía completa |
| `post-construction-cleaning-houston` | Post-construcción |
| `what-is-included-house-cleaning` | Qué incluye cada servicio |

### Otras páginas clave
- `/house-cleaning-houston` — página principal del servicio (landing Ads principal)
- `/about-us` — página creada con E-E-A-T signals (equipo, experiencia)
- `/request-quote` — formulario de cotización (CTA principal, Tally embed)

---

## GEO/SEO implementado (Abril 2026)

- ✅ Schema JSON-LD centralizado (`src/config/json-ld.ts`): `LocalBusiness + CleaningService`, AggregateRating, GeoCoordinates (Katy Fwy), Review schema (5 reseñas), WebSite schema, speakable
- ✅ `public/llms.txt` — visibilidad para AI crawlers (GPTBot, ClaudeBot, Perplexity, etc.)
- ✅ `robots.txt` — permite todos los AI crawlers relevantes
- ✅ FAQ: HTML nativo `<details>/<summary>` (visible para crawlers, no JS)
- ✅ Testimonios estáticos en homepage (5 reseñas reales, server-rendered)
- ✅ Security headers en `vercel.json`
- ✅ Canonical URLs corregidas
- ✅ Breadcrumbs schema en service area pages
- ✅ BlogPosting schema en resource pages
- ✅ sameAs links (Yelp, Facebook, Instagram, GBP via env var)
- ✅ Imágenes Wikimedia Commons específicas por zona

---

## Clientes actuales — Resumen (al 27 Abr 2026)

~22 deals ganados, casi todos vía Google Ads.

**Top ZIP clusters:**
- 77024: 5 clientes (Memorial/Katy Fwy — orgánico + directo)
- 77007: 4 clientes (Rice Military — Ads)
- 77008: 2 clientes (Heights — Ads)
- 77080: 1 cliente, $15,496 LTV (Spring Branch — Ads)

**Productos más comunes**: Bi-weekly recurring, Move-In, Deep Clean

**Tasa de cierre**: ~50% (semana Apr 8-14, con Tamara East weekly $15.5k + Sarah Sneesby $4.7k)

---

## Decisiones tomadas / Aprendizajes

1. **Memorial Villages no es target online** — dinero viejo, sin búsqueda activa
2. **Heights-Rice Military es el sweet spot** — CVR más alto, perfil digital ideal
3. **77024 excluido de Ads** — funcionaba orgánico/directo, no pago. CPA $167 confirmó la exclusión.
4. **PMax sin tCPA hasta ~40-50 conversiones** — target ~$68-75
5. **No crear tercer asset group apresuradamente** — Heights tiene <4 semanas. Esperar señal clara de que es incremental antes de agregar Energy Corridor.
6. **No mostrar precios en landing de Ads** — el cliente objetivo busca confianza, no precio. Mostrar precio atrae el segmento incorrecto.
7. **El bottleneck del funnel está en CTA click rate (6%), no en el form** — form completion es 45-72%, excelente.
8. **Imágenes deben ser específicas por zona** — Wikimedia Commons, no reutilizar
9. **Testimonios deben ser server-rendered** — Trustindex JS no lo ven los crawlers

---

## Próximos pasos

### Ads
- [ ] Monitorear Heights Group performance vs Recurrent Group (semana 6-8, ~10 May)
- [ ] Cuando se llegue a 40-50 conv. totales → setear Target CPA en $68-75
- [ ] Evaluar Energy Corridor asset group después de tener datos de Heights (~10 May)
- [ ] Monitorear impacto de exclusión de 77024 en distribución de presupuesto (~1 semana)

### CRO
- [ ] Monitorear CTA click rate en `/house-cleaning-houston` en PostHog (~2 semanas, objetivo: 8-9%)
- [ ] Campaña de reviews: SMS/email post-servicio con link a Google review (objetivo: 25+ reviews)

### SEO/Orgánico
- [ ] Verificar `NEXT_PUBLIC_GBP_URL` en Vercel env vars (para sameAs schema)
- [ ] Internal linking: conectar resource pages con service area pages relevantes
- [ ] Agregar reseñas de Google a homepage cuando lleguen nuevas (actualizar REVIEWS en json-ld.ts)
