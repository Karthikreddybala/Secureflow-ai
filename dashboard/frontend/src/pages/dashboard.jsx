import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './css/dashboard.css';
import Header from '../header.jsx';

function Dashboard() {
//   const navigate = useNavigate();
    return (
        <div className="dashboard-page">
            <div className="dashboard-grid">
                <div className="dashboard-col-1">
                    <div className="dashboard-row-1">
                        <p>Dashboard Top Left</p>
                    </div>
                    <div className="dashboard-row-2">
                        <div className="card1">
                            <h3>Dashboard Statistics</h3>
                            <p>System overview and metrics</p>
                        </div>
                        <div className="card2">
                            <h3>Security Status</h3>
                            <p>Current security posture</p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-col-2">
                    <div className="dashboard-row-3">
                        <p>Dashboard Top Right</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Dashboard;

    

