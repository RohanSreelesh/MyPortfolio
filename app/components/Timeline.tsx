import TimelineItem from "./TimelineItem";
import { TimelineType } from "../../types/type";
//import { EducationType } from "../../types/type";

const timeline: Array<TimelineType> = [
    // {
    //   company: "Ross Video",
    //   location: "Ottawa, ON",
    //   year: "September 2023 - December 2023",
    //   title: "Software Developer Intern",
    //   duration: "4 months",
    //   details: [
    //     "Currently leading the automation of the Nokia Service Platform (NSP) patch tool using <strong>Bash</strong> and <strong>Ansible</strong>, aiming to increase speed and accuracy of updates while minimizing downtime.",
    //     "Leveraged <strong>Docker</strong> and <strong>Kubernetes</strong> to configure the (NSP), leading to the development of a detailed wiki that expedites future deployments.",
    //   ],
    // },
    {
      company: "TeleAI Corporation",
      location: "Ottawa, ON",
      year: "2023 Jun - 2023 August",
      title: "Software Intern",
      duration: "3 months         ",
      details: [
        "Implemented automated testing using <strong>Playwright</strong>, enhancing accuracy and streamlining the development process, resulting in saved time and more efficient workflows.",
        "Assisted in the prototyping of a key application, transforming it from <strong>Java</strong> to a <strong>React + Spring Boot framework</strong>. Contributed to planning, design, and development, setting the stage for a more robust and scalable solution that aligns with modern technology standards.",
        "Tasked with researching innovative solutions, I explored the integration of <strong>AI and ML</strong> into an existing research project. Outlined potential applications and provided strategic insights, laying the groundwork for future development.",
      ],
    },
    {
      company: "Carleton University",
      location: "Ottawa, ON",
      year: "September 2022 - December 2022",
      title: "Teaching Assistant (TA)",
      duration: "4 months",
      details: [
        "Provided one-on-one feedback and guidance to <strong>30+ students</strong> on their <strong>Python</strong> assignments.",
        "Utilized <strong>Python</strong> scripts to ensure comprehensive test coverage and assist with responsibilities.",
      ],
    },
    {
      company: "Carleton University Computer Science Society (CCSS)",
      location: "Ottawa, ON",
      year: "September 2021 - May 2022",
      title: "Volunteer Developer",
      duration: "8 months",
      details: [
        "Programmed the back-end of the <strong>Survey project</strong> in <strong>Django</strong>, allowing for response data to be stored.",
        "Collaborated with a team using <strong>Git</strong> and <strong>GitHub</strong> to seamlessly implement changes, leading to faster development.",
      ],
    },
  ];
  
  //  const education: EducationType = {
  //   university: "University of Ottawa",
  //   degree: "Bachelor of Computer Science",
  //   year: "2020 Sept - Dec 2023",
  //   gpa: "11.26/12.0",
  //   details: [
  //     "Dean's Honour List",
  //     "Entrance Scholarship",
  //     "Member of the Carleton Computer Science Society (CCSS)",
  //     "Member of the Carleton Univeristy Hacking Community (CUHacking)",
  //     "Member of the Carleton Cyber Security Club (CCSC)",
  //     "Member of the Carleton Chess Club (CCC)",
  //     "Member of the Carleton A.I Club (CAIC)",
  //   ],
  // };


const Timeline = () => {
  return (
    <section id="Timeline">
    <div className="flex flex-col justify-center my-20">
    <h1 className="my-10 text-center font-bold text-4xl">
    Timeline
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="w-full md:w-7/12 mx-auto"> {/* Centered for larger devices */}
        {timeline.map((item) => (
          <TimelineItem {...item} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Timeline;
