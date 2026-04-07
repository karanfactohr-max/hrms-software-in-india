import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight, Calendar, CalendarCheck, CalendarDays, CheckCircle2,
  ChevronDown, Zap, Network, Star, ShieldCheck, Users, FileText,
  Smartphone, Building2, XCircle, Globe, TrendingUp, AlertTriangle,
  BarChart3, Workflow, Clock, Bell, Briefcase, UserCheck, Layers,
  GitBranch, RefreshCw, Timer, Calculator
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Best Leave Management Software in India | Policies, Approvals & Compliance",
  description: "Automate leave management for Indian businesses. Custom leave policies, multi-level approvals, holiday calendars, comp-off tracking, and Shops & Establishments Act compliance.",
  keywords: "leave management software india, leave policy, leave approval workflow, holiday calendar, comp-off tracking, half-day leave, work from home leave, sandwich rule, leave encashment, earned leave, casual leave, sick leave, maternity leave, paternity leave",
  openGraph: {
    title: "Best Leave Management Software in India | Zero Manual Tracking",
    description: "Custom leave policies, multi-level approvals, holiday calendars, and full Indian labour law compliance.",
    url: 'https://hrmssoftwareinindia.com/leave-management-software',
    siteName: 'HRMS Software in India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function LeaveManagementPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen font-sans overflow-hidden">

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-3 p-1 pr-5 rounded-full mb-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase" style={{ backgroundColor: '#0E3B32', color: '#FFFFFF' }}>
              <CalendarCheck className="w-3.5 h-3.5" />
              Leave Engine
            </div>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#0F172A' }}>Policy-Driven Leave Automation</span>
          </div>

          <h1 style={{ fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 800, color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2.5px", marginBottom: "20px", maxWidth: "880px", marginLeft: "auto", marginRight: "auto" }}>
            {"Leave Policies That "}
            <span style={{ color: "var(--rose-dark)" }}>Run Themselves.</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 1.8vw, 18px)", color: "#64748B", lineHeight: 1.7, maxWidth: "620px", marginLeft: "auto", marginRight: "auto", marginBottom: "32px" }}>
            Custom leave types, multi-level approvals, holiday calendars, comp-off tracking, and sandwich rules, all automated and aligned with Indian labour laws.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ marginBottom: "28px" }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Get Started for Free <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              See How it Works <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
          <p style={{ fontSize: "13px", color: "#94A3B8", fontWeight: 500, marginBottom: "56px" }}>15+ leave types | Auto-approvals | Payroll sync</p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6" style={{ paddingBottom: "88px", position: "relative", zIndex: 1 }}>
          <div
            className="dashboard-3d"
            style={{
              borderRadius: "28px",
              overflow: "hidden",
              background: "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(248,250,252,0.96) 100%)",
              border: "1px solid rgba(226,232,240,0.9)",
              boxShadow: "0 40px 100px rgba(14,59,50,0.10), 0 8px 24px rgba(15,23,42,0.05)",
            }}
          >
            <div style={{ padding: "14px 18px", borderBottom: "1px solid #E2E8F0", background: "rgba(255,255,255,0.86)", backdropFilter: "blur(10px)" }}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex gap-[6px] shrink-0">
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA42" }} />
                  </div>
                  <div style={{ background: "#FFFFFF", borderRadius: "999px", padding: "6px 14px", border: "1px solid #E2E8F0", fontSize: "11px", color: "#64748B", fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    app.hrmssuite.in/leave-control
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div style={{ padding: "6px 12px", borderRadius: "999px", background: "#EAF8F0", color: "#166534", fontSize: "11px", fontWeight: 700 }}>
                    Policy sync active
                  </div>
                  <div style={{ width: 30, height: 30, borderRadius: "10px", background: "#0E3B32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff" }}>
                    HR
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div
                className="hidden lg:flex flex-col justify-between"
                style={{
                  width: "176px",
                  padding: "18px 12px",
                  borderRight: "1px solid #E2E8F0",
                  background: "linear-gradient(180deg, #FAFAFC 0%, #F8FAFC 100%)",
                  flexShrink: 0,
                }}
              >
                <div className="space-y-[4px]">
                  {[
                    { label: "Overview", active: false },
                    { label: "Leave Calendar", active: true },
                    { label: "My Requests", active: false },
                    { label: "Team Leaves", active: false },
                    { label: "Policies", active: false },
                    { label: "Holidays", active: false },
                    { label: "Comp-Off", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        padding: "10px 12px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: item.active ? 700 : 500,
                        color: item.active ? "#0E3B32" : "#64748B",
                        background: item.active ? "linear-gradient(135deg, #EAF8F0, #F5FDF7)" : "transparent",
                        border: item.active ? "1px solid #BBF7D0" : "1px solid transparent",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.active ? "#3CB371" : "#CBD5E1" }} />
                      {item.label}
                    </div>
                  ))}
                </div>

                <div style={{ padding: "14px", borderRadius: "16px", background: "linear-gradient(135deg, #0E3B32 0%, #115E59 100%)", color: "#FFFFFF" }}>
                  <p style={{ fontWeight: 700, fontSize: "12px", marginBottom: 4 }}>Leave requests today</p>
                  <p style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1, marginBottom: 6 }}>35</p>
                  <p style={{ fontSize: "11px", opacity: 0.78, lineHeight: 1.5 }}>tracked across policies, holidays, comp-off, and payroll-linked balances</p>
                </div>
              </div>

              <div style={{ flex: 1, padding: "22px", minWidth: 0, background: "linear-gradient(180deg, #FFFFFF 0%, #FCFDFC 100%)" }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ marginBottom: "18px" }}>
                  <div>
                    <p style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A", marginBottom: 4 }}>Leave dashboard | March 2026</p>
                    <p style={{ fontSize: "12px", color: "#64748B" }}>1,247 employees | 15 leave types | 4 active locations</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "6px 12px", borderRadius: "9999px", color: "#059669", background: "#D1FAE5" }}>
                      12 approvals pending
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "6px 12px", borderRadius: "9999px", color: "#0F766E", background: "#CCFBF1" }}>
                      Payroll synced
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ marginBottom: "18px" }}>
                  {[
                    { label: "On Leave", value: "35", hint: "2.8% of team", color: "#0EA5E9", bg: "#E0F2FE" },
                    { label: "Pending", value: "12", hint: "avg 2 hour TAT", color: "#D97706", bg: "#FEF3C7" },
                    { label: "Comp-Off", value: "89", hint: "credits available", color: "#7C3AED", bg: "#F3E8FF" },
                    { label: "Utilization", value: "67%", hint: "within policy range", color: "#059669", bg: "#ECFDF5" },
                  ].map((stat) => (
                    <div key={stat.label} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "16px", border: "1px solid #E2E8F0", boxShadow: "0 8px 24px rgba(15,23,42,0.04)" }}>
                      <span style={{ display: "inline-flex", padding: "4px 10px", borderRadius: "999px", background: stat.bg, color: stat.color, fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</span>
                      <p style={{ fontSize: "28px", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.04em", lineHeight: 1, margin: "10px 0 6px" }}>{stat.value}</p>
                      <span style={{ fontSize: "11px", color: "#64748B", fontWeight: 600 }}>{stat.hint}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-4">
                  <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "18px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(15,23,42,0.05)" }}>
                    <div className="flex items-center justify-between gap-4" style={{ marginBottom: "14px" }}>
                      <div>
                        <p style={{ fontSize: "13px", fontWeight: 800, color: "#0F172A" }}>Recent leave requests</p>
                        <p style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>Approvals, auto-rules, and policy checks moving in one flow</p>
                      </div>
                      <span style={{ fontSize: "10px", fontWeight: 800, padding: "5px 10px", borderRadius: "999px", color: "#166534", background: "#EAF8F0" }}>
                        3 rules active
                      </span>
                    </div>

                    <div className="space-y-[8px]">
                      {[
                        { name: "Rahul S.", type: "Earned Leave", meta: "2 days", status: "Approved", sC: "#059669", sB: "#D1FAE5" },
                        { name: "Priya M.", type: "Sick Leave", meta: "1 day", status: "Pending", sC: "#D97706", sB: "#FEF3C7" },
                        { name: "Amit K.", type: "Comp-Off", meta: "0.5 day", status: "Approved", sC: "#059669", sB: "#D1FAE5" },
                        { name: "Sneha R.", type: "WFH", meta: "1 day", status: "Auto-Approved", sC: "#0EA5E9", sB: "#E0F2FE" },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center gap-3" style={{ padding: "11px 12px", borderRadius: "12px", background: "#F8FAFC", border: "1px solid #EEF2F7" }}>
                          <div style={{ width: 34, height: 34, borderRadius: "50%", background: item.sB, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: item.sC, fontSize: "11px", fontWeight: 800 }}>
                            {item.name.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-3" style={{ marginBottom: "2px" }}>
                              <p style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</p>
                              <span style={{ fontSize: "10px", fontWeight: 700, padding: "3px 9px", borderRadius: "9999px", color: item.sC, background: item.sB, flexShrink: 0 }}>
                                {item.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 flex-wrap">
                              <span style={{ fontSize: "10px", color: "#64748B" }}>{item.type}</span>
                              <span style={{ fontSize: "10px", color: "#64748B" }}>{item.meta}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "18px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(15,23,42,0.05)" }}>
                      <p style={{ fontSize: "13px", fontWeight: 800, color: "#0F172A", marginBottom: "12px" }}>Balance summary</p>
                      <div className="space-y-[10px]">
                        {[
                          { label: "Earned Leave", value: "8/18", pct: 44, color: "#0E3B32" },
                          { label: "Casual Leave", value: "4/7", pct: 57, color: "#60D184" },
                          { label: "Sick Leave", value: "2/6", pct: 33, color: "#D97706" },
                          { label: "Comp-Off", value: "1.5", pct: 75, color: "#0EA5E9" },
                        ].map((item) => (
                          <div key={item.label}>
                            <div className="flex items-center justify-between" style={{ marginBottom: "5px" }}>
                              <span style={{ fontSize: "12px", color: "#475569", fontWeight: 600 }}>{item.label}</span>
                              <span style={{ fontSize: "12px", color: "#0F172A", fontWeight: 800 }}>{item.value}</span>
                            </div>
                            <div style={{ width: "100%", height: 6, borderRadius: 999, background: "#E2E8F0" }}>
                              <div style={{ width: `${item.pct}%`, height: "100%", borderRadius: 999, background: item.color }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ background: "linear-gradient(135deg, #0E3B32 0%, #115E59 100%)", borderRadius: "18px", padding: "18px", color: "#FFFFFF", boxShadow: "0 18px 40px rgba(14,59,50,0.18)" }}>
                      <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                        <div>
                          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>Leave intelligence</p>
                          <p style={{ fontSize: "20px", fontWeight: 800, marginTop: "2px" }}>Policy ready</p>
                        </div>
                        <div style={{ width: 42, height: 42, borderRadius: "14px", background: "rgba(255,255,255,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Workflow className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="space-y-[9px]">
                        {[
                          "Sandwich rule auto-validated",
                          "Comp-off and holidays cross-checked",
                          "LOP impact pushed to payroll",
                        ].map((line) => (
                          <div key={line} className="flex items-center gap-2">
                            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#CFF25E", flexShrink: 0 }} />
                            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.86)" }}>{line}</span>
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

      </section>

      {/* ═══════════ 2. PAIN ═══════════ */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <AlertTriangle className="w-3.5 h-3.5" /> The Hidden Cost
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>What manual leave tracking actually costs you</h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>Email chains, Excel trackers, and policy confusion create chaos every month.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: '40px' }}>
            {[
              { stat: '3-5 days', label: 'Per leave request', sub: 'stuck in email approval chains', color: '#DC2626' },
              { stat: '40%', label: 'Policy violations', sub: 'from unclear sandwich & encashment rules', color: '#D97706' },
              { stat: '15+ hrs', label: 'Monthly HR effort', sub: 'manually tracking balances in Excel', color: '#9333EA' },
              { stat: '₹2.1L', label: 'Lost annually', sub: 'from incorrect leave encashment', color: '#0EA5E9' },
            ].map((item) => (
              <div key={item.stat} style={{ padding: '28px 24px', borderRadius: '16px', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <p style={{ fontSize: '32px', fontWeight: 800, color: item.color, lineHeight: 1, letterSpacing: '-0.02em' }}>{item.stat}</p>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginTop: '8px' }}>{item.label}</p>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Approval Bottlenecks', items: ['Leave requests stuck in manager email', 'No escalation for delayed approvals', 'Employees can\'t plan without confirmation'], icon: <Clock className="w-5 h-5" />, accent: '#DC2626', accentBg: '#FEF2F2' },
              { title: 'Policy Confusion', items: ['Sandwich rules applied inconsistently', 'Leave encashment calculated wrong', 'Different policies per location not tracked'], icon: <AlertTriangle className="w-5 h-5" />, accent: '#D97706', accentBg: '#FFFBEB' },
              { title: 'Balance Errors', items: ['Excel sheets with wrong carry-forward', 'Comp-off and half-days miscounted', 'Payroll gets incorrect leave data'], icon: <FileText className="w-5 h-5" />, accent: '#9333EA', accentBg: '#FAF5FF' },
            ].map((card) => (
              <div key={card.title} style={{ padding: '28px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderTop: `3px solid ${card.accent}` }}>
                <div className="flex items-center gap-3" style={{ marginBottom: '18px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: card.accentBg, color: card.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{card.icon}</div>
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
          <div className="text-center" style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '15px', color: '#64748B' }}>Fix all of this with policy-driven leave automation.{' '}<Link href="/demo" style={{ color: '#3CB371', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>See how →</Link></p>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. FEATURES — 6 CARDS ═══════════ */}
      <section className="py-24" style={{ backgroundColor: '#F8FAFC', backgroundImage: 'repeating-linear-gradient(90deg, rgba(15,23,42,0.06) 0px, rgba(15,23,42,0.06) 1px, transparent 1px, transparent 84px)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <Zap className="w-3.5 h-3.5" /> Core Features
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>Complete leave management for Indian businesses</h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>Every leave type, every policy, every Indian compliance rule — automated.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Custom Leave Policies", desc: "15+ leave types — EL, CL, SL, comp-off, WFH, maternity, paternity. Custom rules per location/grade.", icon: <FileText className="w-5 h-5" />, iconBg: '#EFF6FF', iconColor: '#2563EB' },
              { title: "Multi-Level Approvals", desc: "Auto-routing to reporting manager, skip-level, or HR. Escalation on delay with push notifications.", icon: <GitBranch className="w-5 h-5" />, iconBg: '#EAF8F0', iconColor: '#059669' },
              { title: "Holiday Calendar", desc: "National, state, and optional holidays. Location-specific calendars with restricted holiday management.", icon: <CalendarDays className="w-5 h-5" />, iconBg: '#F0FDFA', iconColor: '#0D9488' },
              { title: "Sandwich & Encashment Rules", desc: "Auto-apply sandwich deduction rules. Leave encashment calculated at year-end or exit with tax handling.", icon: <Calculator className="w-5 h-5" />, iconBg: '#FAF5FF', iconColor: '#9333EA' },
              { title: "Comp-Off & Half-Day", desc: "Auto-credit comp-off for weekend/holiday work. Half-day leave with first-half/second-half selection.", icon: <RefreshCw className="w-5 h-5" />, iconBg: '#FDF2F8', iconColor: '#DB2777' },
              { title: "Payroll Integration", desc: "Leave data feeds directly to payroll. LOP auto-calculated, encashment processed, balance synced.", icon: <TrendingUp className="w-5 h-5" />, iconBg: '#FFF7ED', iconColor: '#EA580C' },
            ].map((item, i) => (
              <div key={i} className="compliance-card" style={{ padding: '28px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0', transition: 'all 0.3s ease' }}>
                <div className="flex items-center gap-3" style={{ marginBottom: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: item.iconBg, color: item.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 4. HOW IT WORKS ═══════════ */}
      <section className="py-24" style={{ background: '#F0FDF4' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#FFFFFF', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <Workflow className="w-3.5 h-3.5" /> How It Works
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>From leave request to payroll in 4 steps</h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>Fully automated leave lifecycle — zero email chains.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Apply via App', desc: 'Employee selects leave type, dates, and reason. Balance auto-checked before submission.', icon: <Smartphone className="w-6 h-6" /> },
              { step: '02', title: 'Smart Routing', desc: 'Request auto-routed to manager. Escalation triggers if no action within configured time.', icon: <GitBranch className="w-6 h-6" /> },
              { step: '03', title: 'Policy Check', desc: 'Sandwich rules, overlap detection, minimum balance — all validated automatically.', icon: <ShieldCheck className="w-6 h-6" /> },
              { step: '04', title: 'Payroll Sync', desc: 'Approved leaves flow to payroll. LOP, encashment, and balance carry-forward automated.', icon: <TrendingUp className="w-6 h-6" /> },
            ].map((item, i) => (
              <div key={i} className="compliance-card" style={{ padding: '32px 28px', borderRadius: '20px', background: '#FFFFFF', border: '1px solid #E2E8F0', transition: 'all 0.3s ease', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '64px', fontWeight: 900, color: '#F0FDF4', lineHeight: 1, pointerEvents: 'none', letterSpacing: '-0.04em' }}>{item.step}</div>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#0E3B32', color: '#CFF25E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 8px 20px rgba(14,59,50,0.15)' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '10px', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65 }}>{item.desc}</p>
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '3px', borderRadius: '2px', background: '#3CB371' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#3CB371', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Step {item.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. INTEGRATIONS — DARK ═══════════ */}
      <section className="py-24 text-white" style={{ background: '#102D23' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(247,246,244,0.12)', border: '1px solid rgba(247,246,244,0.2)', color: '#E6EDF3' }}>
              <Network className="w-4 h-4" /> Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#F8FAFC' }}>Syncs with your attendance & payroll</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B9C7D6' }}>Leave data flows across your HR stack — no duplicate entry.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Attendance Module", desc: "Auto LOP from attendance" }, { name: "Payroll System", desc: "Leave encashment sync" },
              { name: "Google Calendar", desc: "Holiday sync" }, { name: "Microsoft Teams", desc: "Leave notifications" },
              { name: "Slack", desc: "Team absence alerts" }, { name: "HRMS Core", desc: "Employee master data" },
              { name: "Recruitment", desc: "Joining leave credit" }, { name: "Mobile App", desc: "Apply from anywhere" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.34) 0%, rgba(15,23,42,0.56) 100%)', border: '1px solid rgba(148,163,184,0.4)' }}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #D1FAE5' }}>
                  <CalendarCheck className="w-6 h-6" style={{ color: '#102D23' }} />
                </div>
                <h3 className="font-bold text-sm" style={{ color: '#F8FAFC' }}>{item.name}</h3>
                <p className="text-xs mt-1" style={{ color: '#C8D4E0' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. TRUST ═══════════ */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #DCFCE7 50%, #F0FDF4 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <ShieldCheck className="w-3.5 h-3.5" /> Trusted by Indian Businesses
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em' }}>De-risk your leave management decision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { metric: "2M+", label: "Leave Requests Processed", desc: "Annually across 500+ companies" },
              { metric: "< 2 hrs", label: "Avg Approval Time", desc: "Down from 3-5 days via email" },
              { metric: "100%", label: "Policy Compliance", desc: "Automated sandwich & encashment rules" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: 'center', padding: '32px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                <p style={{ fontSize: '36px', fontWeight: 800, color: '#0E3B32', marginBottom: '8px' }}>{item.metric}</p>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>{item.label}</p>
                <p style={{ fontSize: '13px', color: '#64748B' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { name: "Shops & Establishments", desc: "Act compliant" }, { name: "Maternity Benefit Act", desc: "26 weeks supported" },
              { name: "Factories Act", desc: "Leave rules built-in" }, { name: "ISO 27001", desc: "Security certified" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { quote: "Leave approval time dropped from 3 days to under 2 hours. The sandwich rule automation alone saved us 10+ hours a month.", name: "Kavita Sharma", role: "HR Manager, IT Services" },
              { quote: "Managing 15 leave types across 4 locations with different state holidays was impossible in Excel. Now it runs itself.", name: "Rajesh Pillai", role: "Head HR, Manufacturing Company" },
            ].map((item) => (
              <div key={item.name} style={{ padding: '28px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                <div className="flex gap-1" style={{ marginBottom: '14px' }}>
                  {[1,2,3,4,5].map((s) => (<Star key={s} className="w-4 h-4" style={{ fill: '#FACC15', color: '#FACC15' }} />))}
                </div>
                <p style={{ fontSize: '15px', color: '#334155', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>&ldquo;{item.quote}&rdquo;</p>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>{item.name}</p>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 7. COMPARISON — LIME ═══════════ */}
      <section className="py-24" style={{ background: '#E3FE7A' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#FFFFFF', border: '1px solid #BFEA4D', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <CheckCircle2 className="w-3.5 h-3.5" /> Compare & Choose
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>Automated leave vs the old way</h2>
            <p style={{ fontSize: '16px', color: '#3D5A1E', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>See why teams are ditching email chains and Excel trackers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div style={{ padding: '32px 28px', borderRadius: '24px', background: '#FFFFFF', boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Email + Excel</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#DC2626', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#DC2626', fontWeight: 700 }}>Sandwich violations · No audit trail</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {['Custom Leave Policies', 'Multi-Level Approvals', 'Holiday Calendar', 'Sandwich Rules', 'Comp-Off Tracking', 'Leave Encashment', 'Payroll Auto-Sync', 'Mobile App'].map((f) => (
                  <div key={f} className="flex items-center gap-3"><XCircle className="w-4 h-4 shrink-0" style={{ color: '#E2E8F0' }} /><span style={{ fontSize: '14px', color: '#94A3B8' }}>{f}</span></div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px 28px', borderRadius: '24px', background: '#0E3B32', border: '2px solid #3CB371', position: 'relative', boxShadow: '0 32px 70px rgba(14,59,50,0.35), 0 12px 24px rgba(0,0,0,0.1)', transform: 'scale(1.05) translateY(-8px)' }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '6px 20px', borderRadius: '999px', background: '#FFFFFF', color: '#0E3B32', fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Most Popular</div>
              <div style={{ marginBottom: '24px', marginTop: '8px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#86EFAC', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>HRMS Software India</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(207,242,94,0.2)', border: '1px solid rgba(207,242,94,0.4)', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CFF25E', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#CFF25E', fontWeight: 700 }}>Live in 2–5 days · Free 14-day trial</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.12)', marginBottom: '20px' }} />
              <div className="space-y-4">
                {['15+ Leave Types', 'Multi-Level Approvals', 'Location-wise Holidays', 'Auto Sandwich Rules', 'Comp-Off & Half-Day', 'Encashment + Tax', 'Payroll Auto-Sync', 'Mobile Self-Service'].map((f) => (
                  <div key={f} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#CFF25E' }} /><span style={{ fontSize: '14px', color: '#E2E8F0', fontWeight: 500 }}>{f}</span></div>
                ))}
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link href="/demo" className="cta-base cta-secondary cta-md" style={{ width: '100%', justifyContent: 'center' }}>Start Free Trial <span className="cta-arrow" style={{ width: 24, height: 24 }}><ArrowRight style={{ width: 12, height: 12 }} /></span></Link>
              </div>
            </div>
            <div style={{ padding: '32px 28px', borderRadius: '24px', background: '#FFFFFF', boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Legacy Software</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EA580C', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#EA580C', fontWeight: 700 }}>Rigid policies · No state compliance</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  { t: 'Custom Leave Policies', s: 'Limited' }, { t: 'Multi-Level Approvals', s: 'Basic' }, { t: 'Holiday Calendar', s: 'Manual' },
                  { t: 'Sandwich Rules', s: null }, { t: 'Comp-Off Tracking', s: 'Manual' }, { t: 'Leave Encashment', s: 'Partial' },
                  { t: 'Payroll Auto-Sync', s: 'Limited' }, { t: 'Mobile App', s: 'Basic' },
                ].map((f) => (
                  <div key={f.t} className="flex items-center gap-3">
                    {f.s ? (<><div style={{ width: 16, height: 16, borderRadius: '50%', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706' }} /></div><span style={{ fontSize: '14px', color: '#64748B' }}>{f.t}</span><span style={{ fontSize: '11px', color: '#D97706', fontWeight: 600, marginLeft: 'auto' }}>{f.s}</span></>) : (<><XCircle className="w-4 h-4 shrink-0" style={{ color: '#E2E8F0' }} /><span style={{ fontSize: '14px', color: '#94A3B8' }}>{f.t}</span></>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center" style={{ marginTop: '32px', fontSize: '13px', color: '#3D5A1E' }}>Based on industry averages. Pricing may vary.</p>
        </div>
      </section>

      {/* ═══════════ 8. MOBILE — DARK ═══════════ */}
      <section style={{ padding: "88px 0", background: "#102D23", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, borderRadius: "50%", background: "rgba(96,209,132,0.08)" }} />
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", border: "1px solid rgba(134,239,172,0.22)", color: "#86EFAC", fontSize: "12px", fontWeight: 700, marginBottom: "16px" }}>Employee Leave App</span>
              <h2 style={{ fontSize: "clamp(30px, 3.9vw, 46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "18px", color: "#F8FAFC", letterSpacing: "-0.03em", maxWidth: "620px" }}>
                Apply, track, and manage leaves.
                <span style={{ display: "block", color: "#CFF25E", marginTop: "8px" }}>From your phone. In seconds.</span>
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "26px", maxWidth: "620px" }}>
                Employees apply for leave, check balances, view team calendars, and get instant approval notifications — all from the mobile app.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: "24px" }}>
                {["Apply in 1 tap", "Live balance", "Team calendar", "Instant approval"].map((item) => (
                  <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderRadius: "999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "#E2E8F0", fontSize: "13px", fontWeight: 600 }}>
                    <CheckCircle2 className="w-4 h-4" style={{ color: "#CFF25E" }} />{item}
                  </span>
                ))}
              </div>
              <Link href="/demo" className="cta-base cta-secondary cta-md">Try the App <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span></Link>
            </div>
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
                          <p style={{ fontSize: "10px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>My Leaves</p>
                          <p style={{ fontSize: "20px", color: "#102D23", fontWeight: 800, marginTop: "2px" }}>FY 2026</p>
                        </div>
                        <div style={{ width: 40, height: 40, borderRadius: "14px", background: "#EAF8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#102D23" }}>
                          <CalendarCheck className="w-5 h-5" />
                        </div>
                      </div>
                      <div style={{ padding: "16px", borderRadius: "22px", background: "linear-gradient(135deg, #102D23 0%, #1A3F32 100%)", border: "1px solid rgba(96,209,132,0.3)", marginBottom: "14px" }}>
                        <p style={{ fontSize: "10px", color: "#BFEA4D", marginBottom: "4px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Available Balance</p>
                        <p style={{ fontSize: "34px", fontWeight: 800, color: "#F8FAFC", lineHeight: 1 }}>14.5</p>
                        <div className="flex items-center justify-between" style={{ marginTop: "10px" }}>
                          <p style={{ fontSize: "11px", color: "#60D184", fontWeight: 700 }}>EL: 8 · CL: 4 · SL: 2.5</p>
                          <span style={{ fontSize: "10px", padding: "4px 10px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", color: "#60D184", fontWeight: 700, border: "1px solid rgba(96,209,132,0.25)" }}>Healthy</span>
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Used this FY</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>11.5</p>
                          <p style={{ fontSize: "10px", color: "#64748B", marginTop: "2px" }}>of 26 total</p>
                        </div>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Comp-Off</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>1.5</p>
                          <p style={{ fontSize: "10px", color: "#60D184", marginTop: "2px", fontWeight: 700 }}>available</p>
                        </div>
                      </div>
                      <div style={{ padding: "14px", borderRadius: "18px", border: "1px solid #DDE7DE", background: "#FFFFFF" }}>
                        <p style={{ fontSize: "12px", fontWeight: 800, color: "#102D23", marginBottom: "10px" }}>Recent Requests</p>
                        <div className="space-y-3">
                          {[
                            { label: "Mar 15-16 · Earned Leave", status: "Approved", color: "#059669" },
                            { label: "Mar 22 · Half Day (PM)", status: "Pending", color: "#D97706" },
                            { label: "Apr 1 · Comp-Off", status: "Auto-Approved", color: "#0EA5E9" },
                          ].map((r) => (
                            <div key={r.label} className="flex items-center justify-between" style={{ fontSize: "12px" }}>
                              <span style={{ color: "#64748B" }}>{r.label}</span>
                              <span style={{ fontWeight: 700, color: r.color, fontSize: "10px" }}>{r.status}</span>
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

      {/* ═══════════ 9. BEFORE/AFTER ═══════════ */}
      <section className="relative py-28 overflow-hidden" style={{ background: '#FAF9F5' }}>
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-[720px] mx-auto" style={{ marginBottom: '56px' }}>
            <span className="inline-flex items-center gap-2 mb-6" style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Zap className="w-3.5 h-3.5" /> The Smart Advantage
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '18px' }}>
              What changes when leaves manage <span style={{ color: '#3CB371' }}>themselves</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#64748B', lineHeight: 1.75, maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>Five areas where automation replaces email chains and Excel chaos.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              {[
                { num: '01', title: 'Approval Speed', before: 'Leave requests stuck in email for days', after: 'Push notification approval in hours', icon: <Bell className="w-5 h-5" /> },
                { num: '02', title: 'Policy Compliance', before: 'Sandwich rules applied inconsistently', after: 'Auto-enforced for every leave request', icon: <ShieldCheck className="w-5 h-5" /> },
                { num: '03', title: 'Balance Accuracy', before: 'Wrong carry-forward, comp-off miscounts', after: 'Real-time balance across all leave types', icon: <BarChart3 className="w-5 h-5" /> },
                { num: '04', title: 'Encashment', before: 'Manual calculation with frequent errors', after: 'Auto-calculated with tax at year-end/exit', icon: <TrendingUp className="w-5 h-5" /> },
                { num: '05', title: 'Payroll Feed', before: 'HR manually enters LOP into payroll', after: 'Auto-sync — leave data flows to salary', icon: <RefreshCw className="w-5 h-5" /> },
              ].map((row) => (
                <div key={row.num} className="compliance-card" style={{ padding: '22px 24px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0', transition: 'all 0.3s ease' }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: '14px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#3CB371', letterSpacing: '0.08em', minWidth: '22px' }}>{row.num}</span>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#EAF8F0', border: '1px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166534', flexShrink: 0 }}>{row.icon}</div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A' }}>{row.title}</h4>
                  </div>
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
            <div className="flex justify-center lg:sticky lg:top-32">
              <div style={{ width: '100%', maxWidth: '480px' }}>
                <div style={{ background: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)' }}>
                  <div className="flex items-center justify-between" style={{ padding: '14px 20px', background: '#0E3B32' }}>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-[5px]"><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} /><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFBD2E' }} /><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28CA42' }} /></div>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginLeft: '8px' }}>leave-engine</span>
                    </div>
                    <div className="flex items-center gap-2"><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CFF25E' }} /><span style={{ fontSize: '10px', color: '#CFF25E', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Live</span></div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
                      <div>
                        <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>FY 2026 Leave Overview</p>
                        <p style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>67% Utilized</p>
                      </div>
                      <div style={{ padding: '6px 14px', borderRadius: '999px', background: '#D1FAE5', color: '#059669', fontSize: '11px', fontWeight: 700 }}>On Track</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3" style={{ marginBottom: '20px' }}>
                      {[
                        { label: 'Approved', value: '2M+', color: '#059669' },
                        { label: 'Avg Time', value: '< 2h', color: '#0EA5E9' },
                        { label: 'Violations', value: '0', color: '#DC2626' },
                      ].map((kpi) => (
                        <div key={kpi.label} style={{ padding: '14px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                          <p style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{kpi.label}</p>
                          <p style={{ fontSize: '20px', fontWeight: 800, color: kpi.color, marginTop: '4px' }}>{kpi.value}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: '16px', borderRadius: '14px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Policy Engine Status</p>
                      <div className="space-y-2">
                        {['15 Leave Types — Active', 'Sandwich Rules — Enforcing', 'Holiday Calendar — Synced', 'Encashment — Auto-Calc', 'Payroll Feed — Real-time'].map((task) => (
                          <div key={task} className="flex items-center gap-3" style={{ padding: '8px 10px', borderRadius: '8px', background: '#FFFFFF' }}>
                            <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#059669' }} />
                            <span style={{ fontSize: '12.5px', color: '#1E293B', fontWeight: 500 }}>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 600 }}>100% policy compliant</div>
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#0E3B32', fontSize: '12px', fontWeight: 600 }}>2hr avg approval</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">See the Engine in Action <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span></Link>
          </div>
        </div>
      </section>

      {/* ═══════════ 10. CTA — DARK ═══════════ */}
      <section style={{ padding: "88px 0", background: "#102D23", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-160px", left: "-130px", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,209,132,0.1), transparent)" }} />
        <div className="max-w-[900px] mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <div style={{ width: 56, height: 56, borderRadius: "16px", background: "rgba(255,255,255,0.06)", color: "#CFF25E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <CalendarCheck style={{ width: 28, height: 28 }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, letterSpacing: "-0.03em", marginBottom: "16px" }}>Ready to automate your leave management?</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", marginBottom: "32px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Join 500+ Indian businesses with instant leave approvals and zero policy violations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="cta-base cta-secondary cta-lg">Book a Free Demo <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span></Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">View Pricing <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2" style={{ marginTop: "24px" }}>
            {["No credit card required", "Setup in 1-2 days", "Free leave audit"].map((t) => (
              <span key={t} className="flex items-center gap-2" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                <CheckCircle2 style={{ width: 14, height: 14, color: "#CFF25E" }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 11. FAQ ═══════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "14px" }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "#F1F5F9", color: "#475569", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>Everything About Leave Management</h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>Common questions about leave policies, approvals, and Indian compliance.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { q: "What leave types are supported?", a: "Earned, casual, sick, comp-off, WFH, maternity (26 weeks), paternity, bereavement, and unlimited custom types. Each configurable per location and grade." },
              { q: "How do sandwich rules work?", a: "If an employee takes Friday and Monday off, the weekend between auto-counts as leave. Rules are configurable per leave type and can be turned off." },
              { q: "Can we have different policies per location?", a: "Yes. Each location gets its own holiday calendar, leave types, and accrual rules. Employees see only their applicable policies." },
              { q: "How does leave encashment work?", a: "Unused earned leave auto-encashed at year-end or exit. Amount calculated per your policy with TDS deducted and synced to payroll." },
              { q: "Is comp-off tracking automated?", a: "Yes. When an employee works on a holiday/weekend, comp-off is auto-credited. Expiry rules configurable. Half-day comp-off supported." },
              { q: "How fast are leave approvals?", a: "Average under 2 hours. Push notifications to managers, auto-escalation if delayed, and auto-approval rules for certain leave types." },
              { q: "Does it integrate with attendance?", a: "Yes. LOP auto-calculated from attendance data. Leave balance reflects in real-time across both modules." },
              { q: "How quickly can we go live?", a: "1-2 days. We configure your leave types, policies, holiday calendar, and approval workflows. Training included." },
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
          { "@type": "SoftwareApplication", "name": "HRMS Software in India - Leave Management Module", "applicationCategory": "BusinessApplication", "operatingSystem": "Web, iOS, Android", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "4200" } },
          { "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What leave types are supported?", "acceptedAnswer": { "@type": "Answer", "text": "Earned, casual, sick, comp-off, WFH, maternity, paternity, and unlimited custom types per location." } },
            { "@type": "Question", "name": "How do sandwich rules work?", "acceptedAnswer": { "@type": "Answer", "text": "Weekends/holidays between leave days auto-count as leave. Configurable per leave type." } },
            { "@type": "Question", "name": "Does it integrate with attendance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. LOP auto-calculated from attendance. Leave balance syncs in real-time." } },
            { "@type": "Question", "name": "How quickly can we go live?", "acceptedAnswer": { "@type": "Answer", "text": "1-2 days including policy setup, holiday calendar, and approval workflows." } }
          ]}
        ]
      })}} />
    </main>
  );
}
