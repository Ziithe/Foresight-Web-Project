import React from 'react';
import '../css/About.css';
function About() {
    return (
        <>
        <section className="aboutSection" id="section2">
            <h1 className="aboutTitle">Simple, easy crop surveying</h1>
            <h5 className="aboutText">Running a farm is difficult. Knowing the state of your crops shouldn't be.</h5>

            <div className="aboutContainer">
                <div className="aboutLeft">
                    <img src="/assets/about.jpg" alt="Drone Shot near Mt.Elgon" className="aboutImg"></img>
                </div>
                
                <div className="aboutRight">
                    <h2 className="aboutRightTitle">Gain a keen eye into your crop health</h2>
                    <p className="aboutRightText">Foresight is an agri-tech start-up based in Kenya that uses agricultural drone technology to determine crop quality and accurately estimate crop yields. This will provide a precise method of obtaining crop forecasts in the age of changing weather conditions. 
                    Our drones are equipped with high-quality cameras that are capable of taking sharp aerial pictures, that contain projections of yield amounts and quality in terms of moisture levels and overall crop health. </p>

                    <div className="aboutBtnContainer">
                        <button className="aboutBtn">Learn more</button>

                    </div>

                </div>
            </div>

            <div className="iconContainer">
                <div className="iconColumn">
                    <img src="../assets/icons/farmer.png" alt="Farmer"/>
                    <p>35,000+ Farmers</p>
                
                </div>

                <div className="iconColumn">
                    <img src="../assets/icons/acre.png" alt="Farm"/>
                    <p>500,000+ Acres</p>
                
                </div>

                <div className="iconColumn">
                    <img src="../assets/icons/health.png" alt="Crop Quality"/>
                    <p>99.4% Crop quality</p>
                
                </div>

                <div className="iconColumn">
                    <img src="../assets/icons/drone.png" alt="Drones"/>
                    <p>250 Operating drones</p>
                
                </div>

            </div>
        </section>
        </>
    )
}

export default About
