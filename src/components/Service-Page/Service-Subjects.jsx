export default function ServiceSubjects() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 header-style">Subjects Offered</h2>

        {/* Boxes Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 header-style place-items-center">

          {/* First Box */}
          <div className="bg-white shadow-lg rounded-4xl p-6 flex flex-col justify-start items-center h-full w-3/4">
            <p className="text-md text-center font-semibold">Building Foundations</p>
            <h3 className="text-2xl font-bold text-center">Middle/Early High School</h3>
            <p className="text-md text-center mb-4 font-semibold">(Grade 7-10)</p>

            <div className="flex flex-col items-center w-full justify-start">
              <p className="text-md text-left w-full text-style">Mathematics</p>
              <ul className="list-disc pl-6 text-left mx-auto w-full">
                <li>Algebra & Linear Relations</li>
                <li>Quadratic & Exponential Functions</li>
                <li>Geometry & Trigonometry</li>
                <li>Probability & Statistics</li>
                <li>Problem-Solving & Word Problems</li>
              </ul>
              <p className="text-md text-left w-full text-style">Science (General Science)</p>
              <ul className="list-disc pl-6 text-left mx-auto w-full">
                <li>Biology (Cells, Ecology, Genetics)</li>
                <li>Chemistry (Elements, Compounds, Reactions)</li>
                <li>Physics (Forces, Motion, Energy)</li>
                <li>Earth & Space Science</li>
                <li>Lab Skills & Scientific Method</li>
              </ul>
            </div>
          </div>

          {/* Second Box */}
          <div className="bg-white shadow-lg rounded-4xl p-6 flex flex-col justify-start items-center h-full w-3/4">
            <p className="text-md text-center font-semibold">Advanced Tutoring</p>
            <h3 className="text-2xl font-bold text-center">High School</h3>
            <p className="text-md text-center mb-4 font-semibold">(Grade 11-12)</p>

            <div className="flex flex-col items-center w-full justify-start">
              <p className="text-md text-left w-full text-style">Mathematics</p>
              <ul className="list-disc pl-6 text-left mx-auto w-full">
                <li>Functions</li>
                <li>Advanced Functions</li>
                <li>Calculus & Vectors</li>
                <li>IB Mathematics (AA & AI)</li>
                <li>Problem-Solving & Word Problems</li>
                <li>AP Calculus (AB & BC)</li>
              </ul>
              <p className="text-md text-left w-full text-style">Chemistry</p>
              <ul className="list-disc pl-6 text-left mx-auto w-full">
                <li>Grade 11-12 Chemistry</li>
                <li>IB Chemistry (SL & HL)</li>
                <li>AP Chemistry</li>
              </ul>
              <p className="text-md text-left w-full text-style">Biology</p>
              <ul className="list-disc pl-6 text-left mx-auto w-full">
                <li>Grade 11-12 Biology</li>
                <li>IB Biology (SL & HL)</li>
                <li>AP Biology</li>
              </ul>
              <p className="text-md text-left w-full text-style">Physics</p>
              <ul className="list-disc pl-6 text-left mx-auto w-full">
                <li>Grade 11-12 Physics</li>
                <li>IB Physics (SL & HL)</li>
                <li>AP Physics (1, 2, C: Mechanics & E&M)</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
