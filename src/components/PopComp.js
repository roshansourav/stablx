import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function PopComp() {
    return (
        <div>
            <div className="popcomp">
                <Container>
                    <Row>
                        <Col className="popcompcol1"><h2>Part Time - Evening Classes<sup>New</sup></h2></Col>

                        <Col className="popcompcol2">
                            <p>Schedule | Mon - Fri (6 pm - 11 pm)</p>
                            <p>Live & Online Classes</p>
                            <p>12 Months Highly Engaging Curriculum</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
}

export default PopComp;
