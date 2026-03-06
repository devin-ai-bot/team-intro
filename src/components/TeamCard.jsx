function TeamCard({ member, mode, lang, index }) {
  const role = member.roles[mode]
  const title = typeof role.title === 'string' ? role.title : role.title[lang]
  const desc = typeof role.description === 'string' ? role.description : role.description[lang]
  
  return (
    <div className="animate-fade-in p-8 rounded bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="w-24 h-24 mx-auto mb-6 relative">
        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" style={{ imageRendering: 'pixelated' }} />
        <div className="absolute inset-0 border-2 border-[#2a2a2a] pointer-events-none" />
      </div>
      <h3 className="text-lg font-medium text-[#f5f5f0] text-center mb-1">{member.name}</h3>
      <p className="text-sm text-[#a0a0a0] text-center mb-6">{title}</p>
      <p className="text-sm text-[#a0a0a0] text-center leading-relaxed mb-6">{desc}</p>
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {role.skills.map((skill) => <span key={skill} className="px-2 py-1 text-xs text-[#a0a0a0] border border-[#2a2a2a] hover:border-[#d4a5ff] hover:text-[#d4a5ff] transition-colors cursor-default">{skill}</span>)}
      </div>
      {role.model && <div className="text-center"><span className="text-xs text-[#666666]">model: {role.model}</span></div>}
    </div>
  )
}

export default TeamCard
