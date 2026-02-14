import React, { useState } from 'react';
import PolicyForm from '../components/PolicyForm';
import PolicyTable from '../components/PolicyTable';
import '../styles/Policies.css';

function Policies({ policies, setPolicies }) {
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDue, setFilterDue] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleAddPolicy = (newPolicy) => {
    if (editingIndex !== null) {
      const updated = [...policies];
      updated[editingIndex] = newPolicy;
      setPolicies(updated);
      showSuccess('Policy updated successfully!');
      setEditingIndex(null);
    } else {
      setPolicies([...policies, newPolicy]);
      showSuccess('Policy added successfully!');
    }
    setShowForm(false);
  };

  const handleEditPolicy = (index) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDeletePolicy = (index) => {
    if (window.confirm('Are you sure you want to delete this policy?')) {
      const policyName = policies[index].name;
      setPolicies(policies.filter((_, i) => i !== index));
      showSuccess(`Policy for ${policyName} deleted successfully!`);
    }
  };

  const filteredPolicies = policies
    .map((policy, idx) => ({ ...policy, originalIndex: idx }))
    .filter(policy => {
      const matchSearch = policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.policyNumber.toLowerCase().includes(searchTerm.toLowerCase());
      if (!filterDue) return matchSearch;
      
      const today = new Date();
      const renewal = new Date(policy.nextRenewalDate);
      const daysUntilRenewal = Math.ceil((renewal - today) / (1000 * 60 * 60 * 24));
      const isDue = daysUntilRenewal >= 0 && daysUntilRenewal <= 30;
      
      return matchSearch && isDue;
    });

  return (
    <div className="policies-container">
      {successMessage && (
        <div className="success-notification">
          <span>✓ {successMessage}</span>
        </div>
      )}

      <div className="policies-header">
        <h2>💼 Manage Policies</h2>
        <div className="policies-controls">
          <input
            type="text"
            placeholder="Search by name or policy number..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filterDue}
              onChange={(e) => setFilterDue(e.target.checked)}
            />
            Due for Renewal
          </label>
          <button className="btn-add-policy" onClick={() => {
            setEditingIndex(null);
            setShowForm(!showForm);
          }}>
            {showForm ? '✕ Cancel' : '➕ Add Policy'}
          </button>
        </div>
      </div>

      {showForm && (
        <PolicyForm
          onSubmit={handleAddPolicy}
          initialData={editingIndex !== null ? policies[editingIndex] : null}
        />
      )}

      <PolicyTable
        data={filteredPolicies}
        onEdit={(idx) => handleEditPolicy(filteredPolicies[idx].originalIndex)}
        onDelete={(idx) => handleDeletePolicy(filteredPolicies[idx].originalIndex)}
      />
    </div>
  );
}

export default Policies;
