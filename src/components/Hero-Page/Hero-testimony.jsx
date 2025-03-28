import ProfileCard from "./ProfileCard"
import { Link } from "react-router"
import Reviews from "./Hero-review"

export default function HeroTestimony() {
  return (
    <section className="py-16 bg-[#F9D59B]">
      <div className="container mx-auto px-8 lg:px-20">
        {/* Left-aligned header */}
        <h2 className="text-3xl font-bold mb-8 text-left header-style">What Our Clients Say</h2>

        <Reviews />

        {/* Read More CTA */}
        <div className="mt-12 text-center">
          <Link to="/testimonials" className="px-6 py-3 bg-[#566137] text-white font-semibold rounded-lg shadow-md transition transform hover:bg-[#4b562c] hover:scale-105">
            READ MORE
          </Link>

        </div>
      </div>
    </section>
  )
}
