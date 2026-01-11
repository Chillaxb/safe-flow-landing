#!/usr/bin/env python3
"""
Generate blog images using Gemini Nano Banana API
"""

import urllib.request
import urllib.error
import base64
import json
import os
import time

API_KEY = "AIzaSyATQh8h192o74vBJN0gDdAbptpYKIXdkWk"
MODEL = "gemini-2.5-flash-image"
OUTPUT_DIR = "/Users/axb/safe-flow-landing/public/images/blog"

# Image prompts for each article section
IMAGES_TO_GENERATE = [
    # Cold exposure article
    {
        "filename": "cold-radboud-study.png",
        "prompt": "Scientific laboratory research setting with petri dishes and test tubes, medical research on immune system, blue and white clinical atmosphere, professional photography style"
    },
    {
        "filename": "cold-shower-morning.png",
        "prompt": "Person taking a refreshing cold shower, water droplets visible, morning light through bathroom window, energetic and invigorating mood, lifestyle photography"
    },
    {
        "filename": "cold-practice-safe.png",
        "prompt": "Person doing controlled breathing before cold water exposure, outdoor nature setting with mountains, zen and mindful atmosphere, warm sunrise colors"
    },

    # Polyvagal theory article
    {
        "filename": "polyvagal-nervous-system.png",
        "prompt": "Abstract artistic representation of the human nervous system, vagus nerve pathway highlighted in soft purple, calming medical illustration style, modern and clean design"
    },
    {
        "filename": "polyvagal-three-states.png",
        "prompt": "Three faces showing different emotional states: calm/connected, alert/stressed, shutdown/disconnected - artistic illustration, soft colors, psychological wellness theme"
    },
    {
        "filename": "polyvagal-breathing.png",
        "prompt": "Person in meditation pose doing deep breathing exercises, soft natural light, plants around, peaceful home environment, wellness photography"
    },
    {
        "filename": "polyvagal-practice.png",
        "prompt": "Hands placed on heart and belly during breathwork practice, close-up shot, warm soft lighting, mindfulness and self-care theme"
    },

    # Breathwork anxiety article
    {
        "filename": "anxiety-breathing.png",
        "prompt": "Person sitting peacefully doing breathing exercises, soft natural light, calm indoor environment, mental health and wellness theme, hopeful atmosphere"
    },
    {
        "filename": "anxiety-clinical-research.png",
        "prompt": "Modern clinical research setting, brain scan imagery on screens, professional medical environment, blue and white tones, scientific credibility"
    },
    {
        "filename": "anxiety-slow-breathing.png",
        "prompt": "Close-up of person with closed eyes doing slow deep breathing, serene expression, soft natural lighting, therapeutic calm atmosphere"
    },
    {
        "filename": "anxiety-daily-practice.png",
        "prompt": "Morning routine scene: person on yoga mat doing breathing exercises by window, sunrise light, plants, peaceful home setting, daily wellness ritual"
    },

    # Stanford cyclic sighing article
    {
        "filename": "stanford-university.png",
        "prompt": "Stanford University campus architecture, iconic palm trees and sandstone buildings, golden California sunlight, prestigious academic setting"
    },
    {
        "filename": "stanford-results.png",
        "prompt": "Scientific data visualization, graphs showing improvement trends, modern infographic style, purple and teal colors, research results presentation"
    },
    {
        "filename": "stanford-technique.png",
        "prompt": "Diagram showing cyclic sighing breathing technique: double inhale then long exhale, simple clean illustration, instructional style, calming colors"
    },
    {
        "filename": "stanford-routine.png",
        "prompt": "Person doing 5-minute breathing routine at desk, office environment, taking a mindful break, stress relief at work theme, natural lighting"
    },
]


def generate_image(prompt: str, filename: str) -> bool:
    """Generate an image using Gemini API and save it"""

    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}"

    payload = {
        "contents": [{
            "parts": [{
                "text": f"Generate an image: {prompt}"
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

                    print(f"  Saved: {filepath}")
                    return True

        print(f"  Error: No image data in response")
        return False

    except urllib.error.HTTPError as e:
        print(f"  HTTP Error: {e.code} - {e.reason}")
        return False
    except Exception as e:
        print(f"  Error: {e}")
        return False


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print(f"Generating {len(IMAGES_TO_GENERATE)} images...")
    print(f"Output directory: {OUTPUT_DIR}")
    print()

    success_count = 0
    for image_config in IMAGES_TO_GENERATE:
        if generate_image(image_config["prompt"], image_config["filename"]):
            success_count += 1
        time.sleep(1)  # Rate limiting

    print()
    print(f"Done! Generated {success_count}/{len(IMAGES_TO_GENERATE)} images.")


if __name__ == "__main__":
    main()
