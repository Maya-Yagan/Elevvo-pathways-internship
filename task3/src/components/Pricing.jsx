import SectionWrapper from "./SectionWrapper";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic task management", "1 project", "Email support"],
  },
  {
    name: "Pro",
    price: "$9/mo",
    features: ["Unlimited projects", "Priority support", "Sync across devices"],
  },
  {
    name: "Team",
    price: "$29/mo",
    features: ["Team collaboration", "Admin tools", "Custom branding"],
  },
];

export default function Pricing() {
  return (
    <SectionWrapper className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className="border rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-4xl font-bold text-indigo-600 mb-6">{p.price}</p>
            <ul className="space-y-2 mb-6 text-gray-600">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-500 transition">
              Choose
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}