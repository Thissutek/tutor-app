
import { useState } from 'react';

const PricingCard = ({ option }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${isExpanded ? 'shadow-lg z-10' : 'hover:shadow-lg'}`}
      onClick={toggleExpand}
    >
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-medium header-style">{option.title}</h3>
        <span className="text-gray-600 text-xl">{isExpanded ? '−' : '+'}</span>
      </div>

      {/* Content Section that Expands */}
      <div
        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 space-y-4">
          {option.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={sectionIndex > 0 ? "pt-2" : ""}>
              <p className="text-sm text-gray-500 mb-1 text-style">{section.type}</p>
              <p className="text-2xl font-bold text-gray-800 mb-1 text-style">{section.price}</p>
              <p className="text-sm font-medium text-gray-700 text-style">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

