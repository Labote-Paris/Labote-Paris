/* ═══════════════════════════════════════════════════════════════
   DIAGNOSTIC QUIZ — pont RevenueHunt (iframe) → panier Shopify
   Remplace l'ancien script inline de layout/theme.liquid (jQuery,
   JSON.parse sans garde, rechargement complet de la page ×2).
   Messages reçus de l'iframe RevenueHunt :
   - "add_one"     (chaîne JSON) : RH a déjà ajouté l'article → on rafraîchit le tiroir
   - "add_to_cart" (objet)       : on ajoute data[] via /cart/add.js puis on rafraîchit
   ═══════════════════════════════════════════════════════════════ */
(function () {
  var RH_ORIGIN = /^https:\/\/([a-z0-9-]+\.)*revenuehunt\.com$/;
  var SECTIONS = 'cart-drawer,cart-icon-bubble';

  function parse(data) {
    if (data && typeof data === 'object') return data;
    if (typeof data !== 'string') return null;
    try { return JSON.parse(data); } catch (e) { return null; }
  }

  function refreshCart() {
    var root = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
    return Promise.all([
      fetch(root + '?sections=' + SECTIONS).then(function (r) { return r.json(); }),
      fetch(root + 'cart.js').then(function (r) { return r.json(); })
    ]).then(function (res) {
      var sections = res[0], cart = res[1];
      var drawer = document.querySelector('cart-drawer');
      if (drawer && typeof drawer.renderContents === 'function') {
        drawer.classList.remove('is-empty');
        drawer.renderContents({ sections: sections });
      } else {
        window.location.href = root + 'cart';
      }
      // Compat apps (barre livraison offerte, cadeaux…) qui écoutaient l'ancien événement
      document.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart: cart } }));
    }).catch(function (err) { console.error('[diagnostic-quiz] refresh cart', err); });
  }

  function addItems(items) {
    if (!Array.isArray(items) || !items.length) return;
    var root = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
    fetch(root + 'cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ items: items })
    })
      .then(function (r) { return r.json(); })
      .then(refreshCart)
      .catch(function (err) { console.error('[diagnostic-quiz] add to cart', err); });
  }

  // Sécurité : tant que l'ancien script inline (jQuery 3.7.1) est encore dans layout/theme.liquid,
  // on reste passif pour éviter un double ajout au panier.
  if (document.querySelector('script[src*="ajax.googleapis.com/ajax/libs/jquery/3.7.1"]')) {
    console.warn('[diagnostic-quiz] ancien pont panier détecté dans theme.liquid : nouveau pont inactif.');
    return;
  }

  window.addEventListener('message', function (event) {
    if (!RH_ORIGIN.test(event.origin)) return;
    var msg = parse(event.data);
    if (!msg || !msg.action) return;
    if (msg.action === 'add_to_cart') addItems(msg.data);
    else if (msg.action === 'add_one') setTimeout(refreshCart, 400); // laisse RH finir son ajout
  });
})();
