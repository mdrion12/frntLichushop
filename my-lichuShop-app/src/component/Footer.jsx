import React from 'react';
import './Footer.css'; // CSS import

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h2>Litchi Shop</h2>
                    <p>Fresh & Juicy Litchis Delivered to Your Doorstep</p>
                </div>
                <div className="footer-right">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Litchi Shop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;