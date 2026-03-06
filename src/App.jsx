import { useState } from 'react'
import './index.css'
import TeamCard from './components/TeamCard'
import Workflow from './components/Workflow'
import { teamMembers, modes } from './data/team'

function App() {
  const [mode, setMode] = useState('web')
  const currentMode = modes[mode]
  
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <header className="pt-24 pb-12 text-center px-4">
        <h1 className="animate-fade-in text-3xl md:text-4xl font-medium text-[#f5f5f0] mb-4 tracking-tight">
          AI Team
        </h1>
        <p className="animate-fade-in text-sm text-[#666666] max-w-md mx-auto mb-8" style={{ animationDelay: '0.1s' }}>
          Building the future, one commit at a time.
        </p>
        
        {/* Mode Toggle */}
        <div className="animate-fade-in flex justify-center gap-4 mb-4" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={() => setMode('web')}
            className={`px-4 py-2 text-sm border transition-colors ${
              mode === 'web' 
                ? 'border-[#d4a5ff] text-[#d4a5ff]' 
                : 'border-[#2a2a2a] text-[#666666] hover:border-[#3a3a3a]'
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setMode('quant')}
            className={`px-4 py-2 text-sm border transition-colors ${
              mode === 'quant' 
                ? 'border-[#ffb74d] text-[#ffb74d]' 
                : 'border-[#2a2a2a] text-[#666666] hover:border-[#3a3a3a]'
            }`}
          >
            Quant
          </button>
        </div>
        
        {/* Current Mode Description */}
        <p className="text-xs text-[#3a3a3a]">
          {currentMode.name} · {currentMode.description}
        </p>
      </header>

      {/* Team Grid */}
      <section className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} mode={mode} index={index} />
          ))}
        </div>
      </section>

      {/* Workflow */}
      <Workflow mode={mode} />

      {/* Footer */}
      <footer className="text-center py-12 border-t border-[#1a1a1a]">
        <p className="text-xs text-[#3a3a3a]">AI-Powered Development Team</p>
      </footer>
    </div>
  );
}

export default App;
