// Jude Tetteh Quarshie - Academic Profile Data Structure

export const profile = {
  name: "Jude Tetteh Quarshie",
  title: "Ph.D. Candidate & Ross-Lynn Research Scholar",
  department: "Borch Department of Medicinal Chemistry & Molecular Pharmacology",
  institution: "Purdue University",
  affiliations: [
    "Purdue Institute for Cancer Research (PICR)",
    "Purdue Institute for Drug Discovery (PIDD)",
    "NIH T32 Chemistry-Biology Interface Fellow",
    "Ross-Lynn Research Scholar"
  ],
  location: "201 S University St, Room HANS439C, West Lafayette, IN 47906",
  email: "jquarshi@purdue.edu",
  advisor: "Dr. Emily C. Dykhuizen",
  
  socials: {
    orcid: "https://orcid.org/0000-0001-5654-1859",
    orcidId: "0000-0001-5654-1859",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=4unD5M8AAAAJ",
    researchGate: "https://www.researchgate.net/profile/Jude-Quarshie",
    linkedIn: "https://www.linkedin.com/in/judequarshie/",
    github: "https://github.com/judequarshie",
    email: "mailto:jquarshi@purdue.edu"
  },

  bio: `I am a Ph.D. Candidate in Medicinal Chemistry and Molecular Pharmacology at Purdue University, working under the mentorship of Dr. Emily C. Dykhuizen. My research sits at the intersection of epigenetics, chromatin remodeling (specifically the SWI/SNF / BAF complex), computer-aided drug discovery (CADD), and translational oncology. 

With a background spanning Medical Laboratory Technology (B.Sc., KNUST) and Molecular Biology (MPhil., University of Ghana), I combine wet-lab assays, multi-omics computational modeling, and chemical biology to identify novel therapeutic targets and small-molecule modulators for aggressive cancers like prostate and triple-negative breast cancer.`,

  metrics: [
    { label: "Publications", value: 10, suffix: "+" },
    { label: "Grants & Fellowships", value: 12, suffix: "" },
    { label: "Research Awards", value: 60, prefix: "$", suffix: "k+" },
    { label: "Academic Degrees", value: 3, suffix: "" }
  ],

  education: [
    {
      degree: "Ph.D. in Medicinal Chemistry & Molecular Pharmacology",
      specialization: "Dual Title PhD in Cancer Research | Purdue Drug Discovery Training Program",
      institution: "Purdue University, West Lafayette, IN, USA",
      period: "2023 – Present",
      advisor: "Dr. Emily C. Dykhuizen",
      details: "Focusing on SWI/SNF (BAF) chromatin remodeling complex regulation and therapeutic inhibition in prostate cancer."
    },
    {
      degree: "MPhil. in Molecular Biology",
      institution: "University of Ghana, Legon, Ghana",
      period: "2020 – 2023",
      advisor: "Dr. Anastasia Aikins & Prof. Osbourne Quaye",
      details: "Thesis centered on natural product medicinal chemistry, WNT/β-catenin signaling pathway modulation, and anti-cancer properties of cryptolepine."
    },
    {
      degree: "B.Sc. in Medical Laboratory Technology",
      institution: "Kwame Nkrumah University of Science and Technology (KNUST), Kumasi, Ghana",
      period: "2015 – 2019",
      advisor: "Dr. (Mrs.) Linda Ahenkorah Fondjo",
      details: "First Class Honors. Diagnostic pathology, clinical hematology, histopathology, and infectious disease diagnostics."
    }
  ],

  researchPillars: [
    {
      id: "epigenetics",
      title: "Epigenetics & BAF Chromatin Remodeling",
      icon: "🧬",
      summary: "Investigating the mechanism of action of SWI/SNF (BAF) chromatin remodeling complex inhibitors in prostate cancer.",
      details: "Epigenetic dysregulation driven by BAF complex mutations or subunit overexpression promotes oncogenic transcription programs. Our work evaluates novel small-molecule inhibitors targeting BAF subunits to restore normal chromatin landscapes and suppress androgen receptor signaling in resistant prostate cancers.",
      tags: ["Chromatin Remodeling", "SWI/SNF Complex", "Epigenetics", "Prostate Cancer", "Biochemical Assays"]
    },
    {
      id: "cadd",
      title: "Medicinal Chemistry & CADD",
      icon: "💊",
      summary: "Computer-aided drug discovery, target validation (EGFR, VEGFR2, BAF), and characterization of natural product derivatives.",
      details: "Utilizing molecular docking, molecular dynamics (Schrödinger Suite, RDKit), and computational chemistry to discover and optimize novel small-molecule scaffolds. Recent studies feature chromen derivatives selectively inhibiting dual kinase targets (EGFR/VEGFR2) and plant alkaloids (cryptolepine, caffeic acid phenethyl ester).",
      tags: ["CADD", "Schrödinger", "RDKit", "Natural Products", "Cryptolepine", "Kinase Inhibitors"]
    },
    {
      id: "multiomics",
      title: "Multi-Omics & Inverse Comorbidities",
      icon: "📊",
      summary: "In silico genomics analyzing inverse disease comorbidities (Down Syndrome vs. Solid Tumors, Alzheimer's vs. Cancer).",
      details: "Exploring genetic and transcriptional inverse comorbidities to reveal protective biological mechanisms. Our computational analyses uncovered specific Down Syndrome Critical Region (DSCR) genes associated with reduced solid tumor incidence, as well as downregulated Alzheimer's pathway expression in oncogenic tissues.",
      tags: ["Multi-omics", "Inverse Comorbidity", "Down Syndrome", "Alzheimer's Disease", "Transcriptomics", "R"]
    },
    {
      id: "oncology",
      title: "Translational Oncology & Clinical Pathology",
      icon: "🔬",
      summary: "Targeting inflammatory signaling axes (IL-8/CXCR2, NF-κB) in triple-negative breast cancer and vasculogenic mimicry.",
      details: "Investigating tumor microenvironment interactions, vasculogenic mimicry, and cancer stemness in TNBC. Combining cellular assays and clinical biomarker profiling to validate therapeutic interventions for aggressive subtypes.",
      tags: ["TNBC", "Vasculogenic Mimicry", "IL-8/CXCR2", "NF-κB", "Histopathology"]
    }
  ],

  publications: [
    {
      id: "pub-2025-1",
      title: "Characterization of a chromen-based anticancer agent using computer-aided drug discovery reveals selective interaction with EGFR and VEGFR2",
      authors: "Tuah B, Ayine-Tora DM, Fosu K, Quarshie JT, Sarpong KAN",
      journal: "In Silico Research in Biomedicine",
      year: 2025,
      volume: "1: 100137",
      category: "CADD & Drug Discovery",
      doi: "https://doi.org/10.1016/j.isrb.2025.100137",
      highlight: true,
      bibtex: `@article{tuah2025characterization,
  title={Characterization of a chromen-based anticancer agent using computer-aided drug discovery reveals selective interaction with EGFR and VEGFR2},
  author={Tuah, B and Ayine-Tora, DM and Fosu, K and Quarshie, JT and Sarpong, KAN},
  journal={In Silico Research in Biomedicine},
  volume={1},
  pages={100137},
  year={2025}
}`
    },
    {
      id: "pub-2025-2",
      title: "Decreased expression of Alzheimer’s disease-related genes in cancer may contribute to the inverse-relationship - A computational study",
      authors: "Anyomi BK, Fosu K, Quarshie JT, Kampo S, Wei J",
      journal: "ACS Omega",
      year: 2025,
      volume: "10(17): 17651–17660",
      category: "Multi-omics & Genetics",
      doi: "https://doi.org/10.1021/acsomega.4c09812",
      highlight: true,
      bibtex: `@article{anyomi2025decreased,
  title={Decreased expression of Alzheimer’s disease-related genes in cancer may contribute to the inverse-relationship - A computational study},
  author={Anyomi, BK and Fosu, K and Quarshie, JT and Kampo, S and Wei, J},
  journal={ACS Omega},
  volume={10},
  number={17},
  pages={17651--17660},
  year={2025},
  publisher={ACS Publications}
}`
    },
    {
      id: "pub-2024-1",
      title: "Caffeic Acid Phenethyl Ester Suppresses Cytokine- and Chemotherapy-Induced Inflammation in Triple-Negative Breast Cancer via NF-κB Signaling",
      authors: "Fosu K, Quarshie JT, Offei NA, et al.",
      journal: "Natural Product Communications",
      year: 2024,
      volume: "19(11)",
      category: "CADD & Drug Discovery",
      doi: "https://doi.org/10.1177/1934578X241298412",
      highlight: true,
      bibtex: `@article{fosu2024caffeic,
  title={Caffeic Acid Phenethyl Ester Suppresses Cytokine- and Chemotherapy-Induced Inflammation in Triple-Negative Breast Cancer via NF-$\kappa$B Signaling},
  author={Fosu, K and Quarshie, JT and Offei, NA and others},
  journal={Natural Product Communications},
  volume={19},
  number={11},
  year={2024}
}`
    },
    {
      id: "pub-2024-2",
      title: "Role of the IL-8/CXCR2 axis in promoting vasculogenic mimicry in triple-negative breast cancer through epithelial-mesenchymal transition",
      authors: "Abdulkarim S, Quarshie JT, Aikins AR",
      journal: "Cancer Plus",
      year: 2024,
      volume: "6(2): 3356",
      category: "Clinical & Oncology",
      doi: "https://doi.org/10.36922/cp.3356",
      highlight: false,
      bibtex: `@article{abdulkarim2024role,
  title={Role of the IL-8/CXCR2 axis in promoting vasculogenic mimicry in triple-negative breast cancer through epithelial-mesenchymal transition},
  author={Abdulkarim, S and Quarshie, JT and Aikins, AR},
  journal={Cancer Plus},
  volume={6},
  number={2},
  pages={3356},
  year={2024}
}`
    },
    {
      id: "pub-2024-3",
      title: "Exploring anti-breast cancer effects of live Pediococcus acidilactici and its cell-free supernatant isolated from human breast milk",
      authors: "Adumuah NN, Quarshie JT, Ametefe EN",
      journal: "International Journal of Breast Cancer",
      year: 2024,
      volume: "2024: 1841909",
      category: "Clinical & Oncology",
      doi: "https://doi.org/10.1155/2024/1841909",
      highlight: false,
      bibtex: `@article{adumuah2024exploring,
  title={Exploring anti-breast cancer effects of live Pediococcus acidilactici and its cell-free supernatant isolated from human breast milk},
  author={Adumuah, NN and Quarshie, JT and Ametefe, EN},
  journal={International Journal of Breast Cancer},
  volume={2024},
  pages={1841909},
  year={2024}
}`
    },
    {
      id: "pub-2023-1",
      title: "Cryptolepine Suppresses Colorectal Cancer Cell Proliferation, Stemness, and Metastatic Processes by Inhibiting WNT/β-Catenin Signaling",
      authors: "Quarshie JT, Fosu K, Quaye O, Aikins AR",
      journal: "Pharmaceuticals (Basel)",
      year: 2023,
      volume: "16(7): 1026",
      category: "Epigenetics & Therapeutics",
      doi: "https://doi.org/10.3390/ph16071026",
      highlight: true,
      bibtex: `@article{quarshie2023cryptolepine,
  title={Cryptolepine Suppresses Colorectal Cancer Cell Proliferation, Stemness, and Metastatic Processes by Inhibiting WNT/$\beta$-Catenin Signaling},
  author={Quarshie, JT and Fosu, K and Quaye, O and Aikins, AR},
  journal={Pharmaceuticals},
  volume={16},
  number={7},
  pages={1026},
  year={2023},
  publisher={MDPI}
}`
    },
    {
      id: "pub-2023-2",
      title: "Inverse comorbidity between down syndrome and solid tumors: Insights from in silico analyses of down syndrome critical region genes",
      authors: "Fosu K, Quarshie JT, Sarpong KAN, Aikins AR",
      journal: "Genes",
      year: 2023,
      volume: "14(4): 800",
      category: "Multi-omics & Genetics",
      doi: "https://doi.org/10.3390/genes14040800",
      highlight: true,
      bibtex: `@article{fosu2023inverse,
  title={Inverse comorbidity between down syndrome and solid tumors: Insights from in silico analyses of down syndrome critical region genes},
  author={Fosu, K and Quarshie, JT and Sarpong, KAN and Aikins, AR},
  journal={Genes},
  volume={14},
  number={4},
  pages={800},
  year={2023},
  publisher={MDPI}
}`
    },
    {
      id: "pub-2023-3",
      title: "Caffeic acid inhibits proliferation, migration, and stemness of DU-145 prostate cancer cells",
      authors: "Aikins AR, Fosu K, Quarshie JT, Quaye O",
      journal: "Natural Product Communications",
      year: 2023,
      volume: "18(8)",
      category: "CADD & Drug Discovery",
      doi: "https://doi.org/10.1177/1934578X231191024",
      highlight: false,
      bibtex: `@article{aikins2023caffeic,
  title={Caffeic acid inhibits proliferation, migration, and stemness of DU-145 prostate cancer cells},
  author={Aikins, AR and Fosu, K and Quarshie, JT and Quaye, O},
  journal={Natural Product Communications},
  volume={18},
  number={8},
  year={2023}
}`
    },
    {
      id: "pub-2023-4",
      title: "Risk of heavy metal poisoning from consuming grasscutter digesta in Ghana",
      authors: "Quarshie JT, Cofie JK, Dewornu FS, Quaye O, Aikins AR",
      journal: "Environmental Health Insights",
      year: 2023,
      volume: "17: 11786302231175339",
      category: "Clinical & Public Health",
      doi: "https://doi.org/10.1177/11786302231175339",
      highlight: false,
      bibtex: `@article{quarshie2023risk,
  title={Risk of heavy metal poisoning from consuming grasscutter digesta in Ghana},
  author={Quarshie, JT and Cofie, JK and Dewornu, FS and Quaye, O and Aikins, AR},
  journal={Environmental Health Insights},
  volume={17},
  pages={11786302231175339},
  year={2023}
}`
    },
    {
      id: "pub-2021-1",
      title: "The current state of parkinsonism in West Africa: A systematic review",
      authors: "Quarshie JT, Mensah EN, Quaye O, Aikins AR",
      journal: "Parkinson's Disease",
      year: 2021,
      volume: "2021: 7479423",
      category: "Clinical & Public Health",
      doi: "https://doi.org/10.1155/2021/7479423",
      highlight: false,
      bibtex: `@article{quarshie2021current,
  title={The current state of parkinsonism in West Africa: A systematic review},
  author={Quarshie, JT and Mensah, EN and Quaye, O and Aikins, AR},
  journal={Parkinson's Disease},
  volume={2021},
  pages={7479423},
  year={2021}
}`
    },
    {
      id: "pub-2020-1",
      title: "A multicenter study of the prevalence and risk factors of malaria and anemia among pregnant women at first antenatal care visit in Ghana",
      authors: "Fondjo LA, Addai-Mensah O, Annani-Akollor ME, Quarshie JT, Boateng AA, Assafuah SE, Owiredu EW",
      journal: "PLoS ONE",
      year: 2020,
      volume: "15(8): e0238077",
      category: "Clinical & Public Health",
      doi: "https://doi.org/10.1371/journal.pone.0238077",
      highlight: false,
      bibtex: `@article{fondjo2020multicenter,
  title={A multicenter study of the prevalence and risk factors of malaria and anemia among pregnant women at first antenatal care visit in Ghana},
  author={Fondjo, LA and Addai-Mensah, O and Annani-Akollor, ME and Quarshie, JT and Boateng, AA and Assafuah, SE and Owiredu, EW},
  journal={PLoS ONE},
  volume={15},
  number={8},
  pages={e0238077},
  year={2020}
}`
    }
  ],

  presentations: [
    {
      date: "July 2025",
      type: "Poster Presentation",
      title: "Targeting the BAF Chromatin Remodeling Complex in Prostate Cancer",
      event: "2025 Van Andel Institute Epigenetics Symposium",
      location: "Van Andel Institute, Grand Rapids, MI, USA"
    },
    {
      date: "May 2025",
      type: "Poster Presentation",
      title: "Targeting the BAF Chromatin Remodeling Complex in Prostate Cancer",
      event: "IU Simon Comprehensive Cancer Center Research Day 2025",
      location: "Indiana University, Indianapolis, IN, USA"
    },
    {
      date: "June 2024",
      type: "Poster Presentation",
      title: "The Mechanism of Action of a SWI/SNF Inhibitor in Prostate Cancer",
      event: "Black In Cancer Conference 2024",
      location: "Bethesda, MD, USA & Frederick National Laboratory"
    },
    {
      date: "July 2023",
      type: "Oral Talk",
      title: "Effect of Cryptolepine on the WNT/β-Catenin Signaling Pathway in Colorectal Cancer",
      event: "7th WACCBIP Research Conference",
      location: "West African Centre for Cell Biology of Infectious Pathogens, Ghana"
    }
  ],

  grantsAndAwards: [
    {
      year: "2026",
      title: "Ross-Lynn Research Scholar Award",
      organization: "Purdue University College of Pharmacy",
      amount: "$25,000 + Benefits",
      description: "Competitive scholar award recognizing exceptional research potential in cancer drug discovery."
    },
    {
      year: "2025 – 2026",
      title: "NIH Chemistry-Biology Interface (CBI) Fellowship [T32 GM125620]",
      organization: "Purdue Drug Discovery Training Program / NIH",
      amount: "$28,224 + Benefits",
      description: "Prestigious NIH institutional training grant for interdisciplinary chemical biology research."
    },
    {
      year: "2026",
      title: "Purdue ICR Graduate Student Travel Grant",
      organization: "Purdue University Institute for Cancer Research",
      amount: "$1,000",
      description: "Awarded to support conference presentation on BAF complex targeting."
    },
    {
      year: "2025",
      title: "Van Andel Institute Epigenomics Workshop Travel Grant",
      organization: "Van Andel Institute (VAI), MI, USA",
      amount: "$1,113",
      description: "Selected for full travel support to attend the VAI Epigenetics Symposium & Workshop."
    },
    {
      year: "2025",
      title: "Zymo Research Graduate Student Starter Pack",
      organization: "Zymo Research Corporation",
      amount: "Valued at $200",
      description: "Awarded molecular biology reagent kit for high-throughput epigenomic extraction."
    },
    {
      year: "2024",
      title: "Black in Cancer Conference Travel Grant",
      organization: "Black in Cancer & FNLCR",
      amount: "$750",
      description: "Travel award to present SWI/SNF inhibitor mechanism of action in Bethesda, MD."
    },
    {
      year: "2021 – 2022",
      title: "Defense Advanced Research Projects Agency (DARPA) Award",
      organization: "DARPA / Prof. Osbourne Quaye Lab",
      amount: "$3,300",
      description: "Research grant supporting master's thesis work on viral and cellular signaling."
    },
    {
      year: "2021 – 2022",
      title: "World Bank ACE Postgraduate Scholarship",
      organization: "West African Genetic Medicine Centre (WAGMC)",
      amount: "$4,000",
      description: "Full postgraduate fellowship for outstanding genomics scholars in West Africa."
    }
  ],

  teachingExperience: [
    {
      role: "Graduate Teaching Assistant",
      course: "BHEE 129: Pathophysiology & Drug Action",
      institution: "Purdue University",
      period: "August 2023 – December 2023",
      details: "Guided pharmacy students through disease mechanisms, drug pharmacology, problem-solving recitations, assignments, and exams."
    },
    {
      role: "Graduate Teaching Assistant",
      course: "MCMP 208: Biochemistry for Pharmaceutical Sciences I",
      institution: "Purdue University",
      period: "January 2024 – May 2024",
      details: "Led weekly recitation sessions, office hours, and graded examinations for undergraduate pharmaceutical science majors."
    }
  ],

  clinicalExperience: [
    {
      role: "Medical Laboratory Scientist",
      institution: "Pathology Division, 37 Military Hospital, Accra, Ghana",
      period: "September 2019 – August 2020",
      details: "Performed hematological, biochemical, and microbiological diagnostic tests. Processed tissue specimens for histology and immunohistochemistry supporting cancer diagnostics."
    },
    {
      role: "Intern Medical Laboratory Scientist",
      institution: "Achimota Hospital Clinical Laboratory, Accra, Ghana",
      period: "2016 – 2018 (Rotational)",
      details: "Blood cross-matching, tuberculosis diagnosis using GeneXpert automated PCR, and antimicrobial susceptibility testing."
    }
  ],

  certificationsAndSkills: {
    research: [
      "Epigenetics & Chromatin Remodeling",
      "Multi-omics & Transcriptomics (R, Bioconductor)",
      "CADD & Cheminformatics (Schrödinger, RDKit)",
      "Mammalian Cell Culture & Cell-based Assays",
      "Peptide Synthesis & Western Blotting",
      "Mouse Tumor Models & Animal Biosafety"
    ],
    certifications: [
      "CITI: Working with Genetically Modified Mice (05/2026)",
      "CITI: Biosafety for PIs & Lab Personnel (05/2026)",
      "CITI: Animal Biosafety (05/2026)",
      "CITI: Human Research & Responsible Conduct of Research (08/2023)"
    ]
  }
};
