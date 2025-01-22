import { useState } from 'react';

function Slideshow() {
    const images = [
        "https://afske.aero/assets/img/IMG_1201.JPG",
        "https://afske.aero/assets/img/DSC_7269.JPG"
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    const slideContent = [
        {
            title: "Frikana Flight Services Ltd",
            description:
                "We provide comprehensive flight support services tailored to meet the needs of commercial, private, and chartered flights. Our mission is to ensure that your journey is as seamless and efficient as possible, offering a wide range of services designed to support the aviation community."
        },
        {
            title: "Ground Handling Services",
            description:
                "Our Ground Handling Services ensure smooth and efficient operations at airports, supporting airlines and passengers alike."
        }
    ];

    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === current ? "active" : ""}
                        aria-current={index === current ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrent(index)}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={index === current ? "carousel-item active" : "carousel-item"}
                    >
                        <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{slideContent[index].title}</h5>
                            <p>{slideContent[index].description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" onClick={prevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true">&#10094;</span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={nextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true">&#10095;</span>
                <span className="visually-hidden">Next</span>
            </button>

            <style>{`
                .carousel-control-prev-icon,
                .carousel-control-next-icon {
                    font-size: 30px;
                    color: white;
                }
                .carousel-indicators button {
                    background-color: gray;
                }
                .carousel-indicators .active {
                    background-color: white;
                }
            `}</style>
        </div>
    );
}

export default Slideshow;
