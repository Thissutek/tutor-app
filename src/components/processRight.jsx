const ProcessRight = ({ 
    header, 
    stepImage, 
    stepAlt, 
    lineImage, 
    lineAlt,
    // Add customizable positioning props with default values
    linePositionX = "25%",
    linePositionY = "-15%",
    lineWidth = "25%",
    hoverDescription
  }) => {
      return (
        <div className="flex flex-col md:flex-row items-center justify-end px-4 md:px-8 mb-16">
            {/* Line Image with responsive positioning */}
            <div className="relative w-full md:w-1/4 flex justify-center md:justify-end mb-6 md:mb-0">
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
            
            {/* Step Content */}
            <div className="w-full md:w-2/3 text-center md:pl-8">
                <h3 className="text-xl font-semibold header-style section-header mb-0">
                {header}
                </h3>
                <div className="relative group">
                {/* Image with hover effect */}
                <img 
                    src={stepImage} 
                    alt={stepAlt} 
                    className="max-w-[80%] md:max-w-[50%] h-auto mx-auto group-hover:opacity-70 transition-opacity duration-300"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    {hoverDescription && (
                    <p className="text-stlye text-sm">{hoverDescription}</p>
                    )}
                </div>
                </div>
            </div>
        </div>
      );
  };

export default ProcessRight