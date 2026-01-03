"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const colors = {
    primary: "#8B5CF6",        // Electric violet
    primaryLight: "#A78BFA",
    secondary: "#06B6D4",      // Vivid cyan
    secondaryLight: "#22D3EE",
}

const BreathingSLogo = ({ size = 40 }: { size?: number }) => {
    const [breathScale, setBreathScale] = useState(1)

    useEffect(() => {
        const breathe = () => setBreathScale((prev) => (prev === 1 ? 1.08 : 1))
        const interval = setInterval(breathe, 4000)
        return () => clearInterval(interval)
    }, [])

    const glowIntensity = breathScale === 1 ? 0.2 : 0.4

    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `scale(${breathScale})`,
                transition: "transform 4s ease-in-out",
            }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                style={{
                    filter: `drop-shadow(0 0 ${breathScale === 1 ? 8 : 12}px rgba(139, 92, 246, ${glowIntensity}))`,
                    transition: "filter 4s ease-in-out",
                }}
            >
                <defs>
                    <linearGradient id="navSGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={colors.primary}>
                            <animate
                                attributeName="stop-color"
                                values={`${colors.primary};${colors.primaryLight};${colors.primary}`}
                                dur="4s"
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="50%" stopColor={colors.secondary}>
                            <animate
                                attributeName="stop-color"
                                values={`${colors.secondary};${colors.secondaryLight};${colors.secondary}`}
                                dur="4s"
                                repeatCount="indefinite"
                            />
                        </stop>
                        <stop offset="100%" stopColor={colors.primaryLight}>
                            <animate
                                attributeName="stop-color"
                                values={`${colors.primaryLight};${colors.primary};${colors.primaryLight}`}
                                dur="4s"
                                repeatCount="indefinite"
                            />
                        </stop>
                    </linearGradient>
                    <filter id="navSGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur">
                            <animate attributeName="stdDeviation" values="1;3;1" dur="4s" repeatCount="indefinite" />
                        </feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <circle cx="50" cy="50" r="45" fill="none" stroke={colors.primary} strokeWidth="1" opacity="0.1">
                    <animate attributeName="r" values="42;48;42" dur="4s" repeatCount="indefinite" />
                </circle>
                <path
                    d="M 68 22 C 90 22, 88 45, 50 50 C 12 55, 10 78, 32 78 C 48 78, 52 72, 52 72"
                    fill="none"
                    stroke="url(#navSGradient)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    filter="url(#navSGlow)"
                >
                    <animate
                        attributeName="d"
                        values="M 68 22 C 90 22, 88 45, 50 50 C 12 55, 10 78, 32 78 C 48 78, 52 72, 52 72;M 65 18 C 92 18, 92 48, 50 52 C 8 56, 8 82, 35 82 C 52 82, 56 76, 56 76;M 68 22 C 90 22, 88 45, 50 50 C 12 55, 10 78, 32 78 C 48 78, 52 72, 52 72"
                        dur="4s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                    />
                    <animate attributeName="stroke-width" values="10;12;10" dur="4s" repeatCount="indefinite" />
                </path>
                <path
                    d="M 68 22 C 90 22, 88 45, 50 50 C 12 55, 10 78, 32 78"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.5"
                    strokeDasharray="12 88"
                >
                    <animate attributeName="stroke-dashoffset" values="0;-100" dur="2s" repeatCount="indefinite" />
                </path>
                <circle cx="68" cy="22" r="5" fill={colors.primary} opacity="0.8">
                    <animate attributeName="r" values="4;6;4" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="52" cy="72" r="5" fill={colors.secondary} opacity="0.8">
                    <animate attributeName="r" values="4;6;4" dur="4s" repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
    )
}

const GlobeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
)

interface NavigationProps {
    isSticky?: boolean
}

export default function Navigation({ isSticky = true }: NavigationProps) {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [language, setLanguage] = useState<"en" | "fr">("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("safe-flow-lang") as "en" | "fr" | null
        if (savedLang) {
            setLanguage(savedLang)
        }
    }, [])

    const getLocalizedUrl = (url: string) => {
        return url // Keep URLs simple, no /fr prefix
    }

    const switchLanguage = () => {
        const newLanguage = language === "en" ? "fr" : "en"
        localStorage.setItem("safe-flow-lang", newLanguage)
        setLanguage(newLanguage)
        window.location.reload() // Reload to update all components
    }

    const content = {
        en: {
            home: "Home",
            howItWorks: "How it Works",
            about: "About",
            login: "Login",
            getStarted: "Get Started",
        },
        fr: {
            home: "Accueil",
            howItWorks: "Fonctionnement",
            about: "À Propos",
            login: "Connexion",
            getStarted: "Commencer",
        },
    }

    const t = content[language]

    const navLinks = [
        { href: "/", label: t.home },
        { href: "/how-it-works", label: t.howItWorks },
        { href: "/about", label: t.about },
    ]

    return (
        <div style={{ width: "100%", position: "relative" }}>
            <nav
                style={{
                    position: isSticky ? "sticky" : "relative",
                    top: isSticky ? 0 : "auto",
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(12px)",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        padding: "12px 24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "24px",
                    }}
                >
                    <Link href={getLocalizedUrl("/")} style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", flexShrink: 0 }}>
                        <BreathingSLogo size={40} />
                        <span
                            style={{
                                fontSize: "18px",
                                fontWeight: 700,
                                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Safe-Flow
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={getLocalizedUrl(link.href)}
                                style={{
                                    padding: "10px 16px",
                                    borderRadius: "10px",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: pathname === getLocalizedUrl(link.href) ? "#8B5CF6" : "#475569",
                                    background: pathname === getLocalizedUrl(link.href) ? "#f0f9ff" : "transparent",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Section - Desktop */}
                    <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                        <button
                            onClick={switchLanguage}
                            aria-label={language === "en" ? "Passer en français" : "Switch to English"}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "8px 12px",
                                background: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "8px",
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#475569",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                            }}
                        >
                            <GlobeIcon />
                            {language === "en" ? "FR" : "EN"}
                        </button>

                        <Link
                            href="https://app.safe-flow.ai"
                            style={{
                                padding: "10px 20px",
                                background: "white",
                                color: "#6366f1",
                                border: "2px solid #6366f1",
                                borderRadius: "10px",
                                fontWeight: 600,
                                fontSize: "14px",
                                textDecoration: "none",
                                transition: "all 0.2s ease",
                            }}
                        >
                            {t.login}
                        </Link>

                        <Link
                            href="https://app.safe-flow.ai"
                            style={{
                                padding: "10px 20px",
                                background: "linear-gradient(135deg, #6366f1, #10b981)",
                                color: "white",
                                border: "none",
                                borderRadius: "10px",
                                fontWeight: 600,
                                fontSize: "14px",
                                textDecoration: "none",
                                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
                                transition: "all 0.2s ease",
                            }}
                        >
                            {t.getStarted}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <button
                            onClick={switchLanguage}
                            aria-label={language === "en" ? "Passer en français" : "Switch to English"}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "40px",
                                height: "40px",
                                background: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "10px",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#475569",
                                cursor: "pointer",
                            }}
                        >
                            {language === "en" ? "FR" : "EN"}
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
                            aria-expanded={mobileMenuOpen}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "5px",
                                width: "40px",
                                height: "40px",
                                background: mobileMenuOpen ? "#6366f1" : "white",
                                border: "2px solid #6366f1",
                                borderRadius: "10px",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                        >
                            <span style={{ width: "20px", height: "2px", background: mobileMenuOpen ? "white" : "#6366f1", borderRadius: "2px", transition: "all 0.3s ease", transform: mobileMenuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
                            <span style={{ width: "20px", height: "2px", background: mobileMenuOpen ? "white" : "#6366f1", borderRadius: "2px", transition: "all 0.3s ease", opacity: mobileMenuOpen ? 0 : 1 }} />
                            <span style={{ width: "20px", height: "2px", background: mobileMenuOpen ? "white" : "#6366f1", borderRadius: "2px", transition: "all 0.3s ease", transform: mobileMenuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <>
                    <div
                        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.5)", zIndex: 999 }}
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div
                        style={{
                            position: "fixed",
                            top: "72px",
                            left: 0,
                            right: 0,
                            background: "white",
                            maxHeight: "calc(100vh - 72px)",
                            overflowY: "auto",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                            zIndex: 1000,
                            padding: "16px",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={getLocalizedUrl(link.href)}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        padding: "14px 16px",
                                        borderRadius: "12px",
                                        textDecoration: "none",
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        color: "#1e293b",
                                        background: pathname === getLocalizedUrl(link.href) ? "#f0f9ff" : "transparent",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div style={{ height: "1px", background: "#f1f5f9", margin: "12px 0" }} />
                            <Link
                                href="https://app.safe-flow.ai"
                                style={{
                                    padding: "14px 20px",
                                    background: "white",
                                    color: "#6366f1",
                                    border: "2px solid #6366f1",
                                    borderRadius: "12px",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    textDecoration: "none",
                                    textAlign: "center",
                                }}
                            >
                                {t.login}
                            </Link>
                            <Link
                                href="https://app.safe-flow.ai"
                                style={{
                                    padding: "14px 20px",
                                    background: "linear-gradient(135deg, #6366f1, #10b981)",
                                    color: "white",
                                    borderRadius: "12px",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    textDecoration: "none",
                                    textAlign: "center",
                                    boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
                                }}
                            >
                                {t.getStarted}
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
