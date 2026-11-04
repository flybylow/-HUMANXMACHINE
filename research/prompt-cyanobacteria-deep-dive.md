# Prompt for Claude Code: deep dive on cyanobacteria ("blauwalg") and clay

Copy everything below the line into a new Claude Code session.

---

You are helping Ward, an artist-researcher in Bruges, Belgium, who works with clay, ceramics, microcontrollers (ESP32 mesh nodes, sensors, sound) and living organisms. Ward is not a scientist and wants to learn. Write in plain language.

## What I want from you

**Reflections, ideas and pointers, not a finished report.** Go broad and deep, follow leads, and tell me what you found, what surprised you, what you are unsure about, and what is worth following up. Half-formed ideas and open questions are welcome, as long as you mark them as such. Short sections and bullet points are fine.

## Context (what we decided so far)

- **Application:** EHIN residency (European Hybrid Intelligence Network). Host: **LABoral, Gijón (Asturias, Spain)**. Deadline: 4 December 2026. Residency: February 2027 to January 2028. Final show at ZKM Karlsruhe, September to October 2028.
- **The call's framing:** "hybrid intelligence" means interaction between different living and cognitive systems in ecosystems, not human plus AI. The method is the **"Dirty Lab"**: start in the field, study relationships between many organisms (not one organism in a sterile lab), and treat the whole process as artwork. The call wants traces, signals and relationships, not decoding of a "language". It invites sensors and AI interpretation of data streams.
- **The project, in one message:** *"One score, sung by different voices."* Clay from a few places in Asturias (plus one Flemish clay from home), each with its own living community, is made into identical vessels with the same sensor node and the same sound rules. What you hear is the place. At the end some vessels are fired, so the living record becomes a mineral one. Three steps: **Dig, Listen, Fire.**
- **Why cyanobacteria:** they are among the oldest life you can see (films, mats, crusts, blooms, stromatolites); their fossil record goes back at least about 2.1 billion years; they invented oxygen-producing photosynthesis and changed the planet (Great Oxidation Event, "rusting of the Earth"); every chloroplast descends from one; they have a 24-hour clock; they are the first colonisers of porous ceramics and building surfaces. In Belgium, *blauwalg* closes swimming lakes in summer.
- **Links with clay found so far:** they bind clay in desert soil crusts (*Microcoleus vaginatus*); magnesium clays form on their mats in salt lakes; clay coats and preserves them as fossils (Newman et al. 2017); modified clays are sprayed to sink blooms; clay (montmorillonite) binds the toxin microcystin; desert *Chroococcidiopsis* lives inside rock pores (a porous vessel wall is an "artificial rock"); ETH Zurich's living porous ceramics (Dutto et al. 2024); terracotta microbial fuel cells (Bristol); UCL robot-extruded clay tiles for algae; historic azulejos and roof tiles colonised by cyanobacteria.
- **Art precedents found so far:** Annemarie Maes (Brussels, *Synechocystis* in glass cells); Yan Shao, *Algae Chorus* (2022, sonification); Kuzmich and Wagner, *Photosynthesizer* (Klima Biennale Wien 2026); *Picoplanktonics* (Venice 2025); ecoLogicStudio (Centre Pompidou 2019); *SUBMERGED* bioceramics (Georgia, 2023); Studio Swine *∞ Blue* (ceramic, not alive); Lia Giraud's algae photographs; wild-clay projects (Rietveld, Stoke-on-Trent, Montana).
- **Ward's existing practice:** Hanging Garden / MycoMesh (ceramic mushrooms with ESP32 nodes over ESP-NOW, integrate-and-fire behaviour); Singing Bowls (sensor reads glaze craquelure as a score; ceramic speaker nodes); Stardirt (light written into clay with iron-tannin chemistry, fixed by firing; saggar reduction); Mobile Pattern Reader (handheld scanner for surface patterns); 300CC paste extruder and a LUTUM clay printer arriving.
- **Practical constraints Ward raised:** no electronics left in the field for a year; transport between sites; cross-contamination when vessels share a room; keep the idea simple to explain; Ward has no wet-lab training yet, and LABoral has no in-house wet lab. A winter pilot (November 2026 to January 2027) happens in Bruges, when there are no blooms.

## Read first

- The research base in this repository: `research/ehin-2026-n06-research-base.md` (especially the one-message summary at the top and sections 0, 8, 12, 12a to 12d). Do not rewrite it. Use it to avoid repeating work.
- If Notion is connected: Ward's pages under **Projects / EHIN Residencies** (Concept: Living Container; Literature & Precedents; Outreach & Open Questions; Narrative Options N01 to N07).

## Questions to explore (go broad, add your own)

1. **Deep history.** What is solid and what is debated about the oldest cyanobacterial fossils (find the primary source behind the "at least 2.1 billion years" claim on Wikipedia), stromatolites, the timing of oxygenic photosynthesis, and the Great Oxidation Event? Is there any credible link between early cyanobacterial mats and clay minerals (formation, protection, preservation, the Kennedy et al. 2006 "clay mineral factory" idea and its critics)?
2. **Cyanobacteria and clay today.** Search widely: soil crusts on clay soils, endoliths in ceramics and stone, colonisation of terracotta and bisque, how porosity, firing temperature, pH and surface texture affect colonisation, clay as UV shield, clay carriers for cyanobacterial biofertilisers, clay and cyanotoxins. What would actually grow on raw versus bisque versus vitrified clay?
3. **Visible and measurable signals.** What can cheap sensors realistically pick up from a living cyanobacterial film on a vessel: colour or chlorophyll fluorescence, O₂ and CO₂ swings over day and night, pH, surface voltage, moisture? What has been done with low-cost or DIY hardware (fluorescence, biophotovoltaics, photosynthetic fuel cells)? What are the pitfalls (noise, drift, artefacts, condensation)?
4. **Rhythm and "intelligence" without overclaiming.** The circadian clock (KaiABC), phototaxis, quorum sensing, mat layering, responses to light and stress. Which of these could become the "beat" of a score, and how can it be framed honestly as basal behaviour, not thought?
5. **Local presence.** Cyanobacteria and blooms in Flanders and Bruges (VMM monitoring, data, citizen science), and in Asturias (coast, rivers, reservoirs, soil crusts, rock surfaces, the Jurassic "Dinosaur Coast"). Who studies them locally (University of Oviedo, Spanish or Belgian labs, e.g. Ghent, KU Leuven, and the Dutch bloom researcher Jef Huisman)? Are there culture collections (for example BCCM/ULC in Liège) that supply safe reference strains?
6. **Safety and practicality.** Cyanotoxins, safe handling, which strains are non-toxic, how to sample soil and surfaces in winter, how to keep mixed communities alive in vessels for months, how to limit cross-contamination between vessels in one room, and what happens when you fire a colonised vessel (what marks might remain).
7. **Art, design and culture.** Find more artists, designers and architects working with cyanobacteria, algae, stromatolites, soil crusts or living ceramics, especially in sound, light, ceramics and long-duration work. Also cultural histories: spirulina at Lake Chad and Lake Texcoco, *Nostoc* folklore ("star jelly", "witches' butter"), blue pigments (phycocyanin), and "blue-green" in language and art. Note who might be a contact.
8. **Gaps and openings.** Where does Ward's combination (local clays, living communities, identical vessels, sensor mesh, sound, firing as record) still look open? Where has it already been done? Be specific and cautious.

## Rules

- **Tag every claim:** [E] established, [L] lab-scale, [H] hypothesis or your own idea. Flag anything you could not verify.
- **Cite primary sources** with a DOI or URL where possible. Say clearly when a source is only a press release, a blog, Wikipedia or a self-description.
- **Do not overstate.** "Intelligence" is a framing choice. Sensors measure proxies (light, colour, gas, voltage, moisture), not thoughts or language. Where something is contested, say so and name both sides.
- **Note the date:** today is 4 November 2026. Check whether events and calls are in the past or the future before suggesting them.
- **Network limits:** some sites may be blocked in your environment (Wikipedia, NCBI/PMC, NOAA, university pages were blocked in an earlier session). If a page is blocked, say which domain, use search results instead, and list the domains Ward could allow.
- **Keep it simple to act on.** End with: (a) the five most surprising or useful findings, (b) three to five concrete ideas or experiments for the winter pilot in Bruges, (c) open questions and unverified points, and (d) people or projects worth contacting.

## Output

Write your notes to `research/cyanobacteria-deep-dive-notes.md` on the current branch, commit and push. Keep it as working notes (reflections, pointers, uncertainties), not a polished report. Then give Ward a short summary in chat with a link to the file.
