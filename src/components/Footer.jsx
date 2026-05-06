import { MessageCircle, Code2, Briefcase, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'Twitter', icon: MessageCircle, href: '#', hoverBorder: 'hover:border-primary' },
  { name: 'GitHub', icon: Code2, href: '#', hoverBorder: 'hover:border-secondary' },
  { name: 'LinkedIn', icon: Briefcase, href: '#', hoverBorder: 'hover:border-accent' },
];

const companyLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Our Work', href: '#' },
  { name: 'Contact', href: '#' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
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
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`w-10 h-10 bg-white text-dark flex items-center justify-center border-2 border-transparent ${social.hoverBorder} hover:-translate-y-1 transition-transform`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6 text-primary">Company</h4>
          <ul className="space-y-3 font-medium">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
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
          {legalLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
