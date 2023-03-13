// import { useState } from "react";

// const AudioPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(50);

//   const togglePlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const handleVolumeChange = (event) => {
//     setVolume(event.target.value);
//   };

//   return (
//     <div className="audio-player-container bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-5 relative">
//       <img
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-60 rounded-xl"
//         src="https://images.unsplash.com/photo-1529618441191-7bb8707020c8"
//         alt="album cover"
//       />
//       <div className="audio-player flex items-center relative z-10">
//         <div className="play-btn" onClick={togglePlay}>
//           {isPlaying ? (
//             <i className="fas fa-pause"></i>
//           ) : (
//             <i className="fas fa-play"></i>
//           )}
//         </div>
//         <div className="audio-info flex-1 mx-4">
//           <div className="title text-white">Song Title</div>
//           <div className="artist text-gray-400">Artist Name</div>
//         </div>
//         <div className="audio-controls flex items-center">
//           <div className="volume-slider flex items-center">
//             <i className="fas fa-volume-down text-white"></i>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={volume}
//               onChange={handleVolumeChange}
//               className="mx-2"
//               style={{ height: "4px" }}
//             />
//             <i className="fas fa-volume-up text-white"></i>
//           </div>
//           <button className="next-btn">
//             <i className="fas fa-forward text-white"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AudioPlayer;
