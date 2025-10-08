export interface Interview {
  id: string;
  slug: string;
  title: string;
  guest: {
    name: string;
    company: string;
    role: string;
  };
  description: string;
  longDescription: string;
  category: string;
  categoryGradient: string;
  date: string;
  duration: string;
  audioUrl?: string;
  videoUrl?: string;
  thumbnail: string;
  featured: boolean;
  tags: string[];
  links?: Array<{ label: string; url: string }>;
  transcript?: string;
  keyTakeaways?: string[];
}

export interface Work {
  id: string;
  slug: string;
  company: string;
  project: string;
  description: string;
  longDescription: string;
  impact: string;
  tags: string[];
  date: string;
  duration: string;
  role: string;
  team: string[];
  featured: boolean;
  thumbnail: string;
  images: string[];
  metrics?: Array<{ label: string; value: string }>;
  technologies: string[];
  links?: Array<{ label: string; url: string }>;
}

export interface Play {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  type: string;
  typeGradient: string;
  date: string;
  featured: boolean;
  thumbnail: string;
  images: string[];
  technologies: string[];
  links: Array<{ label: string; url: string }>;
  tags: string[];
}

