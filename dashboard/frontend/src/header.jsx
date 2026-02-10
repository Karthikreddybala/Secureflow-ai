import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
  const navigate = useNavigate();

  const handleDashboardSelect = (eventKey) => {
    console.log('Dashboard selected:', eventKey);
    const routes = {
      'traffic': '/traffic',
      'blocked-ips': '/blocked-ips',
      'analytics': '/analytics',
      'dashboard': '/dashboard'
    };
    if (routes[eventKey]) {
      navigate(routes[eventKey]);
    }
  };

  const handleMenuSelect = (eventKey) => {
    console.log('Menu selected:', eventKey);
    const routes = {
      'profile': '/profile',
      'settings': '/settings',
      'info': '/info',
      'login': '/login'
    };
    if (routes[eventKey]) {
      navigate(routes[eventKey]);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        SECUREFLOW-AI
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>

          <NavDropdown title="Home" id="dashboard-dropdown" onSelect={handleDashboardSelect}>
            <NavDropdown.Item eventKey="traffic">Real-Time Traffic</NavDropdown.Item>
            <NavDropdown.Item eventKey="blocked-ips">Blocked IPs</NavDropdown.Item>
            <NavDropdown.Item eventKey="analytics">Attack Analytics</NavDropdown.Item>
            <NavDropdown.Item eventKey="dashboard">Dashboard</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Menu" id="menu-dropdown" onSelect={handleMenuSelect}>
            <NavDropdown.Item eventKey="profile">Profile</NavDropdown.Item>
            <NavDropdown.Item eventKey="settings">Settings</NavDropdown.Item>
            <NavDropdown.Item eventKey="info">Info</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="login">Login</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;