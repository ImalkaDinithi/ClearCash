import React from "react";

const InfoCard = ({ icon, label, value, color }) => {

  const colorMap = {
    primary: "bg-primary",
    orange: "bg-orange-500",
    red: "bg-red-500",
  };

  return (
    <div className="flex items-center gap-4 p-5 rounded-xl shadow-md bg-white">
      
      {/* Icon Section */}
      <div className={`p-3 rounded-full text-white ${colorMap[color]}`}>
        {icon}
      </div>

      {/* Text Section */}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h2 className="text-xl font-semibold text-gray-900">{value}</h2>
      </div>

    </div>
  );
};

export default InfoCard;