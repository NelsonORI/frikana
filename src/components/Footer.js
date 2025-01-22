import React from 'react';
import "./Footer.css"; // Assuming you have some CSS specific to Footer component

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: info@frikana.com</p>
                        <p>Phone: +123 456 789</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="/ground">Ground Handling</a></li>
                            <li><a href="/fuel">Fuel Services</a></li>
                            <li><a href="/overfly">Overfly Permits</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br/>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br/>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; 2025 AFSKE Aero. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
