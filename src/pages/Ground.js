import Dashboard from "../components/Dashboard";
import "./Ground.css"; // Importing the CSS file

function Ground() {
    return (
        <div>
            <Dashboard />
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://afske.aero/assets/img/images/16. Belt Loader_ground.JPG" alt="Belt Loader"/>
                        <img className="img-fluid rounded mb-3" src="https://afske.aero/assets/img/images/DAV_5285_ground.jpg" alt="Ground Handling"/>
                    </div>
                    <div className="col-md-8">
                        <h1 className="text-center mb-4">Ground Handling</h1>
                        <p>Our Ground Handling Services ensure smooth and efficient operations at airports, supporting airlines and passengers alike. We specialize in a range of services including:</p>
                        <ul>
                            <li>Aircraft Handling: Safe and timely aircraft arrival and departure procedures.</li>
                            <li>Baggage Handling: Quick and secure management of passenger luggage.</li>
                            <li>Cargo Services: Efficient loading and unloading of cargo shipments.</li>
                            <li>Passenger Assistance: Seamless check-in, boarding, and deplaning services.</li>
                            <li>Ramp Services: Aircraft marshaling and towing, refueling, and servicing.</li>
                            <li>Security & Safety: Adherence to all security protocols and safety regulations.</li>
                        </ul>
                        <p>With a team of experienced professionals and state-of-the-art equipment, we ensure your flight operations run smoothly from gate to gate.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ground;
