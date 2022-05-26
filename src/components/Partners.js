import React from 'react'
import "../css/Partners.css";

function Partners() {
    return (
        <>
            <h1 className="partnersTitle">Trusted by farmers and leading brands</h1>
            <div className="partnersContainer">
                <img src="../assets/partners/sweetgreen.png" className="partnerImg" alt="Sweetgreen Logo" />
                <img src="../assets/partners/oaf.png" className="partnerImg" alt="One Acre Fund Logo" />
                <img src="../assets/partners/farmcrowdy.png" className="partnerImg" alt="Farmcrowdy Logo"/>
                <img src="../assets/partners/twiga.png" className="partnerImg" alt="Twiga Foods Logo"/>
                <img src="../assets/partners/unilever.png" className="partnerImg" alt="Unilever Logo"/>
                <img src="../assets/partners/foodcom.png" className="partnerImg" alt="Foodcom Logo"/>
                <img src="../assets/partners/farmasius.png" className="partnerImg" alt="Farmasius Logo"/>
                <img src="../assets/partners/delmonte.png" className="partnerImg" alt="Del Monte Logo"/>

            </div>
        </>
    )
}

export default Partners
