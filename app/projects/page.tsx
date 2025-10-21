"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AuroraBackground } from "../components/ui/aurora-background";
import type { JSX } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import Link from "next/link";
import "./projects.css";

type FirestoreMetric = {
  label: string;
  value: string;
  iconColor: "green" | "yellow" | "blue";
};

type FirestoreProject = {
  name: string;
  description: string;
  leftimg: string;
  text: string;
  metrics: FirestoreMetric[];
};

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
  metrics: Metric[];
};

export default function PrintsPage() {
  const [prints, setPrints] = useState<PrintItem[]>([]);
  const [index, setIndex] = useState(0);

  // Fetch projects from Firebase Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsData: PrintItem[] = querySnapshot.docs.map((doc, idx) => {
        const data = doc.data() as FirestoreProject;
        return {
          id: idx + 1,
          text: data.text || "Project Highlight",
          subtext: data.description || "",
          title: data.name || `Project ${idx + 1}`,
          leftImg: data.leftimg,
          metrics: (data.metrics || []).map((m: any) => ({
            label: m.label,
            value: m.value,
            icon: getMetricIcon(m.iconColor),
          })),
        };
      });
      setPrints(projectsData);
    };
    fetchProjects();
  }, []);

  return (
    <div className="scrollbar-hidden relative w-full h-screen overflow-x-hidden text-white snap-y snap-mandatory">
      {/* Aurora background */}
      <div className="fixed h-screen w-full overflow-hidden z-0">
        <div className="absolute top-0 w-full h-full bg-linear-to-b from-[#ffffff00] via-[#ffffff00] to-black"></div>
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

// Helper: returns a colored SVG icon based on metric color
function getMetricIcon(color: string): JSX.Element {
  let cls = "";
  switch (color) {
    case "green":
      cls = "text-green-400";
      break;
    case "yellow":
      cls = "text-yellow-400";
      break;
    case "blue":
      cls = "text-blue-400";
      break;
    default:
      cls = "text-white";
  }
  return (
    <svg
      className={`w-6 h-6 ${cls}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );
}

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
              <Link href={`/projects/${data.title.toLowerCase().replace(/\s+/g, "")}`} className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                Explore Project
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Metrics */}
      <AnimatePresence mode="wait">
        {active && data.metrics && (
          <motion.div
            key="metrics-panel"
            className="absolute right-8 top-1/2 w-[30%] p-6 -translate-y-1/2 rounded-2xl shadow-2xl backdrop-blur-md bg-white/5 border border-white/10 origin-bottom-right rotate-y-45 lg:block hidden"
            initial={{ x: "120%", opacity: 0, rotate: 30 }}
            animate={{ x: "0%", opacity: 1, rotate: 0 }}
            exit={{ x: "120%", opacity: 0, rotate: 30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-bold mb-6 tracking-wide text-gray-100 uppercase border-b border-white/10 pb-3">
              Project Impact
            </h3>

            <div className="space-y-6">
              {data.metrics.map((metric, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-gray-800/50">{metric.icon}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
                      {metric.label}
                    </p>
                    <p className="text-2xl font-extrabold text-white">{metric.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile-only metrics/info */}
      <div className="lg:hidden absolute bottom-10 px-4 text-center w-full">
        <p className="text-sm text-gray-400">
          View project details to see key impact metrics.
        </p>
      </div>
    </section>
  );
}
