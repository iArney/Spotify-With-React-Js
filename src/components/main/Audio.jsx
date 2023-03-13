import { useEffect, useState, useRef, useContext } from "react";
import AudioController from "./AudioController";
import { AudioContext } from "../../AudioContext";

const Audio = ({
  queryResult,
  handleNextSong,
  handlePreviousSong,
  songIndex,
}) => {
  let songs = [
    {
      title: "song 1",
      // url: `${queryResult.tracks.items[0].preview_url}`,
      //"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
  ];

  // state of the listed songs
  const [song, setSong] = useState(songs);
  const [currentSong, setCurrentSong] = useState([]);
  // const [isPlaying, setIsPlaying] = useState(false);

  const { isPlaying, togglePlay } = useContext(AudioContext);

  console.log(isPlaying);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      console.log("from audio play, " + isPlaying);
      audioElem.current.play();

      // setIsMainPlaying(true);
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const onEnded = () => {
      togglePlay(false);
    };

    audioElem.current.addEventListener("ended", onEnded);
    return () => {
      if (audioElem.current) {
        audioElem.current.removeEventListener("ended", onEnded);
      }
    };
  }, [togglePlay]);

  const audioTimer = () => {
    const duration = audioElem.current.duration;
    const currentTime = audioElem.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setCurrentSong({
      ...currentSong,
      progress: progress,
      length: duration,
      ct: currentTime,
    });

    // if ((progress === currentTime) & isPlaying) {
    //   togglePlay(false);
    // }
    console.log(currentTime);
  };

  // const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  // useEffect(() => {
  //   if (shouldAutoPlay) {
  //     audioElem.current.play();
  //     togglePlay(false);
  //     setShouldAutoPlay(!shouldAutoPlay);
  //   }
  // }, [shouldAutoPlay, togglePlay]);

  useEffect(() => {
    togglePlay(true);
  }, [songIndex]);

  return (
    <div>
      <audio
        src={queryResult}
        ref={audioElem}
        onTimeUpdate={audioTimer}
      ></audio>
      <div className="flex justify-center">
        <AudioController
          // isMainPlaying={isMainPlaying}
          // setIsMainPlaying={setIsMainPlaying}
          isPlaying={isPlaying}
          // setIsPlaying={setIsPlaying}
          handleNextSong={handleNextSong}
          handlePreviousSong={handlePreviousSong}
          audioTimer={audioTimer}
          currentSong={currentSong}
          audioElem={audioElem}
        />
      </div>
    </div>
  );
};

export default Audio;
