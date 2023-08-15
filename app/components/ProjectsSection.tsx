import ProjectCard from './ProjectCard';

const projects = [
  {
    name: "FitFinder",
    description:
      "FitFinder is a fitness-oriented application that connects users and trainers, offering a seamless interface for interaction and personal training needs. This application is hosted on fitfinder.ca. Built with NextJS, TailwindCSS, and Supabase as the backend, FitFinder is deployed with Vercel. ",
    image: "/FitFinder.png",
    github: "https://github.com/RohanSreelesh/FitFinder",
    link: "https://fitfinder.ca/",
    skills: ["Next.js", "React.js", "TypeScript", "Supabase", "PostgreSQL","Node.js", "Tailwind CSS", "Vercel",  ],
  },
  {
    name: "MyPortfolio",
    description: "MyPortfolio is a professional showcase highlighting my skills, achievements, and work timeline. Hosted on RohanTech.dev, this personal portfolio is built using Next.js and TailwindCSS. MyPortfolio is deployed with Vercel.",
    image: "/portfolio.png",
    github: "https://github.com/RohanSreelesh/MyPortfolio",
    link: "https://RohanTech.dev",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS",],
  },
  {
    name: "ESP32-Weather-Station",
    description:
      "This project uses an ESP32 microcontroller with a DHT22 sensor to send temperature and humidity data to an AWS IoT MQTT broker. A server, subscribed to the broker, stores the data in an SQLite database, and generates daily and weekly data graphs.",
    image: "/esp32.png",
    github: "https://github.com/RohanSreelesh/ESP32-Weather-Station",
    link: "https://github.com/RohanSreelesh/ESP32-Weather-Station",
    skills: ["C++", "MQTT", "AWS Iot Core", "ESP32", "JavaScript", "SQLite",],
  },
  {
    name: "Phishing Pole",
    description:
      "Phishing Pole is a web-based platform built with React and Express.js that aims to provide a better way to detect phishing emails and educate people about how to protect themselves against such attacks.Phishing Pole was originally developed as a submission for the HackTheHill 2023 hackathon.",
    image: "/phishing.png",
    github: "https://github.com/RohanSreelesh/Phishing-pole",
    link: "https://github.com/RohanSreelesh/Phishing-pole",
    skills: ["React", "JavaScript", "Express.js", "Node.js", "PostgreSQL", "HTML/CSS"],
  },
  {
    name: "Ghost vs Hunters",
    description:
      "Ghost vs Hunters is a simulation of a ghost hunt in a multi-room environment, where four hunters equipped with devices search for three kinds of evidence left behind by a ghost. This project was developed using C, Valgrind, and Linux.",
    image: "/ghost.png",
    github: "https://github.com/RohanSreelesh/Ghost-vs-Hunters",
    link: "https://github.com/RohanSreelesh/Ghost-vs-Hunters",
    skills: ["C", "Valgrind", "Linux"],
  },
  {
    name: "Travel Buddy",
    description:
      "Travel Buddy is a React-based web application that utilizes Google Maps and Travel Advisor APIs to help users explore nearby restaurants in a hassle-free manner. This application is built with React, JavaScript, Google Maps API, and Material UI, and provides an easy-to-use interface for exploring local restaurants.",
    image: "/travelbuddy.png",
    github: "https://github.com/RohanSreelesh/TravelBuddy",
    link: "https://github.com/RohanSreelesh/TravelBuddy",
    skills: ["React", "JavaScript", "Google Maps API", "Material UI",],
  },
]
const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-wrap justify-around">
        {projects.map((project, idx) => (
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"> {/* Adjusted width */}
            <ProjectCard key={idx} project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};


export default ProjectsSection;
