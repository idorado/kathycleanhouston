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

## Zonas target — Análisis de mercado

### Zonas de tracción real (validadas con datos de clientes)

| ZIP | Barrio | Por qué funciona |
|---|---|---|
| **77007** | Rice Military | Profesionales jóvenes, dual-income, digitalmente activos. Mayor cluster de clientes Ads. |
| **77008** | Houston Heights | Mismo perfil que 77007. Alta CVR en Google Ads (17%). |
| **77024** | Memorial / Katy Fwy | Zona de la oficina. Funciona orgánico/directo, NO en Ads (CVR 1%). |
| **77079** | Energy Corridor | Expats corporativos (BP, Shell, ConocoPhillips). CVR 15% en Ads. |
| **77080** | Spring Branch | Produjo el cliente de mayor valor ($15,496, weekly). |
| **77018/77092** | Oak Forest / Garden Oaks | Clientes existentes. Página live. |

### Zonas de largo plazo
- Sugar Land (77478/79) — Fort Bend, dual-income
- Katy / Cinco Ranch (77449/77494) — cleaners operan cerca
- The Woodlands (77380+) — corporate relocation

### Evitar para adquisición online
- River Oaks, Memorial Villages (viejo dinero, sin búsqueda activa en Google)

---

## Google Ads — Estado actual

**Campaña**: PMAX HOUSTON
- **Budget**: $60/día
- **Bidding**: Maximize Conversions (sin Target CPA — setear ~$68-75 cuando llegue a 40-50 conv. totales)
- **Targeting geográfico**: Washington Ave/Memorial Park, ZIP 77008, 77079, 77007, 77092
  - ZIP 77024 **excluido** (CVR 1.1%, $223/conv)
- **Exclusión demográfica**: 18-24 años

### Asset Groups

**1. Recurrent Group**
- Final URL: `https://kathycleanhouston.com/house-cleaning-houston`
- Audience signals: PERSONALIZADA + In-market (Home Cleaning, Professional Cleaning)

**2. Heights Group** *(creado Abril 2026)*
- Final URL: `https://kathycleanhouston.com/service-areas/greater-heights`
- Messaging: bungalows to townhomes, dual-income Heights professionals, 77007/77008

**3. Energy Corridor Group** *(pendiente de crear)*
- Final URL propuesta: `https://kathycleanhouston.com/service-areas/energy-corridor`
- Audience: corporate expats, BP/Shell/ConocoPhillips employees, 77079
- ZIP 77079 tiene CVR 15% — buen candidato para asset group propio

### Performance benchmark (Mar-Abr 2026)
- CVR promedio: 5.26% | Cost/conv: $61.39
- Mejor zona: Heights (77008) → 17% CVR, $53/conv
- Energy Corridor (77079) → 15% CVR

### Señal de alerta
Si CPC < $3 y CTR < 2%, PMax está derivando a Display/YouTube de baja intención.

---

## SEO / GEO — Estado de páginas (al 24 Abr 2026)

### Páginas de service area — todas live
| Slug | ZIP | Notas |
|---|---|---|
| `greater-heights` | 77007/08/09 | Principal zona de conversión. Reescrita con contenido local. |
| `rice-military` | 77007 | Nueva. Mayor cluster de clientes Ads. |
| `oak-forest` | 77018/92 | Nueva. Garden Oaks, clientes existentes. |
| `spring-branch` | 77080 | Zona de mayor LTV ($15k cliente). |
| `energy-corridor` | 77079 | Nueva. Corporate angle, CVR 15% Ads. |
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
- `/house-cleaning-houston` — página principal del servicio
- `/about-us` — página creada con E-E-A-T signals (equipo, experiencia)
- `/request-quote` — formulario de cotización (CTA principal)

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

## Clientes actuales — Resumen (al 23 Abr 2026)

19 deals ganados, casi todos vía Google Ads.

**Top ZIP clusters:**
- 77024: 5 clientes (Memorial/Katy Fwy — orgánico + directo)
- 77007: 4 clientes (Rice Military — Ads)
- 77008: 2 clientes (Heights — Ads)
- 77080: 1 cliente, $15,496 LTV (Spring Branch — Ads)

**Productos más comunes**: Bi-weekly recurring, Move-In, Deep Clean

---

## Decisiones tomadas / Aprendizajes

1. **Memorial Villages no es target online** — dinero viejo, sin búsqueda activa
2. **Heights-Rice Military es el sweet spot** — CVR más alto, perfil digital ideal
3. **77024 excluido de Ads** — funciona orgánico/directo, no pago
4. **PMax sin tCPA hasta ~50 conversiones** — target ~$68-75
5. **Asset group por zona** — mejor que un grupo genérico único
6. **Imágenes deben ser específicas por zona** — Wikimedia Commons, no reutilizar
7. **Testimonios deben ser server-rendered** — Trustindex JS no lo ven los crawlers

---

## Próximos pasos sugeridos

### Ads (alto impacto inmediato)
- [ ] Crear **Energy Corridor asset group** en PMax — ZIP 77079 tiene 15% CVR y ahora tiene landing page dedicada
- [ ] Monitorear Heights Group performance vs Recurrent Group (comparar en ~2 semanas)
- [ ] Cuando se llegue a 40-50 conv. totales → setear Target CPA en $68-75

### SEO/Orgánico (medio plazo)
- [ ] Verificar `NEXT_PUBLIC_GBP_URL` en Vercel env vars (para sameAs schema)
- [ ] Internal linking: conectar resource pages con service area pages relevantes
- [ ] Agregar reseñas de Google a homepage cuando lleguen nuevas (actualizar REVIEWS en json-ld.ts)

### Conversión
- [ ] A/B test: hero copy en `/house-cleaning-houston` vs `/service-areas/greater-heights`
- [ ] Revisar tasa de conversión del formulario `/request-quote`
