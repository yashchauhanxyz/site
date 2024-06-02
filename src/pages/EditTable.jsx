import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([{permissionName:"create", riskTier:"1"}]);
  const [rating, setRating] = useState({});

  const handleSearch = async () => {
    try {
      const response = await axios.get(`your-backend-api-url/search?query=${searchTerm}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRatingChange = async (id, value) => {
    try {
      setRating({ ...rating, [id]: value });
      await axios.post(`your-backend-api-url/rate`, { id, rating: value });
    } catch (error) {
      console.error('Error posting rating:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      <div className="card-container">
        {data.map((item) => (
          <div key={item.permissionName} className="card">
            <div className="card-content">
              <h3>{item.permissionName}</h3>
            </div>
            <div className="rating">
              <select
                value={item.riskTier || ''}
                onChange={(e) => handleRatingChange(item.id, e.target.value)}
              >
                <option value="" disabled>Select rating</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              <span role="img" aria-label="edit">✏️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
