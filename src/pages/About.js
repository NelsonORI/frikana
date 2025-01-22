import Dashboard from "../components/Dashboard";
import "./About.css"; // Importing the CSS file

function About() {
    return (
        <div>
            <Dashboard />
            <div className="container about-container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">About Us</h1>
                        <p>At Frikana Flight Services Ltd, we provide comprehensive flight support services tailored to meet the needs of commercial, private, and chartered flights. Our mission is to ensure that your journey is as seamless and efficient as possible, offering a wide range of services designed to support the aviation community. From securing overfly permits to providing premium fuel services, we handle the logistics, so you can focus on your flight.</p>
                        <h2>Why Choose Us?</h2>
                        <ul>
                            <li><strong>24/7 Support:</strong> Our team is available around the clock to assist with any questions or emergencies.</li>
                            <li><strong>Expert Team:</strong> With years of experience in the aviation industry, we ensure your needs are met with professionalism and efficiency.</li>
                            <li><strong>Customized Service:</strong> We cater to both large commercial airlines and private aircraft owners, offering flexible solutions for any size of operation.</li>
                        </ul>
                        <h2>Our Vision</h2>
                        <p>Our vision is to be the leading flight support service provider globally, recognized for our commitment to excellence, safety, and innovation. We aim to build lasting relationships with our clients by consistently delivering superior service and value.</p>
                        <h2>Meet Our Team</h2>
                        <p>Our dedicated team of professionals brings a wealth of experience and expertise to every flight support service we offer. We pride ourselves on our collaborative approach, working closely with clients to understand their unique needs and deliver tailor-made solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
