// Calculateur de potentiel — met à jour le résultat quand on déplace les curseurs.
// Potentiel mensuel = ventes par jour × marge par vente × 30 jours.

const ventes = document.getElementById('ventes');
const marge = document.getElementById('marge');
const ventesValeur = document.getElementById('ventes-valeur');
const margeValeur = document.getElementById('marge-valeur');
const potentielValeur = document.getElementById('potentiel-valeur');
const potentielDetail = document.getElementById('potentiel-detail');

const euros = (n) => `${n.toLocaleString('fr-FR')} €`;

function calculer() {
  const v = Number(ventes.value);
  const m = Number(marge.value);
  ventesValeur.textContent = v;
  margeValeur.textContent = euros(m);
  potentielValeur.textContent = euros(v * m * 30);
  potentielDetail.textContent = `${v} ventes × ${euros(m)} × 30 jours`;
}

ventes.addEventListener('input', calculer);
marge.addEventListener('input', calculer);
