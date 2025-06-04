
import { useState } from 'react';

interface ProcessStageProps {
  stage: {
    id: string;
    title: string;
    sigil: string;
    description: string;
    hawtin: string;
    personal: string[];
    color: string;
  };
  index: number;
  isLast: boolean;
}

export const ProcessStage = ({ stage, index, isLast }: ProcessStageProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const colorMap = {
    cyan: 'text-cyan-400 border-cyan-400',
    magenta: 'text-magenta-400 border-magenta-400',
    yellow: 'text-yellow-400 border-yellow-400',
    green: 'text-green-400 border-green-400',
  };

  const colorClass = colorMap[stage.color as keyof typeof colorMap] || colorMap.cyan;

  return (
    <div id={stage.id} className="relative">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-8 md:left-12 top-20 w-0.5 h-16 bg-gradient-to-b from-cyan-400/50 to-transparent" />
      )}
      
      <div 
        className={`
          group cursor-pointer transition-all duration-500 
          ${isExpanded ? 'transform scale-105' : 'hover:transform hover:scale-102'}
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={`border rounded-lg p-6 md:p-8 transition-all duration-300 ${colorClass} ${isExpanded ? 'bg-current/10' : 'bg-current/5 hover:bg-current/8'}`}>
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className={`text-3xl md:text-4xl font-mono ${colorClass.split(' ')[0]} group-hover:animate-pulse`}>
              {stage.sigil}
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-mono font-bold mb-2">
                {index + 1}. {stage.title}
              </h2>
              <p className="text-lg opacity-80">
                {stage.description}
              </p>
            </div>
            <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <span className="text-2xl">↓</span>
            </div>
          </div>

          {/* Expanded content */}
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4 border-t border-current/20">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Hawtin's process */}
                <div className="space-y-3">
                  <h3 className="font-mono font-semibold opacity-90">
                    🎧 Hawtin's Process
                  </h3>
                  <p className="font-mono text-sm opacity-80 leading-relaxed">
                    {stage.hawtin}
                  </p>
                </div>

                {/* Your process */}
                <div className="space-y-3">
                  <h3 className="font-mono font-semibold opacity-90">
                    🌊 Your Process
                  </h3>
                  <ul className="space-y-2">
                    {stage.personal.map((item, idx) => (
                      <li key={idx} className="font-mono text-sm opacity-80 leading-relaxed">
                        <span className="opacity-60">→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
