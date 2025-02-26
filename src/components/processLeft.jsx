const ProcessLeft = ({ 
    header, 
    stepImage, 
    stepAlt, 
    lineImage, 
    lineAlt,
    // Add customizable positioning props with default values
    linePositionX = "-25%",
    linePositionY = "-25%",
    lineWidth = "66%"
  }) => {
      return (
          <div className="relative w-full px-4 md:px-8 mb-16">
              {/* Main content container */}
              <div className="flex flex-col md:flex-row items-center">
                  {/* Step with Image */}
                  <div className="w-full md:w-2/3 text-center md:pr-8 mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold header-style section-header mb-2">{header}</h3>
                      <div className="relative">
                          <img 
                              src={stepImage} 
                              alt={stepAlt} 
                              className="max-w-[80%] md:max-w-[50%] h-auto mx-auto" 
                          />
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
                          className="h-auto" 
                      />
                  </div>
              </div>
          </div>
      );
  };

  export default ProcessLeft