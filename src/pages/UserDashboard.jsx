import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EntitlementsSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [entitlements, setEntitlements] = useState({"oracle-db-admin":["1","abcd"]});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(()=>{
  //   setEntitlements();
  // },[])

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // const fetchEntitlements = async () => {
  //   if (!searchInput.trim()) return;

  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await axios.get(`/api/entitlements?query=${searchInput}`);
  //     setEntitlements(response.data);
  //   } catch (err) {
  //     setError('Failed to fetch entitlements. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    //fetchEntitlements();
  };

  return (
    <div className="entitlements-search p-4 bg-wells-fargo-red text-black">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search entitlements..."
          className="p-2 rounded border border-gray-300"
        />
        <button type="submit" className="ml-2 p-2 bg-wells-fargo-yellow text-black rounded">Search</button>
      </form>

      {loading && <p className="text-yellow-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {entitlements && (
        <div className="entitlements-list">
          {Object.entries(entitlements).map(([name, details]) => (
            <div key={name} className="entitlement-item p-2 bg-white text-black rounded mb-2">
              <h3 className="font-bold">{name}</h3>
              {/* {console.log(riskTier,pbl)} */}
              <p>Risk Tier: {details.riskTier || 'N/A'}</p>
              <p>PBL: {details.pbl || 'N/A'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EntitlementsSearch;
