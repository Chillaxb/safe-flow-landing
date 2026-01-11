"use client"

import React, { useState, useEffect } from "react"
import { categories, type Category, type BlogPost } from "@/types/blog"
import ArticleCard from "@/components/blog/ArticleCard"

const colors = {
    primary: "#8B5CF6",
    secondary: "#06B6D4",
    textDark: "#0F0F1A",
    textMuted: "#64748b",
    white: "#ffffff",
    background: "#f9fafb",
}

interface BlogPageContentProps {
    enPosts: BlogPost[]
    frPosts: BlogPost[]
}

export default function BlogPageContent({ enPosts, frPosts }: BlogPageContentProps) {
    const [language, setLanguage] = useState<"en" | "fr">("en")
    const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all")

    useEffect(() => {
        const savedLang = localStorage.getItem("safe-flow-lang") as "en" | "fr" | null
        if (savedLang) setLanguage(savedLang)
    }, [])

    const content = {
        en: {
            title: "Blog",
            subtitle: "Science-backed insights on breathwork, meditation, and personal growth.",
            all: "All",
            noArticles: "No articles yet. Check back soon!",
        },
        fr: {
            title: "Blog",
            subtitle: "Insights scientifiques sur le breathwork, la méditation et le développement personnel.",
            all: "Tous",
            noArticles: "Pas encore d'articles. Revenez bientôt !",
        },
    }

    const t = content[language]
    const posts = language === "en" ? enPosts : frPosts

    const filteredPosts = selectedCategory === "all" ? posts : posts.filter((post) => post.frontmatter.category === selectedCategory)

    return (
        <div style={{ width: "100%", background: colors.white }}>
            {/* Hero Section */}
            <section
                style={{
                    padding: "80px 48px 60px",
                    background: `linear-gradient(135deg, ${colors.primary}08, ${colors.secondary}08)`,
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h1
                        style={{
                            fontSize: "clamp(36px, 5vw, 48px)",
                            fontWeight: 700,
                            color: colors.textDark,
                            marginBottom: "16px",
                        }}
                    >
                        {t.title}
                    </h1>
                    <p
                        style={{
                            fontSize: "18px",
                            color: colors.textMuted,
                            lineHeight: 1.6,
                        }}
                    >
                        {t.subtitle}
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section style={{ padding: "32px 48px", background: colors.white, borderBottom: "1px solid #e2e8f0" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        <button
                            onClick={() => setSelectedCategory("all")}
                            style={{
                                padding: "10px 20px",
                                borderRadius: "20px",
                                border: "none",
                                background: selectedCategory === "all" ? colors.primary : "#f1f5f9",
                                color: selectedCategory === "all" ? colors.white : colors.textMuted,
                                fontWeight: 600,
                                fontSize: "14px",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                            }}
                        >
                            {t.all}
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                style={{
                                    padding: "10px 20px",
                                    borderRadius: "20px",
                                    border: "none",
                                    background: selectedCategory === cat.id ? cat.color : "#f1f5f9",
                                    color: selectedCategory === cat.id ? colors.white : colors.textMuted,
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {language === "fr" ? cat.fr : cat.en}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section style={{ padding: "60px 48px", background: colors.background }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    {filteredPosts.length === 0 ? (
                        <div
                            style={{
                                textAlign: "center",
                                padding: "80px 0",
                                color: colors.textMuted,
                                fontSize: "18px",
                            }}
                        >
                            {t.noArticles}
                        </div>
                    ) : (
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                                gap: "32px",
                            }}
                        >
                            {filteredPosts.map((post) => (
                                <ArticleCard key={post.slug} post={post} lang={language} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
