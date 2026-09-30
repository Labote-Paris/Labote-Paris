# Diagnostic quiz — refresh visuel (charte 2026)

Page : https://labote.com/pages/diagnostic-quiz · quiz RevenueHunt `AoH66Bo` (iframe).
Règle : **habillage uniquement** — aucun texte, produit ni algorithme du quiz n'est modifié.

## Thème Shopify (DEV)
Thème `Diagnostic refresh (DEV) — ne pas publier` (`gid://shopify/OnlineStoreTheme/186354893013`),
dupliqué le 30/09/2026 depuis le live « Robin - Home Antiox + slide Sur-mesure ».

| Fichier | Rôle |
|---|---|
| `theme/sections/diagnostic-hero.liquid` | Intro native : H1 Copperplate « Diagnostic de peau » (tokens `--ax-*`) |
| `theme/sections/diagnostic-quiz-embed.liquid` | Conteneur du widget RevenueHunt sans hauteur fixe 600 px |
| `theme/assets/diagnostic-quiz.css` | Styles des deux sections |
| `theme/assets/diagnostic-quiz.js` | Pont panier iframe → Shopify, sans jQuery, contrôle d'origine, Section Rendering API |
| `theme/templates/page.diagnostic-quiz.json` | Template : intro + quiz (sections Lorem ipsum désactivées supprimées) |
| `theme/layout/theme.liquid` | Ancien script inline (jQuery + 2 listeners) retiré |

Mise en ligne : **ne pas publier le thème DEV** (le live est modifié par d'autres). Copier seulement
ces fichiers dans le thème live, en re-faisant l'édition de `theme.liquid` sur sa version du moment.

## RevenueHunt
`revenuehunt-custom.css` → Quiz Builder → Quiz Design → Custom CSS. Réglages Design associés :
police DM Sans, couleur principale `#071d49`, texte `#141414`, fond `#ffffff`, rayon des boutons 0,
format de prix FR. Travailler sur une copie du quiz puis changer l'ID dans la section « Diagnostic — quiz ».
