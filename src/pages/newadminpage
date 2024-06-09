import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [entitlements, setEntitlements] = useState([{
    entitlement_name:"DBA",
    risk_tier:"1",
    pbl:"hello",
    permissions:["create,update"],
  }]);
  const [selectedEntitlement, setSelectedEntitlement] = useState(null);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch('/api/entitlements')
  //     .then(response => response.json())
  //     .then(data => setEntitlements(data))
  //     .catch(error => console.error('Error fetching entitlements:', error));
  // }, []);

  const handleEditClick = (entitlement) => {
    setSelectedEntitlement(entitlement);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEntitlement(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedEntitlement({
      ...selectedEntitlement,
      [name]: value,
    });
  };

  const handlePermissionsChange = (e) => {
    const { value } = e.target;
    setSelectedEntitlement({
      ...selectedEntitlement,
      permissions: value.split(','),
    });
  };

  const handleSubmit = () => {
    // Replace with your POST API endpoint
    fetch('/api/entitlements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedEntitlement),
    })
    .then(response => response.json())
    .then(data => {
      setEntitlements(entitlements.map(ent => (ent.id === data.id ? data : ent)));
      handleClose();
    })
    .catch(error => console.error('Error submitting entitlements:', error));
    setOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {entitlements.map((entitlement) => (
          <div className="bg-white p-4 rounded-lg shadow-md" key={entitlement.id}>
            <h5 className="text-lg font-bold mb-2">{entitlement.entitlement_name}</h5>
            <p>Risk Tier: {entitlement.risk_tier}</p>
            <p>PBL: {entitlement.pbl}</p>
            <p>Permissions: {entitlement.permissions.join(', ')}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => handleEditClick(entitlement)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {selectedEntitlement && (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${open ? 'block' : 'hidden'}`}>
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h6 className="text-lg font-bold mb-4">Edit Entitlement</h6>
            <input
              className="w-full p-2 mb-4 border rounded"
              type="text"
              name="risk_tier"
              value={selectedEntitlement.risk_tier}
              onChange={handleInputChange}
              placeholder="Risk Tier"
            />
            <input
              className="w-full p-2 mb-4 border rounded"
              type="text"
              name="pbl"
              value={selectedEntitlement.pbl}
              onChange={handleInputChange}
              placeholder="PBL"
            />
            <input
              className="w-full p-2 mb-4 border rounded"
              type="text"
              name="permissions"
              value={selectedEntitlement.permissions}
              onChange={handlePermissionsChange}
              placeholder="Permissions (comma separated)"
            />
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
