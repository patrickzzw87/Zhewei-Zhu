
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types.ts';

interface AIAssistantProps {
  language: Language;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      // Use named parameter for initialization and ensure API key is from process.env.API_KEY
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        // Using gemini-3-pro-preview as suggested for expert assistant (Complex Text Task)
        model: 'gemini-3-pro-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are '三本AI助手' (SANBEN AI Assistant), an expert customer service representative for SANBEN Lighting Technology (上海三本照明科技) at the Dubai Exhibition. 
          Company Profile: 20 years expertise in retail lighting. Official supplier for China's National Stadium 'Bird's Nest' (National Landmark).
          Value Proposition: National-grade quality standards for top-tier global chain brands.
          Manufacturing: 4 major bases (Shanghai, Guangdong, Fujian, Jiangsu).
          Service: 20+ professional service providers nationwide. Global service to 1,000+ brands.
          Key Technologies: OmniHue™ Full Spectrum (CRI 95+), SANBEN Cloud V2.0 (Wireless Mesh IoT, 30% energy saving).
          Partners: Walmart, Aldi, Sam's Club, Carrefour, etc.
          Voice: Professional, helpful, concise, and futuristic. Respond in the language used by the visitor (${language}). Always introduce yourself as 三本AI助手.`,
          temperature: 0.7,
        },
      });

      // Extract text output directly from the .text property of GenerateContentResponse
      const aiResponse = response.text || "I'm sorry, I couldn't process that. / 抱歉，我无法处理该请求。";
      setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Service temporarily unavailable. Please try again. / 系统繁忙，请稍后再试。" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const localizedStrings = {
    zh: {
      name: "三本AI助手",
      welcome: "欢迎咨询三本照明科技！您可以询问技术参数、成功案例或智慧系统。",
      placeholder: "输入您的问题...",
      prompts: ["关于OmniHue™", "鸟巢案例", "如何节能？"]
    },
    en: {
      name: "SANBEN AI Assistant",
      welcome: "Welcome to SANBEN Lighting Tech! Feel free to ask about tech specs, cases, or smart systems.",
      placeholder: "Type your message...",
      prompts: ["About OmniHue™", "Bird's Nest Case", "How to save energy?"]
    },
    de: {
      name: "三本AI助手 (SANBEN AI)",
      welcome: "Willkommen bei SANBEN! Fragen Sie nach Spezifikationen, Fällen oder smarten Systemen.",
      placeholder: "Nachricht eingeben...",
      prompts: ["Über OmniHue™", "Vogelnest-Fall", "Energiesparen?"]
    },
    ar: {
      name: "三本AI助手 (مساعد سانبن)",
      welcome: "مرحباً بكم في سانبن! اسأل عن المواصفات التقنية أو الحالات أو الأنظمة الذكية.",
      placeholder: "اكتب رسالتك...",
      prompts: ["حول OmniHue™", "حالة عش الطائر", "توفير الطاقة؟"]
    },
    fr: {
      name: "三本AI助手 (Assistant SANBEN)",
      welcome: "Bienvenue chez SANBEN ! Posez vos questions sur la technique, les cas ou les systèmes intelligents.",
      placeholder: "Votre message...",
      prompts: ["À propos d'OmniHue™", "Cas Nid d'Oiseau", "Économie d'énergie?"]
    },
    es: {
      name: "三本AI助手 (Asistente SANBEN)",
      welcome: "¡Bienvenido a SANBEN! Pregunte sobre especificaciones, casos o sistemas inteligentes.",
      placeholder: "Escriba su mensaje...",
      prompts: ["Sobre OmniHue™", "Caso Nido de Pájaro", "¿Cómo ahorrar?"]
    },
    nl: {
      name: "三本AI助手 (SANBEN Assistent)",
      welcome: "Welkom bij SANBEN! Vraag naar specificaties, cases of slimme systemen.",
      placeholder: "Typ uw bericht...",
      prompts: ["Over OmniHue™", "Vogelnest Case", "Energie besparen?"]
    },
    pt: {
      name: "三本AI助手 (Assistente SANBEN)",
      welcome: "Bem-vindo à SANBEN! Pergunte sobre especificações, casos o sistemas inteligentes.",
      placeholder: "Sua mensagem...",
      prompts: ["Sobre OmniHue™", "Caso Ninho de Pássaro", "Economizar energia?"]
    },
    ja: {
      name: "三本AI助手",
      welcome: "三本照明へようこそ！技術仕様、事例、スマートシステムについてお尋ねください。",
      placeholder: "メッセージを入力...",
      prompts: ["OmniHue™について", "鳥の巣の事例", "省エネ方法は？"]
    },
    ko: {
      name: "三本AI助手 (산본 AI)",
      welcome: "산본 조명에 오신 것을 환영합니다! 기술 사양, 사례 또는 스마트 시스템에 대해 문의하세요.",
      placeholder: "메시지를 입력하세요...",
      prompts: ["OmniHue™ 정보", "냐오차오 사례", "에너지 절감 방법?"]
    }
  };

  const ui = localizedStrings[language as keyof typeof localizedStrings] || localizedStrings.en;

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <div className="relative">
            <span className="text-xl font-bold">三</span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[60] w-[90vw] md:w-[520px] h-[65vh] md:h-[550px] bg-white border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-sm flex flex-col animate-in slide-in-from-bottom-4 fade-in duration-300 overflow-hidden">
          {/* Header */}
          <header className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between shadow-lg border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center font-bold text-lg shadow-xl ring-1 ring-white/20">三</div>
              <div className="flex flex-col">
                <h3 className="text-base font-bold tracking-widest uppercase">{ui.name}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">SANBEN AI EXPERT • ONLINE</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">DUBAI EXHIBITION 2025</p>
              <p className="text-[8px] text-red-500/80 font-bold uppercase tracking-tighter">GEMINI 3 PRO INTERFACE</p>
            </div>
          </header>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/50"
          >
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-white shadow-xl border border-slate-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-3xl font-black ring-4 ring-slate-50">
                  三
                </div>
                <div className="space-y-4 px-10">
                  <h4 className="text-slate-900 font-black text-lg uppercase tracking-widest">{ui.name}</h4>
                  <p className="text-sm text-slate-600 font-light leading-relaxed uppercase tracking-wider max-w-sm mx-auto">
                    {ui.welcome}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 px-8">
                  {ui.prompts.map(p => (
                    <button 
                      key={p} 
                      onClick={() => { setInput(p); }}
                      className="text-[10px] px-5 py-2.5 bg-white border border-slate-200 rounded-sm hover:border-red-600 hover:text-red-600 hover:shadow-xl transition-all text-slate-600 font-bold uppercase tracking-wider"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed rounded-sm shadow-md ${m.role === 'user' ? 'bg-red-600 text-white rounded-tr-none' : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-sm flex gap-2 items-center shadow-md">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100 flex gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
            <input 
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && sendMessage()}
              placeholder={ui.placeholder}
              className="flex-grow text-sm border-b-2 border-slate-100 py-3 focus:border-red-600 outline-none font-medium transition-all px-1"
            />
            <button 
              onClick={sendMessage}
              disabled={isTyping}
              className="w-14 h-14 bg-slate-900 text-white rounded-sm flex items-center justify-center hover:bg-red-600 active:scale-95 transition-all disabled:opacity-50 shadow-xl group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
