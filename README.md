# yalech · landing pages

Muestrario de plantillas de landing pages de Yael González (@yalech). Cada ejemplo es un negocio ficticio, vive en su
carpeta y se puede ver en vivo. Para un cliente real, copia la carpeta de la plantilla que eligió a un repositorio nuevo:

- `curso/` — curso en línea (antes y después, temario, inscripción)
- `festival/` — festival de música (cuenta regresiva, cartel, boletos)
- `ceramica/` — tienda de cerámica (colección limitada, piezas que quedan)
- `restaurante/` — restaurante mexicano (menú por pestañas, abierto/cerrado en vivo, reservas por WhatsApp)
- `dental/` — consultorio dental (precios, primera cita, agenda por WhatsApp)
- `inmobiliaria/` — desarrollo de casas (galería, modelos, calculadora de mensualidad, visitas)

Otros archivos:

- `index.html` y `estilos.css` — portada con los ejemplos (mismo estilo que el catálogo principal).
- `assets/motion.js` — efectos al bajar. `assets/cotizar.js` / `cotizar.css` — cotizador en 1 minuto (tu número de WhatsApp está al inicio de `cotizar.js`).
- `assets/plantillas/` — capturas que usa la portada (si cambias un ejemplo, vuelve a tomar la suya).
- `assets/carrusel.js` / `carrusel.css` — flechas, puntitos y una «probadita» para que se note que los ejemplos se deslizan en celular.
- `404.html` — página de error. `_headers` — encabezados de seguridad (Netlify o Cloudflare Pages).

El catálogo completo y el link en bio están en el repositorio `yalech-web-link-in-bio`. Los enlaces hacia allá usan
`https://yale42.github.io/yalech-web-link-in-bio/`: cámbialos por tu dominio cuando lo tengas (por ejemplo `https://yalech.com/`).

Hecho a mano: HTML, CSS y JavaScript, sin herramientas de compilación. Para verlo, abre `index.html` o sirve la carpeta con
`python3 -m http.server`.
