const fs = require('fs');
let c = fs.readFileSync('src/app/payroll-software/page.tsx', 'utf8');

const startStr = '{/* 3. SALARY SLIP BREAKDOWN */}';
const endStr = '{/* 4. FEATURE BENTO GRID */}';

let idx1 = c.indexOf(startStr);
let idx2 = c.indexOf(endStr);

if (idx1 === -1 || idx2 === -1) {
    console.error("Could not find start or end bounds!");
    process.exit(1);
}

const newStr = `{/* 3. PREMIUM SALARY SLIP BREAKDOWN */}
      <section className="relative overflow-hidden" style={{ padding: "100px 0", background: "#0F172A" }}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>

        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Content Area */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase mb-6">
               <Zap className="w-4 h-4" /> Powering Indian Payroll
            </div>
            
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-1px", marginBottom: "24px" }}>
              Indian Payroll Components,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Mapped Perfectly.</span>
            </h2>
            
            <p style={{ fontSize: "18px", color: "#94A3B8", lineHeight: 1.6, marginBottom: "32px", maxWidth: "90%" }}>
              Our engine understands the deep intricacies of Indian CTC structures. Automate Basic + DA, Metro HRA calculations, Special Allowances, and exact statutory deductions natively with zero manual oversight.
            </p>
            
            <div className="space-y-5">
              {[
                { title: "Metro vs Non-Metro HRA", desc: "Auto-detects location for precise 40% or 50% exemptions." },
                { title: "Smart Section 80C to 80U", desc: "Employees declare, we compute exact tax automatically." },
                { title: "Auto LOP Adjustments", desc: "Synced directly with Attendance for precision payouts." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area: Premium Mockup */}
          <div className="relative mt-8 lg:mt-0">
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 z-20 bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_8px_16px_rgba(16,185,129,0.3)] border border-emerald-400 flex items-center gap-2 animate-bounce">
              <Check className="w-4 h-4" /> Audited & Verified
            </div>
            
            <div className="absolute -left-8 top-32 z-20 bg-slate-800/80 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xl border border-slate-600 flex items-center gap-2 max-w-[150px]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0"></span> TDS Auto-Computed
            </div>

            {/* Glassmorphic Payslip Card */}
            <div className="bg-slate-900/60 backdrop-blur-2xl p-6 sm:p-10 rounded-[32px] shadow-2xl border border-slate-700/50 relative overflow-hidden group hover:border-slate-600 transition-all duration-500">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-slate-800 pb-6 mb-6">
                <div>
                  <h3 className="font-extrabold text-2xl text-white tracking-tight uppercase">Acme Corp</h3>
                  <p className="text-sm text-slate-400 mt-1">Payslip • March 2026</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-inner">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 text-sm mb-8">
                {/* Earnings */}
                <div>
                  <p className="font-bold text-slate-300 mb-3 border-b border-slate-800 pb-2 text-xs uppercase tracking-wider">Earnings</p>
                  <div className="flex justify-between items-center mb-3 group-hover:bg-slate-800/50 px-2 py-1 -mx-2 rounded transition-colors"><span className="text-slate-400">Basic Salary</span><span className="font-semibold text-slate-100">₹ 50,000</span></div>
                  <div className="flex justify-between items-center mb-3 group-hover:bg-slate-800/50 px-2 py-1 -mx-2 rounded transition-colors"><span className="text-slate-400">HRA (Metro)</span><span className="font-semibold text-slate-100">₹ 25,000</span></div>
                  <div className="flex justify-between items-center mb-3 group-hover:bg-slate-800/50 px-2 py-1 -mx-2 rounded transition-colors"><span className="text-slate-400">Special Allow.</span><span className="font-semibold text-slate-100">₹ 14,500</span></div>
                </div>

                {/* Deductions */}
                <div>
                  <p className="font-bold text-slate-300 mb-3 border-b border-slate-800 pb-2 text-xs uppercase tracking-wider">Deductions</p>
                  <div className="flex justify-between items-center mb-3 group-hover:bg-slate-800/50 px-2 py-1 -mx-2 rounded transition-colors"><span className="text-slate-400">EPF</span><span className="font-semibold text-slate-100">₹ 1,800</span></div>
                  <div className="flex justify-between items-center mb-3 group-hover:bg-slate-800/50 px-2 py-1 -mx-2 rounded transition-colors"><span className="text-slate-400">Prof. Tax</span><span className="font-semibold text-slate-100">₹ 200</span></div>
                  <div className="flex justify-between items-center mb-3 group-hover:bg-slate-800/50 px-2 py-1 -mx-2 rounded transition-colors"><span className="text-slate-400">TDS</span><span className="font-semibold text-slate-100">₹ 3,000</span></div>
                </div>
              </div>

              {/* Visual Bar Chart (Mocking Salary breakdown sizes) */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Gross: ₹89,500</span>
                  <span>Ded: ₹5,000</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  <div className="h-full bg-emerald-500 w-[55%] hover:opacity-80 transition-opacity cursor-pointer"></div>
                  <div className="h-full bg-cyan-400 w-[25%] hover:opacity-80 transition-opacity cursor-pointer"></div>
                  <div className="h-full bg-indigo-500 w-[15%] hover:opacity-80 transition-opacity cursor-pointer"></div>
                  <div className="h-full bg-red-400 w-[5%] hover:opacity-80 transition-opacity cursor-pointer"></div>
                </div>
              </div>

              {/* Net Pay Total */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 p-5 rounded-2xl flex justify-between items-center">
                <div>
                   <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">Net Take Home</p>
                   <p className="text-slate-300 text-sm">Transferred via NEFT</p>
                </div>
                <span className="text-3xl font-black text-white tracking-tight">₹ 84,500</span>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>

      `;

c = c.substring(0, idx1) + newStr + c.substring(idx2);
fs.writeFileSync('src/app/payroll-software/page.tsx', c);
console.log("Section completely redesigned successfully!");
