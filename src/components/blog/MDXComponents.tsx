"use client"

import React from "react"
import Link from "next/link"
import NewsletterSignup from "./NewsletterSignup"

const colors = {
    primary: "#8B5CF6",
    secondary: "#06B6D4",
    textDark: "#0F0F1A",
    textMuted: "#64748b",
    white: "#ffffff",
    background: "#f9fafb",
}

// Callout component for tips, warnings, info
interface CalloutProps {
    type?: "info" | "warning" | "tip" | "note"
    children: React.ReactNode
}

function Callout({ type = "info", children }: CalloutProps) {
    const styles = {
        info: { bg: "#3B82F615", border: "#3B82F6", icon: "ℹ️" },
        warning: { bg: "#F59E0B15", border: "#F59E0B", icon: "⚠️" },
        tip: { bg: "#10B98115", border: "#10B981", icon: "💡" },
        note: { bg: "#8B5CF615", border: "#8B5CF6", icon: "📝" },
    }

    const s = styles[type]

    return (
        <div
            style={{
                padding: "20px 24px",
                background: s.bg,
                borderLeft: `4px solid ${s.border}`,
                borderRadius: "0 8px 8px 0",
                margin: "24px 0",
            }}
        >
            <span style={{ marginRight: "8px" }}>{s.icon}</span>
            {children}
        </div>
    )
}

// YouTube embed
interface YouTubeEmbedProps {
    videoId: string
    title?: string
}

function YouTubeEmbed({ videoId, title = "YouTube video" }: YouTubeEmbedProps) {
    return (
        <div
            style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "12px",
                margin: "32px 0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
        >
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                }}
            />
        </div>
    )
}

// Custom heading components with anchor links
function H1({ children, id }: { children: React.ReactNode; id?: string }) {
    return (
        <h1 id={id} style={{ fontSize: "32px", fontWeight: 700, color: colors.textDark, marginTop: "48px", marginBottom: "24px", lineHeight: 1.3 }}>
            {children}
        </h1>
    )
}

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
    return (
        <h2 id={id} style={{ fontSize: "26px", fontWeight: 600, color: colors.textDark, marginTop: "40px", marginBottom: "20px", lineHeight: 1.4 }}>
            {children}
        </h2>
    )
}

function H3({ children, id }: { children: React.ReactNode; id?: string }) {
    return (
        <h3 id={id} style={{ fontSize: "20px", fontWeight: 600, color: colors.textDark, marginTop: "32px", marginBottom: "16px", lineHeight: 1.4 }}>
            {children}
        </h3>
    )
}

// Paragraph
function P({ children }: { children: React.ReactNode }) {
    return (
        <p style={{ fontSize: "17px", color: colors.textMuted, lineHeight: 1.8, marginBottom: "20px" }}>
            {children}
        </p>
    )
}

// Lists
function UL({ children }: { children: React.ReactNode }) {
    return (
        <ul style={{ marginBottom: "20px", paddingLeft: "24px" }}>
            {children}
        </ul>
    )
}

function OL({ children }: { children: React.ReactNode }) {
    return (
        <ol style={{ marginBottom: "20px", paddingLeft: "24px" }}>
            {children}
        </ol>
    )
}

function LI({ children }: { children: React.ReactNode }) {
    return (
        <li style={{ fontSize: "17px", color: colors.textMuted, lineHeight: 1.8, marginBottom: "8px" }}>
            {children}
        </li>
    )
}

// Blockquote
function Blockquote({ children }: { children: React.ReactNode }) {
    return (
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
    )
}

// Code blocks
function Pre({ children }: { children: React.ReactNode }) {
    return (
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
    )
}

function Code({ children }: { children: React.ReactNode }) {
    return (
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
    )
}

// Links
function A({ href, children }: { href?: string; children: React.ReactNode }) {
    const isExternal = href?.startsWith("http")

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.primary, textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
                {children}
            </a>
        )
    }

    return (
        <Link href={href || "/"} style={{ color: colors.primary, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            {children}
        </Link>
    )
}

// Strong/Bold
function Strong({ children }: { children: React.ReactNode }) {
    return <strong style={{ color: colors.textDark, fontWeight: 600 }}>{children}</strong>
}

// Horizontal rule
function HR() {
    return (
        <hr
            style={{
                border: "none",
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${colors.primary}40, transparent)`,
                margin: "40px 0",
            }}
        />
    )
}

// Table
function Table({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ overflowX: "auto", margin: "24px 0" }}>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "15px",
                }}
            >
                {children}
            </table>
        </div>
    )
}

function TH({ children }: { children: React.ReactNode }) {
    return (
        <th
            style={{
                textAlign: "left",
                padding: "12px 16px",
                background: colors.background,
                borderBottom: `2px solid ${colors.primary}30`,
                fontWeight: 600,
                color: colors.textDark,
            }}
        >
            {children}
        </th>
    )
}

function TD({ children }: { children: React.ReactNode }) {
    return (
        <td
            style={{
                padding: "12px 16px",
                borderBottom: "1px solid #e2e8f0",
                color: colors.textMuted,
            }}
        >
            {children}
        </td>
    )
}

// Export all MDX components
export const mdxComponents = {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    ul: UL,
    ol: OL,
    li: LI,
    blockquote: Blockquote,
    pre: Pre,
    code: Code,
    a: A,
    strong: Strong,
    hr: HR,
    table: Table,
    th: TH,
    td: TD,
    // Custom components
    Callout,
    YouTubeEmbed,
    NewsletterSignup,
}

export { Callout, YouTubeEmbed }
