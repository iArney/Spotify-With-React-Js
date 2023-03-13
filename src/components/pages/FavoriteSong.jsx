import React from "react";

function FavoriteSongs() {
  const favoriteSongs = [];

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white rounded-md shadow-lg py-10 px-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Your favorite songs</h1>
        {favoriteSongs.length === 0 ? (
          <p className="text-gray-500 text-lg mb-6">
            You haven't added any favorite songs yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {favoriteSongs.map((song, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md py-4 px-6 text-center"
              >
                <h2 className="text-lg font-bold mb-2">{song.name}</h2>
                <p className="text-gray-500">{song.artist}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoriteSongs;
