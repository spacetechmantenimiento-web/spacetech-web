# Paginas especializadas

## Ruta activa

`app/soporte-tecnico/page.tsx` compone la vertical Tech Care mediante componentes de `components/support/`. Es un Server Component con metadata y JSON-LD propios. Equipos, configuracion de PC y el observador de visibilidad son islas cliente; el contenido restante se renderiza en servidor.

`Navbar` acepta `items` y `homeHref`. `Footer` acepta `homeHref` para regresar a secciones de la home desde paginas interiores. Sus valores predeterminados conservan el comportamiento de la home.

WhatsApp utiliza el contacto existente del sitio y mensajes contextuales. Los servicios no publican precios, tiempos garantizados ni compatibilidad universal.

## Fotografias pendientes

- `public/images/support/support-consultation.webp`
- `public/images/support/support-diagnostic.webp`

Ver `public/images/support/README.md`. La ruta se genera de manera estatica: reconstruir y desplegar despues de incorporar los archivos. En su ausencia, el Hero utiliza `public/images/space-tech-hero.png` y domicilio muestra una composicion abstracta sin solicitar archivos inexistentes.

## Siguientes verticales, sin implementar

Para `/desarrollo-web`, `/infraestructura`, `/sistemas-software` y `/equipos-reacondicionados`, seguir el mismo patron: una ruta App Router con metadata propia, componentes de dominio y estilos encapsulados. No agregar enlaces hacia rutas que todavia no existen.

El futuro catalogo de reacondicionados necesitara datos reales, fotos autorizadas, estado, disponibilidad y fichas individuales. No hay productos ni precios ficticios en esta fase.

## Validacion

`npm run lint`, `npx tsc --noEmit`, `node scripts/test-support.mjs` y `npm run build`.

Revisar los recortes con las fotos definitivas, los enlaces de WhatsApp, el menu movil, los tabs con flechas/Home/End, el acordeon nativo, reduced motion y el enlace Tech Care desde la home.
