import React, { useState } from 'react';

const TeamCard = ({ member }) => {
  const [imgError, setImgError] = useState(false);
  const avatarSrc = imgError ? member.fallbackAvatar : member.avatar;

  return (
    <div 
      className="group relative bg-black/80 border-4 border-cyan-500 p-4 pixel-border neon-border
                 transition-all duration-200 hover:scale-105 glitch"
      role="article"
      aria-label={`${member.name} - ${member.role}`}
    >
      {/* Pixel Avatar Frame */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          {/* Pixel border frame */}
          <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-purple-600"></div>
          <div className="relative bg-black p-1">
            <img 
              src={avatarSrc}
              alt={`${member.name}'s avatar`}
              className="w-24 h-24 object-cover image-pixelated"
              style={{ imageRendering: 'pixelated' }}
              onError={() => setImgError(true)}
            />
          </div>
          {/* Corner decorations */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-400"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-400"></div>
        </div>
      </div>

      {/* Name & Role */}
      <div className="text-center mb-3">
        <h3 className="font-pixel text-sm text-white mb-2 neon-text">
          {member.emoji} {member.name.toUpperCase()}
        </h3>
        <p className="font-mono text-xs text-green-400 bg-green-900/30 px-2 py-1 inline-block">
          [{member.role.toUpperCase()}]
        </p>
      </div>

      {/* Discord ID */}
      <div className="text-center mb-3">
        <code className="font-mono text-[10px] text-gray-500 bg-black border border-gray-700 px-2 py-1 block truncate">
          ID:{member.discordId}
        </code>
      </div>

      {/* Description */}
      <p className="font-mono text-xs text-gray-400 text-center mb-4 leading-relaxed">
        {member.description}
      </p>

      {/* Skills - Pixel Tags */}
      <div className="flex flex-wrap gap-2 justify-center">
        {member.skills.map((skill, index) => (
          <span 
            key={index}
            className="font-mono text-[10px] px-2 py-1 bg-purple-900/50 text-purple-300 
                       border border-purple-500/50"
          >
            {skill.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Status Indicator */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
        <span className="font-mono text-[10px] text-green-500">ONLINE</span>
      </div>
    </div>
  );
};

export default TeamCard;
