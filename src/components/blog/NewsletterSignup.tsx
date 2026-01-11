"use client"

import React, { useState, useEffect } from "react"

const colors = {
    primary: "#8B5CF6",
    primaryLight: "#A78BFA",
    secondary: "#06B6D4",
    textDark: "#0F0F1A",
    textMuted: "#64748b",
    white: "#ffffff",
    background: "#f9fafb",
}

interface NewsletterSignupProps {
    variant?: "default" | "compact" | "inline"
}

export default function NewsletterSignup({ variant = "default" }: NewsletterSignupProps) {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [language, setLanguage] = useState<"en" | "fr">("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("safe-flow-lang") as "en" | "fr" | null
        if (savedLang) setLanguage(savedLang)
    }, [])

    const content = {
        en: {
            title: "Join the Beta",
            subtitle: "Be among the first to experience Safe-Flow. Get early access + exclusive breathing guides.",
            placeholder: "Your email",
            button: "Get Early Access",
            success: "You're on the list! Check your inbox.",
            error: "Something went wrong. Try again?",
            privacy: "No spam. Unsubscribe anytime.",
        },
        fr: {
            title: "Rejoignez la Beta",
            subtitle: "Soyez parmi les premiers à tester Safe-Flow. Accès anticipé + guides exclusifs.",
            placeholder: "Votre email",
            button: "Accès Anticipé",
            success: "Vous êtes inscrit ! Vérifiez votre boîte mail.",
            error: "Une erreur est survenue. Réessayer ?",
            privacy: "Pas de spam. Désinscription à tout moment.",
        },
    }

    const t = content[language]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || status === "loading") return

        setStatus("loading")

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, language }),
            })

            if (!response.ok) {
                throw new Error("Failed to subscribe")
            }

            setStatus("success")
            setEmail("")
        } catch {
            setStatus("error")
        }
    }

    if (variant === "compact") {
        return (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", maxWidth: "400px" }}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.placeholder}
                    required
                    style={{
                        flex: 1,
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                        fontSize: "14px",
                        outline: "none",
                    }}
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                        padding: "12px 20px",
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        color: colors.white,
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: 600,
                        fontSize: "14px",
                        cursor: status === "loading" ? "wait" : "pointer",
                        opacity: status === "loading" ? 0.7 : 1,
                    }}
                >
                    {status === "loading" ? "..." : t.button}
                </button>
            </form>
        )
    }

    return (
        <div
            style={{
                padding: "40px",
                background: `linear-gradient(135deg, ${colors.primary}08, ${colors.secondary}08)`,
                borderRadius: "16px",
                border: `1px solid ${colors.primary}20`,
                textAlign: "center",
                maxWidth: "500px",
                margin: "40px auto",
            }}
        >
            <h3
                style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: colors.textDark,
                    marginBottom: "12px",
                }}
            >
                {t.title}
            </h3>

            <p
                style={{
                    fontSize: "15px",
                    color: colors.textMuted,
                    marginBottom: "24px",
                    lineHeight: 1.6,
                }}
            >
                {t.subtitle}
            </p>

            {status === "success" ? (
                <div
                    style={{
                        padding: "16px",
                        background: "#10B98115",
                        borderRadius: "8px",
                        color: "#10B981",
                        fontWeight: 500,
                    }}
                >
                    {t.success}
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t.placeholder}
                            required
                            style={{
                                flex: "1 1 200px",
                                maxWidth: "280px",
                                padding: "14px 18px",
                                borderRadius: "10px",
                                border: "1px solid #e2e8f0",
                                fontSize: "15px",
                                outline: "none",
                            }}
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            style={{
                                padding: "14px 28px",
                                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                                color: colors.white,
                                border: "none",
                                borderRadius: "10px",
                                fontWeight: 600,
                                fontSize: "15px",
                                cursor: status === "loading" ? "wait" : "pointer",
                                opacity: status === "loading" ? 0.7 : 1,
                                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                                transition: "all 0.2s ease",
                            }}
                        >
                            {status === "loading" ? "..." : t.button}
                        </button>
                    </div>

                    {status === "error" && (
                        <p style={{ color: "#EF4444", fontSize: "14px", marginBottom: "12px" }}>{t.error}</p>
                    )}

                    <p style={{ fontSize: "12px", color: colors.textMuted }}>{t.privacy}</p>
                </form>
            )}
        </div>
    )
}
