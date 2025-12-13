export interface IPortfolio {
  id: string;
  name: string;
  client: string;
  year: string;
  description: string;
  techStack: string[];
  images: string[];
}

export interface ISkill {
  name: string;
  icon: string;
  desc?: string;
}

export interface ISocialMedia {
  id: string;
  platform: string;
  url: string;
  handle: string;
}

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export interface IExperience {
  id: string;
  company: string;
  position: string;
  startYear: string;
  endYear: string;
  responsibilities: string[];
  techStack: string[];
}
