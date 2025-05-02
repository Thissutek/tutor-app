export default function TestimonyBanner() {
  return (
    <section className="min-h-auto md:h-[80vh] p-10 md:p-0 w-auto flex items-center justify-center bg-cover background-green bg-center relative">
      {/* Image Section */}
      <img src="/imgs/testimonial-banner.png" className="absolute hidden md:block inset-0 w-full h-full object-cover" alt="banner">
      </img>

      <div className="container mx-auto px-8 relative z-10 flex items-center justify-start">
        <div className="text-center w-full max-w-lg">
          <h3 className="header-style-inverse text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Hear What Our Students<br />
            Have to Say
          </h3>
          <p className="text-style-inverse mt-10 text-base sm:text-lg">
            The Aims2Learn experience is more than just tutoring—it’s mentorship, confidence-building, and support that lasts beyond the classroom.
          </p>


          <p className="text-style-inverse mt-2 text-base sm:text-lg">
            But don’t just take our word for it—hear from the students themselves.
          </p>
        </div>
      </div>
    </section>
  )
}
