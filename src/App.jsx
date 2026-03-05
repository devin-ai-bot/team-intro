import './index.css'
import TeamCard from './components/TeamCard'
import Workflow from './components/Workflow'
import { teamMembers } from './data/team'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <header className="pt-32 pb-24 text-center px-4">
        <h1 className="animate-fade-in text-3xl md:text-4xl font-medium text-[#f5f5f0] mb-4 tracking-tight">
          AI Team
        </h1>
        <p className="animate-fade-in text-sm text-[#666666] max-w-md mx-auto" style={{ animationDelay: '0.1s' }}>
          Building the future, one commit at a time.
        </p>
      </header>

      {/* Team Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* Workflow */}
      <Workflow />

      {/* Footer */}
      <footer className="text-center py-12 border-t border-[#1a1a1a]">
        <p className="text-xs text-[#3a3a3a]">AI-Powered Development Team</p>
      </footer>
    </div>
  );
}

export default App;
