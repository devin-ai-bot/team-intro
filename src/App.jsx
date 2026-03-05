import React from 'react';
import TeamCard from './components/TeamCard';
import Workflow from './components/Workflow';
import { teamMembers } from './data/team';

// Matrix Rain Background Component
const MatrixBackground = () => {
  const columns = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${i * 5}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${10 + Math.random() * 10}s`
  }));

  return (
    <div className="matrix-bg retro-grid">
      {columns.map(col => (
        <div
          key={col.id}
          className="matrix-column"
          style={{
            left: col.left,
            animationDelay: col.delay,
            animationDuration: col.duration
          }}
        >
          {Array.from({ length: 50 }, () => 
            String.fromCharCode(0x30A0 + Math.random() * 96)
          ).join('')}
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white crt relative overflow-hidden">
      <MatrixBackground />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="font-pixel text-3xl md:text-5xl mb-6 neon-text glitch cursor-pointer">
            &lt;AI_TEAM /&gt;
          </h1>
          <p className="font-pixel text-sm md:text-base text-cyan-400 cursor-blink">
            SYSTEM.INIT()
          </p>
          <p className="font-mono text-xs text-gray-500 mt-4">
            [VERSION 1.0.0] [STATUS: OPERATIONAL]
          </p>
        </header>

        {/* Team Grid */}
        <section className="mb-16">
          <h2 className="font-pixel text-xl text-center mb-8 text-yellow-400">
            &gt; TEAM_MEMBERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Workflow Section */}
        <section className="mb-16">
          <h2 className="font-pixel text-xl text-center mb-8 text-green-400">
            &gt; WORKFLOW_CHAIN
          </h2>
          <Workflow />
        </section>

        {/* Footer */}
        <footer className="text-center font-mono text-xs text-gray-600">
          <p>[END OF FILE]</p>
          <p className="mt-2">github.com/devin-ai-bot/team-intro</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
