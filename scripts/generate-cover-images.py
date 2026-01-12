#!/usr/bin/env python3
"""
Generate cover images for all blog articles using Gemini Nano Banana API
"""

import urllib.request
import urllib.error
import base64
import json
import os
import time

API_KEY = os.environ.get("GOOGLE_API_KEY", "")
if not API_KEY:
    raise ValueError("GOOGLE_API_KEY environment variable is required")
MODEL = "gemini-2.5-flash-image"
OUTPUT_DIR = "/Users/axb/safe-flow-landing/public/images/blog/covers"

# Cover image prompts for each article
COVER_IMAGES = [
    # Science articles
    {
        "filename": "wim-hof-science.png",
        "prompt": "Wim Hof style ice bath scene, person meditating in frozen lake surrounded by snow-covered mountains, dramatic winter landscape, breath visible in cold air, cinematic photography, blue and white tones"
    },
    {
        "filename": "hrv-explained.png",
        "prompt": "Heart rate variability visualization, abstract digital heart with flowing data waves, modern health technology concept, purple and cyan gradient, clean minimalist design, futuristic medical illustration"
    },
    {
        "filename": "box-breathing.png",
        "prompt": "Navy SEAL doing controlled breathing exercise, silhouette against sunrise ocean, calm focused warrior, military discipline meets meditation, dramatic golden hour lighting, cinematic composition"
    },
    {
        "filename": "vagal-tone.png",
        "prompt": "Abstract artistic representation of vagus nerve glowing with energy, connecting brain to heart, bioluminescent neural pathway, deep blue and purple tones, mystical anatomy illustration"
    },
    {
        "filename": "brain-breathwork.png",
        "prompt": "Human brain with glowing neural connections during meditation, synapses firing in patterns, neuroscience meets mindfulness, vibrant purple and blue energy, scientific illustration style"
    },

    # Reviews articles
    {
        "filename": "huberman-episodes.png",
        "prompt": "Podcast studio setup with microphone and waveform visualization, neuroscience books in background, modern content creator space, warm ambient lighting, professional podcast aesthetic"
    },
    {
        "filename": "james-nestor-breath.png",
        "prompt": "Open book with breath visualization rising from pages, atmospheric reading scene, warm library lighting, knowledge and wellness concept, artistic book photography"
    },
    {
        "filename": "wim-hof-youtube.png",
        "prompt": "YouTube play button overlaid on ice and snow landscape, digital content meets nature, modern streaming aesthetic, red and white on blue ice, tutorial learning concept"
    },
    {
        "filename": "oxygen-advantage.png",
        "prompt": "Athletic runner with visible breath flow diagram, sports performance optimization, dynamic movement with scientific overlay, high-performance training concept, energetic photography"
    },
    {
        "filename": "meditation-apps.png",
        "prompt": "Multiple smartphone screens floating showing meditation interfaces, app comparison concept, soft purple and teal glow, modern digital wellness, clean product photography"
    },

    # Adventures articles
    {
        "filename": "vipassana-retreat.png",
        "prompt": "Serene meditation hall at sunrise, rows of cushions, morning light streaming through windows, peaceful retreat atmosphere, mindful silence, warm golden tones"
    },
    {
        "filename": "ice-bath-alps.png",
        "prompt": "Person in ice bath with dramatic Alpine peaks in background, steam rising from cold water, extreme mountain wellness, adventure photography, epic landscape"
    },
    {
        "filename": "breathwork-himalayas.png",
        "prompt": "Yogi doing breathwork at high altitude with Himalayan peaks visible, thin mountain air, spiritual mountain practice, dramatic clouds below, adventure meets spirituality"
    },
    {
        "filename": "sacred-ceremonies.png",
        "prompt": "Mystical breathwork ceremony setting with candles and soft lighting, sacred space for healing, ceremonial atmosphere, warm amber tones, spiritual gathering"
    },
    {
        "filename": "30-day-challenge.png",
        "prompt": "Calendar with checkmarks and breathing icons, 30-day transformation journey, progress tracking visualization, motivational challenge concept, clean modern design"
    },

    # Research articles
    {
        "filename": "slow-breathing-study.png",
        "prompt": "Scientific research laboratory with breathing measurement equipment, clinical study setting, medical research environment, professional healthcare, blue and white tones"
    },
    {
        "filename": "stanford-sighing.png",
        "prompt": "Stanford University campus architecture with palm trees, prestigious research institution, golden California sunlight, academic excellence, warm sandstone buildings"
    },
    {
        "filename": "cold-immunity.png",
        "prompt": "Immune system cells visualization with cold water droplets, microscopic biology meets cold therapy, scientific illustration, blue and white cellular imagery, health research concept"
    },
    {
        "filename": "anxiety-trials.png",
        "prompt": "Calm person finding peace through breathing, anxiety relief concept, before and after mental state, soft peaceful lighting, mental health wellness, therapeutic atmosphere"
    },
    {
        "filename": "polyvagal-theory.png",
        "prompt": "Artistic diagram of autonomic nervous system with three colored pathways, safety green ventral vagal, alert red sympathetic, shutdown blue dorsal, modern medical illustration"
    },
]


def generate_image(prompt: str, filename: str) -> bool:
    """Generate an image using Gemini API and save it"""

    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}"

    payload = {
        "contents": [{
            "parts": [{
                "text": f"Generate a high-quality cover image for a blog article: {prompt}. Make it visually striking and professional, suitable as a hero image. Aspect ratio should be landscape 16:9."
            }]
        }],
        "generationConfig": {
            "responseModalities": ["image", "text"]
        }
    }

    try:
        print(f"Generating: {filename}...")

        data_bytes = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(
            url,
            data=data_bytes,
            headers={'Content-Type': 'application/json'},
            method='POST'
        )

        with urllib.request.urlopen(req, timeout=120) as response:
            data = json.loads(response.read().decode('utf-8'))

        # Extract image data from response
        if "candidates" in data and len(data["candidates"]) > 0:
            parts = data["candidates"][0]["content"]["parts"]
            for part in parts:
                if "inlineData" in part:
                    image_data = part["inlineData"]["data"]
                    image_bytes = base64.b64decode(image_data)

                    filepath = os.path.join(OUTPUT_DIR, filename)
                    with open(filepath, "wb") as f:
                        f.write(image_bytes)

                    print(f"  ✓ Saved: {filename}")
                    return True

        print(f"  ✗ No image data in response")
        return False

    except urllib.error.HTTPError as e:
        print(f"  ✗ HTTP Error: {e.code} - {e.reason}")
        return False
    except Exception as e:
        print(f"  ✗ Error: {e}")
        return False


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"Generating {len(COVER_IMAGES)} cover images...")
    print(f"Output directory: {OUTPUT_DIR}")
    print()

    success_count = 0
    for image_config in COVER_IMAGES:
        if generate_image(image_config["prompt"], image_config["filename"]):
            success_count += 1
        time.sleep(1.5)  # Rate limiting

    print()
    print(f"Done! Generated {success_count}/{len(COVER_IMAGES)} images.")


if __name__ == "__main__":
    main()
