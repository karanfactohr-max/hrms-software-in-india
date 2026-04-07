import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import PayrollCalculator from '@/components/PayrollCalculator';
import {
  ArrowRight,
  BellRing,
  Briefcase,
  Building2,
  Calculator,
  CalendarClock,
  Check,
  ChevronDown,
  CheckCircle2,
  CircleDollarSign,
  FileBarChart2,
  FileText,
  Globe2,
  Landmark,
  Languages,
  Network,
  ReceiptIndianRupee,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  User,
  Users,
  Wallet,
  Workflow,
  XCircle,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Best Payroll Software in India | Automated PF, ESI, TDS & Form 16",
  description: "Run flawless Indian payroll with zero penalties. Automate PF, ESI, Professional Tax (19 states), and TDS. Book a free demo of India's top HRMS software.",
  keywords: "payroll software india, automated payroll, statutory compliance software, PF ESI calculation, HRMS india, TDS form 16 automation",
  openGraph: {
    title: "Best Payroll Software in India | Zero Penalties",
    description: "Automate your entire payroll and statutory compliance (PF, ESI, PT, TDS) in minutes.",
    url: 'https://hrmssoftwareinindia.com/payroll-software',
    siteName: 'HRMS Software in India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PremiumPayrollPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen font-sans overflow-hidden">
      
      {/* 0. HERO SECTION (LOCKED) */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 p-1 pr-5 rounded-full mb-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase" style={{ backgroundColor: '#166534', color: '#FFFFFF' }}>
              <Zap className="w-3.5 h-3.5 fill-current" />
              FY 2026 Ready
            </div>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#0F172A' }}>
              Next-Gen Payroll Engine
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 800,
            color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2.5px",
            marginBottom: "20px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto",
          }}>
            {"Run Flawless Indian Payroll. "}<span style={{ color: "var(--rose-dark, #E11D48)" }}>Audit-Ready.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(16px, 1.8vw, 18px)", color: "#64748B",
            lineHeight: 1.7, maxWidth: "560px", marginLeft: "auto", marginRight: "auto",
            marginBottom: "32px",
          }}>
            Automate PF, ESI, PT, and TDS with a modern payroll command center. Close every salary cycle faster with built-in checks and real-time compliance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ marginBottom: "28px" }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Get Started for Free
              <span className="cta-arrow" style={{ width: 28, height: 28 }}>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              See How it Works
              <span className="cta-arrow" style={{ width: 28, height: 28 }}>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </span>
            </Link>
          </div>

          <p style={{ fontSize: "13px", color: "#94A3B8", fontWeight: 500, marginBottom: "56px" }}>{"✓ Guided setup with payroll expert onboarding"}</p>
        </div>

        {/* Dashboard Mockup - Full width below hero text */}
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6" style={{ paddingBottom: "100px", position: "relative", zIndex: 1 }}>
          <div className="dashboard-3d" style={{ borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
            <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #E8E8EF", overflow: "hidden", boxShadow: "0 32px 80px rgba(26,26,46,0.08), 0 1px 3px rgba(26,26,46,0.04)" }}>
              {/* Top bar */}
              <div className="flex items-center justify-between" style={{ padding: "12px 20px", borderBottom: "1px solid #E8E8EF", background: "#FAFAFC" }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-[6px]">
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA42" }} />
                  </div>
                  <div style={{ background: "#fff", borderRadius: "8px", padding: "5px 14px", border: "1px solid #E8E8EF", fontSize: "11px", color: "#8E8EA0", fontFamily: "monospace" }}>
                    app.hrmssuite.in/payroll
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ width: 28, height: 28, borderRadius: "8px", background: "#3CB371", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff" }}>HR</div>
                </div>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col justify-between" style={{ width: "190px", padding: "16px 12px", borderRight: "1px solid #E8E8EF", background: "#FAFAFC", flexShrink: 0 }}>
                  <div className="space-y-[2px]">
                    {[
                      { label: "Dashboard", active: false },
                      { label: "Payroll Run", active: true },
                      { label: "Salary Structure", active: false },
                      { label: "Compliance", active: false },
                      { label: "TDS / Form 16", active: false },
                      { label: "Reimbursement", active: false },
                      { label: "Reports", active: false },
                      { label: "Settings", active: false },
                    ].map((item) => (
                      <div key={item.label} style={{
                        padding: "9px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: item.active ? 600 : 400,
                        color: item.active ? "#3CB371" : "#5A5A7A",
                        background: item.active ? "#E0F2FE" : "transparent",
                        display: "flex", alignItems: "center", gap: "8px",
                      }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: item.active ? "#3CB371" : "transparent" }} />
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "12px", borderRadius: "10px", background: "linear-gradient(135deg, #3CB371, #115E59)", color: "#fff" }}>
                    <p style={{ fontWeight: 600, fontSize: "12px", marginBottom: 2 }}>Upgrade Plan</p>
                    <p style={{ fontSize: "10px", opacity: 0.8, lineHeight: 1.4 }}>Get AI-powered payroll insights</p>
                  </div>
                </div>

                {/* Main Content */}
                <div style={{ flex: 1, padding: "20px", minWidth: 0, background: "#fff" }}>
                  {/* Welcome bar */}
                  <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A2E" }}>Payroll — March 2026</p>
                      <p style={{ fontSize: "12px", color: "#8E8EA0" }}>{"Cycle closes in 2 days · 1,247 employees"}</p>
                    </div>
                    <div style={{ fontSize: "10px", fontWeight: 600, padding: "4px 12px", borderRadius: "9999px", color: "#D97706", background: "#FEF3C7" }}>
                      In Progress
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ marginBottom: "20px" }}>
                    {[
                      { label: "Net Payable", value: "₹1.82 Cr", change: "Verified", color: "#3CB371", bg: "#D1FAE5" },
                      { label: "Gross Salary", value: "₹2.41 Cr", change: "All heads ok", color: "#059669", bg: "#D1FAE5" },
                      { label: "Total TDS", value: "₹18.7 L", change: "24Q ready", color: "#0EA5E9", bg: "#E0F2FE" },
                      { label: "PF + ESI", value: "₹9.2 L", change: "ECR filed", color: "#059669", bg: "#D1FAE5" },
                    ].map((stat) => (
                      <div key={stat.label} style={{
                        background: "#fff", borderRadius: "12px", padding: "16px",
                        border: "1px solid #E8E8EF", borderLeft: `3px solid ${stat.color}`,
                      }}>
                        <span style={{ fontSize: "11px", color: "#8E8EA0", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>{stat.label}</span>
                        <p style={{ fontSize: "26px", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.5px", lineHeight: 1, margin: "6px 0 4px" }}>{stat.value}</p>
                        <span style={{ fontSize: "11px", color: stat.color, fontWeight: 500 }}>{stat.change}</span>
                      </div>
                    ))}
                  </div>

                  {/* Two columns: Payroll Steps + Salary Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {/* Payroll Run Steps — 3/5 */}
                    <div className="md:col-span-3" style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                      <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                        <div className="flex items-center gap-2">
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3CB371" }} />
                          <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E" }}>Payroll Processing Steps</p>
                        </div>
                        <span style={{ fontSize: "11px", color: "#3CB371", fontWeight: 600 }}>4/6 Done</span>
                      </div>
                      <div className="space-y-[6px]">
                        {[
                          { task: "Attendance Lock", status: "Done", sColor: "#059669", sBg: "#D1FAE5", progress: 100 },
                          { task: "Salary Calculation", status: "Done", sColor: "#059669", sBg: "#D1FAE5", progress: 100 },
                          { task: "TDS Deduction", status: "Done", sColor: "#059669", sBg: "#D1FAE5", progress: 100 },
                          { task: "PF/ESI Contribution", status: "Done", sColor: "#059669", sBg: "#D1FAE5", progress: 100 },
                          { task: "Maker-Checker Review", status: "In Review", sColor: "#D97706", sBg: "#FEF3C7", progress: 60 },
                          { task: "Bank Disbursement", status: "Pending", sColor: "#94A3B8", sBg: "#F1F5F9", progress: 0 },
                        ].map((item) => (
                          <div key={item.task} className="flex items-center gap-3" style={{ padding: "10px 12px", borderRadius: "8px", background: "#FAFAFC", border: "1px solid #F0F0F5" }}>
                            <div style={{ width: 30, height: 30, borderRadius: "8px", background: item.sBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "11px", fontWeight: 700, color: item.sColor }}>
                              {item.progress === 100 ? "✓" : "○"}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between" style={{ marginBottom: "4px" }}>
                                <p style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 600 }}>{item.task}</p>
                                <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 10px", borderRadius: "9999px", color: item.sColor, background: item.sBg, flexShrink: 0, marginLeft: 8 }}>
                                  {item.status}
                                </span>
                              </div>
                              <div style={{ width: "100%", height: 4, borderRadius: 2, background: "#E8E8EF" }}>
                                <div style={{ width: `${item.progress}%`, height: "100%", borderRadius: 2, background: item.sColor }} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right column — 2/5 */}
                    <div className="md:col-span-2 space-y-3">
                      {/* Salary Breakdown */}
                      <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "12px" }}>Salary Breakdown</p>
                        <div className="space-y-[8px]">
                          {[
                            { label: "Basic + DA", value: "₹96.4 L", pct: 40, color: "#3CB371" },
                            { label: "HRA", value: "₹48.2 L", pct: 20, color: "#0EA5E9" },
                            { label: "Special Allow.", value: "₹60.3 L", pct: 25, color: "#8B5CF6" },
                            { label: "Deductions", value: "₹27.9 L", pct: 15, color: "#D97706" },
                          ].map((item) => (
                            <div key={item.label}>
                              <div className="flex items-center justify-between" style={{ marginBottom: "4px" }}>
                                <span style={{ fontSize: "12px", color: "#5A5A7A", fontWeight: 500 }}>{item.label}</span>
                                <span style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 700 }}>{item.value}</span>
                              </div>
                              <div style={{ width: "100%", height: 5, borderRadius: 3, background: "#E8E8EF" }}>
                                <div style={{ width: `${item.pct}%`, height: "100%", borderRadius: 3, background: item.color }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>Recent Activity</p>
                        <div className="space-y-[8px]">
                          {[
                            { action: "ECR file uploaded", time: "2 min ago", initials: "PF", bg: "#D1FAE5", color: "#059669" },
                            { action: "TDS 24Q generated", time: "18 min ago", initials: "TD", bg: "#E0F2FE", color: "#0EA5E9" },
                            { action: "Salary revised (3 emp)", time: "1 hr ago", initials: "SR", bg: "#FEF3C7", color: "#D97706" },
                          ].map((item) => (
                            <div key={item.action} className="flex items-center justify-between" style={{ padding: "6px 0" }}>
                              <div className="flex items-center gap-[10px]">
                                <span style={{ width: 30, height: 30, borderRadius: "8px", background: item.bg, color: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700 }}>
                                  {item.initials}
                                </span>
                                <span style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 500 }}>{item.action}</span>
                              </div>
                              <span style={{ fontSize: "10px", color: "#8E8EA0" }}>{item.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE COST OF MANUAL PAYROLL --- */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Header */}
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <ShieldAlert className="w-3.5 h-3.5" /> The Hidden Cost
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              What manual payroll actually costs you
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              Penalties, wasted hours, and compliance gaps add up fast. Here&apos;s what companies lose every month.
            </p>
          </div>

          {/* Top stat row — 4 big numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: '40px' }}>
            {[
              { stat: '3–5 days', label: 'Lost per payroll cycle', sub: 'on manual reconciliation', color: '#DC2626' },
              { stat: '₹500', label: 'Per employee penalty', sub: 'for late PF deposits', color: '#D97706' },
              { stat: '40+ hrs', label: 'HR time wasted monthly', sub: 'on payslip & tax queries', color: '#9333EA' },
              { stat: '12%', label: 'Average error rate', sub: 'in manual salary calculations', color: '#0EA5E9' },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  padding: '28px 24px',
                  borderRadius: '16px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '32px', fontWeight: 800, color: item.color, lineHeight: 1, letterSpacing: '-0.02em' }}>{item.stat}</p>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginTop: '8px' }}>{item.label}</p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Three detailed problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Compliance Penalties',
                items: ['TDS late deposit: 1.5% interest/month', 'PF delay: ₹500/employee + damages', 'PT default: Business license at risk'],
                icon: <ShieldAlert className="w-5 h-5" />,
                accent: '#DC2626',
                accentBg: '#FEF2F2',
              },
              {
                title: 'Attendance & Salary Errors',
                items: ['Biometric-to-Excel mismatch every month', 'Incorrect LOP and OT calculations', 'Arrears processed manually with mistakes'],
                icon: <CalendarClock className="w-5 h-5" />,
                accent: '#D97706',
                accentBg: '#FFFBEB',
              },
              {
                title: 'Employee Frustration',
                items: ['40+ hours/month on payslip queries', 'Tax declaration chasing via email', 'Reimbursement status unknown for weeks'],
                icon: <Users className="w-5 h-5" />,
                accent: '#9333EA',
                accentBg: '#FAF5FF',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  padding: '28px',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderTop: `3px solid ${card.accent}`,
                }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: card.accentBg,
                      color: card.accent,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A' }}>{card.title}</h3>
                </div>
                <div className="space-y-3">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 shrink-0" style={{ color: card.accent, marginTop: '2px', opacity: 0.7 }} />
                      <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA line */}
          <div className="text-center" style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '15px', color: '#64748B' }}>
              Automate all of this in under 10 minutes.{' '}
              <Link href="/demo" style={{ color: '#3CB371', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                See how →
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* --- END SECTION 2 --- */}

      {/* --- PAYROLL CALCULATOR --- */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          backgroundColor: '#F8FAFC',
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(15,23,42,0.06) 0px, rgba(15,23,42,0.06) 1px, transparent 1px, transparent 84px)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[100px]" style={{ background: 'rgba(96,209,132,0.08)' }} />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-[100px]" style={{ background: 'rgba(187,247,208,0.1)' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <Calculator className="w-3.5 h-3.5" /> Free Payroll Calculator
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              Calculate Your Payroll Costs Instantly
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              See exactly how much you save with automated payroll. No hidden fees, no surprises.
            </p>
          </div>

          <PayrollCalculator />
        </div>
      </section>
      {/* --- END PAYROLL CALCULATOR --- */}

      {/* --- SECTION 3: INDIAN STATUTORY COMPLIANCE ENGINE --- */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> India-Ready Compliance
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              Every Indian statutory requirement. One engine.
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              PF, ESI, PT, TDS, LWF — all codified into a single compliance engine that updates automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "TDS & Form 16",
                desc: "Auto TDS calculation, Form 16 generation via TRACES, and 24Q quarterly filing.",
                icon: <FileBarChart2 className="w-5 h-5" />,
                iconBg: '#EFF6FF', iconColor: '#2563EB',
              },
              {
                title: "EPF (Provident Fund)",
                desc: "12% employee + 12% employer contributions. Auto-ECR generation and PF transfer.",
                icon: <Calculator className="w-5 h-5" />,
                iconBg: '#EAF8F0', iconColor: '#059669',
              },
              {
                title: "ESIC (State Insurance)",
                desc: "0.75% + 3.25% auto-split. Half-yearly returns and medical benefit compliance.",
                icon: <ShieldCheck className="w-5 h-5" />,
                iconBg: '#F0FDFA', iconColor: '#0D9488',
              },
              {
                title: "Professional Tax (PT)",
                desc: "19+ state slab rules pre-loaded. Auto-calculated based on employee work location.",
                icon: <Globe2 className="w-5 h-5" />,
                iconBg: '#FFF7ED', iconColor: '#EA580C',
              },
              {
                title: "New vs Old Tax Regime",
                desc: "Employee self-switch between regimes. System auto-optimizes and suggests best choice.",
                icon: <ReceiptIndianRupee className="w-5 h-5" />,
                iconBg: '#FAF5FF', iconColor: '#9333EA',
              },
              {
                title: "LWF (Labor Welfare)",
                desc: "State-specific LWF rules with auto-deduction and employer contribution filing.",
                icon: <Briefcase className="w-5 h-5" />,
                iconBg: '#FDF2F8', iconColor: '#DB2777',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="compliance-card"
                style={{
                  padding: '28px',
                  borderRadius: '16px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="flex items-center gap-3" style={{ marginBottom: '14px' }}>
                  <div
                    style={{
                      width: '42px', height: '42px', borderRadius: '12px',
                      background: item.iconBg, color: item.iconColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- END SECTION 3 --- */}

      {/* --- SECTION 4: HOW IT WORKS — PREMIUM NUMBERED STEPS --- */}
      <section className="py-24" style={{ background: '#F0FDF4' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#FFFFFF', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <Workflow className="w-3.5 h-3.5" /> How It Works
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              From attendance lock to salary release
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              Four precise checkpoints. Fewer handoffs. Better month-end confidence.
            </p>
          </div>

          {/* Steps — clean numbered layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: '1-Click Disbursal',
                desc: 'Direct bank API payouts to HDFC, ICICI, SBI, Axis, Kotak via NEFT/RTGS.',
                icon: <Landmark className="w-6 h-6" />,
              },
              {
                step: '02',
                title: 'Attendance Sync',
                desc: 'Real-time LOP from biometric or web-clock. Auto loss-of-pay calculation.',
                icon: <CalendarClock className="w-6 h-6" />,
              },
              {
                step: '03',
                title: 'Full & Final (FnF)',
                desc: 'Auto exit process — gratuity, encashments, recoveries, notice pay.',
                icon: <Briefcase className="w-6 h-6" />,
              },
              {
                step: '04',
                title: 'Employee Self-Service',
                desc: 'Tax declarations, payslip downloads, reimbursements — all on mobile.',
                icon: <Smartphone className="w-6 h-6" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="compliance-card"
                style={{
                  padding: '32px 28px',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                {/* Large faded step number */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  fontSize: '64px',
                  fontWeight: 900,
                  color: '#F0FDF4',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  letterSpacing: '-0.04em',
                }}>
                  {item.step}
                </div>

                {/* Icon */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: '#0E3B32',
                  color: '#CFF25E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  boxShadow: '0 8px 20px rgba(14,59,50,0.15)',
                }}>
                  {item.icon}
                </div>

                {/* Content */}
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '10px', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65 }}>
                  {item.desc}
                </p>

                {/* Step indicator line */}
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '3px', borderRadius: '2px', background: '#3CB371' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#3CB371', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Step {item.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- END SECTION 4 --- */}

      {/* --- SECTION 5: INTEGRATION ECOSYSTEM --- */}
      <section className="py-24 text-white" style={{ background: '#102D23' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(247,246,244,0.12)', border: '1px solid rgba(247,246,244,0.2)', color: '#E6EDF3' }}>
              <Network className="w-4 h-4" /> Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#F8FAFC' }}>
              Plays Nice with Your Tech Stack
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B9C7D6' }}>
              Seamless connections with the tools Indian businesses already use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Tally", category: "Accounting", logo: "/integration/int-tally.webp" },
              { name: "QuickBooks", category: "Accounting", logo: "/integration/int-quickbooks.webp" },
              { name: "Xero", category: "Accounting", logo: "/integration/int-xero.webp" },
              { name: "Google Workspace", category: "Workspace", logo: "/integration/int-gworkspace.webp" },
              { name: "Microsoft Teams", category: "Collaboration", logo: "/integration/int-msteams.webp" },
              { name: "Zoom", category: "Collaboration", logo: "/integration/int-zoom.webp" },
              { name: "Google Meet", category: "Collaboration", logo: "/integration/int-gmeet.webp" },
              { name: "Google Calendar", category: "Scheduling", logo: "/integration/int-gcalendar.webp" },
              { name: "Microsoft", category: "Enterprise", logo: "/integration/int-microsoft.webp" },
              { name: "Oracle", category: "Enterprise", logo: "/integration/int-oracle.webp" },
              { name: "SAP", category: "Enterprise", logo: "/integration/int-sap.webp" },
              { name: "SuccessFactors", category: "HCM", logo: "/integration/int-successfactors.webp" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
                style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.34) 0%, rgba(15,23,42,0.56) 100%)', border: '1px solid rgba(148,163,184,0.4)' }}
              >
                <div
                  className="mx-auto mb-4 flex h-20 w-full items-center justify-center rounded-xl px-4"
                  style={{ background: '#FFFFFF', border: '1px solid #D1FAE5', boxShadow: '0 10px 24px rgba(15,23,42,0.14)' }}
                >
                  <Image
                    src={item.logo}
                    alt={`${item.name} integration logo`}
                    width={130}
                    height={36}
                    style={{ width: 'auto', height: '34px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h3 className="font-bold" style={{ color: '#F8FAFC' }}>{item.name}</h3>
                <p className="text-xs mt-1" style={{ color: '#C8D4E0' }}>{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- END SECTION 5 --- */}

      {/* --- SECTION 6: TRUST SIGNALS & SOCIAL PROOF --- */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #DCFCE7 50%, #F0FDF4 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Trusted by Indian Businesses
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em' }}>
              De-Risk Your Payroll Decision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { metric: "₹500+ Crores", label: "Salaries Processed", desc: "Processed annually for clients across India" },
              { metric: "2,500+", label: "Indian Businesses", desc: "From startups to enterprise companies" },
              { metric: "99.9%", label: "Compliance Accuracy", desc: "Zero-penalty guarantee on statutory filings" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center', padding: '32px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                <p style={{ fontSize: '36px', fontWeight: 800, color: '#0E3B32', marginBottom: '8px' }}>{item.metric}</p>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>{item.label}</p>
                <p style={{ fontSize: '13px', color: '#64748B' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { name: "ISO 27001", desc: "Information Security" },
              { name: "256-bit Encryption", desc: "Data Protection" },
              { name: "GDPR Compliant", desc: "Data Privacy" },
              { name: "SOC 2 Type II", desc: "Security Standards" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-3" style={{ padding: '10px 18px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                <ShieldCheck className="w-5 h-5" style={{ color: '#3CB371' }} />
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>{item.name}</p>
                  <p style={{ fontSize: '11px', color: '#94A3B8' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "We finally stopped depending on manual spreadsheets for PT and TDS checks. The payroll cycle feels far more controlled now.",
                name: "Sanjay Patel",
                role: "Finance Controller, Logistics Firm",
              },
              {
                quote: "Employees download payslips and tax summaries on their own, which cut a big chunk of repetitive payroll tickets for our team.",
                name: "Meera Iyer",
                role: "People Ops, SaaS Company",
              },
            ].map((item) => (
              <div key={item.name} style={{ padding: '28px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                <div className="flex gap-1" style={{ marginBottom: '14px' }}>
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4" style={{ fill: '#FACC15', color: '#FACC15' }} />
                  ))}
                </div>
                <p style={{ fontSize: '15px', color: '#334155', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>{item.name}</p>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- END SECTION 6 --- */}

      {/* --- SECTION 7: COMPARISON — PREMIUM CARD-BASED --- */}
      <section className="py-24" style={{ background: '#E3FE7A' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <CheckCircle2 className="w-3.5 h-3.5" /> Compare & Choose
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              See the difference at a glance
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              How our payroll engine compares to spreadsheets and legacy tools.
            </p>
          </div>

          {/* 3-Column Card Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 1: Manual/Excel — Clean white */}
            <div style={{
              padding: '32px 28px',
              borderRadius: '24px',
              background: '#FFFFFF',
              border: 'none',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
            }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Manual / Excel</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#DC2626', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#DC2626', fontWeight: 700 }}>12% error rate · No compliance trail</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  'TDS & Form 16',
                  'PF/ESI Auto-Calc',
                  'Multi-State PT',
                  'Bank Integration',
                  'Real-time Attendance',
                  'ESS & Mobile App',
                  'Maker-Checker',
                  'Audit Trail',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <XCircle className="w-4 h-4 shrink-0" style={{ color: '#E2E8F0' }} />
                    <span style={{ fontSize: '14px', color: '#94A3B8' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: HRMS Software — HERO card (dark, 3D lift) */}
            <div style={{
              padding: '32px 28px',
              borderRadius: '24px',
              background: '#0E3B32',
              border: '2px solid #3CB371',
              position: 'relative',
              boxShadow: '0 32px 70px rgba(14,59,50,0.35), 0 12px 24px rgba(0,0,0,0.1)',
              transform: 'scale(1.05) translateY(-8px)',
            }}>
              {/* Popular badge */}
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '6px 20px',
                borderRadius: '999px',
                background: '#FFFFFF',
                color: '#0E3B32',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
                Most Popular
              </div>

              <div style={{ marginBottom: '24px', marginTop: '8px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#86EFAC', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>HRMS Software India</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(207,242,94,0.2)', border: '1px solid rgba(207,242,94,0.4)', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CFF25E', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#CFF25E', fontWeight: 700 }}>Live in 2–5 days · Free 14-day trial</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.12)', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  'TDS & Form 16',
                  'PF/ESI Auto-Calc',
                  'Multi-State PT (19)',
                  'Bank Integration',
                  'Real-time Attendance',
                  'ESS & Mobile App',
                  'Maker-Checker',
                  'Full Audit Trail',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#CFF25E' }} />
                    <span style={{ fontSize: '14px', color: '#E2E8F0', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link href="/demo" className="cta-base cta-secondary cta-md" style={{ width: '100%', justifyContent: 'center' }}>
                  Start Free Trial
                  <span className="cta-arrow" style={{ width: 24, height: 24 }}><ArrowRight style={{ width: 12, height: 12 }} /></span>
                </Link>
              </div>
            </div>

            {/* Card 3: Legacy Software — Clean white */}
            <div style={{
              padding: '32px 28px',
              borderRadius: '24px',
              background: '#FFFFFF',
              border: 'none',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
            }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Legacy Software</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EA580C', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#EA580C', fontWeight: 700 }}>3–6 month setup · Rigid payroll rules</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#E2E8F0', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  { text: 'TDS & Form 16', status: 'Partial' },
                  { text: 'PF/ESI Auto-Calc', status: 'Manual' },
                  { text: 'Multi-State PT', status: 'Limited' },
                  { text: 'Bank Integration', status: 'Add-on' },
                  { text: 'Real-time Attendance', status: null },
                  { text: 'ESS & Mobile App', status: 'Basic' },
                  { text: 'Maker-Checker', status: null },
                  { text: 'Audit Trail', status: 'Limited' },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    {f.status ? (
                      <>
                        <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D97706' }} />
                        </div>
                        <span style={{ fontSize: '14px', color: '#64748B' }}>{f.text}</span>
                        <span style={{ fontSize: '11px', color: '#D97706', fontWeight: 600, marginLeft: 'auto' }}>{f.status}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 shrink-0" style={{ color: '#CBD5E1' }} />
                        <span style={{ fontSize: '14px', color: '#94A3B8' }}>{f.text}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="text-center" style={{ marginTop: '32px', fontSize: '13px', color: '#3D5A1E' }}>
            Based on industry averages for 100+ employee companies. Pricing may vary.
          </p>
        </div>
      </section>
      {/* --- END SECTION 7 --- */}

      {/* --- ESS SECTION — DARK --- */}
      <section style={{ padding: "88px 0", background: "#102D23", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, borderRadius: "50%", background: "rgba(96,209,132,0.08)" }} />
        <div style={{ position: "absolute", left: -120, bottom: -120, width: 280, height: 280, borderRadius: "50%", background: "rgba(207,242,94,0.06)" }} />
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", border: "1px solid rgba(134,239,172,0.22)", color: "#86EFAC", fontSize: "12px", fontWeight: 700, marginBottom: "16px" }}>Employee Self-Service</span>
              <h2 style={{ fontSize: "clamp(30px, 3.9vw, 46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "18px", color: "#F8FAFC", letterSpacing: "-0.03em", maxWidth: "620px" }}>
                Payroll help in every employee&apos;s pocket.
                <span style={{ display: "block", color: "#CFF25E", marginTop: "8px" }}>
                  Fewer HR tickets. Faster answers. Better payroll visibility.
                </span>
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "26px", maxWidth: "620px" }}>
                Employees can open payslips, review deductions, switch tax regimes, upload proofs, and track reimbursement status from one clean payroll workspace across mobile and desktop.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: "24px", maxWidth: "640px" }}>
                {["Payslip downloads", "Tax regime switching", "Proof uploads", "Payroll history"].map((item) => (
                  <span
                    key={item}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#E2E8F0",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4" style={{ color: "#CFF25E" }} />
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3" style={{ marginBottom: "28px", maxWidth: "640px" }}>
                {["PDF payslip download", "Proof upload and verification", "Reimbursement claims", "Real-time TDS tracker"].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#CFF25E" }} />
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.76)", lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/demo" className="cta-base cta-secondary cta-md">
                Try ESS Portal <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
              </Link>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: "-20px -24px auto auto", width: 150, height: 150, borderRadius: "50%", background: "radial-gradient(circle, rgba(207,242,94,0.24) 0%, rgba(207,242,94,0) 70%)" }} />
                <div style={{ width: "300px", background: "#102D23", borderRadius: "36px", padding: "10px", boxShadow: "0 36px 90px rgba(16,45,35,0.45)" }}>
                  <div style={{ background: "#F8FAFC", borderRadius: "26px", overflow: "hidden", minHeight: "420px" }}>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                      <div style={{ width: "88px", height: "18px", borderRadius: "999px", background: "#102D23" }} />
                    </div>
                    <div style={{ padding: "14px 16px 18px" }}>
                      <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                        <div>
                          <p style={{ fontSize: "10px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>Payroll Wallet</p>
                          <p style={{ fontSize: "20px", color: "#102D23", fontWeight: 800, marginTop: "2px" }}>March 2026</p>
                        </div>
                        <div style={{ width: 40, height: 40, borderRadius: "14px", background: "#EAF8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#102D23" }}>
                          <ReceiptIndianRupee className="w-5 h-5" />
                        </div>
                      </div>

                      <div style={{ padding: "16px", borderRadius: "22px", background: "linear-gradient(135deg, #102D23 0%, #1A3F32 100%)", border: "1px solid rgba(96,209,132,0.3)", marginBottom: "14px" }}>
                        <p style={{ fontSize: "10px", color: "#BFEA4D", marginBottom: "4px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Salary credited</p>
                        <p style={{ fontSize: "34px", fontWeight: 800, color: "#F8FAFC", lineHeight: 1 }}>₹84,500</p>
                        <div className="flex items-center justify-between" style={{ marginTop: "10px" }}>
                          <p style={{ fontSize: "11px", color: "#60D184", fontWeight: 700 }}>HDFC ending 4091</p>
                          <span style={{ fontSize: "10px", padding: "4px 10px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", color: "#60D184", fontWeight: 700, border: "1px solid rgba(96,209,132,0.25)" }}>Paid</span>
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Tax regime</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>Old</p>
                          <p style={{ fontSize: "10px", color: "#64748B", marginTop: "2px" }}>active this month</p>
                        </div>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Proof status</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>4/4</p>
                          <p style={{ fontSize: "10px", color: "#60D184", marginTop: "2px", fontWeight: 700 }}>verified</p>
                        </div>
                      </div>

                      <div style={{ padding: "14px", borderRadius: "18px", border: "1px solid #DDE7DE", background: "#FFFFFF", boxShadow: "0 10px 24px rgba(15,23,42,0.04)" }}>
                        <div className="flex items-center justify-between" style={{ marginBottom: "10px" }}>
                          <p style={{ fontSize: "12px", fontWeight: 800, color: "#102D23" }}>Payslip breakdown</p>
                          <span style={{ fontSize: "10px", fontWeight: 700, color: "#64748B" }}>PDF ready</span>
                        </div>
                        <div className="space-y-3">
                          {[
                            { label: "Basic + DA", val: "₹50,000" },
                            { label: "HRA", val: "₹25,000" },
                            { label: "Special Allowance", val: "₹14,500" },
                            { label: "PF Deduction", val: "- ₹1,800", color: "#DC2626" },
                            { label: "TDS", val: "- ₹3,200", color: "#DC2626" },
                          ].map((r) => (
                            <div key={r.label} className="flex justify-between" style={{ fontSize: "12px" }}>
                              <span style={{ color: "#64748B" }}>{r.label}</span>
                              <span style={{ fontWeight: 800, color: r.color || "#102D23" }}>{r.val}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          style={{
                            width: "100%",
                            marginTop: "14px",
                            padding: "12px",
                            borderRadius: "14px",
                            background: "linear-gradient(135deg, #102D23 0%, #1A3F32 100%)",
                            color: "#F8FAFC",
                            fontSize: "12px",
                            fontWeight: 800,
                            border: "none",
                            boxShadow: "0 12px 24px rgba(16,45,35,0.22)",
                            cursor: "pointer",
                            letterSpacing: "0.02em",
                          }}
                        >
                          Download payslip
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AUTOMATION ADVANTAGE — LIGHT REDESIGN */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: '#FAF9F5' }}
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,209,132,0.06) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '-100px', left: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(187,247,208,0.08) 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-[720px] mx-auto" style={{ marginBottom: '56px' }}>
            <span
              className="inline-flex items-center gap-2 mb-6"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              <Zap className="w-3.5 h-3.5" /> The Smart Advantage
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '18px' }}>
              What changes when payroll runs{' '}
              <span style={{ color: '#3CB371' }}>itself</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#64748B', lineHeight: 1.75, maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
              Five areas where automation replaces hours of manual work with single-click precision.
            </p>
          </div>

          {/* Main 2-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: Compact advantage cards */}
            <div className="flex flex-col gap-4">
              {[
                { num: '01', title: 'Payroll Processing', before: '3-5 days of manual reconciliation', after: 'Under 10 minutes, fully audited', icon: <Zap className="w-5 h-5" /> },
                { num: '02', title: 'Statutory Updates', before: 'Track changes across PF/ESI/PT portals', after: 'Auto-applied, zero manual intervention', icon: <ShieldCheck className="w-5 h-5" /> },
                { num: '03', title: 'Tax Declarations', before: 'Chase emails, verify physical proofs', after: 'Employee self-service, digitally verified', icon: <FileText className="w-5 h-5" /> },
                { num: '04', title: 'Multi-State PT & LWF', before: 'Maintain 19 state matrices manually', after: 'Dynamic rules engine, auto-calculated', icon: <Globe2 className="w-5 h-5" /> },
                { num: '05', title: 'Salary Disbursement', before: 'Generate bank files, manual NEFT', after: 'Direct API payouts, auto-reconciled', icon: <Landmark className="w-5 h-5" /> },
              ].map((row) => (
                <div
                  key={row.num}
                  className="compliance-card"
                  style={{
                    padding: '22px 24px',
                    borderRadius: '16px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Top row: number + title + icon */}
                  <div className="flex items-center gap-3" style={{ marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#3CB371', letterSpacing: '0.08em', minWidth: '22px' }}>{row.num}</span>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#EAF8F0', border: '1px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166534', flexShrink: 0 }}>
                      {row.icon}
                    </div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.01em' }}>{row.title}</h4>
                  </div>

                  {/* Before / After */}
                  <div style={{ paddingLeft: '62px' }}>
                    <div className="flex items-start gap-2" style={{ marginBottom: '8px' }}>
                      <XCircle className="w-4 h-4 shrink-0" style={{ color: '#EF4444', marginTop: '2px', opacity: 0.6 }} />
                      <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.5, textDecoration: 'line-through', textDecorationColor: 'rgba(239,68,68,0.3)' }}>{row.before}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#3CB371', marginTop: '2px' }} />
                      <p style={{ fontSize: '13.5px', color: '#0F172A', lineHeight: 1.5, fontWeight: 600 }}>{row.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Premium dashboard mockup — clean, single card */}
            <div className="flex justify-center lg:sticky lg:top-32">
              <div style={{ width: '100%', maxWidth: '480px' }}>
                {/* Main dashboard card */}
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1)',
                }}>
                  {/* Top bar */}
                  <div className="flex items-center justify-between" style={{ padding: '14px 20px', background: '#0E3B32', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-[5px]">
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} />
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFBD2E' }} />
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28CA42' }} />
                      </div>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginLeft: '8px' }}>payroll-engine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CFF25E' }} />
                      <span style={{ fontSize: '10px', color: '#CFF25E', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Live</span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div style={{ padding: '24px' }}>
                    {/* Status header */}
                    <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
                      <div>
                        <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>March 2026 Payroll</p>
                        <p style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>₹1.82 Cr</p>
                      </div>
                      <div style={{ padding: '6px 14px', borderRadius: '999px', background: '#D1FAE5', color: '#059669', fontSize: '11px', fontWeight: 700 }}>
                        Processed
                      </div>
                    </div>

                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-3" style={{ marginBottom: '20px' }}>
                      {[
                        { label: 'Time Taken', value: '8m 12s', color: '#059669' },
                        { label: 'Accuracy', value: '100%', color: '#0EA5E9' },
                        { label: 'Employees', value: '1,247', color: '#8B5CF6' },
                      ].map((kpi) => (
                        <div key={kpi.label} style={{ padding: '14px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                          <p style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{kpi.label}</p>
                          <p style={{ fontSize: '20px', fontWeight: 800, color: kpi.color, marginTop: '4px' }}>{kpi.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Compliance checklist */}
                    <div style={{ padding: '16px', borderRadius: '14px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Compliance Status</p>
                      <div className="space-y-2">
                        {[
                          { task: 'PF — ECR Generated', done: true },
                          { task: 'ESI — Contribution Filed', done: true },
                          { task: 'PT — 19 States Applied', done: true },
                          { task: 'TDS — 24Q Ready', done: true },
                          { task: 'Form 16 — Queued', done: true },
                        ].map((item) => (
                          <div key={item.task} className="flex items-center gap-3" style={{ padding: '8px 10px', borderRadius: '8px', background: '#FFFFFF' }}>
                            <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#059669' }} />
                            <span style={{ fontSize: '12.5px', color: '#1E293B', fontWeight: 500 }}>{item.task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="flex items-center justify-between" style={{ marginTop: '16px', padding: '12px 16px', borderRadius: '12px', background: '#0E3B32' }}>
                      <div className="flex items-center gap-2">
                        <Landmark className="w-4 h-4" style={{ color: '#CFF25E' }} />
                        <span style={{ fontSize: '12px', color: '#E2E8F0', fontWeight: 600 }}>Bank transfer ready</span>
                      </div>
                      <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(207,242,94,0.15)', color: '#CFF25E', fontWeight: 700, border: '1px solid rgba(207,242,94,0.25)' }}>1-Click Disburse</span>
                    </div>
                  </div>
                </div>

                {/* Floating stat badges */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 600 }}>
                    Zero penalties since launch
                  </div>
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#0E3B32', fontSize: '12px', fontWeight: 600 }}>
                    99.9% uptime
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center" style={{ marginTop: '56px' }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              See the Engine in Action
              <span className="cta-arrow" style={{ width: 28, height: 28 }}>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. PERSON-IMAGE CTA */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: '#FFFFFF' }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-[#60D184]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[360px] w-[360px] rounded-full bg-[#BBF7D0]/15 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span
                className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em]"
                style={{ background: '#EAF8F0', color: '#102D23', border: '1px solid #BFEA4D' }}
              >
                <User className="h-4 w-4" /> Talk to an Expert
              </span>

              <h2
                style={{ fontSize: 'clamp(32px, 3.8vw, 52px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.05, letterSpacing: '-0.04em' }}
              >
                Talk to a Payroll Expert
                <span className="block" style={{ color: '#102D23' }}>
                  Today
                </span>
              </h2>

              <p className="mt-5 max-w-[520px] text-lg leading-8" style={{ color: '#5B667A' }}>
                Get a customized walkthrough of how our engine handles your specific CTC structures,
                multi-state compliance, and bank disbursement workflows.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/demo"
                  className="cta-base cta-primary cta-lg group"
                >
                  Book a Free Demo
                  <span className="cta-arrow">
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="cta-base cta-secondary cta-lg group"
                >
                  Call Us Now
                  <span className="cta-arrow">
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </span>
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black" style={{ color: '#102D23' }}>2,500+</span>
                  <span className="text-sm" style={{ color: '#64748B' }}>businesses</span>
                </div>
                <div className="h-6 w-px" style={{ background: '#DDE7DE' }} />
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className="text-yellow-400 text-sm">★</span>
                  ))}
                  <span className="ml-1 text-sm font-bold" style={{ color: '#102D23' }}>4.9/5</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[440px]">
                <div
                  className="relative rounded-[30px] border p-8"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F6F4 100%)',
                    borderColor: '#DDE7DE',
                    boxShadow: '0 28px 70px rgba(16,45,35,0.1)',
                  }}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ background: '#EAF8F0', border: '1px solid #BFEA4D' }}
                    >
                      <User className="h-7 w-7" style={{ color: '#102D23' }} />
                    </div>
                    <div>
                      <p className="text-base font-extrabold" style={{ color: '#0F172A' }}>Payroll Consultant</p>
                      <p className="text-xs" style={{ color: '#64748B' }}>Available Mon–Sat, 9AM–7PM IST</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: <FileText className="h-5 w-5" />, text: 'Review your current payroll setup' },
                      { icon: <ShieldCheck className="h-5 w-5" />, text: 'Identify compliance gaps & risks' },
                      { icon: <ReceiptIndianRupee className="h-5 w-5" />, text: 'Show exact savings for your team' },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-start gap-3 rounded-xl border px-4 py-3.5"
                        style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}
                      >
                        <div
                          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                          style={{ background: '#EAF8F0', color: '#102D23' }}
                        >
                          {item.icon}
                        </div>
                        <p className="text-sm font-semibold leading-relaxed" style={{ color: '#1E293B' }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-6 rounded-2xl border px-5 py-3 shadow-lg"
                  style={{ background: '#FFFFFF', borderColor: '#DDE7DE' }}
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: '#94A3B8' }}>Avg response</p>
                  <p className="mt-1 text-sm font-extrabold" style={{ color: '#102D23' }}>Under 2 hours</p>
                </div>

                <div
                  className="absolute -top-5 -right-4 rounded-2xl border px-5 py-3 shadow-lg"
                  style={{ background: '#102D23', borderColor: '#234438' }}
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: '#BFEA4D' }}>Free audit</p>
                  <p className="mt-1 text-sm font-extrabold" style={{ color: '#F8FAFC' }}>No obligation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "14px" }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "#F1F5F9", color: "#475569", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Everything You Need to Know About Payroll
            </h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Find answers to common questions about automated payroll, compliance, and getting started.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { q: "Is this suitable for small Indian businesses?", a: "Yes. Whether you have 10 employees or 10,000, the platform scales. You get enterprise compliance automation without the complexity." },
              { q: "How does mid-year tax regime switching work?", a: "Employees select Old/New regime via the portal. The system recalculates TDS liability for the remaining months automatically." },
              { q: "Are PF, ESI, and PT fully automated?", a: "Yes. The engine calculates employer/employee contributions, generates ECR files, and applies state-wise PT slabs for 19 states." },
              { q: "Do you generate Form 16 and file 24Q?", a: "Yes. Form 16 Part A is generated via TRACES and Part B includes salary computation. 24Q files are prepared automatically." },
              { q: "Can I run payroll for multiple states?", a: "Absolutely. Our engine handles different PT slabs, LWF rates, and compliance based on each employee's work location." },
              { q: "How quickly can we go live?", a: "Setup takes 2-5 days. Our team handles data migration from Excel or existing ERPs with full historical records." },
              { q: "Is salary disbursement integrated with banks?", a: "Yes. We generate NEFT/RTGS files for major banks, with direct API integration available for one-click salary push." },
              { q: "What about reimbursements under new tax regime?", a: "Reimbursements are processed in the payroll cycle via ESS portal claims, automatically adjusting tax benefits based on the selected regime." },
            ].map((faq) => (
              <details key={faq.q} className="group" style={{ borderRadius: "12px", background: "#F8FAFC", border: "1px solid #E2E8F0", overflow: "hidden", transition: "all 0.2s" }}>
                <summary className="flex items-center gap-3 cursor-pointer" style={{ padding: "16px 20px" }}>
                  <span style={{ width: 28, height: 28, borderRadius: "8px", background: "#EAF8F0", color: "#166534", border: "1px solid #BFEA4D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px", transition: "all 0.2s" }} className="group-open:bg-[#0E3B32] group-open:text-[#CFF25E] group-open:border-[#0E3B32]">
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 600, color: "#1E293B" }}>{faq.q}</span>
                </summary>
                <div style={{ padding: "0 20px 20px 68px", fontSize: "14px", color: "#64748B", lineHeight: 1.7 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "SoftwareApplication", "name": "HRMS Software in India - Payroll Module", "applicationCategory": "BusinessApplication", "operatingSystem": "Web, iOS, Android", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "5000" } },
          { "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "Is this payroll software suitable for small businesses in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Whether you have 10 employees or 10,000, the platform scales with you." } },
            { "@type": "Question", "name": "Are PF, ESI, and Professional Tax calculations automated?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The engine calculates all contributions accurately and generates ECR files for EPFO." } },
            { "@type": "Question", "name": "Do you generate Form 16?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Form 16 Part A via TRACES and Part B with complete salary computation are auto-generated." } }
          ]}
        ]
      })}} />
    </main>
  );
}




