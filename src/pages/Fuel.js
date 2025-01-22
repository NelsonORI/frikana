import Dashboard from "../components/Dashboard";
import "./Fuel.css"; // Assuming you have some CSS specific to Fuel component

function Fuel() {
    return (
        <div>
            <Dashboard />
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://afske.aero/assets/img/images/13.%20Customer%20Service_passenger.JPG" alt="Fuel Service 1"/>
                        <img className="img-fluid rounded mb-3" src="https://afske.aero/assets/img/images/10.%20Cobus_2_passenger_underneath.JPG" alt="Fuel Service 2"/>
                    </div>
                    <div className="col-md-8">
                        <h1 className="text-center mb-4">Fuel Services</h1>
                        <p>Reliable and high-quality fuel is essential for the safe and efficient operation of any flight. Our Fuel Services provide access to top-tier aviation fuel at competitive prices, delivered directly to your aircraft, wherever you are.</p>
                        <h2>Key Features of Our Fuel Services:</h2>
                        <ul>
                            <li><strong>Global Fuel Supply Network:</strong> We source fuel from trusted suppliers worldwide, ensuring you have access to the best quality fuel at your destination.</li>
                            <li><strong>On-time Delivery:</strong> We understand the importance of time in aviation and offer fuel delivery services that ensure you are ready for takeoff without delays.</li>
                            <li><strong>Custom Fuel Solutions:</strong> Whether you need fuel for a short domestic flight or an international journey, we provide flexible solutions to meet your specific needs.</li>
                            <li><strong>Competitive Rates:</strong> We offer competitive pricing, ensuring that you receive the best value for your fuel requirements.</li>
                            <li><strong>Seamless Transactions:</strong> Our user-friendly fuel service makes the ordering and payment process simple, so you can focus on other aspects of your flight.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fuel;
