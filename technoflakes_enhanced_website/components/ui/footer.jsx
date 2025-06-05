export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-400">
      <div className="mx-auto max-w-3xl px-6">
        <p>© 2025 Technoflakes. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}