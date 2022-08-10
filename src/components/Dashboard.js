import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";

function Dashboard({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h2>Please select a currency</h2>;
  }
  return (
    <div className="dashboard">
      <h2>{`$${price}`}</h2>

      <div className="chart-container">
        <Bar data={data} options={opts} />
      </div>
    </div>
  );
}

export default Dashboard;