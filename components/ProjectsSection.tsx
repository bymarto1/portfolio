import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare, BsLink, BsTwitter } from "react-icons/bs";


const projects = [
  {
    name: "Freelance",
    description:
      "When the COVID pandemic hit and the world went into lockdown, I seized the opportunity to start freelancing for various groups and individuals. They needed specific scripts or bots for different websites. I worked with an extensive range of websites globally, from prominent US retailers like Walmart to the Spanish version of NVIDIA. More recently, I have been more selective in my projects, focusing on those that either interest me or contribute to my development as a programmer. These recent projects have involved creating bots for concert and sports tickets.",
    image: "/hands.png",
    github: "",
    twitter: "",
    website: "",
    startDate: "March 2020",
    endDate: "Present",
  },
  {
    name: "EscapeNotify",
    description: "EscapeNotify is among the largest reselling groups in Europe, boasting over 2000 paid members. As a developer, I was tasked with creating custom monitors for the group that spanned over 150 websites. I ensured they were faster than any competition, enabling our users to make quick purchases. This ranged from small sneaker stores to the largest online retailers across European countries. This challenge greatly expanded my knowledge on web scraping and bypassing website security.",
    image: "/escape.png",
    github: "",
    twitter: "https://twitter.com/EscapeNotify",
    website: "https://escapenotify.com/",
    startDate: "November 2020",
    endDate: "April 2022",
  },
  {
    name: "FlareRaffles",
    description:
      "FlareRaffles, now known as Novum, is the market's leading Raffle bot. In my role at FlareRaffles, I was responsible for creating and maintaining modules for clothing and shoes raffles from stores globally. I tackled raffles from small stores to custom Shopify Raffles with advanced bot protection. This position necessitated a deeper understanding of bypassing bot protection, while also considering direct user feedback from those who interacted with the bot via a Terminal executable file.",
    image: "/flareRaffles.png",
    github: "",
    twitter: "https://twitter.com/NovumRaffles",
    website: "https://whop.com/novum/",
    startDate: "January 2021",
    endDate: "February 2022",
  },
  {
    name: "Silencio",
    description:
      "Silencio was my debut project as a founder and lead developer. Initially, it started as a Discord bot designed to simulate human-like interaction within the NFT market. However, it evolved into a top-tier NFT raffle bot, serving over 500 unique users and generating revenue exceeding $200,000. \n\nSilencio expanded over time, incorporating a plethora of social media functionalities, including Instagram bot and Twitter Bot features, all developed by me using requests and resolving any challenges imposed by the social media platforms to curb bots.\n\nThe role demanded working under pressure, as modules often needed to be ready for users within days, or even hours. This meant solving all challenges and creating scripts for websites in a limited time frame.",
    image: "/silencio.png",
    github: "",
    twitter: "https://twitter.com/SilencioWL",
    website: "",
    startDate: "January 2022",
    endDate: "October 2022",
  },
  {
    name: "Dashboard for monitoring a NFT marketplace",
    description:
      "As part of my thesis, I developed this dashboard for monitoring the Blur Marketplace. I built both the frontend and the backend, connecting them to a custom monitor I made. The dashboard includes essential features like auth, team management, management of collections to monitor, settings page, and personalized Discord notifications. I also incorporated a subscription system payable with Ethereum via the Metamask extension, making it convenient for users.",
    image: "/dashboard.png",
    github: "https://github.com/bymarto1/Dashboard",
    twitter: "",
    website: "",
    startDate: "March 2023",
    endDate: "July 2023",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                      <Image
                        src={project.image}
                        alt=""
                        width={7000}
                        height={7000}
                        className="custom-rounded shadow-xl hover:opacity-70"
                      />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
                    <p className="text-md mb-2 text-neutral-600 dark:text-neutral-400">
                      Start Date: {project.startDate} - End Date: {project.endDate}
                    </p>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400" dangerouslySetInnerHTML={{__html: project.description.replace(/\n/g, "<br />")}}>
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github !== "" && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.website !== "" && (
                        <Link href={project.website} target="_blank">
                          <BsLink
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.twitter !== "" && (
                        <Link href={project.twitter} target="_blank">
                          <BsTwitter
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection