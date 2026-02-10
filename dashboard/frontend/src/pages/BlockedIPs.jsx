import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './css/blockedip.css';

function BlockedIPs() {
//   const navigate = useNavigate();
    return (
        <div className="blockedip-page">
            <div className="blockedip-grid">
                <div className="blockedip-col-1">
                    <div className="blockedip-row-1">
                        <p>Blocked IPs Top Left</p>
                    </div>
                    <div className="blockedip-row-2">
                        <p>Blocked IPs Bottom Left</p>
                    </div>
                </div>
                <div className="blockedip-col-2">
                    <div className="blockedip-row-3">
                        <p>Blocked IPs Top Right</p>
                    </div>
                    <div className="blockedip-row-4">
                        <p>Blocked IPs Bottom Right</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default BlockedIPs;

    

