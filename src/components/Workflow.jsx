const steps = [
  { emoji: '📐', name: 'Devin', role: 'Design & Plan', gradient: 'from-violet-500 to-purple-600' },
  { emoji: '🛠️', name: 'Dylan', role: 'Build & Deploy', gradient: 'from-cyan-500 to-blue-600' },
  { emoji: '🐛', name: 'Dina', role: 'Review & Test', gradient: 'from-emerald-500 to-teal-600' },
];

function Workflow() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-white text-center mb-10">How We Work</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {steps.map((step, index) => (
          <div key={step.name} className="flex items-center">
            {/* Step Card */}
            <div className="flex flex-col items-center px-6 py-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-2xl mb-2 shadow-lg`}>
                {step.emoji}
              </div>
              <span className="text-white font-semibold">{step.name}</span>
              <span className="text-slate-400 text-sm">{step.role}</span>
            </div>
            
            {/* Arrow (except for last item) */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center px-2">
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
            
            {/* Mobile Arrow */}
            {index < steps.length - 1 && (
              <div className="md:hidden flex items-center py-2">
                <svg className="w-6 h-6 text-slate-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Cycle indicator */}
      <p className="text-center text-slate-500 text-sm mt-6">
        ↺ Iterate until perfect
      </p>
    </section>
  );
}

export default Workflow;
