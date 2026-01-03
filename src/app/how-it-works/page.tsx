"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function HowItWorksPage() {
    const [language, setLanguage] = useState<"en" | "fr">("en")

    useEffect(() => {
        const savedLang = localStorage.getItem("safe-flow-lang") as "en" | "fr" | null
        if (savedLang) {
            setLanguage(savedLang)
        }
    }, [])

    const colors = {
        primary: "#8B5CF6",        // Electric violet
        primaryLight: "#A78BFA",
        secondary: "#06B6D4",      // Vivid cyan
        secondaryLight: "#22D3EE",
        accent: "#22D3EE",         // Luminous cyan
        dark: "#0F0F1A",           // Purple-black
        text: "#334155",
        textLight: "#64748b",
        bg: "#f8fafc",
    }

    const content = {
        en: {
            heroTitle: "Your Path to Growth",
            heroSubtitle: "A simple, science-backed approach to becoming your best self—one breath at a time",
            step1Title: "Understand Where You Are",
            step1Points: [
                "Quick assessment to understand your current stress and energy levels",
                "Discover your natural rhythms and best times for practice",
                "Get a clear starting point to measure your progress",
            ],
            step2Title: "Learn Proven Techniques",
            step2Points: [
                "Wim Hof, Box Breathing, Cardiac Coherence—methods used by elite athletes",
                "Choose what fits your goals: energy, calm, focus, or recovery",
                "Progress at your own pace with guided sessions",
            ],
            step3Title: "Connect Your Devices",
            step3Points: [
                "Sync Garmin, Apple Watch, Oura, Whoop to track your journey",
                "See how your body responds during each session",
                "Optional but powerful—your data tells your story",
            ],
            step4Title: "Watch Yourself Grow",
            step4Points: [
                "See real improvements in how you handle stress",
                "Track your progress week by week",
                "Celebrate the small wins that lead to big changes",
            ],
            step5Title: "Get Personalized Guidance",
            step5Points: [
                "An AI coach that adapts to your lifestyle and goals",
                "Suggestions based on how you slept, how you feel, what you need",
                "Your practice evolves as you do",
            ],
            step6Title: "Join a Community",
            step6Points: [
                "Learn from research and experts like Huberman",
                "Connect with others on the same journey",
                "Discover local workshops and experiences",
            ],
            ctaTitle: "Ready to Start?",
            ctaButton: "Begin Your Journey",
        },
        fr: {
            heroTitle: "Votre Chemin vers la Croissance",
            heroSubtitle: "Une approche simple et validée par la science pour devenir votre meilleure version—une respiration à la fois",
            step1Title: "Comprenez Où Vous Êtes",
            step1Points: [
                "Évaluation rapide pour comprendre vos niveaux de stress et d'énergie",
                "Découvrez vos rythmes naturels et vos meilleurs moments pour pratiquer",
                "Obtenez un point de départ clair pour mesurer vos progrès",
            ],
            step2Title: "Apprenez des Techniques Éprouvées",
            step2Points: [
                "Wim Hof, Box Breathing, Cohérence Cardiaque—méthodes utilisées par les athlètes d'élite",
                "Choisissez selon vos objectifs : énergie, calme, focus ou récupération",
                "Progressez à votre rythme avec des sessions guidées",
            ],
            step3Title: "Connectez Vos Appareils",
            step3Points: [
                "Synchronisez Garmin, Apple Watch, Oura, Whoop pour suivre votre parcours",
                "Voyez comment votre corps réagit pendant chaque session",
                "Optionnel mais puissant—vos données racontent votre histoire",
            ],
            step4Title: "Observez Votre Évolution",
            step4Points: [
                "Constatez de vraies améliorations dans votre gestion du stress",
                "Suivez vos progrès semaine après semaine",
                "Célébrez les petites victoires qui mènent aux grands changements",
            ],
            step5Title: "Bénéficiez d'un Accompagnement Personnalisé",
            step5Points: [
                "Un coach IA qui s'adapte à votre style de vie et vos objectifs",
                "Suggestions basées sur votre sommeil, votre ressenti, vos besoins",
                "Votre pratique évolue avec vous",
            ],
            step6Title: "Rejoignez une Communauté",
            step6Points: [
                "Apprenez de la recherche et d'experts comme Huberman",
                "Connectez avec d'autres personnes sur le même chemin",
                "Découvrez des ateliers et expériences locales",
            ],
            ctaTitle: "Prêt à Commencer ?",
            ctaButton: "Démarrer Votre Parcours",
        },
    }

    const t = content[language]

    const steps = [
        { title: t.step1Title, points: t.step1Points },
        { title: t.step2Title, points: t.step2Points },
        { title: t.step3Title, points: t.step3Points },
        { title: t.step4Title, points: t.step4Points },
        { title: t.step5Title, points: t.step5Points },
        { title: t.step6Title, points: t.step6Points },
    ]

    // Performance-focused SVG illustrations
    const StepIllustration = ({ step }: { step: number }) => {
        const illustrations: { [key: number]: React.ReactNode } = {
            0: ( // Baseline Assessment - HRV Graph
                <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: "380px" }}>
                    <defs>
                        <linearGradient id="hrvGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={colors.primary} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={colors.primary} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <rect x="30" y="30" width="340" height="260" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    <text x="50" y="60" fontSize="14" fill={colors.dark} fontWeight="600">HRV Baseline Assessment</text>
                    <text x="50" y="80" fontSize="11" fill={colors.textLight}>Resting Heart Rate Variability</text>

                    {/* HRV waveform */}
                    <path d="M50,180 Q80,120 110,180 T170,180 T230,180 T290,180 T350,180" stroke={colors.primary} strokeWidth="3" fill="none">
                        <animate attributeName="d" values="M50,180 Q80,120 110,180 T170,180 T230,180 T290,180 T350,180;M50,180 Q80,140 110,180 T170,180 T230,180 T290,180 T350,180;M50,180 Q80,120 110,180 T170,180 T230,180 T290,180 T350,180" dur="1.5s" repeatCount="indefinite" />
                    </path>
                    <path d="M50,180 Q80,120 110,180 T170,180 T230,180 T290,180 T350,180 L350,260 L50,260 Z" fill="url(#hrvGrad)" opacity="0.5">
                        <animate attributeName="d" values="M50,180 Q80,120 110,180 T170,180 T230,180 T290,180 T350,180 L350,260 L50,260 Z;M50,180 Q80,140 110,180 T170,180 T230,180 T290,180 T350,180 L350,260 L50,260 Z;M50,180 Q80,120 110,180 T170,180 T230,180 T290,180 T350,180 L350,260 L50,260 Z" dur="1.5s" repeatCount="indefinite" />
                    </path>

                    {/* Stats boxes */}
                    <rect x="50" y="100" width="90" height="50" rx="8" fill={colors.primary} opacity="0.1" />
                    <text x="95" y="122" fontSize="18" fill={colors.primary} textAnchor="middle" fontWeight="700">58ms</text>
                    <text x="95" y="140" fontSize="9" fill={colors.textLight} textAnchor="middle">RMSSD</text>

                    <rect x="155" y="100" width="90" height="50" rx="8" fill={colors.secondary} opacity="0.1" />
                    <text x="200" y="122" fontSize="18" fill={colors.secondary} textAnchor="middle" fontWeight="700">62</text>
                    <text x="200" y="140" fontSize="9" fill={colors.textLight} textAnchor="middle">BPM</text>

                    <rect x="260" y="100" width="90" height="50" rx="8" fill={colors.accent} opacity="0.1" />
                    <text x="305" y="122" fontSize="18" fill={colors.accent} textAnchor="middle" fontWeight="700">Good</text>
                    <text x="305" y="140" fontSize="9" fill={colors.textLight} textAnchor="middle">Readiness</text>
                </svg>
            ),
            1: ( // Science Protocols - Method Cards
                <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: "380px" }}>
                    {/* Wim Hof Card */}
                    <rect x="20" y="30" width="170" height="130" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="20" y="30" width="170" height="40" rx="12" fill={colors.primary} />
                    <text x="105" y="57" fontSize="13" fill="white" textAnchor="middle" fontWeight="600">Wim Hof Method</text>
                    <text x="40" y="95" fontSize="10" fill={colors.text}>30 power breaths</text>
                    <text x="40" y="112" fontSize="10" fill={colors.text}>Breath retention</text>
                    <text x="40" y="129" fontSize="10" fill={colors.text}>Recovery breath</text>
                    <circle cx="160" cy="130" r="15" fill={colors.secondary} opacity="0.2" />
                    <path d="M155 128 L158 131 L165 124" stroke={colors.secondary} strokeWidth="2" fill="none" />

                    {/* Box Breathing Card */}
                    <rect x="210" y="30" width="170" height="130" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="210" y="30" width="170" height="40" rx="12" fill={colors.secondary} />
                    <text x="295" y="57" fontSize="13" fill="white" textAnchor="middle" fontWeight="600">Box Breathing</text>
                    <text x="230" y="95" fontSize="10" fill={colors.text}>4s inhale</text>
                    <text x="230" y="112" fontSize="10" fill={colors.text}>4s hold</text>
                    <text x="230" y="129" fontSize="10" fill={colors.text}>4s exhale • 4s hold</text>
                    <rect x="330" y="90" width="30" height="30" rx="4" stroke={colors.secondary} strokeWidth="2" fill="none" strokeDasharray="4,2">
                        <animate attributeName="stroke-dashoffset" values="0;24" dur="4s" repeatCount="indefinite" />
                    </rect>

                    {/* Cardiac Coherence Card */}
                    <rect x="115" y="180" width="170" height="130" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="115" y="180" width="170" height="40" rx="12" fill={colors.accent} />
                    <text x="200" y="207" fontSize="13" fill="white" textAnchor="middle" fontWeight="600">Cardiac Coherence</text>
                    <text x="135" y="245" fontSize="10" fill={colors.text}>5s inhale • 5s exhale</text>
                    <text x="135" y="262" fontSize="10" fill={colors.text}>0.1 Hz frequency</text>
                    <text x="135" y="279" fontSize="10" fill={colors.text}>Vagal tone activation</text>
                    {/* Sine wave */}
                    <path d="M220,270 Q235,250 250,270 T280,270" stroke={colors.accent} strokeWidth="2" fill="none">
                        <animate attributeName="d" values="M220,270 Q235,250 250,270 T280,270;M220,270 Q235,290 250,270 T280,270;M220,270 Q235,250 250,270 T280,270" dur="10s" repeatCount="indefinite" />
                    </path>
                </svg>
            ),
            2: ( // Biometrics Hub
                <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: "400px" }}>
                    <defs>
                        <linearGradient id="hubGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={colors.primary} />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>

                    {/* Central Hub */}
                    <circle cx="200" cy="160" r="55" fill="url(#hubGrad2)" />
                    <text x="200" y="152" fontSize="13" fill="white" textAnchor="middle" fontWeight="700">SafeFlow</text>
                    <text x="200" y="170" fontSize="10" fill="white" textAnchor="middle" opacity="0.9">Data Hub</text>

                    {/* Pulsing ring */}
                    <circle cx="200" cy="160" r="55" fill="none" stroke="white" strokeWidth="2" opacity="0.3">
                        <animate attributeName="r" values="55;70;55" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Connected Devices */}
                    <g>
                        <circle cx="80" cy="70" r="35" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                        <text x="80" y="65" fontSize="10" fill={colors.dark} textAnchor="middle" fontWeight="600">Garmin</text>
                        <text x="80" y="80" fontSize="8" fill={colors.textLight} textAnchor="middle">HRV • Sleep</text>
                        <line x1="110" y1="90" x2="155" y2="130" stroke={colors.primary} strokeWidth="2" opacity="0.4" />
                    </g>

                    <g>
                        <circle cx="320" cy="70" r="35" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                        <text x="320" y="65" fontSize="10" fill={colors.dark} textAnchor="middle" fontWeight="600">Whoop</text>
                        <text x="320" y="80" fontSize="8" fill={colors.textLight} textAnchor="middle">Strain • Recovery</text>
                        <line x1="290" y1="90" x2="245" y2="130" stroke={colors.secondary} strokeWidth="2" opacity="0.4" />
                    </g>

                    <g>
                        <circle cx="80" cy="250" r="35" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                        <text x="80" y="245" fontSize="10" fill={colors.dark} textAnchor="middle" fontWeight="600">Apple</text>
                        <text x="80" y="260" fontSize="8" fill={colors.textLight} textAnchor="middle">Watch • Health</text>
                        <line x1="110" y1="230" x2="155" y2="190" stroke={colors.primary} strokeWidth="2" opacity="0.4" />
                    </g>

                    <g>
                        <circle cx="320" cy="250" r="35" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                        <text x="320" y="245" fontSize="10" fill={colors.dark} textAnchor="middle" fontWeight="600">Oura</text>
                        <text x="320" y="260" fontSize="8" fill={colors.textLight} textAnchor="middle">Readiness • Temp</text>
                        <line x1="290" y1="230" x2="245" y2="190" stroke={colors.accent} strokeWidth="2" opacity="0.4" />
                    </g>
                </svg>
            ),
            3: ( // Progress Tracking - Charts
                <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: "380px" }}>
                    <rect x="30" y="30" width="340" height="260" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    <text x="50" y="58" fontSize="14" fill={colors.dark} fontWeight="600">HRV Progress</text>
                    <text x="50" y="75" fontSize="11" fill={colors.textLight}>21-Day Protocol Results</text>

                    {/* Trend line going up */}
                    <polyline points="60,220 100,210 140,200 180,185 220,170 260,150 300,130 340,100"
                        stroke={colors.secondary} strokeWidth="3" fill="none" strokeLinecap="round" />

                    {/* Data points */}
                    <circle cx="60" cy="220" r="5" fill={colors.secondary} />
                    <circle cx="100" cy="210" r="5" fill={colors.secondary} />
                    <circle cx="140" cy="200" r="5" fill={colors.secondary} />
                    <circle cx="180" cy="185" r="5" fill={colors.secondary} />
                    <circle cx="220" cy="170" r="5" fill={colors.secondary} />
                    <circle cx="260" cy="150" r="5" fill={colors.secondary} />
                    <circle cx="300" cy="130" r="5" fill={colors.secondary} />
                    <circle cx="340" cy="100" r="5" fill={colors.secondary}>
                        <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" />
                    </circle>

                    {/* Result callout */}
                    <rect x="240" y="55" width="120" height="55" rx="8" fill={colors.secondary} opacity="0.1" />
                    <text x="300" y="78" fontSize="20" fill={colors.secondary} textAnchor="middle" fontWeight="700">+23%</text>
                    <text x="300" y="98" fontSize="10" fill={colors.textLight} textAnchor="middle">HRV Improvement</text>

                    {/* Axis labels */}
                    <text x="55" y="245" fontSize="9" fill={colors.textLight}>Day 1</text>
                    <text x="330" y="245" fontSize="9" fill={colors.textLight}>Day 21</text>

                    {/* Secondary metric */}
                    <rect x="50" y="250" width="80" height="30" rx="6" fill={colors.primary} opacity="0.1" />
                    <text x="90" y="270" fontSize="10" fill={colors.primary} textAnchor="middle" fontWeight="600">-42% Stress</text>
                </svg>
            ),
            4: ( // AI Optimization
                <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: "380px" }}>
                    <rect x="30" y="30" width="340" height="260" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="2" />

                    {/* AI Avatar */}
                    <circle cx="80" cy="80" r="30" fill={colors.primary} opacity="0.1" />
                    <circle cx="80" cy="80" r="20" fill={colors.primary} />
                    {/* Neural network pattern */}
                    <circle cx="72" cy="75" r="3" fill="white" />
                    <circle cx="88" cy="75" r="3" fill="white" />
                    <circle cx="80" cy="88" r="3" fill="white" />
                    <line x1="72" y1="75" x2="80" y2="88" stroke="white" strokeWidth="1" />
                    <line x1="88" y1="75" x2="80" y2="88" stroke="white" strokeWidth="1" />
                    <line x1="72" y1="75" x2="88" y2="75" stroke="white" strokeWidth="1" />

                    <text x="120" y="73" fontSize="13" fill={colors.dark} fontWeight="600">AI Coach</text>
                    <text x="120" y="90" fontSize="10" fill={colors.textLight}>Based on your data</text>

                    {/* Recommendation cards */}
                    <rect x="50" y="120" width="300" height="50" rx="8" fill={colors.secondary} opacity="0.1" />
                    <circle cx="80" cy="145" r="15" fill={colors.secondary} opacity="0.3" />
                    <text x="80" y="150" fontSize="14" fill={colors.secondary} textAnchor="middle">↑</text>
                    <text x="105" y="140" fontSize="11" fill={colors.dark} fontWeight="500">Recovery score high today</text>
                    <text x="105" y="155" fontSize="10" fill={colors.textLight}>Increase intensity to Level 3</text>

                    <rect x="50" y="180" width="300" height="50" rx="8" fill={colors.accent} opacity="0.1" />
                    <circle cx="80" cy="205" r="15" fill={colors.accent} opacity="0.3" />
                    <text x="80" y="210" fontSize="14" fill={colors.accent} textAnchor="middle">◐</text>
                    <text x="105" y="200" fontSize="11" fill={colors.dark} fontWeight="500">Poor sleep detected</text>
                    <text x="105" y="215" fontSize="10" fill={colors.textLight}>Try 4-7-8 breathing before bed</text>

                    <rect x="50" y="240" width="300" height="40" rx="8" fill={colors.primary} opacity="0.1" />
                    <circle cx="80" cy="260" r="15" fill={colors.primary} opacity="0.3" />
                    <text x="80" y="265" fontSize="14" fill={colors.primary} textAnchor="middle">★</text>
                    <text x="105" y="265" fontSize="11" fill={colors.dark} fontWeight="500">7-day streak! Your HRV baseline is improving.</text>
                </svg>
            ),
            5: ( // Research & Community
                <svg viewBox="0 0 400 320" style={{ width: "100%", maxWidth: "380px" }}>
                    {/* Research card */}
                    <rect x="20" y="40" width="175" height="120" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="20" y="40" width="175" height="45" rx="12" fill={colors.primary} opacity="0.1" />
                    <text x="40" y="70" fontSize="11" fill={colors.primary} fontWeight="600">Research Library</text>
                    <text x="40" y="100" fontSize="10" fill={colors.dark}>Huberman Lab</text>
                    <text x="40" y="116" fontSize="10" fill={colors.dark}>Peer-reviewed studies</text>
                    <text x="40" y="132" fontSize="10" fill={colors.dark}>Protocol deep-dives</text>
                    <rect x="150" y="95" width="30" height="50" rx="4" fill={colors.primary} opacity="0.2" />
                    <text x="165" y="125" fontSize="20" fill={colors.primary} textAnchor="middle">📚</text>

                    {/* Community card */}
                    <rect x="205" y="40" width="175" height="120" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="205" y="40" width="175" height="45" rx="12" fill={colors.secondary} opacity="0.1" />
                    <text x="225" y="70" fontSize="11" fill={colors.secondary} fontWeight="600">Community</text>
                    <text x="225" y="100" fontSize="10" fill={colors.dark}>2,340 active members</text>
                    <text x="225" y="116" fontSize="10" fill={colors.dark}>Athletes & performers</text>
                    <text x="225" y="132" fontSize="10" fill={colors.dark}>Daily challenges</text>
                    {/* People icons */}
                    <circle cx="345" cy="105" r="12" fill={colors.secondary} opacity="0.3" />
                    <circle cx="360" cy="115" r="12" fill={colors.secondary} opacity="0.4" />
                    <circle cx="350" cy="130" r="12" fill={colors.secondary} opacity="0.5" />

                    {/* Experience card */}
                    <rect x="115" y="180" width="175" height="120" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                    <rect x="115" y="180" width="175" height="45" rx="12" fill={colors.accent} opacity="0.1" />
                    <text x="135" y="210" fontSize="11" fill={colors.accent} fontWeight="600">Local Experiences</text>
                    <text x="135" y="240" fontSize="10" fill={colors.dark}>Ice bath workshops</text>
                    <text x="135" y="256" fontSize="10" fill={colors.dark}>Breathwork sessions</text>
                    <text x="135" y="272" fontSize="10" fill={colors.dark}>Near Annecy, France</text>
                    {/* Location pin */}
                    <circle cx="255" cy="255" r="20" fill={colors.accent} opacity="0.2" />
                    <text x="255" y="262" fontSize="18" fill={colors.accent} textAnchor="middle">📍</text>
                </svg>
            ),
        }
        return illustrations[step] || null
    }

    return (
        <div style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif", width: "100%" }}>
            {/* Hero */}
            <section
                style={{
                    padding: "140px 48px 100px",
                    background: `linear-gradient(135deg, ${colors.dark} 0%, #1e293b 100%)`,
                    color: "white",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Subtle grid pattern */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(${colors.primary}20 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                    opacity: 0.5,
                }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 16px",
                        background: `${colors.primary}20`,
                        borderRadius: "50px",
                        marginBottom: "24px",
                    }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: colors.secondary }} />
                        <span style={{ fontSize: "13px", color: colors.secondary, fontWeight: 500 }}>
                            {language === "en" ? "Data-Driven Optimization" : "Optimisation Basée sur les Données"}
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: "clamp(40px, 6vw, 64px)",
                        fontWeight: 300,
                        margin: "0 0 24px 0",
                        letterSpacing: "-2px",
                    }}>
                        {t.heroTitle}
                    </h1>
                    <p style={{
                        fontSize: "clamp(16px, 2vw, 20px)",
                        opacity: 0.8,
                        maxWidth: "700px",
                        margin: "0 auto",
                        lineHeight: 1.6,
                    }}>
                        {t.heroSubtitle}
                    </p>
                </div>
            </section>

            {/* Steps */}
            {steps.map((step, index) => (
                <section
                    key={index}
                    style={{
                        padding: "100px 48px",
                        background: index % 2 === 0 ? "white" : colors.bg,
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1100px",
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "80px",
                            alignItems: "center",
                        }}
                    >
                        {/* Text - alternates position */}
                        <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                            <div style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                background: colors.primary,
                                color: "white",
                                fontWeight: 600,
                                fontSize: "16px",
                                marginBottom: "20px",
                            }}>
                                {index + 1}
                            </div>
                            <h2 style={{
                                fontSize: "clamp(28px, 3.5vw, 40px)",
                                marginBottom: "32px",
                                color: colors.dark,
                                fontWeight: 400,
                                letterSpacing: "-1px",
                            }}>
                                {step.title}
                            </h2>
                            {step.points.map((point, idx) => (
                                <div key={idx} style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px" }}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flexShrink: 0, marginTop: "3px", marginRight: "14px" }}>
                                        <circle cx="10" cy="10" r="10" fill={colors.secondary} opacity="0.15" />
                                        <path d="M6 10 L9 13 L14 7" stroke={colors.secondary} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p style={{ fontSize: "17px", lineHeight: 1.7, color: colors.text, margin: 0 }}>
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Illustration */}
                        <div style={{ order: index % 2 === 0 ? 2 : 1, display: "flex", justifyContent: "center" }}>
                            <StepIllustration step={index} />
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section
                style={{
                    padding: "120px 48px",
                    background: `linear-gradient(135deg, ${colors.dark} 0%, #1e293b 100%)`,
                    textAlign: "center",
                    position: "relative",
                }}
            >
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(${colors.primary}15 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                    <h2 style={{
                        fontSize: "clamp(32px, 4vw, 48px)",
                        fontWeight: 300,
                        color: "white",
                        marginBottom: "16px",
                        letterSpacing: "-1px",
                    }}>
                        {t.ctaTitle}
                    </h2>
                    <p style={{
                        fontSize: "18px",
                        color: "rgba(255,255,255,0.7)",
                        marginBottom: "40px",
                        maxWidth: "500px",
                        margin: "0 auto 40px",
                    }}>
                        {language === "en"
                            ? "Join thousands optimizing their performance with science."
                            : "Rejoignez des milliers de personnes optimisant leur performance avec la science."}
                    </p>
                    <Link
                        href="https://app.safe-flow.ai"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "18px 40px",
                            background: colors.primary,
                            color: "white",
                            borderRadius: "12px",
                            fontWeight: 600,
                            fontSize: "17px",
                            textDecoration: "none",
                            boxShadow: `0 8px 32px ${colors.primary}40`,
                            transition: "all 0.3s ease",
                        }}
                    >
                        {t.ctaButton}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 900px) {
                    section > div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                    section > div > div[style*="order"] {
                        order: unset !important;
                    }
                }
            `}</style>
        </div>
    )
}
