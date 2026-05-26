# Portfolio V2 Premium — Implementation Notes

## Included in this version

This package contains the V2 premium portfolio iteration with the following updates:

- Mobile-first premium homepage structure.
- New narrative Hero section centered on decision-oriented AI/data work.
- Career Journey Card replacing generic KPI badges.
- Interactive Journey Map built around five identities: Scientist, Statistician, Builder, AI Engineer, Teacher.
- Dedicated Teaching & Knowledge Design section.
- Teaching Brain Lab showcased with the current interface screenshot instead of an abstract placeholder.
- What I Build section focused on deployed technical systems.
- Teaching Brain Lab removed from the product-card list to avoid repetition; it is now treated as a distinct teaching identity/product section.
- Currently Building section for Career Intelligence Assistant.
- Improved contact UX: copy email and Gmail compose links instead of relying only on mailto.
- Navbar button wrapping fixed with whitespace protection.
- Larger 2xl typography and wider containers for large desktop / 27-inch displays.

## Why Teaching Brain Lab is separate from What I Build

Teaching Brain Lab is still a project, but it is more than a standard technical demo. It represents the teaching and knowledge-design side of the profile. Keeping it as a dedicated section avoids repetition and makes the portfolio story clearer:

- Teaching section: educational identity and learning-system design.
- What I Build: deployed technical AI/data products.
- Currently Building: future product direction.

## Local test commands

```bash
npm install
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

## Validation performed here

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: blocked only because the sandbox cannot fetch Google-hosted `next/font` files for Geist / Geist Mono. This should work on a normal connected environment such as Vercel or a local machine with internet access.

## Manual responsive checks to perform

Test at:

- 390px
- 430px
- 768px
- 1024px
- 1440px
- 2560px / 27-inch monitor

Priority checks:

- No horizontal overflow.
- Navbar contact button stays on one line.
- Hero text scales correctly on large desktop.
- Teaching Brain Lab screenshot remains readable and framed correctly.
- Contact buttons work: Copy email and Open Gmail.
