export function Footer() {
  return (
    <footer className="bg-dark-section text-white/70 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-white text-sm">Virendra Bharti</p>
          <p className="text-xs mt-1">&copy; 2025. Crafted with Passion &mdash; get UI from me, not AI.</p>
        </div>
        <div className="flex gap-6 text-xs">
          <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}