import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts, formatDate, getRelatedPosts } from "@/lib/blog"
import { getCategoryInfo } from "@/types/blog"
import ArticleContent from "./ArticleContent"
import type { Metadata } from "next"

interface PageProps {
    params: Promise<{ slug: string }>
}

// Generate static params for all posts
export async function generateStaticParams() {
    const enPosts = await getAllPosts("en")
    const frPosts = await getAllPosts("fr")

    const params = [
        ...enPosts.map((post) => ({ slug: post.slug })),
        ...frPosts.map((post) => ({ slug: post.slug })),
    ]

    // Remove duplicates
    const uniqueSlugs = [...new Set(params.map((p) => p.slug))]
    return uniqueSlugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params

    // Try English first, then French
    let post = await getPostBySlug(slug, "en")
    if (!post) {
        post = await getPostBySlug(slug, "fr")
    }

    if (!post) {
        return { title: "Article Not Found" }
    }

    const categoryInfo = getCategoryInfo(post.frontmatter.category)

    return {
        title: `${post.frontmatter.title} | Safe-Flow Blog`,
        description: post.frontmatter.description,
        keywords: post.frontmatter.tags,
        authors: [{ name: post.frontmatter.author }],
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            type: "article",
            publishedTime: post.frontmatter.date,
            modifiedTime: post.frontmatter.updatedAt,
            authors: [post.frontmatter.author],
            images: post.frontmatter.image ? [post.frontmatter.image] : [],
            locale: post.lang === "en" ? "en_US" : "fr_FR",
        },
        twitter: {
            card: "summary_large_image",
            title: post.frontmatter.title,
            description: post.frontmatter.description,
        },
    }
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params

    // Try to find the post in both languages
    let post = await getPostBySlug(slug, "en")
    let lang: "en" | "fr" = "en"

    if (!post) {
        post = await getPostBySlug(slug, "fr")
        lang = "fr"
    }

    if (!post) {
        notFound()
    }

    const categoryInfo = getCategoryInfo(post.frontmatter.category)
    const relatedPosts = await getRelatedPosts(slug, post.frontmatter.category, lang)

    return (
        <ArticleContent
            post={post}
            lang={lang}
            categoryInfo={categoryInfo}
            relatedPosts={relatedPosts}
        />
    )
}
