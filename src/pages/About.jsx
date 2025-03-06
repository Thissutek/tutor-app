import ProcessLeft from "../components/processLeft";
import ProcessRight from "../components/processRight";
import ProcessStep from "../components/ProcessStep";
import { useRef} from "react";
import { Link } from "react-router";
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
                    <h2 className="text-3xl font-bold mb-4 section-header header-style px-10 mx-10">
                        Meet Amy
                    </h2>
                    <p className="text-lg leading-relaxed section-text text-style px-10 mx-10">
                    Hey there! I’m a tutor, STEM nerd, and someone who actually enjoys helping students go from “I don’t get this” to “Wait… this actually makes sense!” If math and science have ever felt frustrating or overwhelming, I totally get it. But learning doesn’t have to be stressful—I’m here to change that. <br></br> <br></br>
                    I studied Psychology at the University of Toronto, and I’ve always been fascinated by how we learn—why some students struggle while others thrive, and how small shifts in teaching can make a huge difference. That curiosity led me to tutoring, where I realized that the problem isn’t that students aren’t capable—it’s that traditional teaching methods don’t always work for everyone. <br></br> <br></br>
                    I believe learning should feel engaging, not exhausting. That’s why I use science-backed study techniques to make things click without the stress. My approach is gentle, patient, and pressure-free, because I know that real learning happens when students feel supported, not judged.
                    </p>
                </div>
            </section>

            {/* Second Part of Profile Description */}
 
            <section className="container mx-auto px-8 py-16 lg:px-20 flex items-start">
                <div className="w-2/3 pl-8 mt-6">
                    <p className="text-lg leading-relaxed section-text text-style px-10 mx-10">
                    When I first started tutoring, I saw the same pattern over and over—students feeling frustrated, doubting their abilities, and thinking they just “weren’t good at” math or science. But once we started breaking things down in a way that worked for them, everything changed. I saw students go from anxious to confident, from struggling to excelling. <br></br> <br></br>
                    That’s why I started this company with one big goal: to make learning easier, less stressful, and more effective—using research-based study techniques that actually work. I wanted to create a team of tutors who shared my belief that every student deserves a calm, supportive, and personalized learning experience. Because when students feel safe to ask questions, make mistakes, and truly understand the material—that’s when real progress happens.
                    </p>
                </div>
                <div className="w-1/3">
                    <img  
                        src="/imgs/about-description.png"
                        alt="Profile" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg mx-auto"
                    />
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

            {/* Description List */}
            <section className="mx-auto px-8 py-16 bg-[#F9D59B] md:px-16">
                <h2 className="text-3xl font-semibold text-left mb-8">We don’t believe in mindless memorization, overwhelming <br></br>study sessions, or one-size-fits-all teaching. <br></br>
                Instead, our approach is all about:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <p className="text-lg text-style">🌟 A gentle, patient teaching style—no pressure, no  stress, no fear of "silly questions"</p>
                        <p className="text-lg text-style">🌟 Breaking down complex topics in a way that actually makes sense</p>
                        <p className="text-lg text-style">🌟 Building confidence, not just grades—because understanding the material is what matters most</p>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-style">🌟 Science-backed study techniques to help students actually retain information</p>
                        <p className="text-lg text-style">🌟 Custom lessons that adapt to each student’s learning style and pace</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <h3 className="text-2xl font-semibold mb-4">At the end of the day, our goal isn’t just to help students pass their tests—it’s <br></br> to help them feel capable, confident, and in control of their learning</h3>
                    <Link to="/contact" className="CTA text-center px-4 py-2 rounded-lg shadow-md">
                        Book Now
                    </Link>
                </div>
            </section>


            <section className="py-20">
                {/* Header - Centered */}
                <div className="text-center mb-auto px-8">
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
                    hoverDescription="Fill out our form, and our team will reach out within 24 hours. Enjoy a free 15-minute phone consultation where we’ll discuss your child’s needs, explore how we can help, and find the best tutoring options."
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
                    hoverDescription="We carefully match each student with a tutor based on their academic goals and learning style. Our tutors are certified, experienced, and passionate about fostering independent thinking. They will assess the student’s needs to create a tailored learning plan."
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
                    hoverDescription="Every student is unique, and so is our approach. Whether it’s mastering concepts, homework support, or test prep, our tutors adapt their teaching style to bridge learning gaps and enhance academic skills."
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
                    hoverDescription="Learning is a two-way process. Our tutors work closely with students to create the perfect learning environment. We encourage students to communicate their needs, practice independent learning, and come prepared for sessions to maximize progress."
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
                    hoverDescription="Your feedback matters! After the first session, we’ll check in to ensure a great fit. Need a new tutor? We’ll replace them for free. Unsatisfied? Get a 50% refund on the first session. After 10 sessions, we’ll follow up to track progress and adjust as needed."
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
                    hoverDescription="Our goal is your child’s academic success and confidence. With the right tutor, a personalized approach, and ongoing support, we empower students to excel in their studies and develop skills that last a lifetime."
                />
            
        </div>
    </>
    )
}