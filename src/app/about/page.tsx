"use client"

import { useState, useEffect } from "react"

export default function AboutPage() {
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
            heroTitle: "The Story Behind Safe-Flow",
            heroSubtitle: "A personal journey toward becoming my best self—and helping you do the same",

            introTitle: "Why I Built This",
            introParagraph1:
                "I created Safe-Flow because I believe everyone deserves access to the tools that can genuinely change their life. Not quick fixes or empty promises—but proven methods that help you grow, day by day.",
            introParagraph2:
                "This isn't about perfection. It's about progress. It's about building a practice that fits your life and helps you become who you want to be.",

            credentialsTitle: "My Practice",
            credentialsList: [
                "Wim Hof Method camps with IceMind instructors",
                "10-day Vipassana meditation retreats annually",
                "60+ hours of breathwork practice monthly",
                "Tracking my own journey since 2019",
            ],

            journeyTitle: "My Journey",
            journeyParagraph1:
                "I've walked this path myself. I've done the Iceman workshops, the cold exposure, the thousands of breathing sessions. I know what it feels like to start from zero and see real change.",
            journeyParagraph2:
                "I've explored Wim Hof, Box Breathing, Tummo, cardiac coherence. I've studied the research—Huberman, Porges, Nestor. And most importantly, I've experienced the transformation firsthand.",
            journeyParagraph3:
                "What I learned: the methods work. But consistency is everything. That's why I built Safe-Flow—to help you stay on track and see your progress.",

            scienceTitle: "Grounded in Science",
            scienceParagraph1:
                "Every technique in Safe-Flow is backed by research. We don't chase trends—we include what's proven to work, so you can trust your practice.",
            scienceParagraph2:
                "Heart Rate Variability (HRV) is one way to see your progress objectively. It reflects how well your body handles stress and recovers. As your HRV improves, you'll feel the difference.",

            visionTitle: "Who This Is For",
            visionParagraph1:
                "Safe-Flow is for anyone who wants to grow. Athletes looking for an edge. Professionals managing stress. Students building focus. Parents finding balance. Anyone committed to becoming their best self.",
            visionParagraph2:
                "I want this to be the place where you discover what works for you—through practice, not promises.",
            visionParagraph3:
                "Your journey is unique. The science is here to guide you. Safe-Flow is here to support you.",

            closingQuote:
                "The best version of yourself is built one breath at a time.",
            closingAuthor: "Axel, Founder of Safe-Flow",
            closingLocation: "Annecy, France",
        },
        fr: {
            heroTitle: "L'Histoire Derrière Safe-Flow",
            heroSubtitle: "Un parcours personnel vers ma meilleure version—et vous aider à faire de même",

            introTitle: "Pourquoi J'ai Créé Ça",
            introParagraph1:
                "J'ai créé Safe-Flow parce que je crois que chacun mérite d'accéder aux outils qui peuvent vraiment changer sa vie. Pas de solutions miracles ou de promesses vides—mais des méthodes éprouvées qui vous aident à progresser, jour après jour.",
            introParagraph2:
                "Il ne s'agit pas de perfection. Il s'agit de progression. Il s'agit de construire une pratique qui s'adapte à votre vie et vous aide à devenir qui vous voulez être.",

            credentialsTitle: "Ma Pratique",
            credentialsList: [
                "Stages Méthode Wim Hof avec les instructeurs IceMind",
                "Retraites Vipassana de 10 jours chaque année",
                "60+ heures de pratique de respiration par mois",
                "Je suis mon propre parcours depuis 2019",
            ],

            journeyTitle: "Mon Parcours",
            journeyParagraph1:
                "J'ai parcouru ce chemin moi-même. J'ai fait les stages Iceman, l'exposition au froid, des milliers de sessions de respiration. Je sais ce que c'est de partir de zéro et de voir un vrai changement.",
            journeyParagraph2:
                "J'ai exploré Wim Hof, Box Breathing, Tummo, cohérence cardiaque. J'ai étudié la recherche—Huberman, Porges, Nestor. Et surtout, j'ai vécu la transformation de première main.",
            journeyParagraph3:
                "Ce que j'ai appris : les méthodes fonctionnent. Mais la constance est tout. C'est pourquoi j'ai créé Safe-Flow—pour vous aider à rester sur la bonne voie et voir vos progrès.",

            scienceTitle: "Ancré dans la Science",
            scienceParagraph1:
                "Chaque technique dans Safe-Flow est soutenue par la recherche. Nous ne suivons pas les tendances—nous incluons ce qui est prouvé, pour que vous puissiez faire confiance à votre pratique.",
            scienceParagraph2:
                "La Variabilité de la Fréquence Cardiaque (HRV) est un moyen de voir vos progrès objectivement. Elle reflète comment votre corps gère le stress et récupère. À mesure que votre HRV s'améliore, vous sentirez la différence.",

            visionTitle: "Pour Qui C'est Fait",
            visionParagraph1:
                "Safe-Flow est pour tous ceux qui veulent progresser. Des athlètes cherchant un avantage. Des professionnels gérant leur stress. Des étudiants construisant leur focus. Des parents trouvant l'équilibre. Tous ceux qui s'engagent à devenir leur meilleure version.",
            visionParagraph2:
                "Je veux que ce soit l'endroit où vous découvrez ce qui fonctionne pour vous—par la pratique, pas les promesses.",
            visionParagraph3:
                "Votre parcours est unique. La science est là pour vous guider. Safe-Flow est là pour vous accompagner.",

            closingQuote:
                "La meilleure version de vous-même se construit une respiration à la fois.",
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
