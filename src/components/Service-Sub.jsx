export default function ServicesSub({ bannerImage, bannerHeader, firstHeader, firstDescription, serviceHeader, serviceDescription, rightGraphic, rightHeader }) {
    return (
        <>
            {/* Banner Section */}
            <section className="relative w-full h-screen">
                <img 
                    src={bannerImage}
                    alt="Services Banner" 
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[rgb(0,0,0)]/50"></div>

                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-10">
                    <h1 className="text-4xl font-bold text-white ml-80">
                        {bannerHeader}
                    </h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container mx-auto px-8 lg:px-20 py-12">
                <h2 className="text-3xl font-bold text-center mb-4">
                    {firstHeader}
                </h2>
                <p className="text-lg text-center mb-6">
                    {firstDescription}
                </p>
                <div className="flex justify-center">
                    <button className="CTA px-6 py-3 font-semibold rounded-lg shadow-md">
                        Learn More
                    </button>
                </div>
            </section>

            {/* Service Details Section */}
            <section className="container mx-auto px-8 lg:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div>
                    <h3 className="text-3xl font-bold mb-4">
                        {serviceHeader}
                    </h3>
                    <p className="text-lg leading-relaxed">
                        {serviceDescription}
                    </p>
                </div>

                {/* Right Side - Image with Text and CTA */}
                <div className="flex flex-col items-center">
                    <img 
                        src={rightGraphic} 
                        alt="Tutoring Service" 
                        className="w-full h-64 object-contain rounded-lg mb-4"
                    />
                    <h4 className="text-2xl font-semibold mb-2">
                        {rightHeader}
                    </h4>
                    <button className="CTA px-6 py-3 font-semibold rounded-lg shadow-md">
                        Get Started
                    </button>
                </div>
            </section>
        </>
    )
}