import { ArrowRight } from "lucide-react";
import { services } from "../../_data/services";
import Link from "next/link";

function Services() {
  return (
    <section
      className="bg-bg-secondary min-h-screen py-32 grid grid-cols-1 gap-16 px-4 md:px-12"
      id="services"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center lg:text-start">
        <div className="space-y-4">
          <p className="text-lg text-text-muted">Services I Offer</p>
          <h2 className="text-3xl md:text-5xl text-text-secondary font-bold lg:max-w-lg">
            Expert Solutions to Grow and Optimize Your Business
          </h2>
        </div>
        <p className="flex items-center text-lg md:text-xl text-text-muted">
          From strategic planning and operational efficiency to sales growth and
          digital transformation, I deliver customized consulting solutions that
          tackle your toughest business challenges and fuel rapid growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col border-t-4 md:border-t-0 md:border-l-4 border-accent bg-white hover:bg-bg-primary hover:scale-105 duration-200 p-4 md:p-8 space-y-8 xl:h-[22rem] md:w-fit mx-auto group"
          >
            <div className="text-text-secondary group-hover:text-text-primary duration-200 p-1 w-16 h-16">
              {service.icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-text-secondary group-hover:text-text-primary duration-200 font-semibold text-xl">
                {service.title}
              </h3>
              <p className="text-text-muted max-w-xs">{service.desc}</p>
            </div>

            <Link
              href="#contact"
              className="mt-auto flex items-center text-text-primary bg-accent px-4 py-2 gap-2 cursor-pointer w-fit"
            >
              Learn More <ArrowRight />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
