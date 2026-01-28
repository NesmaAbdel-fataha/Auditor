// StatCard.jsx
import React from "react";
import CountUp from "react-countup";
const StatCard = ({ icon, number, label }) => {
  return (
    <div className="stat-card text-center p-4 container rounded-md">
      <div className="icon text-white text-center mb-2">{icon}</div>
      {/* <div className="number text-danger">{number}</div> */}
      <div className="label text-align-center text-white">{label}</div>
      <div className="number text-3xl font-bold text-red-600">
  <CountUp end={parseInt(number)} duration={2} className="text-danger text-align-center number" />+
</div>

    </div>
  );
};

export default StatCard;
