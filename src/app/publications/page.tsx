"use client";


import portfolioData from "@/utils/portfolioData";

export default function Publication() {
  return (
    <section className="w-full max-w-[930px] mx-auto py-10 px-4 sm:px-0 space-y-8 mt-24">
  <h1 className="text-3xl sm:text-4xl font-bold">Publications</h1>

  <ul className="space-y-6">
    {portfolioData.publications.map(({ slug, title, excerpt }) => (
      <li key={title} className="group">
        <a
          href={slug}
          className="text-xl sm:text-2xl font-semibold group-hover:underline"
        >
          {title}
        </a>
        <p className="text-gray-600">{excerpt}</p>
      </li>
    ))}
  </ul>
</section>
  );
}