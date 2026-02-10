import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './css/attack.css';
import Header from '../header.jsx';

function AttackAnalytics() {
//   const navigate = useNavigate();
    return (
        <div className="attack-page">
            <div className="attack-grid">
                <div className="attack-col-1">
                    <div className="attack-row-1">
                        <p>Attack Analytics Top Left</p>
                    </div>
                    <div className="attack-row-2">
                        <div className="card1">
                            <h3>Attack Statistics</h3>
                            <p>Real-time attack data visualization</p>
                        </div>
                        <div className="card2">
                            <h3>Threat Analysis</h3>
                            <p>Current threat level and patterns</p>
                        </div>
                    </div>
                </div>
                <div className="attack-col-2">
                    <div className="attack-row-3">
                        <p>Attack Analytics Top Right</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default AttackAnalytics;

    

