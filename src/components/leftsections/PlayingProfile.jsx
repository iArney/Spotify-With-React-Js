import React from "react";

const PlayingProfile = ({ queryResult }) => {
  const tracks = queryResult?.tracks;
  return (
    <div className=" h-16 w-64 border-t-2  flex  items-center">
      <div
        className="inset-y-0 mt-5 right-0 w-12 h-12 rounded-full mx-2  bg-cover bg-no-repeat mix-blend-multiply"
        style={{
          backgroundImage: `${
            queryResult && tracks && tracks.items.length > 0
              ? `url(${queryResult.tracks.items[0].album.images[0].url})`
              : `url(
              "https://media.istockphoto.com/id/1319479588/photo/the-musicians-were-playing-rock-music-on-stage-there-was-an-audience-full-of-people-watching.jpg?b=1&s=170667a&w=0&k=20&c=nnW8s1H7xVjJ5fD-q_xflZ8u3vD3PHHChZyQlC3WRAs="
            )`
          }`,
        }}
      ></div>
      <p className="absolute left-16 w-32 text-xs mt-5">
        {queryResult && tracks && tracks.items.length > 0
          ? queryResult.tracks.items[0].name
          : ""}
      </p>

      <div className=" ml-36 mt-5">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};

export default PlayingProfile;
