"use client"

import { getCategoryInfo, type Category } from "@/types/blog"

interface CategoryBadgeProps {
    category: Category
    lang: "en" | "fr"
    size?: "sm" | "md"
}

export default function CategoryBadge({ category, lang, size = "md" }: CategoryBadgeProps) {
    const info = getCategoryInfo(category)
    const label = lang === "fr" ? info.fr : info.en

    const padding = size === "sm" ? "4px 10px" : "6px 14px"
    const fontSize = size === "sm" ? "11px" : "12px"

    return (
        <span
            style={{
                display: "inline-block",
                padding,
                background: `${info.color}15`,
                color: info.color,
                borderRadius: "20px",
                fontSize,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
            }}
        >
            {label}
        </span>
    )
}
