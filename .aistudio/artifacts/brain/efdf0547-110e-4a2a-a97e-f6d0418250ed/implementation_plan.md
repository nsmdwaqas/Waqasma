# Mohammed Waqas & Asma Shajer — Royal Wedding Invitation Experience

A bespoke, Apple-inspired luxury AMOLED wedding invitation web application celebrating the union of Mohammed Waqas and Asma Shajer. Crafted with frosted liquid glassmorphism, interactive royal envelope unboxing, real-time floating day countdown, multilingual support (English, Urdu, Tamil), seamless WhatsApp sharing, and 1-tap Google Maps navigation.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following directions were confirmed during clarification and will govern the application experience:
> - **Aesthetic & Theme**: AMOLED Space Black (`#050505` to `#0B0E14`) frosted glass surfaces with Champagne Gold (`#D4AF37`) and Royal Emerald (`#0F5132` / `#10B981`) ambient accents, inspired by Apple Pro glassmorphism and iOS dynamic island floaters.
> - **Opening Experience**: Interactive royal unboxing envelope with gold wax seal, calligraphy crest, gentle opening physics, and ambient audio toggle (tasteful instrumental / celebratory chime).
> - **Floating Controls**: Dynamic floating day-countdown pill ("X Days to go") and quick-toggle language pill (English / Urdu / Tamil with RTL Urdu support and authentic Tamil translations).
> - **Event Logistics**:
>   - **Nikkah**: 31 Dec 2026 at 11:45 AM — Location link: [Google Maps](https://maps.app.goo.gl/cT3y3uiiMhnhAhvy9)
>   - **Valima**: 31 Dec 2026 at 12:00 PM (After Zuhar Salah) — Location link: [Google Maps](https://maps.app.goo.gl/RBRaTLX11wjGg14Z8)
> - **Family Heritage**: Groom's Father: Janab Natamkar Saifullah · Bride's Father: Janab Asghar Ali.
> - **Social & Sharing**: Rich WhatsApp OpenGraph preview metadata cards, Web Share API integration, and QR code modal for physical invitation circulation.

---

### 1. Overview & Core Concept

- **What It Does**: Presents a deeply personal, cinematic digital wedding invitation designed specifically for WhatsApp links and QR code scans. Guests are greeted by a closed royal envelope seal; upon tapping, the envelope gracefully unfolds with motion blur and reveals the holy Quranic verse, the couple's monogram, dynamic live day countdown, event schedules with direct Google Maps routes, and one-tap calendar additions.
- **Target Audience / Persona**: Family members, esteemed guests, friends, and elders across India and abroad accessing the invitation primarily via smartphones (iPhone & Android) over WhatsApp.
- **Key Value**: Replaces flat PDF or static image cards with an interactive digital heirloom that offers real-time directions, day-level countdown anticipation, language accessibility for Tamil and Urdu-speaking family elders, and effortless sharing.

---

### 2. User Experience & Visual Design

#### A. Key User Flows
1. **The Royal Unboxing (Entry Reveal)**:
   - When opened via WhatsApp or QR code scan, guests see a high-luxury AMOLED viewport featuring an interactive royal envelope adorned with a golden wax seal bearing "W & A" calligraphy.
   - Gentle floating floral petals drift across deep space black glass.
   - Tapping the wax seal triggers an unfold sequence: the seal cracks with soft haptic glow, the letter slides upward with smooth CSS motion blur, and celebratory ambient chimes begin (with an immediate mute/pause control in the top corner).
2. **Hero Story & Monogram**:
   - Quranic inscription of love and mercy (*Surah Ar-Rum 30:21* in graceful Arabic calligraphy alongside Urdu/Tamil/English translation).
   - "Together with our families" introducing Groom **Mohammed Waqas** (s/o Janab Natamkar Saifullah) and Bride **Asma Shajer** (d/o Janab Asghar Ali).
3. **Floating Controls & Island Affordances**:
   - **Floating Countdown Pill**: Pinned floating capsule displaying dynamic live countdown ("78 Days to Go" with breakdown to hours/mins/secs upon tap).
   - **Floating Language Switcher**: Quick toggle between **English**, **اردو (Urdu)**, and **தமிழ் (Tamil)**, seamlessly adapting font typography and RTL layout.
4. **Ceremony Itinerary & Venue Route Cards**:
   - **Nikkah Ceremony**: 31st December 2026 · 11:45 AM. Interactive venue glass card with 1-tap "Get Directions" trigger to Google Maps (`https://maps.app.goo.gl/cT3y3uiiMhnhAhvy9`) and "Add to Calendar".
   - **Valima Reception**: 31st December 2026 · 12:00 PM (After Zuhar Salah). Dedicated venue card with instant navigation to Google Maps (`https://maps.app.goo.gl/RBRaTLX11wjGg14Z8`).
5. **Interactive Guest Actions**:
   - **WhatsApp Share**: Pre-formatted WhatsApp share button that shares the invite with personalized warm blessings copy.
   - **Digital QR Code Modal**: Instant QR code generator to scan and share between devices at family gatherings.
   - **Blessings & Dua**: Quick interactive Dua/Blessing submit card for guests to send love directly to the couple.

#### B. Visual Identity & Apple Glassmorphic AMOLED Theme
- **Color Tokens**:
  - Background Canvas: True AMOLED Black (`#030508` to `#0A0D14`) with subtle emerald nebula underlays (`rgba(16, 185, 129, 0.04)`).
  - Glass Surfaces: Multi-layered frosted glass (`backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]`).
  - Luxury Accents: Champagne Gold gradient (`linear-gradient(135deg, #F9E79F, #D4AF37, #AA771C)`) and Royal Emerald highlights (`#10B981`).
- **Typography**:
  - Display / Monograms: Classic luxury serif (*Cinzel* / *Playfair Display*) with golden metallic text clip.
  - Body Copy: Clean Apple iOS sans (*Plus Jakarta Sans* / system-ui font stack) for crisp mobile readability.
  - Multilingual Typography: *Noto Nastaliq Urdu* / authentic Urdu typography and *Noto Sans Tamil* for flawless rendering across devices.
- **Motion & Depth**:
  - Smooth parallax layers, floating botanical floral motifs, and realistic glass reflection highlights that respond to device orientation / gentle scroll.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Multilingual Dictionary (English / Urdu / Tamil)**
  - *Chosen Approach*: Instant in-memory localized translation dictionary with bi-directional layout support (RTL for Urdu, LTR for English and Tamil).
  - *Why*: Zero network latency when relatives switch languages on mobile devices; zero external translation API failure risk.
- **Decision 2: Interactive Envelope Unboxing as Gateway State**
  - *Chosen Approach*: Envelope seal acts as an interactive gateway that respects mobile auto-play audio policies. User interaction (clicking "Open Invitation") allows seamless initialization of the ambient audio tone without browser blockages.
  - *Why*: Browsers strictly block auto-playing audio without a preceding user gesture; an interactive royal wax seal turns a browser restriction into an unforgettable guest moment.
- **Decision 3: Floating Island Ergonomics (Thumb Zone Placement)**
  - *Chosen Approach*: Floating controls (Countdown timer & Language toggle) positioned within the natural mobile thumb zone at the bottom-right and top-nav, staying under the 15% mobile sticky height cap.
  - *Why*: WhatsApp users hold phones with one hand; key actions must remain easily clickable without reaching to top corners.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        index.html Entry Point                          │
│        (OpenGraph Meta Tags, WhatsApp Previews, Royal Fonts)           │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                            App.tsx Root                                │
│       ┌────────────────────────────────────────────────────────┐       │
│       │ Global State: Language (EN/UR/TA), Sound (On/Off),     │       │
│       │ Unbox State (Sealed/Opened), Countdown (Target Date)   │       │
│       └────────────────────────────────────────────────────────┘       │
│                                    │                                   │
│  ┌─────────────────────────────────┴────────────────────────────────┐  │
│  ▼                                                                  ▼  │
│ [ Sealed Envelope Gate ]                             [ Main Invitation ]│
│  - Golden Wax Seal "W & A"                           - Bismillah & Dua  │
│  - Motion Blur Unfold Animation                      - Couple Hero Card │
│  - Ambient Audio Trigger                             - Parents Tribute  │
│                                                      - Nikkah Event Card│
│                                                      - Valima Event Card│
│                                                      - Route Navigators │
│                                                      - Guestbook / Dua  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  ▼ Floating Island Overlays (Persistent & Mobile-First)             ▼  │
│  - Live Day Countdown Floater ("X Days Left" with full modal)          │
│  - Language Selector Floater (English / اردو / தமிழ்)                  │
│  - Audio Mute / Unmute Floating Control                                │
│  - WhatsApp Instant Share & QR Code Trigger                            │
└────────────────────────────────────────────────────────────────────────┘
```

- **Audio Engine**: Synthesized web audio ambient chord progression & royalty-free soothing acoustic string audio player with user volume control and persistence.
- **WhatsApp Share Engine**: Formatted URL with pre-filled message encoding couple names, date (31 Dec 2026), and direct app link.
- **Google Maps Integration**: Direct external links to verified coordinates provided by the user (`cT3y3uiiMhnhAhvy9` for Nikkah and `RBRaTLX11wjGg14Z8` for Valima).
