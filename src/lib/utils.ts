// Client-safe utility functions

export function formatDate(dateString: string, lang: "en" | "fr"): string {
    const date = new Date(dateString)
    return date.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}
