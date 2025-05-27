import React from "react";


const BlogComponent = ({ title, intro, image }) => {


  return (
    <div className=" w-full min-h-60 flex justify-around mb-4 border-b border-gray-200 pb-4">
      <div className="h-auto w-6/8">
        <div className="h-12  w-full"><h3>{title}</h3></div>

        <p>{intro} </p>
        <p className="text-blue-500 font-bold underline">Read more...</p>
        
      </div>

      <div className="h-auto  w-2/8 flex justify-center min-w-60">
        <img src={image} alt="Profile" className="w-60 h-60 object-cover" />
      </div>
    </div>
  );
};

export default BlogComponent;
