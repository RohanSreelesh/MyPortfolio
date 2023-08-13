import React from "react"
import Image from "next/image"

const skills = [

  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Java" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" }, 
  { skill: "AWS IoT" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
 
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 md:pt-16 pb-0">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
            Hi, I'm Rohan and I am a{" "}
            third-year Computer Science student at Carleton University in Ottawa, specializing in <strong>AI and Machine Learning. </strong>
            I am an ambitious Computer Science Student and Software Engineer, driven by self-motivation and a passion to innovate within the field of technology.
            </p>
            <br />
            <p>
            I am on a journey to explore the dynamic landscape of technology, delving into languages like <strong>JavaScript, Java, C, C++, and Python.</strong>
            </p>
            <br />
            <p>
            My free time often finds me experimenting with the latest technological trends, including working with <strong>Next.js</strong>, or diving into projects like building real-time weather stations with <strong>ESP32 microcontrollers</strong>. 
            I believe that the hands-on approach, whether it's exploring new frameworks like <strong>Next.js</strong> or tinkering with hardware, fosters innovation and growth.
            </p>
            <br />
            <p>
            
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:right-18 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
