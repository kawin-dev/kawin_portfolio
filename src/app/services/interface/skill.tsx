export interface Skill {
  rate: number;
  projects: string[];
  fwork_lib: string | null;
  key?: string;
}

export interface SkillsDataType {
  [key: string]: Skill;
}