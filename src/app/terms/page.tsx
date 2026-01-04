"use client"

import { useState, useEffect } from "react"

export default function TermsPage() {
    const [language, setLanguage] = useState<"en" | "fr">("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("safe-flow-lang") as "en" | "fr" | null
        if (savedLang) {
            setLanguage(savedLang)
        }
    }, [])

    const content = {
        en: {
            title: "Terms of Service",
            lastUpdated: "Last updated: December 2025",
            intro: "Welcome to Safe-Flow. By using our services, you agree to these terms.",
            sections: [
                {
                    title: "Acceptance of Terms",
                    content: "By accessing or using Safe-Flow, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services."
                },
                {
                    title: "Description of Service",
                    content: "Safe-Flow provides AI-guided breathing exercises, emotional regulation tools, and wellness tracking features. Our service is for informational and educational purposes only and is not a substitute for professional medical advice."
                },
                {
                    title: "User Accounts",
                    content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate information when creating your account."
                },
                {
                    title: "Acceptable Use",
                    content: "You agree not to misuse our services, attempt to access unauthorized areas, or use the service for any illegal purpose. We reserve the right to suspend accounts that violate these terms."
                },
                {
                    title: "Intellectual Property",
                    content: "All content, features, and functionality of Safe-Flow are owned by A-X Software SASU and are protected by international copyright and trademark laws."
                },
                {
                    title: "Limitation of Liability",
                    content: "Safe-Flow is provided 'as is' without warranties. We are not liable for any indirect, incidental, or consequential damages arising from your use of the service."
                },
                {
                    title: "Contact",
                    content: "For questions about these terms, contact us at legal@safe-flow.ai or write to: A-X Software SASU, 122 Rue Amelot, 75011 Paris, France."
                }
            ]
        },
        fr: {
            title: "Conditions d'Utilisation",
            lastUpdated: "Dernière mise à jour : Décembre 2025",
            intro: "Bienvenue sur Safe-Flow. En utilisant nos services, vous acceptez ces conditions.",
            sections: [
                {
                    title: "Acceptation des Conditions",
                    content: "En accédant ou en utilisant Safe-Flow, vous acceptez d'être lié par ces Conditions d'Utilisation et notre Politique de Confidentialité. Si vous n'acceptez pas, veuillez ne pas utiliser nos services."
                },
                {
                    title: "Description du Service",
                    content: "Safe-Flow fournit des exercices de respiration guidés par IA, des outils de régulation émotionnelle et des fonctionnalités de suivi du bien-être. Notre service est à des fins d'information et d'éducation uniquement et ne remplace pas un avis médical professionnel."
                },
                {
                    title: "Comptes Utilisateurs",
                    content: "Vous êtes responsable de la confidentialité de vos identifiants de compte et de toutes les activités sous votre compte. Vous devez fournir des informations exactes lors de la création de votre compte."
                },
                {
                    title: "Utilisation Acceptable",
                    content: "Vous acceptez de ne pas abuser de nos services, tenter d'accéder à des zones non autorisées ou utiliser le service à des fins illégales. Nous nous réservons le droit de suspendre les comptes qui violent ces conditions."
                },
                {
                    title: "Propriété Intellectuelle",
                    content: "Tout le contenu, les fonctionnalités et la fonctionnalité de Safe-Flow appartiennent à A-X Software SASU et sont protégés par les lois internationales sur le droit d'auteur et les marques."
                },
                {
                    title: "Limitation de Responsabilité",
                    content: "Safe-Flow est fourni 'tel quel' sans garanties. Nous ne sommes pas responsables des dommages indirects, accessoires ou consécutifs découlant de votre utilisation du service."
                },
                {
                    title: "Contact",
                    content: "Pour toute question concernant ces conditions, contactez-nous à legal@safe-flow.ai ou écrivez à : A-X Software SASU, 122 Rue Amelot, 75011 Paris, France."
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
