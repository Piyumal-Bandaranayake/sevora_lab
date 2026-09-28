# Sevora Lab — Refined Blue & White Color System

This document details the refined **Navy + Blue + Sky Blue + White** color architecture for **Sevora Lab** (`sevoralab.studio`).

---

## 1. Core Color Palette Matrix

| Color Name | HEX Code | RGB Value | CSS Variable | Usage & Role |
| :--- | :--- | :--- | :--- | :--- |
| **Deep Navy** | `#071A2B` | `7, 26, 43` | `--background` | Main application background, hero canvas, large sections |
| **Navy Blue** | `#0B2742` | `11, 39, 66` | `--surface` | Cards, elevated surfaces, panels, section containers |
| **Pure White** | `#FFFFFF` | `255, 255, 255` | `--foreground` | Headings, active nav, primary text, high-contrast UI |
| **Soft White** | `#EAF4FF` | `234, 244, 255` | `--text-secondary` | Paragraphs, descriptions, secondary text |
| **Bright Blue** | `#1677FF` | `22, 119, 255` | `--accent` | Primary CTA buttons, links, active states, WebGL rays |
| **Sky Blue** | `#4DA3FF` | `77, 163, 255` | `--accent-hover` | Button hover states, link hovers, active highlights |
| **Light Blue** | `#B9E2FF` | `185, 226, 255` | `--accent-light` | Soft gradient endpoints & decorative accents |

---

## 2. Gradient System

```css
.primary-gradient {
  background: linear-gradient(
    135deg,
    #1677FF 0%,
    #4DA3FF 50%,
    #B9E2FF 100%
  );
}
```

Brand text gradient snippet:

```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#B9E2FF]">
  Lab
</span>
```

---

## 3. Glassmorphism & Elevation System

```css
.glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(185, 226, 255, 0.12);
}

.glass-strong {
  background: rgba(11, 39, 66, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(77, 163, 255, 0.15);
}
```

---

## 4. Blue Glow System

```css
.blue-glow {
  filter: drop-shadow(
    0 0 18px rgba(22, 119, 255, 0.35)
  );
}

.blue-glow-strong {
  box-shadow:
    0 0 25px rgba(22, 119, 255, 0.25),
    0 0 60px rgba(77, 163, 255, 0.12);
}
```

---

## 5. CSS Variables (`src/app/globals.css`)

```css
@import "tailwindcss";

@theme {
  --color-primary-start: #1677FF;
  --color-primary-end: #B9E2FF;

  --color-background-custom: #071A2B;
  --color-surface: #0B2742;

  --color-text-custom: #FFFFFF;
  --color-text-secondary: #EAF4FF;

  --color-accent: #1677FF;
  --color-accent-hover: #4DA3FF;
  --color-accent-light: #B9E2FF;
}

:root {
  --background: #071A2B;
  --foreground: #FFFFFF;
  --surface: #0B2742;
  --primary: #1677FF;
  --primary-foreground: #FFFFFF;
  --accent: #1677FF;
  --accent-hover: #4DA3FF;
  --accent-light: #B9E2FF;
  --text-secondary: #EAF4FF;
}
```
