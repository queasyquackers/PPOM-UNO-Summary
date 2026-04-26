const l168 = {
    id: "l168",
    title: "Lecture 168: Microbiology: Hemorrhagic Viral Infections",
    author: "T. Slieman, Ph.D.",
    narrative: "This lecture provides a systematic overview of the four primary viral families responsible for Viral Hemorrhagic Fevers (VHF). Dr. Slieman explores the zoonotic reservoirs and arthropod vectors that facilitate the jump of these highly virulent pathogens to humans. The discussion centers on the catastrophic impact these viruses have on the endovascular system, leading to multisystem failure, widespread hemorrhage, and hypovolemic shock. Key clinical distinctions, such as the fever-pulse paradox in Yellow Fever and the immunopathologic enhancement in Dengue, are emphasized for board review.",
    sections: [
        {
            title: "1. Characteristics of VHF Viruses",
            content: "Most viruses that cause hemorrhagic fever share three key traits: they are **Single-Stranded RNA**, **Enveloped**, and **Zoonotic** (humans are accidental hosts). They predominantly belong to four families:\n\n- **Arenaviridae:** Segmented, negative-sense RNA. Includes **Lassa** (West Africa), **Junin** (Argentina), and **Machupo** (Bolivia) viruses.\n- **Bunyaviridae:** Segmented, negative-sense RNA. Includes **Hantavirus**, **Rift Valley Fever**, and **Crimean-Congo Hemorrhagic Fever** (Nairo virus).\n- **Filoviridae:** Non-segmented, negative-sense RNA. Includes **Ebola** and **Marburg**.\n- **Flaviviridae:** Positive-sense RNA. Includes **Dengue** and **Yellow Fever**."
        },
        {
            title: "2. Arenaviridae & Bunyaviridae (Rodent-Borne)",
            content: "- **Lassa Fever (Arenavirus):** Endemic to West Africa. Transmitted by the **Mastomys (Multi-mammate) rat** via contaminated food or urine. Clinical Hallmark: **Deafness** (approx. 1/3 of survivors). Treatment involves **Ribavirin**.\n- **Hantavirus (Bunyavirus):** Global distribution. Transmitted by **rodent aerosols** (feces/urine). \n    - **HFRS (Hemorrhagic Fever with Renal Syndrome):** Characterized by high fever, **conjunctival hemorrhage (bloodshot eyes)**, and acute kidney failure. \n    - **HPS (Hantavirus Pulmonary Syndrome):** A high-mortality respiratory form characterized by non-cardiogenic pulmonary edema."
        },
        {
            title: "3. Flaviviridae (Mosquito-Borne)",
            content: "- **Dengue Fever:** Transmitted by the **Aedes aegypti** mosquito. \n    - **Symptoms:** Rash, retro-orbital pain, and severe myalgias/arthralgias known as **'Break-bone fever.'** \n    - **Dengue Hemorrhagic Fever:** A deadly complication often involving **Antibody-Dependent Enhancement (ADE)**, where a secondary infection with a different serotype leads to severe vascular leakage.\n- **Yellow Fever:** Also transmitted by Aedes. \n    - **Transmission Cycles:** \n        - **Sylvatic (Jungle):** Monkeys -> Mosquito -> Human.\n        - **Urban:** Human -> Mosquito -> Human (introduced by travelers).\n        - **Intermediate:** Semi-domestic mosquitoes infect both monkeys and humans.\n    - **Phases:** Early fever/headache followed by a toxic phase (jaundice, **black vomitus**). \n    - **Key Findings:** **Faget sign** (high fever with a paradoxically slow pulse) and **Councilman bodies** (eosinophilic apoptotic globules on liver biopsy).\n    - **Prevention:** Live attenuated vaccine (avoid in babies <6mo, pregnant, or immunocompromised)."
        },
        {
            title: "4. Filoviridae (Fruit Bat / Primate-Borne)",
            content: "Includes **Ebola** and **Marburg**—among the most virulent human pathogens (fatality rates up to 90%).\n\n- **Pathogenesis:** The virus replicates in macrophages, monocytes, and endothelial cells, triggering a massive **cytokine storm** and subsequent **DIC (Disseminated Intravascular Coagulation)**.
- **Transmission Risk:** Spread through direct contact with infected blood, bodily fluids, and **fomites**. Handling **dead bodies** during burial rituals is a major source of community outbreaks.
- **Clinical Signs:** Sudden onset of flu-like symptoms progressing to massive internal/external hemorrhage and hypovolemic shock. There is **no carrier state**—the virus either kills the host or is cleared."
        }
    ],
    clinical_pearls: [
        {
            title: "The Four Families Mnemonic",
            content: "Think of the 'B-A-F-F' families (Bunia, Arena, Flavi, Filo). If it causes a fever AND makes you bleed, chances are it's an enveloped RNA virus from this group."
        },
        {
            title: "Yellow Fever Liver Logic",
            content: "If a board question shows a traveler from West Africa with jaundice and **Councilman bodies**, the answer is Yellow Fever. Remember: Councilman bodies are also seen in **Hepatitis A**, so check the travel history!"
        },
        {
            title: "Dengue's ADE Danger",
            content: "High-Yield board logic: A patient has a mild fever in Thailand, feels better, then returns 2 years later and gets a life-threatening hemorrhagic disease. This is **Antibody-Dependent Enhancement**. Their old antibodies are helping the new virus enter cells instead of neutralizing it."
        },
        {
            title: "The Hanta Mouse",
            content: "Look for the **white-footed mouse** (Peromyscus leucopus) in the Four Corners region of the US. If a patient gets sick after sweeping a dusty cabin, think **Hantavirus Pulmonary Syndrome**."
        }
    ],
    anking_resources: [
        {
            category: "Arenaviruses & Bunyaviruses",
            resources: [
                {
                    name: "SketchyMicro",
                    path: "03. Viruses -> 02. RNA (-) Sense -> 07. Arenavirus (Lassa)",
                    description: "Visualization of the rats and the deafness ear-trumpets."
                },
                {
                    name: "SketchyMicro",
                    path: "03. Viruses -> 02. RNA (-) Sense -> 08. Bunyavirus (Hantavirus)",
                    description: "The 'Paul Bunyan' sketch with the dusty floor and the mice."
                }
            ]
        },
        {
            category: "Flaviviruses",
            resources: [
                {
                    name: "SketchyMicro",
                    path: "03. Viruses -> 01. RNA (+) Sense -> 13. Flaviviridae overview",
                    description: "Covers Dengue and Yellow Fever's mosquitos and clinical markers."
                },
                {
                    name: "Physeo",
                    path: "06. Micro -> 05. Viruses -> 17. Yellow Fever Virus",
                    description: "Review of the Faget sign and the live vaccine."
                }
            ]
        },
        {
            category: "Filoviruses",
            resources: [
                {
                    name: "SketchyMicro",
                    path: "03. Viruses -> 02. RNA (-) Sense -> 06. Ebolavirus, Marburgvirus (Filoviridae)",
                    description: "The football game visual for the massive bleeding and fruit bats."
                },
                {
                    name: "First Aid",
                    path: "03. Microbiology -> 05. Virology -> 28. Ebola & Marburg Virus",
                    description: "Summary of the Filovirus structure and high fatality rate."
                }
            ]
        }
    ]
};

export default l168;
