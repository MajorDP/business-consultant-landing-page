import { Brain, Search, Zap } from "lucide-react";

function Process() {
  const process = [
    {
      title: "Diagnose",
      desc: "We start by auditing your operations, data, and pain points. No assumptions. Only insights that matter.",
      icon: <Search className="w-12 h-12" />,
    },
    {
      title: "Strategize",
      desc: "Together, we build a high-leverage plan to eliminate friction and accelerate results across key business drivers.",
      icon: <Brain className="w-12 h-12" />,
    },
    {
      title: "Execute",
      desc: "I work with you and your team hands-on—embedding where needed—to ensure strategy turns into progress.",
      icon: <Zap className="w-12 h-12" />,
    },
  ];
  return (
    <section
      id="process"
      className="min-h-screen space-y-12 py-32 px-4 md:px-12 bg-bg-primary text-text-primary"
    >
      <div className="space-y-4 text-center">
        <p className="text-text-muted font-semibold tracking-wide uppercase">
          My Approach
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">How I Work With You</h2>
        <p className="max-w-4xl mx-auto md:text-lg lg:text-xl text-text-muted ">
          A proven, execution-focused consulting process that helps founders and
          executives streamline operations, align strategy, and scale
          efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {process.map((step, idx) => (
          <article
            key={step.title}
            className="flex flex-col items-start p-8 border-t-4 md:border-t-0 md:border-l-4 border-accent bg-bg-secondary hover:bg-white hover:scale-105 duration-200"
          >
            <div className="text-text-secondary w-16 h-16">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-text-secondary">
              {step.title}
            </h3>
            <p className="text-text-muted text-base leading-relaxed">
              {step.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Process;
