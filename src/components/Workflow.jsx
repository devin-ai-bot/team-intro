const workflows = {
  web: {
    color: '#d4a5ff',
    steps: [
      { name: 'Devin', role: 'Plan', icon: '📐' },
      { name: 'Dina', role: 'Design', icon: '🎨' },
      { name: 'Dylan', role: 'Build', icon: '🛠️' },
      { name: 'Dina', role: 'Review', icon: '🔍' },
    ],
  },
  quant: {
    color: '#ffb74d',
    steps: [
      { name: 'Devin', role: 'Research', icon: '📊' },
      { name: 'Dina', role: 'Validate', icon: '🛡️' },
      { name: 'Dylan', role: 'Execute', icon: '⚡' },
    ],
  },
};

function Workflow({ mode }) {
  const workflow = workflows[mode];
  
  return (
    <section className="py-20 animate-fade-in border-t border-[#1a1a1a]">
      <h2 className="text-sm text-[#666666] text-center mb-12 tracking-wider">WORKFLOW</h2>
      
      {/* Timeline */}
      <div className="flex items-center justify-center px-4">
        <div className="flex items-center gap-0">
          {workflow.steps.map((step, index) => (
            <div key={index} className="flex items-center group">
              {/* Node */}
              <div className="flex flex-col items-center relative">
                {/* Circle with icon */}
                <div 
                  className="w-14 h-14 rounded-full bg-[#1a1a1a] border-2 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110"
                  style={{ borderColor: workflow.color }}
                >
                  {step.icon}
                </div>
                
                {/* Name */}
                <span className="text-sm text-[#f5f5f0] mt-3 font-medium">{step.name}</span>
                
                {/* Role */}
                <span 
                  className="text-xs mt-1 transition-colors duration-300"
                  style={{ color: workflow.color }}
                >
                  {step.role}
                </span>
              </div>
              
              {/* Connector line */}
              {index < workflow.steps.length - 1 && (
                <div 
                  className="w-12 md:w-20 h-0.5 mx-2 transition-all duration-300"
                  style={{ backgroundColor: `${workflow.color}40` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Mode indicator */}
      <div className="text-center mt-12">
        <span 
          className="text-xs px-3 py-1 rounded-full border transition-colors"
          style={{ 
            borderColor: `${workflow.color}60`,
            color: workflow.color 
          }}
        >
          {mode === 'web' ? 'Web Development' : 'Quant Trading'}
        </span>
      </div>
    </section>
  );
}

export default Workflow;
