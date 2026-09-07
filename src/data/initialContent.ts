import { Product, BlogPost, CompanyInfo } from '../types';

export const initialCompanyInfo: CompanyInfo = {
  name: 'Ferro Global Trading LLC',
  tradingName: 'Ferro Global Trading LLC',
  domain: 'ferroglobal.ae',
  tagline: 'Reliable Global Sourcing Partner for Ferro Alloys, Metals & Minerals',
  establishedYear: 2017,
  headquarters: {
    address: 'Office 2005, Preatoni Tower (Dubai Star), Cluster L',
    tower: 'Preatoni Tower',
    cluster: 'Cluster L, Jumeirah Lakes Towers (JLT)',
    city: 'Dubai',
    country: 'United Arab Emirates',
    coordinates: {
      lat: 25.0768,
      lng: 55.1485,
    },
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.985012544254!2d55.14589987627409!3d25.06849997779435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca575f0a0bb%3A0x95995055848bbceb!2sPreatoni%20Tower%2C%20Cluster%20L%2C%20JLT%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae',
  },
  contact: {
    phonePrimary: '+971 4 458 0205',
    phoneSecondary: '+971 52 442 6170',
    whatsapp: '+971524426170',
    emailSales: 'sales@ferroglobal.ae',
    emailInfo: 'info@ferroglobal.ae',
    workingHours: 'Monday - Saturday: 09:00 AM – 06:00 PM (GST)',
  },
  metrics: [
    { label: 'Annual Trading Volume', value: '180,000+ MT', description: 'Shipped to premier steelmakers across 24+ countries' },
    { label: 'Global Sourcing Hubs', value: '15+ Nations', description: 'Direct mine and smelter offtakes across Africa, Asia & Europe' },
    { label: 'Metallurgical Purity', value: '99.8% Spec SLA', description: 'Verified by independent SGS and Intertek laboratories' },
    { label: 'On-Time Port Deliveries', value: '98.6%', description: 'Robust chartered and containerized logistics network' },
  ],
  values: [
    {
      title: 'Structural Stability',
      description: 'Transparent contract terms, disciplined index hedging, and reliable long-term supply agreements that shield steelmakers from global volatility.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Metallurgical Reliability',
      description: 'Strict chemical tolerances and exact sizing distribution inspected by international assayers prior to vessel loading.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Global Port Connectivity',
      description: 'Centrally anchored in Dubai with immediate access to Jebel Ali Port, Hamad, Sohar, Rotterdam, Mersin, and Mundra maritime hubs.',
      icon: 'Anchor',
    },
    {
      title: 'Tailored Industrial Financing',
      description: 'Flexible documentary letters of credit (LC), usance terms, and tailored escrow mechanisms designed for international procurement.',
      icon: 'Banknote',
    },
  ],
  certifications: ['ISO 9001:2015 Quality Management', 'SGS Verified Assays', 'Intertek Certified Inspections', 'DMCC Registered Member'],
  targetRegions: ['Middle East & GCC', 'Europe & Mediterranean', 'North & South Africa', 'India & South Asia', 'Turkey & Central Asia'],
  keyPorts: ['Jebel Ali Port (UAE)', 'Port of Rotterdam (NL)', 'Mersin International Port (TR)', 'Port of Durban (ZA)', 'Nhava Sheva / Mundra (IN)', 'Hamad Port (QA)'],
};

export const initialProducts: Product[] = [
  {
    id: 'ferro-manganese',
    name: 'Ferro Manganese (FeMn)',
    chemicalFormula: 'FeMn',
    category: 'ferro-alloys',
    tagline: 'High Carbon, Medium Carbon, and Low Carbon grades for steel deoxidation',
    description: 'Ferro Manganese is an essential master alloy utilized primarily in steel production to act as a potent deoxidizer, desulfurizer, and critical alloying element that significantly improves tensile strength, hardness, and wear resistance in structural steel, wear plates, and rail steels.',
    grades: [
      'High Carbon (HC) FeMn 70%',
      'High Carbon (HC) FeMn 75%',
      'Medium Carbon (MC) FeMn 75%',
      'Medium Carbon (MC) FeMn 78%',
      'Low Carbon (LC) FeMn 75%',
      'Low Carbon (LC) FeMn 78%',
    ],
    composition: [
      { element: 'Mn', name: 'Manganese', percentage: '65.0% - 82.0% Min (By Grade)' },
      { element: 'C', name: 'Carbon', percentage: 'HC: 6.0-8.0% | MC: 1.0-1.5% | LC: 0.1-0.5%' },
      { element: 'Si', name: 'Silicon', percentage: '1.0% - 1.5% Max' },
      { element: 'P', name: 'Phosphorus', percentage: '0.20% - 0.35% Max' },
      { element: 'S', name: 'Sulfur', percentage: '0.03% Max' },
    ],
    specs: {
      sizing: '10 - 50 mm (90% min), 10 - 100 mm, or custom lump sizing upon request',
      packing: '1 MT Big Bags with waterproof inner liner, or loose in dry 20ft containers',
      origin: 'India, South Africa, Oman, Malaysia',
      inspection: 'SGS / Intertek certified chemical analysis and size distribution test report',
      applications: [
        'Oxygen scavenger and desulfurization in basic oxygen and electric arc furnaces',
        'Production of high-tensile structural beams, rebar, and pipeline steel',
        'Specialty alloy tool steels and abrasion-resistant heavy equipment plates',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'silico-manganese',
    name: 'Silico Manganese (SiMn)',
    chemicalFormula: 'SiMn',
    category: 'ferro-alloys',
    tagline: 'Standard grades 60/14, 65/15, and 65/16 for dual deoxidizing efficiency',
    description: 'Silico Manganese is a ferroalloy composed of manganese, silicon, and iron. It is widely favored over pure ferrosilicon and ferromanganese because the simultaneous presence of silicon and manganese produces low-melting manganese silicates that easily separate from molten steel, leaving cleaner steel with lower inclusion counts.',
    grades: ['Grade 60/14 (Mn: 60% min, Si: 14% min)', 'Grade 65/15 (Mn: 65% min, Si: 15% min)', 'Grade 65/16 (Mn: 65% min, Si: 16% min)'],
    composition: [
      { element: 'Mn', name: 'Manganese', percentage: '60.0% - 68.0% Min' },
      { element: 'Si', name: 'Silicon', percentage: '14.0% - 17.0% Min' },
      { element: 'C', name: 'Carbon', percentage: '1.5% - 2.5% Max' },
      { element: 'P', name: 'Phosphorus', percentage: '0.25% Max (Low P: 0.10% available)' },
      { element: 'S', name: 'Sulfur', percentage: '0.03% Max' },
    ],
    specs: {
      sizing: '10 - 50 mm (85% min), 10 - 60 mm, 20 - 80 mm',
      packing: '1000 kg or 1250 kg Jumbo bags with UV resistance; 20-25 MT per 20ft container',
      origin: 'India, Georgia, South Africa, Kazakhstan',
      inspection: 'Pre-shipment inspection certificates by SGS / Alex Stewart / Intertek',
      applications: [
        'Primary deoxidizer in commercial carbon steel billet production',
        'Foundry casting additions for spheroidal graphite and ductile iron',
        'Reinforcing bars (TMT), merchant wire rods, and automotive spring steels',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'ferro-chrome',
    name: 'Ferro Chrome (FeCr)',
    chemicalFormula: 'FeCr',
    category: 'ferro-alloys',
    tagline: 'High Carbon (HC) & Low Carbon (LC) grades for stainless & specialty steel',
    description: 'Ferro Chrome is a critical raw material for the manufacturing of stainless steel, giving steel its high resistance to oxidation, acid corrosion, and elevated operating temperatures. Available in standard High Carbon Charge Chrome and ultra-low carbon grades for precision metallurgy.',
    grades: [
      'High Carbon (HC) FeCr 58% - 65% Cr',
      'High Carbon (HC) FeCr 65% - 70% Cr',
      'Low Carbon (LC) FeCr 60% Cr (C: 0.05% - 0.10% max)',
      'Extra Low Carbon (ELC) FeCr (C: 0.03% max)',
    ],
    composition: [
      { element: 'Cr', name: 'Chromium', percentage: '58.0% - 68.0% Min' },
      { element: 'C', name: 'Carbon', percentage: 'HC: 6.0-9.0% | LC: 0.03-0.10%' },
      { element: 'Si', name: 'Silicon', percentage: '1.5% - 4.0% Max' },
      { element: 'P', name: 'Phosphorus', percentage: '0.03% - 0.04% Max' },
      { element: 'S', name: 'Sulfur', percentage: '0.04% Max' },
    ],
    specs: {
      sizing: '10 - 50 mm, 10 - 100 mm, or 20 - 150 mm lumps',
      packing: '1 MT heavy-duty Polypropylene bags on heat-treated pallets or loose bulk in container',
      origin: 'South Africa, India, Kazakhstan, Oman',
      inspection: 'Assayed by SGS, Intertek or Bureau Veritas with full certificate of analysis (COA)',
      applications: [
        'Austenitic and ferritic stainless steel grades (AISI 304, 316, 430)',
        'Heat-resistant boiler tubes and turbine casing castings',
        'Wear-resistant alloy cast irons and ball mill grinding media',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'ferro-silicon',
    name: 'Ferro Silicon (FeSi)',
    chemicalFormula: 'FeSi',
    category: 'ferro-alloys',
    tagline: 'FeSi 75% and FeSi 70% grades with low aluminum and low carbon profiles',
    description: 'Ferro Silicon is an alloy of iron and silicon used as a standard deoxidizer in melting steel and an inoculant in cast iron foundries. It also serves as an exothermic heat booster during ladle refining processes.',
    grades: ['FeSi 75% (Si: 72% - 78%)', 'FeSi 70% (Si: 68% - 72%)', 'FeSi 65% (Si: 63% - 67%)', 'Low Al FeSi (Al: 0.5% max)'],
    composition: [
      { element: 'Si', name: 'Silicon', percentage: '70.0% - 78.0% Min' },
      { element: 'Al', name: 'Aluminum', percentage: '1.0% - 1.5% Max (Special: 0.5% max)' },
      { element: 'C', name: 'Carbon', percentage: '0.10% - 0.15% Max' },
      { element: 'P', name: 'Phosphorus', percentage: '0.04% Max' },
      { element: 'S', name: 'Sulfur', percentage: '0.02% Max' },
    ],
    specs: {
      sizing: '10 - 50 mm, 10 - 60 mm, 0.2 - 2 mm (Inoculant grade)',
      packing: '1 MT Big Bags with polyethylene inner lining',
      origin: 'China, India, Bhutan, Norway',
      inspection: 'SGS chemical inspection and moisture control analysis',
      applications: [
        'Strong deoxidizer in carbon steel and silicon electrical sheets',
        'Inoculant and graphitizing agent in gray and ductile iron foundries',
        'Reduction agent in the production of metallic magnesium and low-carbon ferroalloys',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'ferro-molybdenum',
    name: 'Ferro Molybdenum (FeMo)',
    chemicalFormula: 'FeMo',
    category: 'ferro-alloys',
    tagline: 'High-purity FeMo 60% min for ultra-high strength and creep resistance',
    description: 'Ferro Molybdenum is an additive that imparts high tensile strength, hardenability, weldability, and resistance to pitting corrosion in stainless steels and nickel alloys subjected to high temperature and marine environments.',
    grades: ['FeMo 60 Standard (Mo: 60.0% min)', 'FeMo 58 Grade (Mo: 58.0% min)', 'Low Copper FeMo (Cu: 0.2% max)'],
    composition: [
      { element: 'Mo', name: 'Molybdenum', percentage: '58.0% - 65.0% Min' },
      { element: 'C', name: 'Carbon', percentage: '0.10% Max' },
      { element: 'Si', name: 'Silicon', percentage: '1.50% Max' },
      { element: 'P', name: 'Phosphorus', percentage: '0.05% Max' },
      { element: 'S', name: 'Sulfur', percentage: '0.10% Max' },
      { element: 'Cu', name: 'Copper', percentage: '0.50% Max' },
    ],
    specs: {
      sizing: '10 - 50 mm (90% min), or 5 - 30 mm',
      packing: '100 kg or 250 kg sealed steel drums on export wooden pallets / 1 MT bags',
      origin: 'Armenia, Chile, China, Europe',
      inspection: 'Rigorous spectrographic assay by SGS / Alex Stewart',
      applications: [
        'Production of 316 and duplex grade stainless steels',
        'High-strength low-alloy (HSLA) steels and petrochemical piping',
        'Aviation and power generation heat-resistant superalloys',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  {
    id: 'specialty-ferro-alloys',
    name: 'Specialty Alloys: FeV & CaSi',
    chemicalFormula: 'FeV / CaSi',
    category: 'ferro-alloys',
    tagline: 'Ferro Vanadium (80%) and Calcium Silicon cored wire & lumps',
    description: 'Specialty additions for secondary metallurgy. Ferro Vanadium provides grain refinement and precipitation strengthening. Calcium Silicon delivers deep deoxidation, calcium treatment for inclusion morphology control, and improved castability in continuous casters.',
    grades: ['Ferro Vanadium FeV 80% (V: 78-82%)', 'Calcium Silicon CaSi 30/60 (Ca: 28-32%, Si: 58-62%)'],
    composition: [
      { element: 'V / Ca', name: 'Active Element', percentage: 'V: 78-82% | Ca: 28-32%' },
      { element: 'Si', name: 'Silicon', percentage: 'CaSi: 58-62% | FeV: 1.5% max' },
      { element: 'Al', name: 'Aluminum', percentage: '1.5% Max' },
      { element: 'C', name: 'Carbon', percentage: '0.25% - 1.0% Max' },
    ],
    specs: {
      sizing: '10 - 50 mm lumps, or encapsulated Cored Wire coils for ladle injection',
      packing: 'Steel drums (100/250 kg) or 1 MT bulk bags with internal moisture barrier',
      origin: 'Austria, South Africa, India, China',
      inspection: 'Third-party certified laboratory analysis',
      applications: [
        'Microalloyed high-yield rebar and automotive forged components',
        'Inclusion shape modification in clean steel casting lines',
        'Prevention of nozzle clogging during continuous billet casting',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  // Metals & Scrap (from sfaglobex.ae)
  {
    id: 'stainless-steel-scrap',
    name: 'Stainless Steel Scrap',
    chemicalFormula: 'SS 304 / 316',
    category: 'metals-scrap',
    tagline: 'Clean industrial solid scrap, sheet cuttings, and turning scrap',
    description: 'High-grade recycled stainless steel raw materials sorted precisely for Induction Furnaces and Electric Arc Furnaces (EAF). Free of zinc, lead, excessive oil, or radioactive contamination.',
    grades: ['SS Grade 304 (Cr: 18%, Ni: 8%)', 'SS Grade 316 (Cr: 16%, Ni: 10%, Mo: 2%)', 'SS Grade 430 Ferretic'],
    composition: [
      { element: 'Cr', name: 'Chromium', percentage: '16.0% - 18.5%' },
      { element: 'Ni', name: 'Nickel', percentage: '8.0% - 10.5%' },
      { element: 'Mo', name: 'Molybdenum', percentage: '2.0% - 2.5% (316 Grade)' },
      { element: 'Fe', name: 'Iron Balance', percentage: 'Balance' },
    ],
    specs: {
      sizing: 'Baled 50x50 cm, sheared punchings, clean plate cuttings < 1.5m',
      packing: 'Loose bulk in 20ft / 40ft heavy sea containers (22-26 MT/container)',
      origin: 'UAE & Middle East, Europe, USA',
      inspection: 'Radiation inspection certificate and optical spectrometry assay',
      applications: [
        'Electric arc furnace stainless steel melting',
        'Secondary remelting ingots and precision casting foundries',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'mild-steel-billets',
    name: 'Mild Steel Billets & Round Billets',
    chemicalFormula: '3sp / 5sp',
    category: 'metals-scrap',
    tagline: 'Continuous casting billets for rebar and wire rod re-rolling mills',
    description: 'Continuous cast carbon steel billets manufactured according to GOST 380 / ASTM A615 standards. Straight, rhomboidity-controlled with uniform chemical structure and smooth surface free of deep cracks, pinholes, or slag entrapment.',
    grades: ['Grade 3sp/ps (Carbon: 0.14 - 0.22%)', 'Grade 5sp/ps (Carbon: 0.28 - 0.37%)', 'Round Billets (100 - 300 mm dia)'],
    composition: [
      { element: 'C', name: 'Carbon', percentage: '0.14% - 0.37%' },
      { element: 'Mn', name: 'Manganese', percentage: '0.40% - 0.80%' },
      { element: 'Si', name: 'Silicon', percentage: '0.15% - 0.30%' },
      { element: 'P & S', name: 'P & S Max', percentage: '0.045% Max each' },
    ],
    specs: {
      sizing: '100x100 mm, 120x120 mm, 130x130 mm, 150x150 mm in 6m or 12m lengths',
      packing: 'Loose bundled with wire, shipped breakbulk in charter vessels or flat-racks',
      origin: 'Oman, Saudi Arabia, UAE, CIS',
      inspection: 'Mill Test Certificate (MTC) 3.1 & SGS pre-shipment dimensional inspection',
      applications: [
        'Hot re-rolling for deformed concrete reinforcing bars (rebar)',
        'Manufacturing of wire rods, wire drawing, and small structural angles',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  {
    id: 'aluminium-scrap',
    name: 'Aluminium Scrap',
    chemicalFormula: 'Al 6063 / Tense / TT',
    category: 'metals-scrap',
    tagline: 'Clean extruded profile scrap, Tense, and Talon for secondary smelters',
    description: 'Selected aluminium scrap commodities sourced from verified demolition and manufacturing off-cuts across the GCC. Low iron and magnesium impurity threshold ideal for secondary billet casting.',
    grades: ['Aluminium Extrusions 6063 (Clean)', 'Tense (Mixed automotive cast aluminium)', 'Tabor (Clean sheet)', 'TT (Tense / Tabor blend)'],
    composition: [
      { element: 'Al', name: 'Aluminium', percentage: '92.0% - 98.5% Net Metal Yield' },
      { element: 'Fe', name: 'Iron Content', percentage: '< 0.5% (Extrusions)' },
      { element: 'Si & Mg', name: 'Silicon & Magnesium', percentage: 'Alloy balance (6063 spec)' },
    ],
    specs: {
      sizing: 'Cut to lengths under 1 meter or densely compacted briquettes/bales',
      packing: 'Baled and strapped, 20-24 MT per 40ft container',
      origin: 'UAE, Bahrain, Saudi Arabia, Kuwait',
      inspection: 'Visual, moisture, and chemical spectrometry assay',
      applications: [
        'Secondary remelting for aluminium extrusion billets and automotive foundry ingots',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  {
    id: 'stainless-steel-products',
    name: 'Stainless Steel Products (Bar, Coil, Pipe)',
    chemicalFormula: 'SS 304/316L',
    category: 'metals-scrap',
    tagline: 'Bright bars, hot & cold rolled coils, square bars, and seamless pipes',
    description: 'Finished and semi-finished prime stainless steel products supplied directly from ISO certified rolling mills for industrial, architectural, and fabrication sectors across the GCC.',
    grades: ['SS 304 / 304L', 'SS 316 / 316L', 'SS 321', 'SS 310S (High Temp)'],
    composition: [
      { element: 'Cr', name: 'Chromium', percentage: '18.0% - 20.0%' },
      { element: 'Ni', name: 'Nickel', percentage: '8.0% - 12.0%' },
      { element: 'Mo', name: 'Molybdenum', percentage: '2.0% - 3.0% (316L)' },
      { element: 'C', name: 'Carbon', percentage: '0.03% Max (L-grade)' },
    ],
    specs: {
      sizing: 'Bright bars: 6mm - 120mm dia; Coils: 0.5mm - 6mm thickness; Pipes: 1/2" to 24"',
      packing: 'Seaworthy wooden cases or PVC wrapped coils on export skids',
      origin: 'India, Taiwan, South Korea, Europe',
      inspection: 'EN 10204 3.1 Mill Test Certificates + PMI (Positive Material Identification)',
      applications: [
        'Chemical plant processing pipelines and oilfield instrumentation',
        'Food processing equipment and architectural cladding',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
  // Minerals & Ores (from sfaglobex.ae)
  {
    id: 'manganese-ore',
    name: 'Manganese Ore',
    chemicalFormula: 'Mn Ore',
    category: 'minerals-ores',
    tagline: 'High-grade 38% to 48% Mn lumpy and concentrate for alloy smelters',
    description: 'Natural high-grade manganese ore sourced directly from major mines in South Africa and Gabon. Characterized by low phosphorus and silica ratios, making it the premier feedstock for submerged arc furnaces producing Silico Manganese and Ferro Manganese.',
    grades: ['High Grade (Mn: 44% - 48%)', 'Medium Grade (Mn: 38% - 42%)', 'Low Phosphorus Grade (P < 0.05%)'],
    composition: [
      { element: 'Mn', name: 'Manganese', percentage: '38.0% - 48.0%' },
      { element: 'Fe', name: 'Iron', percentage: '4.0% - 6.0%' },
      { element: 'SiO2', name: 'Silica', percentage: '5.0% - 9.0%' },
      { element: 'Al2O3', name: 'Alumina', percentage: '3.0% - 5.0%' },
      { element: 'P', name: 'Phosphorus', percentage: '0.03% - 0.08% Max' },
    ],
    specs: {
      sizing: '10 - 75 mm (Lumpy), 0 - 10 mm (Fines)',
      packing: 'Loose bulk in vessels (30,000 - 50,000 MT shipments) or in 20ft containers',
      origin: 'South Africa (Kalahari Basin), Gabon, Zambia',
      inspection: 'Assayed at load port and discharge port by SGS / Alex Stewart',
      applications: [
        'Smelting of High Carbon Ferro Manganese and Silico Manganese',
        'Battery manufacturing and chemical reagent synthesis',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    id: 'chrome-ore',
    name: 'Chrome Ore (Lumpy & Concentrate)',
    chemicalFormula: 'Cr2O3',
    category: 'minerals-ores',
    tagline: 'Metallurgical grade 40% - 44% Cr2O3 for Ferro Chrome smelting',
    description: 'Chrome ore lumpy and spiral gravity concentrates with high Cr/Fe ratio. Specifically suited for submerged electric arc furnace smelting into Charge Chrome and High Carbon Ferro Chrome.',
    grades: ['Lumpy Metallurgical Ore (40% - 42% Cr2O3)', 'Spiral Concentrate (42% - 44% Cr2O3)', 'Chemical Grade Concentrate'],
    composition: [
      { element: 'Cr2O3', name: 'Chromium Trioxide', percentage: '40.0% - 44.0%' },
      { element: 'Cr/Fe', name: 'Cr to Fe Ratio', percentage: '1.5 : 1 to 2.2 : 1' },
      { element: 'SiO2', name: 'Silica', percentage: '3.5% - 6.0% Max' },
      { element: 'P', name: 'Phosphorus', percentage: '0.005% Max' },
      { element: 'S', name: 'Sulfur', percentage: '0.01% Max' },
    ],
    specs: {
      sizing: 'Lumpy: 10 - 300 mm; Concentrate: 0 - 2 mm (Spiral concentrate)',
      packing: 'In 1.5 MT Big Bags or loose in 20ft sea containers; bulk vessel loads',
      origin: 'Oman, South Africa, Pakistan, Albania',
      inspection: 'Independently tested by SGS, Intertek or Alfred H Knight',
      applications: [
        'Smelting of High Carbon Ferro Chrome (Charge Chrome)',
        'Refractory brick manufacturing for electric arc furnace linings',
      ],
    },
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    featured: false,
  },
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'ferro-manganese-market-outlook-2026',
    slug: 'ferro-manganese-market-outlook-2026',
    title: 'Middle East Steel Expansion Drives Robust Demand for Ferro Manganese & SiMn in 2026',
    summary: 'An in-depth analysis of crude steel output across the GCC, green steel transition investments in UAE and Saudi Arabia, and the resulting pricing dynamics for manganese alloys.',
    content: `The global ferro alloys landscape is experiencing a strategic pivot toward the Middle East. With major infrastructure developments across Saudi Arabia (Vision 2030 megaprojects) and the United Arab Emirates’ expanding low-carbon steel facilities, regional consumption of bulk ferro alloys has surged significantly.

Silico Manganese (65/16 and 60/14) continues to be the primary workhorse deoxidizer for regional electric arc furnace (EAF) operators. Concurrently, demand for Medium and Low Carbon Ferro Manganese is accelerating as steel producers shift higher percentages of capacity toward specialty micro-alloyed rebar, high-strength structural profiles, and automotive-grade wire rods.

Key Market Drivers:
1. EAF Production Share: Over 90% of steel produced in the GCC is generated via Electric Arc Furnaces using direct reduced iron (DRI) and recycled scrap, requiring precise ferro alloy additions.
2. Supply Chain Nearshoring: Global shipping disruptions have encouraged regional steelmakers to maintain strategic supplier partnerships with Dubai-anchored trading houses like Ferro Global Trading LLC.
3. Quality Assurance: Tighter specifications on phosphorus (P < 0.15%) and trace elements to meet stringent European and North American export standards.

Ferro Global Trading LLC continues to secure long-term offtake agreements with premier smelters in India, South Africa, and Oman, providing our industrial clients with fixed-price and index-linked stability throughout market cycles.`,
    category: 'Market Trends',
    author: 'Metallurgical Trading Desk',
    publishedDate: 'March 2, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tags: ['Ferro Manganese', 'Silico Manganese', 'GCC Steel', 'EAF Technology'],
  },
  {
    id: 'green-steel-decarbonization-alloys',
    slug: 'green-steel-decarbonization-alloys',
    title: 'Decarbonizing Steel: Why High-Purity Ferro Alloys Are Fundamental to Scope 1 & 2 Reductions',
    summary: 'How electric arc furnace efficiency, lower tap-to-tap times, and cleaner master alloys reduce kilowatt-hour energy consumption per metric ton of molten steel.',
    content: `As global environmental regulations such as the EU Carbon Border Adjustment Mechanism (CBAM) take full effect, steelmakers worldwide are under unprecedented pressure to measure and slash embodied carbon in finished steel products.

While much attention focuses on green hydrogen DRI, secondary metallurgy optimization offers immediate, cost-effective carbon reduction. High-purity ferroalloys play a decisive role in achieving lower energy consumption:

- Reducing Slag Volume: High-grade alloys with low silicon and phosphorus impurities minimize the required volume of synthetic flux and lime additions, decreasing total furnace slag.
- Faster Dissolution Rates: Calibrated lump sizing (10-50mm) maximizes dissolution kinetics in the ladle furnace, cutting tap-to-tap electrical cycle times by up to 3.5 minutes per heat.
- Lower Refractory Wear: Controlled chemical composition prevents excessive thermal and chemical erosion of basic furnace linings.

At Ferro Global Trading LLC, all supplied alloys are accompanied by full verifiable trace-element assays, enabling metallurgical engineers to calibrate chemistry with pinpoint precision.`,
    category: 'Steel Industry',
    author: 'Chief Metallurgical Consultant',
    publishedDate: 'February 18, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    tags: ['Green Steel', 'CBAM', 'Energy Efficiency', 'Secondary Metallurgy'],
  },
  {
    id: 'navigating-global-maritime-routes-dubai',
    slug: 'navigating-global-maritime-routes-dubai',
    title: 'Logistics Resilience: Strategic Positioning at Jebel Ali Port for Seamless Ferro Alloy Transit',
    summary: 'How Dubai’s world-class maritime infrastructure enables Ferro Global Trading LLC to mitigate freight volatility and guarantee continuous supply lines to European and Mediterranean mills.',
    content: `International bulk trading requires not just commodity sourcing expertise, but seamless maritime logistics execution. The geopolitical shifts and freight rate fluctuations of recent years have emphasized the strategic indispensability of Dubai as a central global trading node.

Through our primary presence in Jumeirah Lakes Towers and streamlined container handling at Jebel Ali Port—the largest marine terminal in the Middle East—Ferro Global Trading LLC maintains:

1. Buffer Stock Capabilities: Secure bonded warehousing facilities allowing rapid breakbulk dispatch to GCC, Red Sea, and Mediterranean ports.
2. Multimodal Container Consolidation: Providing customers with combined containerized loads (e.g. 100 MT Silico Manganese + 40 MT Low Carbon FeCr) to optimize working capital.
3. Rapid Customs & Trade Documentation: Comprehensive compliance with Dubai Chamber of Commerce, certified EUR.1 movement certificates, and authenticated certificates of origin.

Our logistics team tracks vessel movements 24/7, providing buyers with real-time ETA updates from origin smelter to destination berth.`,
    category: 'Company Updates',
    author: 'Global Logistics Operations',
    publishedDate: 'January 29, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    tags: ['Maritime Logistics', 'Jebel Ali Port', 'Container Shipping', 'Dubai Hub'],
  },
  {
    id: 'chrome-ore-ferro-chrome-fundamentals',
    slug: 'chrome-ore-ferro-chrome-fundamentals',
    title: 'Chrome Ore Supply Trends and the Global Stainless Steel Production Trajectory',
    summary: 'Evaluating South African UG2 and Omani lumpy chrome ore dynamics, smelting power constraints, and price parity for Charge Chrome across major industrial hubs.',
    content: `Chrome remains the irreplaceable heart of stainless steel metallurgy. Over 80% of mined chrome ore is consumed directly in the production of Ferro Chrome, which in turn dictates the raw material cost structure of 300-series and 400-series stainless flat and long products.

In this update, we examine:
- Production constraints and power availability in the Southern African smelting belt.
- The rising prominence of Omani chrome ore concentrates, celebrated for consistent grain size and favorable Cr/Fe ratios.
- The expansion of Asian stainless melting capacity and its effect on spot availability in the Middle East and Mediterranean.

Ferro Global Trading maintains active trading desks in both metallurgical lumpy chrome ore and high-carbon ferro chrome lumps, offering our partners reliable coverage across both raw ore and smelted master alloy formats.`,
    category: 'Ferro Alloys',
    author: 'Commodity Research Analyst',
    publishedDate: 'January 12, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Chrome Ore', 'Ferro Chrome', 'Stainless Steel', 'Raw Materials'],
  },
];
