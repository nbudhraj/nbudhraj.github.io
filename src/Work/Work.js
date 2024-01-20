import React from 'react';
import "./Work.css";
import Strava from "./unnamed.png";
import GA from "./download.png";
import UCSD from "./ucsd.png";
import WIC from "./wic.jpg"
import WorkCard from "./WorkCard"
import Visa from "./vis.png"


function Work() {

  const VisaObj ={
    title: "Software Engineer", 
    date: "Jun 2023 - Present",
    skills: "Golang, Kubernetes, Docker, Microservices, Distributed Systems",
    description: "Work on the OpenVisaNet team, where we are building a next generation payments processing platform, based on distributed systems and deployed through micro services, so using Go, Kubernetes, Docker,  Kafka.",
    bullets: ["demoed transaction processing feature in front of 100 people", "participated in GenAI hackathon, where I built a tool to handle kubernetes capacity management", "hosted monthly team celebration"]

  }

  const StravaObj ={
    title: "Software Engineering Intern", 
    date: "Jun 2022 - Sep 2022",
    skills: "React, JavaScript, Ruby on Rails, GraphQL",
    description: "During my 12-week internship at Stava, I worked mostly on the frontend and was tasked with migrating features out of Rails into React-based frontends. During that migration, I also improved UI and functionality of features per customer requests by using React hooks, states, contexts, etc., and using data from GraphQL endpoints. I also met some super cool people in the process, and learned to collaborate with Product Designers, Product Managers, Frontend and Backend Engineers. In particular, I worked on Strava's Routes page and my work was shipped at the end of my internship!",
    link: "https://medium.com/strava-engineering/searching-for-success-at-strava-22b9bf205dbf"

  }

  const GaObj ={
    title: "Software Engineering Intern", 
    date: "Jun 2021 - Aug 2021",
    skills: "C/C++, Software Development Life Cycle, SWE-Hardware Interactions",
    description: "During my 10 week internship at GA-ASI, I worked on various mini-projects related to UAVs (drones). In particular, solved problems regarding UAV dashboard UI, network and latency issues, and controllers. Also worked on fixing internal simulation tools that helped employees test their work, specifically fixing lower-level bugs related to semaphores, drivers, and segmentation faults. Lastly, learned a lot about how to write comprehensive test cases for code. This was my first internship, so learned valuable lessons regarding how to transfer school work and programming skills to an industry setting."

  }

  const UCSDObj ={
    title: "Team Lead", 
    date: "Mar 2021 - May 2021",
    skills: "Node.js, HTML/CSS/JS, MongoDB, Github, Agile, Product Management",
    description: "10 week software engineering course project, where I was selected by teaching staff to lead a team in developing a bullet journal CRUD web application from scratch using Agile methodologies. Planned sprints, and led standups, retrospectives, and reviews. While I played more of a managerial role, I was very hands-on with the code and was the core developer who integrated the frontend (Node.js) and backend (MongoDB) to ensure CRUD functionalities of our application were working. Also pair-programmed a lot with frontend engineers regarding UI, held design meetings, and scheduled feedback/review meetings with teaching staff. Deployed the application on heroku, but since it was for a course project, the link is private :("

  }



  const Women ={
    title: "President, Vice-President, Web Developer", 
    date: "Aug 2020 - Jun 2023",
    skills: "Leadership, React, HTML/CSS/JS",
    description: `Women in Computing @ UCSD is an student-led organization that aims to foster a supportive environment for women interested in tech. Started out as an intern in 2020, elected as vice president in 2021, and then elected as president in 2022. Hosted networking events, workshops, tech talks, and socials. In 2020, spent one month collaborating with 10 other members of Women in Computing to redesign and develop our organization's website from scratch. Pair-programmed and was primarily responsible for developing core features such as Calendar section (synced w/ Google Calendar), Photo Gallery, and resizable navigation bar.`,
    link: "https://wic.ucsd.edu/",
  }



  return (
    <div className="work">
      <a href="/"><div className="header">NB</div></a>
      <main className="content">
        <div>
          <h1 className="title">Work</h1>
        </div>
        <ul className="jobs" >
          <WorkCard image={Visa} title="Visa" workObject={VisaObj}></WorkCard>
          <WorkCard image={Strava} title="Strava" workObject={StravaObj}></WorkCard>
          <WorkCard image={GA} title="General Atomics" workObject={GaObj}></WorkCard>
          <WorkCard image={WIC} title="Women in Computing" workObject={Women}></WorkCard>
        </ul>
      </main>
    </div>
  );
}

export default Work;
