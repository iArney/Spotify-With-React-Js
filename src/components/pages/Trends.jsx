import { useEffect, useState, useContext } from "react";

import Main from "../Main";
import PlayingMusic from "../main/PlayingMusic";
import TrendCard from "../main/TrendCard";
import { AudioContext } from "../../AudioContext";
import Audio from "../main/Audio";

const Trends = ({ apiToken }) => {
  const musicTrend = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1383796215/photo/silhouette-of-man-holding-binoculars-on-mountain-peak-against-bright-sunlight-sky-background.jpg?b=1&s=170667a&w=0&k=20&c=k9GxkAG2AvIySSEcXvqWwvNW79eYRlKE84EsvvdbxO0=",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1369171053/photo/group-of-sporty-people-walks-in-mountains-at-sunset-with-backpacks.jpg?b=1&s=170667a&w=0&k=20&c=zB7gvxr4_2Thlk7t67PKvgZ_WWxtr9CTM-6k_GcGNh8=",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1395420661/photo/on-top-of-the-mountain-ridge.jpg?b=1&s=170667a&w=0&k=20&c=2rF3k9-cJuEYq7xrI1xTGjO6m22fwSeIXaaLpxIhFx8=",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?b=1&s=170667a&w=0&k=20&c=WuKThkjX06dSRgxURSroQQMoFxDtpzN9yNYhjRpc2kk=",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/612646040/photo/charismatic-disc-jockey-at-the-turntable.jpg?b=1&s=170667a&w=0&k=20&c=n3xAhv5Ugzu48g_h7dLxVXPp8mI3hIpEEEAphhGn3HM=",
    },
    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/1420929798/photo/blurred-lights-on-stage-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=rCaB9YaoE46Faivx-9W7LhjaC1snW9AgSrTuMj728Jc=",
    },
    {
      id: 7,
      image:
        "https://media.istockphoto.com/id/1464495287/photo/group-of-asian-friends-playing-karaoke-and-sing-a-song-at-home-together.jpg?b=1&s=170667a&w=0&k=20&c=nXWYwzkz-7iQcXk-hgr6knwHgP27o6ZT7vPQuVN9yuY=",
    },
    {
      id: 8,
      image:
        "https://media.istockphoto.com/id/1434981784/photo/happy-african-couple-dancing-outdoors-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=4q-oTV0AkBBLgWLZ8rLGztXKSDiX9RJQ_5XVPzQfGbI=",
    },
    {
      id: 9,
      image:
        "https://media.istockphoto.com/id/1404621875/photo/young-girl-havig-fun-while-cleaning-floor-with-vacuum-cleaner-happy-woman-doing-housework-at.jpg?b=1&s=170667a&w=0&k=20&c=DZzcNFMt9fE7e_-qsQeS41IR5cRPNb-sZjRwofhi1U4=",
    },
  ];
  const [artists, setArtists] = useState(null);
  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const responce = await fetch(
          `https://api.spotify.com/v1/search?q=artist&type=track&limit=10`,
          {
            headers: {
              Authorization: `Bearer ${apiToken}`,
            },
          }
        );

        const data = await responce.json();

        setArtists(data);
        console.log(artists);
      } catch (error) {
        console.log(error);
      }
    };

    console.log("rendered!");
    console.log("artist: " + artists);
    fetchMusic();
  }, []);
  const tracks = artists?.tracks;

  const { isPlaying, togglePlay } = useContext(AudioContext);

  const [playing, setPlaying] = useState(0);
  const [songIndex, setSongIndex] = useState(0);
  useEffect(() => {
    setPlaying(songIndex);
    songIndex && togglePlay(true);
  }, [songIndex]);
  return (
    <div className="relative bg-gradient-to-b from-white via-orange-400 to-white">
      <div className=" grid grid-cols-3">
        {musicTrend.map((music, index) => (
          <div key={music.id} className="-mb-8">
            <TrendCard
              image={music.image}
              setSongIndex={setSongIndex}
              songIndex={songIndex}
              index={music.id}
            />
          </div>
        ))}
      </div>
      <div className="relative top-20">
        <Audio
          queryResult={
            artists && tracks && tracks.items.length > 0
              ? artists.tracks.items[playing].preview_url
              : ""
          }
        />
      </div>
    </div>
  );
};

export default Trends;
