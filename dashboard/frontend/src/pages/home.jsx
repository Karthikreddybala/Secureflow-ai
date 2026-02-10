import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container fluid className="home-container">
      <div className="hero-section text-center py-5">
        <h1 className="hero-title">Welcome to SECUREFLOW-AI</h1>
        <p className="hero-subtitle">Advanced Intrusion Detection & Network Security</p>
      </div>

      <Container>
        <Row className="g-4 my-5">
          <Col md={4}>
            <Card className="feature-card h-100">
              <Card.Body className="text-center">
                <h5 className="card-title">Real-Time Traffic</h5>
                <p className="card-text">Monitor your network traffic in real-time with advanced analytics</p>
                <Button 
                  variant="primary" 
                  onClick={() => navigate('/traffic')}
                >
                  View Traffic
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="feature-card h-100">
              <Card.Body className="text-center">
                <h5 className="card-title">Blocked IPs</h5>
                <p className="card-text">Track and manage all blocked IP addresses and threats</p>
                <Button 
                  variant="danger" 
                  onClick={() => navigate('/blocked-ips')}
                >
                  View Blocked IPs
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="feature-card h-100">
              <Card.Body className="text-center">
                <h5 className="card-title">Attack Analytics</h5>
                <p className="card-text">Analyze security threats and attack patterns</p>
                <Button 
                  variant="warning" 
                  onClick={() => navigate('/analytics')}
                >
                  View Analytics
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="info-section text-center py-5">
          <h3>Quick Start</h3>
          <p>Use the navigation menu above to access different sections or click on the cards above to get started.</p>
        </div>
      </Container>
    </Container>
  );
}