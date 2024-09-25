import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const getCurrentYear = () => {
    const currentYear: number = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {getCurrentYear()} Lucas Ian Schmidt. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://www.instagram.com/lucasschmidt659/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
