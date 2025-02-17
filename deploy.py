#!/usr/bin/env python3
"""
🚀 Ultra Deploy Pro 9000 - Now with 200% more nerd power! 💻
"""

import subprocess
from sys import exit

# ASCII art and color codes
BOLD = "\033[1m"
CYAN = "\033[96m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
END = "\033[0m"
PARTY_EMOJI = "🎉"
ROCKET_EMOJI = "🚀"
ROBOT_EMOJI = "🤖"
FIRE_EMOJI = "🔥"
ALIEN_EMOJI = "👽"
DINO_EMOJI = "🦖"

def fancy_print(emoji, color, message):
    print(f"{emoji} {BOLD}{color}{message}{END}")

def run_cmd(command, shell_needed=False):
    try:
        subprocess.run(command, shell=shell_needed, check=True)
        return True
    except subprocess.CalledProcessError as e:
        fancy_print("💥", RED, f"Critical fail! {e}") 
        return False

fancy_print(ROBOT_EMOJI, CYAN, "Initiating TURBO DEPLOY SEQUENCE...")
fancy_print(DINO_EMOJI, YELLOW, "Compiling source codes (please don't turn into Skynet)...")

if not run_cmd("pnpm build", shell_needed=True):
    fancy_print(ALIEN_EMOJI, RED, "Build failed! Aborting before we create a black hole...")
    exit(1)

fancy_print(FIRE_EMOJI, GREEN, "Build complete! Now hacking the mainframe...")

fancy_print(ALIEN_EMOJI, CYAN, "Forcing dist directory into version control (Resistance is futile!)")
if not run_cmd(["git", "add", "dist", "-f"]):
    exit(1)

if not run_cmd(["git", "commit", "-m", "feat: Deploying to final frontier 🚀"]):
    fancy_print("💾", YELLOW, "No changes to deploy. Everything up-to-date!")
    exit(0)

fancy_print(ROCKET_EMOJI, YELLOW, "Initiating warp drive to gh-pages quadrant...")
if not run_cmd("git subtree push --prefix dist origin gh-pages", shell_needed=True):
    fancy_print("🌌", RED, "Subspace communication failed! Check your warp bubble settings.")
    exit(1)

fancy_print(PARTY_EMOJI, GREEN, "DEPLOYMENT SUCCESS! Your app is now cruising at warp 9.9!")
fancy_print(ROCKET_EMOJI, CYAN, "Pro tip: Configure GitHub Pages to watch the gh-pages branch")
fancy_print(ALIEN_EMOJI, YELLOW, "Live long and prosper! 🖖")