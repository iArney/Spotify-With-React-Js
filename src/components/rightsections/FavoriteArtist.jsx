import React from "react";

const FavoriteArtist = ({ artistImage, artistName }) => {
  return (
    <div className="flex p-2 items-center w-64 ">
      <div className="w-12 h-12 relative object-cover rounded-full overflow-hidden">
        <img src={`${artistImage}`} alt="Kanye West" />
      </div>
      <div className="w-fit flex justify-start relative left-3 text-xs font-bold ">
        {artistName}
      </div>
      <div className="w-fit flex justify-end absolute right-10 ">
        <i className="font-bold mr-1 w-1 h-1 rounded-full bg-black "></i>
        <i className="font-bold w-1 h-1 rounded-full bg-black "></i>
      </div>
    </div>
  );
};

export default FavoriteArtist;
