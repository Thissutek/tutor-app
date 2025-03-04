import ProcessLeft from "../components/processLeft";
import ProcessRight from "../components/processRight";
import ProcessStep from "../components/ProcessStep";
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    
    return (
    <>
        <div>
            {/* Banner Section */}
            <section className="relative w-full h-screen">
                <img 
                    src="/imgs/About-banner.jpg" 
                    alt="About Us" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgb(0,0,0)]/50">
                    <h1 className="text-4xl md:text-6xl font-bold header-style-inverse header-banner">
                        Confidence Starts with the Right Support
                    </h1>
                    <p className="text-lg text-white mt-4 header-banner-text text-style-inverse">
                        One-on-One Tutoring for Every Learner
                    </p>
                </div>
            </section>

            {/* Profile & Description Section */}
            <section className="container mx-auto px-8 py-16 lg:px-20 flex items-start">
                <div className="w-1/3">
                    <img 
                        src="/imgs/about-profile.jpg" 
                        alt="Profile" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-2/3 pl-8 mt-6">
                    <h2 className="text-3xl font-bold mb-4 section-header header-style">
                        Meet Amy
                    </h2>
                    <p className="text-lg leading-relaxed section-text text-style">
                        Passionate about education and student growth, our founder started this initiative to help students thrive academically and beyond.
                    </p>
                </div>
            </section>

            {/* Centered Text & Full-Width Image Section */}
            <section className="mx-auto px-8 py-16 lg:px-20 flex items-center space-x-8 bg-[#4B562C] h-screen overflow-hidden">
                <div className="w-1/2 text-center">
                    <h2 className="text-3xl font-bold mb-4 header-style-inverse section-header">
                        Our Mission
                    </h2>
                    <p className="text-lg leading-relaxed text-style-inverse">
                    At Aims2Learn, we believe that great tutoring goes beyond just teaching—it’s about understanding each student’s unique learning needs in the moment. Our tutors are not only knowledgeable and experienced but also adaptable and intuitive, ensuring that every session is tailored to what the student needs most—whether it’s structured lessons, homework support, or independent problem-solving guidance. We don’t just give answers; we analyze, guide, and encourage critical thinking, helping students build confidence and long-term academic success. With patience, generosity, and a gentle approach, we create a supportive learning environment where students feel empowered to grow, learn, and excel at their own pace. At Aims2Learn, we’re not just tutors—we’re dedicated mentors invested in every student’s success
                    </p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img 
                        src="/imgs/mission-banner.jpg" 
                        alt="Mission" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>


            <section className="py-20">
                {/* Header - Centered */}
                <div className="text-center mb-12 px-8">
                    <h2 className="text-3xl font-bold">Our Process</h2>
                </div>
            </section>
            {/* Process User Journey */}
            

             {/* Right Side Section - Header and Image */}
             <ProcessStep 
                    component={ProcessLeft} 
                    header="1. Getting Started"
                    stepImage="/imgs/Process-1.png"
                    stepAlt="Step 1"
                    lineImage="/imgs/about-page/line-1.png"
                    lineAlt="Line 1"
                    linePositionX="-100%" 
                    linePositionY="30%"
                    lineWidth="70%"
                    direction="left"
                    hoverDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                />
                <ProcessStep 
                    component={ProcessRight} 
                    header="2. Your Ideal Tutor Match"
                    stepImage="/imgs/Process-2.png"
                    stepAlt="Step 2"
                    lineImage="/imgs/about-page/line-2.png"
                    lineAlt="Line 2"
                    linePositionX="80%" 
                    linePositionY="30%"
                    lineWidth="100%"
                    direction="right"
                    hoverDescription='Loren Ipsum'
                />

                <ProcessStep 
                    component={ProcessLeft} 
                    header="3. Personalized Learning"
                    stepImage="/imgs/Process-3.png"
                    stepAlt="Step 3"
                    lineImage="/imgs/about-page/line-3.png"
                    lineAlt="Line 3"
                    linePositionX="-100%" 
                    linePositionY="60%"
                    lineWidth="60%"
                    direction="left"
                    hoverDescription='Loren Ipsum'
                />

                <ProcessStep 
                    component={ProcessRight} 
                    header="4. Collaboration"
                    stepImage="/imgs/Process-4.png"
                    stepAlt="Step 4"
                    lineImage="/imgs/about-page/line-4.png"
                    lineAlt="Line 4"
                    linePositionX="100%" 
                    linePositionY="70%"
                    lineWidth="80%"
                    direction="right"
                    hoverDescription='Loren Ipsum'
                />

                <ProcessStep 
                    component={ProcessLeft} 
                    header="5. Feedback & Support"
                    stepImage="/imgs/Process-5.png"
                    stepAlt="Step 5"
                    lineImage="/imgs/about-page/line-5.png"
                    lineAlt="Line 5"
                    linePositionX="-120%" 
                    linePositionY="30%"
                    lineWidth="40%"
                    direction="left"
                    hoverDescription='Loren Ipsum'
                />

                <ProcessStep 
                    component={ProcessRight} 
                    header="6. Success & Growth"
                    stepImage="/imgs/Process-6.png"
                    stepAlt=""
                    lineImage=""
                    lineAlt=""
                    linePositionX="90%" 
                    linePositionY="30%"
                    lineWidth="100%"
                    direction="right"
                    hoverDescription='Loren Ipsum'
                />
            
        </div>
    </>
    )
}