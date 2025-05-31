import { notFound } from "next/navigation";
import portfolioData from "@/utils/portfolioData";
import Markdown from "react-markdown";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Optional if you want static generation */
export function generateStaticParams() {
  return portfolioData.projectMetaData.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetails({ params }: PageProps) {
  const { slug } = await params;
  const post = portfolioData.projectMetaData.find(p => p.slug === slug);
  if (!post) return notFound();

  return (
    <article className="prose mx-auto max-w-3xl py-10">
      {/* <h1>{post.title}</h1> */}
      <p className="text-sm text-gray-500">{post.date}</p>
      <Markdown>{post.content}</Markdown>
    </article>
  );
}

