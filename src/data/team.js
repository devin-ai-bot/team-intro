export const teamMembers = [
  {
    id: 'devin',
    name: 'Devin',
    emoji: '🏗️',
    discordId: '1476750603446124544',
    role: 'PM & Architect',
    skills: ['React', 'TypeScript', 'Architecture', 'Project Management'],
    description: 'AI Strategist & Architect. Leads projects from vision to execution.',
    avatar: 'https://cdn.discordapp.com/avatars/1476750603446124544/d62e929a6e09bbb6633d3b4abf8e4afc.png?size=256',
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
    avatar: 'https://cdn.discordapp.com/avatars/1479215745794707637/07cc81131a6ce8e4d69435f96051d05b.png?size=256',
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
    avatar: 'https://cdn.discordapp.com/avatars/1479141877168078889/0d81c469e1a53ba2256fa0ddfa0bf250.png?size=256',
    fallbackAvatar: '/avatars/dina.svg',
    color: 'from-purple-500 to-pink-400'
  }
];

export const workflowSteps = [
  { from: 'Devin', to: 'Dylan', action: 'Designs & Assigns' },
  { from: 'Dylan', to: 'Dina', action: 'Implements Code' },
  { from: 'Dina', to: 'Devin', action: 'Reviews & Reports' }
];
