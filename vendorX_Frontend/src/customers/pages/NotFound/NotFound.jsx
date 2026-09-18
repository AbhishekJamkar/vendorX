// import React from "react";

// const NotFound = () => {
//   return (
//     <div className="flex flex-col h-screen justify-center items-center">
//       <h1 className="text-6xl font-semibold">401 Not Found</h1>
//     </div>
//   );
// };

// export default NotFound;







import InfoPage from "./InfoPage";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <InfoPage
      icon={SearchOffIcon}
      title="404 - Not Found"
      message="The page you're looking for doesn't exist or has been moved."
      buttonText="Go to Home"
      onClick={() => navigate("/")}
    />
  );
};

export default NotFound;














// import React from "react";
// import { useNavigate } from "react-router-dom";
// import SearchOffIcon from "@mui/icons-material/SearchOff";

// const NotFound = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col h-screen justify-center items-center bg-gray-100 text-center px-4">
//       <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full">
//         <div className="flex justify-center mb-6">
//           <SearchOffIcon style={{ fontSize: 60, color: "rgb(233, 30, 99)" }} />
//         </div>
//         <h1 className="text-4xl font-bold mb-2 text-gray-800">404 - Not Found</h1>
//         <p className="text-gray-600 mb-6">
//           The page you're looking for doesn't exist or has been moved.
//         </p>
//         <button
//           onClick={() => navigate("/")}
//           className="text-white font-semibold py-2 px-6 rounded-lg transition"
//           style={{
//             backgroundColor: "rgb(233, 30, 99)",
//             boxShadow: "0 4px 6px rgba(233, 30, 99, 0.4)",
//           }}
//         >
//           Go to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NotFound;
