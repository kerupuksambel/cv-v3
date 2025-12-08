import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Animated SVG Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 0.05 }} />
            </linearGradient>
          </defs>
          {/* Animated shapes */}
          <path className="animate-float-slow" d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="url(#grad1)" strokeWidth="0.5">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,50 Q25,30 50,50 T100,50;
                      M0,50 Q25,70 50,50 T100,50;
                      M0,50 Q25,30 50,50 T100,50"
            />
          </path>
          <path className="animate-float-medium" d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="url(#grad1)" strokeWidth="0.5">
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="M0,60 Q25,40 50,60 T100,60;
                      M0,60 Q25,80 50,60 T100,60;
                      M0,60 Q25,40 50,60 T100,60"
            />
          </path>
          <path className="animate-float-fast" d="M0,40 Q25,20 50,40 T100,40" fill="none" stroke="url(#grad1)" strokeWidth="0.5">
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="M0,40 Q25,20 50,40 T100,40;
                      M0,40 Q25,60 50,40 T100,40;
                      M0,40 Q25,20 50,40 T100,40"
            />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Ammar Alifian F
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-200 mb-8">
          Full Stack Web Developer
        </h2>
        <div className="w-full flex justify-center mb-8">
          <p className="text-white w-1/2 text-[1rem]">
            A full-stack developer with focus on backend development. During my previous experiences, I built a strong foundation on business logic and problem-solving skills, alongside with a deep understanding of technologies and principles commonly used in the industry. I am currently exploring roles in backend development.
          </p>
        </div>
        <Button
          size="lg"
          variant="secondary"
          className="bg-red-600 hover:bg-red-700 text-white"
          asChild
        >
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}
