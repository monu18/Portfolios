"use client";

import Link from "next/link";
import portfolioData from "@/utils/portfolioData";

export default function Project() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 py-10">
      <h1 className="text-4xl font-bold">Projects</h1>

      <ul className="space-y-6">
        {portfolioData.projectMetaData.map(({ slug, title, excerpt }) => (
          <li key={slug} className="group">
            <Link
              href={`/project/${slug}`}
              className="text-2xl font-semibold group-hover:underline"
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