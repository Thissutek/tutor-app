export default function AboutProfile() {
  return (
    <>
      <div className="container mx-auto px-8 py-16 lg:px-20 flex flex-col gap-16">
        <section className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/3 w-full">
            <img
              src="/imgs/about-profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-2/3 w-full pl-8 sm:pl-0 flex flex-col justify-center">
            <h2 className="text-3xl md:text-3xl font-bold mb-4 header-style px-10 mx-10 sm:mt-10">
              Meet Amy
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-style px-10 mx-10 sm:px-0 sm:mx-0">
              Hey there! I’m a tutor, STEM nerd, and someone who actually enjoys helping students go from “I don’t get this” to “Wait… this actually makes sense!” If math and science have ever felt frustrating or overwhelming, I totally get it. But learning doesn’t have to be stressful—I’m here to change that. <br /><br />
              I studied Psychology at the University of Toronto, and I’ve always been fascinated by how we learn—why some students struggle while others thrive, and how small shifts in teaching can make a huge difference. That curiosity led me to tutoring, where I realized that the problem isn’t that students aren’t capable—it’s that traditional teaching methods don’t always work for everyone. <br /><br />
              I believe learning should feel engaging, not exhausting. That’s why I use science-backed study techniques to make things click without the stress. My approach is gentle, patient, and pressure-free, because I know that real learning happens when students feel supported, not judged.
            </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-2/3 w-full pl-8 sm:pl-0 flex flex-col justify-center">
            <p className="text-sm md:text-base leading-relaxed text-style px-10 mx-10 sm:px-0 sm:mx-0 sm:mb-4">
              When I first started tutoring, I saw the same pattern over and over—students feeling frustrated, doubting their abilities, and thinking they just “weren’t good at” math or science. But once we started breaking things down in a way that worked for them, everything changed. I saw students go from anxious to confident, from struggling to excelling. <br /><br />
              That’s why I started this company with one big goal: to make learning easier, less stressful, and more effective—using research-based study techniques that actually work. I wanted to create a team of tutors who shared my belief that every student deserves a calm, supportive, and personalized learning experience. Because when students feel safe to ask questions, make mistakes, and truly understand the material—that’s when real progress happens.
            </p>
          </div>
          <div className="lg:w-1/3 w-full">
            <img
              src="/imgs/about-description.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg shadow-lg mx-auto"
            />
          </div>
        </section>
      </div>

    </>
  )
}
