import React from 'react';
import '../styles/PolicyTable.css';

function PolicyTable({ data, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const isUpcomingRenewal = (renewalDate) => {
    const today = new Date();
    const renewal = new Date(renewalDate);
    const daysUntilRenewal = Math.ceil((renewal - today) / (1000 * 60 * 60 * 24));
    return daysUntilRenewal >= 0 && daysUntilRenewal <= 30;
  };

  if (!data || data.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-icon">📋</p>
        <p className="empty-text">No policies found. Add a new policy to get started.</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="policy-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Agent Name</th>
            <th>Policy #</th>
            <th>Mode</th>
            <th>Term</th>
            <th>Sum Assured</th>
            <th>Premium</th>
            <th>Start Date</th>
            <th>Renewal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((policy, index) => (
            <tr key={index} className={isUpcomingRenewal(policy.nextRenewalDate) ? 'highlight-renewal' : ''}>
              <td className="sno">{index + 1}</td>
              <td className="name">{policy.name}</td>
              <td className="policy-number">{policy.policyNumber}</td>
              <td>{policy.mode}</td>
              <td className="center">{policy.term} yrs</td>
              <td className="right">{formatCurrency(policy.sumAssured)}</td>
              <td className="right">{formatCurrency(policy.premiumAmount)}</td>
              <td className="center">{formatDate(policy.policyStartDate)}</td>
              <td className={`center ${isUpcomingRenewal(policy.nextRenewalDate) ? 'renewal-alert' : ''}`}>
                {formatDate(policy.nextRenewalDate)}
                {isUpcomingRenewal(policy.nextRenewalDate) && <span className="renewal-badge">Due</span>}
              </td>
              <td className="actions">
                <button className="btn-edit" onClick={() => onEdit(index)} title="Edit policy">
                  ✏️
                </button>
                <button className="btn-delete" onClick={() => onDelete(index)} title="Delete policy">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PolicyTable;
