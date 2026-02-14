import React from 'react';
import StatCard from '../components/StatCard';
import '../styles/Dashboard.css';

function Dashboard({ policies }) {
  // Calculate statistics
  const totalPolicies = policies.length;
  
  const totalPremium = policies.reduce((sum, policy) => {
    return sum + (parseInt(policy.premiumAmount) || 0);
  }, 0);

  const duePolicies = policies.filter(policy => {
    const today = new Date();
    const renewal = new Date(policy.nextRenewalDate);
    const daysUntilRenewal = Math.ceil((renewal - today) / (1000 * 60 * 60 * 24));
    return daysUntilRenewal >= 0 && daysUntilRenewal <= 30;
  }).length;

  const monthlyModeCount = policies.filter(p => p.mode === 'Monthly').length;

  // Recent policies
  const recentPolicies = [...policies].slice(-5).reverse();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>📊 Dashboard Overview</h2>
        <p className="dashboard-subtitle">Welcome to LIC Agent Management Dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <StatCard
          icon="📋"
          title="Total Policies"
          value={totalPolicies}
          subtitle="Active policies"
          trend={totalPolicies > 0 ? "positive" : ""}
        />
        <StatCard
          icon="💰"
          title="Total Premium"
          value={`₹${(totalPremium / 100000).toFixed(1)}L`}
          subtitle="Collected premium"
          trend={totalPremium > 0 ? "positive" : ""}
        />
        <StatCard
          icon="🔔"
          title="Due for Renewal"
          value={duePolicies}
          subtitle="In next 30 days"
          trend={duePolicies > 0 ? "warning" : ""}
        />
        <StatCard
          icon="📅"
          title="Monthly Mode"
          value={monthlyModeCount}
          subtitle="Monthly policies"
          trend={monthlyModeCount > 0 ? "positive" : ""}
        />
      </div>

      {/* Chart Section Placeholder */}
      <div className="chart-section">
        <div className="chart-header">
          <div>
            <h3 className="chart-title">📈 Revenue Overview</h3>
            <p className="chart-subtitle">Monthly premium collection</p>
          </div>
        </div>
        <div className="chart-container">
          <div style={{ textAlign: 'center', color: '#999' }}>
            <p>📊 Chart visualization placeholder</p>
            <p style={{ fontSize: '12px', marginTop: '8px' }}>Charts will be implemented with Recharts or Chart.js</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-section">
        <h3 className="recent-title">📌 Recent Policies</h3>
        <div className="activity-list">
          {recentPolicies.length === 0 ? (
            <div className="empty-activity">
              <p>No policies added yet</p>
            </div>
          ) : (
            recentPolicies.map((policy, idx) => (
              <div key={idx} className="activity-item">
                <div className="activity-icon">
                  {idx === 0 ? '⭐' : '📄'}
                </div>
                <div className="activity-content">
                  <p className="activity-name">{policy.name}</p>
                  <p className="activity-meta">
                    Policy #{policy.policyNumber} • ₹{parseInt(policy.premiumAmount).toLocaleString('en-IN')} • {policy.mode}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
