import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './css/traffic.css';

function Traffic() {
//   const navigate = useNavigate();
    return (
        <div className="traffic-page">
            <div className="traffic-grid">
                <div className="traffic-col-1">
                    <div className="traffic-row-1">
                        <p>Traffic Top Left</p>
                    </div>
                    <div className="traffic-row-2">
                        <p>Traffic Bottom Left</p>
                    </div>
                </div>
                <div className="traffic-col-2">
                    <div className="traffic-row-3">
                        <p>Traffic Top Right</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Traffic;

    

