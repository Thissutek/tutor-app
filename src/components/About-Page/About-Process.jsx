import ProcessLeft from "./processLeft";
import ProcessRight from "./processRight";
import ProcessStep from "./ProcessStep";
import { useRef} from "react";
import { motion, useInView } from 'framer-motion';


export default function AboutProcess() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    return(
        <>
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
                    linePositionX="-110%" 
                    linePositionY="50%"
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
        </>
    )
}