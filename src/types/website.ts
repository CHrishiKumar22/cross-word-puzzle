export interface WebsiteConfig {
  title: string;
  description: string;
  pages: Page[];
  theme: Theme;
}

export interface Page {
  title: string;
  path: string;
  sections: Section[];
}

export interface Section {
  type: 'hero' | 'features' | 'contact';
  content: Record<string, any>;
}

export interface Theme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}