import React from 'react';

const TeamCard = ({ member }) => {
  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20
                 hover:bg-white/10"
      role="article"
      aria-label={`${member.name} - ${member.role}`}
    >
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} p-1`}>
          <img 
            src={member.avatar.replace('.png', '.svg')} 
            alt={`${member.name}'s avatar`}
            className="w-full h-full rounded-full bg-slate-900 object-cover"
          />
        </div>
      </div>

      {/* Name & Emoji */}
      <div className="text-center mb-3">
        <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
          <span>{member.emoji}</span>
          <span>{member.name}</span>
        </h3>
        <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
      </div>

      {/* Discord ID */}
      <div className="text-center mb-4">
        <code className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
          {member.discordId}
        </code>
      </div>

      {/* Description */}
      <p className="text-slate-300 text-sm text-center mb-4 leading-relaxed">
        {member.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {member.skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                       text-cyan-300 rounded-full border border-cyan-500/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
