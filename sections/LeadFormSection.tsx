
import React, { useState } from 'react';
import { CustomerLead } from '../types';

const LeadFormSection: React.FC<{ t: any }> = ({ t }) => {
  const leadT = t.lead;
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

  const exportToCSV = () => {
    if (leads.length === 0) {
      alert('No data to export / 无可导出的数据');
      return;
    }

    const headers = [
      "ID", 
      "Company Name", 
      "Contact", 
      "Country", 
      "WhatsApp", 
      "Email", 
      "Interest", 
      "Project Types", 
      "Notes", 
      "Timestamp"
    ];

    const rows = leads.map(lead => [
      lead.id,
      `"${(lead.companyName || '').replace(/"/g, '""')}"`,
      `"${(lead.contactName || '').replace(/"/g, '""')}"`,
      `"${(lead.country || '').replace(/"/g, '""')}"`,
      `"${(lead.whatsapp || '').replace(/"/g, '""')}"`,
      `"${(lead.email || '').replace(/"/g, '""')}"`,
      lead.interest,
      `"${(lead.projectType || []).join(', ')}"`,
      `"${(lead.notes || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      lead.timestamp
    ]);

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-16 py-8">
      <header className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 tracking-tight">{leadT.title} <span className="text-slate-300">/ {leadT.subtitle}</span></h2>
        <div className="h-px w-24 bg-red-600" />
      </header>

      <div className="grid lg:grid-cols-5 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8 bg-white p-10 border border-slate-100 shadow-sm rounded-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{leadT.company}</label>
              <input 
                required
                type="text" 
                value={formData.companyName}
                onChange={e => setFormData({...formData, companyName: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{leadT.contact}</label>
              <input 
                required
                type="text" 
                value={formData.contactName}
                onChange={e => setFormData({...formData, contactName: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{leadT.country}</label>
              <input 
                type="text" 
                value={formData.country}
                onChange={e => setFormData({...formData, country: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{leadT.whatsapp}</label>
              <input 
                required
                type="text" 
                value={formData.whatsapp}
                onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{leadT.email}</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full border-b border-slate-200 py-2 focus:border-red-600 outline-none transition-colors text-sm font-light"
              />
            </div>
          </div>

          <div className="space-y-4">
             <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{leadT.interest}</label>
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
            <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{leadT.priority}</label>
            <select 
              value={formData.interest}
              onChange={e => setFormData({...formData, interest: e.target.value as any})}
              className="w-full border-b border-slate-200 py-2 bg-transparent outline-none focus:border-red-600 text-sm font-light"
            >
              <option value="High">{leadT.priorityH}</option>
              <option value="Medium">{leadT.priorityM}</option>
              <option value="Low">{leadT.priorityL}</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{leadT.notes}</label>
            <textarea 
              rows={3}
              value={formData.notes}
              onChange={e => setFormData({...formData, notes: e.target.value})}
              className="w-full border border-slate-100 bg-slate-50 p-4 focus:border-red-600 outline-none transition-colors text-sm font-light rounded-sm"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-slate-800 text-white py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-red-600 transition-all shadow-lg"
          >
            {leadT.submit}
          </button>
        </form>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-50 p-6 border border-slate-100 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-800">{leadT.history} ({leads.length})</h4>
              {leads.length > 0 && (
                <button 
                  onClick={exportToCSV}
                  className="text-[10px] text-red-600 hover:text-red-800 font-bold uppercase tracking-widest flex items-center gap-1 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Export
                </button>
              )}
            </div>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {leads.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-12">{leadT.noLeads}</p>
              ) : (
                leads.map(lead => (
                  <div key={lead.id} className="bg-white p-4 border border-slate-100 rounded-sm space-y-2 shadow-sm animate-in slide-in-from-top-4 duration-500 text-start">
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
             <h5 className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-2">{leadT.tipTitle}</h5>
             <p className="text-xs text-red-700 leading-relaxed font-light">
               {leadT.tipDesc}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadFormSection;
