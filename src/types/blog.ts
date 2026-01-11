export type Category = "science" | "reviews" | "adventures" | "research"

export interface BlogPost {
    slug: string
    frontmatter: {
        title: string
        titleAlt?: string
        description: string
        date: string
        updatedAt?: string
        author: string
        category: Category
        tags: string[]
        image?: string
        imageAlt?: string
        alternateSlug?: string
        featured?: boolean
        draft?: boolean
    }
    content: string
    readingTime: string
    lang: "en" | "fr"
}

export interface CategoryInfo {
    id: Category
    en: string
    fr: string
    color: string
}

export const categories: CategoryInfo[] = [
    { id: "science", en: "Science & Research", fr: "Science & Recherche", color: "#8B5CF6" },
    { id: "reviews", en: "Reviews & Analysis", fr: "Analyses & Critiques", color: "#06B6D4" },
    { id: "adventures", en: "Adventures & Retreats", fr: "Aventures & Retraites", color: "#10B981" },
    { id: "research", en: "Studies & Papers", fr: "Études & Publications", color: "#F59E0B" },
]

export function getCategoryInfo(id: Category): CategoryInfo {
    return categories.find((c) => c.id === id) || categories[0]
}
