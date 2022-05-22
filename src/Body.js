import React from "react";
import Image1 from "./imgs/unnamed-13.jpg";
import Image2 from "./imgs/unnamed-14.jpg";
import Image3 from "./imgs/unnamed-15.jpg";
import Image4 from "./imgs/unnamed-16.jpg";
import Image5 from "./imgs/unnamed-17.jpg";

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Body(){

    const slideImages = [
        {
          url: Image1,
          caption: 'Slide 1'
        },
        {
          url: Image2,
          caption: 'Slide 2'
        },
        {
          url: Image3,
          caption: 'Slide 3'
        },
        {
          url: Image4,
          caption: 'Slide 4'
        },
        {
            url: Image5,
            caption: 'Slide 5'
        },
    ];

    return (
        <>
        {/* Navigation */}
        <a id="home"></a>
        <section className="container grid-2-cols">
        <div className="text">
            
            <div className="text-heading">Flawless Designs</div>
            <div className="text-description">
            Our mission at Flawless Floors is simple: to provide high-quality services for our valued clients. Our team goes above and beyond to cater to each project’s specific needs. 
            Through open communication and exceptional service, we hope you’ll find what you’re looking for with our flexible Flooring Service,  
            from full supply and install to install only services are tailored to suit your needs, For more information or general enquiries, get in touch today.
            </div>
        </div>
        <div className="image img-01" style={{ backgroundImage: `url(${Image1})` }}></div>
        <div className="image img-02" style={{ backgroundImage: `url(${Image2})` }}></div>
        <div className="text">
        
        {/* Navigation */}
        <a id="contact-us"></a>

            <div className="text-heading">About Us</div>
            <div className="text-description">
            Fast, efficient, and honest, Flawless Floors has become a reputable and well-known Flooring Service. Our team is up for every job,
            managing projects with the skill and experience our clients have come to expect.We want our customers to be satisfied with our work, 
            which is why we provide open communication channels throughout the duration of each project.
            </div>
        </div>
        </section>
        
        <section className="body" >
            <div className="info-boxes">
                <div className="left">
                    <h2 className="text-heading">Contact Us</h2>
                    <p>You are welcome to contact us anytime on this number: 000000. We can provide you a quote or any information you may need.                    </p>
                </div>
                <div className="right">
                    <h2 className="text-heading">Where we are located</h2>
                    <p>
                    We are located in the south of England, East Sussex in a town called Lewes. We currently only operate within Sussex.    
                    </p>
                </div>
            </div>
            {/* Navigation */}
            <a id="showcase"></a>
        </section>
        
        <section className="showcase">
            
            <div className="text-heading">Showcase</div>

            <div className="slide-container">
                <Fade>
                    {slideImages.map((each, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{ backgroundImage: `url(${each.url})` }}>
                            </div>
                        </div>
                    ))} 
                </Fade>
            </div>
        </section>
        </>
    );
}