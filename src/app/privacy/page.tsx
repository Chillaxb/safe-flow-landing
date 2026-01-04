"use client"

import { useState, useEffect } from "react"

export default function PrivacyPage() {
    const [language, setLanguage] = useState<"en" | "fr">("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("safe-flow-lang") as "en" | "fr" | null
        if (savedLang) {
            setLanguage(savedLang)
        }
    }, [])

    const content = {
        en: {
            title: "Privacy Policy",
            lastUpdated: "Last updated: December 2024",
            intro: "At Safe-Flow, your privacy is our priority. This policy explains how we collect, use, and protect your personal information.",
            sections: [
                {
                    title: "Information We Collect",
                    content: "We collect information you provide directly (email, profile data) and usage data (breathing sessions, progress). Health data from connected devices (heart rate, HRV) is processed locally or with your explicit consent."
                },
                {
                    title: "How We Use Your Information",
                    content: "Your data is used to personalize your experience, provide AI-powered insights, and improve our services. We never sell your personal information to third parties."
                },
                {
                    title: "Data Storage & Security",
                    content: "Your data is stored securely on servers located in the European Union. We use industry-standard encryption and security measures to protect your information."
                },
                {
                    title: "Your Rights",
                    content: "You have the right to access, correct, or delete your personal data at any time. You can export your data or request account deletion through the app settings."
                },
                {
                    title: "Contact Us",
                    content: "For any privacy-related questions, contact us at privacy@safe-flow.ai or write to: A-X Software SASU, 122 Rue Amelot, 75011 Paris, France."
                }
            ]
        },
        fr: {
            title: "Politique de Confidentialité",
            lastUpdated: "Dernière mise à jour : Décembre 2024",
            intro: "Chez Safe-Flow, votre vie privée est notre priorité. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.",
            sections: [
                {
                    title: "Informations Collectées",
                    content: "Nous collectons les informations que vous fournissez directement (email, données de profil) et les données d'utilisation (sessions de respiration, progression). Les données de santé des appareils connectés (fréquence cardiaque, VRC) sont traitées localement ou avec votre consentement explicite."
                },
                {
                    title: "Utilisation de Vos Informations",
                    content: "Vos données sont utilisées pour personnaliser votre expérience, fournir des insights IA et améliorer nos services. Nous ne vendons jamais vos informations personnelles à des tiers."
                },
                {
                    title: "Stockage et Sécurité",
                    content: "Vos données sont stockées de manière sécurisée sur des serveurs situés dans l'Union Européenne. Nous utilisons le chiffrement et les mesures de sécurité standard de l'industrie."
                },
                {
                    title: "Vos Droits",
                    content: "Vous avez le droit d'accéder, de corriger ou de supprimer vos données personnelles à tout moment. Vous pouvez exporter vos données ou demander la suppression de votre compte via les paramètres de l'application."
                },
                {
                    title: "Nous Contacter",
                    content: "Pour toute question relative à la confidentialité, contactez-nous à privacy@safe-flow.ai ou écrivez à : A-X Software SASU, 122 Rue Amelot, 75011 Paris, France."
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
