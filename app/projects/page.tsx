"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from '../components/ui/aurora-background';
import "./projects.css";


const projects = [
  {
    title: "TorqHeads",
    sub_title: "Lorem Ipsum Dolor Grandi",
    resp_desc: "This portfolio showcases a collection of innovative web development projects, each designed with performance, accessibility, and user experience in mind. From dynamic interfaces to robust backends, every build reflects a thoughtful approach to modern development. Tools used include React, Next.js, Tailwind CSS, and more, ensuring clean, scalable, and responsive solutions.",
    description: "TorqHeads is a modern platform designed for automotive enthusiasts to explore, connect, and stay updated with the industry. It offers a streamlined experience featuring blogs, news, videos, and a dedicated forum, all within a minimal and intuitive interface. What sets TorqHeads apart is its goal to unify the automotive space. While existing communities and marketplaces serve specific needs well, there isn’t yet a single destination where users can access both rich content and a wide range of automotive products. The upcoming TorqHeads marketplace aims to bridge this gap. Local sellers and small online shops will be able to list everything from car parts to enthusiast merchandise, making it easier for users to find what they need in one place. Built using Next.js, Tailwind CSS, Firebase, Node.js, and Express.js, TorqHeads delivers a fast, seamless experience tailored for the modern automotive community.",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Node.js", "Express.js", "Figma", "Illustrator"],
    liveLink: "#",
    codeLink: "#",
    images: [
      "/images/proto1.1.b.png",
    ],
  },
  {
    title: "Company Website",
    sub_title: "Lorem Ipsum Dolor Grandi",
    resp_desc: "This portfolio showcases a collection of innovative web development projects, each designed with performance, accessibility, and user experience in mind. From dynamic interfaces to robust backends, every build reflects a thoughtful approach to modern development. Tools used include React, Next.js, Tailwind CSS, and more, ensuring clean, scalable, and responsive solutions.",
    description: "The Expertlancing website serves as the company's digital front, designed to inform and engage potential clients by showcasing our services, industry coverage, and domain expertise. It also acts as a central space for sharing insights through articles, blogs, reports, and case studies. I worked as the frontend developer and UI/UX designer on this project, collaborating with one other team member to build the site from the ground up. The development stack includes ReactJS, TailwindCSS, NodeJS, ExpressJS, and MongoDB. On the design side, I used Figma for prototyping and interface design, and Illustrator for creating supporting visuals and graphics. The website is live and in continuous development, with regular improvements to the user interface and experience based on evolving content and strategic goals.",
    tech: ["React", "TailwindCSS", "Node.js" , "MongoDB", "Figma", "Illustrator"], 
    liveLink: "#",
    codeLink: "#",
    images: [
      "/images/proto2.1.a.png",
    ],
  },
  {
    title: "Chemora",
    sub_title: "Lorem Ipsum Dolor Grandi",
    resp_desc: "This portfolio showcases a collection of innovative web development projects, each designed with performance, accessibility, and user experience in mind. From dynamic interfaces to robust backends, every build reflects a thoughtful approach to modern development. Tools used include React, Next.js, Tailwind CSS, and more, ensuring clean, scalable, and responsive solutions.",
    description: "Chemora is a chemical intelligence platform that helps industry professionals identify safer alternatives to banned or regulated chemicals. Designed with R&D teams and chemical experts in mind, the platform enables users to search a rich database using advanced, precise queries aligned with global regulatory frameworks. It also provides a powerful comparison interface that visualizes key differences between restricted substances and their potential substitutes. Built using HTML, CSS, JavaScript, Django, and MongoDB, Chemora combines a robust backend with a clear, data-driven frontend experience. While the current version is live and in use, we are actively developing a new iteration to improve both functionality and user experience.",
    tech: ["HTML", "CSS", "JavaScript", "Django", "MongoDB", "Figma", "Github"],
    liveLink: "#",
    codeLink: "#",
    images: [
      "/images/proto3.1.a.png",
    ],
  },
];


export default function Home() {

  const [modalImage, setModalImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // Trap ESC for modal
  const escHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setModalImage(null);

    // Arrow key navigation
    if (e.key === "ArrowDown" && activeIndex < projects.length - 1) {
      const nextSection = document.getElementById(`project-${activeIndex + 1}`);
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }

    if (e.key === "ArrowUp" && activeIndex > 0) {
      const prevSection = document.getElementById(`project-${activeIndex - 1}`);
      prevSection?.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeIndex]);

  // Track scroll position for active dot & keys
  useEffect(() => {
    window.addEventListener("keydown", escHandler);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const newIndex = projects.findIndex((_, index) => {
        const el = document.getElementById(`project-${index}`);
        return el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos;
      });
      if (newIndex !== -1) setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("keydown", escHandler);
      window.removeEventListener("scroll", onScroll);
    };
  }, [escHandler]);

  useEffect(() => {
    const sectionElements = document.querySelectorAll("section[id^='project-']");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.id.split("-")[1]);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc);
    setTimeout(() => {
      modalRef.current?.focus();
    }, 100);
  };

  return (
    <div className="relative">
      <div className="absolute z-49">
        {/* Project scroll container */}
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth z-0">
          {projects.map((project, index) => (
            <motion.section
              key={index}
              id={`project-${index}`} 
              className="h-screen snap-start flex flex-col justify-center items-start text-left px-6 text-white md:w-[85%] mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="md:text-7xl text-4xl font-heading">{project.title}</h2>
              <p className="md:text-sm md:mt-6 md:ml-4 text-xs mt-2 ml-1">{project.sub_title}</p>
            <div className="md:flex items-start justify-start gap-4 w-full mt-6">
              {/* Image grid viewer (scaled down collage-style) */}
              <div className="aspect-[4/3] w-full md:w-[50%] mb-6 md:px-4 overflow-hidden rounded-xl relative">
                <div
                  className="relative w-full h-full cursor-zoom-in"
                  onClick={() => openModal(project.images[0])}
                >
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} Preview`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="md:w-[50%]">
                <div className="flex gap-2 mb-5 flex-wrap justify-start">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-linear-to-r from-[#0D1B2A] to-[#1B263B] text-white py-2 px-4 text-xs rounded-3xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-md hidden md:block mb-5">{project.description}</p>
                <p className="text-md md:hidden line-clamp-2 mb-5">{project.resp_desc}</p>
                {/* Link */}
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start gap-1 text-white text-sm rounded hover:text-blue-700 underline">
                  Live Demo
                  <i className="fa-solid fa-arrow-right-long text-[10px] mt-[5px]"></i>
                </a>
              </div>
            </div>
                

                
            </motion.section>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="z-50 flex gap-4 md:flex-col fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2">
          {projects.map((_, index) => (
            <a
              key={index}
              href={`#project-${index}`}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeIndex === index ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            ></a>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {modalImage && (
            <motion.div
              className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalImage(null)} // Close on background click
            >
              <motion.div
                ref={modalRef}
                tabIndex={-1}
                className="relative w-[90vw] h-[55vh] max-w-5xl outline-none"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when image is clicked
                onKeyDown={(e) => {
                  if (e.key === "Tab") {
                    e.preventDefault(); // Optional: trap focus
                  }
                }}
              >
                <Image
                  src={modalImage}
                  alt="Zoomed Project"
                  fill
                  className="object-contain rounded-xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AuroraBackground>
       <></>
      </AuroraBackground>
    </div>
  );
}
