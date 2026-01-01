"use client"

import { usePathname } from "next/navigation"

export default function AboutPage() {
    const pathname = usePathname()
    const language = pathname?.startsWith("/fr") ? "fr" : "en"

    const colors = {
        primary: "#6366f1",
        secondary: "#22c55e",
        accent: "#f59e0b",
        dark: "#0f172a",
        text: "#334155",
        textLight: "#64748b",
        bg: "#f8fafc",
    }

    const content = {
        en: {
            heroTitle: "The Story Behind Safe-Flow",
            heroSubtitle: "From personal experimentation to science-backed optimization",

            introTitle: "Why I Built This",
            introParagraph1:
                "I built Safe-Flow because I was tired of wellness apps that promised transformation without substance. I wanted a tool that respects the science, tracks real metrics, and actually delivers measurable results.",
            introParagraph2:
                "This isn't about selling you a 'feel-good' method. It's about giving you protocols backed by peer-reviewed research and the biofeedback tools to prove they work for you.",

            credentialsTitle: "My Training",
            credentialsList: [
                "Certified Wim Hof Method instructor (Level 2)",
                "10-day Vipassana meditation retreats annually",
                "60+ hours of breathwork practice monthly",
                "Personal HRV tracking since 2019",
            ],

            journeyTitle: "The Experimentation",
            journeyParagraph1:
                "I've been my own lab rat. I've completed multiple Iceman workshops, pushed through extreme cold exposure protocols, and logged thousands of breathing sessions with HRV monitoring.",
            journeyParagraph2:
                "I've tested everything: Wim Hof, Box Breathing, Tummo, Holotropic breathwork, cardiac coherence. I've read the studies—Huberman, Porges, Nestor. And I've measured the results on my own body.",
            journeyParagraph3:
                "The conclusion? The protocols work. But only when you track, adapt, and stay consistent. That's what Safe-Flow is designed to help you do.",

            scienceTitle: "The Science-First Approach",
            scienceParagraph1:
                "Every protocol in Safe-Flow is grounded in peer-reviewed research. We don't include techniques just because they're trending—we include them because the data supports their efficacy.",
            scienceParagraph2:
                "Heart Rate Variability (HRV) is our north star metric. It's the most reliable indicator of nervous system regulation, recovery capacity, and stress resilience. When your HRV improves, everything else follows.",

            visionTitle: "The Vision",
            visionParagraph1:
                "Safe-Flow is for people who want results, not rituals. Athletes optimizing recovery. Entrepreneurs managing stress. High-performers building resilience.",
            visionParagraph2:
                "I want this to be the platform where you discover what actually works for your unique physiology—backed by your own data, not marketing claims.",
            visionParagraph3:
                "Your optimization is personal. The science is universal. Safe-Flow bridges the gap.",

            closingQuote:
                "The protocols work. But only when you track, adapt, and stay consistent.",
            closingAuthor: "Axel, Founder of Safe-Flow",
            closingLocation: "Annecy, France",
        },
        fr: {
            heroTitle: "L'Histoire Derrière Safe-Flow",
            heroSubtitle: "De l'expérimentation personnelle à l'optimisation basée sur la science",

            introTitle: "Pourquoi J'ai Créé Ça",
            introParagraph1:
                "J'ai créé Safe-Flow parce que j'en avais assez des applications bien-être qui promettaient la transformation sans substance. Je voulais un outil qui respecte la science, suit des métriques réelles, et délivre des résultats mesurables.",
            introParagraph2:
                "Il ne s'agit pas de vous vendre une méthode 'feel-good'. Il s'agit de vous donner des protocoles soutenus par la recherche et les outils de biofeedback pour prouver qu'ils fonctionnent pour vous.",

            credentialsTitle: "Ma Formation",
            credentialsList: [
                "Instructeur certifié Méthode Wim Hof (Niveau 2)",
                "Retraites Vipassana de 10 jours annuellement",
                "60+ heures de pratique de respiration mensuelle",
                "Suivi HRV personnel depuis 2019",
            ],

            journeyTitle: "L'Expérimentation",
            journeyParagraph1:
                "J'ai été mon propre cobaye. J'ai complété plusieurs stages Iceman, poussé à travers des protocoles d'exposition au froid extrême, et enregistré des milliers de sessions de respiration avec monitoring HRV.",
            journeyParagraph2:
                "J'ai tout testé : Wim Hof, Box Breathing, Tummo, respiration Holotropique, cohérence cardiaque. J'ai lu les études—Huberman, Porges, Nestor. Et j'ai mesuré les résultats sur mon propre corps.",
            journeyParagraph3:
                "La conclusion ? Les protocoles fonctionnent. Mais seulement quand vous suivez, adaptez et restez constant. C'est ce que Safe-Flow est conçu pour vous aider à faire.",

            scienceTitle: "L'Approche Science-First",
            scienceParagraph1:
                "Chaque protocole dans Safe-Flow est ancré dans la recherche peer-reviewed. Nous n'incluons pas des techniques juste parce qu'elles sont tendance—nous les incluons parce que les données soutiennent leur efficacité.",
            scienceParagraph2:
                "La Variabilité de la Fréquence Cardiaque (HRV) est notre métrique de référence. C'est l'indicateur le plus fiable de la régulation du système nerveux, la capacité de récupération et la résilience au stress. Quand votre HRV s'améliore, tout le reste suit.",

            visionTitle: "La Vision",
            visionParagraph1:
                "Safe-Flow est pour ceux qui veulent des résultats, pas des rituels. Des athlètes optimisant leur récupération. Des entrepreneurs gérant leur stress. Des performers construisant leur résilience.",
            visionParagraph2:
                "Je veux que ce soit la plateforme où vous découvrez ce qui fonctionne vraiment pour votre physiologie unique—soutenu par vos propres données, pas des arguments marketing.",
            visionParagraph3:
                "Votre optimisation est personnelle. La science est universelle. Safe-Flow fait le pont.",

            closingQuote:
                "Les protocoles fonctionnent. Mais seulement quand vous suivez, adaptez et restez constant.",
            closingAuthor: "Axel, Fondateur de Safe-Flow",
            closingLocation: "Annecy, France",
        },
    }

    const t = content[language]

    return (
        <div
            style={{
                fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                background: colors.bg,
                color: colors.dark,
                minHeight: "100vh",
            }}
        >
            {/* Hero Section */}
            <section
                style={{
                    padding: "140px 48px 100px",
                    background: `linear-gradient(135deg, ${colors.dark} 0%, #1e293b 100%)`,
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Grid pattern */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `radial-gradient(${colors.primary}20 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                    opacity: 0.5,
                }} />

                <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div
                        style={{
                            width: "2px",
                            height: "60px",
                            background: `linear-gradient(180deg, transparent, ${colors.primary}, transparent)`,
                            margin: "0 auto 40px",
                            opacity: 0.8,
                        }}
                    />
                    <h1
                        style={{
                            fontSize: "clamp(36px, 5vw, 56px)",
                            fontWeight: 300,
                            lineHeight: 1.2,
                            marginBottom: "24px",
                            letterSpacing: "-1.5px",
                            color: "white",
                        }}
                    >
                        {t.heroTitle}
                    </h1>
                    <p
                        style={{
                            fontSize: "clamp(16px, 2vw, 20px)",
                            lineHeight: 1.6,
                            color: "rgba(255,255,255,0.7)",
                            fontWeight: 400,
                        }}
                    >
                        {t.heroSubtitle}
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section style={{ padding: "100px 48px", background: "white" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontSize: "clamp(24px, 3vw, 32px)",
                            fontWeight: 400,
                            marginBottom: "32px",
                            color: colors.dark,
                            letterSpacing: "-0.5px",
                        }}
                    >
                        {t.introTitle}
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: 1.8,
                            marginBottom: "24px",
                            color: colors.text,
                        }}
                    >
                        {t.introParagraph1}
                    </p>
                    <p style={{ fontSize: "18px", lineHeight: 1.8, color: colors.text }}>
                        {t.introParagraph2}
                    </p>
                </div>
            </section>

            {/* Credentials Section */}
            <section style={{ padding: "80px 48px", background: colors.bg }}>
                <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontSize: "clamp(24px, 3vw, 32px)",
                            fontWeight: 400,
                            marginBottom: "32px",
                            color: colors.dark,
                            letterSpacing: "-0.5px",
                        }}
                    >
                        {t.credentialsTitle}
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {t.credentialsList.map((credential, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    padding: "16px 20px",
                                    background: "white",
                                    borderRadius: "12px",
                                    border: "1px solid #e2e8f0",
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                                    <circle cx="12" cy="12" r="12" fill={colors.secondary} opacity="0.15" />
                                    <path d="M7 12 L10 15 L17 8" stroke={colors.secondary} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span style={{ fontSize: "16px", color: colors.text }}>{credential}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section style={{ padding: "100px 48px", background: "white" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontSize: "clamp(24px, 3vw, 32px)",
                            fontWeight: 400,
                            marginBottom: "32px",
                            color: colors.dark,
                            letterSpacing: "-0.5px",
                        }}
                    >
                        {t.journeyTitle}
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: 1.8,
                            marginBottom: "24px",
                            color: colors.text,
                        }}
                    >
                        {t.journeyParagraph1}
                    </p>
                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: 1.8,
                            marginBottom: "24px",
                            color: colors.text,
                        }}
                    >
                        {t.journeyParagraph2}
                    </p>
                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: 1.8,
                            color: colors.primary,
                            fontWeight: 500,
                            padding: "20px",
                            background: `${colors.primary}08`,
                            borderRadius: "12px",
                            borderLeft: `4px solid ${colors.primary}`,
                        }}
                    >
                        {t.journeyParagraph3}
                    </p>
                </div>
            </section>

            {/* Science Section */}
            <section style={{ padding: "100px 48px", background: colors.bg }}>
                <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 16px",
                        background: `${colors.secondary}15`,
                        borderRadius: "50px",
                        marginBottom: "24px",
                    }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: colors.secondary }} />
                        <span style={{ fontSize: "13px", color: colors.secondary, fontWeight: 500 }}>
                            {language === "en" ? "Research-Backed" : "Basé sur la Recherche"}
                        </span>
                    </div>
                    <h2
                        style={{
                            fontSize: "clamp(24px, 3vw, 32px)",
                            fontWeight: 400,
                            marginBottom: "32px",
                            color: colors.dark,
                            letterSpacing: "-0.5px",
                        }}
                    >
                        {t.scienceTitle}
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: 1.8,
                            marginBottom: "24px",
                            color: colors.text,
                        }}
                    >
                        {t.scienceParagraph1}
                    </p>
                    <p style={{ fontSize: "18px", lineHeight: 1.8, color: colors.text }}>
                        {t.scienceParagraph2}
                    </p>

                    {/* HRV Visual */}
                    <div style={{
                        marginTop: "40px",
                        padding: "32px",
                        background: "white",
                        borderRadius: "16px",
                        border: "1px solid #e2e8f0",
                    }}>
                        <svg viewBox="0 0 400 100" style={{ width: "100%", maxWidth: "400px", display: "block", margin: "0 auto" }}>
                            <text x="200" y="20" fontSize="12" fill={colors.textLight} textAnchor="middle" fontWeight="500">
                                {language === "en" ? "Heart Rate Variability" : "Variabilité Cardiaque"}
                            </text>
                            <path d="M20,60 L60,60 L70,40 L80,80 L90,60 L130,60 L140,40 L150,80 L160,60 L200,60 L210,40 L220,80 L230,60 L270,60 L280,40 L290,80 L300,60 L340,60 L350,40 L360,80 L370,60 L380,60"
                                stroke={colors.primary} strokeWidth="2.5" fill="none" strokeLinecap="round">
                                <animate attributeName="stroke-dashoffset" values="400;0" dur="2s" repeatCount="indefinite" />
                            </path>
                        </svg>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section style={{ padding: "100px 48px", background: "white" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontSize: "clamp(24px, 3vw, 32px)",
                            fontWeight: 400,
                            marginBottom: "32px",
                            color: colors.dark,
                            letterSpacing: "-0.5px",
                        }}
                    >
                        {t.visionTitle}
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: 1.8,
                            marginBottom: "24px",
                            color: colors.text,
                        }}
                    >
                        {t.visionParagraph1}
                    </p>
                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: 1.8,
                            marginBottom: "24px",
                            color: colors.text,
                        }}
                    >
                        {t.visionParagraph2}
                    </p>
                    <p style={{ fontSize: "18px", lineHeight: 1.8, color: colors.text, fontWeight: 500 }}>
                        {t.visionParagraph3}
                    </p>
                </div>
            </section>

            {/* Closing Quote Section */}
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

                <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div
                        style={{
                            width: "40px",
                            height: "2px",
                            background: colors.primary,
                            margin: "0 auto 40px",
                        }}
                    />
                    <p
                        style={{
                            fontSize: "clamp(20px, 3vw, 28px)",
                            lineHeight: 1.6,
                            color: "white",
                            marginBottom: "40px",
                            fontWeight: 300,
                            fontStyle: "italic",
                        }}
                    >
                        "{t.closingQuote}"
                    </p>
                    <div style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)" }}>
                        <div
                            style={{
                                fontWeight: 500,
                                color: "white",
                                marginBottom: "8px",
                            }}
                        >
                            {t.closingAuthor}
                        </div>
                        <div>{t.closingLocation}</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
