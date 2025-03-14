import { useState } from "react";
import TestimonyCardV2 from "./Testimony-cardv2";

export default function TestimonyCard() {
        const testimonials = [
            {
              id: 1,
              name: "Sarah Johnson",
              image: "/imgs/students-1.jpg",
              text: "Working with this team completely transformed our business. Their attention to detail and customer service is unmatched in the industry."
            },
            {
              id: 2,
              name: "Michael Chen",
              image: "/imgs/students-2.jpg",
              text: "I was skeptical at first, but the results speak for themselves. Our conversion rate increased by 40% within the first month!"
            },
            {
              id: 3,
              name: "Priya Patel",
              image: "/imgs/students-3.jpg",
              text: "The level of professionalism and expertise this company brings is exceptional. They truly understand our needs and deliver beyond expectations."
            },
            {
              id: 4,
              name: "James Wilson",
              image: "/imgs/students-4.jpg",
              text: "From day one, the communication was clear and the timeline was respected. I couldn't be happier with the outcome of our project."
            },
            {
              id: 5,
              name: "Emma Rodriguez",
              image: "/imgs/students-5.jpg",
              text: "Their innovative approach to problem-solving made all the difference. Our team learned so much working alongside them."
            }
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
        <section className="py-20">
                <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Hear From Our Students</h2>
                
                 {/* Carousel */}
                <div className="relative">
                    {/* Testimonial Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {visibleTestimonials().map((testimonial) => (
                        <div 
                        key={testimonial.id} 
                        className="background-green rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col"
                        >
                        {/* Image covering top half of card - now anchored from top */}
                        <div className="w-full h-80 overflow-hidden">
                            <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover object-top"
                            />
                        </div>
                        
                        {/* Text content in bottom half */}
                        <div className="p-6">
                            <p className="text-style-inverse mb-4">{testimonial.text}</p>
                            <h3 className="font-semibold text-lg header-style-inverse">{testimonial.name}</h3>
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center mt-10 gap-4">
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