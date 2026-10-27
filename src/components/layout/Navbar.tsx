import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Blog', href: 'https://blog.kerupuksambel.net', external: true },
  { name: 'Experiences', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

const sectionIds = navigation
  .filter((item) => !item.external)
  .map((item) => item.href.slice(1))

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show navbar when hero section is not visible (scrolled past)
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of hero section is visible
      }
    );

    const heroSection = document.getElementById('hero');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  useEffect(() => {
    // Highlights the link of whichever section crosses the middle of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else {
            setActiveSection((current) => (current === entry.target.id ? null : current));
          }
        });
      },
      { root: null, rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkProps = (item: (typeof navigation)[number], sizeClassName: string) => {
    const isActive = !item.external && activeSection === item.href.slice(1);
    return {
      href: item.href,
      'aria-current': isActive ? ('location' as const) : undefined,
      ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
      className: cn(
        'inline-flex items-center justify-center gap-1 rounded px-3 py-2 font-medium uppercase tracking-widest transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
        isActive ? 'bg-red-600 text-white' : 'text-slate-200 hover:text-red-500',
        sizeClassName
      ),
    };
  };

  return (
    <nav className={`fixed top-0 z-50 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a key={item.name} {...linkProps(item, 'text-sm')}>
                {item.name}
                {item.external && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center text-white hover:bg-slate-800 hover:text-white"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <div className="flex flex-col space-y-1 px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              {...linkProps(item, 'w-full text-base')}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              {item.external && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
