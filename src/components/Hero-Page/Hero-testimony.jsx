import ProfileCard from "./ProfileCard"

export default function HeroTestimony() {
    return (
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
    )
}