import React from "react";

const TrendCard = ({ image, songIndex, setSongIndex, index }) => {
  const handlePlaying = () => {
    setSongIndex(index);
    console.log(songIndex);
  };
  return (
    <div className="w-56 rounded-md h-56 flex flex-col items-center">
      <div className="  flex justify-center flex-col items-center relative group">
        <div className="w-48 h-fit max-h-[190px] mt-3 rounded-lg object-cover overflow-hidden">
          <img src={`${image}`} alt="" />
        </div>
        <i className="fa-solid fa-play-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl opacity-0 hover:opacity-100 transition-opacity duration-300"></i>

        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50">
          <i
            className="fa-solid fa-play-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl opacity-0 hover:opacity-100 transition-opacity duration-300"
            onClick={handlePlaying}
          ></i>
        </div>
      </div>

      <div className="flex flex-col mt-1 w-11/12">
        <div className="flex justify-between">
          <div className="font-bold">Torisetsu</div>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
