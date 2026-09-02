# Misiones · Naturaleza que trasciende fronteras

Landing page institucional sobre la conservación de la biodiversidad en la provincia
de Misiones (Selva Paranaense, Corredor Verde, Áreas Naturales Protegidas y fauna
silvestre).

## Stack

HTML + CSS + JavaScript, sin framework ni build. Se sirve tal cual con GitHub Pages.

```
index.html              Página completa (una sola vista)
assets/css/styles.css   Estilos
assets/js/main.js       Menú móvil, contadores, animaciones, marcadores de imagen, mapa
assets/img/             Imágenes (ver assets/img/IMAGENES.md)
assets/vendor/leaflet/  Librería Leaflet 1.9.4 (mapa interactivo), servida localmente
```

## Mapa

La sección "Misiones en el mapa" usa [Leaflet](https://leafletjs.com/) (incluido en
`assets/vendor/leaflet/`, sin CDN). Los mosaicos vienen de OpenStreetMap en tiempo
real. Para tráfico alto conviene pasar a un proveedor con plan pago (MapTiler, Carto,
Stadia) cambiando la URL del `L.tileLayer` en `assets/js/main.js`.

## Ver en local

Abrí `index.html` en el navegador, o levantá un servidor estático:

```bash
python -m http.server 8000
```

Luego entrá a http://localhost:8000

## Publicar con GitHub Pages

1. Subir los cambios a la rama `main`.
2. En GitHub: **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**. Branch: **main** / carpeta **/ (root)**. Guardar.
4. En 1–2 minutos queda publicada en
   `https://sot1569.github.io/PaginaMisiones/`

## Imágenes

Todavía faltan las fotos definitivas. La página funciona igual: donde falta una
imagen se muestra un marcador. La lista completa de archivos necesarios, con
tamaños y contenido sugerido, está en [`assets/img/IMAGENES.md`](assets/img/IMAGENES.md).

## Tipografías

- Títulos: **Fraunces** (serif institucional)
- Texto: **Source Sans 3**

Se cargan desde Google Fonts y se pueden cambiar en un solo lugar: las variables
`--font-display` y `--font-body` al inicio de `assets/css/styles.css`.

## Paleta

Verdes tomados del sitio de referencia *Adoptá un árbol*. Definidos como variables
CSS (`--verde-oscuro`, `--verde-medio`, `--verde-claro`, etc.) al inicio de la hoja
de estilos.

## Contenido

El texto proviene del documento oficial de la provincia (`info p pagina.pdf`).
