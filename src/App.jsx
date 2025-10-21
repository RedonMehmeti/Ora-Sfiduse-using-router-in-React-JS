// App.jsx
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Success from './Success';

function FormPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success'); // Go to success page
  };

  return (
    <div className="wrapper">
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Emri dhe mbiemri" required />
          <input type="text" placeholder="Adresa" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

// Main App with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
