export default function Contact() {
    return (
        <>
            <div className="contact-form-container mx-auto max-w-4xl py-12 px-6 bg-[#f3ecd4] rounded-2xl shadow-xl my-10">
                <h2 className="text-3xl font-bold text-center mb-6 header-style">Fill Out the Form</h2>
                <p className="text-lg text-center mb-8 text-style">
                    Schedule your Consultation today
                </p>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSehQiP-7n9Yk93osQ3Gq6duy3WbL_lFPpBUqV_Xl5XGGRpqvg/viewform?embedded=true" 
                    width="100%" 
                    height="2000" 
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    className="w-full border-none rounded-lg">
                        Loading…
                </iframe>
            </div>
        </>
    )
}