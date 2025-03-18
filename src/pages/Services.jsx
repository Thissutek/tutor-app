import ServiceBanner from "../components/Service-Page/Service-Banner"
import ServicesSection from "../components/Service-Page/Service-Subsection"
import ServiceSubjects from "../components/Service-Page/Service-Subjects"
import ServicePricing from "../components/Service-Page/Service-Pricing"
import ServicePricing2 from "../components/Service-Page/Service-Pricing-2"

export default function Services() {
    return (
        <>
           <ServiceBanner />
           <ServicesSection />
           <ServiceSubjects />
           <ServicePricing />
           <ServicePricing2 />
        </>
    )
}