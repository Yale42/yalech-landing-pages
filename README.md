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

El catálogo completo y el link en bio están en el repositorio `yalech-web-link-in-bio`. Los enlaces hacia allá son
relativos (`../yalech-web-link-in-bio/`): funcionan igual en tu compu y en GitHub Pages mientras todos los repos vivan bajo
la misma dirección. Solo `404.html` usa la dirección completa, porque se muestra desde cualquier ruta.

Hecho a mano: HTML, CSS y JavaScript, sin herramientas de compilación. Para verlo, abre `index.html` o sirve la carpeta con
`python3 -m http.server`.

## Al usar un ejemplo con un cliente real

1. Copia la carpeta del ejemplo a un repositorio nuevo, junto con lo que use de `assets/`.
2. Borra lo que solo sirve para mostrar el ejemplo (la barra y el script traen un comentario que lo indica):
   - el bloque `<div class="mu-barra">` del inicio del `<body>` (barra «Ejemplo ficticio · ← Más ejemplos · Quiero uno así»);
   - la línea `<script src="…/assets/muestra.js…">` y el `<link>` a `muestra.css` del `<head>`. Sin ellas, los botones de
     WhatsApp, llamar y correo vuelven a abrir de verdad.
3. Deja `assets/errores.js`: hace que los errores de los formularios se vean igual en todos lados (el campo se marca en
   rojo, el cursor salta a él, los lectores de pantalla anuncian el aviso y se quita en cuanto la persona lo corrige).
4. Cambia los datos del negocio: WhatsApp, teléfonos, correo, dirección y horario. Las etiquetas `og:` de la vista previa
   necesitan la dirección completa del sitio (`https://…/assets/og.jpg`).
   En estas plantillas también actualiza el bloque «Información para Google» del `<head>` (nombre, dirección, teléfono,
   horario e imagen con la dirección completa) y el número `WHATSAPP` del script.
5. Si agregas íconos o tipografías, corre los programas de `assets/iconos/` y `assets/fuentes/` (abajo).

## Archivos compartidos (iguales en los 7 repos)

- `assets/muestra.js` y `muestra.css` — modo muestra: en vez de abrir WhatsApp, llamar o mandar correo al número de prueba,
  enseña lo que pasaría de verdad y ofrece «Quiero uno así». También acomoda los encabezados fijos debajo de la barra de
  ejemplo. Se configura en la etiqueta `<script>` de cada ejemplo (`data-servicio`, `data-ejemplo`, `data-para`).
- `assets/errores.js` — mismo comportamiento de errores en todos los formularios (ver el paso 3).
- `assets/iconos/actualizar.py` — recorta Font Awesome a los íconos que usa este repo (de unos 400 KB a menos de 15 KB).
  Córrelo si agregas un ícono y sale un cuadrito vacío; las instrucciones están al inicio del archivo.
- `assets/fuentes/actualizar.py` — sirve las tipografías de Google desde este mismo sitio y precarga las del texto, para que
  la página no brinque al cambiar de letra. Córrelo si una página nueva trae un `<link>` a `fonts.googleapis.com`.
