import Header from "./components/Header";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header />
      <Features />
      <Reviews />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;