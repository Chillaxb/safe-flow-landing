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
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">{t.title}</h1>
                        <p className="text-gray-500">{t.lastUpdated}</p>
                    </div>

                    {/* Intro Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                        <p className="text-lg text-gray-600 leading-relaxed">{t.intro}</p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-6">
                        {t.sections.map((section, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-md hover:border-violet-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-medium"
                                        style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
                                    >
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
