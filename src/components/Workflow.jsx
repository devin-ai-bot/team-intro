const steps = [
  { name: 'Devin', role: 'Plan & Architect', emoji: '📐' },
  { name: 'Dina', role: 'Design & Review', emoji: '🎨' },
  { name: 'Dylan', role: 'Build & Deploy', emoji: '🛠️' },
];

function Workflow() {
  return (
    <section className="py-20 animate-fade-in">
      <h2 className="text-sm text-[#666666] text-center mb-12 tracking-wider">WORKFLOW</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
        {steps.map((step, index) => (
          <div key={step.name} className="flex items-center">
            <div className="flex flex-col items-center px-8 py-4">
              <span className="text-2xl mb-3">{step.emoji}</span>
              <span className="text-sm text-[#f5f5f0] font-medium">{step.name}</span>
              <span className="text-xs text-[#666666] mt-1">{step.role}</span>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:flex text-[#3a3a3a]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
            
            {index < steps.length - 1 && (
              <div className="md:hidden text-[#3a3a3a] rotate-90">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <p className="text-center text-[#3a3a3a] text-xs mt-12">iterate until perfect</p>
    </section>
  );
}

export default Workflow;
