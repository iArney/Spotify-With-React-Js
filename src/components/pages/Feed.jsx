import React from "react";

const posts = [
  {
    id: 1,
    author: "Adegoke Joshua Oluwafemi",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1616823154613043204/wLge7lnA_400x400.jpg",
    text: "I have thoughts and I cry. I really do miss good people, good days and overall, good moments.",
    timestamp: "10 mins ago",
  },
  {
    id: 2,
    author: "Arnold Ngowi",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1616188406735769601/sJJ8jgIl_400x400.jpg",
    text: "Asì es la vida 🎆 Things are just getting better every day.🍷",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    author: "Bob Smith",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1338055692788379653/LV5W-2Z5_400x400.jpg",
    text: "Life peaked when Mojo Jojo dropped 'everybody wants to rule the world' 🔥🎶",
    timestamp: "2 hours ago",
  },
];

function Feed() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Feed</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-4">
            <img
              src={post.avatarUrl}
              alt={post.author}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-bold">{post.author}</h2>
              <p className="text-gray-500 text-sm">{post.timestamp}</p>
            </div>
          </div>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
