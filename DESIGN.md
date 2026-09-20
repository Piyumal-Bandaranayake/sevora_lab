---
name: Sevora Lab
description: Visual design system tokens for the premium digital studio and agency.
colors:
  primary-start: "#1677FF"
  primary-end: "#B9E2FF"
  neutral-bg: "#071A2B"
  surface: "#0B2742"
  neutral-text: "#FFFFFF"
  text-secondary: "#EAF4FF"
  accent: "#1677FF"
  accent-hover: "#4DA3FF"
  accent-light: "#B9E2FF"
typography:
  display:
    fontFamily: "Outfit, var(--font-outfit), sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, var(--font-inter), sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "#4DA3FF"
---

# Design System: Sevora Lab

## 1. Overview

**Creative North Star: "The Deep Navy Digital Studio"**

The Sevora Lab design system is built to reflect a technical, high-performance digital laboratory, combining deep navy backdrops (`#071A2B`, `#0B2742`) with crisp white text (`#FFFFFF`, `#EAF4FF`) and vibrant electric blue accents (`#1677FF`, `#4DA3FF`, `#B9E2FF`). The aesthetic is clean, professional, and refined.

**Key Characteristics:**
- Deep Navy background canvas (`#071A2B`) with elevated secondary navy surfaces (`#0B2742`).
- High-contrast pure white typography paired with soft white secondary text.
- Glassmorphic layers with subtle sky-blue glass borders (`rgba(185, 226, 255, 0.12)`).
- Controlled electric blue glows (`rgba(22, 119, 255, 0.35)`).

## 2. Colors

### Core Colors
- **Deep Navy (Main Canvas)** (`#071A2B`): Background for the entire application.
- **Navy Blue (Secondary Surface)** (`#0B2742`): Cards, panels, elevated sections.
- **Pure White (Primary Text)** (`#FFFFFF`): Headings, active states, key icons.
- **Soft White (Secondary Text)** (`#EAF4FF`): Paragraphs, descriptions, secondary copy.
- **Bright Blue (Primary Accent)** (`#1677FF`): CTA buttons, primary highlights, active states.
- **Sky Blue (Accent Hover)** (`#4DA3FF`): Hover transitions, interactive glows.
- **Light Blue (Subtle Highlight)** (`#B9E2FF`): Gradient endpoints and soft highlights.

### Brand Gradient
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

## 3. Glassmorphism & Glow Systems

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

.blue-glow {
  filter: drop-shadow(0 0 18px rgba(22, 119, 255, 0.35));
}

.blue-glow-strong {
  box-shadow: 0 0 25px rgba(22, 119, 255, 0.25), 0 0 60px rgba(77, 163, 255, 0.12);
}
```
