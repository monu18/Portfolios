import Link from "next/link";
import React from "react";

const BlogComponent = ({
  title,
  intro,
  image,
  url,
}: {
  title: string;
  intro: string;
  image: string;
  url: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-60 justify-between mb-4 border-b border-gray-200 pb-4">
      {/* thumbnail */}
      <div className="order-1 md:order-2 w-full md:w-2/6 flex justify-center mb-6 md:mb-0">
        <img
          src={image}
          alt={`${title} thumbnail`}
          className="w-60 h-60 object-cover"
        />
      </div>

      {/* copy */}
      <div className="order-2 md:order-1 w-full md:w-4/6 px-2">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>

        <p className="mb-3">{intro}</p>

        <Link
          href={`/project/${url}`}
          className="text-blue-600 font-bold underline"
        >
          Read more…
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;