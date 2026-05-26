# V2 Premium Implementation Notes

This version implements the portfolio V2 direction defined in `docs/portfolio-v2-blueprint.md`.

## Main changes

- Rebuilt the Hero around the narrative: “Turning complex information into actionable decisions.”
- Removed generic AI/data skill badges and KPI cards.
- Added a Journey Map section with five identities: Scientist, Statistician, Builder, AI Engineer, Teacher.
- Added a premium Teaching & Knowledge Design section featuring Teaching Brain Lab.
- Replaced the old project framing with a new “What I Build” product-oriented section.
- Added a “Currently Building” section for Career Intelligence Assistant.
- Updated the navbar anchors and contact messaging.
- Updated metadata and global CSS for a darker, cleaner product-like foundation.

## Validation performed

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.

`npm run build` could not complete in this sandbox because Next tried to download the SWC package and the npm registry setting is protected here. Run it locally after `npm install`.

## Suggested local test

```bash
npm install
npm run lint
npx tsc --noEmit
npm run dev
npm run build
```

Check responsive views:

- 390px
- 430px
- 768px
- 1024px
- 1440px
