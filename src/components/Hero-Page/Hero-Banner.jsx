export default function HeroBanner() {

    return(
        <section className="h-screen flex items-center justify-start bg-cover bg-center relative">
            {/* Image Section */}
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: 'url(/imgs/Hero-page-banner.png)' }}
            ></div>
            
            <div className="container mx-auto px-8 relative z-10 flex items-center justify-start">
                <div className="text-center w-full max-w-lg">
                    <h3 className="header-style-inverse text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                        Building Strong Foundations<br />
                        for a Brighter Future
                    </h3>
                    <p className="text-style-inverse mt-4 text-base sm:text-lg">
                        At Aims2Learn, we help students aim higher. Our expert tutors don’t just teach—they empower. With personalized lessons designed to turn struggles into strengths, we build confidence for lasting success.
                    </p>
                    
                    <button className="CTA mt-6 px-6 py-3 font-semibold rounded-lg shadow-md transition">
                        Get Started
                    </button>
                    
                    <p className="text-style-inverse mt-2 text-sm">
                        Book a 15 Min Consultation
                    </p>
                </div>
            </div>
        </section>
    )
}