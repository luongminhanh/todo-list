import React from 'react'
import '../scss/Slide.scss'
import img from '../../assets/feedback.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'

const Slide = () => {
    return (
        <div className='slide-container-big'>
            <div className='slide-container-small'>
                <h1>Testimonials</h1>
                <div className='slide-container-small-content'>

                    <Carousel className="slide-container-small-content-img">
                        <div>
                            <img src={img} />
                        </div>
                        <div>
                            <img src={img} />
                        </div>
                        <div>
                            <img src={img} />
                        </div>
                    </Carousel>

                </div>
            </div>
        </div>

    )
}

export default Slide;
