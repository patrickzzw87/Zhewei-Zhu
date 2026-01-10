
import React from 'react';

const BrandSection: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">企业品牌 <span className="text-slate-300">/ 20 Years of Excellence</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-600 leading-relaxed font-light">
          <p className="text-xl text-slate-800 font-medium">品质成就品牌，专注商业照明20年。</p>
          <p>上海三本照明科技股份有限公司是一家集建筑室内设计、装饰施工、灯具研发生产为一体的多元化综合型照明集团。自2005年成立以来，我们始终以国际视野、专业执行为客户创造价值。</p>
          <ul className="space-y-3 mt-8">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-red-600" />
              <span>国家高新技术企业（连续十年）</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-red-600" />
              <span>四大核心生产基地：上海、广东、福建、江苏</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-red-600" />
              <span>国家体育场“鸟巢”官方指定智能照明供应商</span>
            </li>
          </ul>
        </div>
        <div className="relative group">
          <img 
            src="https://picsum.photos/seed/birdnest/800/600" 
            alt="National Stadium Birds Nest" 
            className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 -z-10 group-hover:bg-red-50 transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
        <div className="text-center p-8 bg-slate-50 rounded-sm">
          <p className="text-3xl font-bold text-red-600">13</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">Invention Patents</p>
          <p className="text-xs text-slate-600">发明专利</p>
        </div>
        <div className="text-center p-8 bg-slate-50 rounded-sm">
          <p className="text-3xl font-bold text-red-600">49</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">Utility Patents</p>
          <p className="text-xs text-slate-600">实用新型专利</p>
        </div>
        <div className="text-center p-8 bg-slate-50 rounded-sm">
          <p className="text-3xl font-bold text-red-600">1000+</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">Brand Clients</p>
          <p className="text-xs text-slate-600">服务企业</p>
        </div>
        <div className="text-center p-8 bg-slate-50 rounded-sm">
          <p className="text-3xl font-bold text-red-600">1200㎡</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">Showroom Area</p>
          <p className="text-xs text-slate-600">总部实体展厅</p>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
