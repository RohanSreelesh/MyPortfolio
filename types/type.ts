export type TimelineType = {
    company: string;
    location: string;
    year: string;
    title: string;
    duration: string;
    details: Array<string>;
}
export type EducationType = {
    university: string;
    degree: string;
    year: string;
    gpa: string;
    details: Array<string>;
};

export type Project = {
    link: string;
    image: string;
    name: string;
    description: string;
    skills: string[];
    github: string;
  };
  
export interface ProjectCardProps {
    project: Project;
  }