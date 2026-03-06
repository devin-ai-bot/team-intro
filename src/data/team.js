export const translations = {
  en: { title: 'AI Team', subtitle: 'Building the future, one commit at a time.', workflow: 'WORKFLOW', footer: 'AI-Powered Development Team', model: 'Model', modes: { web: { name: 'Web Development', desc: 'Full-stack web products' }, quant: { name: 'Quant Trading', desc: 'Quantitative trading team' } } },
  zh: { title: 'AI 团队', subtitle: '一次提交，构建未来。', workflow: '工作流程', footer: 'AI 驱动的开发团队', model: '模型', modes: { web: { name: 'Web 开发', desc: '全栈 Web 产品' }, quant: { name: '量化交易', desc: '量化交易团队' } } }
};

export const teamMembers = [
  { id: 'devin', name: 'Devin', avatar: 'https://cdn.discordapp.com/avatars/1476750603446124544/d62e929a6e09bbb6633d3b4abf8e4afc.webp?size=256', roles: {
    web: { title: { en: 'PM & Architect', zh: '产品经理/架构师' }, skills: ['Architecture', 'PM', 'Requirements', 'System Design'], description: { en: 'Defines requirements, designs system architecture.', zh: '定义需求，设计系统架构。' }, model: 'qwen3-max-2026-01-23' },
    quant: { title: { en: 'Quant Researcher', zh: '量化研究员' }, skills: ['Alpha Signals', 'Statistical Arbitrage', 'Factor Mining', 'ML Models'], description: { en: 'Builds mathematical models and trading strategies.', zh: '构建数学模型和交易策略。' }, model: 'qwen3-max-2026-01-23' }
  }},
  { id: 'dylan', name: 'Dylan', avatar: 'https://cdn.discordapp.com/avatars/1479215745794707637/07cc81131a6ce8e4d69435f96051d05b.webp?size=256', roles: {
    web: { title: { en: 'Core Developer', zh: '主力开发' }, skills: ['React', 'Node.js', 'Python', 'Docker', 'K8s', 'DevOps'], description: { en: 'Fullstack developer & DevOps expert.', zh: '全栈开发 & DevOps 专家。' }, model: 'qwen3-coder-next' },
    quant: { title: { en: 'Quant Developer', zh: '量化开发/执行专家' }, skills: ['C++', 'Rust', 'Python', 'HFT Engine', 'Data Pipeline', 'Exchange API'], description: { en: 'Implements low-latency trading engines.', zh: '实现低延迟交易引擎。' }, model: 'qwen3-coder-next' }
  }},
  { id: 'dina', name: 'Dina', avatar: 'https://cdn.discordapp.com/avatars/1479141877168078889/0d81c469e1a53ba2256fa0ddfa0bf250.webp?size=256', roles: {
    web: { title: { en: 'UX Designer + QA', zh: '用户体验设计 + 测试' }, skills: ['UX Design', 'Code Audit', 'Bug Hunting', 'Test Strategy'], description: { en: 'Designs UI/UX and reviews code.', zh: '设计 UI/UX，审查代码。' }, model: 'glm-5' },
    quant: { title: { en: 'Risk Controller & Backtester', zh: '风控与回测审计' }, skills: ['Backtest Validation', 'Stress Testing', 'Risk Audit', 'Stop-loss Monitoring'], description: { en: 'Validates backtest results and monitors risks.', zh: '验证回测结果，监控风险。' }, model: 'glm-5' }
  }}
];
