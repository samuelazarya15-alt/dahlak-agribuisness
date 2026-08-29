// Official Authentic Photographic Assets of Dahlak Agribusiness & Vocational Center
// Direct static imports to ensure Vite asset bundling and optimal performance

import imgHeroDroneFarm from '../assets/images/dahlak_hero_drone_farm_1788007977071.jpg';
import imgHydroponicLettuce from '../assets/images/dahlak_hydroponic_lettuce_1788008000185.jpg';
import imgCosmeticLab from '../assets/images/dahlak_cosmetic_lab_1788008014767.jpg';
import imgGraduationCeremony from '../assets/images/dahlak_graduation_ceremony_1788008028297.jpg';
import imgAgroValueProducts from '../assets/images/dahlak_agro_value_products_1788008041751.jpg';
import imgUiriInstitute from '../assets/images/dahlak_uiri_institute_1788008062199.jpg';
import imgFieldFarmers from '../assets/images/dahlak_field_farmers_1788008077021.jpg';
import imgIndustrialBaking from '../assets/images/dahlak_industrial_baking_1788008091337.jpg';
import imgTradeExpo from '../assets/images/dahlak_trade_expo_1788008104073.jpg';
import imgHygieneCohort from '../assets/images/dahlak_hygiene_cohort_1788008161930.jpg';
import imgClassroomNotes from '../assets/images/dahlak_classroom_notes_1788008175059.jpg';
import imgFinanceRecords from '../assets/images/dahlak_finance_records_1788008190672.jpg';
import imgRiverWaterSource from '../assets/images/dahlak_river_water_source_1788008205652.jpg';
import imgFlagCelebration from '../assets/images/dahlak_flag_celebration_1788008220426.jpg';

export interface AuthenticPhoto {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  category: 'training' | 'farming' | 'processing' | 'institution' | 'leadership' | 'finance';
  categoryLabel: string;
  location: string;
  description: string;
  badge?: string;
}

export const DAHLAK_REAL_IMAGES: Record<string, string> = {
  logo: '/images/dahlak_logo.png', // Place your real logo in /public/images/dahlak_logo.png
  heroDroneFarm: imgHeroDroneFarm, // PRESERVED DRONE IMAGE AS REQUESTED
  hydroponicLettuce: imgHydroponicLettuce,
  cosmeticLab: imgCosmeticLab,
  graduationCeremony: imgGraduationCeremony,
  agroValueProducts: imgAgroValueProducts,
  uiriInstitute: imgUiriInstitute,
  fieldFarmers: imgFieldFarmers,
  industrialBaking: imgIndustrialBaking,
  tradeExpo: imgTradeExpo,
  hygieneCohort: imgHygieneCohort,
  classroomNotes: imgClassroomNotes,
  financeRecords: imgFinanceRecords,
  riverWaterSource: imgRiverWaterSource,
  flagCelebration: imgFlagCelebration,
};

export const AUTHENTIC_GALLERY_COLLECTION: AuthenticPhoto[] = [
  {
    id: 'real-1',
    url: imgHygieneCohort,
    title: 'Vocational Training Cohort & Hygiene Workshop',
    subtitle: 'Hands-on Apprenticeship & Food Safety Protocol',
    category: 'training',
    categoryLabel: 'Vocational Cohort',
    location: 'Dahlak Center Main Campus',
    description: 'Trainees and instructors wearing certified hygiene hairnets, protective aprons, and masks following strict food processing and hygiene standards outside the training facility.',
    badge: 'Core Cohort',
  },
  {
    id: 'real-2',
    url: imgCosmeticLab,
    title: 'Cosmetics & Soap Value Addition Formulation',
    subtitle: 'Practical Chemistry & Organic Product Manufacturing',
    category: 'processing',
    categoryLabel: 'Value Addition Lab',
    location: 'Bunga Practical Formulation Laboratory',
    description: 'Instructor in Dahlak-embroidered lab coat demonstrating high-speed immersion homogenization and chemical formulation of mineral oils, salicylic treatments, and organic soaps.',
    badge: 'Lab Formulation',
  },
  {
    id: 'real-3',
    url: imgGraduationCeremony,
    title: 'Accredited Certification & Graduation Ceremony',
    subtitle: 'Empowering Youth & Agripreneurs with Official Diplomas',
    category: 'training',
    categoryLabel: 'Graduation Ceremony',
    location: 'Vocational Institute Auditorium Grounds',
    description: 'Proud cohort of young men and women in formal attire holding their official completion certificates and diplomas alongside instructors, ready to launch agricultural enterprises.',
    badge: 'Certified Alumni',
  },
  {
    id: 'real-4',
    url: imgHydroponicLettuce,
    title: 'Organic Hydroponics & Greenhouse Lettuce Systems',
    subtitle: 'Modern Shade-Cloth & Controlled Nutrient Agriculture',
    category: 'farming',
    categoryLabel: 'Hydroponics & Crops',
    location: 'Luweero Demonstration Farm Greenhouse',
    description: 'Director Yonas Hadgu presenting healthy rows of organic red and green oakleaf lettuce cultivated in clean PVC hydroponic channels under protective shade netting.',
    badge: '100% Bio Organic',
  },
  {
    id: 'real-5',
    url: imgAgroValueProducts,
    title: 'Commercial Value-Added Organic Product Line',
    subtitle: 'Packaged Handcrafted Lotions, Soaps & Cleansers',
    category: 'processing',
    categoryLabel: 'Manufactured Goods',
    location: 'Dahlak Agro-Processing Depot',
    description: 'Bottled botanical shampoos, golden nourishing body oils, jars of moisturizing creams, and liquid detergents produced during hands-on student enterprise workshops.',
    badge: 'Market-Ready',
  },
  {
    id: 'real-6',
    url: imgUiriInstitute,
    title: 'Uganda Industrial Research Institute (UIRI) Partnership',
    subtitle: 'National Research & Industrial Incubation Support',
    category: 'institution',
    categoryLabel: 'Research Partnership',
    location: 'Uganda Industrial Research Institute, Kampala',
    description: 'Strategic collaboration with national industrial research bodies to ensure product standardization, microbiological testing, and food safety validation.',
    badge: 'Institutional Partner',
  },
  {
    id: 'real-7',
    url: imgIndustrialBaking,
    title: 'Industrial Food Processing & Commercial Baking Ovens',
    subtitle: 'Commercial Machinery & Large-Scale Agro-Processing',
    category: 'processing',
    categoryLabel: 'Industrial Baking',
    location: 'UIRI Agro-Processing Facility',
    description: 'Director Yonas Hadgu inspecting multi-deck stainless steel commercial baking ovens and rack systems with senior industrial technicians.',
    badge: 'Commercial Scale',
  },
  {
    id: 'real-8',
    url: imgTradeExpo,
    title: 'International Trade Expo - Food Pack Africa 2026',
    subtitle: 'Regional Agricultural Exhibition & Market Networking',
    category: 'leadership',
    categoryLabel: 'Trade Expo',
    location: 'International Trade Expo Pavilion',
    description: 'Representing Dahlak Agribusiness at regional expo showcasing modern food packaging, poultry innovations, and agricultural machinery solutions.',
    badge: 'Pan-African Expo',
  },
  {
    id: 'real-9',
    url: imgFieldFarmers,
    title: 'Rural Farmers Outreach & Field Engagement',
    subtitle: 'Community Partnership & Smallholder Farmer Support',
    category: 'farming',
    categoryLabel: 'Community Farming',
    location: 'Luweero Rural Outgrower Villages',
    description: 'Direct field collaboration with local Ugandan farmers, providing quality seed inputs, organic farming guidance, and guaranteed fair off-take agreements.',
    badge: 'Field Outreach',
  },
  {
    id: 'real-10',
    url: imgClassroomNotes,
    title: 'Classroom Theory, Business Models & Bookkeeping',
    subtitle: 'Structured Curriculum in Agri-Finance & Formulation',
    category: 'training',
    categoryLabel: 'Agri-Business Class',
    location: 'Bunga Training Center Lecture Room',
    description: 'Vocational students in lab coats taking detailed notes on cost-benefit analysis, cash flow forecasting, and recipe batch calculations.',
    badge: 'Theory & Strategy',
  },
  {
    id: 'real-11',
    url: imgFinanceRecords,
    title: 'Agri-Startup Financial Advisory & Cash Flow Review',
    subtitle: 'Budget Planning, Bookkeeping & Funding Readiness',
    category: 'finance',
    categoryLabel: 'Financial Advisory',
    location: 'Dahlak Agribusiness Executive Office',
    description: 'Reviewing seasonal farm budgets, harvest breakeven models, and capital allocation sheets with cooperative farm leaders.',
    badge: 'Financial Literacy',
  },
  {
    id: 'real-12',
    url: imgRiverWaterSource,
    title: 'Natural River Water Source & Irrigation Scouting',
    subtitle: 'Sustainable Hydrology & Clean Water Management',
    category: 'farming',
    categoryLabel: 'Irrigation & Water',
    location: 'Luweero River Basin Water Reserve',
    description: 'Assessing natural water flow rates, gravity catchment channels, and sustainable solar pump intake points for year-round drip irrigation.',
    badge: 'Clean Water',
  },
  {
    id: 'real-13',
    url: imgFlagCelebration,
    title: 'Graduation Day & Cultural Achievement Celebration',
    subtitle: 'Celebrating Youth Empowerment, Skills & Self-Reliance',
    category: 'training',
    categoryLabel: 'Graduation Day',
    location: 'Dahlak Vocational Hall',
    description: 'Graduates and community members celebrating the completion of their vocational training track, fostering entrepreneurship and self-reliance.',
    badge: 'Community Pride',
  },
  {
    id: 'real-14',
    url: imgHeroDroneFarm,
    title: 'Airborne Drone Multispectral Farm Scouting & Overview',
    subtitle: 'Precision Agriculture, NDVI Telemetry & Demonstration Farm',
    category: 'farming',
    categoryLabel: 'Drone Agronomy',
    location: 'Luweero City Council Demonstration Farm',
    description: 'Airborne drone surveying tomato plots, shade cloth hydroponics, brooding sheds (12x8m), and layer poultry facilities with real-time digital monitoring.',
    badge: 'Aerial Precision',
  },
];
