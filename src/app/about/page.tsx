"use client";

// import { db } from "@/lib/firebase.client";
// import { collection, getDocs } from "firebase/firestore";
// import Image from "next/image";
// import { useEffect } from "react";

//  before:from-pink-500 before:via-purple-500 before:to-indigo-500

import portfolioData from "@/utils/portfolioData";
// import Chip from "@/components/Chip";
import TabsSelectView from "@/app/about/TabsSelectView";
import ExperienceSection from "@/app/about/ExperienceSection";
import EducationSection from "@/app/about/EducationSection";
import CertificateSection from "./CertificateSection";
import { motion } from "framer-motion";

const spinGradient = {
  animate: {
    rotate: 0,
    transition: { repeat: Infinity, ease: "linear", duration: 8 },
  },
};

const pulseRing = {
  animate: {
    scale: [1, 1.08, 1],
    opacity: [1, 0.6, 1],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const tabData = [
  { label: "Education", content: <EducationSection></EducationSection> },
  {
    label: "Experience",
    content: <ExperienceSection></ExperienceSection>,
  },
  {
    label: "Certifications",
    content: <CertificateSection></CertificateSection>,
  },
];

export default function About() {
  //  useEffect(() => {
  //   const fetchData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "test"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, doc.data());
  //     });
  //   };

  //   fetchData();
  // }, []);

  return (
    <main className="mt-24 p-4 w-100%">
      {/* ---------- HERO ---------- */}
      <div className="flex flex-col md:flex-row w-full justify-center mb-16">
        {/* intro copy */}
        <div className="order-2 md:order-1 md:w-4/6 w-full max-w-[930px] px-4">
          <h1 className="text-3xl font-bold mb-4">Hi, I&apos;m {portfolioData.name}!</h1>

          {portfolioData.profileIntro.split("\n").map((line, i) =>
            line === "" ? (
              <br key={i} />
            ) : (
              <p key={i} className="mb-2">
                {line}
              </p>
            )
          )}
        </div>

        {/* profile image */}
      <div className="order-1 md:order-2 md:w-2/6 w-full flex justify-center items-center mb-8 md:mb-0">
      {/* —— Rotating rainbow ring —— */}
      <motion.span
        variants={spinGradient}
        animate="animate"
        className="relative inline-flex rounded-full p-[4px] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-tr before:from-yellow-400 before:via-lime-400 before:to-emerald-500"
      >
        {/* —— Breathing glass ring —— */}
        <motion.span
          variants={pulseRing}
          animate="animate"
          className="absolute inset-0 rounded-full ring-2 ring-white/60 backdrop-blur-md"
        />

        {/* —— Actual avatar —— */}
        <img
          src="/profile.png"
          alt="profile photo"
          className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover"
        />
      </motion.span>
    </div>
    </div>

      <div className="flex w-full h-auto justify-center mt-18">
        <TabsSelectView tabs={tabData} />
      </div>
    </main>
  );
}
