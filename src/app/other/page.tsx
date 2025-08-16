"use client";

import { db } from "@/lib/firebase.client";
import { collection, getDocs } from "firebase/firestore";
// import Image from "next/image";
import { useEffect } from "react";

export default function Other() {

   useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "test"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    };

    fetchData();
  }, []);


  return <main className="p-4">Other</main>;
}
