# Site — Police Management

Page web simple (un seul fichier `index.html` + un dossier `images/`) prête à héberger gratuitement avec GitHub Pages.

## Mettre le site en ligne (5 minutes)

1. Va sur [github.com](https://github.com) et crée un nouveau dépôt (**New repository**). Donne-lui un nom, par exemple `police-management-site`. Laisse-le **Public**.
2. Dans le nouveau dépôt, clique sur **Add file → Upload files**.
3. Glisse-dépose le fichier `index.html` et le dossier `images` (avec les 3 photos dedans) tels quels — garde la même structure de dossiers.
4. Clique **Commit changes**.
5. Va dans **Settings → Pages** (dans le menu de gauche).
6. Sous **Build and deployment**, choisis la branche `main` et le dossier `/ (root)`, puis **Save**.
7. Après 1–2 minutes, GitHub affiche l'adresse de ton site, du genre :
   `https://ton-nom-utilisateur.github.io/police-management-site/`

## Modifier le contenu plus tard

Tout le texte et les liens sont dans `index.html` — pas besoin d'outils spéciaux, un éditeur de texte suffit. Pour changer une image, remplace le fichier correspondant dans `images/` en gardant le même nom (`carte.jpeg`, `horaire.jpeg`, `lois.jpeg`), ou change le nom du fichier référencé dans `index.html`.

## Modifier « Prochaine mise à jour »

Le fichier `prochaine-mise-a-jour.html` contient une liste que tu modifies toi-même, sans toucher au reste du code :

1. Ouvre `prochaine-mise-a-jour.html` sur GitHub et clique le crayon (✏️) pour éditer.
2. Cherche le bloc qui commence par `var roadmap = [`.
3. Chaque élément à venir est un bloc entre `{` et `}` avec 3 champs : `titre`, `description`, `statut` (`"en-developpement"`, `"en-test"`, `"prevu"` ou `"publie"`).
4. Copie-colle un bloc existant pour en ajouter un nouveau, ou efface-en un pour le retirer.
5. Utilise des guillemets doubles `" "` (pas simples) pour éviter les problèmes avec les apostrophes françaises.
6. Commit changes — la page se met à jour automatiquement.

Le fichier contient les mêmes instructions en commentaire, directement au-dessus du bloc à modifier.

## Activer la section « Signalement urgent »

Le formulaire envoie les messages par courriel grâce à [FormSubmit](https://formsubmit.co), un service gratuit qui ne demande aucune inscription — mais il faut l'activer une fois :

1. Une fois le site en ligne, remplis et envoie le formulaire une première fois (toi-même, en test).
2. FormSubmit envoie un courriel de confirmation à **police.management@hotmail.com** avec un lien « Activate ».
3. Clique ce lien une seule fois. Tous les envois suivants arriveront directement dans la boîte de réception, sans autre étape.

Si tu veux plutôt recevoir les signalements à une autre adresse, remplace `police.management@hotmail.com` par la nouvelle adresse à deux endroits dans `index.html` : dans le `endpoint` du script en bas du fichier, et dans le texte du bas de page.

## Nom de domaine personnalisé (optionnel)

Si tu achètes un domaine (ex. `policemanagement.app`), tu peux le pointer vers GitHub Pages en ajoutant un fichier `CNAME` à la racine du dépôt contenant seulement ton domaine, puis en configurant les enregistrements DNS chez ton registraire selon [la documentation GitHub](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
