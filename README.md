# yalech · landing pages

Muestrario de plantillas de landing pages de Yael González (@yalech). Cada ejemplo es un negocio ficticio, vive en su
carpeta y se puede ver en vivo. Para un cliente real, copia la carpeta de la plantilla que eligió a un repositorio nuevo:

- `curso/` — curso en línea (antes y después, temario, inscripción con grupo y forma de pago)
- `festival/` — festival de música (cuenta regresiva, cartel, pedido de boletos con total)
- `ceramica/` — tienda de cerámica (colección limitada, piezas que quedan, bolsa de compra)
- `restaurante/` — restaurante mexicano (menú por pestañas, abierto/cerrado en vivo, reservas por WhatsApp)
- `dental/` — consultorio dental (precios, primera cita, agenda por WhatsApp)
- `inmobiliaria/` — desarrollo de casas (galería, modelos, calculadora de mensualidad, visitas)
- `gimnasio/` — gimnasio funcional (horario de clases por día, planes mensual/anual, clase de prueba gratis)
- `barberia/` — barbería clásica (arma tu servicio con total y duración, barberos, agenda con horarios libres)
- `plomeria/` — servicio a domicilio (¿llegamos a tu colonia?, cotizador con cargos por zona y horario, urgencias 24 h).
  Sirve igual para electricistas, técnicos o limpieza: los datos están al inicio del script

Otros archivos:

- `index.html` y `estilos.css` — portada con los ejemplos (mismo estilo que el catálogo principal).
- `assets/motion.js` — efectos al bajar. `assets/cotizar.js` / `cotizar.css` — cotizador en 1 minuto (tu número de WhatsApp está al inicio de `cotizar.js`).
- `assets/muestra.js` / `muestra.css` — modo muestra: como los negocios son ficticios, los botones de WhatsApp y de llamar
  enseñan el mensaje que le llegaría al negocio y un botón «Quiero una así» que abre el cotizador de la portada.
  **Para un cliente real, borra la línea `<script src="../assets/muestra.js" …>`** y todo vuelve a abrir WhatsApp de verdad.
- `assets/iconos/` — íconos de Font Awesome recortados a los que se usan (9 KB en vez de ~260 KB). Si agregas un ícono
  nuevo y sale un cuadrito vacío, corre `assets/iconos/actualizar.py` (las instrucciones están dentro).
- `assets/og.jpg` — imagen al compartir la portada.
- `assets/plantillas/` — capturas que usa la portada (si cambias un ejemplo, vuelve a tomar la suya).
- `assets/carrusel.js` / `carrusel.css` — flechas, puntitos y una «probadita» para que se note que los ejemplos se deslizan en celular.
- Filtro de la portada: cada plantilla lleva `data-tipo="vender"` o `"agendar"`. Puedes compartir la portada ya
  filtrada con `?tipo=vender` o `?tipo=agendar`.
- `404.html` — página de error. `_headers` — encabezados de seguridad (Netlify o Cloudflare Pages).

El catálogo completo y el link en bio están en el repositorio `yalech-web-link-in-bio`. Los enlaces hacia allá usan
`https://yale42.github.io/yalech-web-link-in-bio/`: cámbialos por tu dominio cuando lo tengas (por ejemplo `https://yalech.com/`).

Hecho a mano: HTML, CSS y JavaScript, sin herramientas de compilación. Para verlo, abre `index.html` o sirve la carpeta con
`python3 -m http.server`.
