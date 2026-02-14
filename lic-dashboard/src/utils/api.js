
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Get all policies
export const getPolicies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/policies`);
    if (!response.ok) throw new Error('Failed to fetch policies');
    return await response.json();
  } catch (error) {
    console.error('Error fetching policies:', error);
    throw error;
  }
};

// Get single policy by ID
export const getPolicyById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/policies/${id}`);
    if (!response.ok) throw new Error('Failed to fetch policy');
    return await response.json();
  } catch (error) {
    console.error('Error fetching policy:', error);
    throw error;
  }
};

// Create new policy
export const createPolicy = async (policyData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/policies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(policyData),
    });
    if (!response.ok) throw new Error('Failed to create policy');
    return await response.json();
  } catch (error) {
    console.error('Error creating policy:', error);
    throw error;
  }
};

// Update existing policy
export const updatePolicy = async (id, policyData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/policies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(policyData),
    });
    if (!response.ok) throw new Error('Failed to update policy');
    return await response.json();
  } catch (error) {
    console.error('Error updating policy:', error);
    throw error;
  }
};

// Delete policy
export const deletePolicy = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/policies/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete policy');
    return await response.json();
  } catch (error) {
    console.error('Error deleting policy:', error);
    throw error;
  }
};

// Search policies
export const searchPolicies = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/policies/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Failed to search policies');
    return await response.json();
  } catch (error) {
    console.error('Error searching policies:', error);
    throw error;
  }
};
