
import { ProcessStage } from "@/components/ProcessStage";

export const ProcessTimeline = () => {
  const stages = [
    {
      id: 'deconstruction',
      title: 'Deconstruction Phase',
      sigil: '{∇}',
      description: 'Breaking down existing structures',
      hawtin: 'Sampling 100+ tracks, isolating essential elements',
      personal: [
        'Career transitions: Bridge School → Rangle.io → PartnerStack',
        'Learning to extract patterns from diverse experiences',
        'Jane interview process: deconstructing opportunity into components',
        'Breaking down complex systems into understandable parts'
      ],
      color: 'cyan'
    },
    {
      id: 'palette',
      title: 'Loop Palette Creation',
      sigil: '{Ξ}',
      description: 'Building your toolkit and resources',
      hawtin: 'Creating 300-loop palette, curating essential sounds',
      personal: [
        'FLOAT methodology: drift → mass → shape → cut → toss',
        'Bridge School: teaching as knowledge crystallization',
        'Technical skills: Ruby/Rails, React, systems architecture',
        'Ritual infrastructure: bridges, sigils, sonic environments'
      ],
      color: 'magenta'
    },
    {
      id: 'composition',
      title: 'Real-time Composition',
      sigil: '{∷}',
      description: 'Live adaptation and creation',
      hawtin: 'Ableton Live manipulation, real-time layering',
      personal: [
        "Today's cycle: bridge restoration → interview → processing",
        'Dynamic conversation adaptation during setbacks',
        'Continuous integration of new experiences into system',
        'Professional grace: Jason call → immediate documentation'
      ],
      color: 'yellow'
    },
    {
      id: 'transitions',
      title: 'Seamless Transitions',
      sigil: '{◊}',
      description: 'Continuous flow and evolution',
      hawtin: '28 composed tracks, 96-minute seamless mix',
      personal: [
        'Maintaining relationship integrity through disappointment',
        'Jane outcome → microsite creation → new opportunities',
        'Professional reputation as transition currency',
        '"Find strength in sound, make your transition"'
      ],
      color: 'green'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="space-y-16">
        {stages.map((stage, index) => (
          <ProcessStage
            key={stage.id}
            stage={stage}
            index={index}
            isLast={index === stages.length - 1}
          />
        ))}
      </div>
      
      {/* Final reflection */}
      <div className="mt-20 p-8 border border-cyan-800/30 rounded-lg bg-cyan-900/10">
        <h3 className="text-2xl font-mono text-cyan-300 mb-4 text-center">
          Process Recognition
        </h3>
        <div className="grid md:grid-cols-2 gap-8 text-cyan-400/80">
          <div>
            <h4 className="font-mono text-cyan-300 mb-3">Hawtin's Algorithm</h4>
            <p className="font-mono text-sm leading-relaxed">
              Deconstruct existing → Extract essential patterns → 
              Rebuild as something new → Maintain continuity
            </p>
          </div>
          <div>
            <h4 className="font-mono text-cyan-300 mb-3">Your Algorithm</h4>
            <p className="font-mono text-sm leading-relaxed">
              Experience diversity → Pattern recognition → 
              System building → Graceful transitions
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="font-mono text-magenta-400">
            "The external rhythm becomes internal rhythm becomes shared rhythm becomes ritual infrastructure becomes gift."
          </p>
        </div>
      </div>
    </div>
  );
};
