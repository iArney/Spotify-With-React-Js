const Card = ({ music }) => {
  return (
    <div className="bg-white max-h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <img className="w-full" src={music.image} alt="" />
      <div className="px-4 py-2">
        <h3 className="text-lg font-bold mb-2">{music.title}</h3>
        <p className="text-gray-700">{music.artist}</p>
      </div>
    </div>
  );
};

export default Card;
