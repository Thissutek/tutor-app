import TestimonyBanner from '../components/Testimonial-Page/Testimony-banner';
import Carousel from '../components/Testimonial-Page/Testimony-card';


export default function Testimonials() {

    return(
        <>
           <div className="min-h-screen">

            {/* Banner Section */}
            <TestimonyBanner />

            {/* Testimonials Carousel Section */}
            <Carousel />
            
            </div>
        </>
    )
}