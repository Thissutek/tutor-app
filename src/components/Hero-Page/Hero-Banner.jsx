export default function HeroBanner() {

    return(
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
    )
}