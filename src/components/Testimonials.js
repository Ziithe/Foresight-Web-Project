import React from 'react';
import "../css/Testimonials.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Testimonials() {
    return (
        <>
            <section className="testimonialsContainer">
            <h1 className="testimonialTitle">Hear from our users</h1>
                    <p className="testimonialText">Foresight is used by a large community as well as some of the most efficient farms in Africa.</p>
            <CardGroup className="cardGroup">
                    <Card className="howCard">
                        <Card.Img variant="top" src="../assets/testimonials/nailah.jpg" />
                        <Card.Body>
                        <Card.Text className="cardText">
                            Using Foresight has completely changed my business operations. My business has experienced a 45% improvement in our crop health and a 70% jump in revenues thanks to Foresight's keen edge.
                        </Card.Text>
                        <Card.Text className="cardName">
                            <span>Nailah Hika</span> MD, Nailah Farm
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="howCard">
                        <Card.Img variant="top" src="../assets/testimonials/aaron.jpeg" />
                        <Card.Body>
                        <Card.Text className="cardText">
                            Foresight is the one product that took me by surprise. I was blown away by the sheer accuracy of the data models, insights and recommendations. It has really simplified our business operations.
                        </Card.Text>
                        <Card.Text className="cardName">
                            <span>Aaron Gyomei</span> CEO, West Vinery
                        </Card.Text>
                        </Card.Body>

                    </Card>
                    
                    <Card className="howCard">
                        <Card.Img variant="top" src="../assets/testimonials/tiwani.jpeg" />
                        <Card.Body>
                        <Card.Text className="cardText">
                            I appreciate how easy it is to use Foresight, we were able to train our whole team in using it and ensuring we focus on providing the best we can. The insights are really helpful.
                        </Card.Text>

                        <Card.Text className="cardName">
                            <span>Vivian Tiwani</span> CEO, Munda Farm
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup> 
                
                

            </section>
        </>
    );
}

export default Testimonials;
