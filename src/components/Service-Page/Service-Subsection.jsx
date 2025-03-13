export default function ServicesSection() {
    return (
        <section className="py-16 px-12">
           <div className="container mx-auto px-8">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 header-style">We Come to You!</h2>

                {/* Service Items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                <div className="flex flex-col items-center text-center">
                    <img 
                    src="/imgs/service-online.png" 
                    alt="Service 1" 
                    className="h-30 w-auto max-w-full"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-style">ONLINE</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img 
                    src="/imgs/service-home.png" 
                    alt="Service 2" 
                    className="h-30 w-auto max-w-full"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-style">HOME</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img 
                    src="/imgs/service-library.png" 
                    alt="Service 3" 
                    className="h-30 w-auto max-w-full"
                    />
                    <h3 className="text-xl font-semibold mt-4 text-style">LIBRARY</h3>
                </div>
                </div>
            </div>
            {/* Bottom Paragraph */}
            <div className="mt-12 text-center max-w-4xl mx-auto">
                <p className="text-lg text-gray-800 text-style">
                    We believe every student deserves the opportunity to excel. Whether it's personalized tutoring, group sessions, or in-depth workshops, our services are designed to empower learners and help them achieve their academic goals.
                </p>
            </div>
        </section>
    );
}
