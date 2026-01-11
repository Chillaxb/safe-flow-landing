"use client"

import React, { useState } from "react"
import Link from "next/link"
import type { BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/utils"
import CategoryBadge from "./CategoryBadge"

const colors = {
    primary: "#8B5CF6",
    secondary: "#06B6D4",
    textDark: "#0F0F1A",
    textMuted: "#64748b",
    textLight: "#94a3b8",
    white: "#ffffff",
    border: "#e2e8f0",
}

interface ArticleCardProps {
    post: BlogPost
    lang: "en" | "fr"
}

export default function ArticleCard({ post, lang }: ArticleCardProps) {
    const [hovered, setHovered] = useState(false)

    const readingTimeLabel = lang === "fr" ? post.readingTime.replace("min read", "min de lecture") : post.readingTime

    return (
        <Link
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <article
                style={{
                    background: colors.white,
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: `1px solid ${hovered ? colors.primary : colors.border}`,
                    transform: hovered ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: hovered ? "0 20px 40px rgba(99, 102, 241, 0.12)" : "0 4px 12px rgba(0, 0, 0, 0.04)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Image placeholder */}
                {post.frontmatter.image ? (
                    <div
                        style={{
                            height: "180px",
                            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                            backgroundImage: `url(${post.frontmatter.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                ) : (
                    <div
                        style={{
                            height: "180px",
                            background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="1.5" opacity="0.5">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                )}

                {/* Content */}
                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ marginBottom: "12px" }}>
                        <CategoryBadge category={post.frontmatter.category} lang={lang} size="sm" />
                    </div>

                    <h3
                        style={{
                            fontSize: "18px",
                            fontWeight: 600,
                            color: colors.textDark,
                            marginBottom: "12px",
                            lineHeight: 1.4,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {post.frontmatter.title}
                    </h3>

                    <p
                        style={{
                            fontSize: "14px",
                            color: colors.textMuted,
                            lineHeight: 1.6,
                            marginBottom: "16px",
                            flex: 1,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {post.frontmatter.description}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "13px",
                            color: colors.textLight,
                        }}
                    >
                        <span>{formatDate(post.frontmatter.date, lang)}</span>
                        <span>{readingTimeLabel}</span>
                    </div>
                </div>
            </article>
        </Link>
    )
}
