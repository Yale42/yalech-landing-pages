// Modo muestra: estas landings son plantillas de negocios ficticios, así que sus botones de
// WhatsApp y de llamar no llevan a ningún lado. Este archivo los intercepta y, en su lugar,
// enseña una ventanita con el mensaje que le llegaría al negocio y una invitación a cotizar.
//
// Uso: <script src="../assets/muestra.js" data-ejemplo="Restaurante"></script>
//   data-ejemplo → tipo de plantilla; se pasa al cotizador de la portada.
//   Los formularios llaman a window.muestra.whatsapp(mensaje) si existe.
//
// Para un cliente real: borra esa línea <script> y todo vuelve a abrir WhatsApp de verdad.
(() => {
  const yo = document.currentScript;
  const ejemplo = (yo?.dataset.ejemplo || '').replace(/[^\p{L} ]/gu, '').slice(0, 30);
  const negocio = document.title.split('·')[0].trim().slice(0, 40) || 'el negocio';

  // Estilos propios, junto a este archivo
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = new URL('muestra.css?v=1', yo.src).href;
  document.head.appendChild(css);

  const dlg = document.createElement('dialog');
  dlg.className = 'mu';
  dlg.setAttribute('aria-labelledby', 'mu-title');
  dlg.innerHTML = `
    <div class="mu-inner">
      <button type="button" class="mu-x" data-mu-close aria-label="Cerrar"><i class="fa-solid fa-xmark"></i></button>
      <p class="mu-kicker"><i class="fa-solid fa-eye"></i> Plantilla de ejemplo</p>
      <h2 class="mu-title" id="mu-title"></h2>
      <div class="mu-chat" hidden>
        <p class="mu-to"><i class="fa-brands fa-whatsapp"></i> Para: <span data-mu-negocio></span></p>
        <p class="mu-bubble"></p>
      </div>
      <p class="mu-note"></p>
      <div class="mu-actions">
        <a class="mu-btn" data-mu-cotizar href="../"><i class="fa-solid fa-bolt"></i> Quiero una así</a>
        <a class="mu-btn mu-btn--line" href="../#landing-pages">Ver más plantillas</a>
      </div>
    </div>`;
  document.body.appendChild(dlg);

  const titulo = dlg.querySelector('.mu-title');
  const chat = dlg.querySelector('.mu-chat');
  const burbuja = dlg.querySelector('.mu-bubble');
  const nota = dlg.querySelector('.mu-note');
  dlg.querySelector('[data-mu-negocio]').textContent = negocio;
  // Relativo (../?…) para que funcione aunque el sitio viva dentro de una carpeta
  const q = new URLSearchParams({ cotizar: 'landing' });
  if (ejemplo) q.set('ejemplo', ejemplo);
  dlg.querySelector('[data-mu-cotizar]').setAttribute('href', `../?${q}`);

  const abrir = (mensaje, llamada) => {
    if (llamada) {
      titulo.textContent = 'Aquí se llamaría al negocio';
      chat.hidden = true;
      nota.textContent = `En la página de un negocio real, este botón marca directo a su teléfono. ${negocio} es un negocio de ejemplo.`;
    } else {
      titulo.textContent = 'Así le llegaría este mensaje al negocio';
      chat.hidden = false;
      burbuja.textContent = String(mensaje || '').slice(0, 1200); // siempre como texto
      nota.textContent = `En un negocio real se abre WhatsApp con este mensaje ya escrito. ${negocio} es de ejemplo, por eso no se envía.`;
    }
    if (!dlg.open) dlg.showModal();
  };

  dlg.querySelectorAll('[data-mu-close]').forEach(b => b.addEventListener('click', () => dlg.close()));
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  // Enlaces de WhatsApp y de llamar dentro de la landing
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || dlg.contains(a)) return;
    const href = a.getAttribute('href');
    if (href.startsWith('tel:')) { e.preventDefault(); abrir('', true); return; }
    if (!href.startsWith('https://wa.me/')) return;
    e.preventDefault();
    let texto = '';
    try { texto = new URL(href).searchParams.get('text') || ''; } catch { /* enlace raro: sin texto */ }
    abrir(texto);
  }, true);

  window.muestra = { whatsapp: msg => abrir(msg) };
})();
