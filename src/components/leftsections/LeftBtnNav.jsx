// import { useLocation, useNavigate } from "react-router";
// import { useEffect, useState } from "react";

// const LeftBtnNav = ({ iconName, btnName }) => {
//   let navigate = useNavigate();
//   const [isActived2, setIsActiveD2] = useState("");
//   //const [style, setStyle] = useState()
//   // useEffect(() => {
//   //   if (pathLocation.pathname === "/") {
//   //     setIsActiveD2("bg-orange");
//   //   } else if (pathLocation.pathname === "/trend") {
//   //     setIsActiveD2("bg-orange");
//   //   } else if (pathLocation.pathname === "/feed") {
//   //     setIsActiveD2("bg-orange");
//   //   } else if (pathLocation.pathname === "/event") {
//   //     setIsActiveD2("bg-black");
//   //   } else if (pathLocation.pathname === "/new") {
//   //     setIsActiveD2("bg-black");
//   //   } else if (pathLocation.pathname === "/album") {
//   //     setIsActiveD2("bg-black");
//   //   } else if (pathLocation.pathname === "/release") {
//   //     setIsActiveD2("bg-black");
//   //   } else if (pathLocation.pathname === "/favorite") {
//   //     setIsActiveD2("bg-black");
//   //   } else if (pathLocation.pathname === "/artist") {
//   //     setIsActiveD2("bg-black");
//   //   } else {
//   //     setIsActiveD2("bg-black");
//   //   }
//   // }, []);
//   const pathLocation = useLocation();

//   const handleNavigate = () => {
//     if (btnName === "Home") {
//       navigate("/");

//       return "/";
//     } else if (btnName === "Trends") {
//       navigate("/trends");
//       return "/trends";
//     } else if (btnName === "Feed") {
//       navigate("/feed");

//       return "/feed";
//     } else if (btnName === "New and Notable") {
//       navigate("/new");
//       return "/new";
//     } else if (btnName === "Release Calendar") {
//       navigate("/release");
//       return "/release";
//     } else if (btnName === "Events") {
//       navigate("/event");
//       return "/event";
//     } else if (btnName === "Favorite Songs") {
//       navigate("/favorite");
//       return "/favorite";
//     } else if (btnName === "Artist") {
//       navigate("/artist");
//       return "/artist";
//     } else if (btnName === "Albums") {
//       navigate("/album");
//       return "/album";
//     } else {
//       navigate("/");
//       return "/";
//     }
//   };
//   return (
//     <>
//       <div className=" cursor-pointer w-full flex justify-center h-12 mt-1 hover:border-r-4  hover:border-black transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
//         <div
//           className={` hover:bg-black active:bg-black focus:bg-black  w-5/6 rounded-md hover:text-white flex justify-start px-5 items-center font-semi-bold text-lg`}
//           onClick={handleNavigate}
//         >
//           <i className={iconName}></i>
//           <p className=" absolute left-20"> {btnName} </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LeftBtnNav;

import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const LeftBtnNav = ({ iconName, btnName }) => {
  let navigate = useNavigate();
  const [isActived2, setIsActiveD2] = useState("");
  const pathLocation = useLocation();

  const handleNavigate = () => {
    if (btnName === "Home") {
      navigate("/");

      return "/";
    } else if (btnName === "Trends") {
      navigate("/trends");
      return "/trends";
    } else if (btnName === "Feed") {
      navigate("/feed");

      return "/feed";
    } else if (btnName === "New and Notable") {
      navigate("/new");
      return "/new";
    } else if (btnName === "Release Calendar") {
      navigate("/release");
      return "/release";
    } else if (btnName === "Events") {
      navigate("/event");
      return "/event";
    } else if (btnName === "Favorite Songs") {
      navigate("/favorite");
      return "/favorite";
    } else if (btnName === "Artist") {
      navigate("/artist");
      return "/artist";
    } else if (btnName === "Albums") {
      navigate("/album");
      return "/album";
    } else {
      navigate("/");
      return "/";
    }
  };

  const handleFocus = () => {
    setIsActiveD2("bg-black");
  };

  const handleBlur = () => {
    setIsActiveD2("");
  };

  return (
    <>
      <div className=" cursor-pointer w-full flex justify-center h-12 mt-1 hover:border-r-4  hover:border-black transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
        <div
          className={` hover:bg-gray-400 active:bg-black ${isActived2} w-5/6 rounded-md hover:text-white flex justify-start px-5 items-center font-semi-bold text-lg`}
          onClick={handleNavigate}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex="0"
        >
          <i className={iconName}></i>
          <p className=" absolute left-20"> {btnName} </p>
        </div>
      </div>
    </>
  );
};

export default LeftBtnNav;
