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
        metrics: (data.metrics || []).map((m: FirestoreMetric) => ({
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
      className="relative w-11/12 mx-auto h-screen flex flex-col items-center justify-center gap-10 snap-start overflow-hidden"
    >

      {/* Center Text */}
      <div className="relative z-10 text-center w-full md:w-[30%]">
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
              <h2 className="text-5xl lg:text-7xl font-heading mb-6">{data.title}</h2>
              <p className="text-sm mb-4 font-body">{data.subtext}</p>
              <Link href={`/projects/${data.title.toLowerCase().replace(/\s+/g, "")}`} className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                Explore Project
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Left Image */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.img
            key={data.leftImg}
            src={data.leftImg}
            alt="print-left"
            className=" md:absolute left-2 lg:left-0 top-1/2 w-2/3 md:w-[30%] md:-translate-y-1/2 rounded-xl"
            initial={{ x: "-120%", rotate: -30, opacity: 0 }}
            animate={{ x: "0%", rotate: 0, opacity: 1 }}
            exit={{ x: "-120%", rotate: -30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Right Metrics */}
      <AnimatePresence mode="wait">
      {active && data?.metrics && (
        <motion.div
          key="metrics-panel"
          whileHover={{ y: -8, scale: 1.02 }}
          initial={{ x: "120%", opacity: 0, rotate: 18 }}
          animate={{ x: "0%", opacity: 1, rotate: 0 }}
          exit={{ x: "120%", opacity: 0, rotate: 18 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute right-2 lg:right-0 top-1/2 w-[30%] -translate-y-1/2 rounded-2xl overflow-hidden hidden lg:block"
        >
          {/* Accent gradient strip */}
          {/* <div className="h-[3px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" /> */}

          {/* Glass shell */}
          <div className="relative p-6 backdrop-blur-xl bg-black/10 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.45)] rounded-b-2xl">
            {/* Inner highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-b-2xl bg-gradient-to-b from-white/20 to-transparent opacity-30" />

            {/* Header */}
            <div className="mb-5">
              <h3 className="text-xs tracking-[0.25em] uppercase text-white/60">
                Project Impact
              </h3>
              <div className="h-px bg-white/15 mt-3" />
            </div>

            {/* Hero metric (first item highlighted) */}
            {data.metrics[0] && (
              <div className="mb-6">
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-semibold text-white tabular-nums">
                    {data.metrics[0].value}
                  </span>
                  <span className="text-sm text-white/70 mb-2 uppercase tracking-wide">
                    {data.metrics[0].label}
                  </span>
                </div>
              </div>
            )}

            {/* Remaining metrics as premium rows */}
            <div className="space-y-4">
              {data.metrics.slice(1).map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-black/30 border border-white/10">
                      {metric.icon}
                    </div>
                    <p className="text-sm text-white/70 uppercase tracking-wide">
                      {metric.label}
                    </p>
                  </div>

                  <span className="rounded-full px-3 py-1 text-sm font-medium tabular-nums bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-white/20 text-white shadow-inner">
                    {metric.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Context line */}
            <div className="mt-6 text-xs text-white/50 tracking-wide">
              Measured after UX + IA redesign — 8 week release cycle
            </div>
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
