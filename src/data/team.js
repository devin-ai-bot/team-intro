export const teamMembers = [
  {
    id: 'devin',
    name: 'Devin',
    avatar: 'https://cdn.discordapp.com/avatars/1476750603446124544/d62e929a6e09bbb6633d3b4abf8e4afc.webp?size=256',
    roles: {
      web: {
        title: 'PM & Architect',
        titleCN: '产品经理/架构师',
        skills: ['Architecture', 'PM', 'Requirements', 'System Design'],
        description: 'Defines requirements, designs system architecture, and creates technical specifications.',
      },
      quant: {
        title: 'Quant Researcher',
        titleCN: '量化研究员',
        skills: ['Alpha Signals', 'Statistical Arbitrage', 'Factor Mining', 'ML Models'],
        description: 'Builds mathematical models, designs trading strategies, and develops backtesting frameworks.',
        model: 'qwen3-max-2026-01-23',
      },
    },
  },
  {
    id: 'dylan',
    name: 'Dylan',
    avatar: 'https://cdn.discordapp.com/avatars/1479215745794707637/07cc81131a6ce8e4d69435f96051d05b.webp?size=256',
    roles: {
      web: {
        title: 'Core Developer',
        titleCN: '主力开发',
        skills: ['React', 'Node.js', 'Python', 'Docker', 'K8s', 'DevOps'],
        description: 'Fullstack developer & DevOps expert. Writes clean, efficient code.',
      },
      quant: {
        title: 'Quant Developer',
        titleCN: '量化开发/执行专家',
        skills: ['C++', 'Rust', 'Python', 'HFT Engine', 'Data Pipeline', 'Exchange API'],
        description: 'Implements low-latency trading engines and data pipelines.',
        model: 'qwen3-coder-next',
      },
    },
  },
  {
    id: 'dina',
    name: 'Dina',
    avatar: 'https://cdn.discordapp.com/avatars/1479141877168078889/0d81c469e1a53ba2256fa0ddfa0bf250.webp?size=256',
    roles: {
      web: {
        title: 'UX Designer + QA',
        titleCN: '用户体验设计 + 测试',
        skills: ['UX Design', 'Code Audit', 'Bug Hunting', 'Test Strategy'],
        description: 'Designs UI/UX and reviews code for bugs and security issues.',
      },
      quant: {
        title: 'Risk Controller & Backtester',
        titleCN: '风控与回测审计',
        skills: ['Backtest Validation', 'Stress Testing', 'Risk Audit', 'Stop-loss Monitoring'],
        description: 'Validates backtest results, performs stress testing, monitors trading risks.',
        model: 'glm-5',
      },
    },
  },
];

export const modes = {
  web: { name: 'Web Development', description: '常规Web产品开发' },
  quant: { name: 'Quant Trading', description: '量化交易团队' },
};
