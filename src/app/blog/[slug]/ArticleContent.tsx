"use client"

import React, { useMemo } from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { BlogPost, CategoryInfo } from "@/types/blog"
import { formatDate } from "@/lib/utils"
import CategoryBadge from "@/components/blog/CategoryBadge"
import ShareButtons from "@/components/blog/ShareButtons"
import ArticleCard from "@/components/blog/ArticleCard"
import NewsletterSignup from "@/components/blog/NewsletterSignup"

const colors = {
    primary: "#8B5CF6",
    secondary: "#06B6D4",
    textDark: "#0F0F1A",
    textMuted: "#64748b",
    textLight: "#94a3b8",
    white: "#ffffff",
    background: "#f9fafb",
}

// Extract headings from markdown content for table of contents
function extractHeadings(content: string): { level: number; text: string; id: string }[] {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    const headings: { level: number; text: string; id: string }[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length
        const text = match[2].replace(/\*\*/g, "").trim()
        const id = text
            .toLowerCase()
            .replace(/[^a-z0-9àâäéèêëïîôùûüç\s-]/g, "")
            .replace(/\s+/g, "-")
        headings.push({ level, text, id })
    }

    return headings
}

interface ArticleContentProps {
    post: BlogPost
    lang: "en" | "fr"
    categoryInfo: CategoryInfo
    relatedPosts: BlogPost[]
}

export default function ArticleContent({ post, lang, categoryInfo, relatedPosts }: ArticleContentProps) {
    const content = {
        en: {
            backToBlog: "← Back to Blog",
            relatedArticles: "Related Articles",
            tableOfContents: "Table of Contents",
        },
        fr: {
            backToBlog: "← Retour au Blog",
            relatedArticles: "Articles Similaires",
            tableOfContents: "Sommaire",
        },
    }

    const t = content[lang]
    const readingTimeLabel = lang === "fr" ? post.readingTime.replace("min read", "min de lecture") : post.readingTime
    const articleUrl = typeof window !== "undefined" ? window.location.href : `https://safe-flow.ai/blog/${post.slug}`

    // Extract headings for table of contents
    const headings = useMemo(() => extractHeadings(post.content), [post.content])

    return (
        <div style={{ width: "100%", background: colors.white }}>
            {/* Article Header */}
            <section
                style={{
                    padding: "60px 48px 40px",
                    background: `linear-gradient(135deg, ${categoryInfo.color}10, ${colors.secondary}08)`,
                }}
            >
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <Link
                        href="/blog"
                        style={{
                            display: "inline-block",
                            color: colors.textMuted,
                            textDecoration: "none",
                            fontSize: "14px",
                            marginBottom: "24px",
                            transition: "color 0.2s ease",
                        }}
                    >
                        {t.backToBlog}
                    </Link>

                    <CategoryBadge category={post.frontmatter.category} lang={lang} />

                    <h1
                        style={{
                            fontSize: "clamp(28px, 4vw, 42px)",
                            fontWeight: 700,
                            color: colors.textDark,
                            marginTop: "16px",
                            marginBottom: "20px",
                            lineHeight: 1.3,
                        }}
                    >
                        {post.frontmatter.title}
                    </h1>

                    <p
                        style={{
                            fontSize: "18px",
                            color: colors.textMuted,
                            lineHeight: 1.6,
                            marginBottom: "24px",
                        }}
                    >
                        {post.frontmatter.description}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: "24px",
                            color: colors.textLight,
                            fontSize: "14px",
                        }}
                    >
                        <span>
                            <strong style={{ color: colors.textMuted }}>{post.frontmatter.author}</strong>
                        </span>
                        <span>{formatDate(post.frontmatter.date, lang)}</span>
                        <span>{readingTimeLabel}</span>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            {post.frontmatter.image && (
                <section style={{ padding: "0 48px", background: colors.white }}>
                    <div
                        style={{
                            maxWidth: "900px",
                            margin: "0 auto",
                            marginTop: "-20px",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        }}
                    >
                        <img
                            src={post.frontmatter.image}
                            alt={post.frontmatter.title}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "500px",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </div>
                </section>
            )}

            {/* Table of Contents */}
            {headings.length > 3 && (
                <section style={{ padding: "0 48px", background: colors.white }}>
                    <nav
                        style={{
                            maxWidth: "720px",
                            margin: "0 auto",
                            padding: "24px 32px",
                            background: colors.background,
                            borderRadius: "12px",
                            marginTop: "32px",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "16px",
                                fontWeight: 600,
                                color: colors.textDark,
                                marginBottom: "16px",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                            }}
                        >
                            {t.tableOfContents}
                        </h3>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {headings.map((heading, index) => (
                                <li
                                    key={index}
                                    style={{
                                        marginLeft: heading.level === 3 ? "20px" : 0,
                                        marginBottom: "8px",
                                    }}
                                >
                                    <a
                                        href={`#${heading.id}`}
                                        style={{
                                            color: heading.level === 2 ? colors.textDark : colors.textMuted,
                                            textDecoration: "none",
                                            fontSize: heading.level === 2 ? "15px" : "14px",
                                            fontWeight: heading.level === 2 ? 500 : 400,
                                            lineHeight: 1.5,
                                            display: "block",
                                            transition: "color 0.2s ease",
                                        }}
                                    >
                                        {heading.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </section>
            )}

            {/* Article Content */}
            <section style={{ padding: "48px", background: colors.white }}>
                <article style={{ maxWidth: "720px", margin: "0 auto" }}>
                    <div className="prose prose-lg">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({ children }) => (
                                    <h1 style={{ fontSize: "32px", fontWeight: 700, color: colors.textDark, marginTop: "48px", marginBottom: "24px", lineHeight: 1.3 }}>
                                        {children}
                                    </h1>
                                ),
                                h2: ({ children }) => {
                                    const text = typeof children === "string" ? children : String(children)
                                    const id = text
                                        .toLowerCase()
                                        .replace(/[^a-z0-9àâäéèêëïîôùûüç\s-]/g, "")
                                        .replace(/\s+/g, "-")
                                    return (
                                        <h2 id={id} style={{ fontSize: "26px", fontWeight: 600, color: colors.textDark, marginTop: "40px", marginBottom: "20px", lineHeight: 1.4, scrollMarginTop: "100px" }}>
                                            {children}
                                        </h2>
                                    )
                                },
                                h3: ({ children }) => {
                                    const text = typeof children === "string" ? children : String(children)
                                    const id = text
                                        .toLowerCase()
                                        .replace(/[^a-z0-9àâäéèêëïîôùûüç\s-]/g, "")
                                        .replace(/\s+/g, "-")
                                    return (
                                        <h3 id={id} style={{ fontSize: "20px", fontWeight: 600, color: colors.textDark, marginTop: "32px", marginBottom: "16px", lineHeight: 1.4, scrollMarginTop: "100px" }}>
                                            {children}
                                        </h3>
                                    )
                                },
                                p: ({ children }) => (
                                    <p style={{ fontSize: "17px", color: colors.textMuted, lineHeight: 1.8, marginBottom: "20px" }}>
                                        {children}
                                    </p>
                                ),
                                ul: ({ children }) => (
                                    <ul style={{ marginBottom: "20px", paddingLeft: "0", marginLeft: "24px", listStyleType: "disc" }}>{children}</ul>
                                ),
                                ol: ({ children }) => (
                                    <ol style={{ marginBottom: "20px", paddingLeft: "0", marginLeft: "24px", listStyleType: "decimal" }}>{children}</ol>
                                ),
                                li: ({ children }) => (
                                    <li style={{ fontSize: "17px", color: colors.textMuted, lineHeight: 1.8, marginBottom: "8px", paddingLeft: "8px" }}>
                                        {children}
                                    </li>
                                ),
                                table: ({ children }) => (
                                    <div style={{ overflowX: "auto", marginBottom: "24px", marginTop: "24px" }}>
                                        <table
                                            style={{
                                                width: "100%",
                                                borderCollapse: "collapse",
                                                fontSize: "15px",
                                                minWidth: "500px",
                                            }}
                                        >
                                            {children}
                                        </table>
                                    </div>
                                ),
                                thead: ({ children }) => (
                                    <thead style={{ background: colors.background }}>{children}</thead>
                                ),
                                th: ({ children }) => (
                                    <th
                                        style={{
                                            padding: "12px 16px",
                                            textAlign: "left",
                                            fontWeight: 600,
                                            color: colors.textDark,
                                            borderBottom: `2px solid ${colors.primary}40`,
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {children}
                                    </th>
                                ),
                                td: ({ children }) => (
                                    <td
                                        style={{
                                            padding: "12px 16px",
                                            color: colors.textMuted,
                                            borderBottom: "1px solid #e2e8f0",
                                            verticalAlign: "top",
                                        }}
                                    >
                                        {children}
                                    </td>
                                ),
                                tr: ({ children }) => <tr style={{ transition: "background 0.2s ease" }}>{children}</tr>,
                                img: ({ src, alt }) => (
                                    <span style={{ display: "block", margin: "32px 0" }}>
                                        <img
                                            src={src}
                                            alt={alt || ""}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                borderRadius: "12px",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                            }}
                                        />
                                        {alt && (
                                            <span
                                                style={{
                                                    display: "block",
                                                    textAlign: "center",
                                                    fontSize: "14px",
                                                    color: colors.textLight,
                                                    marginTop: "12px",
                                                    fontStyle: "italic",
                                                }}
                                            >
                                                {alt}
                                            </span>
                                        )}
                                    </span>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote
                                        style={{
                                            borderLeft: `4px solid ${colors.primary}`,
                                            paddingLeft: "24px",
                                            margin: "32px 0",
                                            fontStyle: "italic",
                                            color: colors.textMuted,
                                            fontSize: "18px",
                                        }}
                                    >
                                        {children}
                                    </blockquote>
                                ),
                                pre: ({ children }) => (
                                    <pre
                                        style={{
                                            background: "#1e1e2e",
                                            color: "#cdd6f4",
                                            padding: "20px 24px",
                                            borderRadius: "12px",
                                            overflow: "auto",
                                            margin: "24px 0",
                                            fontSize: "14px",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {children}
                                    </pre>
                                ),
                                code: ({ children }) => (
                                    <code
                                        style={{
                                            background: `${colors.primary}15`,
                                            color: colors.primary,
                                            padding: "2px 6px",
                                            borderRadius: "4px",
                                            fontSize: "0.9em",
                                        }}
                                    >
                                        {children}
                                    </code>
                                ),
                                a: ({ href, children }) => (
                                    <a
                                        href={href}
                                        target={href?.startsWith("http") ? "_blank" : undefined}
                                        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                        style={{ color: colors.primary, textDecoration: "underline", textUnderlineOffset: "3px" }}
                                    >
                                        {children}
                                    </a>
                                ),
                                strong: ({ children }) => (
                                    <strong style={{ color: colors.textDark, fontWeight: 600 }}>{children}</strong>
                                ),
                                hr: () => (
                                    <hr
                                        style={{
                                            border: "none",
                                            height: "1px",
                                            background: `linear-gradient(90deg, transparent, ${colors.primary}40, transparent)`,
                                            margin: "40px 0",
                                        }}
                                    />
                                ),
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {/* Share buttons */}
                    <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #e2e8f0" }}>
                        <ShareButtons url={articleUrl} title={post.frontmatter.title} lang={lang} />
                    </div>

                    {/* Newsletter Signup */}
                    <NewsletterSignup />
                </article>
            </section>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section style={{ padding: "60px 48px", background: colors.background }}>
                    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                        <h2
                            style={{
                                fontSize: "28px",
                                fontWeight: 600,
                                color: colors.textDark,
                                marginBottom: "32px",
                                textAlign: "center",
                            }}
                        >
                            {t.relatedArticles}
                        </h2>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "24px",
                            }}
                        >
                            {relatedPosts.map((relatedPost) => (
                                <ArticleCard key={relatedPost.slug} post={relatedPost} lang={lang} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
