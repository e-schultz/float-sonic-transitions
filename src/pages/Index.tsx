
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { WaveformAnimation } from "@/components/WaveformAnimation";
import { SigilNavigation } from "@/components/SigilNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-400 overflow-hidden relative">
      {/* Background grid pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Animated waveform background */}
      <WaveformAnimation />

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 md:p-8 text-center border-b border-cyan-800/30">
          <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4 text-cyan-300">
            DE9: Process Mapping
          </h1>
          <p className="text-lg md:text-xl text-cyan-400/80 font-mono">
            Personal → Professional → Ritual Architecture
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="text-magenta-400 text-2xl">{`{∇}`}</span>
            <span className="text-yellow-400 text-2xl">{`{Ξ}`}</span>
            <span className="text-cyan-400 text-2xl">{`{∷}`}</span>
          </div>
        </header>

        {/* Navigation */}
        <SigilNavigation />

        {/* Main timeline */}
        <ProcessTimeline />

        {/* Footer */}
        <footer className="p-6 text-center border-t border-cyan-800/30 mt-16">
          <p className="text-cyan-400/60 font-mono text-sm">
            "Find your strength in the sound and make your transition"
          </p>
          <p className="text-cyan-400/40 font-mono text-xs mt-2">
            FLOAT.PROCESS :: 2025-06-04 :: {`{∇} {Ξ} {∷}`}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
