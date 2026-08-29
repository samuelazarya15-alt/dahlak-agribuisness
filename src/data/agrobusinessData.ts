import { ServiceItem, GalleryItem, TestimonialItem, StatItem, FaqItem, VideoSpotlightData, FacilityZone, DigitalAppItem } from '../types';
import { DAHLAK_REAL_IMAGES } from './dahlakImages';

export const COMPANY_INFO = {
  name: 'Dahlak Agribusiness and Vocational Center',
  shortName: 'Dahlak Agribusiness',
  slogan: 'Back to organic nature.',
  secondaryMotto: "Let's Grow Together",
  tagline: 'Empowering Communities through Practical Knowledge, Financial Literacy, AgriTech & Entrepreneurial Skills',
  founder: 'Yonas Hadgu',
  founderTitle: 'Founder & Managing Director',
  foundedYear: 2018,
  
  // Official Verified Locations
  headOfficeAddress: 'Bunga, behind Nomad Club, Gaba Rd, Kampala, Uganda',
  farmAddress: 'Agricultural Company in Luweero City Council, Uganda',
  address: 'Bunga, behind Nomad Club, Gaba Rd, Kampala & Luweero Agricultural Facility, Uganda',
  
  // Official Verified Contact Channels
  phone: '0751 400 715',
  phoneInternational: '+256 751 400 715',
  whatsapp: '+256743994935',
  whatsappDisplay: '+256 743 994 935',
  email: 'yonashadgu633@gmail.com',
  operatingHours: 'Monday – Saturday: 8:00 AM – 6:00 PM (EAT)',

  // Official About, Vision & Mission Statements
  aboutUs:
    'Dahlak Agribusiness and Vocational Center is a dedicated service provider committed to empowering individuals and communities through practical knowledge, financial literacy, cutting-edge AgriTech digital farm software, and entrepreneurial skills. We bridge the gap between traditional agriculture, smart technology, and profitable enterprise, helping farmers, startups, and aspiring professionals build sustainable livelihoods.',
  
  vision:
    'To be a leading center of excellence in agribusiness, digital farm innovation, and vocational training, driving economic growth and food security in the region.',
  
  mission:
    'To equip individuals with practical skills, financial knowledge, digital farm software solutions, and an entrepreneurial mindset needed to thrive in the agricultural sector and beyond.',
};

export const FARM_FACILITY_ZONES: FacilityZone[] = [
  {
    id: 'zone-brooding',
    name: 'Brooding Facility',
    dimensions: '12m × 8m',
    purpose: 'Specialized thermal-regulated brooding unit for day-old chicks and poultry rearing',
    capacity: '3,000+ Chicks per Cycle',
    iconName: 'Egg',
    category: 'livestock',
    description: 'Precision-heated brooding shed ensuring 98%+ chick survival rate with bio-secure ventilation and hygienic floor bedding.',
  },
  {
    id: 'zone-layers',
    name: 'Layers Poultry Unit',
    dimensions: '12m × 8m',
    purpose: 'High-density, welfare-compliant commercial egg production and vocational poultry training',
    capacity: '2,500+ Layers Housing',
    iconName: 'Bird',
    category: 'livestock',
    description: 'Automated drinking lines, nest boxes, and feed hoppers facilitating daily fresh organic egg harvest and hands-on poultry apprenticeships.',
  },
  {
    id: 'zone-feed-store',
    name: 'Feed & Equipment Store',
    dimensions: '3m × 4m',
    purpose: 'Hermetic feed formulation storage, diagnostic kits, and agricultural tool dispensary',
    capacity: '15 MT Feed & Equipment Inventory',
    iconName: 'Warehouse',
    category: 'storage',
    description: 'Dry, elevated pallet racking keeping livestock feed free from moisture and pests, alongside precision soil testing kits.',
  },
  {
    id: 'zone-workers-quarters',
    name: 'Workers & Trainee Quarters',
    dimensions: 'Staff Accommodation Complex',
    purpose: 'On-site residential quarters for agronomists, vocational interns, and farm technicians',
    capacity: 'Full-time On-site Farm Staff & Trainees',
    iconName: 'Home',
    category: 'residential',
    description: 'Comfortable on-farm living quarters enabling 24/7 livestock monitoring and immersive residential vocational training programs.',
  },
  {
    id: 'zone-crops-plots',
    name: 'Organic Horticulture & Field Plots',
    dimensions: 'Multi-acre Luweero Farmland',
    purpose: 'Open-field and trellised organic cultivation of tomatoes, sweet potatoes, green maize, and legumes',
    capacity: 'Year-Round Continuous Harvesting',
    iconName: 'Sprout',
    category: 'crops',
    description: 'Demonstration and commercial plots managed under organic permaculture and drip irrigation, supervised by Yonas Hadgu.',
  },
];

export const KEY_STATS: StatItem[] = [
  {
    id: 'stat-1',
    value: '4,500+',
    label: 'Trainees & Farmers Empowered',
    sublabel: 'Equipped with practical agribusiness skills',
    iconName: 'Users',
  },
  {
    id: 'stat-2',
    value: '5 Core',
    label: 'Agribusiness & Tech Sectors',
    sublabel: 'Consultation, Agripreneurship, Finance, Training & AgriTech',
    iconName: 'Award',
  },
  {
    id: 'stat-3',
    value: '4+ Digital',
    label: 'Apps & Software Launched',
    sublabel: 'Empowering smart digital farms across Uganda',
    iconName: 'Cpu',
  },
  {
    id: 'stat-4',
    value: '2 Facilities',
    label: 'Head Office & Luweero Farm',
    sublabel: 'Bunga Kampala & Luweero City Council Hub',
    iconName: 'Landmark',
  },
];

export const CORE_PILLARS = [
  {
    title: 'Practical Knowledge & Soil Health',
    description: 'Hands-on instruction in organic soil enrichment, crop protection, and modern livestock management.',
    icon: 'Sprout',
  },
  {
    title: 'Agripreneurship & Market Access',
    description: 'Bridging the critical gap between farming and profitable commercial markets through value addition.',
    icon: 'TrendingUp',
  },
  {
    title: 'Financial Literacy & Startup Support',
    description: 'Equipping agri-startups with cash flow budgeting, funding strategies, and scalable business plans.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Vocational Empowerment',
    description: 'Direct apprenticeship programs that enhance youth and community employability and self-reliance.',
    icon: 'Award',
  },
  {
    title: 'AgriTech & Digital Farm Software',
    description: 'Multi-platform mobile apps and IoT software suites that digitize flock tracking, yield analytics, and soil telemetry.',
    icon: 'Cpu',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'agricultural-consultation',
    title: 'Agricultural Consultation',
    category: 'Consultation',
    iconName: 'Compass',
    shortDescription: 'Expert advice on crop production, livestock management, soil health, and farming techniques.',
    fullDescription: 'Dahlak Agribusiness provides dedicated on-field and digital agronomy consultation for smallholder farmers, commercial landowners, and agricultural institutions. Our experts assess soil chemistry, formulate tailored livestock feeding programs, diagnose crop pests organically, and design high-yielding farm layouts.',
    features: [
      'Comprehensive soil nutrient and pH diagnostic testing',
      'Customized crop production calendars & organic pest management',
      'Livestock healthcare, poultry brooding and vaccination schedules',
      'Irrigation design and water harvesting strategy'
    ],
    imagePlaceholder: {
      url: DAHLAK_REAL_IMAGES.fieldFarmers,
      alt: 'Director Yonas Hadgu consulting smallholder farmers in the field',
      tag: '[AUTHENTIC_PHOTO] - Yonas Hadgu field consultation & outreach',
    },
    metrics: {
      label: 'Consultation Satisfaction',
      value: '99.4%',
    },
  },
  {
    id: 'agripreneurship',
    title: 'Agripreneurship & Value Addition',
    category: 'Enterprise',
    iconName: 'TrendingUp',
    shortDescription: 'Guidance on starting and growing agriculture based businesses, business planning, market access, and value addition.',
    fullDescription: 'We help aspiring agripreneurs turn raw farm produce into lucrative, market-ready commercial enterprises. From formulation of botanical soaps and organic cosmetics to securing reliable supermarket off-take agreements, we guide businesses through every step of commercialization.',
    features: [
      'Agricultural business model formulation and market feasibility',
      'Cosmetics, soaps, and lotions value addition formulation',
      'Post-harvest value addition and food packaging standards',
      'Direct buyer linkage and supermarket off-take negotiation'
    ],
    imagePlaceholder: {
      url: DAHLAK_REAL_IMAGES.cosmeticLab,
      alt: 'Hands-on value addition laboratory formulation of organic soaps and lotions',
      tag: '[AUTHENTIC_PHOTO] - Value addition lab & chemical formulation',
    },
    metrics: {
      label: 'Agri-Startups Launched',
      value: '180+',
    },
  },
  {
    id: 'agri-startup-finance',
    title: 'Agri-Startup & Financial Management',
    category: 'Finance',
    iconName: 'Calculator',
    shortDescription: 'Support for Agri-startups with budgeting, funding strategies, cash flow management, and financial planning.',
    fullDescription: 'Lack of structured financial discipline is the primary reason agricultural ventures struggle. Dahlak equips agri-startups with practical bookkeeping systems, seasonal cash-flow projections, capital expenditure planning, and bankable grant/loan proposals.',
    features: [
      'Seasonal farm budget forecasting and cost-benefit analysis',
      'Cash flow management tailored to harvest cycles',
      'Grant writing, investor pitching and credit readiness',
      'Farm record-keeping software and mobile accounting systems'
    ],
    imagePlaceholder: {
      url: DAHLAK_REAL_IMAGES.financeRecords,
      alt: 'Agribusiness financial analysis, bookkeeping ledgers, and budgeting review',
      tag: '[AUTHENTIC_PHOTO] - Agri-financial planning & cash flow review',
    },
    metrics: {
      label: 'Financial Literacy Rate',
      value: '96% Grad',
    },
  },
  {
    id: 'vocational-skill-training',
    title: 'Vocational Skill Training',
    category: 'Training',
    iconName: 'GraduationCap',
    shortDescription: 'Hands-on training programs in agriculture, agri-business, and related trades to enhance employability and self-reliance.',
    fullDescription: 'Conducted at our Luweero City Council training farm and Bunga center, our vocational cohorts gain practical, dirty-hands experience in brooding management (12x8m units), layer poultry systems (12x8m units), nursery horticulture, organic cosmetics formulation, and food hygiene standards.',
    features: [
      'Immersive residential and weekend apprenticeship tracks',
      'Poultry husbandry: Brooding & egg layer mastery',
      'Greenhouse and organic vegetable production techniques',
      'Recognized certificate of completion and mentorship network'
    ],
    imagePlaceholder: {
      url: DAHLAK_REAL_IMAGES.hygieneCohort,
      alt: 'Vocational training students in protective hygiene gear at Dahlak center',
      tag: '[AUTHENTIC_PHOTO] - Vocational training cohort at Dahlak Center',
    },
    metrics: {
      label: 'Cohort Graduates',
      value: '4,500+',
    },
  },
  {
    id: 'agritech-digital-farm',
    title: 'AgriTech, Aerial Drones & Digital Farm',
    category: 'AgriTech',
    iconName: 'Cpu',
    shortDescription: 'Airborne drone surveying, multispectral crop health scanning, and digital farm intelligence empowering modern organic agriculture.',
    fullDescription: 'Dahlak Agribusiness merges traditional organic cultivation with next-generation aerial precision. Operating autonomous agricultural drones hovering on air above our Luweero demonstration farm, we conduct real-time NDVI vegetation mapping, thermal livestock canopy inspection, and precision digital farm monitoring.',
    features: [
      'Airborne drone aerial scouting: Real-time multispectral NDVI crop health scanning',
      'Thermal canopy diagnostics for 12x8m poultry brooding & layer facilities',
      'High-resolution topographical land elevation & drainage route mapping',
      'Automated digital farm telemetry bridging organic nature with data precision'
    ],
    imagePlaceholder: {
      url: DAHLAK_REAL_IMAGES.heroDroneFarm,
      alt: 'Agricultural drone surveying Luweero demonstration farm from the air',
      tag: '[AUTHENTIC_PHOTO] - Dahlak airborne drone on air surveying Luweero farm',
    },
    metrics: {
      label: 'Aerial Precision',
      value: 'Sub-Centimeter',
    },
  },
  {
    id: 'poultry-livestock-production',
    title: 'Poultry & Livestock Production',
    category: 'Livestock',
    iconName: 'Egg',
    shortDescription: 'Modern brooding (12x8m) and layers (12x8m) facilities producing quality organic eggs and healthy poultry stock.',
    fullDescription: 'Our Luweero farm features dedicated 12m × 8m brooding and layer sheds constructed with optimal bio-security, passive ventilation, and solar illumination. We produce fresh table eggs, quality pullets, and organic poultry manure for soil rejuvenation.',
    features: [
      '12m × 8m Brooding unit with thermal temperature control',
      '12m × 8m Layer house with hygienic egg collection systems',
      'Formulated organic feed storage (3m × 4m unit)',
      'Direct distribution to supermarkets, bakeries, and retail partners'
    ],
    imagePlaceholder: {
      url: DAHLAK_REAL_IMAGES.industrialBaking,
      alt: 'Commercial food-processing facility and institutional baking partnership with UIRI',
      tag: '[AUTHENTIC_PHOTO] - Industrial food processing & commercial facility',
    },
    metrics: {
      label: 'Egg Yield Purity',
      value: '100% Organic',
    },
  },
  {
    id: 'organic-crop-horticulture',
    title: 'Organic Horticulture & Field Crops',
    category: 'Cultivation',
    iconName: 'Leaf',
    shortDescription: 'Vibrant organic tomato, sweet potato, and vegetable plots following sustainable "Back to organic nature" principles.',
    fullDescription: 'Our crop production plots in Luweero demonstrate how zero-chemical, compost-fed agriculture delivers exceptional yields and superior flavor. We supply fresh tomatoes, sweet potatoes, green peppers, and hydroponic lettuce directly to community markets.',
    features: [
      'Zero synthetic pesticide protocols using neem and bio-extracts',
      'Hydroponic lettuce nutrient channels in shade-cloth greenhouse',
      'High-demand crop varieties: Table tomatoes & orange-fleshed sweet potatoes',
      'Contract farming opportunities for partner outgrowers'
    ],
    imagePlaceholder: {
      url: DAHLAK_REAL_IMAGES.hydroponicLettuce,
      alt: 'Director Yonas Hadgu presenting organic hydroponic lettuce in greenhouse',
      tag: '[AUTHENTIC_PHOTO] - Hydroponic greenhouse lettuce crop harvest',
    },
    metrics: {
      label: 'Organic Compliance',
      value: '100% Bio',
    },
  },
];

export const DIGITAL_FARM_APPS: DigitalAppItem[] = [
  {
    id: 'app-farmops',
    name: 'Dahlak FarmOps Pro',
    tagline: 'All-in-One Livestock & Crop Farm Management App',
    platform: 'Android • iOS • Web Cloud',
    badge: 'Flagship Digital App',
    iconName: 'Smartphone',
    description: 'Enables farm managers to record daily flock brooding temperatures, egg production logs, feed conversion ratios (FCR), crop spraying cycles, and labor attendance with offline synchronization.',
    keyFeatures: [
      'Daily poultry brooding & egg yield logging with automated mortality alerts',
      'Batch-by-batch feed inventory and consumption telemetry',
      'Offline-first mobile synchronization for remote rural farm areas',
      'Instant PDF performance reports for lenders and farm owners'
    ],
    statsMetric: '1,200+ Daily Logs',
    statsLabel: 'Across 480+ Farms',
  },
  {
    id: 'app-agriledger',
    name: 'AgriLedger & Financial Controller',
    tagline: 'Automated Farm Bookkeeping & Cash Flow Software',
    platform: 'Mobile App & Web Dashboard',
    badge: 'FinTech for Agriculture',
    iconName: 'Calculator',
    description: 'Designed specifically for East African agricultural business models, tracking seasonal cash flows, harvest batch margins, worker payroll, input costs, and generating bank-ready loan audit reports.',
    keyFeatures: [
      'Seasonal profit-and-loss forecasting and harvest breakeven calculators',
      'Automated expense tracking categorized by flock or crop acre',
      'Credit readiness scoring and audited export for agricultural grant applications',
      'Multi-currency support (UGX, USD) with Mobile Money integration'
    ],
    statsMetric: '99.2% Accuracy',
    statsLabel: 'In Margin Forecasts',
  },
  {
    id: 'app-agrismart-iot',
    name: 'AgriSmart IoT & Climate Telemetry',
    tagline: 'Automated Drip Irrigation & Brooding Environment Control',
    platform: 'Hardware Controller + Cloud Dashboard',
    badge: 'Smart Automation',
    iconName: 'Cpu',
    description: 'Connects soil moisture probes, water tank ultrasonic sensors, and poultry shed temperature/humidity gauges to automated solar relays for precision irrigation and climate regulation.',
    keyFeatures: [
      'Real-time soil pH, nitrogen, and moisture telemetry alerts via SMS/App',
      'Automated solar pump and solenoid valve drip irrigation scheduling',
      'Thermal monitoring for 12x8m brooding sheds with emergency heat-lamp triggers',
      'Reduces farm water and electricity wastage by up to 42%'
    ],
    statsMetric: '42% Water Saved',
    statsLabel: 'Through Precision Drip',
  },
  {
    id: 'app-agrimarket',
    name: 'Dahlak AgriMarket & Off-Take Connect',
    tagline: 'Direct Digital Marketplace for Organic Produce & Poultry',
    platform: 'Web Portal & WhatsApp Bot',
    badge: 'Market Access Software',
    iconName: 'ShoppingBag',
    description: 'Bridges smallholder producers directly to supermarket chains, hotel institutions, and wholesale grain buyers, eliminating exploitative middlemen and guaranteeing fair price settlements.',
    keyFeatures: [
      'Real-time farm produce listings with certified organic grading badges',
      'Automated bulk purchase orders with transparent pricing indexes',
      'Integrated cold-chain delivery logistics tracking from Luweero to Kampala',
      'Escrow payment protection ensuring guaranteed farmer compensation'
    ],
    statsMetric: '35 MT/Month',
    statsLabel: 'Direct Produce Traded',
  },
];


export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Vocational Training Cohort & Hygiene Standards Workshop',
    category: 'community',
    categoryLabel: 'Vocational Cohort',
    location: 'Dahlak Center Main Campus',
    date: 'Certified Workshop',
    description: 'Trainees and instructors in certified hygiene hairnets, protective aprons, and masks following strict food processing and hygiene standards outside the facility.',
    image: {
      url: DAHLAK_REAL_IMAGES.hygieneCohort,
      alt: 'Dahlak vocational training cohort in protective hygiene hairnets and aprons',
      tag: '[AUTHENTIC_PHOTO] - Vocational training cohort at Dahlak Center',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-2',
    title: 'Cosmetics & Soap Value Addition Formulation',
    category: 'processing',
    categoryLabel: 'Value Addition Lab',
    location: 'Bunga Practical Formulation Laboratory',
    date: 'Hands-on Formulation',
    description: 'Instructor in Dahlak-embroidered lab coat demonstrating high-speed immersion homogenization and chemical formulation of mineral oils, salicylic treatments, and organic soaps.',
    image: {
      url: DAHLAK_REAL_IMAGES.cosmeticLab,
      alt: 'Instructor demonstrating chemical cosmetic and soap value addition formulation',
      tag: '[AUTHENTIC_PHOTO] - Cosmetic and soap formulation laboratory',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-3',
    title: 'Accredited Certification & Graduation Ceremony',
    category: 'community',
    categoryLabel: 'Graduation Ceremony',
    location: 'Vocational Institute Auditorium Grounds',
    date: 'Annual Graduation',
    description: 'Proud cohort of young men and women in formal attire holding their official completion certificates and diplomas alongside instructors, ready to launch agricultural enterprises.',
    image: {
      url: DAHLAK_REAL_IMAGES.graduationCeremony,
      alt: 'Graduating agripreneurs holding official certificates of completion',
      tag: '[AUTHENTIC_PHOTO] - Accredited certificate graduation ceremony',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-4',
    title: 'Organic Hydroponics & Greenhouse Lettuce Systems',
    category: 'horticulture',
    categoryLabel: 'Hydroponics & Crops',
    location: 'Luweero Demonstration Farm Greenhouse',
    date: 'Bio-Organic Production',
    description: 'Director Yonas Hadgu presenting healthy rows of organic red and green oakleaf lettuce cultivated in clean PVC hydroponic channels under protective shade netting.',
    image: {
      url: DAHLAK_REAL_IMAGES.hydroponicLettuce,
      alt: 'Director Yonas Hadgu showcasing organic hydroponic greenhouse lettuce',
      tag: '[AUTHENTIC_PHOTO] - Hydroponic greenhouse crop cultivation',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-5',
    title: 'Commercial Value-Added Organic Product Line',
    category: 'processing',
    categoryLabel: 'Manufactured Goods',
    location: 'Dahlak Agro-Processing Depot',
    date: 'Packaged Products',
    description: 'Bottled botanical shampoos, golden nourishing body oils, jars of moisturizing creams, and liquid detergents produced during hands-on student enterprise workshops.',
    image: {
      url: DAHLAK_REAL_IMAGES.agroValueProducts,
      alt: 'Bottled cosmetics, soaps, lotions, and organic cleansers created by trainees',
      tag: '[AUTHENTIC_PHOTO] - Value-added commercial organic products',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-6',
    title: 'Uganda Industrial Research Institute (UIRI) Partnership',
    category: 'technology',
    categoryLabel: 'Research Partnership',
    location: 'Uganda Industrial Research Institute, Kampala',
    date: 'Institutional Collaboration',
    description: 'Strategic collaboration with national industrial research bodies to ensure product standardization, microbiological testing, and food safety validation.',
    image: {
      url: DAHLAK_REAL_IMAGES.uiriInstitute,
      alt: 'Director Yonas Hadgu at Uganda Industrial Research Institute signpost',
      tag: '[AUTHENTIC_PHOTO] - UIRI research institution collaboration',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-7',
    title: 'Industrial Food Processing & Commercial Baking Ovens',
    category: 'processing',
    categoryLabel: 'Industrial Baking',
    location: 'UIRI Agro-Processing Facility',
    date: 'Commercial Machinery',
    description: 'Director Yonas Hadgu inspecting multi-deck stainless steel commercial baking ovens and rack systems with senior industrial technicians.',
    image: {
      url: DAHLAK_REAL_IMAGES.industrialBaking,
      alt: 'Commercial industrial bakery equipment and stainless steel ovens',
      tag: '[AUTHENTIC_PHOTO] - Industrial food processing facility',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-8',
    title: 'International Trade Expo - Food Pack Africa 2026',
    category: 'technology',
    categoryLabel: 'Trade Expo',
    location: 'International Trade Expo Pavilion',
    date: 'Regional Trade Expo',
    description: 'Representing Dahlak Agribusiness at regional expo showcasing modern food packaging, poultry innovations, and agricultural machinery solutions.',
    image: {
      url: DAHLAK_REAL_IMAGES.tradeExpo,
      alt: 'Director Yonas Hadgu at Food Pack Africa trade expo pavilion',
      tag: '[AUTHENTIC_PHOTO] - Food Pack Africa international exhibition',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-9',
    title: 'Rural Farmers Outreach & Field Engagement',
    category: 'crops',
    categoryLabel: 'Community Farming',
    location: 'Luweero Rural Outgrower Villages',
    date: 'Field Consultation',
    description: 'Direct field collaboration with local Ugandan farmers, providing quality seed inputs, organic farming guidance, and guaranteed fair off-take agreements.',
    image: {
      url: DAHLAK_REAL_IMAGES.fieldFarmers,
      alt: 'Yonas Hadgu consulting smallholder farmers in rural community',
      tag: '[AUTHENTIC_PHOTO] - Rural smallholder farmers field consultation',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-10',
    title: 'Classroom Theory, Business Models & Bookkeeping',
    category: 'community',
    categoryLabel: 'Agri-Business Class',
    location: 'Bunga Training Center Lecture Room',
    date: 'Curriculum Session',
    description: 'Vocational students in lab coats taking detailed notes on cost-benefit analysis, cash flow forecasting, and recipe batch calculations.',
    image: {
      url: DAHLAK_REAL_IMAGES.classroomNotes,
      alt: 'Students in lab coats taking theory notes in classroom lecture',
      tag: '[AUTHENTIC_PHOTO] - Agri-finance classroom training session',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-11',
    title: 'Agri-Startup Financial Advisory & Cash Flow Review',
    category: 'community',
    categoryLabel: 'Financial Advisory',
    location: 'Dahlak Agribusiness Executive Office',
    date: 'Advisory Review',
    description: 'Reviewing seasonal farm budgets, harvest breakeven models, and capital allocation sheets with cooperative farm leaders.',
    image: {
      url: DAHLAK_REAL_IMAGES.financeRecords,
      alt: 'Reviewing farm budgets, cash flow ledgers, and financial plans',
      tag: '[AUTHENTIC_PHOTO] - Financial records and management review',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-12',
    title: 'Natural River Water Source & Irrigation Scouting',
    category: 'technology',
    categoryLabel: 'Irrigation & Water',
    location: 'Luweero River Basin Water Reserve',
    date: 'Hydrology Assessment',
    description: 'Assessing natural water flow rates, gravity catchment channels, and sustainable solar pump intake points for year-round drip irrigation.',
    image: {
      url: DAHLAK_REAL_IMAGES.riverWaterSource,
      alt: 'Scouting natural river waterfall water source for irrigation',
      tag: '[AUTHENTIC_PHOTO] - River water source and irrigation planning',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-13',
    title: 'Graduation Day & Cultural Achievement Celebration',
    category: 'community',
    categoryLabel: 'Graduation Day',
    location: 'Dahlak Vocational Hall',
    date: 'Graduation Celebration',
    description: 'Graduates and community members celebrating the completion of their vocational training track, fostering entrepreneurship and self-reliance.',
    image: {
      url: DAHLAK_REAL_IMAGES.flagCelebration,
      alt: 'Trainees celebrating graduation in community auditorium',
      tag: '[AUTHENTIC_PHOTO] - Graduation day and celebration event',
      dimensions: '1920x1080',
    },
  },
  {
    id: 'gal-14',
    title: 'Airborne Drone Multispectral Farm Scouting & Overview',
    category: 'technology',
    categoryLabel: 'Drone Agronomy',
    location: 'Luweero City Council Demonstration Farm',
    date: 'Precision Telemetry',
    description: 'Airborne drone surveying tomato plots, shade cloth hydroponics, brooding sheds (12x8m), and layer poultry facilities with real-time digital monitoring.',
    image: {
      url: DAHLAK_REAL_IMAGES.heroDroneFarm,
      alt: 'Autonomous agricultural drone surveying farm canopy from air',
      tag: '[AUTHENTIC_PHOTO] - Airborne drone surveying Luweero farm',
      dimensions: '1920x1080',
    },
  },
];

export const VIDEO_SPOTLIGHT_DATA: VideoSpotlightData = {
  title: 'Empowering Communities: The Dahlak Agribusiness & Vocational Journey',
  tigrinyaTitle: 'ቪድዮ ንምርኣይ - ዛንታን ስርሓትን ዳህላክ ኣግሪቢዝነስ',
  subtitle: 'An inside look at Dahlak Agribusiness and Vocational Center: practical farm training, poultry brooding & layer management in Luweero, financial literacy, and our core mission "Back to organic nature."',
  duration: '4:30 Min',
  resolution: '4K Ultra HD • 60 FPS',
  narrator: 'Featuring Yonas Hadgu (Founder & Managing Director) and Vocational Instructors',
  description: 'Step into Dahlak Agribusiness and Vocational Center’s Bunga hub and Luweero training farm. See how we empower farmers, startups, and youth through hands-on skills in brooding, layers poultry, organic horticulture, and financial literacy.',
  html5VideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  html5PosterUrl: DAHLAK_REAL_IMAGES.heroDroneFarm,
  youtubeVideoId: 'dQw4w9WgXcQ',
  chapters: [
    {
      time: '0:00',
      seconds: 0,
      title: 'Our Mission & Vision',
      description: 'Founder Yonas Hadgu explains the founding purpose of Dahlak Agribusiness and Vocational Center.',
    },
    {
      time: '1:05',
      seconds: 65,
      title: 'Agricultural Consultation & Soil Health',
      description: 'Expert diagnostic advice on organic crop production and sustainable farming techniques.',
    },
    {
      time: '2:15',
      seconds: 135,
      title: 'Luweero Farm: Brooding & Layers',
      description: 'Tour of our 12x8m brooding unit, 12x8m layer shed, and 3x4m feed storage infrastructure.',
    },
    {
      time: '3:20',
      seconds: 200,
      title: 'Agripreneurship & Financial Literacy',
      description: 'Equipping youth and startups with budgeting, cash flow forecasting, and market access.',
    },
    {
      time: '4:00',
      seconds: 240,
      title: 'Vocational Training & "Back to organic nature"',
      description: 'Hands-on apprenticeships driving food security and sustainable community livelihoods.',
    },
  ],
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Robert Kato',
    role: 'Agripreneur & Farm Owner',
    company: 'Kato Organic Poultry Farm',
    location: 'Luweero District',
    content: 'Enrolling in Dahlak’s vocational poultry program transformed my approach completely. Yonas Hadgu taught us the exact brooding temperatures, vaccination timelines, and financial record-keeping required for a 12x8m shed. My flock mortality dropped from 18% to under 2%.',
    rating: 5,
    avatar: {
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      alt: 'Portrait of Robert Kato',
      tag: '[PHOTO_SLOT_TESTIMONIAL_1]',
    },
  },
  {
    id: 'test-2',
    name: 'Grace Namubiru',
    role: 'Horticulture Entrepreneur',
    company: 'Fresh Valley Greens',
    location: 'Gaba Road, Kampala',
    content: 'The Agripreneurship and financial management guidance from Dahlak gave me the confidence to launch my organic tomato distribution business. They helped me with cash flow budgeting and connected me directly with supermarket buyers. "Let\'s Grow Together" is truly their reality.',
    rating: 5,
    avatar: {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      alt: 'Portrait of Grace Namubiru',
      tag: '[PHOTO_SLOT_TESTIMONIAL_2]',
    },
  },
  {
    id: 'test-3',
    name: 'David Ochieng',
    role: 'Youth Cooperative Lead',
    company: 'Bunga Youth Agri-Incentive Cohort',
    location: 'Bunga, Kampala',
    content: 'Dahlak Agribusiness is bridging the exact gap our community needed. Their vocational skills training is 100% practical, dirty-hands learning. We now manage our own sweet potato plots and commercial layer unit with full financial accountability.',
    rating: 5,
    avatar: {
      url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      alt: 'Portrait of David Ochieng',
      tag: '[PHOTO_SLOT_TESTIMONIAL_3]',
    },
  },
];

export const CERTIFICATIONS = [
  { name: 'Vocational Training Excellence', code: 'Center of Excellence', badge: 'Practical Accreditation' },
  { name: 'Organic Farming Standard', code: '"Back to organic nature."', badge: 'Zero Synthetic Input' },
  { name: 'Agripreneurship Certified', code: 'Financial & Business Mastery', badge: 'Startup Accelerator' },
  { name: 'Luweero City Council Hub', code: 'Recognized Agricultural Site', badge: 'Live Demonstration Farm' },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Where is Dahlak Agribusiness and Vocational Center located?',
    answer: 'Our main coordination office and training consultation hub is located in Bunga, behind Nomad Club, Gaba Rd, Kampala, Uganda. Our practical agricultural demonstration farm and poultry brooding/layers units are situated in Luweero City Council, Uganda.',
  },
  {
    id: 'faq-2',
    question: 'What are the 5 core service sectors offered by Dahlak?',
    answer: 'We specialize in: 1) Agricultural Consultation (crop production, livestock management, soil diagnostics), 2) Agripreneurship (business planning, market access, value addition), 3) Agri-Startup & Financial Management (budgeting, funding strategies, cash flow planning), 4) Vocational Skill Training (practical dirty-hands apprenticeships), and 5) AgriTech & Digital Farm Software (mobile farm management apps, IoT telemetry, and digital marketplace systems).',
  },
  {
    id: 'faq-3',
    question: 'What digital apps and software does Dahlak offer for farmers?',
    answer: 'Dahlak has launched a multi-app AgriTech ecosystem including: Dahlak FarmOps Pro (daily livestock, brooding & crop logging), AgriLedger (farm bookkeeping & grant readiness software), AgriSmart IoT (automated solar drip irrigation and brooding climate telemetry), and Dahlak AgriMarket (direct off-take marketplace connecting farmers to buyers).',
  },
  {
    id: 'faq-4',
    question: 'How do I enroll in vocational training or book an agricultural consultation?',
    answer: 'You can reach out directly via WhatsApp at +256 743 994 935, call 0751 400 715, or email yonashadgu633@gmail.com. We offer flexible schedules including weekend cohorts, intensive residential workshops at our Luweero farm, and personalized one-on-one agribusiness consulting.',
  },
  {
    id: 'faq-5',
    question: 'What poultry facilities exist at the Luweero demonstration farm?',
    answer: 'Our Luweero farm features dedicated 12m × 8m brooding facilities, 12m × 8m commercial layers housing, a 3m × 4m dry feed & equipment store, workers quarters, and open-field organic tomato and sweet potato cultivation plots.',
  },
];

