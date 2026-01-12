#!/usr/bin/env python3
"""
Génère les images inline pour les 5 articles fondamentaux.
Utilise Gemini 2.5 Flash Image (Nano Banana).
"""

import urllib.request
import urllib.error
import json
import base64
import os
from pathlib import Path

API_KEY = os.environ.get("GOOGLE_API_KEY", "")
if not API_KEY:
    raise ValueError("GOOGLE_API_KEY environment variable is required")
MODEL = "gemini-2.5-flash-image"
OUTPUT_DIR = Path("/Users/axb/safe-flow-landing/public/images/blog")

# Images à générer pour les 5 articles fondamentaux
IMAGES = [
    # 1. Wim Hof Method Science
    {
        "filename": "wim-hof-science-study.png",
        "prompt": "A scientific laboratory setting with a person practicing breathing exercises while connected to monitoring equipment. Clean, modern, medical aesthetic. Professional lighting. No text."
    },
    {
        "filename": "wim-hof-cold-exposure.png",
        "prompt": "A person taking a cold shower with visible cold vapor, showing controlled breathing posture. Minimalist bathroom setting. Blue and white tones. No text."
    },
    {
        "filename": "wim-hof-nervous-system.png",
        "prompt": "An artistic illustration of the human nervous system glowing with energy pathways, showing connection between brain and body. Scientific but artistic style. Purple and cyan gradients. No text."
    },

    # 2. HRV Explained
    {
        "filename": "hrv-heart-monitor.png",
        "prompt": "A modern smartwatch or fitness tracker displaying heart rate variability data with a clean graph visualization. Soft morning light. Technology lifestyle aesthetic. No text."
    },
    {
        "filename": "hrv-recovery-athlete.png",
        "prompt": "An athlete in relaxed recovery mode, possibly stretching or doing breathing exercises, with subtle visualization of calm heartbeat. Warm, healthy atmosphere. No text."
    },
    {
        "filename": "hrv-breathing-practice.png",
        "prompt": "Person sitting in meditation posture practicing slow breathing, with abstract visualization of calm waves emanating from their chest. Peaceful indoor setting. No text."
    },

    # 3. Vipassana Retreat
    {
        "filename": "vipassana-meditation-hall.png",
        "prompt": "A serene meditation hall with rows of cushions, natural light streaming through windows, minimalist Buddhist aesthetic. Early morning atmosphere. No text."
    },
    {
        "filename": "vipassana-silent-nature.png",
        "prompt": "A peaceful forest path or garden at a meditation retreat, emphasizing silence and solitude. Soft, contemplative lighting. No text."
    },
    {
        "filename": "vipassana-breath-awareness.png",
        "prompt": "Close-up of a person's face in deep meditation, eyes gently closed, expression of inner peace. Soft natural lighting. No text."
    },

    # 4. Slow Breathing vs Medication
    {
        "filename": "breathing-vs-pills.png",
        "prompt": "Artistic contrast showing breathing/lungs on one side and medication pills on the other, balanced scale concept. Clean medical illustration style. Neutral, scientific. No text."
    },
    {
        "filename": "slow-breathing-calm.png",
        "prompt": "Person practicing slow diaphragmatic breathing in a calm home environment, hands on belly, relaxed posture. Warm, inviting light. No text."
    },
    {
        "filename": "anxiety-relief-breathing.png",
        "prompt": "Abstract visualization of stress leaving the body through exhale, showing transformation from tension to calm. Gradient from red/orange to blue/green. No text."
    },

    # 5. Huberman Episodes (already has some, adding more)
    {
        "filename": "huberman-podcast-setup.png",
        "prompt": "Professional podcast recording setup with microphone, headphones, and scientific diagrams in background. Modern, clean studio aesthetic. No text."
    },
    {
        "filename": "huberman-brain-science.png",
        "prompt": "Artistic visualization of neural pathways in the brain related to breathing and stress response. Scientific illustration style with blue and purple tones. No text."
    },
]


def generate_image(prompt: str, filename: str) -> bool:
    """Génère une image avec Gemini API."""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}"

    full_prompt = f"""Generate a high-quality blog illustration.
Style: Modern, clean, professional.
Mood: Calm, scientific, wellness-focused.
Aspect ratio: 16:9 landscape format.
No text, logos, or watermarks in the image.

Subject: {prompt}"""

    payload = {
        "contents": [{
            "parts": [{
                "text": full_prompt
            }]
        }],
        "generationConfig": {
            "responseModalities": ["image", "text"]
        }
    }

    try:
        data = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(url, data=data, headers={
            'Content-Type': 'application/json'
        })

        print(f"  Generating: {filename}...", end=" ", flush=True)

        with urllib.request.urlopen(req, timeout=120) as response:
            result = json.loads(response.read().decode('utf-8'))

        # Extraire l'image
        for candidate in result.get("candidates", []):
            for part in candidate.get("content", {}).get("parts", []):
                if "inlineData" in part:
                    image_data = part["inlineData"]["data"]
                    image_bytes = base64.b64decode(image_data)

                    output_path = OUTPUT_DIR / filename
                    with open(output_path, "wb") as f:
                        f.write(image_bytes)

                    print(f"✅ ({len(image_bytes) // 1024}KB)")
                    return True

        print("❌ No image in response")
        return False

    except urllib.error.HTTPError as e:
        print(f"❌ HTTP {e.code}: {e.reason}")
        return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False


def main():
    print("=" * 60)
    print("🖼️  GÉNÉRATION DES IMAGES - ARTICLES FONDAMENTAUX")
    print("=" * 60)
    print(f"Output: {OUTPUT_DIR}")
    print(f"Images à générer: {len(IMAGES)}")
    print()

    # Créer le dossier si nécessaire
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    success = 0
    failed = 0

    for i, img in enumerate(IMAGES, 1):
        print(f"[{i}/{len(IMAGES)}]", end=" ")
        if generate_image(img["prompt"], img["filename"]):
            success += 1
        else:
            failed += 1

    print()
    print("=" * 60)
    print(f"✅ Réussi: {success} | ❌ Échoué: {failed}")
    print("=" * 60)

    if success > 0:
        print("\n📝 N'oublie pas d'ajouter les images aux articles !")


if __name__ == "__main__":
    main()
