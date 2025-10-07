import SectionWrapper from "./SectionWrapper";
import { CheckCircle, Clock, Users } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-10 h-10 text-indigo-600" />,
    title: "Smart Tasking",
    desc: "Automatically prioritize what matters most and track progress effortlessly.",
  },
  {
    icon: <Clock className="w-10 h-10 text-indigo-600" />,
    title: "Time Management",
    desc: "Stay on schedule with reminders, deadlines, and smart suggestions.",
  },
  {
    icon: <Users className="w-10 h-10 text-indigo-600" />,
    title: "Team Collaboration",
    desc: "Share tasks and projects with your team in real time.",
  },
];

export default function Features() {
  return (
    <SectionWrapper id="features" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}