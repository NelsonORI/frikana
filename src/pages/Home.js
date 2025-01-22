import Dashboard from "../components/Dashboard";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import heroImage from '../assets/images/pexels-camcasey-1157255.jpg';
import "./Home.css";

function Home() {
    return (
        <div>
            <Dashboard />
            <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <h1>Welcome to Frikana Flight Services Ltd</h1>
                <p>Providing Comprehensive Flight Support Services</p>
                <a href="#services" className="btn">Learn More</a>
            </div>
            <div className="container">
                <Slideshow />
                <h2 id="services" className="text-center my-4">Our Services</h2>
                <div className="row">
                    <div className="col-md-4 mb-4 border cards">
                        <div className="card">
                            <img src="https://afske.aero/assets/img/LH.jpg" className="card-img-top rounded-img" alt="picure" />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <h5 className="card-title text-white">Ground Handling Services</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Our Ground Handling Services ensure smooth and efficient operations at airports, supporting airlines and passengers alike.</p>
                                <a href="/ground" className="btn btn-primary">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 border cards">
                        <div className="card">
                            <img src="https://afske.aero/assets/img/cobus.jpg" className="card-img-top rounded-img" alt="picure" />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <h5 className="card-title text-white">Fuel Services</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Reliable and high-quality fuel is essential for the safe and efficient operation of any flight. Our Fuel Services provide access to top-tier aviation fuel at competitive prices, delivered directly to your aircraft, wherever you are.</p>
                                <a href="/fuel" className="btn btn-primary">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 border cards">
                        <div className="card">
                            <img src="https://afske.aero/assets/img/coldroom.jpg" className="card-img-top rounded-img" alt="picure" />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <h5 className="card-title text-white">Overfly Permits</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Navigating the complexities of airspace regulations is critical for flight planning. Our Overfly Permit service takes the hassle out of acquiring the necessary permissions to operate over specific regions.</p>
                                <a href="/overfly" className="btn btn-primary">READ MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
