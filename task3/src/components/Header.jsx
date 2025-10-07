export default function Header() {
  const handleScroll = () => {
    const section = document.getElementById("features");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-600 to-indigo-400 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">TaskFlow</h1>
      <p className="text-lg mb-6 max-w-md">
        Organize your life effortlessly — manage tasks, stay focused, and flow through your day.
      </p>
      <button
        onClick={handleScroll}
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Get Started
      </button>
    </header>
  );
}