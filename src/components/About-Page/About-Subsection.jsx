import { Link } from "react-router"

export default function AboutSubsection() {
    return(
        <section className="mx-auto px-8 py-16 bg-[#F9D59B] md:px-16">
            <h2 className="text-3xl font-semibold text-left mb-8">
                We don’t believe in mindless memorization, overwhelming <br />
                study sessions, or one-size-fits-all teaching. <br />
                Instead, our approach is all about:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <p className="text-lg text-style">🌟 A gentle, patient teaching style—no pressure, no stress, no fear of "silly questions"</p>
                    <p className="text-lg text-style">🌟 Breaking down complex topics in a way that actually makes sense</p>
                    <p className="text-lg text-style">🌟 Building confidence, not just grades—because understanding the material is what matters most</p>
                </div>
                <div className="space-y-6">
                    <p className="text-lg text-style">🌟 Science-backed study techniques to help students actually retain information</p>
                    <p className="text-lg text-style">🌟 Custom lessons that adapt to each student’s learning style and pace</p>
                </div>
            </div>

            <div className="text-center mt-12">
                <h3 className="text-2xl font-semibold mb-4">
                    At the end of the day, our goal isn’t just to help students pass their tests—it’s <br />
                    to help them feel capable, confident, and in control of their learning
                </h3>
                <Link to="/contact" className="CTA text-center px-4 py-2 rounded-lg shadow-md">
                    Book Now
                </Link>
            </div>
        </section>

    )
}