export interface GalleryItem {
  image: string;
  name: string;
  _key: string
}

export interface Feature {
  title: string;
  text: string;
  icon: string;
}

export interface Review {
  name: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ImpactItem {
  value: string;
  label: string;
  icon: string;
}

export interface PageContent {
  title: string;
  announcement: string;
  ctaLabel: string;
  heroImages: string[];
  heroBenefits: string[];
  benefitsTitle: string;
  benefits: Feature[];
  gallery: GalleryItem[];
  storyTitle: string;
  storyImage: string;
  story: string[];
  steps: Feature[];
  reviews: Review[];
  faqs: FaqItem[];
  impact: ImpactItem[];
  finalTitle: string;
  finalText: string;
  finalImage: string;
}

export interface PageResponse {
  page: PageContent;
  source: "local" | "sanity" | "fallback";
}
