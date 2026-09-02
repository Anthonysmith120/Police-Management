# Site — Police Management

## Ce qu'il faut mettre dans le repo GitHub

Un seul fichier est nécessaire à la racine du repo :

```
Police-Management/
└── index.html
```

C'est tout. GitHub Pages cherche automatiquement un fichier nommé **`index.html`** à la racine pour afficher la page d'accueil.

## Étapes pour publier

1. Va sur ton repo `Police-Management` sur GitHub
2. Si un fichier s'appelle autre chose que `index.html` (ex. `Police`), renomme-le en `index.html`
   - Ouvre le fichier → `...` → **Rename** → tape `index.html` → **Commit changes**
3. Si le fichier n'existe pas encore, ajoute-le :
   - **Add file → Create new file** → nomme-le `index.html` → colle le contenu → **Commit changes**
4. Active GitHub Pages :
   - **Settings → Pages**
   - Sous "Source", choisis la branche `main` et le dossier `/ (root)`
   - **Save**
5. Attends 1-2 minutes, puis va sur :
   ```
   https://anthonysmith120.github.io/Police-Management/
   ```

## Modifier le contenu plus tard

Tout le texte, les couleurs et les liens sont dans le fichier `index.html` — pas besoin d'autres fichiers pour un site aussi simple. Si tu veux ajouter des images (captures d'écran de l'app, par exemple), crée un dossier `images/` à côté de `index.html` et référence-les avec `<img src="images/nom.png">`.
