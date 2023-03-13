import { useContext, useEffect, useState } from "react";
import PlayingProfile from "./leftsections/PlayingProfile";
import Audio from "./main/Audio";
import Music from "./main/Music";
import PlayingMusic from "./main/PlayingMusic";
import { Routes, Route, useLocation } from "react-router-dom";
import Trends from "./pages/Trends";
import { AudioProvider } from "../AudioContext";
import Feed from "./pages/Feed";
import NewAndNotable from "./pages/NewAndNotable";
import ReleaseAndCalendar from "./pages/ReleaseAndCalendar";
import Events from "./pages/Events";
import FavoriteSong from "./pages/FavoriteSong";

const Main = ({ apiToken, trackData, search, setSearch, handleLogout }) => {
  const [isRouteChanged, setIsRouteChanged] = useState(false);
  const routePath = "/trends";
  const location = useLocation();
  useEffect(() => {
    setIsRouteChanged(location.pathname === routePath);
    console.log(isRouteChanged);
  }, [location]);
  const tracks = trackData?.tracks;
  //=================== this implements mutual playing with the playing card
  const [isMainPlaying, setIsMainPlaying] = useState(true);
  //=================

  //==============next and previous song
  const [songIndex, setSongIndex] = useState(0);

  // const { isPlay, togglePlay } = useContext(AudioContext);
  let [incr, setIncr] = useState(0);
  const handleNextSong = () => {
    if (incr < 4) {
      incr++;
    } else {
      incr = 0;
    }

    setIncr(incr);
    // togglePlay(true);
    console.log(incr);
  };
  useEffect(() => {
    setSongIndex(incr);
  }, [incr]);

  let [decr, setDecr] = useState(4);
  const handlePreviousSong = () => {
    if (decr > 0 && decr < 5) {
      decr--;
    } else {
      decr = 4;
    }
    setDecr(decr);

    console.log(decr);
  };
  useEffect(() => {
    setSongIndex(decr);
  }, [decr]);

  //===================
  return (
    <AudioProvider>
      <div className="bg-slate-100 w-full h-full relative">
        <div className="w-full relative h-fit mb-4 flex justify-end sm:inline md:hidden">
          <div
            className="cursor-pointer bg-orange-400 w-2/6 relative top-5 right-3 font-semibold flex justify-center text-white px-4 py-2 rounded-full hover:bg-red-400"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
        <div className="flex justify-center md:sticky md:top-0 md:ml-36 lg:ml-64 relative">
          <i className="text-slate-400  md:inline relative left-6 top-8 md:left-8 md:top-8 fa-solid fa-magnifying-glass"></i>
          <input
            className="mt-5 rounded-full px-10 w-80  md:w-96 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent"
            type="text"
            placeholder="search by name"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className=" py-2 px-5">
          <div>
            <p>what's hot 🔥</p>
          </div>

          <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Trending</h1>
            <p>
              more <i></i>
            </p>
          </div>
        </div>
        <PlayingMusic
          queryResult={trackData}
          searched={search}
          isMainPlaying={isMainPlaying}
          setIsMainPlaying={setIsMainPlaying}
        />
        <div className="md:mb-20 mt-4 flex justify-center">
          <Routes>
            <Route exact path="/" element={<Music queryResult={trackData} />} />
            <Route
              exact
              path="/trends"
              element={<Trends apiToken={apiToken} />}
            />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/new" element={<NewAndNotable />} />
            <Route exact path="/release" element={<ReleaseAndCalendar />} />
            <Route exact path="/event" element={<Events />} />
            <Route exact path="/favorite" element={<FavoriteSong />} />
          </Routes>
        </div>
        <div className="">
          {isRouteChanged ? null : (
            <div>
              <Audio
                // isMainPlaying={isMainPlaying}
                // setIsMainPlaying={setIsMainPlaying}
                songIndex={songIndex}
                handleNextSong={handleNextSong}
                handlePreviousSong={handlePreviousSong}
                queryResult={
                  trackData && tracks && tracks.items.length > 0
                    ? trackData.tracks.items[songIndex].preview_url
                    : ""
                }
              />
            </div>
          )}
          <div className="absolute -left-64 sm:fixed sm:top-0 md:bottom-5">
            <PlayingProfile queryResult={trackData} />
          </div>
        </div>
      </div>
    </AudioProvider>
  );
};

export default Main;
