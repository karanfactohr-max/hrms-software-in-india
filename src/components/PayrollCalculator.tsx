'use client';

import { useState } from 'react';
import { Calculator, ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PayrollCalculator() {
  const [ctc, setCtc] = useState(50000);
  const [empCount, setEmpCount] = useState(10);
  const [basicPercent, setBasicPercent] = useState(50);
  const [taxRegime, setTaxRegime] = useState('old');

  const calculatePayroll = () => {
    const basic = (ctc * basicPercent) / 100;
    const hra = ctc * 0.4;
    const specialAllowance = ctc - basic - hra;

    const pfBase = Math.min(basic, 15000);
    const employeePf = Math.round(pfBase * 0.12);
    const employerPf = Math.round(pfBase * 0.12);

    let employeeEsi = 0;
    let employerEsi = 0;
    if (ctc <= 21000) {
      employeeEsi = Math.round(ctc * 0.0075);
      employerEsi = Math.round(ctc * 0.0325);
    }

    const annualCtc = ctc * 12;
    let tax = 0;

    if (taxRegime === 'old') {
      const taxableIncome = Math.max(0, annualCtc - 150000 - 50000);
      if (taxableIncome <= 250000) tax = 0;
      else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
      else if (taxableIncome <= 750000) tax = 12500 + (taxableIncome - 500000) * 0.1;
      else if (taxableIncome <= 1000000) tax = 37500 + (taxableIncome - 750000) * 0.15;
      else tax = 75000 + (taxableIncome - 1000000) * 0.2;
    } else {
      const taxableIncome = annualCtc - 300000;
      if (taxableIncome <= 300000) tax = 0;
      else if (taxableIncome <= 600000) tax = (taxableIncome - 300000) * 0.05;
      else if (taxableIncome <= 900000) tax = 15000 + (taxableIncome - 600000) * 0.1;
      else if (taxableIncome <= 1200000) tax = 45000 + (taxableIncome - 900000) * 0.15;
      else tax = 90000 + (taxableIncome - 1200000) * 0.2;
    }

    const monthlyTds = Math.round(tax / 12);
    const netSalary = ctc - employeePf - employeeEsi - monthlyTds;
    const totalEmployerCost = employerPf + employerEsi;
    const totalMonthly = (ctc + totalEmployerCost) * empCount;

    return {
      gross: ctc,
      employeePf,
      employeeEsi,
      monthlyTds,
      netSalary,
      employerPf,
      employerEsi,
      totalEmployerCost,
      totalMonthly,
    };
  };

  const results = calculatePayroll();

  const inputStyle = {
    background: '#FFFFFF',
    borderColor: '#E2E8F0',
    color: '#0F172A',
    borderWidth: '1px',
    borderStyle: 'solid' as const,
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* LEFT: Input Panel */}
      <div
        className="rounded-[28px] border p-7 md:p-8"
        style={{
          background: '#FFFFFF',
          borderColor: '#E2E8F0',
          boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
        }}
      >
        <div className="mb-7 flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl"
            style={{ background: '#EAF8F0', border: '1px solid #BBF7D0' }}
          >
            <Calculator className="h-5 w-5" style={{ color: '#166534' }} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold" style={{ color: '#0F172A' }}>
              Enter Employee Details
            </h3>
            <p className="text-xs" style={{ color: '#94A3B8' }}>
              Adjust values to see real-time payroll breakdown
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold" style={{ color: '#475569' }}>
              Monthly CTC (₹)
            </label>
            <input
              type="number"
              value={ctc}
              onChange={(e) => setCtc(parseInt(e.target.value) || 0)}
              className="w-full rounded-xl px-4 py-3.5 text-lg font-bold transition-all focus:outline-none"
              style={inputStyle}
              onFocus={(e) => { e.target.style.borderColor = '#3CB371'; e.target.style.boxShadow = '0 0 0 3px rgba(60,179,113,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; }}
              placeholder="Enter monthly CTC"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold" style={{ color: '#475569' }}>
              Employee Count
            </label>
            <input
              type="number"
              value={empCount}
              onChange={(e) => setEmpCount(parseInt(e.target.value) || 1)}
              className="w-full rounded-xl px-4 py-3.5 text-lg font-bold transition-all focus:outline-none"
              style={inputStyle}
              onFocus={(e) => { e.target.style.borderColor = '#3CB371'; e.target.style.boxShadow = '0 0 0 3px rgba(60,179,113,0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; }}
              placeholder="Number of employees"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-semibold" style={{ color: '#475569' }}>
                Basic Salary %
              </label>
              <div className="relative">
                <select
                  value={basicPercent}
                  onChange={(e) => setBasicPercent(parseInt(e.target.value))}
                  className="w-full appearance-none rounded-xl px-4 py-3.5 text-sm font-bold transition-all focus:outline-none pr-10"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = '#3CB371'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#E2E8F0'; }}
                >
                  <option value="40">40%</option>
                  <option value="50">50%</option>
                  <option value="60">60%</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" style={{ color: '#94A3B8' }}>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold" style={{ color: '#475569' }}>
                Tax Regime
              </label>
              <div className="relative">
                <select
                  value={taxRegime}
                  onChange={(e) => setTaxRegime(e.target.value)}
                  className="w-full appearance-none rounded-xl px-4 py-3.5 text-sm font-bold transition-all focus:outline-none pr-10"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = '#3CB371'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#E2E8F0'; }}
                >
                  <option value="old">Old Regime</option>
                  <option value="new">New Regime</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" style={{ color: '#94A3B8' }}>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <div
              className="flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold"
              style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }}
            >
              <CheckCircle2 className="h-4 w-4" />
              Auto-calculating as you type
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Results Panel */}
      <div className="space-y-4">
        {/* Per Employee Breakdown */}
        <div
          className="rounded-[28px] border p-6"
          style={{
            background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)',
            borderColor: '#BBF7D0',
          }}
        >
          <div className="mb-5 flex items-center justify-between">
            <h4 className="text-lg font-extrabold" style={{ color: '#0F172A' }}>
              Per Employee Breakdown
            </h4>
            <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: '#D1FAE5', color: '#059669' }}>
              Monthly
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Gross Salary', value: results.gross, color: '#0F172A' },
              { label: 'PF (12%)', value: results.employeePf, color: '#2563EB' },
              { label: 'ESI (0.75%)', value: results.employeeEsi, color: '#0D9488' },
              { label: 'TDS (Est.)', value: results.monthlyTds, color: '#EA580C' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4"
                style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}
              >
                <p className="mb-1 text-xs font-semibold" style={{ color: '#94A3B8' }}>{item.label}</p>
                <p className="text-xl font-extrabold" style={{ color: item.color }}>
                  ₹{item.value.toLocaleString()}
                </p>
              </div>
            ))}
            <div
              className="col-span-2 rounded-xl p-4"
              style={{ background: '#FFFFFF', border: '2px solid #3CB371' }}
            >
              <p className="mb-1 text-xs font-semibold" style={{ color: '#94A3B8' }}>Net Take Home</p>
              <p className="text-2xl font-black" style={{ color: '#059669' }}>
                ₹{results.netSalary.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Employer Additional Cost */}
        <div
          className="rounded-[28px] border p-6"
          style={{
            background: '#FFFFFF',
            borderColor: '#E2E8F0',
          }}
        >
          <div className="mb-5 flex items-center justify-between">
            <h4 className="text-lg font-extrabold" style={{ color: '#0F172A' }}>
              Employer Additional Cost
            </h4>
            <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: '#EFF6FF', color: '#2563EB' }}>
              Per Employee
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'PF (12%)', value: results.employerPf, color: '#2563EB' },
              { label: 'ESI (3.25%)', value: results.employerEsi, color: '#0D9488' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-4"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <p className="mb-1 text-xs font-semibold" style={{ color: '#94A3B8' }}>{item.label}</p>
                <p className="text-xl font-extrabold" style={{ color: item.color }}>
                  ₹{item.value.toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border px-4 py-3" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
            <span className="text-sm font-semibold" style={{ color: '#475569' }}>Total Employer Cost</span>
            <span className="text-xl font-black" style={{ color: '#0F172A' }}>
              ₹{results.totalEmployerCost.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Total Cost Summary */}
        <div
          className="rounded-[28px] p-6 text-center"
          style={{ background: 'linear-gradient(135deg, #0E3B32 0%, #1A4F3E 100%)', border: '1px solid rgba(96,209,132,0.3)' }}
        >
          <p className="mb-1 text-sm font-semibold" style={{ color: '#CFF25E' }}>
            Total Monthly Cost for {empCount} Employees
          </p>
          <p className="mb-2 text-4xl font-black" style={{ color: '#F8FAFC' }}>
            ₹{results.totalMonthly.toLocaleString()}
          </p>
          <p className="text-sm" style={{ color: '#94A3B8' }}>
            Annual: ₹{(results.totalMonthly * 12).toLocaleString()}
          </p>

          <div className="mt-5 flex items-center justify-center gap-3 rounded-xl px-4 py-3" style={{ background: 'rgba(207,242,94,0.1)', border: '1px solid rgba(207,242,94,0.2)' }}>
            <ArrowRight className="h-4 w-4" style={{ color: '#CFF25E' }} />
            <p className="text-sm font-bold" style={{ color: '#CFF25E' }}>
              Save ₹50,000+/year on compliance alone
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="col-span-1 mt-4 text-center lg:col-span-2">
        <p className="text-xs" style={{ color: '#94A3B8' }}>
          *Calculations are estimates based on standard Indian payroll rules. Actual values may vary.
        </p>
      </div>
    </div>
  );
}
