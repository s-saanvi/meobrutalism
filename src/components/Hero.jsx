import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-dark">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-secondary text-dark font-bold text-sm border-2 border-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
            🚀 Innovating Digital Experiences
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            We Build <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary" style={{ WebkitTextStroke: '2px #1f2937' }}>
              Badass
            </span> Software.
          </h1>

          <p className="text-xl md:text-2xl text-dark/80 font-medium max-w-xl">
            CodingCup Labs is a digital studio crafting minimalist, high-performance web applications with bold designs.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="brutal-button bg-primary px-8 py-4 text-lg flex items-center gap-2">
              Start a Project <ArrowRight className="w-5 h-5" />
            </button>
            <button className="brutal-button bg-white px-8 py-4 text-lg">
              View Our Work
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-lg relative">
          <div className="brutal-box bg-white p-2 w-full aspect-square relative z-10">
             <div className="w-full h-full bg-accent border-2 border-dark flex items-center justify-center overflow-hidden relative">
               <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1f2937 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
               <div className="w-3/4 h-3/4 bg-primary border-4 border-dark rounded-full flex items-center justify-center animate-spin-slow">
                 <div className="w-1/2 h-1/2 bg-secondary border-4 border-dark rotate-45"></div>
               </div>
             </div>
          </div>
          {/* Decorative offset blocks */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary border-2 border-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-16 bg-primary border-2 border-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-0"></div>
        </div>
      </div>
    </section>
  );
}
