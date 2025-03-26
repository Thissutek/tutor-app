const ProcessLeft = ({
  header,
  stepImage,
  stepAlt,
  lineImage,
  lineAlt,
  // Add customizable positioning props with default values
  linePositionX = "-25%",
  linePositionY = "-25%",
  lineWidth = "66%",
  hoverDescription
}) => {
  return (
    <div className="relative w-full px-4 md:px-8 mb-16">
      {/* Main content container */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Step with Image */}
        <div className="w-full md:w-2/3 text-center md:pr-8 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold header-style section-header mb-2">{header}</h3>
          <div className="relative group">
            {/* Image with hover effect */}
            <img
              src={stepImage}
              alt={stepAlt}
              className="max-w-[80%] md:max-w-[50%] h-auto mx-auto group-hover:opacity-10 transition-opacity duration-300"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 z-20">
              {hoverDescription && (
                <p className="text-style text-md w-1/2 h-full flex justify-center items-center p-4 font-bold lg:w-1/3">{hoverDescription}</p>
              )}
            </div>
          </div>
        </div>

        {/* Line Image - with customizable positioning */}
        <div className="relative w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src={lineImage}
            alt={lineAlt}
            style={{
              width: lineWidth,
              transform: `translateX(${linePositionX}) translateY(${linePositionY})`
            }}
            className="h-auto hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessLeft
