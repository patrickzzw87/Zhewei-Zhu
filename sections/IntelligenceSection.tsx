
import React from 'react';

const IntelligenceSection: React.FC = () => {
  return (
    <div className="space-y-20 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">智慧照明 <span className="text-slate-300">/ Smart Lighting IoT</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src="https://picsum.photos/seed/iot/800/1000" alt="IoT Control Interface" className="rounded-sm shadow-xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-white text-2xl font-light">三本云控 V2.0</h3>
            <p className="text-slate-300 text-sm mt-2">实时能耗监控、场景智能联动、全无线Mesh架构</p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-4">
            <h4 className="text-xl font-medium text-slate-800">OmniHue™ 全光谱色彩系统</h4>
            <p className="text-slate-600 font-light leading-relaxed">
              基于RGBWC五通道技术，输出无限接近自然光的连续全光谱。CRI Ra ≥ 95，精准还原物体质感。可根据情绪、节奏及生理时钟自动调节光影。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-red-600 font-bold">1.2x10¹⁸</p>
              <p className="text-xs text-slate-400 uppercase">Colors</p>
              <p className="text-xs text-slate-600">极致色彩还原</p>
            </div>
            <div className="space-y-2">
              <p className="text-red-600 font-bold">30%+</p>
              <p className="text-xs text-slate-400 uppercase">Energy Saving</p>
              <p className="text-xs text-slate-600">线材与人工成本节约</p>
            </div>
          </div>
          <div className="p-6 border border-slate-100 bg-slate-50 space-y-4">
            <p className="text-sm font-medium text-slate-800 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              云端智控特性
            </p>
            <ul className="grid grid-cols-2 gap-y-3 text-xs text-slate-500 font-light">
              <li>• 去中心化结构</li>
              <li>• 多权限管理</li>
              <li>• 智能跳频抗干扰</li>
              <li>• 无需改线对码</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white p-12 rounded-sm overflow-hidden relative">
         <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-light">超广角射灯</h3>
              <p className="text-slate-400 font-light">
                将中国传统“鼎”的文化底蕴与黑科技光学设计完美融合。荣获2024年法国设计奖、美国GOOD DESIGN银奖等多项国际殊荣。
              </p>
              <div className="flex gap-4">
                 <div className="px-4 py-2 border border-slate-700 text-[10px] tracking-widest uppercase">French Design Award</div>
                 <div className="px-4 py-2 border border-slate-700 text-[10px] tracking-widest uppercase">IDSA Finalist</div>
              </div>
            </div>
            <img src="https://picsum.photos/seed/lamp/500/500" alt="Spotlight" className="w-full max-w-xs mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
         </div>
      </section>
    </div>
  );
};

export default IntelligenceSection;
