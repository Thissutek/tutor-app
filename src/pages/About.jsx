export default function About() {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Confidence Starts with the Right Support
                    </h1>
                    <p className="text-lg text-white mt-4">
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
                    <h2 className="text-3xl font-bold mb-4">
                        Meet Amy
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Passionate about education and student growth, our founder started this initiative to help students thrive academically and beyond.
                    </p>
                </div>
            </section>

            {/* Centered Text & Full-Width Image Section */}
            <section className="mx-auto px-8 py-16 lg:px-20 flex items-center space-x-8 bg-[#4B562C] h-screen overflow-hidden">
                <div className="w-1/2 text-center">
                    <h2 className="text-3xl font-bold mb-4 header-style-inverse">
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


            <section className="bg-[#F3F4F6] py-20">
                {/* Header - Centered */}
                <div className="text-center mb-12 px-8">
                    <h2 className="text-3xl font-bold">Our Process</h2>
                </div>
            </section>
            {/* Left Side Section - Header and Image */}
            <div className="flex items-center justify-start px-8">
                <div className="w-1/2 text-center pr-8">
                <h3 className="text-xl font-semibold header-style">1. Getting Started</h3>
                <img src="/imgs/Process-1.png" alt="Step 1" className="max-w-[60%] h-auto mx-auto" />
                </div>
            </div>

             {/* Right Side Section - Header and Image */}
            <div className="flex items-center justify-end px-8">
                <div className="w-1/2 text-center pl-8">
                <h3 className="text-xl font-semibold">2. Your Ideal Tutor Match</h3>
                <img src="/imgs/Process-2.png" alt="Step 1" className="max-w-[60%] h-auto mx-auto" />
                </div>
            </div>
        </div>
    </>
    )
}