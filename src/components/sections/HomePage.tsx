"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

const colors = {
    primary: "#8B5CF6",        // Electric violet
    primaryLight: "#A78BFA",
    primaryDark: "#7C3AED",
    secondary: "#06B6D4",      // Vivid cyan
    secondaryLight: "#22D3EE",
    accent: "#22D3EE",         // Luminous cyan
    background: "#f9fafb",
    dark: "#0F0F1A",           // Purple-black
    white: "#ffffff",
    textDark: "#0F0F1A",
    textMuted: "#64748b",
    textLight: "#94a3b8",
    border: "#1e293b",
}

// ============================================
// BREATHING S LOGO COMPONENT
// ============================================
const BreathingSLogo = ({ breathScale }: { breathScale: number }) => {
    const glowIntensity = breathScale === 1 ? 0.3 : 0.6

    return (
        <svg
            width="140"
            height="140"
            viewBox="0 0 100 100"
            style={{
                filter: `drop-shadow(0 0 ${breathScale === 1 ? 15 : 25}px rgba(139, 92, 246, ${glowIntensity}))`,
                transition: "filter 4s ease-in-out",
            }}
        >
            <defs>
                <linearGradient id="sGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={colors.primary}>
                        <animate attributeName="stop-color" values={`${colors.primary};${colors.primaryLight};${colors.primary}`} dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor={colors.secondary}>
                        <animate attributeName="stop-color" values={`${colors.secondary};${colors.secondaryLight};${colors.secondary}`} dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor={colors.primaryLight}>
                        <animate attributeName="stop-color" values={`${colors.primaryLight};${colors.primary};${colors.primaryLight}`} dur="4s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
                <filter id="sGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur">
                        <animate attributeName="stdDeviation" values="2;4;2" dur="4s" repeatCount="indefinite" />
                    </feGaussianBlur>
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <circle cx="50" cy="50" r="45" fill="none" stroke={colors.primary} strokeWidth="0.5" opacity="0.15">
                <animate attributeName="r" values="40;48;40" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.15;0.25;0.15" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="38" fill="none" stroke={colors.secondary} strokeWidth="0.5" opacity="0.1">
                <animate attributeName="r" values="35;42;35" dur="4s" begin="0.5s" repeatCount="indefinite" />
            </circle>

            {[0, 1, 2, 3, 4, 5].map((i) => (
                <circle key={i} cx={30 + i * 8} cy={25 + i * 10} r="1.5" fill={i % 2 === 0 ? colors.primary : colors.secondary} opacity="0.4">
                    <animate attributeName="cy" values={`${25 + i * 10};${20 + i * 10};${25 + i * 10}`} dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
            ))}

            <path
                d="M 68 22 C 90 22, 88 45, 50 50 C 12 55, 10 78, 32 78 C 48 78, 52 72, 52 72"
                fill="none"
                stroke="url(#sGradient)"
                strokeWidth="9"
                strokeLinecap="round"
                filter="url(#sGlow)"
            >
                <animate
                    attributeName="d"
                    values="M 68 22 C 90 22, 88 45, 50 50 C 12 55, 10 78, 32 78 C 48 78, 52 72, 52 72;M 65 18 C 92 18, 92 48, 50 52 C 8 56, 8 82, 35 82 C 52 82, 56 76, 56 76;M 68 22 C 90 22, 88 45, 50 50 C 12 55, 10 78, 32 78 C 48 78, 52 72, 52 72"
                    dur="4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                />
            </path>

            <path d="M 68 22 C 90 22, 88 45, 50 50 C 12 55, 10 78, 32 78" fill="none" stroke={colors.white} strokeWidth="3" strokeLinecap="round" opacity="0.5" strokeDasharray="15 85">
                <animate attributeName="stroke-dashoffset" values="0;-100" dur="2.5s" repeatCount="indefinite" />
            </path>

            <circle cx="68" cy="22" r="5" fill={colors.primary} opacity="0.9">
                <animate attributeName="r" values="4;6;4" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="52" cy="72" r="5" fill={colors.secondary} opacity="0.9">
                <animate attributeName="r" values="4;6;4" dur="4s" repeatCount="indefinite" />
            </circle>
        </svg>
    )
}

// ============================================
// SVG ICONS - Performance oriented
// ============================================
const ScienceIcon = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="35" fill={colors.primary} opacity="0.1" />
        <path d="M35 30 L35 55 L25 75 L75 75 L65 55 L65 30" stroke={colors.primary} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="35" y1="30" x2="65" y2="30" stroke={colors.primary} strokeWidth="3" strokeLinecap="round" />
        <circle cx="42" cy="65" r="4" fill={colors.secondary}>
            <animate attributeName="cy" values="65;60;65" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="55" cy="62" r="3" fill={colors.primary}>
            <animate attributeName="cy" values="62;58;62" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="68" r="2.5" fill={colors.secondaryLight}>
            <animate attributeName="cy" values="68;64;68" dur="1.8s" repeatCount="indefinite" />
        </circle>
    </svg>
)

const HRVIcon = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="15" y="20" width="70" height="60" rx="8" fill={colors.white} stroke={colors.primary} strokeWidth="2" />
        <polyline
            points="25,50 35,50 40,35 50,65 60,40 65,50 75,50"
            stroke={colors.secondary}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <animate attributeName="points" values="25,50 35,50 40,35 50,65 60,40 65,50 75,50;25,50 35,50 40,40 50,60 60,45 65,50 75,50;25,50 35,50 40,35 50,65 60,40 65,50 75,50" dur="1.5s" repeatCount="indefinite" />
        </polyline>
        <text x="50" y="90" fontSize="10" fill={colors.textMuted} textAnchor="middle" fontWeight="600">HRV</text>
    </svg>
)

const AICoachIcon = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="35" r="18" fill={colors.primary} opacity="0.15" />
        <circle cx="50" cy="35" r="12" fill={colors.primary}>
            <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="46" cy="33" r="2" fill={colors.white} />
        <circle cx="54" cy="33" r="2" fill={colors.white} />
        <path d="M45 38 Q50 42 55 38" stroke={colors.white} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M30 60 L50 50 L70 60" stroke={colors.secondary} strokeWidth="2" fill="none" strokeDasharray="4 2">
            <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M25 75 L50 62 L75 75" stroke={colors.primary} strokeWidth="2" fill="none" strokeDasharray="4 2">
            <animate attributeName="stroke-dashoffset" values="0;-12" dur="1.2s" repeatCount="indefinite" />
        </path>
        <circle cx="30" cy="60" r="4" fill={colors.secondary} />
        <circle cx="70" cy="60" r="4" fill={colors.secondary} />
        <circle cx="25" cy="75" r="4" fill={colors.primary} />
        <circle cx="75" cy="75" r="4" fill={colors.primary} />
    </svg>
)

export default function HomePage() {
    const [breathScale, setBreathScale] = useState(1)
    const [hoveredButton, setHoveredButton] = useState<string | null>(null)
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)
    const [language, setLanguage] = useState<"en" | "fr">("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("safe-flow-lang") as "en" | "fr" | null
        if (savedLang) {
            setLanguage(savedLang)
        }
    }, [])

    useEffect(() => {
        const breathe = () => setBreathScale((prev) => (prev === 1 ? 1.15 : 1))
        const interval = setInterval(breathe, 4000)
        return () => clearInterval(interval)
    }, [])

    const content = {
        en: {
            heroTitle1: "Become Your",
            heroTitle2: "Best Self",
            heroSubtitle: "Science-backed breathing protocols and personalized coaching to help you grow, perform, and thrive—on your own terms.",
            heroTag: "For athletes, competitors & anyone who wants to grow",
            ctaButton: "Start your journey",
            learnMore: "How it works",

            card1Title: "Proven Methods",
            card1Text: "Wim Hof, Box Breathing, Cardiac Coherence—techniques used by elite athletes and validated by science.",
            card2Title: "Track Your Progress",
            card2Text: "Connect your wearables to see real improvements in HRV, recovery, and stress resilience over time.",
            card3Title: "Personalized Guidance",
            card3Text: "An AI coach that learns your rhythms and helps you build sustainable habits for lasting growth.",

            statsTitle: "Results That Matter",
            stat1: "68%",
            stat1Label: "feel calmer and more focused",
            stat2: "23%",
            stat2Label: "HRV improvement in 21 days",
            stat3: "4min",
            stat3Label: "to shift your state of mind",

            ctaTitle: "Ready to grow?",
            ctaSubtitle: "Join a community of people committed to becoming their best selves through consistent practice.",

            integrations: "Integrates with",
        },
        fr: {
            heroTitle1: "Devenez Votre",
            heroTitle2: "Meilleure Version",
            heroSubtitle: "Protocoles respiratoires validés par la science et coaching personnalisé pour progresser, performer et s'épanouir—à votre rythme.",
            heroTag: "Pour sportifs, compétiteurs & ceux qui veulent progresser",
            ctaButton: "Commencer le voyage",
            learnMore: "Comment ça marche",

            card1Title: "Méthodes Éprouvées",
            card1Text: "Wim Hof, Box Breathing, Cohérence Cardiaque—des techniques utilisées par les athlètes d'élite et validées par la science.",
            card2Title: "Suivez Vos Progrès",
            card2Text: "Connectez vos wearables pour voir vos améliorations réelles en HRV, récupération et résilience au stress.",
            card3Title: "Accompagnement Personnalisé",
            card3Text: "Un coach IA qui apprend vos rythmes et vous aide à construire des habitudes durables pour une croissance durable.",

            statsTitle: "Des Résultats Concrets",
            stat1: "68%",
            stat1Label: "se sentent plus calmes et concentrés",
            stat2: "23%",
            stat2Label: "amélioration HRV en 21 jours",
            stat3: "4min",
            stat3Label: "pour changer votre état d'esprit",

            ctaTitle: "Prêt à progresser ?",
            ctaSubtitle: "Rejoignez une communauté de personnes engagées à devenir leur meilleure version grâce à une pratique régulière.",

            integrations: "S'intègre avec",
        },
    }

    const t = content[language]

    const cards = [
        { title: t.card1Title, text: t.card1Text, card: "card1", icon: <ScienceIcon /> },
        { title: t.card2Title, text: t.card2Text, card: "card2", icon: <HRVIcon /> },
        { title: t.card3Title, text: t.card3Text, card: "card3", icon: <AICoachIcon /> },
    ]

    const getGlowIntensity = () => {
        return breathScale === 1
            ? `0 0 40px rgba(139, 92, 246, 0.2), 0 0 80px rgba(139, 92, 246, 0.1)`
            : `0 0 60px rgba(139, 92, 246, 0.4), 0 0 120px rgba(139, 92, 246, 0.2), 0 0 180px rgba(6, 182, 212, 0.15)`
    }

    return (
        <div style={{ width: "100%", background: colors.white }}>
            {/* Hero Section */}
            <section
                style={{
                    padding: "80px 48px 100px",
                    background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.background} 100%)`,
                    minHeight: "90vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", width: "100%" }}>
                    {/* Tag */}
                    <div
                        style={{
                            display: "inline-block",
                            padding: "8px 20px",
                            background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
                            borderRadius: "50px",
                            marginBottom: "32px",
                        }}
                    >
                        <span style={{ fontSize: "14px", fontWeight: 600, color: colors.primary }}>
                            {t.heroTag}
                        </span>
                    </div>

                    {/* Breathing S Logo */}
                    <div style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}>
                        <div
                            style={{
                                width: "160px",
                                height: "160px",
                                borderRadius: "50%",
                                background: `radial-gradient(circle, ${colors.primary}15 0%, ${colors.primary}05 70%, transparent 100%)`,
                                boxShadow: getGlowIntensity(),
                                transform: `scale(${breathScale})`,
                                transition: "transform 4s ease-in-out, box-shadow 4s ease-in-out",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <BreathingSLogo breathScale={breathScale} />
                        </div>
                    </div>

                    <h1
                        style={{
                            fontSize: "clamp(40px, 6vw, 64px)",
                            fontWeight: 700,
                            color: colors.textDark,
                            marginBottom: "24px",
                            lineHeight: 1.1,
                            letterSpacing: "-2px",
                        }}
                    >
                        {t.heroTitle1}
                        <br />
                        <span style={{
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>
                            {t.heroTitle2}
                        </span>
                    </h1>

                    <p
                        style={{
                            fontSize: "clamp(18px, 2vw, 22px)",
                            color: colors.textMuted,
                            marginBottom: "48px",
                            maxWidth: "700px",
                            margin: "0 auto 48px",
                            lineHeight: 1.6,
                        }}
                    >
                        {t.heroSubtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "60px" }}>
                        <Link
                            href="https://app.safe-flow.ai"
                            style={{
                                padding: "18px 48px",
                                background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
                                color: "white",
                                borderRadius: "12px",
                                fontWeight: 600,
                                fontSize: "17px",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "12px",
                                boxShadow: hoveredButton === "cta" ? `0 20px 40px rgba(99, 102, 241, 0.4)` : `0 8px 24px rgba(99, 102, 241, 0.3)`,
                                transform: hoveredButton === "cta" ? "translateY(-2px)" : "translateY(0)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={() => setHoveredButton("cta")}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            {t.ctaButton}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>

                        <Link
                            href="/how-it-works"
                            style={{
                                padding: "12px 24px",
                                color: colors.textMuted,
                                fontSize: "15px",
                                fontWeight: 500,
                                textDecoration: "none",
                            }}
                        >
                            {t.learnMore} →
                        </Link>
                    </div>

                    {/* Integrations */}
                    <div style={{ opacity: 0.6 }}>
                        <p style={{ fontSize: "13px", color: colors.textLight, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
                            {t.integrations}
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
                            {["Garmin", "Apple Health", "Oura", "Strava"].map((brand) => (
                                <span key={brand} style={{ fontSize: "14px", fontWeight: 600, color: colors.textMuted }}>
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: "80px 48px", background: colors.white }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, color: colors.textDark, marginBottom: "60px" }}>
                        {t.statsTitle}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
                        {[
                            { value: t.stat1, label: t.stat1Label },
                            { value: t.stat2, label: t.stat2Label },
                            { value: t.stat3, label: t.stat3Label },
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: "center" }}>
                                <div style={{
                                    fontSize: "clamp(40px, 5vw, 56px)",
                                    fontWeight: 700,
                                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    marginBottom: "12px",
                                }}>
                                    {stat.value}
                                </div>
                                <p style={{ fontSize: "15px", color: colors.textMuted, lineHeight: 1.5 }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section style={{ padding: "80px 48px", background: colors.background }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "32px",
                        }}
                    >
                        {cards.map((item) => (
                            <div
                                key={item.card}
                                style={{
                                    textAlign: "center",
                                    padding: "48px 40px",
                                    borderRadius: "20px",
                                    background: colors.white,
                                    border: `1px solid ${hoveredCard === item.card ? colors.primary : colors.border}`,
                                    transform: hoveredCard === item.card ? "translateY(-8px)" : "translateY(0)",
                                    boxShadow: hoveredCard === item.card ? `0 25px 50px rgba(99, 102, 241, 0.15)` : `0 4px 20px rgba(0,0,0,0.04)`,
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={() => setHoveredCard(item.card)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div style={{ marginBottom: "24px", display: "flex", justifyContent: "center" }}>{item.icon}</div>
                                <h3 style={{ fontSize: "20px", fontWeight: 600, color: colors.textDark, marginBottom: "16px" }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: "15px", color: colors.textMuted, lineHeight: 1.7 }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                style={{
                    padding: "100px 48px",
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, color: colors.white, marginBottom: "24px" }}>
                        {t.ctaTitle}
                    </h2>
                    <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)", marginBottom: "40px", lineHeight: 1.7 }}>
                        {t.ctaSubtitle}
                    </p>
                    <Link
                        href="https://app.safe-flow.ai"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "18px 40px",
                            background: colors.white,
                            color: colors.primary,
                            borderRadius: "12px",
                            fontWeight: 600,
                            fontSize: "17px",
                            textDecoration: "none",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        }}
                    >
                        {t.ctaButton}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    )
}
