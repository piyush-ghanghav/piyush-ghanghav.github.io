export interface CodingProfile {
  platform: string;
  link: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  skills: Array<{
    id: string;
    title: string;
  }>;
}