#!/usr/bin/env python3
"""
Script de planification des publications d'articles de blog.

Usage:
    python scripts/schedule-publications.py --preview          # Voir le planning actuel
    python scripts/schedule-publications.py --schedule         # Appliquer le planning
    python scripts/schedule-publications.py --foundational     # Publier les 5 articles fondamentaux aujourd'hui
"""

import os
import re
import argparse
from datetime import datetime, timedelta
from pathlib import Path

# Configuration
BLOG_DIR = Path("/Users/axb/safe-flow-landing/src/content/blog")
POSTS_PER_WEEK = 3  # Nombre d'articles par semaine après le lancement

# Articles fondamentaux (à publier au lancement)
FOUNDATIONAL_ARTICLES = [
    "wim-hof-method-science",      # Science
    "huberman-breathing-episodes",  # Reviews
    "vipassana-retreat-experience", # Adventures
    "slow-breathing-vs-medication", # Research
    "hrv-explained",                # Science (HRV = Safe-Flow)
]

# Ordre de publication pour les articles restants (par priorité SEO)
PUBLICATION_ORDER = [
    # Semaine 2
    "stanford-cyclic-sighing-study",
    "polyvagal-theory-simplified",
    "best-wim-hof-youtube",
    # Semaine 3
    "breathwork-anxiety-clinical-trials",
    "cold-exposure-immunity-research",
    "box-breathing-navy-seal",
    # Semaine 4
    "james-nestor-breath-review",
    "vagal-tone-superpower",
    "ice-bath-alps-training",
    # Semaine 5
    "oxygen-advantage-review",
    "30-day-breathwork-challenge",
    "meditation-apps-compared",
    # Semaine 6
    "breathwork-himalayas-altitude",
    "sacred-breathwork-ceremonies",
]


def get_article_info(filepath: Path) -> dict:
    """Extrait les infos du frontmatter d'un article."""
    content = filepath.read_text(encoding='utf-8')

    # Extraire le frontmatter
    match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return None

    frontmatter = match.group(1)

    # Parser les champs
    info = {"path": filepath}

    title_match = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
    if title_match:
        info["title"] = title_match.group(1)

    date_match = re.search(r'^date:\s*["\']?(\d{4}-\d{2}-\d{2})["\']?\s*$', frontmatter, re.MULTILINE)
    if date_match:
        info["date"] = date_match.group(1)

    category_match = re.search(r'^category:\s*["\']?(.+?)["\']?\s*$', frontmatter, re.MULTILINE)
    if category_match:
        info["category"] = category_match.group(1)

    featured_match = re.search(r'^featured:\s*(true|false)', frontmatter, re.MULTILINE)
    if featured_match:
        info["featured"] = featured_match.group(1) == "true"

    return info


def update_article_date(filepath: Path, new_date: str) -> bool:
    """Met à jour la date d'un article."""
    content = filepath.read_text(encoding='utf-8')

    # Remplacer la date
    new_content = re.sub(
        r'^(date:\s*["\']?)\d{4}-\d{2}-\d{2}(["\']?\s*)$',
        f'\\g<1>{new_date}\\2',
        content,
        flags=re.MULTILINE
    )

    if new_content != content:
        filepath.write_text(new_content, encoding='utf-8')
        return True
    return False


def get_all_articles() -> dict:
    """Récupère tous les articles EN (référence principale)."""
    articles = {}
    en_dir = BLOG_DIR / "en"

    for filepath in en_dir.glob("*.mdx"):
        slug = filepath.stem
        info = get_article_info(filepath)
        if info:
            info["slug"] = slug
            # Trouver la version FR correspondante
            fr_path = BLOG_DIR / "fr" / f"{slug.replace('-en', '')}.mdx"
            # Chercher par alternateSlug
            for fr_file in (BLOG_DIR / "fr").glob("*.mdx"):
                fr_content = fr_file.read_text(encoding='utf-8')
                if f'alternateSlug: "{slug}"' in fr_content or f"alternateSlug: '{slug}'" in fr_content:
                    info["fr_path"] = fr_file
                    break
            articles[slug] = info

    return articles


def generate_schedule(start_date: datetime) -> list:
    """Génère le calendrier de publication."""
    schedule = []

    # Jour 1 : Articles fondamentaux
    for slug in FOUNDATIONAL_ARTICLES:
        schedule.append({
            "slug": slug,
            "date": start_date,
            "phase": "Lancement"
        })

    # Semaines suivantes : 3 articles par semaine (Lun, Mer, Ven)
    current_date = start_date + timedelta(days=7)  # Commencer semaine suivante
    week_days = [0, 2, 4]  # Lundi, Mercredi, Vendredi
    day_index = 0

    for slug in PUBLICATION_ORDER:
        # Trouver le prochain jour de publication
        while current_date.weekday() != week_days[day_index % 3]:
            current_date += timedelta(days=1)

        schedule.append({
            "slug": slug,
            "date": current_date,
            "phase": f"Semaine {((current_date - start_date).days // 7) + 1}"
        })

        day_index += 1
        if day_index % 3 == 0:
            # Passer à la semaine suivante
            current_date += timedelta(days=3)

    return schedule


def preview_schedule(articles: dict, schedule: list):
    """Affiche un aperçu du calendrier."""
    print("\n" + "=" * 70)
    print("📅 CALENDRIER DE PUBLICATION")
    print("=" * 70)

    current_phase = None
    for item in schedule:
        if item["phase"] != current_phase:
            current_phase = item["phase"]
            print(f"\n### {current_phase}")
            print("-" * 40)

        slug = item["slug"]
        date_str = item["date"].strftime("%Y-%m-%d (%a)")

        if slug in articles:
            title = articles[slug].get("title", slug)[:50]
            category = articles[slug].get("category", "?")
            print(f"  {date_str} | [{category:10}] {title}")
        else:
            print(f"  {date_str} | [???] {slug} (non trouvé)")

    print("\n" + "=" * 70)
    print(f"Total: {len(schedule)} articles")
    print("=" * 70)


def apply_schedule(articles: dict, schedule: list, dry_run: bool = False):
    """Applique le calendrier aux articles."""
    print("\n" + "=" * 70)
    print("🚀 APPLICATION DU CALENDRIER" + (" (DRY RUN)" if dry_run else ""))
    print("=" * 70)

    updated = 0
    errors = 0

    for item in schedule:
        slug = item["slug"]
        new_date = item["date"].strftime("%Y-%m-%d")

        if slug not in articles:
            print(f"❌ Article non trouvé: {slug}")
            errors += 1
            continue

        article = articles[slug]
        old_date = article.get("date", "???")

        if old_date == new_date:
            print(f"✓ {slug}: déjà à {new_date}")
            continue

        if dry_run:
            print(f"📝 {slug}: {old_date} → {new_date}")
        else:
            # Mettre à jour EN
            if update_article_date(article["path"], new_date):
                print(f"✅ EN: {slug}: {old_date} → {new_date}")
                updated += 1

            # Mettre à jour FR si existe
            if "fr_path" in article:
                if update_article_date(article["fr_path"], new_date):
                    print(f"✅ FR: {article['fr_path'].stem}: → {new_date}")

    print("\n" + "-" * 40)
    print(f"Mis à jour: {updated} | Erreurs: {errors}")

    if not dry_run and updated > 0:
        print("\n⚠️  N'oublie pas de commit les changements:")
        print("    git add src/content/blog/")
        print("    git commit -m 'Schedule blog publications'")


def main():
    parser = argparse.ArgumentParser(description="Planification des publications blog")
    parser.add_argument("--preview", action="store_true", help="Aperçu du calendrier")
    parser.add_argument("--schedule", action="store_true", help="Appliquer le calendrier")
    parser.add_argument("--dry-run", action="store_true", help="Simuler sans modifier")
    parser.add_argument("--start-date", type=str, help="Date de début (YYYY-MM-DD)",
                        default=datetime.now().strftime("%Y-%m-%d"))
    parser.add_argument("--foundational", action="store_true",
                        help="Publier uniquement les 5 articles fondamentaux aujourd'hui")

    args = parser.parse_args()

    # Parser la date de début
    start_date = datetime.strptime(args.start_date, "%Y-%m-%d")

    # Récupérer tous les articles
    print("📂 Lecture des articles...")
    articles = get_all_articles()
    print(f"   Trouvé: {len(articles)} articles EN")

    # Générer le calendrier
    if args.foundational:
        schedule = [{"slug": s, "date": start_date, "phase": "Lancement"}
                    for s in FOUNDATIONAL_ARTICLES]
    else:
        schedule = generate_schedule(start_date)

    # Actions
    if args.preview or (not args.schedule and not args.foundational):
        preview_schedule(articles, schedule)

    if args.schedule or args.foundational:
        apply_schedule(articles, schedule, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
