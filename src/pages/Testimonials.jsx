import TestimonyBanner from '../components/Testimonial-Page/Testimony-banner';
import TestimonyCard from '../components/Testimonial-Page/Testimony-card';
import TestimonyCardV2 from '../components/Testimonial-Page/Testimony-cardv2';

export default function Testimonials() {

    return(
        <>
           <div className="min-h-screen">

            {/* Banner Section */}
            <TestimonyBanner />

            {/* Testimonials Carousel Section */}
            <TestimonyCard />
            
            </div>
        </>
    )
}