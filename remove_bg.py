import os
from PIL import Image
import numpy as np

def remove_white_background(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    # Define what we consider "white" (adjust threshold if needed)
    # Most white backgrounds in these renders are pure white (255, 255, 255)
    # We'll use a high threshold to capture slightly off-white edges
    red, green, blue, alpha = data.T
    white_areas = (red > 240) & (green > 240) & (blue > 240)
    
    # Set white areas to transparent
    data[..., 3][white_areas.T] = 0
    
    new_img = Image.fromarray(data)
    new_img.save(output_path, "PNG")
    print(f"Saved to {output_path}")

assets_dir = r"c:\Users\karth\OneDrive\Desktop\wellness-feb3-start\public\assets"
images = [
    "regenmd_her.png",
    "regenmd_him.png",
    "regenmd_weightloss.png",
    "regenmd_antiaging.png",
    "regenmd_strength.png",
    "regenmd_brainhealth.png"
]

for img_name in images:
    input_p = os.path.join(assets_dir, img_name)
    output_p = os.path.join(assets_dir, img_name.replace(".png", "_transparent.png"))
    if os.path.exists(input_p):
        try:
            remove_white_background(input_p, output_p)
        except Exception as e:
            print(f"Error processing {img_name}: {e}")
    else:
        print(f"File not found: {input_p}")
