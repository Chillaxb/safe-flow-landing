# Guide des Images pour Articles de Blog

## Objectif

Les images dans les articles de blog servent à :
- **Illustrer visuellement** les concepts clés
- **Rythmer la lecture** (éviter les "murs de texte")
- **Améliorer le SEO** (alt text, contexte visuel)
- **Augmenter l'engagement** sur les réseaux sociaux

---

## Types d'Images

### 1. Image de Couverture (Cover)

**Emplacement :** Frontmatter de l'article
```yaml
image: "/images/blog/covers/nom-article.png"
```

**Caractéristiques :**
- Format recommandé : 1200x630px (ratio 1.91:1 - optimal pour partage social)
- Style : Illustration conceptuelle, pas de photo stock générique
- Doit représenter le sujet de l'article de manière évocatrice

**Utilisation :** Open Graph, preview dans la liste d'articles, partage social

### 2. Images Inline (dans le contenu)

**Syntaxe Markdown :**
```markdown
![Texte alt descriptif](/images/blog/nom-image.png)
```

**Placement stratégique :**
- Après l'introduction (avant le premier H2)
- Entre les sections majeures (tous les 300-500 mots)
- Pour illustrer un concept technique
- Pour ponctuer un changement de sujet

---

## Fréquence des Images

| Longueur article | Nombre d'images inline recommandé |
|------------------|-----------------------------------|
| < 1000 mots | 1-2 images |
| 1000-2000 mots | 2-4 images |
| 2000-3000 mots | 4-6 images |
| > 3000 mots | 6-8 images |

**Règle générale :** Une image tous les 400-600 mots environ.

---

## Où Placer les Images

### Points stratégiques :

1. **Après l'intro** - Capturer l'attention avant le contenu principal
2. **Avant chaque section majeure** - Préparer visuellement le lecteur
3. **Pour illustrer un concept complexe** - Schémas, diagrammes
4. **Avant la conclusion** - Rappeler visuellement le sujet principal

### Exemple de structure :

```markdown
# Titre de l'article

Introduction...

![Image après intro - concept principal](/images/blog/concept-principal.png)

## Section 1

Contenu...

![Image illustrant le point clé de la section 1](/images/blog/section-1.png)

## Section 2

Contenu...

## Section 3

Contenu...

![Image illustrant le point clé de la section 3](/images/blog/section-3.png)

## Conclusion

Contenu...
```

---

## Génération des Images

### Outil : Gemini 2.5 Flash Image (Nano Banana)

**API Endpoint :**
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent
```

**Script de génération :** `/scripts/generate-blog-images.py`

### Prompts Efficaces

**Structure de prompt :**
```
Generate a [style] image showing [sujet principal].
The image should convey [émotion/concept].
Style: [clean, minimal, professional, warm, scientific].
No text in the image.
```

**Exemples par type d'article :**

| Type | Style recommandé | Exemples de prompts |
|------|-----------------|---------------------|
| Scientifique | Propre, diagrammatique | "A clean scientific illustration of the vagus nerve pathway..." |
| Tutoriel | Étape par étape | "A person demonstrating proper breathing posture..." |
| Review | Conceptuel | "A person watching educational content on a screen..." |
| Aventure | Photographique | "A person practicing breathwork in mountain setting..." |

### Configuration API

```python
payload = {
    "contents": [{
        "parts": [{
            "text": f"Generate a high-quality illustration..."
        }]
    }],
    "generationConfig": {
        "responseModalities": ["image", "text"]
    }
}
```

---

## Organisation des Fichiers

```
/public/images/blog/
├── covers/                    # Images de couverture (1200x630)
│   ├── article-slug.png
│   └── ...
├── [inline images]           # Images dans les articles
│   ├── concept-illustration.png
│   ├── technique-demo.png
│   └── ...
```

**Convention de nommage :**
- Covers : `covers/[slug-article].png`
- Inline : `[slug-article]-[description-courte].png`
- Tout en minuscules, tirets au lieu d'espaces

---

## Texte Alt (Accessibilité & SEO)

**Règles :**
- Descriptif (pas "image 1")
- Inclure les mots-clés pertinents
- Maximum 125 caractères

**Bon exemple :**
```markdown
![Le système nerveux autonome - plus complexe qu'un simple interrupteur](/images/blog/polyvagal-nervous-system.png)
```

**Mauvais exemple :**
```markdown
![Image](/images/blog/image1.png)
```

---

## Checklist Images Article

Avant publication :

- [ ] Image de couverture définie dans le frontmatter
- [ ] 3-6 images inline placées stratégiquement
- [ ] Tous les alt texts sont descriptifs
- [ ] Les images existent dans `/public/images/blog/`
- [ ] Les images sont optimisées (< 500KB par image)
- [ ] Les images correspondent au contenu environnant
- [ ] Version FR et EN utilisent les mêmes images

---

## Script de Génération

**Emplacement :** `/scripts/generate-blog-images.py`

**Usage :**
```bash
python scripts/generate-blog-images.py
```

**Variables à configurer :**
```python
API_KEY = "votre_api_key_gemini"
OUTPUT_DIR = "/path/to/public/images/blog"

# Liste des images à générer
IMAGES = [
    {
        "filename": "concept-illustration.png",
        "prompt": "A clear illustration showing..."
    },
    ...
]
```

---

## Exemples d'Articles Bien Illustrés

### Référence : `cold-exposure-immunity-research.mdx`

Images utilisées :
1. `cold-radboud-study.png` - Après intro, illustre l'étude principale
2. `cold-shower-morning.png` - Milieu d'article, pratique concrète
3. `cold-practice-safe.png` - Avant section pratique

### Structure visuelle :
```
[Intro]
📷 Image 1 - Étude scientifique
[Sections théoriques]
📷 Image 2 - Pratique en action
[Sections mécanismes]
📷 Image 3 - Guide pratique
[Conclusion + CTA]
```

---

## Maintenance

### Vérifier les images manquantes :
```bash
# Lister les images référencées dans les articles
grep -r "!\[" src/content/blog/ | grep -oE '/images/blog/[^)]+' | sort | uniq

# Comparer avec les fichiers existants
ls public/images/blog/
```

### Optimisation des images :
- Utiliser WebP si possible
- Compression sans perte
- Dimensions max : 1600px de large
- Taille cible : < 300KB
