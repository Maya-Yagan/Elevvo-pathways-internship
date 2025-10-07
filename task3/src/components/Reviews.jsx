import SectionWrapper from "./SectionWrapper";

const reviews = [
  {
    name: "Alex Johnson",
    quote:
      "TaskFlow completely changed how I plan my day. It's simple, fast, and powerful!",
  },
  {
    name: "Lena Torres",
    quote:
      "I can’t imagine working without it. The design is clean and helps me focus.",
  },
  {
    name: "Daniel Chen",
    quote: "Finally, a task app that feels intuitive. Everyone in my team loves it.",
  },
];

export default function Reviews() {
  return (
    <SectionWrapper className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-white p-6 rounded-2xl shadow text-center"
          >
            <p className="text-gray-600 italic mb-4">“{r.quote}”</p>
            <span className="font-semibold text-indigo-600">{r.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}