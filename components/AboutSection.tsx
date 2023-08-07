import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Javascript (React, Next, Node, Express)" },
  { skill: "SQL" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "C#" },
  { skill: "Java" },
  { skill: "Solidity" },
  { skill: "Web Scraping (Requests, BeautifulSoup, Selenium)" },
  { skill: "Git" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
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
              Hi, my name is Pau Martori and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" proactive"}</span>, and
              <span className="font-bold">{" efficient"}</span> software engineer
              based in Barcelona, Spain.
            </p>
            <br />
            <p>
              I graduated from 'Universitat Politècnica de Catalunya (UPC)', Barcelona in 2023
              with a BS in Computer Science, in the Software Engineering path. I've been coding by myself since I started my studies and have worked as a freelancer since my second year in college (2019).
            </p>
            <br />
            <p>
            I've merged my love for coding with interests in fashion, sports, and music. Starting with web scraping to purchase limited edition shoes, I expanded into the sneaker bot business. This passion also led me to create bots for obtaining exclusive items like limited concert tickets and big sports events like the Uefa Champions League, in both cases my software helped me purchase the tickets I wanted even though the low availability. My hobbies aren't just pastimes; they fuel my innovation and creativity.
            </p>
            <br />
            <p>
            My projects showcase my ambition and commitment to excellence. From contributing to the blockchain sector to creating personalized bots for purchasing limited items, I've pursued a wide array of challenges. My ability to learn new languages and frameworks rapidly, along with my perfectionist approach, has ensured success and quality in everything I undertake.
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
            <div className="mt-4">
            <Image
              src="/hacker.png"
              alt=""
              width={325}
              height={325}
              className="rounded-xl shadow-xl hover:opacity-70"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection