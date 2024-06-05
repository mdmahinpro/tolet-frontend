function Contact() {
  return (
    <div className="contact-us mx-auto max-w-4xl p-4">
      <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 mb-16">
        Contact Us
      </h1>
      <p className="text-gray-600 mb-4">
        We’re here to help you with any questions or concerns you may have.
        Please reach out to us and one of our team members will get back to you
        as soon as possible.
      </p>

      <div className="contact-form">
        <form className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
