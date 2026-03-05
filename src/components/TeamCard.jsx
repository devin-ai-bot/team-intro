function TeamCard({ member }) {
  return (
    <div className="group relative bg-slate-800/30 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-1">
      {/* Avatar */}
      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl shadow-lg`}>
        {member.emoji}
      </div>
      
      {/* Name & Role */}
      <h3 className="text-xl font-bold text-white text-center mb-1">
        {member.name}
      </h3>
      <p className="text-slate-400 text-center text-sm mb-1">
        {member.role}
      </p>
      <p className="text-slate-500 text-center text-xs mb-4">
        {member.roleCN}
      </p>
      
      {/* Description */}
      <p className="text-slate-300 text-sm text-center mb-5 leading-relaxed min-h-[3rem]">
        {member.description}
      </p>
      
      {/* Skills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 border border-slate-600/30 group-hover:border-slate-500/50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
