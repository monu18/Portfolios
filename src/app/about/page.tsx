"use client";

// import { db } from "@/firebase";
// import { collection, getDocs } from "firebase/firestore";
// import Image from "next/image";
// import { useEffect } from "react";

import portfolioData from "@/utils/portfolioData";
// import Chip from "@/components/Chip";
import TabsSelectView from "@/app/about/TabsSelectView";
import ExperienceSection from "@/app/about/ExperienceSection";
import EducationSection from "@/app/about/EducationSection";
import CertificateSection from "./CertificateSection";

const tabData = [
  {
    label: "Experience",
    content: <ExperienceSection></ExperienceSection>,
  },
  { label: "Education", content: <EducationSection></EducationSection> },
  {
    label: "Achievements And Licences",
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
          <img
            src="/profile.png"
            alt="Jeswyn Jas profile photo"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex w-full h-auto justify-center mt-18">
        <TabsSelectView tabs={tabData} />
      </div>
    </main>
  );
}
