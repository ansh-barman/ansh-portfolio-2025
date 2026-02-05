"use client";

import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { useEffect, useState, use } from "react";

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
  tags?: string[];
  problem?: string;
  approach?: string;
  outcome?: string;
  figmaUrl?: string;
};

// ✅ Next.js params is now a Promise — unwrap with React.use()
export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [data, setData] = useState<FirestoreProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const docRef = doc(db, "projects", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data() as FirestoreProject);
      } else {
        setData(null);
      }
      setLoading(false);
    }

    load();
  }, [id]);

  if (loading) {
    return (
      <div className="p-10 text-center text-white">Loading…</div>
    );
  }

  if (!data) {
    return (
      <div className="p-10 text-center text-white">
        <h1 className="text-2xl font-semibold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white px-6 lg:px-16 py-28 space-y-20">
      {/* ================= HERO ================= */}
      <section className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">
            Case Study
          </p>

          <h1 className="text-5xl lg:text-6xl font-regular mb-6 font-heading">
            {data.name}
          </h1>

          <p className="text-lg text-white/70 max-w-xl mb-8">
            {data.text}
          </p>

          {!!data.tags?.length && (
            <div className="flex flex-wrap gap-3">
              {data.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ===== Metrics — glass cards ===== */}
        {!!data.metrics?.length && (
          <div className="grid sm:grid-cols-3 gap-5">
            {data.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              >
                <p className="text-sm text-white/70 mb-2 tracking-wide">
                  {metric.label}
                </p>
                <p className="text-2xl font-semibold tabular-nums">
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ================= PREVIEW + DESCRIPTION ================= */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div className="shadow-2xl">
          <Image
            src={data.leftimg}
            alt={data.name}
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">
            Overview
          </p>
          <p className="text-white/80 leading-relaxed whitespace-pre-line">
            {data.description}
          </p>
        </div>
      </section>

      {/* ================= CASE STUDY BLOCKS ================= */}
      <section className="grid lg:grid-cols-3 gap-12">
        <CaseBlock title="Problem" content={data.problem} />
        <CaseBlock title="Approach" content={data.approach} />
        <CaseBlock title="Outcome" content={data.outcome} />
      </section>

      {/* ================= FIGMA EMBED ================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 tracking-wide">
          Interactive Prototype
        </h2>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-2xl">
          <iframe
            title="figma"
            className="w-full h-[560px] rounded-xl bg-white"
            src={
              data.figmaUrl ||
              "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/mzbNHRU7ufW0M6VlmiBFIj/Interactive-Slider-Component--Community-?node-id=0-1"
            }
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}

function CaseBlock({ title, content }: { title: string; content?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl">
      <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
        {title}
      </p>
      <p className="text-white/80 leading-relaxed text-sm whitespace-pre-line">
        {content || "—"}
      </p>
    </div>
  );
}