import { Resend } from "resend"
import { NextResponse } from "next/server"

// Lazy initialization to avoid build-time errors when API key is not set
let resend: Resend | null = null
function getResend() {
    if (!resend) {
        resend = new Resend(process.env.RESEND_API_KEY)
    }
    return resend
}

// Your verified sender email from Resend
const SENDER_EMAIL = "Safe-Flow <noreply@safe-flow.ai>"
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "contact@safe-flow.ai"

export async function POST(request: Request) {
    try {
        const { email, language = "en" } = await request.json()

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Valid email required" },
                { status: 400 }
            )
        }

        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not configured")
            return NextResponse.json(
                { error: "Email service not configured" },
                { status: 500 }
            )
        }

        // App Store link
        const APP_STORE_URL = "https://apps.apple.com/app/safeflow-ai-breathwork-coach/id6755822625"

        // Content based on language
        const content = {
            en: {
                subject: "Welcome to Safe-Flow - Download the App!",
                greeting: "Welcome to Safe-Flow!",
                intro: "Thank you for joining our community of people committed to becoming their best selves through breathwork.",
                appReady: "The app is ready for you",
                appDescription: "Safe-Flow is now available on the App Store. Download it today and start your journey with science-backed breathing protocols.",
                downloadButton: "Download on the App Store",
                features: [
                    "Guided breathing sessions (Wim Hof, Box Breathing, Coherence)",
                    "Real-time HRV tracking with Apple Watch",
                    "Personalized AI coaching",
                    "Progress tracking and insights"
                ],
                earlyAdopter: "As an early adopter, you'll get:",
                earlyBenefits: [
                    "Exclusive access to new features before everyone else",
                    "Direct line to our team for feedback",
                    "Special pricing when premium launches"
                ],
                closing: "Questions? Just reply to this email—we read every message.",
                signature: "Breathe well,\nAxel & The Safe-Flow Team"
            },
            fr: {
                subject: "Bienvenue chez Safe-Flow - Téléchargez l'App !",
                greeting: "Bienvenue chez Safe-Flow !",
                intro: "Merci de rejoindre notre communauté de personnes engagées à devenir leur meilleure version grâce au breathwork.",
                appReady: "L'app est prête pour vous",
                appDescription: "Safe-Flow est maintenant disponible sur l'App Store. Téléchargez-la aujourd'hui et commencez votre parcours avec des protocoles respiratoires validés par la science.",
                downloadButton: "Télécharger sur l'App Store",
                features: [
                    "Sessions guidées (Wim Hof, Box Breathing, Cohérence)",
                    "Suivi VFC en temps réel avec Apple Watch",
                    "Coaching IA personnalisé",
                    "Suivi des progrès et analyses"
                ],
                earlyAdopter: "En tant qu'early adopter, vous bénéficiez de :",
                earlyBenefits: [
                    "Accès exclusif aux nouvelles fonctionnalités avant tout le monde",
                    "Ligne directe avec notre équipe pour vos retours",
                    "Tarifs spéciaux au lancement premium"
                ],
                closing: "Des questions ? Répondez simplement à cet email—nous lisons chaque message.",
                signature: "Respirez bien,\nAxel & L'équipe Safe-Flow"
            }
        }

        const t = content[language as "en" | "fr"] || content.en

        // Send welcome email to the subscriber
        const { error: subscriberError } = await getResend().emails.send({
            from: SENDER_EMAIL,
            to: email,
            subject: t.subject,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
                    <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">

                        <!-- Header with logo -->
                        <div style="text-align: center; margin-bottom: 32px;">
                            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #8B5CF6, #06B6D4); border-radius: 16px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                                <span style="color: white; font-size: 28px; font-weight: bold;">S</span>
                            </div>
                            <h1 style="color: #0F0F1A; font-size: 28px; margin: 0; font-weight: 700;">${t.greeting}</h1>
                        </div>

                        <p style="font-size: 16px; color: #64748b; margin-bottom: 32px; text-align: center;">${t.intro}</p>

                        <!-- App Ready Section -->
                        <div style="background: linear-gradient(135deg, #8B5CF615, #06B6D415); border-radius: 12px; padding: 24px; margin-bottom: 32px; text-align: center;">
                            <h2 style="color: #8B5CF6; font-size: 20px; margin: 0 0 12px 0;">${t.appReady}</h2>
                            <p style="color: #64748b; font-size: 15px; margin: 0 0 24px 0;">${t.appDescription}</p>

                            <!-- App Store Button -->
                            <a href="${APP_STORE_URL}" style="display: inline-block; text-decoration: none;">
                                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="${t.downloadButton}" style="height: 50px; width: auto;">
                            </a>
                        </div>

                        <!-- Features -->
                        <div style="margin-bottom: 32px;">
                            <h3 style="color: #0F0F1A; font-size: 16px; margin: 0 0 16px 0; font-weight: 600;">What you'll get:</h3>
                            <ul style="padding-left: 0; margin: 0; list-style: none;">
                                ${t.features.map(feature => `
                                    <li style="margin-bottom: 12px; padding-left: 28px; position: relative; color: #64748b; font-size: 15px;">
                                        <span style="position: absolute; left: 0; color: #8B5CF6;">✓</span>
                                        ${feature}
                                    </li>
                                `).join("")}
                            </ul>
                        </div>

                        <!-- Early Adopter Benefits -->
                        <div style="background: #0F0F1A; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                            <h3 style="color: #06B6D4; font-size: 16px; margin: 0 0 16px 0; font-weight: 600;">${t.earlyAdopter}</h3>
                            <ul style="padding-left: 0; margin: 0; list-style: none;">
                                ${t.earlyBenefits.map(benefit => `
                                    <li style="margin-bottom: 10px; padding-left: 24px; position: relative; color: rgba(255,255,255,0.8); font-size: 14px;">
                                        <span style="position: absolute; left: 0; color: #06B6D4;">→</span>
                                        ${benefit}
                                    </li>
                                `).join("")}
                            </ul>
                        </div>

                        <!-- Closing -->
                        <p style="font-size: 15px; color: #64748b; margin-bottom: 24px;">${t.closing}</p>

                        <div style="border-top: 1px solid #e2e8f0; padding-top: 24px;">
                            <p style="white-space: pre-line; color: #0F0F1A; font-size: 15px; margin: 0;">${t.signature}</p>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div style="text-align: center; margin-top: 24px; color: #94a3b8; font-size: 12px;">
                        <p style="margin: 0 0 8px 0;">
                            <a href="https://safe-flow.ai" style="color: #8B5CF6; text-decoration: none;">safe-flow.ai</a>
                        </p>
                        <p style="margin: 0;">Science-backed breathwork for a better you</p>
                    </div>
                </body>
                </html>
            `
        })

        if (subscriberError) {
            console.error("Subscriber email error:", subscriberError)
            return NextResponse.json(
                { error: "Failed to send confirmation email" },
                { status: 500 }
            )
        }

        // Send notification to admin
        await getResend().emails.send({
            from: SENDER_EMAIL,
            to: ADMIN_EMAIL,
            subject: `New Beta Signup: ${email}`,
            html: `
                <h2>New Beta Signup</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Language:</strong> ${language}</p>
                <p><strong>Date:</strong> ${new Date().toISOString()}</p>
                <p><strong>Source:</strong> Blog Newsletter Form</p>
            `
        })

        // Also add to Resend audience (contacts) if you have one
        // You can set up an audience in Resend dashboard
        try {
            await getResend().contacts.create({
                email: email,
                audienceId: process.env.RESEND_AUDIENCE_ID || "",
                unsubscribed: false,
            })
        } catch {
            // Audience might not be configured, continue anyway
            console.log("Audience not configured or contact already exists")
        }

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error("Newsletter signup error:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
