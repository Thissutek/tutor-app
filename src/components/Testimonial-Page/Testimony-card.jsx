import { useRef, useState } from "react";
import TestimonyCardV2 from "./Testimony-cardv2";

export default function Carousel() {
        const testimonials = [
            {
                id: 1,
                review: "Working with this team completely transformed our business. Their attention to detail and customer service is unmatched in the industry.",
                user: "Sarah Johnson",
            },
            {
                id: 2,
                review: "Awesome learning from all the tutors.",
                user: "Devin Jamieson",
            },
            {
                id: 3,
                review: "I learned a lot about my ability to learn. Thank you to the team",
                user: "Jamie Haroldson",
            },
            {
                id: 4,
                review: "Helped me study for my exams.",
                user: "Rachel Greene",
            },
            {
                id: 5,
                review: "Amy is awesome.",
                user: "Matty Matheson",
            },
            {
                id: 6,
                review: "I learn a lot.",
                user: "Bejoc Parfait",
            },

          ];
    
    
    
          // State for carousel
            const [currentIndex, setCurrentIndex] = useState(0);
            
            // Calculate which testimonials to show (3 at a time)
            const visibleTestimonials = () => {
                const result = [];
                for (let i = 0; i < 3; i++) {
                const index = (currentIndex + i) % testimonials.length;
                result.push(testimonials[index]);
                }
                return result;
            };
    
            // Carousel navigation
            const goToPrev = () => {
                setCurrentIndex((prevIndex) => 
                (prevIndex - 1 + testimonials.length) % testimonials.length
                );
            };
    
            const goToNext = () => {
                setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % testimonials.length
                );
            };
    return(
        <section className="py-10">
                <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center">Hear From Our Students</h2>
                
                 {/* Carousel */}
                <div className="relative">
                    {/* Testimonial Cards */}
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory p-4 justify-center items-center h-[70vh]">
                    {visibleTestimonials().map((testimonial) => (
                        <TestimonyCardV2
                        key={testimonial.id}
                        testimony_review={testimonial.review}
                        testimony_user={testimonial.user}
                        />
                    ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4">
                    <button 
                        onClick={goToPrev}
                        className="CTA text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                        aria-label="Previous testimonials"
                    >
                        &#8592;
                    </button>
                    <button 
                        onClick={goToNext}
                        className="CTA text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                        aria-label="Next testimonials"
                    >
                        &#8594;
                    </button>
                    </div>
                </div>
                </div>
            </section>
    )
}