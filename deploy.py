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

def run_cmd(command, shell_needed=False, check=True):
    try:
        result = subprocess.run(
            command, 
            shell=shell_needed, 
            check=check,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        return True, result.stdout
    except subprocess.CalledProcessError as e:
        return False, e.stderr

def gh_pages_exists():
    local_check = subprocess.run(
        ["git", "show-ref", "--verify", "refs/heads/gh-pages"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    if local_check.returncode == 0:
        return True

    remote_check = subprocess.run(
        ["git", "ls-remote", "--heads", "origin", "gh-pages"],
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL
    )
    return remote_check.returncode == 0 and bool(remote_check.stdout.strip())

def deploy_to_gh_pages():
    success, current_branch = run_cmd(["git", "rev-parse", "--abbrev-ref", "HEAD"])
    if not success:
        fancy_print("💥", RED, "Failed to detect current branch!")
        return False

    fancy_print(ALIEN_EMOJI, CYAN, "Switching to gh-pages dimension...")
    success, _ = run_cmd(["git", "checkout", "gh-pages"])
    if not success:
        fancy_print("👻", YELLOW, "Creating new gh-pages branch...")
        if not run_cmd(["git", "checkout", "--orphan", "gh-pages"])[0]:
            return False

    fancy_print("🧹", CYAN, "Sanitizing deployment zone...")
    run_cmd("git rm -rf . > /dev/null 2>&1 || true", shell_needed=True)

    fancy_print("📦", CYAN, "Beaming up dist contents...")
    run_cmd(["cp", "-r", "dist/.", "."])

    fancy_print("💾", CYAN, "Finalizing quantum entanglement...")
    success, _ = run_cmd(["git", "add", "-A"])
    if success:
        success, _ = run_cmd([
            "git", 
            "commit", 
            "-m", 
            "Deploy: Update from main branch " + 
            subprocess.check_output(["git", "rev-parse", "--short", "HEAD"])
            .decode().strip()
        ])

    fancy_print(ROCKET_EMOJI, CYAN, "Initiating warp drive...")
    success, _ = run_cmd(["git", "push", "origin", "gh-pages"])

    run_cmd(["git", "checkout", current_branch.strip()])
    return success

# ----- Main Execution -----
fancy_print(ROBOT_EMOJI, CYAN, "Initiating TURBO DEPLOY SEQUENCE...")

# Verificação da branch main
fancy_print(ROBOT_EMOJI, CYAN, "Verifying main branch alignment...")
success, current_branch = run_cmd(["git", "rev-parse", "--abbrev-ref", "HEAD"])
if not success:
    fancy_print("💥", RED, "Failed to detect current branch!")
    exit(1)

current_branch = current_branch.strip()
if current_branch != "main":
    fancy_print("🚫", RED, f"Currently on branch '{current_branch}'. Please switch to main first!")
    fancy_print("🔄", YELLOW, "Try: git checkout main")
    exit(1)

fancy_print(DINO_EMOJI, YELLOW, "Compiling source codes (please don't turn into Skynet)...")

# Build project
build_success, build_output = run_cmd("pnpm build", shell_needed=True)
if not build_success:
    fancy_print(ALIEN_EMOJI, RED, f"Build failed!\n{build_output}")
    exit(1)

# Deploy to gh-pages
fancy_print(FIRE_EMOJI, GREEN, "Build complete! Initiating deployment...")
if not deploy_to_gh_pages():
    fancy_print("🌌", RED, "Deployment failed! Check subspace frequencies.")
    exit(1)

# Final success message
fancy_print(PARTY_EMOJI, GREEN, "DEPLOYMENT SUCCESS! Your app is now cruising at warp 9.9!")
fancy_print(ROCKET_EMOJI, CYAN, "Pro tip: Configure GitHub Pages to watch the gh-pages branch")
fancy_print(ALIEN_EMOJI, YELLOW, "Live long and prosper! 🖖")