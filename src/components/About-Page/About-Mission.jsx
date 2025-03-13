export default function AboutMission() {
    return(
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
    )
}