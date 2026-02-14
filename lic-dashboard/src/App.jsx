import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Policies from './pages/Policies';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [policies, setPolicies] = useState(() => {
    const saved = localStorage.getItem('licPolicies');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem('licPolicies', JSON.stringify(policies));
  }, [policies]);

  return (
    <div className="app">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {currentPage === 'dashboard' && <Dashboard policies={policies} />}
        {currentPage === 'policies' && <Policies policies={policies} setPolicies={setPolicies} />}
      </main>
    </div>
  );
}

export default App;
