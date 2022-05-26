import React from 'react';
import styles from '../css/Hero.module.css';
import ImageCarousel from './ImageCarousel';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <>
            <section className={styles.heroSection} id="section1">
                    <div className={styles.flexContainer}>
                        <div className={styles.flexLeft}>
                            <h1 className={styles.heroTitle}>Providing Africa access to agricultural drone technology</h1>
                            <h4 className={styles.heroText}>We use agricultural drone technology to help determine subsistence crop quality and estimate yields.</h4>
                            <div className={styles.btnWrapper}>
                            <Link to="/register">
                            <button className={styles.heroBtn}>Create a free account</button>
                            </Link>
                            </div>
                        </div>

                        <div className={styles.flexRight}>
                            <ImageCarousel />
                        </div>
                    </div>
            </section>
        </>

    )
}

export default Hero
