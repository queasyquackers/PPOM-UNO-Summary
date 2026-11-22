# Plan - author E (renal pathology correlates + glomerular matrix)

Name-token rule (qa.py): every token >3 chars of an item's name (minus GENERIC) is banned
on its own cards. Watch: FSGS (focal, segmental), MCD (minimal, change), DDD (dense,
deposit), anti-GBM (anti), malignant HTN (hypertension), typical HUS (hemolytic, uremic),
TS (sclerosis), bladder items (bladder, urothelial), sickle cell (sickle).

## Glomerular matrix (`glomerular`)

| Item | Nearest differential | Separating feature |
| --- | --- | --- |
| Minimal change disease | FSGS; lupus class I (normal LM) | LM normal + fat stain; IF negative; EM effacement, no deposits; child, steroid-responsive |
| Focal segmental glomerulosclerosis | Collapsing FSGS; MCD | sclerosis + hyalinosis in part of some glomeruli; IgM/C3 only in scars |
| Collapsing FSGS (HIV-associated) | FSGS | retracted tuft, closed loops, prominent overlying epithelial cells; HIV, worse prognosis |
| Membranous nephropathy | Lupus class V; diabetic (thick GBM) | thick GBM, no hypercellularity; granular IgG/C3; subepithelial + GBM projections; PLA2R |
| Diabetic nephropathy | Amyloid (mesangial expansion); membranous | PAS+ trichrome+ nodular mesangial matrix; arteriolar hyalinosis; IF nonspecific; homogeneous thick GBM |
| Renal AL amyloidosis | Diabetic | Congo red salmon, green under polarized light; lambda-restricted; 8-10 nm fibrils |
| MPGN type I | DDD; lupus III/IV (subendothelial) | IgG + C1q + C4 + C3; subendothelial + mesangial; hepatitis C / cryoglobulins |
| Dense deposit disease (MPGN II) | MPGN I; PSGN (low C3) | C3 + properdin only; ribbon inside GBM; C3 nephritic factor, low factor B |
| IgA nephropathy | Lupus class I-II (mesangial) | IgA-dominant mesangial granular with C3/properdin; days after URI; high serum IgA |
| Poststreptococcal GN | DDD (low C3); IgA | diffuse hypercellular with PMNs; coarse granular IgG/C3; subepithelial humps; ASO, weeks |
| Anti-GBM disease | GPA (crescents, EM same) | linear IgG along GBM; anti-alpha3 type IV collagen; hemoptysis -> renal failure |
| Granulomatosis with polyangiitis | Anti-GBM | negative IF (pauci-immune); PR3/c-ANCA; sinus, nasal septum |
| Lupus nephritis class I-II (mesangial) | IgA nephropathy | full-house IF; anti-dsDNA, low C3 + C4 |
| Lupus nephritis class III-IV (proliferative) | MPGN I; PSGN | thick rigid capillary walls, crescents, subendothelial + mesangial; full house; low C3 + C4 |
| Lupus nephritis class V (membranous) | Membranous nephropathy | full house incl. C1q; SLE serology; young woman |
| Lupus nephritis class VI (advanced sclerosing) | FSGS / end-stage | global sclerosis; deposits may be gone; long SLE history, dialysis |
| Alport syndrome | Thin BM disease | lamina densa split/laminated; interstitial foam cells; hearing, eye, family renal failure |
| Thin basement membrane disease | Alport; IgA | diffusely thin GBM only; well relatives with hematuria, normal function |

## Correlates - glomerular (CV147-149, CV161)

| Item | Nearest differential | Separating feature |
| --- | --- | --- |
| Minimal change disease | FSGS; NSAID TIN + MCD | child after URI, normotensive, no hematuria, steroid response |
| Focal segmental glomerulosclerosis | MCD; collapsing; membranous | adult, heroin/obesity/sickle, HTN, microscopic hematuria, Cr up |
| Collapsing FSGS (HIV) | FSGS | untreated HIV, massive proteinuria, rapid decline |
| Membranous nephropathy | Lupus class V; MPGN I | middle-aged man, hep B / NSAID / tumor, renal vein thrombosis, PLA2R |
| Diabetic nephropathy | Benign nephrosclerosis; amyloid | decades of diabetes, retinopathy, microalbuminuria first |
| Renal AL amyloidosis | Membranous (malignancy) | M protein + Bence Jones, nephrotic |
| MPGN type I | Membranous (hep); DDD | hepatitis C, cryoglobulins, nephritic+nephrotic mix, RBC casts |
| Dense deposit disease | PSGN | low C3, normal C4, low factor B/properdin, no strep, C3 stays low |
| IgA nephropathy | PSGN; thin BM | gross hematuria days after URI, recurrent, normal C3, high IgA |
| Poststreptococcal GN | IgA; DDD | 1-4 weeks after strep, low C3 normalizes by 6-8 weeks, ASO |
| Anti-GBM disease | GPA | hemoptysis then renal failure, young man, no sinus disease, linear IgG, plasmapheresis |
| Granulomatosis with polyangiitis | Anti-GBM; EGPA (C) | sinusitis, septal perforation, c-ANCA; no asthma/eosinophils |
| Lupus nephritis class III-IV | PSGN; MPGN | young woman, rash, arthralgia, low C3 + C4, anti-dsDNA, nephritic |
| Lupus nephritis class V | Membranous nephropathy | woman with SLE, nephrotic, no casts |
| Alport syndrome | Thin BM | boy, hearing loss, vision, family renal failure |
| Thin basement membrane disease | Alport; IgA | teen, isolated hematuria, well mother/sister |

## Correlates - vascular (CV151)

| Item | Nearest differential | Separating feature |
| --- | --- | --- |
| Benign nephrosclerosis | Diabetic nephropathy; RAS; malignant HTN | slow Cr rise, bland urine, small symmetric finely granular kidneys, hyaline arterioles |
| Malignant hypertension (malignant nephrosclerosis) | TTP/HUS (MAHA); benign | DBP >120, papilledema, encephalopathy; concentric laminated arteriolar walls + fibrinoid necrosis; lower BP over hours |
| Typical HUS | TTP; atypical HUS; IgA vasculitis (F) | child, bloody diarrhea after undercooked burger, schistocytes, low platelets, AKI; no antibiotics |
| Atypical HUS | Typical HUS; TTP | no diarrhea, recurrent/familial, factor H/I/CD46, chronic scarring, reduplicated GBM |
| TTP | HUS | woman <40, fever + neuro signs, ADAMTS13 autoantibody, plasma exchange |
| Atherosclerotic renal artery stenosis | FMD; benign nephrosclerosis | older diabetic man, bruit, high renin, small kidney on one side, stent |
| Fibromuscular dysplasia | Athero RAS | woman 20s-30s, medial hyperplasia, disrupted elastic lamina |
| Renal infarction | Atheroembolic; renal colic (F) | post-MI mural thrombus, CVA tenderness, wedge-shaped pale area base on cortex |
| Atheroembolic renal disease (ADD) | Renal infarction; contrast AKI (F) | days-weeks after aortography / aortic surgery, cholesterol clefts in arteries |
| Sickle cell nephropathy (ADD) | NSAID papillary necrosis; thin BM | HbSS young adult, hematuria + concentrating defect (isosthenuria), papillary necrosis |

## Correlates - tubulointerstitial (CV155)

| Item | Nearest differential | Separating feature |
| --- | --- | --- |
| Ischemic acute tubular injury | Prerenal, rhabdo/ethylene glycol (F), drug TIN | after prolonged shock; patchy proximal straight tubule + thick ascending limb necrosis, sloughed cells, casts |
| Acute drug-induced TIN | NSAID TIN+MCD; acute pyelo (F) | ~15 d after sulfonamide/methicillin/diuretic; fever, rash, eosinophilia; interstitial eosinophils + tubulitis |
| Chronic pyelonephritis (reflux nephropathy) | Benign nephrosclerosis; VUR (F) | recurrent UTIs since childhood + VUR; asymmetric kidneys, U-shaped scars over blunted calyces, broad casts |
| NSAID papillary necrosis | Sickle cell; analgesic | high-dose NSAID + dehydration, AKI, dark infarcted papillae; no rash/eosinophilia |
| NSAID interstitial nephritis with minimal change disease (ADD/split) | MCD; drug TIN | renal failure + nephrotic syndrome together in an NSAID user |
| Acute uric acid nephropathy | Ischemic ATI | 1-2 d after chemo for leukemia/lymphoma, uric acid very high, crystals in acidic collecting tubules |
| Chronic gouty nephropathy | Benign nephrosclerosis | decades of gout, tophi, needle-shaped birefringent crystals with giant cells in medulla |

## Correlates - neoplasia (CV156)

| Item | Nearest differential | Separating feature |
| --- | --- | --- |
| Angiomyolipoma (sporadic) | Tuberous sclerosis; RCC | woman, retroperitoneal bleed, fat-containing mass, thick-walled vessels + smooth muscle + fat |
| Tuberous sclerosis (renal) | Angiomyolipoma; Wilms | child, hypopigmented back patches, facial papules, cardiac rhabdomyoma, bilateral AMLs |
| Oncocytoma | Clear cell RCC | incidental, mahogany-brown, central scar, granular pink cells full of mitochondria |
| Clear cell RCC | Papillary RCC; VHL | 60-year-old male smoker, hematuria + flank pain + mass, polycythemia, renal vein/IVC tumor |
| Papillary RCC | Clear cell | long-term dialysis with acquired cysts; foamy macrophages in papillary cores, psammoma bodies |
| Von Hippel-Lindau syndrome (ADD) | Clear cell RCC | young, bilateral clear cell tumors + cysts, cerebellar/retinal hemangioblastoma, pheochromocytoma |
| Wilms tumor | Neuroblastoma | age 2-5, smooth flank mass not crossing midline, hematuria, renin HTN; triphasic histology |
| Neuroblastoma | Wilms | adrenal mass crossing midline, fever, weight loss, malaise |
| Urothelial carcinoma of the renal pelvis | Clear cell RCC; bladder UC | smoker/analgesic user, painless hematuria, pelvic filling mass + hydronephrosis |

## Correlates - lower urinary tract (CV157)

| Item | Nearest differential | Separating feature |
| --- | --- | --- |
| Ureteropelvic junction obstruction | PUV, VUR (F) | infant boy, unilateral hydronephrosis, normal ureter and bladder, no reflux; adult woman unilateral |
| Sclerosing retroperitoneal fibrosis | Hydronephrosis from stone (F) | ergot/beta-blocker, bilateral hydronephrosis, fibrous mass from sacral promontory around aorta |
| Patent urachus | Bladder exstrophy | newborn with fluid leaking from umbilicus, bladder-umbilicus tract |
| Bladder exstrophy | Patent urachus | newborn with everted red bladder mucosa on the abdominal wall, incomplete penis |
| Malakoplakia | Cystitis (F) | transplant recipient, chronic E. coli, soft yellow plaques, foamy macrophages with calcified bodies |
| Invasive urothelial carcinoma of the bladder | Low-grade papillary, CIS | yellow multinodular ulcerated mass, muscularis propria invasion, cystectomy |
| Low-grade papillary urothelial carcinoma | Invasive; papilloma | exophytic papillary tumor, recurs after resection, orderly cohesive cells |
| Urothelial carcinoma in situ | Invasive | flat red granular mucosa, no mass, malignant cells shed into urine |
| Squamous cell carcinoma of the bladder | Urinary schistosomiasis (F) | older adult from Nile region, decades of hematuria, mass, keratinizing carcinoma among eggs |
| Urethral caruncle | Urethral carcinoma | elderly woman, small red painful meatal mass, granulation tissue, surgery cures |

Dropped: duplicated ureter/ureterocele (no clinical case in CV157), chromophobe / Xp11 /
collecting duct RCC (histology-only, no separable vignette; genes go to A), bladder outlet
obstruction (F owns BPH incl. outlet obstruction), nephrotoxic ATI as its own item (F owns
ethylene glycol, rhabdomyolysis and contrast AKI - the lecture's toxic examples).
