import { useContext } from "react";
import { AudioContext } from "../../AudioContext";

const Buttons = ({ setIsMainPlaying, isMainPlaying }) => {
  //=================== this implements mutual playing with the playing card
  // const [isMainPlaying, setIsMainPlaying] = useState(false);
  // const handlePlayPause = () => {
  //   setIsMainPlaying(!isMainPlaying);
  //   console.log("clicked, " + isMainPlaying);
  // };
  const { isPlaying, togglePlay } = useContext(AudioContext);
  const handlePlayPause = () => {
    togglePlay();
    console.log(isPlaying);
  };
  //=================
  return (
    <div>
      <button
        className="w-32 h-12 flex items-center border-none justify-center rounded-3xl bg-black text-white mb-11 hover:bg-slate-900 hover:text-white active:bg-orange-500 focus:outline-none focus:ring focus:ring-yellow-300 cursor-pointer"
        onClick={handlePlayPause}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button className="w-32 h-12 flex items-center justify-center rounded-3xl border-2 border-black ">
        Follow
      </button>
    </div>
  );
};

export default Buttons;
