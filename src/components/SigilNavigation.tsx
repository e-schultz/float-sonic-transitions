
import { useState } from 'react';

export const SigilNavigation = () => {
  const [activeSection, setActiveSection] = useState<string>('deconstruction');

  const sections = [
    { id: 'deconstruction', sigil: '{∇}', label: 'Deconstruction', color: 'text-cyan-400' },
    { id: 'palette', sigil: '{Ξ}', label: 'Loop Palette', color: 'text-magenta-400' },
    { id: 'composition', sigil: '{∷}', label: 'Real-time Composition', color: 'text-yellow-400' },
    { id: 'transitions', sigil: '{◊}', label: 'Seamless Transitions', color: 'text-green-400' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-20 bg-black/80 backdrop-blur-sm border-b border-cyan-800/30 p-4">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`
              group flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300
              ${activeSection === section.id 
                ? `border-current ${section.color} bg-current/10` 
                : 'border-cyan-800/30 text-cyan-400/60 hover:border-cyan-400/50'
              }
            `}
          >
            <span className={`text-xl font-mono transition-transform group-hover:scale-110 ${section.color}`}>
              {section.sigil}
            </span>
            <span className="font-mono text-sm hidden md:inline">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};
