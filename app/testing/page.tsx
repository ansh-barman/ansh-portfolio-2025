"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { AuroraBackground } from '../components/ui/aurora-background';
import type { JSX } from "react"; 


const prints = [
  {
    id: 1,
    text: "THE AUTOMOTIVE INITIATIVE",
    subtext: "Redesigning the car buying experience for a leading automotive startup.",
    title: "TorqHeads",
    leftImg: "/images/proto1.1.0.png",
    rightImg: "/images/proto1.1.a.png",
    metrics: [{
        label: "Conversion Lift",
        value: "↑ 25%",
        icon: (
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ),
      },
      {
        label: "User Retention",
        value: "90%+",
        icon: (
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 0012 4.043c-3.51 0-6.685 1.76-8.59 4.433M19 19v-5h-.581m-15.356-2A8.001 8.001 0 0012 19.957c3.51 0 6.685-1.76 8.59-4.433" />
          </svg>
        ),
      },
      {
        label: "Time on Site",
        value: "↑ 45 seconds",
        icon: (
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 2,
    text: "INSPIRED BY CLASSIC PATTERNS",
    subtext: "Redesigning the car buying experience for a leading automotive startup.",
    title: "ExpertLancing Website",
    leftImg: "/images/proto2.1.0.png",
    rightImg: "/images/proto2.1.1.png",
    metrics: [{
        label: "Conversion Lift",
        value: "↑ 25%",
        icon: (
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ),
      },
      {
        label: "User Retention",
        value: "90%+",
        icon: (
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 0012 4.043c-3.51 0-6.685 1.76-8.59 4.433M19 19v-5h-.581m-15.356-2A8.001 8.001 0 0012 19.957c3.51 0 6.685-1.76 8.59-4.433" />
          </svg>
        ),
      },
      {
        label: "Time on Site",
        value: "↑ 45 seconds",
        icon: (
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 3,
    text: "SMARTER INSIGHTS FOR SAFER CHEMISTRY",
    subtext: "Redesigning the car buying experience for a leading automotive startup.",
    title: "Chemora",
    leftImg: "/images/proto3.1.0.png",
    rightImg: "/images/thuse.gif",
    metrics: [{
        label: "Conversion Lift",
        value: "↑ 25%",
        icon: (
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ),
      },
      {
        label: "User Retention",
        value: "90%+",
        icon: (
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 0012 4.043c-3.51 0-6.685 1.76-8.59 4.433M19 19v-5h-.581m-15.356-2A8.001 8.001 0 0012 19.957c3.51 0 6.685-1.76 8.59-4.433" />
          </svg>
        ),
      },
      {
        label: "Time on Site",
        value: "↑ 45 seconds",
        icon: (
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 4,
    text: "PROJECT WORKFLOW, SIMPLIFIED",
    subtext: "Redesigning the car buying experience for a leading automotive startup.",
    title: "ExpertShare",
    leftImg: "/images/proto4.1.0.png",
    rightImg: "/images/thuse.gif",
    metrics: [{
        label: "Conversion Lift",
        value: "↑ 25%",
        icon: (
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ),
      },
      {
        label: "User Retention",
        value: "90%+",
        icon: (
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 0012 4.043c-3.51 0-6.685 1.76-8.59 4.433M19 19v-5h-.581m-15.356-2A8.001 8.001 0 0012 19.957c3.51 0 6.685-1.76 8.59-4.433" />
          </svg>
        ),
      },
      {
        label: "Time on Site",
        value: "↑ 45 seconds",
        icon: (
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 5,
    text: "A NEW PERSPECTIVE ON TEXTILES",
    subtext: "Redesigning the car buying experience for a leading automotive startup.",
    title: "StanVid",
    leftImg: "/images/proto3.1.0.png",
    rightImg: "/images/thuse.gif",
    metrics: [{
        label: "Conversion Lift",
        value: "↑ 25%",
        icon: (
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        ),
      },
      {
        label: "User Retention",
        value: "90%+",
        icon: (
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 0012 4.043c-3.51 0-6.685 1.76-8.59 4.433M19 19v-5h-.581m-15.356-2A8.001 8.001 0 0012 19.957c3.51 0 6.685-1.76 8.59-4.433" />
          </svg>
        ),
      },
      {
        label: "Time on Site",
        value: "↑ 45 seconds",
        icon: (
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
];

export default function PrintsPage() {
  const [index, setIndex] = useState(0);

  // Each section reveals on scroll
  return (
    <div className="scrollbar-hidden relative w-full h-screen overflow-x-hidden text-white snap-y snap-mandatory">

        <div className='fixed h-screen w-full overflow-hidden z-0'>
          <div className='absolute top-0 w-full h-full bg-linear-to-b from-[#ffffff00] via-[#ffffff00] to-black'></div>
          <AuroraBackground>
            <></>
           </AuroraBackground>
        </div>

      {prints.map((p, i) => (
        <Section
          key={p.id}
          data={p}
          active={index === i}
          onInView={() => setIndex(i)}
        />
      ))}
    </div>
  );
}

type Metric = {
  label: string;
  value: string;
  icon: JSX.Element;
};

type PrintItem = {
  id: number;
  text: string;
  subtext: string;
  title: string;
  leftImg: string;
  rightImg: string;
  metrics: Metric[];
};

function Section({
  data,
  active,
  onInView,
}: {
  data: PrintItem;
  active: boolean;
  onInView: () => void;
}) {
  const { ref } = useInView({
    threshold: 0.5,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) onInView();
    },
  });

  return (
    <section
      ref={ref}
      className="relative w-11/12 mx-auto h-screen flex items-center justify-center snap-start overflow-hidden"
    >

      {/* Left Image */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.img
            key={data.leftImg}
            src={data.leftImg}
            alt="print-left"
            className="absolute left-8 top-1/2 w-[30%] -translate-y-1/2 rounded-xl"
            initial={{ x: "-120%", rotate: -30, opacity: 0 }}
            animate={{ x: "0%", rotate: 0, opacity: 1 }}
            exit={{ x: "-120%", rotate: -30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Right Image */}
      {/* <AnimatePresence mode="wait">
        {active && (
          <motion.img
            key={data.rightImg}
            src={data.rightImg}
            alt="print-right"
            className="absolute right-[-10%] top-1/2 w-1/3 -translate-y-1/2 rounded-xl"
            initial={{ x: "120%", rotate: 30, opacity: 0 }}
            animate={{ x: "0%", rotate: 0, opacity: 1 }}
            exit={{ x: "120%", rotate: 30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence> */}

      {/* Center Text */}
      <div className="relative z-10 text-center w-[28%]">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm tracking-widest mb-4 font-body">{data.text}</p>
              <h2 className="text-5xl font-bold mb-6 font-sub">{data.title}</h2>
              <p className="text-sm mb-4 font-body">{data.subtext}</p>
              <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                Explore Project
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- UPDATED RIGHT ELEMENT: PROJECT IMPACT METRICS with perspective twist --- */}
        <AnimatePresence mode="wait">
          {active && data.metrics && (
            <motion.div
              key="metrics-panel"
              className="absolute right-8 top-1/2 w-[30%] p-6 -translate-y-1/2 rounded-2xl shadow-2xl backdrop-blur-md bg-white/5 border border-white/10 origin-bottom-right rotate-y-45 lg:block hidden" // Added origin-bottom-right
              initial={{ x: "120%", opacity: 0, rotate: 30 }} // Initial rotation to match entrance
              animate={{ x: "0%", opacity: 1, rotate: 0 }}   // Animate to no rotation
              exit={{ x: "120%", opacity: 0, rotate: 30 }}    // Exit rotation
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-bold mb-6 tracking-wide text-gray-100 uppercase border-b border-white/10 pb-3">
                Project Impact
              </h3>

              <div className="space-y-6">
                {data.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-gray-800/50">
                      {metric.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-extrabold text-white">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      
      {/* Mobile-only metrics/info */}
      <div className="lg:hidden absolute bottom-10 px-4 text-center w-full">
         <p className="text-sm text-gray-400">View project details to see key impact metrics.</p>
      </div>

    </section>
  );
}