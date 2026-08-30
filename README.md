# Booster Minute

Site vitrine one-page : distributeurs automatiques de cartes à collectionner.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Toute la page, section par section (héro, concept, calculateur, machine, tarifs, FAQ, contact) |
| `styles.css` | Reset + styles du site, commentés par section. Palette dans `:root` en tête de fichier |
| `script.js` | Calculateur de potentiel, menu mobile (burger), lien de section actif dans la navigation |
| `machines/` | Photos des distributeurs |
| `_original-build/` | Archive du build d'origine récupéré de ChatGPT Codex (non publié) |

Aucune dépendance, aucun build : du HTML, du CSS et du JavaScript natifs.

## Lancer en local

```bash
python3 -m http.server 4173
```

Puis ouvrir <http://localhost:4173>. (Un simple double-clic sur `index.html` fonctionne aussi, les chemins étant relatifs.)

## Modifier

- **Couleurs** : variables `--blue`, `--yellow`, `--pink`, `--coral`, `--ink`, `--paper` en tête de `styles.css`.
- **Textes et tarifs** : directement dans `index.html`, chaque section est balisée par un commentaire `<!-- ===== … ===== -->`.
- **Responsive** : media queries à la fin de `styles.css` (≤ 1100 px, ≤ 900 px, ≤ 560 px).

## Mise en ligne

Hébergé gratuitement sur GitHub Pages : chaque `git push` sur `main` republie le site.
