# Imágenes que necesita la página

Colocá cada archivo en esta carpeta (`assets/img/`) con **exactamente** el nombre
indicado. Mientras un archivo no exista, la página muestra un marcador rayado con el
texto “imagen pendiente” en su lugar — no se rompe nada.

Formato recomendado: **JPG** optimizado (calidad ~80), ancho máximo 2000 px, peso < 400 KB.
Para las fichas de especies alcanza con 800×800 px.

## Faltan / hay que cambiar

| Archivo | Dónde aparece | Proporción | Estado |
|---|---|---|---|
| `hero.jpg` | Fondo de portada | 16:9 apaisada, ~2000 px | **Cambiar** por la nueva del Drive |
| `selva-paranaense.jpg` | Sección “El corazón verde de Misiones” | 16:9 apaisada | **Cambiar** por la nueva del Drive |
| `cataratas-iguazu.jpg` | Fondo de la sección “Cataratas del Iguazú” | 16:9 apaisada | **Falta** (del Drive) |
| `especie-lapacho.jpg` | Ficha de especie (flora) | 1:1 | **Falta** — lapacho negro |
| `especie-palo-rosa.jpg` | Ficha de especie (flora) | 1:1 | **Falta** — palo rosa |
| `especie-araucaria.jpg` | Ficha de especie (flora) | 1:1 | **Falta** — araucaria misionera |
| `og-image.jpg` | Miniatura al compartir en redes / WhatsApp | 1200×630 px | **Falta** (puede ser `hero.jpg` recortada) |

## Ya están

`especie-yaguarete.jpg`, `especie-tapir.jpg`, `especie-mono-caraya.jpg`,
`especie-oso-hormiguero.jpg`, `especie-pecari.jpg`, `especie-aguila-harpia.jpg`,
`especie-tucan.jpg`, `especie-maracana.jpg`, `favicon.svg`.

## Ya no se usan (se pueden borrar)

`corredor-verde.jpg`, `fauna-yaguarete.jpg`, `yagua1.jpg`, `logo.png`,
`flor-ecologia.png` — las secciones Corredor Verde y Fauna se sacaron y el logo
volvió a ser texto.

## Cómo agregar una imagen

1. Guardá el archivo en `assets/img/` con el nombre de la tabla.
2. Subí los cambios a GitHub (`git add`, `git commit`, `git push`).

## Video

Va en la sección “Video”. En `index.html`, en `<div class="video" data-youtube="">`,
poné el **ID de YouTube** (los 11 caracteres después de `watch?v=`) dentro de las
comillas. Listo.

- Antes de que el visitante haga clic no se ve nada de YouTube: solo una portada y
  un botón de play.
- Portada: subí `video-portada.jpg` (16:9, ~1600 px). Si no está, usa la miniatura
  automática de YouTube.
- Nota: cuando el video ya está reproduciéndose, YouTube muestra el título y el
  nombre del canal arriba al pasar el mouse. Eso no se puede sacar de un embed de
  YouTube. Si hace falta que no aparezca **nada** del que subió, usar Vimeo.
