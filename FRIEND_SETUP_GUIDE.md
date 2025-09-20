# 👥 Teammate Setup Guide — fitness-app-earlymvp

This guide gets a new developer from zero to **running, coding, and pushing** on the project.

> Target stack: Expo (React Native + TypeScript) with Expo Router.  
> Repo: **fitness-app-earlymvp**

---

## 0) Access to the GitHub repository

1. **Create a GitHub account** (if you don’t have one).
2. Ask the project owner to **invite you as a collaborator** to the repo:
   - GitHub → Repository → **Settings** → **Collaborators** → *Add people* → choose your username → grant **Write** access.
3. Accept the invitation from your email or GitHub notifications.

**Clone the repo (after the invite is accepted):**
```bash
# HTTPS (simple)
git clone https://github.com/<owner>/fitness-app-earlymvp.git
cd fitness-app-earlymvp
```

> Tip: If you prefer SSH, set up an SSH key on GitHub first, then:
> ```bash
> git clone git@github.com:<owner>/fitness-app-earlymvp.git
> ```

---

## 1) Install prerequisites

### macOS (recommended for iOS development)
- **Xcode** (from the App Store). Open it once to finish installation.
- **iOS Simulator**:
  - Xcode → **Settings** → **Platforms** → install the latest iOS runtime.
  - Start Simulator: `open -a Simulator`
- **Homebrew** (optional but useful):
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- **nvm (Node Version Manager)** → install Node LTS:
  ```bash
  brew install nvm
  mkdir -p ~/.nvm
  echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
  echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
  source ~/.zshrc

  nvm install --lts
  nvm use --lts
  node -v && npm -v
  ```
- **Git** (usually comes with Xcode; otherwise):
  ```bash
  brew install git
  ```
- **Watchman** (optional; improves file watching):
  ```bash
  brew install watchman
  ```
- **VS Code** (download from code.visualstudio.com).

### Windows (Android only; no iOS Simulator on Windows)
- **Node.js LTS** (or `nvm-windows`)  
- **Git for Windows**
- **Android Studio** (with SDKs + AVD Emulator)  
- **VS Code**
- **Expo Go** on your phone (iOS App Store / Google Play)

### Linux (Android only; no iOS Simulator on Linux)
- **Node.js LTS** (via nvm)
- **Git**
- **Android Studio** (SDK + Emulator)
- **VS Code**
- **Expo Go** on your phone

---

## 2) Project dependencies

From the project root:
```bash
# ensure Node LTS is active
nvm use --lts

# install npm packages
npm install

# (Expo CLI installed locally via npm packages — use npx)
```

> **Do NOT** use `npm install -g expo-cli` (global). Always prefer `npx expo <command>`.

---

## 3) Recommended VS Code extensions

- **ESLint** (Microsoft)
- **Prettier – Code formatter** (Prettier)
- **TypeScript and JavaScript Language Features** (built-in)
- **GitHub Pull Requests and Issues** (GitHub)
- **GitLens** (GitKraken)
- **EditorConfig** (EditorConfig) *(optional)*
- **React Native Tools** (Microsoft) *(optional for RN debugging)*

Optional settings (workspace `.vscode/settings.json`):
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit"
  }
}
```

---

## 4) Running the app (Expo)

**Start the dev server:**
```bash
npx expo start
```
- Press **i** → open on **iOS Simulator** (macOS only).
- Press **a** → open on **Android Emulator** (if Android Studio AVD is running).
- Press **w** → open in web.
- Or scan the QR code using **Expo Go** on your phone **on the same Wi‑Fi**.

> Keep this terminal **running**. Open a second terminal for git commands.

**Common commands inside the Expo CLI:**
- `r` → reload the app
- `Shift + r` → restart & clear cache
- `?` → show all commands

---

## 5) Branch workflow (how we collaborate)

We use three branches:
- `main` → stable, demo-ready
- `feat/tutor-lab` → active development & learning
- `feat/codex-inbox` → raw AI/Codex outputs

**Create/switch branches:**
```bash
git checkout -b feat/tutor-lab   # first time
git checkout feat/tutor-lab      # later
```

**Daily commit/push:**
```bash
git status
git add .
git commit -m "feat: <short description>"
git push -u origin feat/tutor-lab   # first push on a new branch
# afterwards just: git push
```

**Pull latest changes:**
```bash
git checkout main
git pull
```

> Use **VS Code Source Control** (sidebar) if you prefer a UI for commits and syncing.

---

## 6) Coding loop

1. **Terminal 1**: `npx expo start` (keep running)
2. **Terminal 2**: for Git and installs
3. **Edit code** in VS Code:
   - Screens live under `app/` (file‑based routes with Expo Router)
   - Components under `components/`
   - Shared types under `types/`
   - Data under `data/`
4. Save → app reloads automatically in simulator/phone.

**Quick structure:**
```
fitness-app-earlymvp/
├─ app/                      # routes (Expo Router)
│  ├─ (tabs)/index.tsx       # Home tab
│  ├─ workouts/[id].tsx      # Detail screen
│  └─ session/[id].tsx       # Session screen (timer)
├─ components/WorkoutCard.tsx
├─ data/workouts.ts          # dataset (can swap to JSON/API later)
├─ data/workoutLoader.ts     # single data entrypoint (loadWorkouts)
├─ types/workout.ts          # shared types
└─ ...
```

---

## 7) First run checklist (sanity checks)

- Open iOS Simulator: `open -a Simulator` (macOS)
- Run `npx expo start`, then press **i** (or **a**)
- If the app doesn’t appear, try:
  ```bash
  npx expo start -c   # clear cache
  ```
- If iOS devices aren’t listed: open Xcode once → install iOS platform runtimes under **Xcode → Settings → Platforms**.
- If QR on iPhone says “no usable data found”:
  - Make sure **Expo Go** is installed and updated
  - Phone and computer are on the **same Wi‑Fi**
  - Try switching Expo connection type to **LAN** (press `?` in Expo CLI → Connection options)

---

## 8) GitHub login in VS Code (optional but nice)

- Install **GitHub Pull Requests and Issues** extension.
- In Command Palette (⇧⌘P): **GitHub: Sign in** and authorize.
- Or install GitHub CLI and login:
  ```bash
  brew install gh
  gh auth login
  ```

---

## 9) Conventional commits (readable history)

Use messages like:
- `feat: add session timer`
- `fix: handle empty workouts`
- `chore: update eslint config`
- `docs: add teammate setup guide`

---

## 10) Troubleshooting quickies

- **Expo stuck / red screen** → `Shift + r` in Expo CLI to clear cache.
- **TypeScript path errors** → ensure imports are **relative** (e.g., `../../types/workout`).
- **iOS simulator missing** → install iOS runtimes in Xcode → Settings → Platforms.
- **Android emulator can’t boot** → open Android Studio → AVD Manager → create/start a virtual device first.
- **Network issues on phone** → same Wi‑Fi, VPN off, try LAN mode in Expo CLI.

---

## 11) Done — first coding task

```bash
# From project root
nvm use --lts
npm install
npx expo start     # Terminal 1 (keep running)
# make a tiny change in app/(tabs)/index.tsx and save — simulator should reload
git checkout -b feat/tutor-lab
git add .
git commit -m "chore: verify local setup"
git push -u origin feat/tutor-lab
```

Welcome aboard! 🎉 If anything fails, copy the exact error text and we’ll help debug quickly.
