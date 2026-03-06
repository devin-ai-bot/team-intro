import { useState, useEffect } from 'react'
import './index.css'
import TeamCard from './components/TeamCard'
import Workflow from './components/Workflow'
import { teamMembers, translations } from './data/team'

function App() {
  const [mode, setMode] = useState('web')
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  
  const t = translations[lang]
  
  useEffect(() => { localStorage.setItem('lang', lang) }, [lang])
  
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="pt-24 pb-12 text-center px-4 relative">
        <div className="absolute top-8 right-8 flex gap-2">
          <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs border transition-all duration-300 ${lang === 'en' ? 'border-[#d4a5ff] text-[#d4a5ff]' : 'border-[#2a2a2a] text-[#666666] hover:border-[#3a3a3a]'}`}>EN</button>
          <button onClick={() => setLang('zh')} className={`px-3 py-1 text-xs border transition-all duration-300 ${lang === 'zh' ? 'border-[#d4a5ff] text-[#d4a5ff]' : 'border-[#2a2a2a] text-[#666666] hover:border-[#3a3a3a]'}`}>中文</button>
        </div>
        <h1 className="animate-fade-in text-3xl md:text-4xl font-medium text-[#f5f5f0] mb-4">{t.title}</h1>
        <p className="animate-fade-in text-sm text-[#666666] max-w-md mx-auto mb-8">{t.subtitle}</p>
        <div className="animate-fade-in flex justify-center gap-4 mb-4">
          <button onClick={() => setMode('web')} className={`px-4 py-2 text-sm border transition-colors ${mode === 'web' ? 'border-[#d4a5ff] text-[#d4a5ff]' : 'border-[#2a2a2a] text-[#666666]'}`}>Web</button>
          <button onClick={() => setMode('quant')} className={`px-4 py-2 text-sm border transition-colors ${mode === 'quant' ? 'border-[#ffb74d] text-[#ffb74d]' : 'border-[#2a2a2a] text-[#666666]'}`}>Quant</button>
        </div>
        <p className="text-xs text-[#3a3a3a]">{t.modes[mode].name}</p>
      </header>
      <section className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => <TeamCard key={member.id} member={member} mode={mode} lang={lang} index={index} />)}
        </div>
      </section>
      <Workflow mode={mode} lang={lang} t={t} />
      <footer className="text-center py-12 border-t border-[#1a1a1a]">
        <p className="text-xs text-[#3a3a3a]">{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
