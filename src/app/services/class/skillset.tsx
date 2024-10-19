import { Skill, SkillsDataType } from "../interface/skill";
import SkillsData from '../../../../public/data/skills.json';

class SkillSet {
  public skills:Skill[] = [];

  constructor() {
    this.transformData();
  }

  transformData(){
    this.resetSkills();

    const validSkillsData:SkillsDataType = SkillsData;

    Object.keys(validSkillsData).forEach(key => {
      const sData:Skill = validSkillsData[key];
      this.skills.push({
        key: key,
        rate: sData.rate,
        fwork_lib: sData.fwork_lib,
        projects: sData.projects
      });
    });
  }

  resetSkills(){
    this.skills = [];
  }
}

export default SkillSet;
