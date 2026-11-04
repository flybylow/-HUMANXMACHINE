# Mineral and Living Intelligence: research base for the EHIN 2026 application

**Narrative:** N06, mineral and living intelligence (with N01, N02 and N04 where useful)
**Core question:** *What kind of intelligence does a clay vessel with living organisms have, and how can a network of microcontrollers make that intelligence perceivable?*
**Call:** EHIN Residencies. Deadline 4 December 2026, 23:59 CET (30 days from this file's date, 4 November 2026). Residency February 2027 to January 2028. Up to €25,000 covering fee and production together. Dissemination runs until October 2028.
**Prepared:** 4 November 2026, for Ward.

---

## How to read this file

Every claim carries one of three tags:

| Tag | Meaning |
|---|---|
| **[E] Established** | Repeated by several groups or textbook knowledge. |
| **[L] Lab-scale** | Shown in controlled experiments, often by one group, not yet shown in the wild or at scale. |
| **[H] Hypothesis** | A proposal, an interpretation, or this project's own idea. Not yet tested. |

Sources carry one of two marks:

- ✔ means the bibliographic details (authors, journal, year, DOI) were confirmed by search during this session. The full text was not always read.
- ⚠ means the source came from your Notion notes or from memory and was **not** confirmed in this session. Check it before you cite it.

**Two framing rules for the whole file:**

1. "Intelligence" is a framing choice, not a measurement. In this file it means *a graded capacity to sense, keep, process and respond to information* (after Lyon 2006 and Levin 2019). Under that definition clay, microbes, fungi and AI all sit somewhere on one scale. That does not make them equal, and it does not mean any of them thinks.
2. Microcontrollers measure **proxies**: voltage, humidity, temperature, light, CO₂, colour. They do not read thoughts or meanings. Turning a proxy into sound or light is an artistic decision, so the proposal should present it as a method, not as a finding.

**Network note:** this session could not open the EHIN website (europeanhybridintelligencenetwork.eu is outside the allowed network domains). Call details come from your Notion pages and the EHIN application form. Host details were partly checked by web search.

---

## Executive summary (one page)

**The idea.** A porous clay vessel is a habitat and a record at the same time. Living organisms (cyanobacteria first, possibly fungi later) grow in and on the clay. Each vessel, or each small group of vessels, has its own microcontroller. The microcontroller logs slow proxies of the colony's activity (moisture, light absorbed, CO₂, surface voltage, colour change) and turns them into light and sound. The vessels talk to each other over a local mesh, so there is no central brain. The colony also leaves marks in the clay over months. At the end, some vessels can be fired, so that part of the record becomes permanent, the way a sealed clay token envelope became a record.

**Why the history supports it.**
- *Clay as an active material.* Clay minerals concentrate and protect molecules and microbes, and they catalyse chemistry. Ferris and Orgel grew RNA-like chains up to 55 units long on montmorillonite (1996) [L]. Szostak's group showed that clay speeds up the formation of membrane vesicles about 100-fold (2003) [L]. Stotzky showed in the 1960s that clays buffer pH and support bacteria [E]. That clay *started* life remains a contested hypothesis [H].
- *Life as distributed information processing.* Slime moulds solve mazes (2000) [L]. Bacterial biofilms send electrical waves (2015) [L]. Fungal mycelium shows electrical spiking and rhythms that last for weeks (2024) [L]. The interpretation as "cognition" (Lyon, Levin) is influential and contested [H]. The claims of a "fungal language" have been criticised directly (Blatt et al. 2024).
- *Living ceramics now exist at lab scale.* In 2024 ETH Zurich hosted cyanobacteria and engineered bacteria in porous ceramics for carbon capture and gas sensing [L]. In 2013 the Bristol group showed that fired terracotta and earthenware work as membranes in microbial fuel cells, with the voltage read electronically [L].
- *Fired clay keeps records.* Fired bricks lock in the Earth's magnetic field at the moment of firing (PNAS 2023) [E]. Unglazed pots keep food fats for 7,000 years (Nature 2012) [E]. Clay tokens and envelopes are an early accounting system, although the claim that they were the origin of writing is debated [E/H].

**What is new.** The pieces exist separately: living ceramics in a lab, fired clay as a record in archaeology, bio-art in galleries, sensor meshes in maker culture. As far as this search found, **nobody has grown a living culture on ordinary fired or raw clay vessels, logged it for months with a distributed sensor network, and then fired part of it as a permanent record** [H, novelty not exhaustively verified]. Ward's practice already holds most of the technical parts: ESP32 mesh nodes (MycoMesh), ceramic speaker nodes, a craquelure reader (Singing Bowls), light-into-clay chemistry with firing (Stardirt), a surface pattern reader, and a paste extruder.

**The honest gap.** Ward has no wet-lab training yet. The project needs a biologist partner and the host's biosafety rules. Cyanobacteria are the safest starting organism (photosynthetic, non-pathogenic strains, already used in ceramics at ETH).

**Host fit in short.** Kersnikova (Ljubljana) is strongest for living organisms and has a long bio-art history. LABoral (Gijón) is strongest for the many-agents and swarm framing, but the biology would need an outside partner. Gluon (Brussels and Utrecht) is the closest material match (biofabrication), but the lab is medical. See section 11.

**Before drafting:** confirm the host list and scientists on the EHIN site and Guide for Applicants v2, read the four core papers in full (Dutto 2024, Winfield 2013, Ferris 1996, Blatt 2024), and settle the organism and the definition of intelligence. Open questions are listed at the end.

---

# Part A: History

## 1. History in science

A short timeline of how clay, microbes, fungi, cognition and computing came to be studied together. They were mostly separate fields until about 2010.

### 1a. Clay and the origin of life (1940s to now)

| Year | Who | What | Status |
|---|---|---|---|
| 1949–1951 | **J. D. Bernal** (UK) | Proposed that clay mineral surfaces could concentrate and protect the first biological molecules. Set out in *The Physical Basis of Life* (Routledge & Kegan Paul, 1951), based on his 1947 Guthrie Lecture. ⚠ (read the original before quoting) | [H], the founding idea |
| 1966, 1982 | **A. Graham Cairns-Smith** (Glasgow) | Went further: clay crystals themselves were the first "genes", copying their defect patterns before organic genes took over. *Genetic Takeover and the Mineral Origins of Life*, Cambridge UP, 1982 ✔ | [H], never mainstream, **contested** |
| 1996 | **James Ferris, Leslie Orgel** et al. | Montmorillonite clay builds RNA-like chains up to 55 units long, compared with about 10 in solution. *Nature* 381:59–61. [doi:10.1038/381059a0](https://doi.org/10.1038/381059a0) ✔ | [L] |
| 2002 | Ferris | Review of 30–50-unit clay-made oligonucleotides. *Orig. Life Evol. Biosph.* 32:311. doi:10.1023/A:1020543312109 ⚠ | [L] |
| 2003 | **Hanczyc, Fujikawa, Szostak** (Harvard) | Montmorillonite speeds vesicle (proto-cell) formation about 100-fold, and clay with RNA attached ends up inside the vesicles. *Science* 302:618–622. doi:10.1126/science.1089904 ⚠ (paper confirmed ✔, DOI from memory) | [L] |

**Contested:** whether life began on clay, in hydrothermal vents, in small ponds, or elsewhere is still open. Szostak himself said of the 2003 work: "We're not saying that this is a process that actually happened" ([Harvard Gazette, 2003](https://news.harvard.edu/gazette/story/2003/11/a-role-for-clay-in-formation-of-the-first-cells)) ✔. Use the clay story as a *plausible and productive* idea, not as fact.

### 1b. Clay and microbes (1960s to now)

| Year | Who | What | Status |
|---|---|---|---|
| 1966–1967 | **Guenther Stotzky** (NYU) and L. T. Rem | Series "Influence of clay minerals on microorganisms" in *Can. J. Microbiol.* Part I (bacteria): montmorillonite stimulated bacterial respiration mainly by keeping the pH stable. [doi:10.1139/m66-078](https://doi.org/10.1139/m66-078) ✔. Part III (particle size, cation exchange): doi:10.1139/m66-165 ✔. Part IV (fungi): doi:10.1139/m67-202 ✔ | [E] |
| 1977 | Babich and Stotzky | Clays reduce cadmium toxicity to microbes. Montmorillonite protects more than kaolinite. *Appl. Environ. Microbiol.* 33:696 ⚠ | [L] |
| 2000 | (Notion source) | Clay-bound phage PBS1 survives UV, while free phage loses about 90% in 5 minutes. *Can. J. Microbiol.* doi:10.1139/w00-055 ⚠ | [L] |
| 2020 | **Simons et al.** (Toulouse) | First survey of microbes living in raw earthen walls in buildings. Diversity is lower than in soil, and room use matters more than clay composition. *Environ. Microbiome* 15. [doi:10.1186/s40793-019-0350-6](https://doi.org/10.1186/s40793-019-0350-6) ✔ | [E], descriptive |

### 1c. Basal cognition (2000 to now)

| Year | Who | What | Status |
|---|---|---|---|
| 2000 | **Nakagaki, Yamada, Tóth** (Japan) | Slime mould *Physarum* finds the shortest path through a maze. *Nature* 407:470. doi:10.1038/35035159 ⚠ (paper ✔, DOI from memory) | [L] |
| 2006 | **Pamela Lyon** (Adelaide) | "The biogenic approach to cognition": start from biology and work upward, rather than starting from humans and working down. *Cogn. Process.* 7:11–29. [doi:10.1007/s10339-005-0016-8](https://doi.org/10.1007/s10339-005-0016-8) ✔ | [H], a framework |
| 2010 | **Tero, Nakagaki, Bebber, Fricker** et al. | *Physarum* builds networks comparable to the Tokyo rail system. *Science* 327:439. [doi:10.1126/science.1177894](https://doi.org/10.1126/science.1177894) ✔ | [L] |
| 2015 | **Prindle, Süel** et al. (UCSD) | Bacterial biofilms use potassium ion channels to send electrical waves across the colony, a little like neurons. *Nature* 527:59–63. doi:10.1038/nature15709 ✔ | [L] |
| 2019 | **Michael Levin** (Tufts) | "The computational boundary of a self": any system can be described by the size of the goals it can pursue (its "cognitive light cone"). *Front. Psychol.* 10:2688. [doi:10.3389/fpsyg.2019.02688](https://doi.org/10.3389/fpsyg.2019.02688) ✔ | [H], a theory article |
| 2021 | **Lyon, Keijzer, Arendt, Levin** | "Reframing cognition: getting down to biological basics". This essay launched the term *basal cognition*. *Phil. Trans. R. Soc. B* 376:20190750. [doi:10.1098/rstb.2019.0750](https://doi.org/10.1098/rstb.2019.0750) ✔ | [H], a framework |

**Contested:** Fred Adams ("Cognition wars", *Stud. Hist. Phil. Sci. A* 68:20–30, 2018 ✔ via [PhilPapers](https://philpapers.org/rec/ADACW)) argues that bacteria and plants react in a hardwired way and are *not* cognitive. Segundo-Ortín and Calvo replied in defence of plant cognition. This is a live philosophical debate, so the proposal should present "basal cognition" as one position.

### 1d. Unconventional and fungal computing (1950s, then 2000s to now)

| Year | Who | What | Status |
|---|---|---|---|
| 1958 | **Gordon Pask** (and Stafford Beer) | Grew iron threads in ferrous sulphate solution that adapted to inputs. The "ear" learned to tell two sound frequencies apart. "Physical analogues to the growth of a concept", NPL symposium *Mechanisation of Thought Processes*, 1958 ⚠ (described via [Wikipedia](https://en.wikipedia.org/wiki/Gordon_Pask) and Cariani 1993). An early case of *material* computing. | [L], historical |
| 1995 | **Olsson and Hansson** | First recordings of action-potential-like spikes in fungal hyphae, which increased when stimulated. *Naturwissenschaften* 82:30–31 ✔ (via secondary sources) | [L] |
| 2010 on | **Andrew Adamatzky** (UWE Bristol, Unconventional Computing Lab) | *Physarum Machines* (World Scientific, 2010) ⚠. Later fungal work: Boolean logic gates in oyster-mushroom mycelium on hemp (Roberts and Adamatzky, *Sci. Rep.* 12:15930, 2022, [doi:10.1038/s41598-022-20080-3](https://doi.org/10.1038/s41598-022-20080-3) ✔). "Language of fungi derived from their electrical spiking activity" (*R. Soc. Open Sci.* 2022) ✔ | [L] for gates, [H] for "language" |
| 2024 | **Blatt, Pullum, Draguhn, Bowman, Robinson, Taiz** | Critique: the fungal "language" is unsupported, and the spikes may partly be electrode drift and noise. *Fungal Ecol.* 68:101326. [doi:10.1016/j.funeco.2023.101326](https://doi.org/10.1016/j.funeco.2023.101326) ✔ | The critique |
| 2024 | **Fukasawa, Akai, Takehi, Osada** (Tohoku) | Recorded a wood-decay fungus for over 100 days. Electrical activity flowed from the food source, and later a week-long oscillation appeared. *Sci. Rep.* [doi:10.1038/s41598-024-66223-6](https://doi.org/10.1038/s41598-024-66223-6) ✔ | [L], and an important model for **slow, long recordings** |

**Contested:** fungal electrical signalling is real but small and slow, and it is easy to confuse with artefacts. Fungal "language" and "computers" are research directions, not results.

### 1e. Living materials and living ceramics (2004 to now)

| Year | Who | What | Status |
|---|---|---|---|
| 2004 | **Soltmann, Pompe, Böttcher, Mertig** (Dresden) | "Biocers": bacteria, fungi and yeast kept alive inside sol–gel ceramics made at low temperature. *J. Mater. Chem.* 14:2176. [doi:10.1039/b401724b](https://doi.org/10.1039/b401724b) ✔ (your notes name the authors as Böttcher et al.) | [L] |
| 2013 | **Winfield, Greenman, Huson, Ieropoulos** (Bristol) | Terracotta and earthenware tested as membranes in microbial fuel cells. More porous earthenware gave 75% more current, denser terracotta gave a higher open-circuit voltage. *Bioprocess Biosyst. Eng.* 36:1913–1921 ✔ ([UWE repository](https://uwe-repository.worktribe.com/output/925221)) | [L], **closest electrical precedent** |
| 2017 | **Schaffner, Rühs, Coulter, Kilcher, Studart** (ETH Zurich) | "Flink": 3D-printed living bacterial ink. *Sci. Adv.* 3:eaao6804. [doi:10.1126/sciadv.aao6804](https://doi.org/10.1126/sciadv.aao6804) ✔ | [L] |
| 2020 | **Heveran, Srubar** et al. (Boulder) | Cyanobacteria (*Synechococcus*) harden sand and gel with calcium carbonate, and the material can regrow three times. *Matter* 2:481–494 ✔ ([NREL copy](https://www.nrel.gov/docs/fy20osti/76141.pdf)) | [L] |
| 2024 | **Dutto, Kan, Saraw, Maillard, Zindel, Studart** (ETH Zurich) | "Living porous ceramics": a clay-based porous ceramic that wicks nutrients to cyanobacteria (CO₂ capture) and engineered *E. coli* (formaldehyde sensing). *Adv. Mater.* (online 10 Dec 2024). [doi:10.1002/adma.202412555](https://doi.org/10.1002/adma.202412555) ✔ ([open access, PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11795706/)) | [L], **closest material precedent**. Your notes say 2025, which is likely the print issue. |
| 2025 | **Dranseike, Tibbitt, Studart** (ETH) | Printed cyanobacteria kept alive for over a year and storing carbon as minerals. *Nat. Commun.* 16. [doi:10.1038/s41467-025-58761-y](https://doi.org/10.1038/s41467-025-58761-y) ✔ | [L], shows **year-long viability** |

---

## 2. History in art

Artworks that worked with living organisms, clay, computation or biological materials. The column "Science link" notes where the artwork and the science met.

| Year, place | Artist, work | What it did | Science link | Source |
|---|---|---|---|---|
| 1936, MoMA New York | Edward Steichen, *Delphiniums* | Exhibited flowers he had bred, the first living organisms shown at MoMA | Plant breeding (genetics) | ⚠ |
| 1953 to 1960s, UK | Gordon Pask, *Musicolour* and chemical computers; Stafford Beer | Light shows that "got bored", and iron-thread devices that grew | Cybernetics; first artist-scientist overlap | ⚠ ([overview](https://en.wikipedia.org/wiki/Gordon_Pask)) |
| 1968, ICA London | *Cybernetic Serendipity* (curated by Jasia Reichardt) | Landmark show of computer art | Computing in art | ⚠ |
| 1969, Cornell | Hans Haacke, *Grass Grows* | A mound of soil that sprouted grass during the show. Systems art. | Ecology as process | ⚠ |
| Late 1980s, MIT | Joe Davis, *Microvenus* | A rune encoded in synthetic DNA and put into *E. coli*. Published in *Art Journal* 1996. | DNA data storage before it had a name | ✔ ([Jacket2](https://jacket2.org/commentary/joe-davis-microvenus-molecular-muse)). Dates differ across sources (1986, 1988, 1996). |
| 1999, Ars Electronica, Linz | Eduardo Kac, *Genesis* | A Bible sentence in Morse code turned into DNA and put into bacteria. Online visitors switched on UV light that mutated the text. | Molecular biology lab | ✔ ([overview](https://www.fondation-langlois.org/e-art/e/eduardo-kac.html)) |
| 2000 on, Perth | Oron Catts and Ionat Zurr, SymbioticA (University of Western Australia) | Artists' lab inside a university school of anatomy | Tissue engineering | ⚠ |
| 2008, MoMA New York | Tissue Culture & Art, *Victimless Leather* | A tiny jacket of living mouse cells. It grew too fast, clogged its incubator, and curator Paola Antonelli had to switch it off five weeks in. | Tissue engineering | ✔ ([The Art Newspaper](https://www.theartnewspaper.com/2008/05/01/moma-stem-cell-exhibit-dies-five-weeks-into-show)) |
| 2010, Saint-Étienne Biennale | Unfold (Antwerp), *L'Artisan Électronique* | Open-source RepRap-style clay 3D printer and a virtual pottery wheel. A Belgian precedent for digital clay. | Open hardware | ✔ ([Unfold](https://unfold.be/pages/l-artisan-electronique.html)) |
| 2010, Venice Architecture Biennale | Philip Beesley with Rachel Armstrong, *Hylozoic Ground* | Responsive mesh with sensors and chemical "protocells" | Artificial life chemistry | ⚠ |
| 2013, Slovenia | Saša Spačal with Mirjan Švagelj and Anil Podgornik, *Mycophone_unison* and *Myconnect* | Sound and touch interfaces with fungi and microbiomes, shown through Kapelica/Kersnikova | Mycology and electronics | ✔ ([ADAF archive](https://archive.adaf.gr/artwork/mycophone_unison/)) |
| 2014, Paris and Vevey | Lia Giraud, *Algae-graphies* | Photographs "grown" in living microalgae that keep changing with light | With the Muséum national d'Histoire naturelle | ✔ ([Jeu de Paume essay](https://jeudepaume.org/en/palm/algaegraphs-unmasking-the-image-essay-by-lia-giraud-palm-jeu-de-paume-2/)) |
| 2015, Plymouth | Eduardo Miranda and Ed Braund, *BioComputer Music* | A piano duet with slime mould used as a memristor | Unconventional computing; co-authored papers | ✔ ([Physics Today](https://physicstoday.aip.org/news/slime-mold-acts-as-memory-device-to-create-music)) |
| 2016–2019, Newcastle and Bristol | *Living Architecture* (EU Horizon 2020, Rachel Armstrong, Ieropoulos, Adamatzky) | Wall of bioreactor "bricks" with microbial fuel cells | Engineering consortium | ✔ ([Newcastle press release](https://www.ncl.ac.uk/press/articles/archive/2016/07/liarlivingarchitecture)). Final outcome not found. |
| 2016, MIT | Neri Oxman / Mediated Matter, *Vespers* | 3D-printed death masks with engineered bacteria | Synthetic biology | ⚠ |
| 2017, Skulptur Projekte Münster | Pierre Huyghe, *After ALife Ahead* | Former ice rink with HeLa cells in an incubator that controlled the roof and AR shapes, plus bees and algae | Cell culture and algorithms | ✔ ([archive](https://skulptur-projekte-archiv.de/en-us/2017/projects/186/)) |
| 2018, London | Jenna Sutela with Memo Akten and Damien Henry, *nimiia cétiï* | Machine learning watched *Bacillus subtilis* and wrote a "Martian" language | Microbiology and ML | ✔ ([Ars Electronica](https://ars.electronica.art/outofthebox/en/nimiiacetii)). Also screened at Kontejner. |
| 2018, Eden Project, Cornwall | Studio Swine, *∞ Blue* | Large ceramic sculpture honouring cyanobacteria. **Nothing in it is alive.** | Themed on science, not made with it | ✔ ([Dezeen](https://www.dezeen.com/2018/05/25/studio-swine-nine-metre-tall-breathing-sculpture-eden-project-design/amp/)) |
| 2018 | Tega Brain, *Deep Swamp* | AI agents tend living wetland tanks | Ecology and AI | ⚠ |
| 2020 on, Hong Kong | Archireef (Vriko Yu, David Baker) | 3D-printed terracotta tiles for coral to grow on | Marine biology (start-up, not art) | ✔ ([Eco-Business](https://eco-business.com/news/finding-life-in-places-once-lifeless-how-these-3d-printed-terracotta-tiles-are-restoring-coral-reef-ecosystems)). Survival figures (95–98%) are company claims. |
| 2021, Tate Modern | Anicka Yi, *In Love With the World* | Floating machines with AI "behaviour", building on her earlier bacterial works | Engineering and microbiology | ⚠ |

**Where art and science met:** Davis (MIT), SymbioticA (UWA), Giraud (MNHN) and Miranda (with Adamatzky's lineage) all worked inside or alongside labs. In the strongest cases the scientist was a credited collaborator or co-author, not a consultant [E]. **Gap in art:** this search found living ceramics in science (ETH, Bristol) and in ecology (Archireef), and clay sculpture *about* microbes (Studio Swine), but no artwork in which a living colony on fired or raw clay vessels is sensed and voiced over months [H, check further].

---

## 3. What we can learn

**Keeping living material alive**
- **Living works fail in public.** *Victimless Leather* was switched off at MoMA after five weeks because it overgrew its incubator ✔. Plan maintenance, a named carer, and a dignified end (for example, firing) from the start [E].
- **Mould is the common enemy** in sealed organic set-ups. The Stardirt notes already record this for anthotypes in a camera obscura [E].
- **Choose robust organisms.** The successful ceramic projects used cyanobacteria (*Synechococcus*) and spore-forming *Bacillus* ✔ (Heveran 2020, Dutto 2024) [L].
- **Porosity is a design variable, not a constant.** In the terracotta and earthenware fuel cells, porosity and wall thickness changed both power and stability, and porous earthenware leaked liquid early on ✔ (Winfield 2013) [L]. Bisque temperature and clay body will matter.
- **Long durations are possible.** Fukasawa recorded for 100+ days and Dranseike cultured for over a year ✔ [L]. A 12-month residency fits that timescale.

**How the science was presented**
- **Overclaiming spreads faster than corrections.** The fungal "50 words" headline (2022) was widely reported. The critique (Blatt et al. 2024) got far less attention ✔.
- **Old myths come back.** The idea that pottery records sound from the moment it was made (Woodbridge, *Proc. IEEE*, 1969) was tested by later researchers and by MythBusters, with no intelligible speech recovered ✔ ([overview](https://en.wikipedia.org/wiki/Archaeoacoustics)). The proposal should state clearly what fired clay does and does not keep (section 8).
- **Ambitious visions can outrun data.** The *Living Architecture* wall was announced as "high-risk"; this search found no final report ⚠.

**What worked**
- The scientist as a named co-author (Miranda and Braund; Giraud with MNHN).
- The process itself as the artwork: Huyghe let living systems drive the installation instead of illustrating science.
- Open, documented failure (ceramic cyanotype practitioners sharing wash-out problems, as noted in Stardirt).

**Lesson for this project:** say "we measure humidity, light and voltage, and we *choose* to hear them as the vessel's activity" instead of "the vessel speaks". That honesty is a strength, and the call's audience will notice it.

---

# Part B: Position

## 4. How it ties to Ward's practice

| Existing work | What it already does | What the EHIN project adds |
|---|---|---|
| **Hanging Garden / MycoMesh** | ESP32 nodes in ceramic mushrooms talk over ESP-NOW. Each runs an integrate-and-fire loop that *simulates* a fungal signal. A Node.js conductor schedules sound; the AI conductor in Hanging Garden "pushes too hard and pots break". | The firing rule is no longer simulated. A living colony's measured proxies (moisture, light, voltage) feed each node's charge. The conductor gives up control: **the living system becomes part of the conductor.** [H] |
| **Singing Bowls** | A spinning bowl, a sensor reads the glaze craquelure, the cracks become a score (Strudel), and the sound goes to wireless ceramic speakers. | Craquelure is a *finished* record made once, in the kiln. A colony makes a *growing* record. The same reading-to-score method is applied to marks that change week by week. [H] |
| **Stardirt** (clay photographic system) | Light written into clay with iron-tannin chemistry on bisque, then fixed by firing. Has a staged test protocol and a kiln plan. | Replaces light with life as the writer. Biofilm staining, carbonate and iron deposits are fixed by firing in the same way. Reuses the Phase 0 staged-test method and the oxidation versus saggar comparison. Whether biological marks survive firing is untested [H]. |
| **Mobile Pattern Reader** | Handheld microcontroller that scans surfaces and stores image, audio and sensor data for later pattern reading. | Becomes the instrument that *reads the vessels* at intervals over 12 months, building a time series of each surface. [H] |
| **300CC extruder** (open-source paste extruder for the Ultimaker 2) plus the incoming LUTUM 4.6 | Extrudes pastes and clay. | (a) Print vessels with **designed porosity gradients** (thick and thin walls, channels like the ETH wicking ceramics). (b) Possibly extrude agar or alginate carrier gels with organisms onto bisque, as long as the host lab approves it. Both [H]. |

**What Ward specifically adds that labs do not:**
1. **Clay craft knowledge:** clay bodies, bisque temperatures, glaze versus bare surfaces, kiln atmospheres. Labs use engineered ceramics, not studio clay.
2. **Distributed, cheap, per-object sensing** that already runs on real hardware (two audio nodes confirmed in September 2026).
3. **A time-based reading method** (pattern reader, craquelure-to-score) that treats the vessel as a document.
4. **Public translation** into sound and light, with the proxy-to-sound mapping documented openly.
5. **A narrative that spans timescales:** clay (geological), colony (weeks), network (milliseconds).

## 5. Mission and vision

> **Clay remembers. Living things respond. We listen, and we say how.**
>
> Clay was there before life. It may have sheltered life's first molecules, and it still shelters microbes in every soil. People later used it as one of the first ways to keep records. This project asks what kind of intelligence lives in a clay vessel that holds a living colony. It treats intelligence not as thought, but as a graded capacity to sense, keep and respond to information, spread across mineral, microbe and machine.
>
> Each vessel is an agent. A small microcontroller listens to its colony's slow signals (moisture, light, gas, voltage) and voices them as light and sound. The vessels talk to their neighbours, not to a central brain. Over a year, the colonies write marks into the clay. At the end, some vessels are fired, so the living record becomes a mineral one, like a sealed clay envelope.
>
> We do not claim the vessel thinks. We show, openly and step by step, how a living material becomes perceivable, and where our own choices shape what is heard.

(About 190 words. For the application, cut or extend it to match the word budget.)

---

# Part C: Research base

## 6. What has been done in engineering

- **Living ceramics.** Porous clay-based ceramics host cyanobacteria and engineered bacteria. Capillary action pumps nutrients through the pores ✔ (Dutto 2024) [L]. Low-temperature sol–gel "biocers" keep microbes viable inside the matrix ✔ (Soltmann 2004) [L]. *Not yet shown:* ordinary studio bisque or raw clay used for months outside the lab.
- **Living building materials.** Cyanobacteria precipitate calcium carbonate that binds sand. Viability was kept for 30 days, and the material regrew three times ✔ (Heveran 2020) [L]. Printed cyanobacteria were cultured for over a year ✔ (Dranseike 2025) [L].
- **Biofabrication and bioprinting.** Bacterial inks can be printed (Flink) ✔ (Schaffner 2017) [L]. Volumetric bioprinting at Utrecht prints cell-laden gels in seconds, mainly for medicine ✔ ([UU profile, Levato](https://www.uu.nl/staff/RLevato)) [L]. Your notes found no published work on printing living cells onto fired clay ⚠. This search did not find any either.
- **Microcontroller and electronic sensing of living systems.**
  - Microbial fuel cells with **fired clay** walls give a voltage that tracks microbial activity ✔ (Winfield 2013) [L]. This is the most direct way to "listen" electrically to a colony on clay.
  - Fungal spiking is recorded with needle electrodes and high-impedance amplifiers over 100+ days ✔ (Fukasawa 2024; Adamatzky) [L]. Signals are microvolts to millivolts and need careful shielding (see the Blatt critique).
  - Low-cost proxies that are well established in electronics [E]: humidity and temperature (for example, SHT3x sensors), CO₂ for photosynthesis or respiration (for example, NDIR SCD4x), spectral colour (Ward already uses a spectral sensor in the Ceram tile work), time-lapse imaging, and ADC voltage logging (for example, ADS1115). Specific part choices are suggestions ⚠.
  - Plant electrophysiology kits (for example, Backyard Brains' Plant SpikerBox) show that hobby-grade hardware can record biological voltages ⚠.

## 7. What has been done in biology

- **Clay helps microbes.** It buffers pH, supplies minerals, and stimulates respiration ✔ (Stotzky and Rem 1966) [E]. It reduces heavy-metal toxicity ⚠ (Babich and Stotzky 1977) [L]. It shields phage and nucleic acids from UV ⚠ [L]. *Limit:* most UV tests used 254 nm (germicidal UV), not sunlight. There is no direct test of cyanobacterial mats on clay under natural UV (your notes) [H].
- **Microbes change clay.** Microbial activity can help transform smectite into illite and precipitate carbonates ⚠ (Fiore, CNR; *Minerals* 2025 review; titles to confirm) [L to E].
- **Ceramics get colonised.** On exposed porous ceramics, phototrophs (cyanobacteria, algae) arrive first, then bacteria and fungi ⚠ (*Minerals* 2025 review) [E for biodeterioration]. This works in the project's favour: colonisation is likely. It also carries a risk: unwanted organisms will arrive too.
- **Raw earth already holds microbes.** In-situ earthen walls hold lower-diversity communities, shaped by building history and room use. No harmful species were singled out, but humid conditions can favour pathogens ✔ (Simons 2020) [E].
- **Basal cognition in microbes.** Biofilm electrical signalling ✔ (Prindle 2015) [L]. Quorum sensing, where bacteria coordinate by chemical signals ⚠ (Miller and Bassler, *Annu. Rev. Microbiol.* 55:165, 2001) [E]. Slime-mould problem solving ✔ (Nakagaki 2000; Tero 2010) [L]. Fungal "ecological memory", where a network's shape reflects past food ⚠ (Fukasawa, Savoury, Boddy, *ISME J* 2020) [L]. The cognitive *interpretation* is [H] and contested (Adams 2018).

## 8. Clay as memory

What fired and unfired clay can keep, from the strongest evidence to the weakest:

| What is kept | How | Status | Source |
|---|---|---|---|
| **Impressed marks and counts** | Tokens sealed inside clay envelopes (bullae) from the 4th millennium BCE, with marks pressed on the outside to show the contents. | [E] for the objects. **Contested:** the claim that they led directly to writing (Schmandt-Besserat, *Before Writing*, UT Press 1992; critical reviews by Michalowski, *Am. Anthropol.* 1993, and Zimansky 1993) | ✔ ([Zimansky review PDF](https://urkesh.org/attach/Zimansky1993.pdf)) |
| **Accidental permanence** | Unfired tablets survive when a fire bakes them (for example, the burning of Assyrian libraries). | [E] | ⚠ |
| **The Earth's magnetic field at the moment of firing** | Iron-oxide grains align as the clay cools. Dated bricks naming 12 Mesopotamian kings recorded field strength. | [E] | ✔ Howland et al., *PNAS* 120 (2023), [doi:10.1073/pnas.2313361120](https://doi.org/10.1073/pnas.2313361120) |
| **Time since firing** | Thermoluminescence resets when clay is heated, so it can date pottery. | [E] | ⚠ |
| **What the pot held** | Fats soak into **unglazed** porous walls and survive for millennia. Dairy fats were found in 7,000-year-old Saharan pots. | [E] | ✔ Dunne et al., *Nature* 486:390 (2012), [doi:10.1038/nature11186](https://doi.org/10.1038/nature11186) |
| **Firing conditions** | Colour shows oxidation versus reduction (red hematite versus black magnetite). | [E] | Stardirt notes; ⚠ |
| **Sound at the moment of making** | Claimed in 1969, never shown for intelligible speech. | **Not supported** | ✔ ([overview](https://en.wikipedia.org/wiki/Archaeoacoustics)) |
| **Living colony marks after firing** | Organic matter burns off at roughly 300–500 °C. Mineral traces (iron deposits, some carbonate) might remain as colour or texture. Carbonates break down at high temperature. | **[H], untested, central to this project** | — |

**Takeaway:** fired clay is an excellent record of *physical and chemical* events (heat, magnetism, absorbed substances, pressed marks). It is not a record of sound or meaning. A living colony's trace is likely to survive firing only as mineral residue [H].

## 9. Comparison table: clay, microbes, fungi and AI

Each cell has a source or a tag. **[H]** means the cell is this project's hypothesis.

| | **Clay (fired or raw)** | **Microbes (bacteria, cyanobacteria)** | **Fungi (mycelium)** | **AI (machine learning)** |
|---|---|---|---|---|
| **Role** | Habitat, buffer, catalyst, record. Supports bacteria by buffering pH (Stotzky 1966 ✔). Catalyses RNA-like chains (Ferris 1996 ✔, [L]). | Sense and respond collectively. Electrical waves in biofilms (Prindle 2015 ✔, [L]). Photosynthesis and CO₂ uptake in ceramics (Dutto 2024 ✔, [L]). | Explore, connect and transport. Network decisions (Fukasawa 2024 ✔, [L]). Logic-like input and output (Roberts and Adamatzky 2022 ✔, [L]). | Recognises and generates patterns from data [E]. In this project, AI is *not* in the vessels: the microcontrollers run simple rules [H, design choice]. |
| **Speed** | Fired record: fixed at firing, then stable for millennia (Howland 2023 ✔). Mineral change: years to geological time ⚠. | Biofilm signals: hours (Prindle 2015 ✔). Growth: hours to days [E]. | Spikes: minutes to hours (Olsson 1995 ✔; Adamatzky 2022 ✔). Oscillation: about one week (Fukasawa 2024 ✔). | Milliseconds per inference [E]. Training: weeks, very energy-hungry [E]; give a figure only with a source ⚠. |
| **Structure** | Layered silicate sheets. When fired, a porous network whose porosity depends on clay body and temperature (Winfield 2013 ✔). | Biofilm: cells in a self-made matrix, **no centre** (Prindle 2015 ✔). | Hyphal network that grows where it is used, **no centre** (Tero 2010 ✔ for *Physarum*, a slime mould and not a fungus; Fukasawa 2024 ✔). | Layered artificial network, usually **centralised** in data centres [E]. |
| **What it keeps** | Marks, magnetic field, absorbed residues, firing atmosphere (section 8, ✔). Not sound (✔). | Mineral deposits (carbonate) (Heveran 2020 ✔; Dranseike 2025 ✔). Short-term "memory" of potassium state ⚠ (later Süel-lab work). | Network shape reflects past resources ⚠ (Fukasawa et al. 2020). | Statistical weights of training data, not the events themselves [E]. |
| **In the vessel** | The archive [H] | The responder [H] | Optional second responder [H] | The *listener* is the microcontroller mesh, not AI [H] |

**Note on N02's line "AI is the newest, most centralised and energy-hungry":** this is fair as a contrast [E in general terms], but put a sourced energy figure in the proposal or leave the number out.

## 10. Gaps (what no one seems to have tested)

All are [H]. They are gaps *as far as this search found*, which was not exhaustive.

1. **Living cultures on ordinary studio clay** (raw, bisque at different temperatures, partly glazed) followed for 6–12 months, compared with engineered lab ceramics.
2. **The vessel as a time-based record:** periodic imaging and sensing of colony marks on clay, read as a document (pattern reader), not only as a material property.
3. **Firing as fixing:** whether marks from a colony (staining, iron or carbonate deposits) survive bisque, oxidation or saggar firing as readable patterns. The Stardirt protocol can be reused directly.
4. **A distributed sensor mesh on living ceramics:** labs measure one sample at a time. Nobody has tested a network of cheap nodes, each on its own vessel, interacting in real time.
5. **Clay-body comparison for colonisation:** earthenware versus terracotta versus stoneware, and porosity versus survival, with electrical readout (Winfield 2013 did this for power, not for art or for long-term records).
6. **UV shielding by clay for cyanobacteria under real sunlight**, not 254 nm lamps (from N01 and N05).
7. **The method gap:** a documented, reusable mapping from biological proxies to sound and light that says clearly what is measured and what is chosen.

**A realistic first experiment (pilot, months 1–3):** 12 small bisque vessels (3 clay bodies × 2 bisque temperatures × 2 surface treatments). A non-pathogenic cyanobacterium (for example, *Synechococcus* PCC 7002, as used at Boulder, or *Synechocystis*, to be confirmed with the host). One node per vessel logs humidity, temperature, light transmitted or absorbed, CO₂ and surface voltage, plus weekly imaging with the pattern reader. Controls: sterile vessels with the same medium [H, design].

## 11. Host fit

Host names and scientists come from your Notion page. They could **not** be checked on the EHIN site in this session. ✔ means the scientist's research area was confirmed by search. The column "Non-medical?" is a judgement.

| Host | Scientist (as listed) | Verified? | Facilities (from notes) | Likely to engage with a non-medical clay project? |
|---|---|---|---|---|
| **Kersnikova** (Ljubljana) | Dr Matej Butala, University of Ljubljana Biotechnical Faculty: bacteriophage, *Bacillus*, SOS response, enzymatic DNA synthesis for **data storage** (public lecture April 2025) | ✔ ([CRIS profile](https://cris.cobiss.net/ecris/si/en/researcher/17552)) | BioTehna wet lab, Rampa electronics lab, Vivarium | **High.** Long bio-art history (Kapelica showed Spačal's fungal works ✔). Butala's DNA-storage interest links directly to "clay as memory". The host wants some wet-lab experience. |
| **LABoral** (Gijón) | Dr Nuria Gómez Blas, Universidad Politécnica de Madrid: swarm intelligence, ant-colony and particle-swarm models | ✔ (publication listings, e.g. [csauthors](https://www.csauthors.net/nuria-gomez-blas)) | FabLab, digital manufacturing; 6–8 weeks on site | **High for the agents and swarm framing; low for the biology.** You would need to name an outside biolab partner. You have met her (FTI, WIELS, Brussels). |
| **Gluon** (Brussels and Utrecht) | Prof Jos Malda and Dr Riccardo Levato, UMC Utrecht orthopaedics: volumetric bioprinting, cartilage and bone | ✔ ([UU staff page](https://www.uu.nl/staff/RLevato)) | Bioprinting labs, Gluon in Brussels (near Bruges) | **Medium to low.** The best material match (biofabrication), but their work is medical. Ask early whether bisque as a substrate interests them. |
| **CPN** (Belgrade) | Andrej Savić (biological signal reading), Marko Mišić (computing) | ⚠ not verified | Makerspace | **Medium.** Fits the sensing and electronics side. Biology support unclear. |
| **ZKM** (Karlsruhe) | Prof Lennart Hilbert, KIT: nuclear information processing, DNA-based information processing systems | ✔ ([KIT group page](https://bip.ibcs.kit.edu/)) | Strong lab science (KIT); media-art museum | **Low to medium.** Interested in information processing in biology, but the work is molecular, not clay. A strong scientific background is expected. |
| **Kontejner** (Zagreb) | Oliver Vugrek, Ruđer Bošković Institute (genomics) | ⚠ not verified | — | **Medium.** Has a bio-art record (showed Spačal's *Cycles* 2015 and screened Sutela ✔ via [Kontejner](https://kontejner.org/en/projekti/touch-me-festival/-7-doticemo-nove-buducnosti/filmski-program-2/nimiia-cetii-2018-12--2)). Fit with the science unclear. |

**Recommendation:** Kersnikova if you want to grow the organisms yourself, and if you can show some wet-lab preparation before February 2027 (for example, a short course or a pilot with a local lab). LABoral if the networked-agents framing is the core and you can bring your own biology partner. You can choose only one host.

---

## Open questions to verify before drafting

**Call and host**
1. Confirm the six hosts, their scientists, and whether "LABoral" in the brief is the chosen host or only the call's organiser. Read the EHIN Guide for Applicants v2 (EHIN site, blocked in this session).
2. Is the residency near full-time? What share of the €25,000 is the fee? When are selections announced? (Email LABoral, Gluon or Kersnikova.)
3. Biosafety: which organisms and biosafety levels does each host allow? Can living vessels travel to exhibition venues?
4. Verify Andrej Savić, Marko Mišić and Oliver Vugrek, and their openness to clay.

**Science to read in full**
5. Dutto et al. 2024, methods: clay body, firing temperature, porosity, how long the organisms survived.
6. Winfield et al. 2013: how the voltage was read, and whether that set-up can be copied with an ESP32 and ADS1115.
7. Blatt et al. 2024 and Adamatzky's reply (if there is one): electrode practice that avoids artefacts.
8. Fukasawa et al. 2024: their 100-day recording set-up.
9. Bernal 1951, from the original, before quoting.
10. Confirm the DOIs marked ⚠: Ferris 2002, Hanczyc 2003, Nakagaki 2000, Babich and Stotzky 1977, phage PBS1 2000, Fukasawa 2020 *ISME J*, Miller and Bassler 2001, and the *Minerals* 2025 review.
11. Is there any published work on cyanobacteria on clay under natural sunlight UV?
12. Is there any published work on firing ceramics after biological colonisation, and what marks remain?

**Art to check**
13. Dates and sources for the ⚠ art entries (Steichen, Haacke, Beesley, Oxman, Brain, Yi, SymbioticA).
14. Search again for artworks with living colonies on fired clay. Try ceramics journals and Ars Electronica and STARTS archives, and ask Kersnikova.
15. The final outcome of *Living Architecture* (2016–2019).

**Project decisions (Ward's)**
16. First organism: cyanobacteria (recommended for safety and robustness), or fungi as well.
17. The written definition of "intelligence" for the proposal (suggested: graded capacity to sense, keep, process and respond).
18. Which proxies to log per node, and the rule that maps each proxy to sound and light, written down as method.
19. How the pre-residency pilot (November 2026 to January 2027) answers the "no wet-lab experience" gap.
20. Availability: periods when you cannot travel or work on site, through October 2028.

---

## Source list (confirmed in this session)

- Adams F. 2018. Cognition wars. *Stud. Hist. Phil. Sci. A* 68:20–30. https://philpapers.org/rec/ADACW
- Blatt MR et al. 2024. Does electrical activity in fungi function as a language? *Fungal Ecol.* 68:101326. https://doi.org/10.1016/j.funeco.2023.101326
- Cairns-Smith AG. 1982. *Genetic Takeover and the Mineral Origins of Life*. Cambridge UP.
- Dranseike D et al. 2025. Dual carbon sequestration with photosynthetic living materials. *Nat. Commun.* 16. https://doi.org/10.1038/s41467-025-58761-y
- Dunne J et al. 2012. First dairying in green Saharan Africa in the fifth millennium BC. *Nature* 486:390–394. https://doi.org/10.1038/nature11186
- Dutto A et al. 2024. Living porous ceramics for bacteria-regulated gas sensing and carbon capture. *Adv. Mater.* https://doi.org/10.1002/adma.202412555
- Ferris JP, Hill AR, Liu R, Orgel LE. 1996. Synthesis of long prebiotic oligomers on mineral surfaces. *Nature* 381:59–61. https://doi.org/10.1038/381059a0
- Fukasawa Y et al. 2024. Electrical integrity and week-long oscillation in fungal mycelia. *Sci. Rep.* https://doi.org/10.1038/s41598-024-66223-6
- Hanczyc MM, Fujikawa SM, Szostak JW. 2003. Experimental models of primitive cellular compartments. *Science* 302:618–622.
- Heveran CM et al. 2020. Biomineralization and successive regeneration of engineered living building materials. *Matter* 2:481–494.
- Howland MD et al. 2023. Exploring geomagnetic variations in ancient Mesopotamia. *PNAS* 120(52). https://doi.org/10.1073/pnas.2313361120
- Levin M. 2019. The computational boundary of a "self". *Front. Psychol.* 10:2688. https://doi.org/10.3389/fpsyg.2019.02688
- Lyon P. 2006. The biogenic approach to cognition. *Cogn. Process.* 7:11–29. https://doi.org/10.1007/s10339-005-0016-8
- Lyon P, Keijzer F, Arendt D, Levin M. 2021. Reframing cognition. *Phil. Trans. R. Soc. B* 376:20190750. https://doi.org/10.1098/rstb.2019.0750
- Olsson S, Hansson BS. 1995. Action potential-like activity found in fungal mycelia is sensitive to stimulation. *Naturwissenschaften* 82:30–31.
- Prindle A et al. 2015. Ion channels enable electrical communication in bacterial communities. *Nature* 527:59–63. https://doi.org/10.1038/nature15709
- Roberts N, Adamatzky A. 2022. Mining logical circuits in fungi. *Sci. Rep.* 12:15930. https://doi.org/10.1038/s41598-022-20080-3
- Schaffner M et al. 2017. 3D printing of bacteria into functional complex materials. *Sci. Adv.* 3:eaao6804. https://doi.org/10.1126/sciadv.aao6804
- Schmandt-Besserat D. 1992. *Before Writing*. University of Texas Press. Review: Zimansky 1993, https://urkesh.org/attach/Zimansky1993.pdf
- Simons A et al. 2020. Characterization of the microbiome associated with in situ earthen materials. *Environ. Microbiome* 15. https://doi.org/10.1186/s40793-019-0350-6
- Soltmann U, Pompe W, Böttcher H, Mertig M. 2004. Biocers. *J. Mater. Chem.* 14:2176–2188. https://doi.org/10.1039/b401724b
- Stotzky G, Rem LT. 1966. Influence of clay minerals on microorganisms. I. *Can. J. Microbiol.* 12:547–563. https://doi.org/10.1139/m66-078
- Tero A et al. 2010. Rules for biologically inspired adaptive network design. *Science* 327:439–442. https://doi.org/10.1126/science.1177894
- Winfield J, Greenman J, Huson D, Ieropoulos I. 2013. Comparing terracotta and earthenware for multiple functionalities in microbial fuel cells. *Bioprocess Biosyst. Eng.* 36:1913–1921. https://uwe-repository.worktribe.com/output/925221
