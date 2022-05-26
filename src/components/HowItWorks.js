import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../css/HowItWorks.css';

function HowItWorks() {
    return (
        <>
        <section className="approachSection" id="section3">
            <h1 className="howTitle">Our Approach</h1>
                <CardGroup className="cardGroup">
                    <Card className="howCard">
                        <Card.Img variant="top" src="../assets/safety.png" />
                        <Card.Body>
                        <Card.Title className="cardTitle">Safety First</Card.Title>
                        <Card.Text className="cardText">
                            Our drone pilots are certified under ISO/IEC 27001:2013 rating, the highest standard for security, ethics and standard in the technical aero field.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="howCard">
                        <Card.Img variant="top" src="../assets/data.png" />
                        <Card.Body>
                        <Card.Title className="cardTitle">Data Analysis</Card.Title>
                        <Card.Text className="cardText">
                            As part of our process, we clean, transform and model input data from your farm to help you make informed, data-driven decisions.
                        </Card.Text>
                        </Card.Body>

                    </Card>
                    
                    <Card className="howCard">
                        <Card.Img variant="top" src="../assets/predictive.png" />
                        <Card.Body>
                        <Card.Title className="cardTitle">Predictive Analysis</Card.Title>
                        <Card.Text className="cardText">
                            We use the farm data we obtain and feed it into statistical and ML algorithms to identify the likelihood of future outcomes for our farmers.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup> 
            </section>

        </>
    )
}

export default HowItWorks
