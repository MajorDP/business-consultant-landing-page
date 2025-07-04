import { stats } from "../../_data/stats";

function About() {
  return (
    <section
      id="about"
      aria-label="About the Business Consultant"
      className="min-h-screen flex flex-col pt-32 relative overflow-hidden"
    >
      <svg
        width="678"
        height="635"
        viewBox="0 0 678 635"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[30rem] md:w-auto absolute top-1/3 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-15 md:top-4 lg:right-10 lg:top-25 xl:right-50  xl:top-10 z-0"
      >
        <path
          d="M391.078 476.186C345.567 438.579 291.353 411.941 233.769 398.789C230.815 402.638 227.8 406.441 224.708 410.182C201.878 437.811 175.416 462.258 146.2 482.919C186.47 482.355 226.742 490.448 264.697 507.176C329.583 535.773 380.446 586.369 409.272 650.583L496.605 616.682C472.922 562.201 436.666 513.855 391.078 476.186Z"
          fill="#0D4AE6"
        />
        <path
          d="M372.432 425.348C383.515 382.789 401.455 342.144 425.351 305.297C404.097 299.762 383.317 292.518 363.252 283.674C343.136 274.809 323.745 264.327 305.298 252.363C294.215 294.925 276.274 335.575 252.374 372.425C294.935 383.507 335.584 401.448 372.432 425.348Z"
          fill="#0D4AE6"
        />
        <path
          d="M278.921 233.788C275.072 230.834 271.273 227.813 267.529 224.721C239.901 201.891 215.454 175.428 194.792 146.212C195.356 186.482 187.263 226.754 170.535 264.709C141.937 329.596 91.3419 380.458 27.1277 409.284L61.0289 496.617C115.511 472.935 163.857 436.679 201.527 391.091C239.131 345.582 265.769 291.369 278.921 233.788Z"
          fill="#0D4AE6"
        />
        <path
          d="M398.819 443.976C402.667 446.93 406.47 449.945 410.212 453.037C437.841 475.867 462.287 502.329 482.95 531.545C482.386 491.275 490.479 451.002 507.206 413.049C535.804 348.162 586.399 297.3 650.614 268.474L616.712 181.142C562.23 204.824 513.884 241.08 476.214 286.668C438.609 332.178 411.971 386.393 398.819 443.976Z"
          fill="#0D4AE6"
        />
        <path
          d="M286.663 201.537C332.174 239.144 386.388 265.782 443.972 278.933C446.926 275.085 449.942 271.282 453.033 267.54C475.863 239.911 502.326 215.464 531.541 194.803C491.272 195.366 450.999 187.273 413.044 170.545C348.157 141.947 297.295 91.3516 268.469 27.1374L181.137 61.0391C204.818 115.52 241.074 163.866 286.663 201.537Z"
          fill="#0D4AE6"
        />
      </svg>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-12 lg:mx-auto mt-auto z-1">
        <div className="space-y-4 md:max-w-xl text-center md:text-start">
          <p className="text-text-muted text-xl" aria-hidden="true">
            BUSINESS CONSULTING
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
          <p className="md:text-lg lg:text-xl text-text-muted max-w-xl mx-auto">
            I partner with founders, executives, and teams to solve complex
            business challenges and build scalable systems. My approach is
            hands-on, data-driven, and laser-focused on fixing what&apos;s
            really holding you back - whether it&apos;s operational bottlenecks
            or unclear go-to-market strategies.
          </p>
        </div>

        <figure className="flex justify-end xl:w-3/4 xl:mx-auto">
          <img
            src="/businessman.png"
            alt="Consultant discussing business strategy"
            className="w-full h-fit"
          />
        </figure>
      </div>
      <ul
        className="mt-auto px-8 py-4 md:px-16 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white md:h-46 lg:h-44 z-1"
        aria-label="Key business stats"
      >
        {stats.map((stat) => (
          <li
            className="flex flex-col items-center justify-center gap-2 text-center"
            key={stat.label}
          >
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-accent">
              {stat.number}
            </p>
            <p className="text-text-secondary text-base md:text-lg">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
