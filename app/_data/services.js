import {
  BriefcaseBusiness,
  Database,
  DollarSign,
  PersonStanding,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

export const services = [
  {
    title: "Targeted Marketing Strategy",
    desc: "Craft data-driven marketing plans that attract your ideal clients and fuel sustainable growth.",
    icon: <TrendingUp className="w-full h-full" />,
  },
  {
    title: "Financial Management",
    desc: "Optimize cash flow and mitigate risks to ensure your business scales with stability and confidence.",
    icon: <DollarSign className="w-full h-full" />,
  },
  {
    title: "Business Strategy",
    desc: "Drive focus and profitability with tailored strategies that align vision and execution flawlessly.",
    icon: <BriefcaseBusiness className="w-full h-full" />,
  },
  {
    title: "Sales & Marketing",
    desc: "Design high-converting sales funnels that turn prospects into loyal, long-term customers.",
    icon: <ShoppingBag className="w-full h-full" />,
  },
  {
    title: "Digital Technology",
    desc: "Implement cutting-edge tools and automation to boost efficiency and business performance.",
    icon: <Database className="w-full h-full" />,
  },
  {
    title: "Human Resources",
    desc: "Build scalable HR frameworks that improve talent retention and foster a results-driven culture.",
    icon: <PersonStanding className="w-full h-full" />,
  },
];
