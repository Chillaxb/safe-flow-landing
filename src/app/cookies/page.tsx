"use client"

import { usePathname } from "next/navigation"

export default function CookiesPage() {
    const pathname = usePathname()
    const language = pathname?.startsWith("/fr") ? "fr" : "en"

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
