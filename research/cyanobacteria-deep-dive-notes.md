# Cyanobacteria and clay: deep-dive working notes

*Working notes, not a report. Written 4 November 2026 for Ward. Builds on `research/ehin-2026-n06-research-base.md` (sections 8 and 12a to 12d) and does not repeat it.*

**Tags:** [E] established · [L] lab-scale · [H] hypothesis or idea. ✔ = details matched across search results. ⚠ = one source, a press release, Wikipedia or a self-description, or not checked.

**Network note:** full pages could not be opened in this session. Blocked domains: `en.wikipedia.org`, `nl.wikipedia.org`, `pmc.ncbi.nlm.nih.gov`, `repository.library.noaa.gov`, `cires.colorado.edu`, `ucmp.berkeley.edu`, `sydneyglassman.wordpress.com`. Everything below comes from search results and abstracts. Allowing these domains would make a second pass much stronger.

---

## 1. Deep history: what is solid, what is shaky

- **The "at least 2.1 billion years" claim** most likely rests on akinete-like fossils (*Archaeoellipsoides*) from the **Franceville Group, Gabon, about 2.1 billion years old**. These are interpreted as resting cells of heterocyst-forming cyanobacteria (like modern *Anabaena*). The identification goes back to Amard and Bertrand-Sarfati (1997) and is used in Tomitani et al. (*PNAS* 2006) ✔. **Contested:** reviews call these fossils "poorly preserved putative" akinetes, and some Francevillian structures may be mineral artefacts ✔ ([Schirrmeister et al., *Palaeontology* 2015, doi:10.1111/pala.12178](https://onlinelibrary.wiley.com/doi/full/10.1111/pala.12178)).
- **Firmer ground:** the **Gunflint chert** on Lake Superior, about **1.88 billion years old**. Barghoorn and Tyler (*Science* 1965) described filamentous microfossils there, and the discovery pushed back the known age of photosynthetic life by over a billion years at the time ✔ (via search). **Suggestion:** in the proposal say "roughly two billion years". Gunflint (1.88 Ga) is the safer anchor; Franceville (2.1 Ga) is possible but debated.
- **Clay and oxygen (Kennedy et al. 2006, the "clay mineral factory").** Tosca et al. (*Geochim. Cosmochim. Acta* 74:1579–1592, 2010) analysed shales from the late Archean to the Cambrian. They concluded that clay mineralogy alone cannot explain a late Precambrian oxygen rise through organic carbon burial ✔. **So treat the idea as an attractive but contested hypothesis [H].**
- **Reflection:** the history is strongest when told as layers of records, with the uncertainty included. "Some of the oldest traces of life are argued over to this day" is itself a good Dirty Lab line.

## 2. Cyanobacteria on clay: raw, bisque, fired

- **A direct method precedent:** Gazulla et al. (*J. Eur. Ceram. Soc.* 31:2753–2761, 2011, doi:10.1016/j.jeurceramsoc.2011.07.023) changed the peak firing temperature of a red ceramic body and found that **bioreceptivity rose with porosity (water absorption)**. Rougher surfaces were colonised more. Even **glazed tiles were colonised after long exposure**. They tested with the cyanobacterium *Oscillatoria* ✔ [L]. This is almost exactly Ward's pilot question, already done for roof tiles.
- A 2024 study burned organic waste out of ceramics during firing to create tuned pores for colonisation ⚠ ([MDPI *Sustainability*](https://mdpi.com/2071-1050/16/8/3208)).
- A review of architectural ceramics (Coutinho et al. 2015) also names **porosity and roughness** as the main factors ⚠.
- **Reflection [H]:** what grows will likely follow water. Raw clay holds water and has the richest surface chemistry but slumps and slakes. Low bisque is porous and stable, so it is probably the sweet spot. High-fired or vitrified clay stays dry and is colonised slowly, mainly in cracks.

## 3. What cheap sensors can really pick up

- **Chlorophyll fluorescence, DIY:** a blue LED excites chlorophyll and a photodiode behind a red filter reads the glow, at 90° to the light. Build cost was about US$150 with an Arduino, cross-calibrated against a commercial sensor ✔ ([Leeuw, Boss and Wright, *Sensors* 2013](https://www.mdpi.com/1424-8220/13/6/7872/html)). There is also an open-source fast-rise version, **Open-JIP** ✔ ([GitHub](https://github.com/iamihgam/Open-JIP)). [L] **This is probably the most honest "is it alive and active?" signal for a vessel.** Ward's spectral sensor may already do part of it.
- **The day-night swing:** in natural microbial mats, oxygen goes from **zero at night to supersaturation by day**, and pH from about **7 to 9.5** ✔ (*ISME J* microsensor studies of hot-spring mats) [L]. In a thin film on a vessel the swing will be much smaller and harder to see [H]. A closed jar with a CO₂ sensor (for example SCD4x) is the cheapest way to try.
- **Electricity from the colony (the big surprise):** Bombelli, Howe and colleagues (Cambridge) ran an **Arm Cortex M0+ microprocessor on the electricity of non-toxic *Synechocystis*** in an AA-sized cell for **more than six months** in ordinary home light (*Energy Environ. Sci.* 15:2529–2536, 2022), and later reported a full year ✔ ([Cambridge news](https://www.cam.ac.uk/research/news/scientists-create-reliable-biological-photovoltaic-cell-using-algae)). It kept running at night [L].
  - **Caveat [E]:** the power is tiny (microwatts). An ESP32 needs far more, especially for Wi-Fi. So the colony cannot run a full node, but it could run a blinking LED, a tiny ultra-low-power chip, or simply be **measured as a voltage**.
  - **Idea [H]:** combine this with the Bristol terracotta fuel cells, where fired clay is the separator. The vessel wall becomes part of the cell, and the voltage is a direct electrical trace of the colony.
- **Pitfalls [E]:** condensation on optics, drift in cheap CO₂ and pH sensors, temperature effects on everything, electrode corrosion and drift (see the Blatt et al. 2024 fungal critique in the main file), and light leaks into fluorescence readings. Log temperature and humidity next to every signal.

## 4. Rhythm and "intelligence" without overclaiming

- **A clock in a test tube:** three proteins (KaiA, KaiB, KaiC) plus ATP keep a roughly 24-hour rhythm of KaiC phosphorylation, without cells and without genes being read ✔ (Nakajima et al., *Science* 2005, Kondo lab). [L] **This is a precise, non-mystical example of anticipation:** the colony "expects" dawn.
- **What could be the beat [H]:**
  - **Day and night:** fluorescence, CO₂ or voltage rising and falling. This is the most robust option.
  - **Free-running rhythm:** keep a vessel in constant light. If a 24-hour rhythm persists, that is the clock and not just the lamp. This is a real, simple test.
  - **Slower layers:** colour change and spreading over weeks, which the pattern reader can capture.
- **Framing to use:** "keeps time", "responds", "remembers yesterday's light". Avoid "thinks", "speaks", "decides" [H, editorial].

## 5. Local presence

**Gijón (right next to the host)**
- A **University of Oviedo report** for Gijón city council found **toxin-producing cyanobacteria and microalgae in the Río Piles**, with toxins released into the water in some late-summer samples. Nutrient-rich water favours them ⚠ ([migijon.com](https://migijon.com/informe-piles-hay-toxinas-que-pueden-originar-problemas-de-salud-y-medioambientales)).
  - **Field site? [H]** It is a real, local, contested ecosystem, but **toxic: no direct handling without the biology partner**.
  - Check whether the Piles runs near LABoral ⚠ (not confirmed).
- The **Jardín Botánico Atlántico** is directly opposite LABoral ✔ ([Lonely Planet](https://www.lonelyplanet.com/points-of-interest/jardin-botanico-atlantico/1081181)). It is a possible partner for the field practitioner (a botanist or gardener), and it has wet woodland (the Peñafrancia alder wood) where soil crusts and films could be sampled [H].

**Belgium**
- **BCCM/ULC, University of Liège:** a public Belgian collection of cyanobacteria, 280 to over 500 strains, many polar. It is ISO-certified, distributes strains, and its contact is bccm.ulc@uliege.be ✔ (Annick Wilmotte; [OBIS](https://products.obis.org/group/about/bccmulc-culture-collection-at-the-university-of-liege)). **A safe, documented source for a reference strain, and a possible Belgian science contact.** Ask whether they supply artists.
- **VMM:** publishes a "Blauwalgen – meldingen" dataset (2025) and runs a reporting chain for scum on water ✔ ([metadata](https://metadata.vlaanderen.be/srv/api/records/d40c5ad0-0885-42f8-b466-30fdf101dd8d)). Example: in summer 2025 water recreation at the Donkmeer (Berlare) was banned because of blue-green algae ✔ ([VRT](https://www.vrt.be/vrtnws/nl/2025/07/02/blauwalg-donkmeer-berlare-waterrecreatie-verboden/)). **The data could become a "local voice" map [H].**
- **Climate link:** "Blooms like it hot" (Paerl and Huisman, *Science* 320:57–58, 2008) ✔. Jef Huisman (Amsterdam) is the Dutch bloom expert. The DOI was not checked.

## 6. Safety and practicality

- **Dry and revive (transport idea) [H, based on E]:** *Nostoc commune* was revived from a herbarium specimen **87 years** old (Lipman 1941), and later reportedly 107 years (Cameron 1962, second-hand) ✔. More recent work shows dry *Nostoc* stored at room temperature for 8 years barely recovered, while samples frozen for 15 years did ✔ (*J. Gen. Appl. Microbiol.* 2022).
  - **So:** dry the clay and soil samples at each site, ship or carry them dry, and rehydrate at LABoral. Dry, dormant samples are lighter, safer and less likely to cross-contaminate. Best done quickly or kept cold.
- **Toxins:** bloom water (*Microcystis* and others) is the risky material. Soil crusts and surface films are generally safer, but not guaranteed [E]. Use gloves, no contact with eyes or mouth, and ask the biology partner.
- **Cross-contamination:** a lid with a 0.2 µm vented filter (as on lab culture flasks), separate tools and water per site, and one sealed control [E for lab practice; ⚠ how well it works for porous vessels].
- **Firing a colonised vessel:** organic matter burns out (roughly 300–500 °C). Biominerals such as carbonate break down at higher temperatures. Iron deposits would remain as colour [E for chemistry, H for visible marks]. **Still untested; it is the key "Fire" experiment.**

## 7. Art, design and culture

**New artists and projects (beyond the main file)**
- **The Biocrust Project:** artist Jorge Rojas with USGS scientist Sasha Reed. A 3D model of biocrust, film and audio, at the Utah Museum of Contemporary Art (2024). It grew from the Canyonlands Research Center's first artist residency ✔ ([Southwest Contemporary](https://southwestcontemporary.com/the-deserts-living-skin/)). **The closest art precedent on soil crusts.**
- **Kristina Õllek:** *Filtering With Cyanobacteria, Double Binds & Other Blooms* (ISSP gallery, Riga), with sea salt, cyanobacteria and bioplastic ✔ ([Echo Gone Wrong](https://echogonewrong.com/photo-reportage-from-the-exhibition-filtering-with-cyanobacteria-double-binds-other-blooms-by-kristina-ollek-at-issp-gallery/)).
- **Erin Espelie:** *REFRESH* (Denver Museum of Nature and Science, 2022), time-lapse films of lake microbes made in a CU Boulder lab ✔.
- **Low Countries scene:** "Moulding Life: Artists Craft with Fungi and Bacteria" (*The Low Countries*, March 2024) features Lizan Freijsen (1960–2024) and Isabel Fredeus ✔ ([article](https://www.the-low-countries.com/article/moulding-life/)).
- **Stromatolite artworks: none found.** That is a possible opening [H].

**Cultural histories**
- ***Nostoc* folklore:** "star jelly", "fallen star", "troll's butter", "witches' butter", "spit of the moon". People believed it fell from the sky after rain, or from meteors. Paracelsus reportedly called it excrement "blown from the nostrils of some rheumatick planet" ✔ (via [Irish Times](https://www.irishtimes.com/news/environment/mystery-of-seasonal-moisture-blobs-of-goo-also-known-as-star-jelly-1.3314103); "witches' butter" is also the name of a fungus, *Tremella*).
  - **A gift for Stardirt [H]:** a cyanobacterium people thought was stardust.
- **Dihé at Lake Chad:** Kanembu women harvest spirulina, filter and sun-dry it on the sand, and cut it into cakes, passing the knowledge from mother to daughter. A 2007 FAO project helped about 500 women market it ✔ ([UN News, 2010](https://news.un.org/en/story/2010/07/346222-nutrient-rich-algae-can-boost-chadian-womens-incomes-and-tackle-malnutrition-un)).
  - **Reflection:** this is a "field practitioner" tradition of knowing cyanobacteria by hand.
  - **Not found:** the Aztec *tecuitlatl* (Lake Texcoco) history.

## 8. Gaps and openings

- **Already done:** cyanobacteria as sound or instrument (Algae Chorus, Photosynthesizer); living printed structures (Picoplanktonics, ecoLogicStudio); fired clay colonised for ecology (SUBMERGED, Archireef); bioreceptivity versus firing temperature (Gazulla 2011); a microprocessor powered by cyanobacteria (Bombelli 2022); biocrust in a museum (Biocrust Project).
- **Still looks open [H, broad search only]:**
  - local wild clays, each carrying its own living community, compared in identical vessels;
  - the colony's own signals (fluorescence, CO₂, voltage) voiced by a mesh;
  - the colony as a partial power source or electrical trace through the fired clay wall;
  - firing as a deliberate end that turns the living record into a mineral one;
  - stromatolite and "star jelly" stories as a frame.

---

## (a) Five most surprising or useful findings
1. **Cyanobacteria have already powered a microprocessor for over six months** (Bombelli et al. 2022). It is only microwatts, but "the colony keeps a small light on" or "the vessel's voltage is the colony" is a strong, honest image.
2. **The firing-temperature question has a published method** (Gazulla et al. 2011): porosity drives colonisation, and even glazed tiles get colonised in the end. Ward can copy the method in his own studio.
3. ***Nostoc* was once believed to be fallen stars** ("star jelly"), and dried *Nostoc* has been revived after 87 years. One story links Stardirt, and dry-and-revive solves transport.
4. **A University of Oviedo report found toxin-producing cyanobacteria in Gijón's Río Piles**, and the **Jardín Botánico Atlántico** sits opposite LABoral. A local field context and a possible practitioner are right at the host.
5. **The "2.1 billion years" claim is debated** (Franceville). Gunflint (1.88 Ga) is the safer anchor. Kennedy's clay–oxygen idea was challenged by Tosca et al. (2010).

## (b) Ideas and experiments for the winter pilot in Bruges
1. **Firing ladder (after Gazulla):** one Flemish clay left raw plus fired at three temperatures. Measure water absorption, inoculate all with the same garden soil or pot scraping, and photograph weekly under the same light. Question: where does green appear first?
2. **DIY fluorometer node:** a blue LED, a photodiode with a red filter and an ESP32 on the vessel surface (after Leeuw et al. 2013). Log the glow daily. The first "is it alive?" signal.
3. **Find the beat:** one vessel in a closed jar with a CO₂ sensor and a 12-hour-on, 12-hour-off grow light. Then switch to constant light: does a rhythm persist (the clock)?
4. **Clay-wall voltage:** a small terracotta cup as a separator between two electrodes, with a cyanobacterial film on the lit side, read with an ADS1115. Expect microvolts and drift, but watch for a day-night pattern.
5. **Dry-and-revive test:** dry a soil crust or *Nostoc* sample now, rehydrate it after two, four and eight weeks, and see whether it greens. This tests the transport plan for Asturias.

## (c) Open questions and unverified points
- The primary source behind Wikipedia's 2.1 Ga claim (probably Tomitani et al. 2006 and Amard and Bertrand-Sarfati 1997). Read Schirrmeister et al. 2015 in full.
- Full text of Gazulla et al. 2011: the exact temperatures and porosities.
- How much power a small cyanobacterial cell gives, and the lowest-power way to show it (LED, e-paper, a separate tiny chip).
- Whether BCCM/ULC supplies non-academic users, and the biosafety rules for wild samples in Spain.
- Whether the Río Piles is near LABoral; who wrote the Oviedo report.
- What visibly remains after firing a colonised vessel.
- Whether dry-and-revive works for mixed soil communities, not just *Nostoc*.
- DOIs not checked: Paerl and Huisman 2008, Nakajima et al. 2005, Barghoorn and Tyler 1965.

## (d) People and projects worth contacting
- **BCCM/ULC, Liège** (Annick Wilmotte; bccm.ulc@uliege.be): reference strains, Belgian science partner.
- **Paolo Bombelli and Christopher Howe** (Cambridge): biophotovoltaics.
- **Jardín Botánico Atlántico** (opposite LABoral): field site and practitioner.
- **University of Oviedo**, the team behind the Río Piles report: local cyanobacteria expertise.
- **Gazulla and colleagues** (Castellón ceramics research, Spain): ceramic bioreceptivity. A Spanish partner, which fits LABoral.
- **Coutinho and Miller** (Évora, Lisbon): cyanobacteria on azulejos.
- **Jef Huisman** (Amsterdam): blooms and climate.
- Artists: **Annemarie Maes** (already noted), **Jorge Rojas** (Biocrust Project), **Kristina Õllek**, **Yan Shao**, **Lena Kuzmich and Tony Wagner**.

---

## Addendum: biophotovoltaics (living electricity) in more depth

- **Core paper:** Bombelli P. et al. 2022. Powering a microprocessor by photosynthesis. *Energy Environ. Sci.* 15:2529–2536. [doi:10.1039/D2EE00233G](https://doi.org/10.1039/D2EE00233G) ✔. *Synechocystis* on an **aluminium anode** in an AA-sized cell ran an Arm Cortex M0+ for over six months in ambient home light ✔ [L]. The exact power figures and duty cycle were not found in abstracts ⚠; read the full text (open versions via the Southampton and NTNU repositories).
- **Printed cells:** Sawa M. et al. 2017. Electricity generation from digitally printed cyanobacteria. *Nat. Commun.* 8:1327. [doi:10.1038/s41467-017-01084-4](https://doi.org/10.1038/s41467-017-01084-4) ✔. Cyanobacteria were inkjet-printed on carbon nanotube ink on paper, with a gel instead of liquid. They produced current in light and dark for over 100 hours, enough for a small clock or LED ✔ (press figures) [L].
- **Review:** McCormick A.J. et al. 2015. Biophotovoltaics: oxygenic photosynthetic organisms in the world of bioelectrochemical systems. *Energy Environ. Sci.* 8:1092–1109. [doi:10.1039/C4EE03875D](https://doi.org/10.1039/C4EE03875D) ✔ (open access). Conclusion: outputs are far too low for commercial power [E].
- **Design and art collaborations with Bombelli (2011–2016):**
  - *Moss Table*, with Alex Driver and Carlos Peralta (University of Brighton). The moss current drives an animation; Beyond Bauhaus award ✔ ([Cambridge](https://www.bioc.cam.ac.uk/news/moss-table-wins-international-award)).
  - *Moss FM*, Fabienne Felder with Bombelli and Ross Dennis. Ten moss cells trickle-charge a battery that plays a radio for about one to a few minutes ✔ ([Dezeen](https://www.dezeen.com/2014/02/10/moss-biological-solar-panels-radio/)).
  - *Moss Voltaics*, Elena Mitrofanova (IaaC), a green façade concept shown at Ars Electronica 2016 ✔ ([archive](https://webarchive.ars.electronica.art/festival/2016/radicalatoms/en/index.html%3Fp=3580.html)).
  - **Reflection:** Bombelli has a long record of working with designers, so he is a realistic contact.
- **Gap:** no biophotovoltaic cell with a **ceramic, terracotta or clay** separator or body was found. Bristol's terracotta *microbial* fuel cells (Winfield 2013) are the nearest. **Opening [H]:** a fired-clay vessel as the body of a cyanobacterial biophotovoltaic cell, where the vessel's voltage is the colony's trace.
- **Honest framing:** the colony can light a tiny LED, run an ultra-low-power chip, or charge a capacitor that "speaks" now and then (the Moss FM trick). It cannot run an ESP32 with Wi-Fi.

---

## Addendum 2: terracotta + fuel cell + cyanobacteria (the vessel as a living sensor)

*Ward, 4 November 2026: "It's okay if we don't have enough energy to power the microcontroller. We need a signal." So the goal is a **readable living signal**, measured by a normally powered node. The energy itself is not the goal.*

### How a microbial fuel cell works (plain version) [E]
- **Anode side (no oxygen):** bacteria eat organic matter and release electrons onto a conductive material (usually carbon cloth or "carbon veil").
- **Cathode side (with oxygen):** electrons arrive through a wire and combine with oxygen. The flow through the wire is the current you measure.
- **Separator:** something must let charged particles (ions) pass between the two sides while keeping the liquids apart. Normally this is an expensive plastic membrane.
- **Bristol's trick:** **fired clay is the separator.** Terracotta has pores of roughly 60–500 nm that let ions through. A terracotta cylinder is both body and membrane: carbon veil on one side as the anode, carbon veil with activated carbon on the other side as the cathode, open to air ✔ (Gajda et al. 2015; Winfield et al. 2013).
- **Firing and porosity matter:** denser terracotta gave a higher open-circuit voltage, and more porous earthenware gave more power ✔ (Winfield 2013). That is the same porosity question as in the firing ladder.
- **Scale and realism:** in Pee Power urinals, individual ceramic cells gave about **1–2 mW** each, and 288 cells were stacked on one campus urinal ✔ (UWE, 2016 field-trial paper; the developers' own figures). Ceramic cells fed with urine reached open-circuit voltages of about **0.5–0.65 V** ✔. Expect much less from a small soil-fed vessel [H].

### Where cyanobacteria come in (three ways)
1. **Photosynthetic cathode (the "algal lagoon" effect)** [L]: algae or cyanobacteria growing at the cathode **supply the oxygen** the cathode needs. Bristol grew these biofilms from **pond water**, with no added nutrients or pH control, on a 14-hour light and 10-hour dark cycle. Cathodes even became living by chance during long runs ✔ (Gajda et al., *Int. J. Hydrogen Energy* 39:21857–21863, 2014, doi:10.1016/j.ijhydene.2014.05.173). **The signal should then follow day and night:** more light, more oxygen, higher voltage [H, to test].
2. **Biophotovoltaic (cyanobacteria at the anode)** [L]: the cyanobacteria themselves release electrons during photosynthesis and in the dark (Bombelli 2022; Sawa 2017). The signal follows light more directly.
3. **Plant or moss version** [L]: living roots or moss feed soil bacteria (Plant-e, Wageningen; about 0.4 W per m² of plants reported ✔, company figures; Moss FM with Bombelli). A moss-covered vessel is a multi-species variant.

### Three vessel designs [all H, to prototype]
- **A. "Breathing wall" (recommended first test):** inside the vessel, wet local clay and soil with some organic matter (it goes oxygen-free) and a carbon-veil anode. **The terracotta wall is the separator.** Outside, a carbon-veil cathode is wrapped around part of the wall, exposed to air and light. Let cyanobacteria and algae colonise the outer cathode, or seed it with pond or soil water. Expected signal: a slow rise over days (the anode community establishing), plus a **day-night rhythm** once the outer film is photosynthetic, plus jumps when watered.
- **B. "Light cell":** a cyanobacterial film on a conductive surface (carbon veil, or aluminium after Bombelli) inside a semi-closed vessel, with a counter-electrode. Simpler chemistry, more direct light response, but less "soil".
- **C. "Black pot electrode":** an idea from Asturian black pottery (Llamas del Mouro), fired in heavy reduction and smoke, so carbon fills the pores. **Could a reduction-fired, carbon-blackened surface act as a weak electrode itself?** Pure speculation; not found in literature. Very on-concept (local tradition plus Stardirt saggar firing), and a cheap test: measure surface resistance of smoke-fired versus oxidised shards.

### Reading the signal with the ESP32 node [E for the electronics]
- Measure the voltage across a **load resistor** (try 1 kΩ, 10 kΩ and 100 kΩ) with an **ADS1115** 16-bit ADC. Current = voltage ÷ resistance. Log once a minute.
- Log **temperature, light and humidity next to it**, so biology can be told apart from physics (temperature and drying change voltage too).
- **Controls:** one identical vessel left un-inoculated, or kept dark under a black cloth. If the day-night rhythm appears only in the living, lit vessel, it is the colony's trace.
- Cheap materials: carbon veil or carbon cloth, stainless or titanium wire for connections (copper corrodes), activated carbon paste for the cathode ⚠ (check Bristol's recipes).
- **Optional poetic layer (later):** the Moss FM trick. A capacitor charges slowly from the cell, and a comparator triggers a sound event when it is full, so "the vessel speaks only when its life has gathered enough energy". Not needed for the signal.

### What makes this Ward's territory [H]
- Bristol: terracotta as membrane, for power and sanitation. Cambridge: cyanobacteria as power. **Nobody found so far uses a fired-clay vessel made from local clay, with that site's own community, as a living sensor whose voltage is voiced as sound.**
- It joins all three steps: **Dig** (the clay and the community are local), **Listen** (the voltage is the voice), **Fire** (porosity, and even reduction carbon, are set by how the vessel is fired).

### Contacts and sources
- Bristol BioEnergy Centre (Ioannis Ieropoulos, Iwona Gajda), UWE: terracotta MFCs, algal cathodes, Pee Power ([UWE Glastonbury news](https://www.uwe.ac.uk/news/uwe-bristol-scientists-generate-record-amount-of-electricity-from-urine-at-glastonbury-festival-2019); [UKRI](https://www.ukri.org/who-we-are/how-we-are-doing/research-outcomes-and-impact/epsrc/spin-out-turns-urine-into-electricity)).
- Gajda et al. 2014, "Algal 'lagoon' effect for oxygenating MFC cathodes" ([UWE repository](https://uwe-repository.worktribe.com/output/806455/algal-lagoon-effect-for-oxygenating-mfc-cathodes)).
- Plant-e (Wageningen, NL; David Strik, Marjolein Helder): plant microbial fuel cells ([WUR](https://wur.nl/en/show/Plants-create-energy.htm)).
- Paolo Bombelli (Cambridge): biophotovoltaics and design collaborations (see Addendum 1).
