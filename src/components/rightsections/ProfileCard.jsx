import React from "react";

const ProfileCard = () => {
  return (
    <div className="w-64 bg-white rounded-md h-72 flex flex-col items-center">
      <div className="  flex justify-center flex-col items-center">
        <div className="w-56 h-56 mt-2  rounded-lg object-cover overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1330874201/photo/girl-with-headphones-and-neon-lighting-stylized-3d-character.jpg?b=1&s=170667a&w=0&k=20&c=MYdmUMPZd48510dhxD-i3AZj5v7njqHJyLCHMfFnKPM="
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col mt-1 w-11/12">
        <div className="flex justify-between">
          <div className="font-bold">Torisetsu</div>
          <div className="font-bold">
            <i className="text-slate-600 cursor-pointer text-xl fa-regular fa-square-plus"></i>
          </div>
        </div>
        <div className="text-slate-600 text-sm">Kana Nishino</div>
      </div>
    </div>
  );
};

export default ProfileCard;
