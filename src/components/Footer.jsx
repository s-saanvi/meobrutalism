import { MessageCircle, Code2, Briefcase, Mail } from 'lucide-react';

const socialLinks = [
  { icon: MessageCircle, colorClass: "hover:border-primary", href: "#" },
  { icon: Code2, colorClass: "hover:border-secondary", href: "#" },
  { icon: Briefcase, colorClass: "hover:border-accent", href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b-2 border-white/20 pb-12 mb-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary border-2 border-white rounded-sm"></div>
            <span className="font-bold text-2xl tracking-tight">CodingCup Labs</span>
          </div>
          <p className="text-white/70 max-w-sm text-lg mb-8">
            Building unapologetically bold digital experiences for forward-thinking brands.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, colorClass, href }, index) => (
              <a
                key={index}
                href={href}
                className={`w-10 h-10 bg-white text-dark flex items-center justify-center border-2 border-transparent ${colorClass} hover:-translate-y-1 transition-transform`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6 text-primary">Company</h4>
          <ul className="space-y-3 font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Our Work</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6 text-secondary">Contact</h4>
          <ul className="space-y-3 font-medium text-white/80">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@codingcuplabs.com
            </li>
            <li>123 Brutal Ave, Suite 404<br/>Design City, DC 10001</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-medium text-white/60 text-sm">
        <p>&copy; {new Date().getFullYear()} CodingCup Labs. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
