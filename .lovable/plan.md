

## Plan: Enhance "Why Roxosoft" & "Our Edge" Sections

### 1. "Why Roxosoft" — Achievements Section

**Animated counters:** Add a `useInView` + `useEffect` counter that animates numeric stats (15+, 20+, 75%+, 50+) counting up from 0 when scrolled into view. Non-numeric stats like "Top Clutch" will fade in instead.

**Staggered bento layout:** Break the uniform 3×2 grid into a bento-style layout:
- Row 1: Clutch award (large, spans 2 cols) + Microsoft Partner (1 col)
- Row 2: Experience (1 col) + Client Retention (1 col) + Senior Engineers (1 col)  
- Projects card spans bottom or gets visual emphasis

**Background particles:** Add a subtle animated particle/floating dot effect behind the section using CSS keyframe animations (lightweight, no heavy library). Small glowing circles that drift slowly.

### 2. "Our Edge" — Advantages Section

**Marquee ticker:** Replace the 5 smaller advantage cards with a continuously scrolling horizontal marquee strip. Each item shows icon + title + short desc in a compact pill/card format. The strip auto-scrolls and pauses on hover. Implemented with CSS animation (`translateX`) on a duplicated list for seamless looping.

The 3 main advantage cards above remain as-is.

### Files to modify
- `src/components/AchievementsSection.tsx` — counter logic, bento grid, particle background
- `src/components/AdvantagesSection.tsx` — replace bottom grid with marquee
- `src/index.css` — add particle and marquee keyframe animations

