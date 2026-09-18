import React from "react";

const InfoPage = ({ icon: Icon, title, message, buttonText, onClick }) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100 text-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full">
        {Icon && (
          <div className="flex justify-center mb-6">
            <Icon style={{ fontSize: 60, color: "#7700ff" }} />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{title}</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        {buttonText && (
          <button
            onClick={onClick}
            className="text-white font-semibold py-2 px-6 rounded-lg transition"
            style={{
              backgroundColor: "#7700ff",
              boxShadow: "0 4px 6px #42008e",
            }}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default InfoPage;
