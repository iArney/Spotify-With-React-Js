import { useEffect } from "react";
import { useLocation } from "react-router";
import Buttons from "./Buttons";

const PlayingMusic = ({ queryResult, setIsMainPlaying, isMainPlaying }) => {
  const tracks = queryResult?.tracks;
  // useEffect(() => {
  //   setIsMainPlaying(!isMainPlaying);
  // }, []);

  const location = useLocation();
  return (
    <div className="w-full relative h-80 rounded-sm flex flex-col p-3  font-bold">
      <div
        className="absolute inset-y-0 right-0 w-full h-full bg-music-banner bg-cover bg-no-repeat mix-blend-multiply"
        style={
          location.pathname === "/"
            ? {
                backgroundImage: `${
                  queryResult && tracks && tracks.items.length > 0
                    ? `url(${queryResult.tracks.items[0].album.images[0].url})`
                    : "https://media.istockphoto.com/id/1319479588/photo/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-full-of-people-watching.jpg?b=1&s=170667a&w=0&k=20&c=nnW8s1H7xVjJ5fD-q_xflZ8u3vD3PHHChZyQlC3WRAs="
                }`,
              }
            : {
                backgroundImage:
                  "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg')",
              }
        }
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-y-0 left-0 w-9/12 h-full bg-gradient-to-r from-slate-100 via-slate-100 opacity-90"></div>
        </div>
      </div>
      <div className="py-3 w-6/12">
        <div className="py-3 font-light">
          {location.pathname === "/" ? (
            <p>Artist</p>
          ) : (
            <p>Revolutionize Your Music </p>
          )}
        </div>
        <div className="">
          {location.pathname === "/" ? (
            queryResult === null ? (
              ""
            ) : (
              <h1 className="md:text-2xl">
                {queryResult && tracks && tracks.items.length > 0
                  ? queryResult.tracks.items[0].artists[0].name
                  : "..."}
              </h1>
            )
          ) : (
            <h1 className="md:text-2xl">Listening with BeeMusic</h1>
          )}
        </div>
      </div>
      <div className=" mt-10 z-50">
        <Buttons
          setIsMainPlaying={setIsMainPlaying}
          isMainPlaying={isMainPlaying}
        />
      </div>
    </div>
  );
};

export default PlayingMusic;
