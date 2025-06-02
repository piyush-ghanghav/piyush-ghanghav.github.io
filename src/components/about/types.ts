export interface CodingProfile {
  platform: string;
  link: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  period: string;
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  grade: string;
  description: string;
  achievements: string[];
  learnings: string[];
}