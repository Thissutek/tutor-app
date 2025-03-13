export default function ServiceBanner() {
    return (
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]">
            {/* Banner Image */}
            <img 
                src="/imgs/service-banner.png" 
                alt="Services Banner" 
                className="w-full h-full object-cover"
            />

            {/* Overlay with Text */}
            <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-12">
                <div className="bg-[rgba(0,0,0,0.60)] p-4 md:p-6 rounded-lg header-style-inverse max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-center header-style-inverse">
                        Personalized Tutoring to Boost <br className="hidden sm:block" /> Confidence and Grades
                    </h1>
                </div>
            </div>
        </div>
    )
}