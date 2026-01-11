import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import type { BlogPost, Category } from "@/types/blog"

const CONTENT_PATH = path.join(process.cwd(), "src/content/blog")

export async function getAllPosts(lang: "en" | "fr"): Promise<BlogPost[]> {
    const postsDirectory = path.join(CONTENT_PATH, lang)

    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)

    const posts = fileNames
        .filter((fn) => fn.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "")
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, "utf8")
            const { data, content } = matter(fileContents)

            return {
                slug,
                frontmatter: data as BlogPost["frontmatter"],
                content,
                readingTime: readingTime(content).text,
                lang,
            } as BlogPost
        })
        .filter((post) => !post.frontmatter.draft)
        .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

    return posts
}

export async function getPostBySlug(slug: string, lang: "en" | "fr"): Promise<BlogPost | null> {
    const fullPath = path.join(CONTENT_PATH, lang, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
        return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
        slug,
        frontmatter: data as BlogPost["frontmatter"],
        content,
        readingTime: readingTime(content).text,
        lang,
    }
}

export async function getPostsByCategory(category: Category, lang: "en" | "fr"): Promise<BlogPost[]> {
    const allPosts = await getAllPosts(lang)
    return allPosts.filter((post) => post.frontmatter.category === category)
}

export async function getFeaturedPosts(lang: "en" | "fr", limit: number = 3): Promise<BlogPost[]> {
    const allPosts = await getAllPosts(lang)
    const featured = allPosts.filter((post) => post.frontmatter.featured)

    if (featured.length >= limit) {
        return featured.slice(0, limit)
    }

    // If not enough featured posts, fill with recent ones
    const remaining = allPosts.filter((post) => !post.frontmatter.featured)
    return [...featured, ...remaining].slice(0, limit)
}

export async function getRelatedPosts(currentSlug: string, category: Category, lang: "en" | "fr", limit: number = 3): Promise<BlogPost[]> {
    const categoryPosts = await getPostsByCategory(category, lang)
    return categoryPosts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}

export async function getAllSlugs(lang: "en" | "fr"): Promise<string[]> {
    const posts = await getAllPosts(lang)
    return posts.map((post) => post.slug)
}

export function formatDate(dateString: string, lang: "en" | "fr"): string {
    const date = new Date(dateString)
    return date.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}
