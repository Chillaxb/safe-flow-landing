"use client"

import { usePathname } from "next/navigation"

export default function PrivacyPage() {
    const pathname = usePathname()
    const language = pathname?.startsWith("/fr") ? "fr" : "en"

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
        <div className="min-h-screen bg-white">
            <section className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">{t.title}</h1>
                    <p className="text-gray-500 mb-12">{t.lastUpdated}</p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-12">{t.intro}</p>

                    {t.sections.map((section, index) => (
                        <div key={index} className="mb-10">
                            <h2 className="text-2xl font-medium text-gray-900 mb-4">{section.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{section.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
