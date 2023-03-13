import React from "react";
import Category from "./Category";
import FavoriteArtist from "./FavoriteArtist";
import ProfileCard from "./ProfileCard";

const RightBar = ({ handleLogout }) => {
  let favArtist = [
    {
      id: 1,
      name: "Taylor Swift",
      image:
        "https://media1.popsugar-assets.com/files/thumbor/0ebv7kCHr0T-_O3RfQuBoYmUg1k/475x60:1974x1559/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg",
    },
    {
      id: 2,
      name: "Kanye West",
      image:
        "https://media.voguebusiness.com/photos/5ef6493adf1073db3375835d/2:3/w_1600,c_limit/kanye-west-gap-news-voguebus-mert-alas-and-marcus-piggott-june-20-story.jpg",
    },
    {
      id: 3,
      name: "Drake",
      image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2015-09/16/14/enhanced/webdr15/original-7331-1442427794-4.jpg?crop=990:1484;16,0&downsize=300:*&output-format=auto&output-quality=auto",
    },
    {
      id: 4,
      name: "Bellie Elish",
      image:
        "https://townsquare.media/site/812/files/2019/08/billie-eilish-photo.jpg?w=630&h=945&zc=1&s=0&a=t&q=89",
    },
  ];
  return (
    <div className=" h-full w-full relative bg-slate-100">
      <div className="w-full relative h-fit flex justify-end">
        <div
          className="cursor-pointer bg-orange-400 w-2/6 relative top-5 right-3 font-semibold flex justify-center text-white px-4 py-2 rounded-full hover:bg-red-400"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>

      <div className="relative top-5 left-5 text-3xl font-bold w-fit">
        Shortcuts
      </div>

      <div className=" relative top-10 grid grid-cols-2">
        <div className="mb-5">
          <Category categoryName={"❄️ Chill Hits"} />
        </div>
        <div className="mb-5">
          <Category categoryName={"⭐ Hop"} />
        </div>
        <div className="mb-5">
          <Category categoryName={"🎸 Accoustic"} />
        </div>
        <div className="mb-5">
          <Category categoryName={"🎵 Indie Pop"} />
        </div>
        <div className="mb-5">
          <Category categoryName={"🎹 Piano Blues"} />
        </div>
        <div className="mb-5">
          <Category categoryName={"🎺 Jazz"} />
        </div>
      </div>

      <div className="mt-32">
        <div className="ml-10 w-fit text-3xl font-bold">Fav Artist</div>

        {favArtist.map((item) => (
          <div key={item.id} className="mt-1 ml-10 w-fit">
            <FavoriteArtist artistImage={item.image} artistName={item.name} />
          </div>
        ))}
        {/* <div className="mt-1 ml-10 w-fit">
          <FavoriteArtist />
        </div>
        <div className="mt-1 ml-10 w-fit">
          <FavoriteArtist />
        </div>
        <div className="mt-1 ml-10 w-fit">
          <FavoriteArtist />
        </div> */}
      </div>

      <div className="mt-20  flex justify-center items-end">
        <ProfileCard />
      </div>
    </div>
  );
};

export default RightBar;
