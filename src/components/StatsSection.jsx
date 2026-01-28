// StatsSection.jsx
import React from "react";
import StatCard from "./StatCard";
import { FaUsers, FaAward, FaIndustry, FaFileInvoiceDollar } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { icon: <FaUsers />, number: "98+", label: "Client Retention Rate" },
    { icon: <FaAward/>, number: "28+", label: "Years of Experience" },
    { icon: <FaIndustry />, number: "22+", label: "Industries Served" },
    { icon: <FaFileInvoiceDollar />, number: "1000+", label: "Tax Reports Filed" },
  ];

  return (
    <section className="stats-section ">
      <div className="container text-center py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
