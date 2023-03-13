import React from "react";
import LeftBar from "./leftsections/LeftBar";
import RightBar from "./rightsections/RightBar";
import { useState, useEffect, useRef } from "react";

import Main from "./Main";

const Home = ({ apiToken, handleLogout }) => {
  const [search, setSearch] = useState("");
  const [trackData, setTrackData] = useState(null);
  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const responce = await fetch(
          `https://api.spotify.com/v1/search?q=artist:${
            search ? search : "fireboy"
          }&type=track&limit=5
          `,
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
            },
          }
        );

        const data = await responce.json();

        setTrackData(data);
        console.log(trackData);
      } catch (error) {
        console.log(error);
      }
    };

    console.log("rendered!");
    console.log("data: " + trackData);
    fetchMusic();
    setSearch(search);
  }, [search]);

  useEffect(() => {
    window.alert(
      "This app intergrates Spotify API \n Due to token expiration you might need to logout and login again if you find difficult playing your favorite music!\n\n Enjoy!"
    );
  }, []);

  return (
    <>
      <div className="flex ">
        <div className=" w-1/3 min-w-[250px] hidden md:inline ">
          <LeftBar />
        </div>
        <div className=" w-full md:w-2/3 md:min-w-[100%] lg:min-w-[auto]  max-w-[800px]">
          <Main
            hanldeLogout={handleLogout}
            apiToken={apiToken}
            trackData={trackData}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div className=" hidden lg:inline w-1/3 ">
          <RightBar handleLogout={handleLogout} />
        </div>
      </div>
    </>
  );
};

export default Home;
