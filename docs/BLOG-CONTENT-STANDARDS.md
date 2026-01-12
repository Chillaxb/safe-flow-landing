# Standards de Contenu Blog Safe-Flow

Ce document définit les standards obligatoires pour tous les articles du blog Safe-Flow.

---

## Checklist Pré-Publication

**Chaque article DOIT avoir :**

- [ ] Image de couverture (1200x630px)
- [ ] 3-6 images inline (1 tous les 400-600 mots)
- [ ] Liens vers sources externes (études, vidéos, podcasts)
- [ ] Section pratique "Comment intégrer ça dans ta vie" (si applicable)
- [ ] CTA Safe-Flow contextuel en fin d'article
- [ ] Version FR et EN synchronisées

---

## 1. Images (Obligatoire)

### Standards

| Élément | Requis | Format |
|---------|--------|--------|
| Cover image | ✅ Obligatoire | 1200x630px, PNG |
| Images inline | ✅ Obligatoire | 3-6 par article |
| Captions | ✅ Obligatoire | Contextuelles, engageantes |

### Captions : Contextuel > Descriptif

**Ne pas faire :** Décrire ce que l'image montre
**Faire :** Ajouter du contexte, une réflexion, ou une anecdote liée au récit

| ❌ Mauvais (descriptif) | ✅ Bon (contextuel) |
|-------------------------|---------------------|
| "Serene meditation hall with rows of cushions" | "Vipassana c'est aussi des méditations de groupe où la patience peut être mise à rude épreuve, et en même temps l'effort collectif est gratifiant" |
| "Peaceful forest path at retreat" | "Chaque centre possède un parcours de marche paisible pour encourager la méditation et le calme. On y trouve rapidement sa routine" |
| "Person in deep meditation" | "La découverte de son schéma de réaction aux sensations est une expérience qui passe de la plénitude à l'énervement, un chemin plein de sagesse" |

**Principes :**

1. **Ajouter de la valeur** — Le caption doit enrichir l'article, pas juste décrire l'image
2. **Connecter au récit** — Lier l'image à l'expérience personnelle ou au point en cours
3. **Partager un insight** — Profiter du caption pour glisser une réflexion ou une leçon
4. **Ton personnel** — Utiliser "je", "on", "tu" plutôt qu'un ton distant
5. **Longueur flexible** — Un caption peut faire 1-2 phrases si nécessaire

**Exception :** Les images de couverture utilisent un alt text SEO standard (description de l'image pour accessibilité).

### Génération

**Outil :** Gemini 2.5 Flash Image (Nano Banana)

```bash
python scripts/generate-blog-images.py
```

**API Key :** Stockée dans `.env.local` sous `GEMINI_API_KEY`

### Placement

```markdown
# Titre

Introduction (2-3 paragraphes)...

![Description du concept principal](/images/blog/article-concept.png)

## Section 1
...
```

Voir [BLOG-IMAGES-GUIDE.md](./BLOG-IMAGES-GUIDE.md) pour détails complets.

---

## 2. Sources et Liens (Obligatoire)

### Types de liens requis

| Type d'article | Liens requis |
|----------------|--------------|
| **Science** | Études PubMed, DOI, références académiques |
| **Reviews** | Liens YouTube, Spotify, sites officiels |
| **Research** | Citations études, meta-analyses, auteurs |
| **Adventures** | Lieux, organisations, ressources mentionnées |

### Format des liens

**Études scientifiques :**
```markdown
Une étude de 2024 publiée dans *Cell Reports Medicine* ([lien](https://doi.org/...)) a montré...

## Références

1. Kox M, et al. (2014). Voluntary activation... *PNAS*, 111(20). [DOI](https://doi.org/...)
```

**Vidéos YouTube :**
```markdown
### 📺 [Titre de la vidéo](https://www.youtube.com/watch?v=XXXXX)

**Durée :** 15:32 | **Vues :** 2M+ | **Date :** Janvier 2024
```

**Podcasts :**
```markdown
### 🎙️ [Nom de l'épisode](https://open.spotify.com/episode/XXXXX)

**Podcast :** Huberman Lab | **Durée :** 2h30 | **Invité :** Dr. X
```

**Livres :**
```markdown
*Breath: The New Science of a Lost Art* par James Nestor ([Amazon](https://...) | [Site officiel](https://...))
```

### Vérification des liens

Avant publication, vérifier que tous les liens :
- Fonctionnent (pas de 404)
- Pointent vers le bon contenu
- Sont en HTTPS

### Vérification des vidéos YouTube

**Les vidéos YouTube peuvent devenir indisponibles.** Avant d'ajouter une vidéo, vérifier :

1. **Que la vidéo existe** (thumbnail disponible)
2. **Que le contenu correspond** au titre mentionné

**Commande de vérification rapide :**

```bash
# Vérifier qu'un thumbnail YouTube existe (retourne HTTP 200)
curl -sI "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg" | head -n 1

# Exemple :
curl -sI "https://img.youtube.com/vi/ulHrUVV3Kq4/maxresdefault.jpg" | head -n 1
# HTTP/2 200 = OK
# HTTP/2 404 = Vidéo supprimée ou ID incorrect
```

**Format d'intégration vidéo avec thumbnail :**

```markdown
[![Titre descriptif](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)

**[Titre complet de la vidéo](https://www.youtube.com/watch?v=VIDEO_ID)**
```

**Cas d'une vidéo indisponible :**

Si une vidéo YouTube n'est plus disponible :
1. Rechercher une alternative sur YouTube
2. Si pas de YouTube, utiliser Apple Podcasts/Spotify en backup
3. Format mixte : `**[Titre](URL_YouTube)** | [Apple Podcasts](URL_Apple)`

**Script de vérification batch :**

```bash
# Vérifier plusieurs vidéos
for id in "VIDEO_ID_1" "VIDEO_ID_2" "VIDEO_ID_3"; do
  status=$(curl -sI "https://img.youtube.com/vi/$id/maxresdefault.jpg" | head -n 1)
  echo "$id: $status"
done
```

---

## 3. Structure Article Type

### Articles Science/Research

```markdown
---
frontmatter...
---

# Titre Principal

Introduction (2-3 paragraphes, hook + contexte)

![Image concept principal](/images/blog/...)

## Le Contexte / La Recherche

### Étude 1 : [Nom]
- Méthodologie
- Résultats clés
- Limites

![Image illustrative](/images/blog/...)

## Les Mécanismes

Explication scientifique accessible...

## Implications Pratiques

![Image pratique](/images/blog/...)

## Comment Intégrer Ça Dans Ta Vie

### Étape 1 : [Action concrète]
...

### Étape 2 : [Action concrète]
...

## Références

1. [Citation formatée]
2. [Citation formatée]

---

*CTA Safe-Flow contextuel*
```

### Articles Reviews (Analyse Critique)

```markdown
---
frontmatter...
---

# Titre : Analyse Critique

Introduction + positionnement critique

![Image thématique](/images/blog/...)

## Système de Notation

| Critère | Ce qu'on évalue |
|---------|-----------------|
| Critère 1 | Description |
| ... | ... |

---

## [Contenu 1 analysé]

### 📺 [Lien direct](URL)

**Durée :** X | **Type :** Y | **Date :** Z

### À propos du créateur

| Aspect | Évaluation |
|--------|------------|
| Expertise | ✅/⚠️/❌ Détail |
| Conflits d'intérêts | ✅/⚠️/❌ Détail |

### Notation

| Critère | Note | Commentaire |
|---------|------|-------------|
| ... | ★★★★☆ | ... |

**Note globale : X.X/5**

### Points forts
- ...

### Points contestables
- ...

---

## Tableau Récapitulatif

| Contenu | Créateur | Note |
|---------|----------|------|
| ... | ... | ... |

## Recommandations par Profil

### Si tu veux [objectif]
→ **[Recommandation]**

---

*CTA Safe-Flow*
```

### Articles Adventures

```markdown
---
frontmatter...
---

# Titre (personnel, engageant)

Accroche narrative (moment fort)

![Image immersive](/images/blog/...)

## Contexte / Pourquoi

## Le Récit (chronologique ou thématique)

### [Moment 1]
...

![Image du moment](/images/blog/...)

### [Moment 2]
...

## Ce Que J'ai Appris

### Leçon 1
...

## Comment Intégrer Ça Dans Ta Vie

[Section pratique si applicable]

## Ressources

- [Lien 1]
- [Lien 2]

---

*CTA Safe-Flow*
```

---

## 4. Section Pratique (Obligatoire pour Science/Research)

Chaque article science ou research DOIT inclure une section :

### "Comment Intégrer Ça Dans Ta Vie"

**Structure :**

```markdown
## Comment Intégrer Ça Dans Ta Vie

### Étape 1 : [Première action]
Description concrète, durée, fréquence

### Étape 2 : [Deuxième action]
...

### Timeline suggérée

| Période | Action |
|---------|--------|
| Semaine 1 | ... |
| Semaine 2-3 | ... |
| Mois 2+ | ... |

### Signes de progrès

Après X semaines :
- Indicateur 1
- Indicateur 2

### Erreurs courantes à éviter

1. **Erreur** → Solution
2. **Erreur** → Solution
```

---

## 5. CTA Safe-Flow

Chaque article se termine par un CTA contextuel :

**Format :**
```markdown
---

*[Question rhétorique liée au sujet]? Safe-Flow te permet de [bénéfice spécifique lié à l'article]—[proposition de valeur unique].*
```

**Exemples :**

| Type d'article | CTA |
|----------------|-----|
| HRV | "...Safe-Flow s'intègre avec tes wearables pour te montrer l'impact de ta pratique sur ta VFC..." |
| Breathwork | "...Safe-Flow te guide avec des exercices personnalisés et mesure leur effet sur ton système nerveux..." |
| Research | "...Safe-Flow ajoute tes propres données aux recherches scientifiques..." |

---

## 6. Bilinguisme FR/EN

### Règles

1. **Contenu identique** - Même structure, mêmes images
2. **Slugs liés** - `alternateSlug` dans frontmatter
3. **Pas de traduction littérale** - Adapter le ton à la langue
4. **Mêmes sources** - Liens identiques

### Frontmatter

```yaml
# Version FR
alternateSlug: "english-slug"

# Version EN
alternateSlug: "slug-francais"
```

---

## 7. Publication

### Script de publication

```bash
python scripts/publish-articles.py --schedule
```

Voir [PUBLICATION-SCHEDULE.md](./PUBLICATION-SCHEDULE.md) pour le calendrier.

### Workflow

1. Rédiger article (FR ou EN)
2. Générer images
3. Traduire dans l'autre langue
4. Vérifier checklist
5. Définir date dans frontmatter
6. Commit + push

---

## Validation Automatique

À implémenter :
- [ ] Script de validation pre-commit
- [ ] Vérification images existantes
- [ ] Vérification liens fonctionnels
- [ ] Vérification bilinguisme
