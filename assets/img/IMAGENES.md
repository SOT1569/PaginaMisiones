# Imágenes que necesita la página

Colocá cada archivo en esta carpeta (`assets/img/`) con **exactamente** el nombre
indicado. Mientras un archivo no exista, la página muestra un marcador rayado con el
texto “imagen pendiente” en su lugar — no se rompe nada.

Formato recomendado: **JPG** optimizado (calidad ~80), ancho máximo 2000 px, peso < 400 KB.
Para las fichas de especies alcanza con 800×800 px.

## Falta (opcional)

| Archivo | Dónde aparece | Proporción | Estado |
|---|---|---|---|
| `hero-mobile.jpg` | Portada, solo en celular (pantallas ≤700px) | **1080×1920 px** (vertical, 9:16) | Mientras no esté, en celular se ve el marcador |
| `og-image.jpg` | Miniatura al compartir en redes / WhatsApp | 1200×630 px | Puede ser `hero.jpg` recortada |
| `video-portada.jpg` | Portada del reproductor de video | 16:9, ~1600 px | Si falta, usa la miniatura de YouTube |

### Sobre `hero-mobile.jpg`

La portada de celular es una imagen aparte de la de escritorio (`hero.jpg`), para
poder encuadrarla vertical en vez de recortar la panorámica del medio.

- **Tamaño: 1080 × 1920 px, vertical (formato pantalla de celular, 9:16).**
- Dejá lo más importante de la foto en el **tercio superior**: la parte de abajo
  queda más tapada por el degradado oscuro donde va el texto.
- Formato JPG; no hace falta que la optimicen ellos, yo la comprimo al subirla.
- En pantallas de más de 700px de ancho (tablet/notebook) se sigue usando
  `hero.jpg`.

## Ya están (todas las de contenido)

`hero.jpg`, `selva-paranaense.jpg`, `cataratas-iguazu.jpg`, `especie-yaguarete.jpg`,
`especie-tapir.jpg`, `especie-mono-caraya.jpg`, `especie-oso-hormiguero.jpg`,
`especie-pecari.jpg`, `especie-aguila-harpia.jpg`, `especie-tucan.jpg`,
`especie-maracana.jpg`, `especie-lapacho.jpg`, `especie-palo-rosa.jpg`,
`especie-araucaria.jpg`, `favicon.svg`.

Nota: `hero.jpg` es una versión optimizada (2000 px, ~600 KB) de `hero.png`
—el archivo original que subiste pesaba 16 MB, demasiado para una página web—.

## Ya no se usan (se pueden borrar)

`corredor-verde.jpg`, `fauna-yaguarete.jpg`, `yagua1.jpg`, `logo.png`,
`flor-ecologia.png`, `hero.png` (ya está optimizado como `hero.jpg`) — las
secciones Corredor Verde y Fauna se sacaron y el logo volvió a ser texto.

## Cómo agregar una imagen

1. Guardá el archivo en `assets/img/` con el nombre de la tabla.
2. Subí los cambios a GitHub (`git add`, `git commit`, `git push`).

## Video

Va en la sección “Video”. En `index.html`, en `<div class="video" data-youtube="">`,
poné el **ID de YouTube** (los 11 caracteres después de `watch?v=`) dentro de las
comillas. Listo.

- Antes de que el visitante haga clic no se carga nada de YouTube: solo una portada
  y un botón de play.
- Portada: subí `video-portada.jpg` (16:9, ~1600 px). Si no está, usa la miniatura
  automática de YouTube.
- El video en YouTube tiene que estar **Público o No listado** (no Privado) y con
  **"Permitir insertar" activado** (YouTube Studio → el video → *Mostrar más*). Si
  no, el reproductor da *error 153*.
- Nota: mientras se reproduce, YouTube muestra el título del video y el nombre del
  canal al pasar el mouse. Con el canal llamado "Misiones" queda prolijo.
