# francescjimenez.com

Código de la web personal de Francesc Jimenez: una web editorial para mostrar colecciones fotográficas, piezas visuales y páginas de presentación sin depender de un CMS.

La idea del proyecto no es solo enseñar imágenes, sino mantener una base simple y controlable para publicar colecciones con una estructura consistente y evitar errores típicos de contenido roto antes de levantar `dev` o generar `build`.

## Qué hace

- publica colecciones fotográficas desde contenido y assets locales
- genera páginas como Home, About, Showcase y Contact sobre la misma base visual
- mantiene una estructura pensada para seguir iterando contenido sin pelearse con la UI
- valida automáticamente que las imágenes esperadas existen antes de arrancar o compilar

## Scripts principales

### `npm run dev`
Arranca el entorno local con Next.js usando webpack.

Antes de levantar el servidor ejecuta una validación de imágenes para detectar colecciones incompletas o nombres de archivo incorrectos.

### `npm run build`
Genera la build de producción.

Igual que en desarrollo, primero ejecuta la validación de imágenes para evitar builds aparentemente correctas con assets rotos.

### `npm run lint`
Pasa ESLint sobre el proyecto.

### `npm run start`
Sirve la build de producción ya generada.

## Validación de imágenes

Este es uno de los puntos más importantes del proyecto.

El repo no trata las imágenes como un detalle manual “a revisar luego”. Antes de `dev` y `build`, el script `scripts/validate-images.ts` comprueba que cada colección tenga:

- su carpeta esperada en `public/`
- su imagen de portada
- el número esperado de imágenes por colección
- los formatos esperados según cada colección

Eso reduce bastante el riesgo de:
- galerías incompletas
- portadas rotas
- nombres inconsistentes entre contenido y assets
- subir una colección medio válida que falla ya en runtime

## Ejecutar

```bash
npm install
npm run dev
```

## Nota

El proyecto usa `npm` y su lockfile canónico es `package-lock.json`.
