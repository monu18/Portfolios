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
  { label: "Certifications", content: <CertificateSection></CertificateSection> },
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
    <main className="p-4 w-100%">
      <div className="flex w-100% h-auto justify-center">
        <div className="flex max-w-370 justify-center h-auto  w-fit">
          <div className="w-4/6  h-auto">
            <h1> Hi, I&apos;m Jeswyn Jas!</h1>

            {portfolioData.profileIntro
              .split("\n")
              .map((line, i) =>
                line === "" ? <br key={i} /> : <p key={i}>{line}</p>
              )}
          </div>
          <div className="flex w-2/6  h-100 justify-center items-center">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-80 h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full h-auto justify-center mt-18">
         <TabsSelectView tabs={tabData} />
      </div>
    </main>
  );
}
