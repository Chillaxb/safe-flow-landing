"use client"

import { useState, useEffect } from "react"

export default function CookiesPage() {
    const [language, setLanguage] = useState<"en" | "fr">("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("safe-flow-lang") as "en" | "fr" | null
        if (savedLang) {
            setLanguage(savedLang)
        }
    }, [])

    const content = {
        en: {
            title: "Cookie Policy",
            lastUpdated: "Last updated: December 2024",
            intro: "This policy explains how Safe-Flow uses cookies and similar technologies.",
            sections: [
                {
                    title: "What Are Cookies?",
                    content: "Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and improve your experience."
                },
                {
                    title: "Essential Cookies",
                    content: "These cookies are necessary for the website to function properly. They enable core features like user authentication and session management. You cannot opt out of these cookies."
                },
                {
                    title: "Analytics Cookies",
                    content: "We use analytics cookies to understand how visitors interact with our website. This helps us improve our services. These cookies collect anonymous data about page views and user behavior."
                },
                {
                    title: "Preference Cookies",
                    content: "These cookies remember your settings and preferences, such as language selection and display options, to provide a more personalized experience."
                },
                {
                    title: "Managing Cookies",
                    content: "You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. However, blocking some cookies may affect your experience on our website."
                },
                {
                    title: "Contact Us",
                    content: "For questions about our cookie policy, contact us at privacy@safe-flow.ai or write to: A-X Software SASU, 122 Rue Amelot, 75011 Paris, France."
                }
            ]
        },
        fr: {
            title: "Politique des Cookies",
            lastUpdated: "Dernière mise à jour : Décembre 2024",
            intro: "Cette politique explique comment Safe-Flow utilise les cookies et technologies similaires.",
            sections: [
                {
                    title: "Qu'est-ce qu'un Cookie ?",
                    content: "Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web. Ils nous aident à mémoriser vos préférences et améliorer votre expérience."
                },
                {
                    title: "Cookies Essentiels",
                    content: "Ces cookies sont nécessaires au bon fonctionnement du site web. Ils permettent des fonctionnalités de base comme l'authentification et la gestion de session. Vous ne pouvez pas désactiver ces cookies."
                },
                {
                    title: "Cookies Analytiques",
                    content: "Nous utilisons des cookies analytiques pour comprendre comment les visiteurs interagissent avec notre site. Cela nous aide à améliorer nos services. Ces cookies collectent des données anonymes sur les pages vues et le comportement des utilisateurs."
                },
                {
                    title: "Cookies de Préférences",
                    content: "Ces cookies mémorisent vos paramètres et préférences, comme la sélection de la langue et les options d'affichage, pour offrir une expérience plus personnalisée."
                },
                {
                    title: "Gérer les Cookies",
                    content: "Vous pouvez contrôler les cookies via les paramètres de votre navigateur. La plupart des navigateurs vous permettent de refuser ou supprimer les cookies. Cependant, bloquer certains cookies peut affecter votre expérience sur notre site."
                },
                {
                    title: "Nous Contacter",
                    content: "Pour toute question concernant notre politique de cookies, contactez-nous à privacy@safe-flow.ai ou écrivez à : A-X Software SASU, 122 Rue Amelot, 75011 Paris, France."
                }
            ]
        }
    }

    const t = content[language]

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #f9fafb, #ffffff)",
                display: "flex",
                justifyContent: "center",
                width: "100%"
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "896px",
                    padding: "128px 24px 80px 24px",
                }}
            >
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <h1 style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        fontWeight: 300,
                        color: "#111827",
                        marginBottom: "16px"
                    }}>
                        {t.title}
                    </h1>
                    <p style={{ color: "#6b7280" }}>{t.lastUpdated}</p>
                </div>

                {/* Intro Card */}
                <div style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    border: "1px solid #f3f4f6",
                    padding: "32px",
                    marginBottom: "32px"
                }}>
                    <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.7 }}>{t.intro}</p>
                </div>

                {/* Sections */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {t.sections.map((section, index) => (
                        <div
                            key={index}
                            style={{
                                background: "#ffffff",
                                borderRadius: "16px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                border: "1px solid #f3f4f6",
                                padding: "32px",
                                transition: "all 0.3s ease"
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                                <div
                                    style={{
                                        flexShrink: 0,
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "12px",
                                        background: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#ffffff",
                                        fontWeight: 500
                                    }}
                                >
                                    {index + 1}
                                </div>
                                <div>
                                    <h2 style={{
                                        fontSize: "20px",
                                        fontWeight: 600,
                                        color: "#111827",
                                        marginBottom: "12px"
                                    }}>
                                        {section.title}
                                    </h2>
                                    <p style={{ color: "#4b5563", lineHeight: 1.7 }}>{section.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
