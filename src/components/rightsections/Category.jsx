import React from "react";

const Category = ({ categoryName }) => {
  return (
    <div className="w-fit ml-7  h-12 rounded-full p-6 bg-white flex justify-center items-center cursor-pointer hover:bg-black hover:text-white">
      {categoryName}
    </div>
  );
};

export default Category;
