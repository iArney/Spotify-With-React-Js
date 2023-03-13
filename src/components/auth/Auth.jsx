import React, { useEffect, useState } from "react";
import Home from "../Home";

const Auth = () => {
  const CLIENT_ID = "b7c853ced8b44d84af000816e5515065";
  // const RIDIRECT_URI = "http://localhost:3000";
  const REDIRECT = window.location.href;
  const REDIRECT_URI = REDIRECT.substring(0, REDIRECT.lastIndexOf("/"));
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);

      console.log(token);
    }

    setToken(token);
  }, [token]);

  // ============ log out
  const handleLogout = () => {
    window.localStorage.clear();
    setToken("");
    console.log("Logged Out");
  };
  //===============

  return (
    <>
      {!token ? (
        <div className="bg-gray-100 h-screen flex justify-center items-center">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 max-w-sm w-3/4 md-w-full mx-auto shadow-lg transform transition-all hover:scale-105">
            <h1 className="text-xl font-bold mb-4">The Spotify Clone</h1>
            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Login
            </a>
          </div>
        </div>
      ) : (
        <Home apiToken={token} handleLogout={handleLogout} />
      )}
    </>
  );
};

export default Auth;

// {!token ? (
//   <a
//         href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
//         className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//       >
//         Login
//       </a>
//
// ) : (
//   <Home apiToken={token} />
// )}
