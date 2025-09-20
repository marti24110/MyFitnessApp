# 📱 Start-Coding Checklist (Expo Router + GitHub + VS Code)

## 1. Environment Setup
```bash
cd ~/MyFitnessApp          # go into project
nvm use --lts              # make sure Node LTS is active
code .                     # open VS Code in project folder
```

- Open **iOS Simulator** (or Expo Go on iPhone):  
  ```bash
  open -a Simulator
  ```

---

## 2. GitHub Sync (Get the Latest Code)
In VS Code (Source Control sidebar) or terminal:
```bash
git checkout main          # switch to main branch
git pull                   # pull latest changes
```

- Switch branch depending on task:  
  - `feat/codex-inbox` → paste Codex outputs  
  - `feat/tutor-lab` → refine & learn with tutor (me)  
  - `main` → stable code  

---

## 3. Start Expo Dev Server
```bash
npx expo start
```

- Press **i** → open in iOS Simulator  
- Or scan QR in **Expo Go** app on iPhone  

---

## 4. Verify Hot Reload
- Open `app/(tabs)/index.tsx`  
- Change a `<Text>` string → save → simulator should auto-update.  

---

## 5. Coding Loop
- Write code in VS Code.  
- Copilot suggests inline completions.  
- If using Codex → paste output into `_inbox_codex/` + target file.  
- Bring tricky parts here → I’ll explain/refactor with you.  

---

## 6. Savepoint with Git
Whenever a small piece works:
```bash
git add .
git commit -m "feat: <short description>"
git push
```

- Use VS Code Source Control if you prefer click-buttons.  
- Make sure you’re committing on the right branch.  

---

## 7. End of Session
- Sync last changes:
```bash
git push
```
- Stop Expo server (**Ctrl + C** in terminal).  
- Close VS Code and Simulator.  

---

# 🔑 Quick Mini Version
```bash
cd ~/MyFitnessApp
nvm use --lts
git checkout main
git pull
code .
npx expo start   # press i for iOS simulator
# edit code, test
git add .
git commit -m "feat: <msg>"
git push
```
