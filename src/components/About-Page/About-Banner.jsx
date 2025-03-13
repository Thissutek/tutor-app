export default function AboutBanner() {
    return (
        <section className="relative w-full h-screen">
            <img 
                src="/imgs/About-banner.jpg" 
                alt="About Us" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgb(0,0,0)]/50">
                <h1 className="text-4xl md:text-6xl font-bold header-style-inverse header-banner">
                    Confidence Starts with the Right Support
                </h1>
                <p className="text-lg text-white mt-4 header-banner-text text-style-inverse">
                    One-on-One Tutoring for Every Learner
                </p>
            </div>
        </section>
    )
}