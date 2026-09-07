export interface ChemicalElement {
  element: string; // e.g. "Mn", "Si", "C", "P", "S", "Cr", "Mo", "Al"
  name: string; // e.g. "Manganese"
  percentage: string; // e.g. "70 - 75% Min"
}

export interface TechnicalSpecification {
  sizing: string; // e.g. "10 - 50 mm (90% min), 10 - 100 mm"
  packing: string; // e.g. "1 MT Big Bags with liner on pallets / 25 kg bags / Loose Bulk"
  origin: string; // e.g. "India, South Africa, Oman, Kazakhstan"
  inspection: string; // e.g. "SGS / Intertek / Alex Stewart certified"
  applications: string[]; // e.g. ["Steelmaking deoxidizer", "Desulfurization", "Alloy addition"]
}

export interface Product {
  id: string;
  name: string;
  chemicalFormula: string;
  category: 'ferro-alloys' | 'metals-scrap' | 'minerals-ores';
  tagline: string;
  description: string;
  grades: string[];
  composition: ChemicalElement[];
  specs: TechnicalSpecification;
  imageUrl: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: 'Market Trends' | 'Ferro Alloys' | 'Steel Industry' | 'Company Updates';
  author: string;
  publishedDate: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface CompanyInfo {
  name: string;
  tradingName: string;
  domain: string;
  tagline: string;
  establishedYear: number;
  headquarters: {
    address: string;
    tower: string;
    cluster: string;
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    mapsEmbedUrl: string;
  };
  contact: {
    phonePrimary: string;
    phoneSecondary: string;
    whatsapp: string;
    emailSales: string;
    emailInfo: string;
    workingHours: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  certifications: string[];
  targetRegions: string[];
  keyPorts: string[];
}

export interface ContactInquiry {
  id: string;
  timestamp: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  productId: string;
  productName: string;
  grade: string;
  quantityMT: number;
  incoterm: 'CIF' | 'FOB' | 'CFR' | 'EXW';
  destinationPort: string;
  targetDate: string;
  message: string;
  status: 'Received' | 'Quoted' | 'Processing';
}
