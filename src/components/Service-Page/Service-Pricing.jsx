import { useState } from 'react';

const ServicePricing = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const pricingOptions = [
    {
      title: "Private Tutoring",
      sections: [
        {
          type: "ONLINE",
          price: "$700",
          description: "Prepaid 10-Hour Package"
        },
        {
          type: "",
          price: "$75/hr",
          description: "Pay As You Go"
        },
        {
          type: "IN-PERSON",
          price: "$750",
          description: "Prepaid 10-Hour Package"
        },
        {
          type: "",
          price: "$80/hr",
          description: "Pay As You Go"
        }
      ]
    },
    {
      title: "Group Of 2",
      sections: [
        {
          type: "ONLINE",
          price: "$500",
          description: "Prepaid 10-Hour Package"
        },
        {
          type: "",
          price: "$55/hr",
          description: "Pay As You Go"
        },
        {
          type: "IN-PERSON",
          price: "$550",
          description: "Prepaid 10-Hour Package"
        },
        {
          type: "",
          price: "60/hr",
          description: "Pay As You Go"
        }
      ]
    },
    {
      title: "Group of 3",
      sections: [
        {
          type: "ONLINE",
          price: "$400",
          description: "Prepaid 15-Hour Package"
        },
        {
          type: "",
          price: "$45/hr",
          description: "Pay As You Go"
        },
        {
          type: "IN-PERSON",
          price: "$450",
          description: "Prepaid 10-Hour Package"
        },
        {
          type: "",
          price: "$50/hr",
          description: "Pay As You Go"
        }
      ]
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center header-style font-bold">Pricing Options</h1>
      <h2 className='text-2xl text-left header-style font-semibold mb-4'>Grades 7-10</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingOptions.map((option, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${
              expandedIndex === index ? 'scale-105 shadow-lg z-10' : 'hover:shadow-lg'
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800 header-style">{option.title}</h3>
              <span className="text-gray-600 text-xl">
                {expandedIndex === index ? '−' : '+'}
              </span>
            </div>
            
            <div 
              className={`transition-all duration-300 ${
                expandedIndex === index ? 'max-h-120 opacity-120' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 space-y-4">
                {option.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className={sectionIndex > 0 ? "pt-2 " : ""}>
                    <p className="text-sm text-gray-500 mb-1 text-style font-bold">{section.type}</p>
                    <p className="text-2xl font-bold text-gray-800 mb-1 header-style">{section.price}</p>
                    <p className="text-sm font-medium text-gray-700 text-style">{section.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePricing;