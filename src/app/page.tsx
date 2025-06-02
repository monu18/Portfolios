"use client";

import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

import portfolioData from "@/utils/portfolioData";
// import Chip from "@/components/Chip";
// import TabsSelectView from "@/app/about/TabsSelectView";
import BlogComponent from "@/components/BlogComponent";


export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "test"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    };

    fetchData();
  }, []);

  // return (
  //   <main className="mt-24 p-4 w-100%">
  //     <div className="flex w-100% h-auto justify-center mb-16">
  //       <div className="flex max-w-370 justify-center h-auto w-fit">
  //         <div className="w-4/6 h-auto">
  //           <h1> Hi, I&apos;m Jeswyn Jas!</h1>

  //           {portfolioData.profileIntro
  //             .split("\n")
  //             .map((line, i) =>
  //               line === "" ? <br key={i} /> : <p key={i}>{line}</p>
  //             )}
  //         </div>
  //         <div className="flex w-2/6 h-100 justify-center items-center">
  //           <img
  //             src="/profile.png"
  //             alt="Profile"
  //             className="w-80 h-80 rounded-full object-cover"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex w-100% h-auto justify-center">
  //       <div className="max-w-370 w-full h-auto ">
  //         <div>
  //           <h2>Latest Projects</h2>
  //         </div>
  //         {portfolioData.blogs.map((item, idx) => (
  //           <BlogComponent
  //             key={item.id ?? idx}
  //             title={item.title}
  //             intro={item.intro}
  //             image={item.image}
  //             url={item.slug}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </main>
  // );


  return (
  <main className="mt-24 p-4">
    {/* ---------- HERO ---------- */}
    <div className="flex flex-col md:flex-row w-full justify-center mb-16">
      {/* intro copy */}
      <div className="order-2 md:order-1 md:w-4/6 w-full max-w-[930px] px-4">
        <h1 className="text-3xl font-bold mb-4">
          Hi, I&apos;m {portfolioData.name}!
        </h1>

        {portfolioData.profileIntro
          .split("\n")
          .map((line, i) =>
            line === "" ? <br key={i} /> : <p key={i} className="mb-2">{line}</p>
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

    {/* ---------- LATEST PROJECTS ---------- */}
    <div className="flex justify-center">
      <div className="w-full max-w-370">
        <h2 className="text-2xl font-semibold mb-6">Latest Projects</h2>

        {portfolioData.projectsMetaData.map((item, idx) => (
          <BlogComponent
            key={item.id ?? idx}
            title={item.title}
            intro={item.intro}
            image={item.image}
            url={item.slug}
          />
        ))}
      </div>
    </div>
  </main>
);


}
