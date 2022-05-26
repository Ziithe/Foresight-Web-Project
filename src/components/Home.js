import React from 'react'
import { Helmet } from 'react-helmet';
import ScrollToTop from 'react-scroll-to-top';
import Navbar from './Navbar';
import Hero from './Hero';
import Partners from './Partners';
import About from './About';
import HowItWorks from './HowItWorks';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Footer from './Footer';


function Home() {
    return (
        <>
        <ScrollToTop color="#21897E" smooth/>

            <Helmet>
                <title>Foresight Agricultural Insights | Home</title>
            </Helmet>

            <Navbar />
            <Hero  />
            <Partners />
            <About />
            <HowItWorks />
            <Projects />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home;
