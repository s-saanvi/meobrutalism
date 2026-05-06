import { Code2, Smartphone, Paintbrush, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, high-performance web applications built with modern frameworks like React and Next.js.',
    icon: Code2,
    color: 'bg-primary'
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile experiences that look great and feel native on iOS and Android.',
    icon: Smartphone,
    color: 'bg-secondary'
  },
  {
    title: 'UI/UX Design',
    description: 'Bold, intuitive, and user-centric designs that make your brand stand out from the noise.',
    icon: Paintbrush,
    color: 'bg-accent'
  },
  {
    title: 'Digital Strategy',
    description: 'Comprehensive technical roadmaps and product strategies to scale your business.',
    icon: Rocket,
    color: 'bg-white'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 border-b-2 border-dark bg-light relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1f2937 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold inline-block relative">
            Our Services
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-primary -z-10 rotate-1"></div>
          </h2>
          <p className="text-xl mt-6 max-w-2xl font-medium">
            We offer end-to-end digital solutions designed with a brutalist edge and engineered for performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`brutal-box p-8 ${service.color} brutal-box-hover flex flex-col h-full`}
            >
              <div className="w-14 h-14 bg-white border-2 border-dark flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <service.icon className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="font-medium flex-grow text-dark/90 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8">
                <button className="font-bold border-b-2 border-dark pb-1 hover:text-white transition-colors">
                  Learn more &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
