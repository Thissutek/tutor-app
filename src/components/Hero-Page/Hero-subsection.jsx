import Card from "./Card"

export default function HeroSubsection() {
    return(
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
    )
}