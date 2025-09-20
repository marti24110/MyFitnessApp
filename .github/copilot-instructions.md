# Copilot Instructions for MyFitnessApp

These instructions help AI coding agents work effectively in this Expo Router (React Native + Web) project. Keep guidance concise, pragmatic, and specific to how this repo works today.

## Architecture Overview

- File-based routing via `expo-router` under `app/`.
  - Root stack in `app/_layout.tsx` wraps `(tabs)` and `modal` routes.
  - Tabs defined in `app/(tabs)/_layout.tsx` with screens `index.tsx` (Home) and `explore.tsx`.
  - Use `<Link href="/modal" />` for modals; add new tabs/screens via files under `app/(tabs)/`.
- Theming & design tokens live in `constants/theme.ts`.
  - Colors: `Colors.light|dark`; Fonts vary per platform.
  - Access colors via `useThemeColor` (hook) and wrappers `ThemedText`/`ThemedView`.
- UI components in `components/` follow a small pattern library:
  - `themed-text.tsx`, `themed-view.tsx`: enforce dark/light support.
  - `parallax-scroll-view.tsx`: header parallax using `react-native-reanimated` v3+ APIs.
  - `ui/icon-symbol(.ios).tsx`: iOS uses SF Symbols, Android/Web fallback to Material Icons with manual name mapping.
  - `haptic-tab.tsx`: wraps tab press with iOS haptic feedback.
- Hooks in `hooks/` are thin shims:
  - `use-color-scheme.ts` re-exports `react-native` hook.
  - `use-theme-color.ts` resolves palette with optional overrides.

## Conventions & Patterns

- Use path alias `@/*` (configured in `tsconfig.json`) instead of relative paths.
- Prefer `ThemedText`/`ThemedView` over raw `Text`/`View` when UI colors matter.
- Add icons by extending `components/ui/icon-symbol.tsx` mapping so names work cross‑platform.
- Keep animations with `react-native-reanimated`; pattern example: `components/parallax-scroll-view.tsx`.
- When adding new routes:
  - Tabs: add files under `app/(tabs)/` and register options in `app/(tabs)/_layout.tsx`.
  - Stacks/Modals: add screens next to `app/modal.tsx` and configure in `app/_layout.tsx`.
- Web compatibility: avoid native-only APIs or guard with `process.env.EXPO_OS` checks (see `external-link.tsx`, `haptic-tab.tsx`).

## Build, Run, and Lint

- Core commands (see `package.json`):
  - `npm start` → `expo start`
  - `npm run android` / `npm run ios` / `npm run web`
  - `npm run lint` → ESlint via Expo config
  - `npm run reset-project` → moves starter into `app-example` and scaffolds a blank `app/`
- Expo config in `app.json`:
  - `experiments.typedRoutes: true` → respect Expo Router types when adding screens.
  - `experiments.reactCompiler: true` and `newArchEnabled: true` are enabled; avoid patterns known to break these.
- Linting/formatting:
  - ESLint extends `expo` and `prettier`. VS Code is set to fix on save.
  - React hooks rules enforced; address `exhaustive-deps` warnings.

## Integration Notes

- Navigation: Use `expo-router` primitives (`<Link>`, `Tabs`, `Stack`) instead of manual `@react-navigation/*` setup—Router manages the navigator tree.
- Assets: Import with `require('@/assets/...')` for bundling and web support.
- Haptics & web browser: Use `expo-haptics` and `expo-web-browser` with platform guards.
- Icons: On iOS, `expo-symbols`; on Android/Web, `@expo/vector-icons/MaterialIcons` via mapping.

## Examples

- New tab screen:
  1. Create `app/(tabs)/profile.tsx` with a component export.
  2. Add a `<Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color }) => <IconSymbol name="person.fill" size={28} color={color} /> }} />` in `app/(tabs)/_layout.tsx` and map `'person.fill'` in `components/ui/icon-symbol.tsx`.
- Themed component:
  ```tsx
  import { ThemedText, ThemedView } from '@/components/themed-*'
  export function Card({ children }) {
    return (
      <ThemedView style={{ padding: 12, borderRadius: 8 }}>
        <ThemedText type="subtitle">Title</ThemedText>
        {children}
      </ThemedView>
    )
  }
  ```

## Gotchas

- If `reset-project` is run, starter files move into `app-example/`; update paths accordingly.
- For icons, forgetting to update the Material Icons mapping breaks Android/Web.
- Keep route names in sync with file names; typed routes are enabled.
- Parallax/animations require `react-native-reanimated` setup; don’t refactor to unsupported APIs.

## Key Files

- Routing: `app/_layout.tsx`, `app/(tabs)/_layout.tsx`, `app/(tabs)/*`, `app/modal.tsx`
- Theming: `constants/theme.ts`, `hooks/use-theme-color.ts`, `components/themed-*`
- UI utils: `components/ui/*`, `components/parallax-scroll-view.tsx`
- Scripts: `scripts/reset-project.js`

Keep changes minimal and aligned with the patterns above. Prefer extending existing utilities over introducing new variants unless necessary.
