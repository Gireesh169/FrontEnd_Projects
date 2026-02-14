import React from "react";

function Table({ data, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR"
    }).format(amount);
  };

  if (data.length === 0) {
    return (
      <div className="empty-state">
        <p>No policies found. Add a new policy to get started.</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Policy Number</th>
            <th>Mode</th>
            <th>Term</th>
            <th>Sum Assured</th>
            <th>Issue Date</th>
            <th>DOB</th>
            <th>Premium</th>
            <th>Next Renewal</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="sno">{index + 1}</td>
              <td className="name">{item.name}</td>
              <td className="policy-number">{item.policyNumber}</td>
              <td>{item.mode}</td>
              <td className="center">{item.term} yrs</td>
              <td className="right">{formatCurrency(item.sa)}</td>
              <td className="center">{formatDate(item.date)}</td>
              <td className="center">{formatDate(item.dob)}</td>
              <td className="right">{formatCurrency(item.premiumAmount)}</td>
              <td className="center">{formatDate(item.nextRenewal)}</td>
              <td className="center">{item.mobileNumber}</td>
              <td className="actions">
                <button 
                  className="btn-edit" 
                  onClick={() => onEdit(index)}
                  title="Edit policy"
                >
                  Edit
                </button>
                <button 
                  className="btn-delete" 
                  onClick={() => onDelete(index)}
                  title="Delete policy"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;