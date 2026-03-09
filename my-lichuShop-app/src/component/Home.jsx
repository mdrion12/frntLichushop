import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-text">
                    <h1>Fresh & Juicy Litchis</h1>
                    <p>Enjoy the finest litchis directly from our orchard. Order now and get them delivered fresh!</p>
                    <Link to="/products" className="btn">
                        Shop Now
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;