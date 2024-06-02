import React, { useEffect, useState } from "react";
import axios from "axios";

const AnomalyList = () => {
  const [Anomalies, setAnomalies] = useState([
    {
      entitlementName: "oracle-db-admin",
      status: "unrequestable",
      description: "incorrect risk tier assigned",
      incorrectRiskTier: "2",
      updatedRiskTier: "1",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchAnomalies();
  // }, []);

  // const fetchAnomalies = async () => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await axios.get(`/api/anomalies`);
  //     setAnomalies(response.data);
  //   } catch (err) {
  //     setError("Failed to fetch entitlements. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="entitlements-search p-4 bg-wells-fargo-red text-black">
      {loading && <p className="text-yellow-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {Anomalies && (
        <div>
          {Object.entries(Anomalies).map(([entitlementName, details]) => (
            <div
              key={entitlementName}
              className="entitlement-item p-2 bg-white text-black rounded mb-2"
            >
              <h3 className="font-bold">{details.entitlementName}</h3>
              {console.log(details)}
              <p>Status: {details.status}</p>
              <p>Description: {details.description}</p>
              <p>IncorrectRiskTier: {details.incorrectRiskTier}</p>
              <p>UpdatedrRiskTier: {details.updatedRiskTier}</p>
              <button className="mr-2 bg-[rgb(218,28,44)] text-white p-1 rounded">Accept</button>
              <button className="mr-2 bg-[rgb(218,28,44)] text-white py-1 px-2 rounded">Reject</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnomalyList;
