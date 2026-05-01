import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-bold text-foreground text-lg">Virendra Bharti</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors font-medium text-primary">Work</a>
          <a href="#case-studies" className="hover:text-foreground transition-colors">Case Studies</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <a href="#contact" className="bg-primary text-primary-foreground text-sm px-5 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors">
          Hire Me
        </a>
      </div>
    </nav>
  );
}