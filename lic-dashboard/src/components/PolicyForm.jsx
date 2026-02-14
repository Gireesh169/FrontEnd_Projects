import React, { useState } from 'react';
import '../styles/PolicyForm.css';

function PolicyForm({ onSubmit, onCancel, initialData = null }) {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    policyNumber: '',
    mode: 'Monthly',
    term: '',
    sumAssured: '',
    policyStartDate: '',
    dateOfBirth: '',
    premiumAmount: '',
    nextRenewalDate: '',
    mobileNumber: ''
  });

  const [errors, setErrors] = useState({});

  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'policyNumber', label: 'Policy Number', type: 'text', required: true },
    { name: 'mode', label: 'Payment Mode', type: 'select', options: ['Monthly', 'Quarterly', 'Half-Yearly', 'Yearly'], required: true },
    { name: 'term', label: 'Policy Term (Years)', type: 'number', required: true },
    { name: 'sumAssured', label: 'Sum Assured (₹)', type: 'number', required: true },
    { name: 'policyStartDate', label: 'Policy Start Date', type: 'date', required: true },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
    { name: 'premiumAmount', label: 'Premium Amount (₹)', type: 'number', required: true },
    { name: 'nextRenewalDate', label: 'Next Renewal Date', type: 'date', required: true },
    { name: 'mobileNumber', label: 'Mobile Number', type: 'tel', required: true },
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name?.trim()) newErrors.name = 'Name is required';
    if (!formData.policyNumber?.trim()) newErrors.policyNumber = 'Policy Number is required';
    if (!formData.term || formData.term <= 0) newErrors.term = 'Valid term is required';
    if (!formData.sumAssured || formData.sumAssured <= 0) newErrors.sumAssured = 'Sum Assured is required';
    if (!formData.policyStartDate) newErrors.policyStartDate = 'Policy Start Date is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.premiumAmount || formData.premiumAmount <= 0) newErrors.premiumAmount = 'Premium Amount is required';
    if (!formData.nextRenewalDate) newErrors.nextRenewalDate = 'Next Renewal Date is required';
    if (!/^[0-9]{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = 'Valid 10-digit mobile number required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({
        name: '', policyNumber: '', mode: 'Monthly', term: '',
        sumAssured: '', policyStartDate: '', dateOfBirth: '',
        premiumAmount: '', nextRenewalDate: '', mobileNumber: ''
      });
    }
  };

  return (
    <form className="policy-form" onSubmit={handleSubmit}>
      <h2>{initialData ? '✏️ Edit Policy' : '➕ Add New Policy'}</h2>
      
      <div className="form-grid">
        {fields.map(field => (
          <div key={field.name} className="form-group">
            <label>{field.label} {field.required && <span className="required">*</span>}</label>
            {field.type === 'select' ? (
              <select
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className={errors[field.name] ? 'error' : ''}
              >
                <option value="">Select {field.label}</option>
                {field.options?.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className={errors[field.name] ? 'error' : ''}
                placeholder={field.label}
              />
            )}
            {errors[field.name] && <span className="error-text">⚠ {errors[field.name]}</span>}
          </div>
        ))}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initialData ? '💾 Update Policy' : '➕ Add Policy'}
        </button>
        {onCancel && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            ✕ Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default PolicyForm;
