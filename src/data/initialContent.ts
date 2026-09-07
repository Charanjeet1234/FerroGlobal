import { Product, BlogPost, CompanyInfo } from '../types';

export const initialCompanyInfo: CompanyInfo = {
  name: 'Ferro Global Trading LLC',
  tradingName: 'Ferro Global Trading LLC',
  tagline: 'Ferro alloy supply for steelmakers, foundries and industrial buyers',
  establishedYear: 2025,
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
    phoneSecondary: '+971 52 442 6070',
    whatsapp: '+971524426070',
    emailSales: 'sales@ferroglobal.ae',
    emailInfo: 'info@ferroglobal.ae',
    workingHours: 'Monday - Saturday: 09:00 AM – 06:00 PM (GST)',
  },
  metrics: [
    { label: 'Core product groups', value: '06', description: 'Ferro alloys and manganese ore for industrial production' },
    { label: 'Trading base', value: 'Dubai, UAE', description: 'Commercial coordination from Jumeirah Lakes Towers' },
    { label: 'Primary markets', value: '05', description: 'Middle East, Europe, Africa, India and Turkey' },
    { label: 'Established', value: '2025', description: 'Built around practical sourcing and long-term buyer relationships' },
  ],
  values: [
    {
      title: 'Practical sourcing',
      description: 'We match grade, quantity, origin and delivery requirements with suitable producers and available material.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Clear specifications',
      description: 'Product chemistry, sizing, packing and documentation are agreed before the order moves into execution.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Coordinated logistics',
      description: 'From origin loading to destination port, we keep buyers informed on documents, vessel schedules and delivery steps.',
      icon: 'Anchor',
    },
    {
      title: 'Commercial flexibility',
      description: 'We discuss workable shipment sizes, Incoterms and payment structures for each industrial requirement.',
      icon: 'Banknote',
    },
  ],
  certifications: ['Certificate of analysis', 'Pre-shipment inspection', 'Origin documentation', 'Port delivery coordination'],
  targetRegions: ['Middle East & GCC', 'Europe & Mediterranean', 'North & South Africa', 'India & South Asia', 'Turkey & Central Asia'],
  keyPorts: ['Jebel Ali Port (UAE)', 'Port of Rotterdam (NL)', 'Mersin International Port (TR)', 'Port of Durban (ZA)', 'Nhava Sheva / Mundra (IN)', 'Hamad Port (QA)'],
};

export const initialProducts: Product[] = [
  {
    id: 'ferro-manganese',
    name: 'Ferro Manganese (FeMn)',
    chemicalFormula: 'FeMn',
    category: 'ferro-alloys',
    tagline: 'High, medium and low carbon grades for steelmaking',
    description: 'Manganese-rich alloy used in steelmaking for deoxidation, desulfurization and alloy adjustment. Available in lump form to suit carbon and stainless steel production.',
    grades: [
      'High Carbon (HC) FeMn 70%',
      'High Carbon (HC) FeMn 75%',
      'Medium Carbon (MC) FeMn 75%',
      'Medium Carbon (MC) FeMn 78%',
      'Low Carbon (LC) FeMn 75%',
      'Low Carbon (LC) FeMn 78%',
    ],
    composition: [
      { element: 'Mn', name: 'Manganese', percentage: '65% - 78% by grade' },
      { element: 'C', name: 'Carbon', percentage: 'By grade' },
      { element: 'Si', name: 'Silicon', percentage: 'By grade' },
      { element: 'P', name: 'Phosphorus', percentage: 'By grade' },
      { element: 'S', name: 'Sulfur', percentage: 'By grade' },
    ],
    specs: {
      sizing: 'Lumps / powder; size by enquiry',
      packing: 'Packing by shipment requirement',
      origin: 'Origin and availability by enquiry',
      inspection: 'Certificate of analysis or inspection by request',
      applications: [
        'Oxygen scavenger and desulfurization in basic oxygen and electric arc furnaces',
        'Production of high-tensile structural beams, rebar, and pipeline steel',
        'Specialty alloy tool steels and abrasion-resistant heavy equipment plates',
      ],
    },
    imageUrl: 'https://www.sfaglobex.ae/assets/ferro-manganese-banner-qBoKYnpf.jpg',
    featured: true,
  },
  {
    id: 'silico-manganese',
    name: 'Silico Manganese (SiMn)',
    chemicalFormula: 'SiMn',
    category: 'ferro-alloys',
    tagline: 'Grades 60/14, 65/15 and 65/16 for steel production',
    description: 'Manganese-silicon alloy used to improve strength, toughness and deoxidation in steel. Supplied as lumpy material for steel mills and foundries.',
    grades: ['Grade 60/14 (Mn: 60% min, Si: 14% min)', 'Grade 65/15 (Mn: 65% min, Si: 15% min)', 'Grade 65/16 (Mn: 65% min, Si: 16% min)'],
    composition: [
      { element: 'Mn', name: 'Manganese', percentage: '60% - 70% by grade' },
      { element: 'Si', name: 'Silicon', percentage: 'By grade' },
      { element: 'C', name: 'Carbon', percentage: 'By grade' },
      { element: 'P', name: 'Phosphorus', percentage: 'By grade' },
      { element: 'S', name: 'Sulfur', percentage: 'By grade' },
    ],
    specs: {
      sizing: 'Lumps; size by enquiry',
      packing: 'Packing by shipment requirement',
      origin: 'Origin and availability by enquiry',
      inspection: 'Certificate of analysis or inspection by request',
      applications: [
        'Primary deoxidizer in commercial carbon steel billet production',
        'Foundry casting additions for spheroidal graphite and ductile iron',
        'Reinforcing bars (TMT), merchant wire rods, and automotive spring steels',
      ],
    },
    imageUrl: 'https://www.sfaglobex.ae/assets/silico-manganese-img-BpxY9m1n.jpg',
    featured: true,
  },
  {
    id: 'ferro-chrome',
    name: 'Ferro Chrome (FeCr)',
    chemicalFormula: 'FeCr',
    category: 'ferro-alloys',
    tagline: 'High carbon and low carbon grades for stainless steel',
    description: 'Chrome-bearing alloy used in stainless steel production and other corrosion-resistant applications. Available in high carbon and low carbon grades by requirement.',
    grades: [
      'High Carbon (HC) FeCr 58% - 65% Cr',
      'High Carbon (HC) FeCr 65% - 70% Cr',
      'Low Carbon (LC) FeCr 60% Cr (C: 0.05% - 0.10% max)',
      'Extra Low Carbon (ELC) FeCr (C: 0.03% max)',
    ],
    composition: [
      { element: 'Cr', name: 'Chromium', percentage: '60% - 70% by grade' },
      { element: 'C', name: 'Carbon', percentage: 'By grade' },
      { element: 'Si', name: 'Silicon', percentage: 'By grade' },
      { element: 'P', name: 'Phosphorus', percentage: 'By grade' },
      { element: 'S', name: 'Sulfur', percentage: 'By grade' },
    ],
    specs: {
      sizing: 'Lumps; size by enquiry',
      packing: 'Packing by shipment requirement',
      origin: 'Origin and availability by enquiry',
      inspection: 'Certificate of analysis or inspection by request',
      applications: [
        'Austenitic and ferritic stainless steel grades (AISI 304, 316, 430)',
        'Heat-resistant boiler tubes and turbine casing castings',
        'Wear-resistant alloy cast irons and ball mill grinding media',
      ],
    },
    imageUrl: 'https://www.sfaglobex.ae/assets/ferro-chrome-img-Bq10K0_p.jpg',
    featured: true,
  },
  {
    id: 'ferro-silicon',
    name: 'Ferro Silicon (FeSi)',
    chemicalFormula: 'FeSi',
    category: 'ferro-alloys',
    tagline: 'FeSi 65%, 70% and 75% grades for steel and foundry use',
    description: 'Silicon-iron alloy used for deoxidation, steel refining and inoculation in cast iron. Lumps, granules and lower-aluminium specifications are available.',
    grades: ['FeSi 75% (Si: 72% - 78%)', 'FeSi 70% (Si: 68% - 72%)', 'FeSi 65% (Si: 63% - 67%)', 'Low Al FeSi (Al: 0.5% max)'],
    composition: [
      { element: 'Si', name: 'Silicon', percentage: '65% - 75% by grade' },
      { element: 'Al', name: 'Aluminum', percentage: 'By grade' },
      { element: 'C', name: 'Carbon', percentage: 'By grade' },
      { element: 'P', name: 'Phosphorus', percentage: 'By grade' },
      { element: 'S', name: 'Sulfur', percentage: 'By grade' },
    ],
    specs: {
      sizing: 'Lumps / granules; size by enquiry',
      packing: 'Packing by shipment requirement',
      origin: 'Origin and availability by enquiry',
      inspection: 'Certificate of analysis or inspection by request',
      applications: [
        'Strong deoxidizer in carbon steel and silicon electrical sheets',
        'Inoculant and graphitizing agent in gray and ductile iron foundries',
        'Reduction agent in the production of metallic magnesium and low-carbon ferroalloys',
      ],
    },
    imageUrl: 'https://www.sfaglobex.ae/assets/Ferro_silicon-CxA40zQs.jpg',
    featured: true,
  },
  {
    id: 'ferro-molybdenum',
    name: 'Ferro Molybdenum (FeMo)',
    chemicalFormula: 'FeMo',
    category: 'ferro-alloys',
    tagline: 'FeMo 60% and 70% grades for alloy and stainless steel',
    description: 'Molybdenum-bearing alloy used where strength, hardenability and corrosion resistance are important. Suitable for stainless, high-strength and heat-resistant steels.',
    grades: ['FeMo 60 Standard (Mo: 60.0% min)', 'FeMo 58 Grade (Mo: 58.0% min)', 'Low Copper FeMo (Cu: 0.2% max)'],
    composition: [
      { element: 'Mo', name: 'Molybdenum', percentage: '60% - 70% by grade' },
      { element: 'C', name: 'Carbon', percentage: 'By grade' },
      { element: 'Si', name: 'Silicon', percentage: 'By grade' },
      { element: 'P', name: 'Phosphorus', percentage: 'By grade' },
      { element: 'S', name: 'Sulfur', percentage: 'By grade' },
      { element: 'Cu', name: 'Copper', percentage: 'By grade' },
    ],
    specs: {
      sizing: 'Lumps; size by enquiry',
      packing: 'Packing by shipment requirement',
      origin: 'Origin and availability by enquiry',
      inspection: 'Certificate of analysis or inspection by request',
      applications: [
        'Production of 316 and duplex grade stainless steels',
        'High-strength low-alloy (HSLA) steels and petrochemical piping',
        'Aviation and power generation heat-resistant superalloys',
      ],
    },
    imageUrl: 'https://www.sfaglobex.ae/assets/ferro-molybdenum-BIeMn6LL.jpg',
    featured: false,
  },
  // The public catalog follows SFA Globex's six core material groups.
  {
    id: 'manganese-ore',
    name: 'Manganese Ore',
    chemicalFormula: 'Mn Ore',
    category: 'minerals-ores',
    tagline: 'Natural manganese ore for ferro alloy production',
    description: 'Manganese ore feedstock for ferro manganese and silico manganese production. Available in lumpy and fines grades, subject to origin, chemistry and shipment requirements.',
    grades: ['High Grade (Mn: 44% - 48%)', 'Medium Grade (Mn: 38% - 42%)', 'Low Phosphorus Grade (P < 0.05%)'],
    composition: [
      { element: 'Mn', name: 'Manganese', percentage: '35% - 48% by grade' },
      { element: 'Fe', name: 'Iron', percentage: 'By grade' },
      { element: 'Si', name: 'Silicon', percentage: 'By grade' },
      { element: 'P', name: 'Phosphorus', percentage: 'By grade' },
    ],
    specs: {
      sizing: 'Natural ore; lumpy or fines by enquiry',
      packing: 'Packing by shipment requirement',
      origin: 'Origin and availability by enquiry',
      inspection: 'Certificate of analysis or inspection by request',
      applications: [
        'Smelting of High Carbon Ferro Manganese and Silico Manganese',
        'Battery manufacturing and chemical reagent synthesis',
      ],
    },
    imageUrl: 'https://www.sfaglobex.ae/assets/manganese_ore-A9NBX1ry.jpeg',
    featured: true,
  },
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'ferro-manganese-market-outlook-2026',
    slug: 'ferro-manganese-market-outlook-2026',
    title: 'Manganese alloys remain central to everyday steelmaking',
    summary: 'A practical look at how ferro manganese and silico manganese are selected for deoxidation, strength and consistent furnace practice.',
    content: `Manganese alloys are added to steel for practical metallurgical reasons. Ferro manganese supplies manganese for alloy adjustment and helps remove oxygen and sulfur during the melt. Silico manganese combines manganese and silicon in one addition and is widely used in carbon steel production.

  The right grade depends on the steel chemistry, furnace practice and the buyer’s target specification. High, medium and low carbon ferro manganese grades are selected according to the finished steel. Silico manganese is commonly discussed by grade, including 60/14, 65/15 and 65/16.

  Before an order is placed, buyers normally confirm the active element, carbon, silicon, phosphorus, sulfur, lump size, packing and inspection requirements. These details help the producer and buyer work to the same specification from quotation through shipment.`,
    category: 'Market Trends',
    author: 'Metallurgical Trading Desk',
    publishedDate: 'September 7, 2026',
    readTime: '3 min read',
    imageUrl: 'https://www.sfaglobex.ae/assets/ferro-manganese-banner-qBoKYnpf.jpg',
    tags: ['Ferro Manganese', 'Silico Manganese', 'GCC Steel', 'EAF Technology'],
  },
  {
    id: 'green-steel-decarbonization-alloys',
    slug: 'green-steel-decarbonization-alloys',
    title: 'Why chemistry and sizing matter in alloy selection',
    summary: 'The small details buyers confirm before shipment: active element, impurities, lump size, packing and the way the material will be added.',
    content: `A product name is only the starting point for an alloy order. The active element, impurity limits and physical form all affect how a material performs in the melt shop.

  Chemistry should be reviewed together with sizing. Consistent lumps are easier to plan for in charging and ladle additions, while fines or granules may suit a different process. Packing also matters when material is stored, moved between warehouses or shipped in containers.

  A clear enquiry should state the required grade, chemistry, size range, packing, quantity, origin preference and destination. Where required, the quotation can also include a certificate of analysis or third-party inspection before shipment.`,
    category: 'Steel Industry',
    author: 'Chief Metallurgical Consultant',
    publishedDate: 'August 26, 2026',
    readTime: '3 min read',
    imageUrl: 'https://www.sfaglobex.ae/assets/silico-manganese-img-BpxY9m1n.jpg',
    tags: ['Green Steel', 'CBAM', 'Energy Efficiency', 'Secondary Metallurgy'],
  },
  {
    id: 'navigating-global-maritime-routes-dubai',
    slug: 'navigating-global-maritime-routes-dubai',
    title: 'From Dubai enquiry to delivered material',
    summary: 'What a clear industrial order should cover: product, grade, quantity, destination, Incoterm, packing and the documents required at shipment.',
    content: `A useful commercial enquiry gives the trading desk enough information to check supply without a long back-and-forth. Start with the product and grade, then add the quantity, destination port, preferred Incoterm and target delivery window.

  Packing and documents should be stated early as well. Buyers may need a particular bag size, loose bulk shipment, certificate of analysis, certificate of origin or independent inspection. These requirements can affect the available origin and delivery schedule.

  From its Dubai base, Ferro Global coordinates the commercial conversation between buyer, producer and logistics partners. The aim is simple: agree the material and terms clearly before the shipment is booked.`,
    category: 'Company Updates',
    author: 'Global Logistics Operations',
    publishedDate: 'August 12, 2026',
    readTime: '3 min read',
    imageUrl: 'https://www.sfaglobex.ae/assets/Ferro_silicon-CxA40zQs.jpg',
    tags: ['Maritime Logistics', 'Jebel Ali Port', 'Container Shipping', 'Dubai Hub'],
  },
  {
    id: 'chrome-ore-ferro-chrome-fundamentals',
    slug: 'chrome-ore-ferro-chrome-fundamentals',
    title: 'Ferro chrome for stainless steel production',
    summary: 'Where ferro chrome fits in the melt shop, and how carbon level, chromium content and sizing influence the buying decision.',
    content: `Ferro chrome is a key alloy addition in stainless steel production. Chromium gives stainless grades their resistance to oxidation and corrosion, while the carbon level and overall chemistry determine how the material fits a particular melt.

  Buyers generally confirm chromium content, carbon range, silicon, phosphorus, sulfur, lump size, packing and origin. High carbon and low carbon grades are available for different production requirements.

  The most useful starting point is the buyer’s steel grade and intended use. With that information, the trading desk can discuss a suitable ferro chrome specification, shipment size and delivery route.`,
    category: 'Ferro Alloys',
    author: 'Commodity Research Analyst',
    publishedDate: 'July 30, 2026',
    readTime: '3 min read',
    imageUrl: 'https://www.sfaglobex.ae/assets/ferro-chrome-img-Bq10K0_p.jpg',
    tags: ['Ferro Chrome', 'Stainless Steel', 'Raw Materials'],
  },
];
