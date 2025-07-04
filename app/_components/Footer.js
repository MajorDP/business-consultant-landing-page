function Footer() {
  return (
    <footer className="bg-bg-primary text-text-primary py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold">Your Name Consulting</h3>
          <p className="text-sm">
            Strategic business consulting for growth-stage companies and
            established enterprises. Results-driven, insight-led, and built for
            scale.
          </p>
          <a
            href="#contact"
            className="mt-2 text-accent hover:underline font-semibold"
          >
            Schedule a Consultation →
          </a>
        </div>

        <div className="space-y-2 mx-auto">
          <h3 className="font-semibold text-lg text-center md:text-left">
            Services
          </h3>
          <ul className="space-y-1 text-sm flex flex-col items-center md:items-start">
            <li>
              <a href="#services" className="hover:text-accent">
                Marketing Strategy
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent">
                Financial Management
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent">
                Business Strategy
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent">
                Sales & Marketing
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent">
                Digital Technology
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent">
                Human Resources
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-2 mx-auto">
          <h3 className="font-semibold text-lg text-center md:text-left">
            Resources
          </h3>
          <ul className="space-y-1 text-sm flex flex-col items-center md:items-start">
            <li>
              <a href="/blog" className="hover:text-accent">
                Consulting Insights (Blog)
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-accent">
                FAQs
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-accent">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-accent">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-6 text-center text-sm text-text-muted">
        &copy; {new Date().getFullYear()} Your Name Consulting. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
