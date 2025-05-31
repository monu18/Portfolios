"use client";

import Link from "next/link";
import portfolioData from "@/utils/portfolioData";

export default function Project() {
  return (
    <section className="w-full max-w-[930px] mx-auto py-10 px-4 sm:px-0 mt-24 space-y-8">
      <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>

      <ul className="space-y-6">
        {portfolioData.projectMetaData.map(({ slug, title, excerpt }) => (
          <li key={slug} className="group">
            <Link
              href={`/project/${slug}`}
              className="text-xl sm:text-2xl font-semibold group-hover:underline"
            >
              {title}
            </Link>
            <p className="text-gray-600">{excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}