
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentNames: '',
    gradeLevel: '',
    subjects: '',
    postalCode: '',
    preferredContact: '',
    additionalInfo: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      gradeLevel: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const public_key = 'rtWPu7Q6-li9ktctx';
    const service_id = 'service_k3npb6q';
    const template_id = 'template_vrqubxj';
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      studentNames: formData.studentNames,
      gradeLevel: formData.gradeLevel,
      subjects: formData.subjects,
      postalCode: formData.postalCode,
      preferredContact: formData.preferredContact,
      additionalInfo: formData.additionalInfo,
    };

    // Send email via EmailJS
    emailjs.send(service_id, template_id, templateParams, public_key)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsModalOpen(true); // Open modal on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          studentNames: '',
          gradeLevel: '',
          subjects: '',
          postalCode: '',
          preferredContact: '',
          additionalInfo: ''
        }); // Reset form fields
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong. Please try again later.');
      });
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="contact-form-container mx-auto max-w-4xl py-12 px-6 bg-[#f3ecd4] rounded-2xl shadow-xl my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className='text-style'>
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Student Name(s) Input */}
        <div className="mb-4">
          <label htmlFor="studentNames" className="block text-sm font-semibold mb-2">Student Name(s):</label>
          <input
            type="text"
            id="studentNames"
            name="studentNames"
            value={formData.studentNames}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Grade Level Radio Buttons */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Grade Level:</label>
          <div className="flex space-x-4">
            <div>
              <input
                type="radio"
                id="k-6"
                name="gradeLevel"
                value="K-6"
                checked={formData.gradeLevel === 'K-6'}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <label htmlFor="k-6" className="text-sm">K-6</label>
            </div>
            <div>
              <input
                type="radio"
                id="7-8"
                name="gradeLevel"
                value="7-8"
                checked={formData.gradeLevel === '7-8'}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <label htmlFor="7-8" className="text-sm">7-8</label>
            </div>
            <div>
              <input
                type="radio"
                id="9-12"
                name="gradeLevel"
                value="9-12"
                checked={formData.gradeLevel === '9-12'}
                onChange={handleRadioChange}
                className="mr-2"
              />
              <label htmlFor="9-12" className="text-sm">9-12</label>
            </div>
          </div>
        </div>

        {/* Subjects Input */}
        <div className="mb-4">
          <label htmlFor="subjects" className="block text-sm font-semibold mb-2">Subject(s):</label>
          <input
            type="text"
            id="subjects"
            name="subjects"
            value={formData.subjects}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Postal Code Input */}
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-semibold mb-2">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Preferred Method of Communication */}
        <div className="mb-4">
          <label htmlFor="preferredContact" className="block text-sm font-semibold mb-2">Preferred Method of Communication:</label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        {/* Additional Information Input */}
        <div className="mb-6">
          <label htmlFor="additionalInfo" className="block text-sm font-semibold mb-2">Additional Information:</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="CTA px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </div>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h3 className="text-lg font-semibold mb-4">Message Sent!</h3>
            <p>Your message has been successfully sent. We'll get back to you soon.</p>
            <div className="text-center mt-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 CTA text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

