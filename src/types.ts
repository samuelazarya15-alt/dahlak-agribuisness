export interface FacilityZone {
  id: string;
  name: string;
  dimensions: string;
  purpose: string;
  capacity?: string;
  iconName: string;
  category: 'livestock' | 'storage' | 'residential' | 'crops';
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: string;
  features: string[];
  imagePlaceholder: {
    url: string;
    alt: string;
    tag: string;
  };
  metrics?: {
    label: string;
    value: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'crops' | 'technology' | 'processing' | 'logistics' | 'horticulture' | 'community';
  categoryLabel: string;
  location: string;
  date: string;
  description: string;
  image: {
    url: string;
    alt: string;
    tag: string;
    dimensions: string;
  };
}

export interface VideoChapter {
  time: string;
  seconds: number;
  title: string;
  description: string;
}

export interface VideoSpotlightData {
  title: string;
  tigrinyaTitle: string;
  subtitle: string;
  duration: string;
  resolution: string;
  narrator: string;
  description: string;
  html5VideoUrl: string;
  html5PosterUrl: string;
  youtubeVideoId: string;
  chapters: VideoChapter[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  avatar: {
    url: string;
    alt: string;
    tag: string;
  };
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DigitalAppItem {
  id: string;
  name: string;
  tagline: string;
  platform: string;
  badge: string;
  description: string;
  keyFeatures: string[];
  iconName: string;
  statsMetric: string;
  statsLabel: string;
}
