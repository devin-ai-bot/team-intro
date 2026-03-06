const workflows = {
  web: {
    color: '#d4a5ff',
    steps: [
      { name: 'Devin', role: { en: 'Plan', zh: '规划' }, icon: '📐' },
      { name: 'Dina', role: { en: 'Design', zh: '设计' }, icon: '🎨' },
      { name: 'Dylan', role: { en: 'Build', zh: '开发' }, icon: '🛠️' },
      { name: 'Dina', role: { en: 'Review', zh: '审查' }, icon: '🔍' }
    ]
  },
  quant: {
    color: '#ffb74d',
    steps: [
      { name: 'Devin', role: { en: 'Research', zh: '研究' }, icon: '📊' },
      { name: 'Dina', role: { en: 'Validate', zh: '验证' }, icon: '🛡️' },
      { name: 'Dylan', role: { en: 'Execute', zh: '执行' }, icon: '⚡' }
    ]
  }
}

function Workflow({ mode, lang, t }) {
  const workflow = workflows[mode]
  
  return (
    <section className="py-16 animate-fade-in border-t border-[#1a1a1a]">
      <h2 className="text-sm text-[#666666] text-center mb-12 tracking-wider">{t.workflow}</h2>
      <div className="flex items-center justify-center px-4">
        <div className="flex items-center gap-0">
          {workflow.steps.map((step, index) => (
            <div key={index} className="flex items-center group">
              <div className="flex flex-col items-center relative">
                <div className="w-14 h-14 rounded-full bg-[#1a1a1a] border-2 flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-110" style={{ borderColor: workflow.color }}>{step.icon}</div>
                <span className="text-sm text-[#f5f5f0] mt-3 font-medium">{step.name}</span>
                <span className="text-xs mt-1" style={{ color: workflow.color }}>{typeof step.role === 'string' ? step.role : step.role[lang]}</span>
              </div>
              {index < workflow.steps.length - 1 && <div className="w-12 md:w-20 h-0.5 mx-2" style={{ backgroundColor: `${workflow.color}40` }} />}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12"><span className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: `${workflow.color}60`, color: workflow.color }}>{mode === 'web' ? 'Web Development' : 'Quant Trading'}</span></div>
    </section>
  )
}

export default Workflow
