# Labote — Projets Claude Code

Index des repos utilisés par l'équipe marketing Labote avec Claude Code.
Chaque repo a son propre `CLAUDE.md` à la racine — c'est le fichier qu'une
nouvelle session Claude Code charge automatiquement au démarrage, donc
n'importe qui (vous, sur un nouvel ordi, ou un collègue) retrouve le contexte
sans avoir à tout redécouvrir.

## Repos actifs

| Repo | Sert à | Statut |
|---|---|---|
| [point](https://github.com/Labote-Paris/point) | Point d'équipe marketing mensuel (Google Ads, Meta Ads, montage PPTX) | Actif |

## Projets prévus (pas encore de repo)

- SEO
- Newsletter
- Meta
- Instagram
- Consultation AI

## Convention pour un nouveau projet

Quand un nouveau sujet (Newsletter, Meta, Instagram, Consultation AI...)
devient un vrai projet Claude Code :

1. Créer un repo GitHub dédié (public par défaut, sauf raison contraire).
2. Ajouter un `CLAUDE.md` à la racine dès la première session utile, avec :
   - à quoi sert le repo, en une phrase
   - les comptes/IDs externes réutilisés (ne changent pas d'une session à l'autre)
   - comment s'authentifier à chaque API/connecteur utilisé
   - les pièges déjà rencontrés (versions d'API, conflits de dépendances...)
   - où sont stockés les secrets (GitHub Environments, jamais commités)
3. Ajouter le repo à cette liste dans ce README.
4. Si le projet a des secrets, les mettre dans un **GitHub Environment**
   nommé clairement (ex. `Google`, `Meta`), jamais dans un fichier commité.

## Pourquoi documenter comme ça

Un projet Claude Code sans repo GitHub attaché disparaît si la session
expire (les sessions cloud sont éphémères) — toujours pousser le travail
dès qu'il a de la valeur, plutôt que de le laisser seulement dans la
conversation.
