import Dashboard from "../components/Dashboard";
import "./Overfly.css"; // Importing the CSS file

function Overfly() {
    return (
        <div>
            <Dashboard />
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://afske.aero/assets/img/images/DAV_3010.jpg" alt="Overfly Permit 1"/>
                        <img className="img-fluid rounded mb-3" src="https://afske.aero/assets/img/images/DAV_4685%20v2.jpg" alt="Overfly Permit 2"/>
                    </div>
                    <div className="col-md-8">
                        <h1 className="text-center mb-4">Overfly Permits</h1>
                        <p>Navigating the complexities of airspace regulations is critical for flight planning. Our Overfly Permit service takes the hassle out of acquiring the necessary permissions to operate over specific regions. Whether you are flying domestically or internationally, we ensure that your permits are issued promptly and in compliance with all local and international aviation regulations.</p>
                        <h2>Key Benefits of Our Overfly Permit Service:</h2>
                        <ul>
                            <li><strong>Quick Turnaround:</strong> We handle the entire process swiftly to minimize delays in your flight schedule.</li>
                            <li><strong>Global Coverage:</strong> We support overfly permits across various countries and airspaces, ensuring compliance with international flight laws.</li>
                            <li><strong>Expert Assistance:</strong> Our team is knowledgeable and experienced in handling complex airspace restrictions, providing you with accurate and reliable services.</li>
                            <li><strong>Simplified Process:</strong> We streamline the paperwork and coordination with aviation authorities for you, ensuring a hassle-free experience.</li>
                        </ul>
                        <p>No matter your route, we’re here to ensure that your journey remains uninterrupted.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overfly;
