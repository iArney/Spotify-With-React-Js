import Card from "./Card";

const NewAndNotable = () => {
  const musicList = [
    {
      id: 1,
      title: "Album: The Heart Speaks In Whispers",
      artist: "Corinne Bailey Rae",
      image:
        "https://www.udiscovermusic.com/wp-content/uploads/2020/02/Corrine-Bailey-Rae-GettyImages-115434479.jpg",
    },
    {
      id: 2,
      title: "'Song: 2002'",
      artist: "Anne-Marie",
      image:
        "https://assets.capitalfm.com/2021/01/anne-marie-2-1610125507-view-0.jpg",
    },
    {
      id: 3,
      title: "Song: Wild Thoughts",
      artist: "Dj Khaled ft Rihanna ",
      image:
        "https://imgs.capitalfm.com/images/564931?crop=16_9&width=660&relax=1&signature=mkBV142H4yRd8SYZji_KzdpzGeE=",
    },
    {
      id: 4,
      title: "Perfect",
      artist: "Ed Sheeran",
      image:
        "https://imgs.capitalfm.com/images/276506?crop=16_9&width=660&relax=1&signature=Hy0d-UMhd5dGgC7a-Ko85yNuSjY=",
    },
    {
      id: 5,
      title: "Song: Lose You To Love Me",
      artist: "Selens Gomez",
      image:
        "https://imgs.capitalfm.com/images/565006?crop=16_9&width=660&relax=1&signature=HeC8PjOiUtCK1pm-HeNees2aJK0=",
    },
    {
      id: 6,
      title: "Song: Big For Your Boots",
      artist: "Stormzy",
      image:
        "https://imgs.capitalfm.com/images/294280?crop=16_9&width=660&relax=1&signature=fV3bwjsQQKiBNZs9ZIKJsU0E-h8=",
    },
  ];

  return (
    <div className="container mx-auto my-12 px-4">
      <h2 className="text-2xl font-bold mb-4">New and Notable</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {musicList.map((music) => (
          <div key={music.id}>
            <Card music={music} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewAndNotable;
