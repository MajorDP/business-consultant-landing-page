import { testimonials } from "../../_data/testimonials";

function Testimonials() {
  return (
    <section
      className="min-h-screen py-32 px-4 md:px-12 bg-bg-secondary text-text-secondary"
      id="testimonials"
    >
      <div className="text-center space-y-4 mb-16">
        <p className="text-accent font-semibold text-lg">
          Success Stories From Clients
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Testimonials From My Clients
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-fit xl:w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="flex flex-col lg:flex-row gap-8 border-t-4 md:border-t-0 md:border-l-4 border-accent bg-white p-8"
            itemScope
            itemType="https://schema.org/Review"
          >
            <img
              src={testimonial.image}
              alt={`Photo of ${testimonial.name}, ${testimonial.title}`}
              className="w-24 h-24 rounded-full object-cover mx-auto"
              itemProp="image"
            />
            <div className="text-center lg:text-start">
              <p className="text-sm text-text-muted" itemProp="author">
                {testimonial.title}
              </p>
              <p className="font-semibold" itemProp="name">
                {testimonial.name}
              </p>
              <p className="text-lg italic mt-4" itemProp="reviewBody">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
