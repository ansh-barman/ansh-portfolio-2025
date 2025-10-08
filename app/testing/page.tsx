"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { AuroraBackground } from '../components/ui/aurora-background';

const prints = [
  {
    id: 1,
    text: "THIS IS A PRINT COLLECTION",
    title: "PRINT 1",
    leftImg: "/images/proto1.1.b.png",
    rightImg: "/images/proto1.1.a.png",
  },
  {
    id: 2,
    text: "INSPIRED BY CLASSIC PATTERNS",
    title: "PRINT 2",
    leftImg: "/images/proto2.1.a.png",
    rightImg: "/images/proto2.1.1.png",
  },
  {
    id: 3,
    text: "A NEW PERSPECTIVE ON TEXTILES",
    title: "PRINT 3",
    leftImg: "/images/proto3.1.a.png",
    rightImg: "/images/thuse.gif",
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

type PrintItem = {
  id: number;
  text: string;
  title: string;
  leftImg: string;
  rightImg: string;
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
      className="relative w-full h-screen flex items-center justify-center snap-start overflow-hidden"
    >

      {/* Left Image */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.img
            key={data.leftImg}
            src={data.leftImg}
            alt="print-left"
            className="absolute left-[-10%] top-1/2 w-1/3 -translate-y-1/2 rounded-xl"
            initial={{ x: "-120%", rotate: -30, opacity: 0 }}
            animate={{ x: "0%", rotate: 0, opacity: 1 }}
            exit={{ x: "-120%", rotate: -30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Right Image */}
      <AnimatePresence mode="wait">
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
      </AnimatePresence>

      {/* Center Text */}
      <div className="relative z-10 text-center">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm tracking-widest mb-4">{data.text}</p>
              <h2 className="text-5xl font-bold mb-6">{data.title}</h2>
              <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                Explore Collection
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}