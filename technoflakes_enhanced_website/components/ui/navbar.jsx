// components/ui/navbar.jsx
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -75 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <a className="text-2xl font-bold text-white">Technoflakes</a>
        </Link>
        <div className="flex space-x-6">
          {["Home", "Services", "Why", "About", "Contact"].map((section) => (
            <Link key={section} href={`#${section.toLowerCase()}`}>
              <a className="relative text-white hover:text-blue-400 transition-colors">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-1"
                >
                  {section}
                </motion.span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-400 scale-x-0 origin-left transition-transform hover:scale-x-100"></span>
              </a>
            </Link>
          ))}  {/* ← Note the double closing: 2×”)” then “}” */}
        </div>
      </div>
    </motion.nav>
  );
}
