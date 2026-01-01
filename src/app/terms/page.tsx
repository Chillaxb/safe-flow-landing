"use client"

import { usePathname } from "next/navigation"

export default function TermsPage() {
    const pathname = usePathname()
    const language = pathname?.startsWith("/fr") ? "fr" : "en"

    const content = {
        en: {
            title: "Terms of Service",
            lastUpdated: "Last updated: December 2024",
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
            lastUpdated: "Dernière mise à jour : Décembre 2024",
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
