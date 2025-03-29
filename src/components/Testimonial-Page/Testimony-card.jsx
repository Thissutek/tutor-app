import { useRef, useState } from "react";
import TestimonyCardV2 from "./Testimony-cardv2";

export default function Carousel() {
  const testimonials = [
    {
      id: 1,
      review: "I’ve been working with Amy since Grade 9, and she’s been a huge help in improving my math skills.  Before I started tutoring with her, I struggled a lot in math, but over the years, she’s made things much clearer.  Her teaching style is straightforward and patient.  She really takes the time to make sure I understand every concept we cover.  Now in grade 11, I’m more confident in my math skills and feel much better equipped to handle challenging topics. ",
      user: "Eva S",
    },
    {
      id: 2,
      review: "I’ve been working with Amy for about 6 months, and she’s been amazing! Before I started, I found math really hard, but now I actually understand what we’re learning. She’s super patient and explains everything in a way that makes sense. I don’t feel stressed about math anymore, and I’m feeling way more confident in class.",
      user: "Emma S",
    },
    {
      id: 3,
      review: "Amy has been tutoring me in IB Math, Biology and Chemistry for the past three years and I would definitely recommend her! She is incredibly professional, kind, patient and is able to communicate complex topics with clarity. Further, Amy has a thorough understanding of the IB syllabus and exam format which I have found extremely helpful in my preparation for the IB exams.",
      user: "Eva G",
    },
    {
      id: 4,
      review: "Helped me study for my exams.",
      user: "Rachel Greene",
    },
    {
      id: 5,
      review: "Amy is awesome.",
      user: "Matty Matheson",
    },
    {
      id: 6,
      review: "I learn a lot.",
      user: "Bejoc Parfait",
    },

  ];



  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate which testimonials to show (3 at a time)
  const visibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  // Carousel navigation
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };
  return (

    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Hear From Our Students</h2>

        {/* Carousel */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none justify-start md:justify-center items-center h-[50vh] md:h-[70vh] mb-10">
            {visibleTestimonials().map((testimonial) => (
              <TestimonyCardV2
                key={testimonial.id}
                testimony_review={testimonial.review}
                testimony_user={testimonial.user}
                className="snap-center flex-shrink-0 w-full md:w-auto"
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={goToPrev}
              className="CTA text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Previous testimonials"
            >
              {'<'}
            </button>
            <button
              onClick={goToNext}
              className="CTA text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Next testimonials"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
