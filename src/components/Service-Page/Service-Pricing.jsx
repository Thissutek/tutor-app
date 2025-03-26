import PricingCard from './Service-Card'

const ServicePricing = () => {
  const pricingOptions = [
    {
      title: "Private Tutoring",
      sections: [
        { type: "ONLINE", price: "$700", description: "Prepaid 10-Hour Package" },
        { type: "", price: "$75/hr", description: "Pay As You Go" },
        { type: "IN-PERSON", price: "$750", description: "Prepaid 10-Hour Package" },
        { type: "", price: "$80/hr", description: "Pay As You Go" },
      ],
    },
    {
      title: "Group Of 2",
      sections: [
        { type: "ONLINE", price: "$500", description: "Prepaid 10-Hour Package" },
        { type: "", price: "$55/hr", description: "Pay As You Go" },
        { type: "IN-PERSON", price: "$550", description: "Prepaid 10-Hour Package" },
        { type: "", price: "$60/hr", description: "Pay As You Go" },
      ],
    },
    {
      title: "Group of 3",
      sections: [
        { type: "ONLINE", price: "$400", description: "Prepaid 15-Hour Package" },
        { type: "", price: "$45/hr", description: "Pay As You Go" },
        { type: "IN-PERSON", price: "$450", description: "Prepaid 10-Hour Package" },
        { type: "", price: "$50/hr", description: "Pay As You Go" },
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Pricing Options</h1>
      <h2 className="text-2xl text-left font-semibold mb-4">Grades 7-10</h2>
      {/* Flexbox container for the cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {pricingOptions.map((option, index) => (
          // This is the "container" for each PricingCard
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
            <PricingCard option={option} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePricing;

