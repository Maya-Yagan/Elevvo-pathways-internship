import { Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-8">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-200">
            <Facebook />
          </a>
          <a href="#" className="hover:text-gray-200">
            <Twitter />
          </a>
          <a href="#" className="hover:text-gray-200">
            <Mail />
          </a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}