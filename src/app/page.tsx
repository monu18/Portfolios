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

  return (
    <main className="p-4 w-100%">
      <div className="flex w-100% h-auto justify-center mb-16">
        <div className="flex max-w-370 justify-center h-auto  w-fit">
          <div className="w-4/6 h-auto">
            <h1> Hi, I&apos;m Jeswyn Jas!</h1>

            {portfolioData.profileIntro
              .split("\n")
              .map((line, i) =>
                line === "" ? <br key={i} /> : <p key={i}>{line}</p>
              )}
          </div>
          <div className="flex w-2/6 h-100 justify-center items-center">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-80 h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex w-100% h-auto justify-center">
        <div className="max-w-370 w-full h-auto ">
          <div>
            <h2>Latest Blogs</h2>
          </div>
          {portfolioData.blogs.map((item, idx) => (
            <BlogComponent
              key={item.id ?? idx}
              title={item.title}
              intro={item.intro}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
