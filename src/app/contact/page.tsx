"use client"

import { usePathname } from "next/navigation"

export default function ContactPage() {
    const pathname = usePathname()
    const language = pathname?.startsWith("/fr") ? "fr" : "en"

    const content = {
        en: {
            title: "Contact Us",
            subtitle: "We'd love to hear from you",
            emailTitle: "Email",
            emailGeneral: "General inquiries",
            emailSupport: "Support",
            emailPrivacy: "Privacy questions",
            addressTitle: "Address",
            companyName: "A-X Software SASU",
            address1: "122 Rue Amelot",
            address2: "75011 Paris, France",
            socialTitle: "Follow Us",
            responseTime: "We typically respond within 24-48 hours.",
        },
        fr: {
            title: "Nous Contacter",
            subtitle: "Nous serions ravis de vous entendre",
            emailTitle: "Email",
            emailGeneral: "Questions générales",
            emailSupport: "Support",
            emailPrivacy: "Questions de confidentialité",
            addressTitle: "Adresse",
            companyName: "A-X Software SASU",
            address1: "122 Rue Amelot",
            address2: "75011 Paris, France",
            socialTitle: "Suivez-nous",
            responseTime: "Nous répondons généralement sous 24 à 48 heures.",
        }
    }

    const t = content[language]

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">{t.title}</h1>
                        <p className="text-xl text-gray-500">{t.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Email Section */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-medium text-gray-900 mb-6">{t.emailTitle}</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">{t.emailGeneral}</p>
                                    <a href="mailto:hello@safe-flow.ai" className="text-indigo-600 hover:text-indigo-700 font-medium">
                                        hello@safe-flow.ai
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">{t.emailSupport}</p>
                                    <a href="mailto:support@safe-flow.ai" className="text-indigo-600 hover:text-indigo-700 font-medium">
                                        support@safe-flow.ai
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">{t.emailPrivacy}</p>
                                    <a href="mailto:privacy@safe-flow.ai" className="text-indigo-600 hover:text-indigo-700 font-medium">
                                        privacy@safe-flow.ai
                                    </a>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-6">{t.responseTime}</p>
                        </div>

                        {/* Address Section */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-medium text-gray-900 mb-6">{t.addressTitle}</h2>
                            <div className="text-gray-600 leading-relaxed mb-8">
                                <p className="font-medium text-gray-900">{t.companyName}</p>
                                <p>{t.address1}</p>
                                <p>{t.address2}</p>
                            </div>

                            <h3 className="text-lg font-medium text-gray-900 mb-4">{t.socialTitle}</h3>
                            <div className="flex gap-4">
                                <a href="https://reddit.com/r/safeflow" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                                    </svg>
                                </a>
                                <a href="https://instagram.com/safeflow" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/company/safeflow" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
