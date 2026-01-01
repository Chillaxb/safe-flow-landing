"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)

    const language = pathname?.startsWith("/fr") ? "fr" : "en"

    const content = {
        en: {
            tagline: "AI-guided breath and emotional regulation. Personalized for your rhythm, protected by design.",
            productTitle: "Product",
            howItWorks: "How it Works",
            companyTitle: "Company",
            aboutUs: "About Us",
            blog: "Blog",
            contact: "Contact",
            legalTitle: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            cookies: "Cookie Policy",
            copyright: "Safe-Flow.ai - A-X Software SASU. All rights reserved.",
            taglineBottom: "Your data, your privacy, your journey.",
        },
        fr: {
            tagline: "Régulation de la respiration et des émotions guidée par l'IA. Personnalisée pour votre rythme, protégée par conception.",
            productTitle: "Produit",
            howItWorks: "Comment ça Marche",
            companyTitle: "Entreprise",
            aboutUs: "À Propos",
            blog: "Blog",
            contact: "Contact",
            legalTitle: "Légal",
            privacy: "Politique de Confidentialité",
            terms: "Conditions d'Utilisation",
            cookies: "Politique des Cookies",
            copyright: "Safe-Flow.ai - A-X Software SASU. Tous droits réservés.",
            taglineBottom: "Vos données, votre vie privée, votre parcours.",
        },
    }

    const t = content[language]

    const getLocalizedUrl = (url: string) => {
        return language === "fr" ? `/fr${url}` : url
    }

    const linkStyle = (isHovered: boolean) => ({
        color: isHovered ? "#e0f2fe" : "#94a3b8",
        textDecoration: "none",
        fontSize: "15px",
        transition: "color 0.2s",
        display: "block",
        marginBottom: "10px",
    })

    const socialLinks = [
        { name: "reddit", url: "https://reddit.com/r/safeflow", ariaLabel: "Visitez notre page Reddit", icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#FF4500" />
                <path d="M26 16c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6-1.4-1-3.2-1.6-5.2-1.7l.9-4.2 2.9.6c0 .8.7 1.4 1.5 1.4.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5c-.6 0-1.1.4-1.4.9l-3.2-.7c-.1 0-.3 0-.4.1-.1.1-.2.2-.2.4l-1 4.7c-2 .1-3.9.7-5.3 1.7-.4-.4-.9-.6-1.4-.6-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8-.1.3-.1.6-.1.9 0 3 3.1 5.5 7 5.5s7-2.5 7-5.5c0-.3 0-.6-.1-.9.7-.3 1.2-1 1.2-1.8zm-16 1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm8.4 4.5c-1 1-2.9 1.1-3.4 1.1s-2.4-.1-3.4-1.1c-.1-.1-.1-.4 0-.5.1-.1.4-.1.5 0 .6.6 2 1 2.9 1s2.3-.4 2.9-1c.1-.1.4-.1.5 0 .1.2.1.4 0 .5zm-.4-3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="white" />
            </svg>
        )},
        { name: "facebook", url: "https://facebook.com/safeflow", ariaLabel: "Suivez-nous sur Facebook", icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        )},
        { name: "instagram", url: "https://instagram.com/safeflow", ariaLabel: "Suivez-nous sur Instagram", icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="6" r="1.5" fill="currentColor" />
            </svg>
        )},
        { name: "linkedin", url: "https://linkedin.com/company/safeflow", ariaLabel: "Suivez-nous sur LinkedIn", icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )},
    ]

    return (
        <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "60px 48px 24px", width: "100%" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "6px" }}>
                            <span style={{ fontSize: "20px", fontWeight: 600 }}>
                                <span style={{ color: "#e0f2fe" }}>Safe</span>
                                <span style={{ background: "linear-gradient(135deg, #667EEA, #764BA2, #F093FB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Flow</span>
                            </span>
                        </div>
                        <p style={{ fontSize: "15px", lineHeight: 1.7, marginBottom: "16px", color: "#94a3b8", maxWidth: "400px" }}>
                            {t.tagline}
                        </p>
                        <div style={{ fontSize: "14px", lineHeight: 1.8, color: "#64748b" }}>
                            <p style={{ margin: "4px 0" }}><strong style={{ color: "#94a3b8" }}>A-X Software SASU</strong></p>
                            <p style={{ margin: "4px 0" }}>122 Rue Amelot</p>
                            <p style={{ margin: "4px 0" }}>75011 Paris, France</p>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 style={{ color: "#e0f2fe", fontSize: "17px", fontWeight: 600, marginBottom: "20px" }}>{t.productTitle}</h3>
                        <Link href={getLocalizedUrl("/how-it-works")} style={linkStyle(hoveredLink === "how")} onMouseEnter={() => setHoveredLink("how")} onMouseLeave={() => setHoveredLink(null)}>
                            {t.howItWorks}
                        </Link>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 style={{ color: "#e0f2fe", fontSize: "17px", fontWeight: 600, marginBottom: "20px" }}>{t.companyTitle}</h3>
                        <Link href={getLocalizedUrl("/about")} style={linkStyle(hoveredLink === "about")} onMouseEnter={() => setHoveredLink("about")} onMouseLeave={() => setHoveredLink(null)}>
                            {t.aboutUs}
                        </Link>
                        <Link href={getLocalizedUrl("/contact")} style={linkStyle(hoveredLink === "contact")} onMouseEnter={() => setHoveredLink("contact")} onMouseLeave={() => setHoveredLink(null)}>
                            {t.contact}
                        </Link>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 style={{ color: "#e0f2fe", fontSize: "17px", fontWeight: 600, marginBottom: "20px" }}>{t.legalTitle}</h3>
                        <Link href={getLocalizedUrl("/privacy")} style={linkStyle(hoveredLink === "privacy")} onMouseEnter={() => setHoveredLink("privacy")} onMouseLeave={() => setHoveredLink(null)}>
                            {t.privacy}
                        </Link>
                        <Link href={getLocalizedUrl("/terms")} style={linkStyle(hoveredLink === "terms")} onMouseEnter={() => setHoveredLink("terms")} onMouseLeave={() => setHoveredLink(null)}>
                            {t.terms}
                        </Link>
                        <Link href={getLocalizedUrl("/cookies")} style={linkStyle(hoveredLink === "cookies")} onMouseEnter={() => setHoveredLink("cookies")} onMouseLeave={() => setHoveredLink(null)}>
                            {t.cookies}
                        </Link>
                    </div>
                </div>

                {/* Social Links */}
                <div style={{ borderTop: "1px solid #1e293b", paddingTop: "32px", marginBottom: "32px", display: "flex", justifyContent: "center", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.ariaLabel}
                            style={{
                                color: hoveredLink === social.name ? "#60a5fa" : "#94a3b8",
                                transition: "color 0.2s, opacity 0.2s",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: hoveredLink === social.name ? 0.7 : 1,
                            }}
                            onMouseEnter={() => setHoveredLink(social.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div style={{ borderTop: "1px solid #1e293b", paddingTop: "24px", textAlign: "center", fontSize: "14px", color: "#64748b" }}>
                    <p style={{ margin: "6px 0" }}>© {new Date().getFullYear()} {t.copyright}</p>
                    <p style={{ margin: "6px 0", fontStyle: "italic", color: "#94a3b8" }}>{t.taglineBottom}</p>
                </div>
            </div>
        </footer>
    )
}
