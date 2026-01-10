
import React, { useState } from 'react';
import { CustomerLead } from '../types';

const LeadFormSection: React.FC = () => {
  const [leads, setLeads] = useState<CustomerLead[]>([]);
  const [formData, setFormData] = useState<Partial<CustomerLead>>({
    companyName: '',
    contactName: '',
    country: '',
    whatsapp: '',
    email: '',
    interest: 'Medium',
    projectType: [],
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLead: CustomerLead = {
      ...(formData as any),
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString()
    };
    setLeads([newLead, ...leads]);
    setFormData({
      companyName: '',
      contactName: '',
      country: '',
      whatsapp: '',
      email: '',
      interest: 'Medium',
      projectType: [],
      notes: ''
    });
    alert('Capture Successful / 登记成功');
  };

  const toggleProjectType = (type: string) => {
    const current = formData.projectType || [];
    if (current.includes(type)) {
      setFormData({ ...formData, projectType: current.filter(t => t !== type) });
    } else {
      setFormData({ ...formData, projectType: [...current, type] });
    }
  };

  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">客户登记 <span className="text-slate-300">/ Exhibition Lead Capture</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid lg:grid-cols-5 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8 bg-white p-10 border border-slate-100 shadow-sm rounded-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Company Name / 公司名称</label>
              <input 
                required
                type="text" 
                value={formData.companyName}
                onChange={e => setFormData({...formData, companyName: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
                placeholder="e.g. Al Maya Group"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Contact Name / 姓名</label>
              <input 
                required
                type="text" 
                value={formData.contactName}
                onChange={e => setFormData({...formData, contactName: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Country / 国家</label>
              <input 
                type="text" 
                value={formData.country}
                onChange={e => setFormData({...formData, country: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
                placeholder="UAE, Saudi..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">WhatsApp / Mobile</label>
              <input 
                required
                type="text" 
                value={formData.whatsapp}
                onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
                placeholder="+971..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email / 邮箱</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className="space-y-4">
             <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Interest Area / 感兴趣的方案</label>
             <div className="flex flex-wrap gap-3">
               {['Retail', 'Office', 'Smart IoT', 'Outdoor', 'Full Solution'].map(t => (
                 <button 
                  type="button"
                  key={t}
                  onClick={() => toggleProjectType(t)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all ${formData.projectType?.includes(t) ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-400 border-slate-200 hover:border-slate-800'}`}
                 >
                   {t}
                 </button>
               ))}
             </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Priority / 意向强度</label>
            <select 
              value={formData.interest}
              onChange={e => setFormData({...formData, interest: e.target.value as any})}
              className="w-full border-b border-slate-200 py-2 bg-transparent outline-none focus:border-red-600 text-sm font-light"
            >
              <option value="High">🔥 High Priority (Need Immediate Quote)</option>
              <option value="Medium">⚡ Medium (Follow up after fair)</option>
              <option value="Low">❄️ Low (Future interest)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Notes / 备注</label>
            <textarea 
              rows={3}
              value={formData.notes}
              onChange={e => setFormData({...formData, notes: e.target.value})}
              className="w-full border border-slate-100 bg-slate-50 p-4 focus:border-red-600 outline-none transition-colors text-sm font-light rounded-sm"
              placeholder="Project details, specific products, etc."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-slate-800 text-white py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-red-600 transition-all shadow-lg"
          >
            Submit Lead Data / 提交客户信息
          </button>
        </form>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-50 p-6 border border-slate-100 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Registration History / 最近登记 ({leads.length})</h4>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {leads.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-12">No leads captured yet.<br/>尚未登记任何客户。</p>
              ) : (
                leads.map(lead => (
                  <div key={lead.id} className="bg-white p-4 border border-slate-100 rounded-sm space-y-2 shadow-sm animate-in slide-in-from-top-4 duration-500">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold text-slate-800">{lead.companyName}</p>
                      <span className={`text-[8px] px-2 py-0.5 uppercase tracking-tighter ${lead.interest === 'High' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-500'}`}>{lead.interest}</span>
                    </div>
                    <p className="text-xs text-slate-500">{lead.contactName} • {lead.country}</p>
                    <p className="text-[10px] text-slate-400">{lead.timestamp}</p>
                  </div>
                ))
              )}
            </div>
          </div>
          
          <div className="p-6 bg-red-50 border border-red-100">
             <h5 className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-2">Pro Tip / 小建议</h5>
             <p className="text-xs text-red-700 leading-relaxed font-light">
               Remember to ask for the business card and note down specific product interests (e.g., Ultra-Wide Spotlight vs IoT system). 
               对于迪拜客户，优先记录 WhatsApp 号码，方便后续沟通。
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadFormSection;
