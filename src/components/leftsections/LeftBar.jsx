import React from "react";
import LeftBtnNav from "./LeftBtnNav";
import logo from "../../images/bee_music.webp";

const LeftBar = () => {
  return (
    <div>
      <div className="w-full p-4 mb-4 mt-1 h-24 bg-cover bg-no-repeat shadow-sm flex justify-center relative">
        <img src={logo} alt="logo" width={"250px"} />
      </div>
      <div className="bg-white w-full flex flex-col   text-gray-500">
        <div className="mb-0">
          <LeftBtnNav iconName={"fa-solid fa-house mx-1"} btnName={"Home"} />
        </div>
        <div>
          <LeftBtnNav
            iconName={"fa-solid fa-square-poll-vertical mx-1"}
            btnName={"Trends"}
          />
        </div>
        <div>
          <LeftBtnNav iconName={"fa-solid fa-compass mx-1"} btnName={"Feed"} />
        </div>
        <div className="ml-10 my-4">Discover</div>
        <div>
          <LeftBtnNav
            iconName={"fa-solid fa-boxes-stacked mx-1"}
            btnName={"New and Notable"}
          />
        </div>
        <div>
          <LeftBtnNav
            iconName={"fa-solid fa-calendar-days mx-1"}
            btnName={"Release Calendar"}
          />
        </div>
        <div>
          <LeftBtnNav
            iconName={"fa-solid fa-calendar-week mx-1"}
            btnName={"Events"}
          />
        </div>
        <div className="ml-10 my-4">Your Collection</div>
        <div>
          <LeftBtnNav
            iconName={"fa-regular fa-heart mx-1"}
            btnName={"Favorite Songs"}
          />
        </div>
        <div>
          <LeftBtnNav
            iconName={"fa-solid fa-user-group mx-1"}
            btnName={"Artist"}
          />
        </div>
        <div>
          <LeftBtnNav iconName={"fa-solid fa-star mx-1"} btnName={"Albums"} />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
