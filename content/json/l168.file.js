window.receiveLectureContent({
  id: "l168",
  module: "Neuro",
  metadata: {
    title: "Microbiology: Hemorrhagic Viral Infections",
    lecturer: "T. Slieman, Ph.D. (Session 168)",
    readingTime: "10-15 min",
    difficulty: "Advanced",
    tags: ["Microbiology", "Virology", "Ebola", "Dengue", "Yellow Fever", "Lassa"]
  },
  resources: {
    ankingResource: {
      primarySource: "SketchyMicro",
      chapter: "RNA Viruses",
      alternatives: [
        { resource: "First Aid", chapter: "Microbiology > Virology > RNA Viruses" },
        { resource: "Boards and Beyond", chapter: "Infectious Disease > Viral Hemorrhagic Fevers" }
      ]
    },
    anking: [
      { match: "Filoviridae (Ebola/Marburg)", resources: "AnKing Step 1 v11: #SketchyMicro::02_RNA_Viruses::05_Negative_Sense::04_Filovirus" },
      { match: "Flaviviridae (Dengue/Yellow Fever)", resources: "AnKing Step 1 v11: #SketchyMicro::02_RNA_Viruses::02_Positive_Sense::03_Flavivirus" },
      { match: "Arenaviridae (Lassa)", resources: "AnKing Step 1 v11: #SketchyMicro::02_RNA_Viruses::05_Negative_Sense::03_Arenavirus" }
    ]
  },
  summary: `
# Story Mode: The Storm of the Internal Bleeding

In the world of virology, there are common colds, and then there are "the storms." Hemorrhagic fever viruses are the absolute elite of human pathogens. They don't just target an organ; they dismantle the very integrity of the vascular system. When these viruses strike, the body’s own immune response—the massive release of cytokines—becomes a destructive force that causes blood vessels to leak, leading to internal bleeding, shock, and often death. This lecture covers the four main families of these "storm-bringers."

---

## 1. The Filoviridae: The Shepherd’s Crook (Ebola & Marburg)
If you were to look under an electron microscope, you would see long, filamentous viruses that often loop into the shape of a shepherd’s crook. These are the Filoviruses.

*   **The Reservoir**: The African fruit bat is the natural host. Humans are accidental hosts who usually get infected through contact with bat excreta or by handling infected primates.
*   **The Pathogenesis**: Ebola and Marburg target the "sentinels" of the immune system—monocytes, macrophages, and dendritic cells. They then hijack these cells to produce a **Cytokine Storm**. This storm destroys the endothelial lining of our blood vessels.
*   **The Result**: Massive vascular leakage, edema, **DIC** (Disseminated Intravascular Coagulation), and hypovolemic shock.
*   **The Fatality**: Mortality rates range from 50% to a staggering 90% (specifically the Zaire strain).
*   **Case Note**: In 2014, the world realized how small the planet had become when a patient traveled from West Africa to Texas, introducing Ebola to the United States and infecting several healthcare workers.

---

## 2. The Flaviviridae: The Yellow and the Painful
These viruses are primarily **Arboviruses**, meaning they are transmitted by "Arthropod-borne" vectors—specifically the **Aedes mosquito**.

### I. Yellow Fever (The Jaundiced Plague)
*   **The Story**: Historically famous for decimating populations during the building of the Panama Canal.
*   **The Presentation**: It presents with a classic triad: High fever, **Jaundice** (the "Yellow"), and **Hemorrhage** (often seen as "Black Vomit" or hematemesis due to digested blood in the stomach).
*   **The Pathology**: On liver biopsy, you will see **Councilman Bodies**—eosinophilic, apoptotic globules of hepatocytes.
*   **Prevention**: A highly effective live-attenuated vaccine exists, but remember: you cannot give live vaccines to infants < 6 months, pregnant women, or the immunocompromised.

### II. Dengue Virus (The Breakbone Fever)
*   **The Presentation**: Causes excruciating joint and muscle pain, making patients feel as if their bones are literally breaking.
*   **The Trap (ADE)**: There are 4 different serotypes. If you are infected with Serotype 1, you develop life-long immunity to Serotype 1. However, if you are later infected with Serotype 2, your old antibodies won't kill it. Instead, they bind to the new virus and actually **help** it enter your macrophages. This is called **Antibody-Dependent Enhancement (ADE)** and is why a second Dengue infection is much more likely to result in lethal **Dengue Hemorrhagic Fever**.

---

## 3. The Bunyaviridae: The Southwest Desert Mystery
Unlike the others, one of the most important Bunyaviruses in the US is **not** transmitted by a mosquito.

*   **Hantavirus (Sin Nombre Virus)**: 
    *   **The Vector**: The **Deer Mouse** (*Peromyscus*).
    *   **The Transmission**: Inhalation of aerosolized mouse urine or droppings (often when cleaning out old cabins or sheds).
    *   **The Weather Connection**: Outbreaks often follow a cycle of heavy rain (which increases the mouse food supply and population) followed by dryness (which causes the droppings to turn to dust and aerosolize).
    *   **The Syndrome**: **Hantavirus Pulmonary Syndrome (HPS)**. It starts with flu-like symptoms but rapidly progresses to severe, life-threatening pulmonary edema. 
    *   **Geography**: Famous in the **Four Corners** region (NM, AZ, CO, UT).

---

## 4. The Arenaviridae: The West African Rat (Lassa Fever)
*   **The Vector**: The **Multi-mammate rat**. 
*   **The Story**: Found in West Africa (Nigeria, Sierra Leone). 
*   **The Complication**: While 80% of cases are mild, Lassa fever has one very specific and common long-term consequence: **Deafness**. Roughly 1/3 of survivors lose their hearing to some degree.
*   **The Treatment**: **Ribavirin** can be effective if started early.

---

## 5. Segmented RNA Viruses: The 'BOAR' Mnemonic
Several of these families have **segmented** genomes, which allows them to swap genetic material (Antigenic Shift).
*   **B**unya (3 segments: Small, Medium, Large)
*   **O**rthomyxo (8 segments - Influenza)
*   **A**rena (2 segments - Lassa)
*   **R**eo (10-12 segments - Rotavirus)
`,
  questions: [
    {
      question: "A liver biopsy from a patient who died of a severe hemorrhagic fever reveals eosinophilic apoptotic bodies within hepatocytes. The patient's clinical course was marked by jaundice and 'black vomit.' Which of the following is the most likely causative agent?",
      options: [
        { text: "Ebola Virus" },
        { text: "Yellow Fever Virus", isCorrect: true },
        { text: "Dengue Virus" },
        { text: "Lassa Virus" }
      ],
      explanation: "Yellow Fever is characterized by jaundice (liver failure), hemorrhage (black vomit), and the presence of Councilman bodies (apoptotic hepatocytes) on biopsy."
    },
    {
      question: "A 28-year-old traveler returns from a mission trip to Nigeria. A week later, he develops fever and malaise. While he eventually recovers, he notices that he can no longer hear out of his left ear. Which of the following viruses is the most likely cause?",
      options: [
        { text: "Lassa Virus", isCorrect: true },
        { text: "Marburg Virus" },
        { text: "Rift Valley Fever Virus" },
        { text: "Crimean-Congo Hemorrhagic Fever" }
      ],
      explanation: "Sensorineural hearing loss is the most common permanent sequela of Lassa fever infection, occurring in approximately 1/3 of patients."
    },
    {
      question: "Which of the following describes the mechanism behind the increased severity of a second Dengue infection compared to the first?",
      options: [
        { text: "Viral reassortment in a segmented genome" },
        { text: "Direct destruction of the bone marrow" },
        { text: "Antibody-dependent enhancement", isCorrect: true },
        { text: "Exotoxin production" }
      ],
      explanation: "Antibody-dependent enhancement (ADE) occurs when non-neutralizing antibodies from a previous infection facilitate viral entry into host cells via Fc receptors, leading to higher viral loads and a more massive inflammatory response."
    },
    {
      question: "A hiker in New Mexico develops sudden-onset respiratory distress 2 weeks after cleaning out a rodent-infested storage shed. He is diagnosed with a viral hemorrhagic fever. Which of the following is the primary reservoir for this virus?",
      options: [
        { text: "Fruit bats" },
        { text: "Deer mouse", isCorrect: true },
        { text: "Multi-mammate rat" },
        { text: "Aedes mosquito" }
      ],
      explanation: "The description of Hantavirus Pulmonary Syndrome (HPS) in the US Southwest following exposure to rodent droppings points to the Deer Mouse (*Peromyscus*) as the reservoir."
    },
    {
      question: "A patient with suspected Ebola is in the ICU. Which of the following best describes the initial cellular targets of the virus that lead to the systemic 'Cytokine Storm'?",
      options: [
        { text: "Hepatocytes" },
        { text: "Erythrocytes" },
        { text: "Macrophages and Dendritic cells", isCorrect: true },
        { text: "Neurons" }
      ],
      explanation: "Filoviruses like Ebola primarily infect monocytes, macrophages, and dendritic cells. These cells then release a massive amount of pro-inflammatory cytokines, leading to systemic vascular leakage and shock."
    }
  ],
  flashcards: [
    { front: "What are **Councilman bodies**?", back: "Eosinophilic apoptotic hepatocytes seen in **Yellow Fever**.", tag: "Microbiology" },
    { front: "Name the **segmented** RNA viruses.", back: "**BOAR**: Bunyaviridae, Orthomyxoviridae, Arenaviridae, Reoviridae.", tag: "Microbiology" },
    { front: "What is the vector for **Dengue**?", back: "**Aedes aegypti** mosquito.", tag: "Microbiology" },
    { front: "Which virus causes **Hantavirus Pulmonary Syndrome**?", back: "**Sin Nombre Virus** (Bunyaviridae).", tag: "Microbiology" },
    { front: "What is the shape of **Ebola** under EM?", back: "Long, filamentous (**Shepherd's crook**).", tag: "Microbiology" }
  ],
  pearls: [
    { title: "The ADE Trap", content: "Dengue is the classic example of how 'partial immunity' can actually be more dangerous than no immunity at all." },
    { title: "Segmented Math", back: "Bunya has 3 segments; Arena has 2. This is high-yield for board exams." },
    { title: "Ribavirin and Lassa", content: "Ribavirin is the go-to antiviral for Lassa fever, but it is not effective for Filoviruses like Ebola." },
    { title: "Yellow Fever Vaccine", content: "It is a live vaccine; always ask about egg allergies, as it is grown in chick embryos." }
  ]
});
