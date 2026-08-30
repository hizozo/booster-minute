// ============================================================
// 1. Calculateur de potentiel
//    Potentiel mensuel = ventes par jour × marge par vente × 30 jours.
// ============================================================

const ventes = document.getElementById('ventes');
const marge = document.getElementById('marge');
const ventesValeur = document.getElementById('ventes-valeur');
const margeValeur = document.getElementById('marge-valeur');
const potentielValeur = document.getElementById('potentiel-valeur');
const potentielDetail = document.getElementById('potentiel-detail');

const euros = (n) => `${n.toLocaleString('fr-FR')} €`;

// Colore la piste du curseur en jaune jusqu'à la position du pouce.
function peindre(slider) {
  const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background =
    `linear-gradient(to right, var(--yellow) ${pct}%, #3a3f52 ${pct}%) no-repeat 50% / 100% 6px`;
}

function calculer() {
  const v = Number(ventes.value);
  const m = Number(marge.value);
  ventesValeur.textContent = v;
  margeValeur.textContent = euros(m);
  potentielValeur.textContent = euros(v * m * 30);
  potentielDetail.textContent = `${v} ventes × ${euros(m)} × 30 jours`;
  peindre(ventes);
  peindre(marge);
}

ventes.addEventListener('input', calculer);
marge.addEventListener('input', calculer);
calculer();

// ============================================================
// 2. Menu mobile (burger)
// ============================================================

const top_ = document.querySelector('.top');
const menuBtn = document.querySelector('.menuBtn');

function fermerMenu() {
  top_.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Ouvrir le menu');
}

menuBtn.addEventListener('click', () => {
  const ouvert = top_.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(ouvert));
  menuBtn.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
});

// Le menu se referme quand on choisit une section ou avec Échap.
top_.querySelectorAll('nav a').forEach((a) =>
  a.addEventListener('click', () => setTimeout(fermerMenu, 50))
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fermerMenu();
});

// Le défilement fluide vers les ancres est natif (scroll-behavior: smooth
// dans styles.css) ; les positions tiennent compte de l'en-tête collant
// grâce à scroll-margin-top.

// ============================================================
// 3. Lien de navigation surligné selon la section visible
// ============================================================

const liensNav = [...document.querySelectorAll('.top nav a')].filter((a) =>
  a.getAttribute('href').startsWith('#')
);

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const a of liensNav) {
        const actif = a.getAttribute('href') === '#' + entry.target.id;
        a.classList.toggle('active', actif);
        if (actif) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      }
    }
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

for (const a of liensNav) {
  const section = document.querySelector(a.getAttribute('href'));
  if (section) observer.observe(section);
}
