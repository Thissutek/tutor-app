import Card from "../components/Card"
import ProfileCard from "../components/ProfileCard"

export default function HeroPage() {
    return(
        <>
            <section className="h-screen flex text-center background-green">
                <div className="mx-auto flex items-center justify-between">
                    
                    {/* Left Side - Text Content */}
                    <div className="max-w-lg text-center ml-40">
                        <h3 className="header-style-inverse text-3xl md:text-5xl font-bold leading-tight">
                            Building Strong Foundations<br></br>
                            for a Brighter Future
                        </h3>
                        <p className="text-style-inverse mt-4 text-lg ">
                        At Aims2Learn, we help students aim higher. Our expert tutors don’t just teach—they empower. With personalized lessons designed to turn struggles into strengths, we build confidence for lasting success.
                        </p>
                        
                        {/* CTA Button */}
                        <button className="CTA mt-6 px-6 py-3 font-semibold rounded-lg shadow-md transition">
                            Get Started
                        </button>
                        
                        {/* Fine Print */}
                        <p className="text-style-inverse mt-2 text-sm ">
                            Book a 15 Min Consultation
                        </p>
                        </div>

                    {/* Right Side - Image Placeholder */}
                    <div className="relative h-screen">
                        <img
                            src="/imgs/Hero-banner.jpg" 
                            alt="Group of people"
                            className="w-full h-full object-cover curve-mask"
                        />
                        </div>
                </div>
            </section>
            <section className=" py-16">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold header-style">
                    We’re here to help your child thrive
                    </h2>
                </div>

                {/* Cards Section */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 px-8">
                    <Card 
                    imageSrc="/imgs/Asset 1.png" 
                    title="Personalized Lesson Plan" 
                    description="Every student learns differently. We tailor lessons to individual strengths and struggles, ensuring targeted support for academic success." 
                    buttonText="Learn More" 
                    />
                    <Card 
                    imageSrc="/imgs/Asset 2.png" 
                    title="Expert Certified Tutors" 
                    description="We don’t just teach—we analyze, guide, and adjust in real time. With patience and encouragement, we help students build confidence, independence, and a deep understanding of their subjects." 
                    buttonText="Learn More" 
                    />
                    <Card 
                    imageSrc="/imgs/Asset 3.png" 
                    title="Proven Academic Success" 
                    description="We don’t just teach—we analyze, guide, and adjust in real time. With patience and encouragement, we help students build confidence, independence, and a deep understanding of their subjects." 
                    buttonText="Learn More" 
                    />
                </div>
            </section>
            <section className="py-16 bg-[#F9D59B]">
                <div className="container mx-auto px-8 lg:px-20">
                    {/* Left-aligned header */}
                    <h2 className="text-3xl font-bold mb-8 text-left">What Our Clients Say</h2>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProfileCard 
                        imageSrc="/imgs/profile1.jpg"
                        name="John Doe"
                        text="Great experience learning from the Tutors!"
                    />
                    <ProfileCard 
                        imageSrc="/imgs/profile1.jpg"
                        name="Jane Smith"
                        text="Highly recommend their services. Very professional!"
                    />
                    <ProfileCard 
                        imageSrc="/imgs/profile1.jpg"
                        name="Alice Johnson"
                        text="They went above and beyond my expectations!"
                    />
                    <ProfileCard 
                        imageSrc="/imgs/profile1.jpg"
                        name="Mark Lee"
                        text="Fantastic work! I'll definitely work with them again."
                    />
                    <ProfileCard 
                        imageSrc="/imgs/profile1.jpg"
                        name="Sarah Williams"
                        text="Quality service and amazing support!"
                    />
                    <ProfileCard 
                        imageSrc="/imgs/profile1.jpg"
                        name="David Brown"
                        text="I couldn't be happier with the results!"
                    />
                    </div>

                    {/* Read More CTA */}
                    <div className="mt-12 text-center">
                    <button className="px-6 py-3 bg-[#566137] text-white font-semibold rounded-lg shadow-md  transition">
                        READ MORE
                    </button>
                    </div>
                </div>
            </section>
        </>
    )
}