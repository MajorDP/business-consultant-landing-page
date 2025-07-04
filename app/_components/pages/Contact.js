function Contact() {
  return (
    <section className="min-h-screen py-32 bg-white px-4 xl:px-12" id="contact">
      <div className="text-center space-y-4 mb-16 ">
        <p className="text-accent font-semibold text-lg">
          Let&apos;s Work Together
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-text-secondary">
          Contact Me
        </h2>
        <p className="md:text-lg lg:text-xl text-text-muted max-w-2xl mx-auto">
          Whether you&apos;re navigating growth challenges or building new
          systems, I&apos;m here to help. Reach out and let&apos;s talk about
          how we can move your business forward—strategically and efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-text-secondary mb-2">
              Contact
            </h3>
            <address className="text-text-muted">
              Email:{" "}
              <a
                href="mailto:hello@yourdomain.com"
                className="text-accent hover:underline"
              >
                YourName@gmail.com
              </a>
            </address>
            <p className="text-text-muted">
              Phone:{" "}
              <a href="tel:+1234567890" className="text-accent hover:underline">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text-secondary mb-2">
              Office
            </h3>
            <p className="text-text-muted">548 Market St</p>
            <p className="text-text-muted">San Francisco, CA 94104</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text-secondary mb-2">
              Follow
            </h3>
            <div className="flex flex-col md:flex-row gap-6 text-text-muted">
              <a href="#" className="hover:text-accent">
                Twitter
              </a>
              <a href="#" className="hover:text-accent">
                LinkedIn
              </a>
              <a href="#" className="hover:text-accent">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-6 bg-bg-primary p-4 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-white text-text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-white text-text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 bg-white text-text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-white text-text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-semibold transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
