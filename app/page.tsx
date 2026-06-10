'use client';

import Image from "next/image";
import TypedText from "./components/TypedText";
import Navbar from "./components/NavBar";

export default function Home() {
  const typedStrings = ["I am a Computer Science student.", "I am a Software Developer.", "I am excited to learn."];
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-slate-800">
      <Navbar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-20 px-2 bg-white dark:bg-slate-800">
        <h2 className="text-2xl font-bold">
          Hi, my name is
        </h2>
        <h1 className="text-6xl font-bold py-4">
          Ken Sterzinger
        </h1>
        <div className="text-2xl font-bold inline py-6">
          <TypedText strings={typedStrings} />
        </div>
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function AboutMe() {
  return (
    <section id="about" className="w-full pt-25 px-2 justify-center text-center">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="text-lg mt-4">
        I am an undergraduate Computer Science student at the University of Illinois Urbana-Champaign with a minor in Linguistics. I am passionate about Software Development and have experience in <strong>Full Stack Web Development</strong>, <strong>Game Development</strong>, and <strong>Machine Learning</strong>. 
      </p>
      <p className="text-lg mt-4">
        I am especially interested in subjects such as Computer Security, Natural Language Processing, and ethical practices in technology. I am excited to work on impactful projects, if you are interested in working together, please feel free to email me at the address listed in the contacts section.      
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="w-full py-25 px-2 justify-center text-center">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="text-lg mt-4">
        Here are a two of my recent projects, one of which is a collaborative school project and the other is a solo personal project. For more projects (including this website), please check out my GitHub profile linked in the contact section.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-10">
        <ProjectCard
          title="Game Development Final Project: Kingdom Crosser"
          description={<p className="text-center mt-2">A collaborative project for the UIUC Computer Science course CS 415. We developed a 2D arcade-style game using the <strong>Godot</strong> game engine and <strong>GDScript</strong>. Implements basic gameplay mechanics. The repository for this project is private, but can be shared upon request.</p>}
          imageSrc="/game-dev-project.png"
        />
        <ProjectCard
          title="Personal Project: Attendance Tracker"
          description={<p className="text-center mt-2">A website used to track attendance for my student organization. Built using <strong>Preact</strong> and <strong>TypeScript</strong>. The website includes features such as user authentication (both <strong>Google OAuth</strong> and custom email/password), a custom interactive time table, and automatic attendance check-in.</p>}
          imageSrc="/attendance-tracker.png"
        />
      </div>
      <div>
        <p className="text-lg mt-10">
          This website was built using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Typed.js</strong>.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="w-full py-15 px-2 justify-center text-center">
      <h2 className="text-4xl font-bold">Contact</h2>
      <p className="text-lg mt-4">
        If you are interested in working together, please feel free to email me at the address listed below. You can also find links to my LinkedIn and GitHub profiles below.
      </p>
      <div>
        <p className="text-lg mt-4">
          Email: <a href="mailto: knsterzinger@gmail.com" className="underline">knsterzinger@gmail.com</a>
        </p>
        <p className="text-lg mt-4">
          LinkedIn: <a href="https://www.linkedin.com/in/ken-sterzinger-b401ab1a8/" className="underline">https://www.linkedin.com/in/ken-sterzinger-b401ab1a8/</a>
        </p>
        <p className="text-lg mt-4">
          GitHub: <a href="https://github.com/ksterz" className="underline">https://github.com/ksterz</a>
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, imageSrc }: { title: string, description: React.ReactNode, imageSrc: string }) {
  return (
    <div className="h-150 flex flex-col justify-center bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4">
      <Image src={imageSrc} alt={title} width={400} height={200} className="rounded-md" />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      {description}
    </div>
  );
}