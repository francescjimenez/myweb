# francescjimenez.com

Portfolio personal de Francesc Jimenez.

Ya no es una plantilla ni un fork operativo: la base actual está adaptada al proyecto real, con contenido centralizado y una estructura más fácil de mantener sin tocar el output visual actual.

## Qué es este proyecto

Sitio de portfolio construido con Next.js App Router para mostrar colecciones fotográficas, páginas editoriales y una capa de contenido simple basada en archivos locales.

El objetivo ahora mismo es claro:
- mantener una web visualmente cuidada
- poder cambiar copy e imágenes sin pelearse con componentes
- evitar deuda típica de template reciclada

## Stack

- Next.js 16
- React 19
- Tailwind CSS 3
- Framer Motion
- next-themes
- Formspree
- React Photo Album

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run start
```

Notas:
- `npm run dev` usa `next dev --webpack`
- antes de `dev` y `build` se ejecuta la validación de imágenes

## Estructura

```txt
app/
components/
content/
lib/
public/
scripts/
```

### Content-first

La parte importante del refactor es esta:

```txt
content/
  about.ts
  collections.ts
  contact.ts
  home.ts
  showcase.ts
  site.ts
```

Aquí vive el contenido visible del sitio.

La idea es simple:
- el contenido no debería estar hardcodeado dentro de componentes animados
- cambiar textos, CTAs, navegación o imágenes no debería implicar tocar layout
- `lib/collections.ts` transforma datos; `content/collections.ts` define contenido

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir:

```txt
http://localhost:3000
```

Si ya hay otro servidor de Next levantado, puede reutilizar 3000 o saltar a otro puerto.

## Build actual

Estado esperado a día de hoy:
- `npm run lint` pasa
- `npm run build` pasa

Hay un detalle pendiente no bloqueante en el script de validación de imágenes:
- el resumen puede mostrar `Missing images: -6`
- es un bug del contador, no un fallo real de build

## Imágenes y colecciones

Las colecciones salen de la definición centralizada y de los assets dentro de `public/`.

Si cambias estructura o nombres de imágenes, revisa:

```txt
content/collections.ts
scripts/validate-images.ts
lib/collections.ts
```

## Filosofía del repo

Este repo intenta evitar tres cosas:
- parecer una demo genérica
- mezclar contenido con presentación
- arrastrar componentes muertos de UI por si acaso

Si algo no aporta al sitio real, mejor quitarlo.

## Documentación interna

Para contexto técnico del refactor:

```txt
docs/architecture-review.md
```

Ahí está resumido qué se cambió, por qué y qué quedaría como siguiente paso.
