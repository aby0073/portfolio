"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Disable SSR for Typewriter-Effect to fix hydration issues
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleScroll = (e: Event) => {
      e.preventDefault();
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    };

    if (button) button.addEventListener("click", handleScroll);

    return () => {
      if (button) button.removeEventListener("click", handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "Netflix Clone",
      description: "A Netflix clone using React.js and CSS, showcasing dynamic UI with movie listings, trailers, and responsive design.",
      image: "/neflix.png",
      liveDemo: "https://net-flix-743829.netlify.app/",
      github: "https://github.com/aby0073/Netflix-Clone",
    },
    {
      title: "Real Estate",
      description: "A React Vite Real Estate Website is a fast and responsive platform designed to showcase property listings with seamless user experience.",
      image: "/real.png",
      liveDemo: "https://admirable-concha-381f43.netlify.app/",
      github: "https://github.com/aby0073/real_estate",
    },
    {
      title: "Blog App",
      description: "A simple blog application using MERN stack (MongoDB, Express, React, Node.js). The app allows users to create, view, and delete blog posts.",
      image: "/blog.png",
      liveDemo: "https://blog-app73.netlify.app/",
      github: "https://github.com/aby0073/Blog_App",
    },
    {
      title: "ERP Dashboard",
      description: "This is the frontend of an ERP (Enterprise Resource Planning) dashboard built using React.",
      image: "/erp.png",
      liveDemo: "https://erp-dashbaord11.netlify.app/",
      github: "https://github.com/aby0073/ERP_Dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center p-10">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Abin Roy</h1>
        <div className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl">
  <Typewriter
    options={{
      strings: ["MERN Stack Developer", "Web App Enthusiast", "Open Source Contributor"],
      autoStart: true,
      loop: true,
    }}
  />
</div>

        <button
          ref={buttonRef}
          className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          View Projects
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-400">About Me</h2>
        <p className="mt-4 text-gray-300">
          I am a passionate MERN Stack Developer with experience in building dynamic and scalable web applications.
          I enjoy solving complex problems, writing clean code, and continuously learning new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-400">Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {[
            { name: "HTML", src: "https://img.icons8.com/color/48/html-5--v1.png" },
            { name: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
            { name: "JavaScript", src: "https://img.icons8.com/fluency/50/javascript.png" },
            { name: "React", src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" },
            { name: "Node.js", src: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/233_Node_Js-512.png" },
            { name: "Express.js", src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
            { name: "MongoDB", src: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" },
            { name: "Tailwind CSS", src: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
            { name: "Next.js", src: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png" },
            { name: "Git", src: "https://icon.icepanel.io/Technology/svg/Git.svg" },
            { name: "GitHub", src: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png" },
          ].map((skill, index) => (
            <Image key={index} src={skill.src} alt={skill.name} width={64} height={64} priority className="w-16 h-16 hover:scale-110 transition-transform" />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-400">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <Image src={project.image} alt={project.title} width={400} height={300} priority className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <div className="mt-4 flex justify-center gap-4">
                <a href={project.liveDemo} className="text-blue-400 hover:underline">Live Demo</a>
                <a href={project.github} className="text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
