import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './header.jsx'
import Home from './pages/home.jsx'
import RealTimeTraffic from './pages/RealTimeTraffic.jsx'
import BlockedIPs from './pages/BlockedIPs.jsx'
import AttackAnalytics from './pages/AttackAnalytics.jsx'
// import Profile from './pages/Profile.jsx'
// import Settings from './pages/Settings.jsx'
// import Info from './pages/Info.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Dashboard from './pages/dashboard.jsx';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/traffic" element={<RealTimeTraffic />} />
        <Route path="/blocked-ips" element={<BlockedIPs />} />
        <Route path="/analytics" element={<AttackAnalytics />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/info" element={<Info />} /> */}
      </Routes>
    </Router>
  )
}

export default App;