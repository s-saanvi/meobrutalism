import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-light border-b-2 border-dark px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary border-2 border-dark shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-sm"></div>
          <span className="font-bold text-xl tracking-tight">CodingCup Labs</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-semibold">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#work" className="hover:text-secondary transition-colors">Work</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <button className="brutal-button bg-accent px-6 py-2 rounded-sm text-dark">
            Let's Talk
          </button>
        </div>

        <button className="md:hidden p-2 brutal-box bg-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
