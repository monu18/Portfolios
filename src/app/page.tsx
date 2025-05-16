"use client";

import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useEffect } from "react";

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


  return <main className="p-4">Firebase is connected</main>;
}
