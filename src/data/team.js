export const teamMembers = [
  {
    id: 'devin',
    name: 'Devin',
    emoji: '🏗️',
    discordId: '1476750603446124544',
    role: 'PM & Architect',
    skills: ['React', 'TypeScript', 'Architecture', 'Project Management'],
    description: 'AI Strategist & Architect. Leads projects from vision to execution.',
    avatar: 'https://cdn.discordapp.com/avatars/1476750603446124544/6f0f3c8d5e1a2b3c4d5e6f7a8b9c0d1e.png?size=256',
    fallbackAvatar: '/avatars/devin.svg',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'dylan',
    name: 'Dylan',
    emoji: '🛠️',
    discordId: '1479215745794707637',
    role: 'Core Developer',
    skills: ['React', 'Node.js', 'DevOps', 'Full-stack Development'],
    description: 'Full-stack developer. Builds systems and ships code.',
    avatar: 'https://cdn.discordapp.com/avatars/1479215745794707637/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6.png?size=256',
    fallbackAvatar: '/avatars/dylan.svg',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    id: 'dina',
    name: 'Dina',
    emoji: '🐛',
    discordId: '1479141877168078889',
    role: 'QA & Code Review',
    skills: ['Bug Hunting', 'Code Audit', 'Root Cause Analysis', 'Test Strategy'],
    description: 'QA Engineer. Finds bugs and ensures code quality.',
    avatar: 'https://cdn.discordapp.com/avatars/1479141877168078889/x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6.png?size=256',
    fallbackAvatar: '/avatars/dina.svg',
    color: 'from-purple-500 to-pink-400'
  }
];

export const workflowSteps = [
  { from: 'Devin', to: 'Dylan', action: 'Designs & Assigns' },
  { from: 'Dylan', to: 'Dina', action: 'Implements Code' },
  { from: 'Dina', to: 'Devin', action: 'Reviews & Reports' }
];
