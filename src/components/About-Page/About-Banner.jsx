export default function AboutBanner() {
    return (
        // <section className="relative w-full h-screen">
        //     <img 
        //         src="/imgs/About-banner.png" 
        //         alt="About Us" 
        //         className="w-full h-full object-cover"
        //     />
        //     <div className="absolute inset-0 flex flex-col items-center justify-center">
        //         <h1 className="text-4xl md:text-6xl font-bold header-style-inverse header-banner">
        //             Confidence Starts with the Right Support
        //         </h1>
        //         <p className="text-lg text-white mt-4 header-banner-text text-style-inverse">
        //             One-on-One Tutoring for Every Learner
        //         </p>
        //     </div>
        // </section>
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh]">
            {/* Banner Image */}
            <img 
                src="/imgs/About-banner.png" 
                alt="Services Banner" 
                className="w-full h-full object-cover"
            />

            {/* Overlay with Text */}
            <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-12">
                <div className="bg-[rgba(0,0,0,0.60)] p-4 md:p-6 rounded-lg header-style-inverse max-w-[90%] md:max-w-[70%] lg:max-w-[50%] text-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-center text-white">
                        Confidence Starts with the Right Support
                    </h1>
                    <p>One-on-One Tutoring for Every Learner</p>
                </div>
            </div>
        </div>
    )
}