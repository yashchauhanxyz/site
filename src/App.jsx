import React, { useEffect, useState } from "react";
import "./App.css";
import ReportGenerator from "./components/ReportGenerator";
import AnomalyPieChart from "./components/AnomalyPieChart";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="flex  justify-center items-center">
      <ReportGenerator />
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Anomaly Types Distribution</h1>
        <AnomalyPieChart />
      </div>
    </div>
    // <>
    //   <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
    //     <LineChart/>
    //   </div>
    // </>
  );
}

export default App;
