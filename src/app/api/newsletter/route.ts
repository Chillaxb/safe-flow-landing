import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

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

        // Content based on language
        const content = {
            en: {
                subject: "Welcome to Safe-Flow Beta!",
                greeting: "Welcome to Safe-Flow!",
                intro: "You're now on the list for early access to Safe-Flow, the breathwork app that combines ancient techniques with modern science.",
                whatNext: "What happens next?",
                points: [
                    "We'll notify you as soon as the beta is ready",
                    "You'll get exclusive breathing guides before launch",
                    "Early adopters get special lifetime pricing"
                ],
                closing: "In the meantime, feel free to explore our blog for science-backed breathwork insights.",
                signature: "Breathe well,\nThe Safe-Flow Team"
            },
            fr: {
                subject: "Bienvenue dans la Beta Safe-Flow !",
                greeting: "Bienvenue chez Safe-Flow !",
                intro: "Vous êtes maintenant inscrit pour l'accès anticipé à Safe-Flow, l'application de respiration qui combine techniques ancestrales et science moderne.",
                whatNext: "Et maintenant ?",
                points: [
                    "Nous vous préviendrons dès que la beta sera prête",
                    "Vous recevrez des guides de respiration exclusifs avant le lancement",
                    "Les early adopters bénéficieront de tarifs spéciaux à vie"
                ],
                closing: "En attendant, n'hésitez pas à explorer notre blog pour des conseils de respiration basés sur la science.",
                signature: "Respirez bien,\nL'équipe Safe-Flow"
            }
        }

        const t = content[language as "en" | "fr"] || content.en

        // Send welcome email to the subscriber
        const { error: subscriberError } = await resend.emails.send({
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
                <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <img src="https://safe-flow.ai/images/logo.png" alt="Safe-Flow" style="width: 120px; height: auto;">
                    </div>

                    <h1 style="color: #8B5CF6; font-size: 24px; margin-bottom: 20px;">${t.greeting}</h1>

                    <p style="font-size: 16px; margin-bottom: 20px;">${t.intro}</p>

                    <h2 style="color: #333; font-size: 18px; margin-top: 30px;">${t.whatNext}</h2>

                    <ul style="padding-left: 20px;">
                        ${t.points.map(point => `<li style="margin-bottom: 10px;">${point}</li>`).join("")}
                    </ul>

                    <p style="font-size: 16px; margin-top: 30px;">${t.closing}</p>

                    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                        <p style="white-space: pre-line; color: #666;">${t.signature}</p>
                    </div>

                    <div style="margin-top: 30px; text-align: center; color: #999; font-size: 12px;">
                        <p>
                            <a href="https://safe-flow.ai" style="color: #8B5CF6;">safe-flow.ai</a>
                        </p>
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
        await resend.emails.send({
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
            await resend.contacts.create({
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
