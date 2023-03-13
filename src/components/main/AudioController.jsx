import { useEffect, useRef, useState, useContext } from "react";
import { AudioContext } from "../../AudioContext";
const AudioController = ({
  // isMainPlaying,
  // setIsMainPlaying,
  // setIsPlaying,
  // isPlaying,
  currentSong,
  audioElem,
  handlePreviousSong,
  handleNextSong,
}) => {
  const { isPlaying, togglePlay } = useContext(AudioContext);
  const playPause = () => {
    togglePlay();
    console.log(isPlaying);
  };
  const divRef = useRef();
  const shiftOffset = (e) => {
    const width = divRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = offset / width;
    audioElem.current.currentTime = divProgress * currentSong.length;
    console.log(offset, width, divProgress * currentSong.length);
  };

  // const [progDivWidth, setProgDivWidth] = useState(0);
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (isPlaying) {
      setIcon(
        <div className="mx-10 p-3 text-xl cursor-pointer" onClick={playPause}>
          <i className="fa-sharp fa-solid fa-circle-pause"></i>
        </div>
      );
    } else if (isPlaying) {
      setIcon(
        <div className="mx-10 p-3 text-xl cursor-pointer" onClick={playPause}>
          <i className="fa-sharp fa-solid fa-circle-play"></i>
        </div>
      );
    } else {
      setIcon(
        <div className="mx-10 p-3 text-xl cursor-pointer" onClick={playPause}>
          <i className="fa-sharp fa-solid fa-circle-play"></i>
        </div>
      );
    }
  }, [isPlaying, currentSong.progress]);

  return (
    <div className="  w-5/6 h-24 bg-white rounded-md mb-2 shadow-md ">
      <div className=" flex justify-center">
        <div
          className=" w-5/6 h-1 bg-slate-300 rounded-md mt-5 cursor-pointer"
          onClick={shiftOffset}
          ref={divRef}
        >
          <div
            className=" h-1 bg-black relative rounded-full w-0"
            style={
              isPlaying
                ? { width: `${currentSong.progress + "%"}` }
                : { width: `${currentSong.progress + "%"}` }
            }
          >
            <div className="absolute w-2 h-full rounded-full border-2  right-0  "></div>
          </div>
        </div>
      </div>
      <span className="text-xs absolute mt-2 mx-14  md:left-72 text-gray-500">
        double ("next / pause") click on pause
      </span>

      <div className=" mt-5 flex justify-center">
        <div className=" mx-10 p-3 text-xl cursor-pointer">
          <i className="fa-solid fa-backward" onClick={handlePreviousSong}></i>
        </div>
        {icon}
        <div className="mx-10 p-3 text-xl cursor-pointer">
          <i className="fa-solid fa-forward" onClick={handleNextSong}></i>
        </div>
      </div>
    </div>
  );
};

export default AudioController;
