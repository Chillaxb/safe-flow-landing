import { getAllPosts } from "@/lib/blog"
import BlogPageContent from "./BlogPageContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog | Safe-Flow",
    description: "Science-backed insights on breathwork, meditation, and personal growth. Articles in English and French.",
}

export default async function BlogPage() {
    // Load posts for both languages
    const enPosts = await getAllPosts("en")
    const frPosts = await getAllPosts("fr")

    return <BlogPageContent enPosts={enPosts} frPosts={frPosts} />
}
