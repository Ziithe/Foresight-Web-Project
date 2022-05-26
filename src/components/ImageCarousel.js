import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/ImageCarousel.css';


function ImageCarousel() {
        return (
            <>
            <Carousel className="carouselSection" autoPlay={true}>
                <div>
                    <img src="assets/drone2.jpg" alt= "Man holding a Foresight TX360 Drone" className="carouselImg" />
                    <p className="legend">Our drones store and transmit the data they record instantly to our analysis team.</p>
                </div>
                <div>
                    <img src="assets/approach-drone.jpg" alt="One of our drones in action during a farm survey" className="carouselImg" />
                    <p className="legend">Foresight drones are equipped with high quality cameras and sensors to suitably survey farms.</p>
                </div>
                <div>
                    <img src="assets/aerial.jpg" alt="Aerial view of a farm we recently surveyed" className="carouselImg" />
                    <p className="legend">Our drones have an average in-air flight time of 45 minutes and survey about one acre every 2 minutes.</p>
                </div>
            </Carousel>
            </>
        );
}
export default ImageCarousel;

// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import styles from '../css-modules/ImageCarousel.module.css';

// function ImageCarousel() {
//     return (
//         <>
//             <Carousel fade>
//             <Carousel.Item>
//                 <img
//                 className="d-block w-100"
//                 src="/assets/drone2.jpg"
//                 alt="First slide"
//                 />
//                 <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                 className="d-block w-100"
//                 src="/assets/approach-drone.jpg"
//                 alt="Second slide"
//                 />

//                 <Carousel.Caption>
//                 <h3>Second slide label</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                 className="d-block w-100"
//                 src="/assets/aerial.jpg"
//                 alt="Third slide"
//                 />

//                 <Carousel.Caption>
//                 <h3>Third slide label</h3>
//                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             </Carousel>
//         </>
//     )
// }

// export default ImageCarousel
