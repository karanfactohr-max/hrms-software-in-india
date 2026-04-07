import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight, UserPlus, FileText, CheckCircle2,
  ChevronDown, Zap, Network, Star, ShieldCheck, Users,
  BarChart3, Smartphone, Building2, XCircle,
  Workflow, AlertTriangle, Clock, Laptop, Mail,
  ClipboardCheck, Upload, BookOpen, FolderCheck,
  MessageSquare, Key, MonitorSmartphone, Send,
  UserCheck, BadgeCheck, Briefcase, Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Best Employee Onboarding Software in India | Digital Offer Letters, Doc Collection & Induction",
  description: "Automate employee onboarding in India. Digital offer letters with e-sign, Aadhaar/PAN verification, pre-boarding portal, induction workflows & EPFO compliance. From offer to productive employee in 3 days.",
  keywords: "employee onboarding software India, digital offer letter, document collection, Aadhaar verification, PAN verification, pre-boarding portal, induction workflow, EPFO UAN, BGV integration, onboarding checklist, new hire onboarding, IT provisioning",
  openGraph: {
    title: "Best Employee Onboarding Software in India | Offer to Productive in 3 Days",
    description: "Automate offer letters, document collection, pre-boarding, induction workflows, and compliance verification in one platform built for Indian businesses.",
    url: 'https://hrmssoftwareinindia.com/employee-onboarding-software',
    siteName: 'HRMS Software in India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function EmployeeOnboardingPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen font-sans overflow-hidden">

      {/* ═══════════ 1. HERO (KEEP AS-IS) ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-3 p-1 pr-5 rounded-full mb-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase" style={{ backgroundColor: '#0E3B32', color: '#FFFFFF' }}>
              <UserPlus className="w-3.5 h-3.5" />
              Onboarding Engine
            </div>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#0F172A' }}>Digital Employee Onboarding</span>
          </div>

          <h1 style={{ fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 800, color: "#141413", lineHeight: 1.1, letterSpacing: "-2.5px", marginBottom: "20px", maxWidth: "880px", marginLeft: "auto", marginRight: "auto" }}>
            {"From Offer Letter to Productive Employee. "}<span style={{ color: "#0E3B32" }}>In Days, Not Weeks.</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 1.8vw, 18px)", color: "#6A7282", lineHeight: 1.7, maxWidth: "640px", marginLeft: "auto", marginRight: "auto", marginBottom: "32px" }}>
            Digital onboarding with e-sign offer letters, automated document collection, Aadhaar/PAN verification, pre-boarding portals, and structured induction workflows. Built for Indian businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ marginBottom: "28px" }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Get Started for Free
              <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              See How it Works
              <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
          <p style={{ fontSize: "13px", color: "#94A3B8", fontWeight: 500, marginBottom: "56px" }}>{"Free setup \u00B7 EPFO-ready \u00B7 3-day avg onboarding"}</p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6" style={{ paddingBottom: "100px", position: "relative", zIndex: 1 }}>
          <div className="dashboard-3d" style={{ borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
            <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #E8E8EF", overflow: "hidden", boxShadow: "0 32px 80px rgba(26,26,46,0.08), 0 1px 3px rgba(26,26,46,0.04)" }}>
              <div className="flex items-center justify-between" style={{ padding: "12px 20px", borderBottom: "1px solid #E8E8EF", background: "#FAFAFC" }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-[6px]">
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA42" }} />
                  </div>
                  <div style={{ background: "#fff", borderRadius: "8px", padding: "5px 14px", border: "1px solid #E8E8EF", fontSize: "11px", color: "#8E8EA0", fontFamily: "monospace" }}>app.hrmssuite.in/onboarding</div>
                </div>
                <div style={{ width: 28, height: 28, borderRadius: "8px", background: "#0E3B32", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff" }}>HR</div>
              </div>
              <div className="flex">
                <div className="hidden sm:flex flex-col justify-between" style={{ width: "190px", padding: "16px 12px", borderRight: "1px solid #E8E8EF", background: "#FAFAFC", flexShrink: 0 }}>
                  <div className="space-y-[2px]">
                    {["Dashboard", "Onboarding Pipeline", "Offer Letters", "Documents", "Pre-Boarding", "Induction", "IT Provisioning", "Compliance"].map((label, idx) => (
                      <div key={label} style={{ padding: "9px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: idx === 1 ? 600 : 400, color: idx === 1 ? "#0E3B32" : "#5A5A7A", background: idx === 1 ? "#EAF8F0" : "transparent", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: idx === 1 ? "#0E3B32" : "transparent" }} />{label}
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "12px", borderRadius: "10px", background: "linear-gradient(135deg, #0E3B32, #1A4D3F)", color: "#fff" }}>
                    <p style={{ fontWeight: 600, fontSize: "12px", marginBottom: 2 }}>April Batch</p>
                    <p style={{ fontSize: "10px", opacity: 0.8, lineHeight: 1.4 }}>23 new joiners this month</p>
                  </div>
                </div>
                <div style={{ flex: 1, padding: "20px", minWidth: 0, background: "#fff" }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A2E" }}>Onboarding Pipeline — April 2026</p>
                      <p style={{ fontSize: "12px", color: "#8E8EA0" }}>{"23 new joiners \u00B7 91% docs completed"}</p>
                    </div>
                    <div style={{ fontSize: "10px", fontWeight: 600, padding: "4px 12px", borderRadius: "9999px", color: "#059669", background: "#D1FAE5" }}>On Track</div>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ marginBottom: "20px" }}>
                    {[
                      { label: "New Joiners This Month", value: "23", change: "+8 vs last month", color: "#0E3B32", bg: "#EAF8F0" },
                      { label: "Docs Completed", value: "91%", change: "21 of 23 complete", color: "#059669", bg: "#D1FAE5" },
                      { label: "Avg Onboarding Time", value: "3 days", change: "Down from 12 days", color: "#0EA5E9", bg: "#E0F2FE" },
                      { label: "Induction Score", value: "94%", change: "Above 90% target", color: "#8B5CF6", bg: "#EDE9FE" },
                    ].map((stat) => (
                      <div key={stat.label} style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E8E8EF", borderLeft: `3px solid ${stat.color}` }}>
                        <span style={{ fontSize: "11px", color: "#8E8EA0", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>{stat.label}</span>
                        <p style={{ fontSize: "26px", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.5px", lineHeight: 1, margin: "6px 0 4px" }}>{stat.value}</p>
                        <span style={{ fontSize: "11px", color: stat.color, fontWeight: 500 }}>{stat.change}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div className="md:col-span-3" style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                      <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                        <div className="flex items-center gap-2">
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0E3B32" }} />
                          <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E" }}>Onboarding Pipeline</p>
                        </div>
                        <span style={{ fontSize: "11px", color: "#0E3B32", fontWeight: 600 }}>View All</span>
                      </div>
                      <div className="space-y-[6px]">
                        {[
                          { emp: "Rahul S.", stage: "Offer Sent", dept: "Engineering", status: "Pending", sC: "#D97706", sB: "#FEF3C7" },
                          { emp: "Priya M.", stage: "Docs Collected", dept: "Marketing", status: "Verified", sC: "#059669", sB: "#D1FAE5" },
                          { emp: "Amit K.", stage: "IT Setup", dept: "Product", status: "In Progress", sC: "#0EA5E9", sB: "#E0F2FE" },
                          { emp: "Sneha R.", stage: "Inducted", dept: "Sales", status: "Complete", sC: "#059669", sB: "#D1FAE5" },
                          { emp: "Vikram P.", stage: "Active", dept: "Finance", status: "Onboarded", sC: "#059669", sB: "#D1FAE5" },
                        ].map((item) => (
                          <div key={item.emp} className="flex items-center gap-3" style={{ padding: "10px 12px", borderRadius: "8px", background: "#FAFAFC", border: "1px solid #F0F0F5" }}>
                            <div style={{ width: 30, height: 30, borderRadius: "8px", background: "#EAF8F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "11px", fontWeight: 700, color: "#0E3B32" }}>
                              {item.emp.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between" style={{ marginBottom: "2px" }}>
                                <p style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 600 }}>{item.emp}</p>
                                <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 10px", borderRadius: "9999px", color: item.sC, background: item.sB }}>{item.status}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <p style={{ fontSize: "11px", color: "#8E8EA0" }}>{item.stage}</p>
                                <span style={{ fontSize: "10px", color: "#8E8EA0" }}>{item.dept}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "12px" }}>Pipeline Stages</p>
                        <div className="space-y-[8px]">
                          {[
                            { label: "Offer Sent", value: "5", pct: 22, color: "#D97706" },
                            { label: "Docs Collected", value: "7", pct: 30, color: "#0EA5E9" },
                            { label: "IT Setup", value: "4", pct: 17, color: "#8B5CF6" },
                            { label: "Inducted & Active", value: "7", pct: 31, color: "#059669" },
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
                      <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>Recent Activity</p>
                        <div className="space-y-[8px]">
                          {[
                            { action: "Offer accepted by Rahul S.", time: "2 min ago", initials: "OA", bg: "#D1FAE5", color: "#059669" },
                            { action: "Aadhaar verified \u2014 Priya M.", time: "18 min ago", initials: "AV", bg: "#E0F2FE", color: "#0EA5E9" },
                            { action: "Laptop assigned \u2014 Amit K.", time: "45 min ago", initials: "IT", bg: "#EDE9FE", color: "#8B5CF6" },
                          ].map((item) => (
                            <div key={item.action} className="flex items-center justify-between" style={{ padding: "6px 0" }}>
                              <div className="flex items-center gap-[10px]">
                                <span style={{ width: 30, height: 30, borderRadius: "8px", background: item.bg, color: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700 }}>{item.initials}</span>
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

      {/* ═══════════ 2. PAIN — STAT CARDS + PROBLEM CARDS ═══════════ */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <AlertTriangle className="w-3.5 h-3.5" /> The Hidden Cost
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              What slow onboarding actually costs you
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              Paper-heavy processes, delayed IT setup, and no induction structure cost you time, money, and talent.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: '40px' }}>
            {[
              { stat: '45 days', label: 'Avg onboarding time', sub: 'with manual paper-based processes', color: '#DC2626' },
              { stat: '20%', label: 'New hire drop-off', sub: 'leave within first 90 days', color: '#D97706' },
              { stat: '30+ hrs', label: 'Paperwork per batch', sub: 'collecting & verifying documents', color: '#9333EA' },
              { stat: '\u20B91.8L', label: 'Cost per failed hire', sub: 'recruitment + onboarding wasted', color: '#0EA5E9' },
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
              { title: 'Paperwork Overload', items: ['Physical forms for every new joiner', 'Manual Aadhaar/PAN copy collection', 'HR chases employees for missing docs'], icon: <FileText className="w-5 h-5" />, accent: '#DC2626', accentBg: '#FEF2F2' },
              { title: 'IT & Asset Delays', items: ['Laptops not ready on Day 1', 'Email & access created days late', 'No coordination between HR and IT'], icon: <Laptop className="w-5 h-5" />, accent: '#D97706', accentBg: '#FFFBEB' },
              { title: 'No Induction Structure', items: ['Ad-hoc introductions with no plan', 'New hires sit idle for the first week', 'Zero buddy assignment or mentoring'], icon: <ClipboardCheck className="w-5 h-5" />, accent: '#9333EA', accentBg: '#FAF5FF' },
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
            <p style={{ fontSize: '15px', color: '#64748B' }}>Automate all of this in under 10 minutes.{' '}<Link href="/demo" style={{ color: '#3CB371', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>See how \u2192</Link></p>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. FEATURES — 6 CLEAN CARDS ═══════════ */}
      <section className="py-24" style={{ backgroundColor: '#F8FAFC', backgroundImage: 'repeating-linear-gradient(90deg, rgba(15,23,42,0.06) 0px, rgba(15,23,42,0.06) 1px, transparent 1px, transparent 84px)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <Zap className="w-3.5 h-3.5" /> Core Features
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              Everything to onboard employees end-to-end
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              From digital offer letters to full compliance verification — built for Indian businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Digital Offer Letters", desc: "Generate branded offer letters with e-sign, conditional offers, CTC breakdowns, and auto-reminders for acceptance.", icon: <Send className="w-5 h-5" />, iconBg: '#EFF6FF', iconColor: '#2563EB' },
              { title: "Document Collection", desc: "Automated Aadhaar, PAN, bank details, educational certificates collection with real-time verification.", icon: <Upload className="w-5 h-5" />, iconBg: '#EAF8F0', iconColor: '#059669' },
              { title: "Pre-Boarding Portal", desc: "Welcome kit, org chart, company policies, team introductions, and culture videos before Day 1.", icon: <BookOpen className="w-5 h-5" />, iconBg: '#F0FDFA', iconColor: '#0D9488' },
              { title: "Induction Workflows", desc: "Structured checklists, training schedules, buddy assignment, and milestone tracking for every new joiner.", icon: <ClipboardCheck className="w-5 h-5" />, iconBg: '#FAF5FF', iconColor: '#9333EA' },
              { title: "IT & Asset Provisioning", desc: "Auto-trigger laptop allocation, email setup, access card, software licenses, and Slack/Teams invite on offer acceptance.", icon: <Laptop className="w-5 h-5" />, iconBg: '#FDF2F8', iconColor: '#DB2777' },
              { title: "Compliance & Verification", desc: "Background verification, EPFO registration, UAN linking, and digital document audit trail for every hire.", icon: <ShieldCheck className="w-5 h-5" />, iconBg: '#FFF7ED', iconColor: '#EA580C' },
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

      {/* ═══════════ 4. HOW IT WORKS — NUMBERED STEPS ═══════════ */}
      <section className="py-24" style={{ background: '#F0FDF4' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#FFFFFF', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <Workflow className="w-3.5 h-3.5" /> How It Works
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              From offer to fully onboarded in 4 steps
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              A streamlined workflow that gets new hires productive from Day 1.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Send Offer', desc: 'Generate digital offer letter with CTC breakdown, e-sign, and auto-reminders. Candidate accepts from any device.', icon: <Send className="w-6 h-6" /> },
              { step: '02', title: 'Collect Docs', desc: 'Automated Aadhaar, PAN, bank details, and education certificate collection with instant verification.', icon: <Upload className="w-6 h-6" /> },
              { step: '03', title: 'Pre-Board', desc: 'Welcome portal with org chart, policies, team intros, and culture content. IT provisioning triggers automatically.', icon: <BookOpen className="w-6 h-6" /> },
              { step: '04', title: 'Go Live', desc: 'Structured induction with checklists, buddy assignment, training schedule, and milestone tracking from Day 1.', icon: <UserCheck className="w-6 h-6" /> },
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#F8FAFC' }}>Connects to your existing stack</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B9C7D6' }}>Email, collaboration, verification, and compliance tools — all connected.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Google Workspace", desc: "Email provisioning", icon: <Mail className="w-6 h-6" /> },
              { name: "Microsoft 365", desc: "Account & license setup", icon: <MonitorSmartphone className="w-6 h-6" /> },
              { name: "Slack", desc: "Welcome messages", icon: <MessageSquare className="w-6 h-6" /> },
              { name: "Zoom", desc: "Virtual induction", icon: <Globe className="w-6 h-6" /> },
              { name: "Background Verification", desc: "BGV integration", icon: <ShieldCheck className="w-6 h-6" /> },
              { name: "EPFO", desc: "UAN linking", icon: <Building2 className="w-6 h-6" /> },
              { name: "DigiLocker", desc: "Aadhaar/PAN verification", icon: <Key className="w-6 h-6" /> },
              { name: "IT Asset Management", desc: "Laptop & access cards", icon: <Laptop className="w-6 h-6" /> },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.34) 0%, rgba(15,23,42,0.56) 100%)', border: '1px solid rgba(148,163,184,0.4)' }}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #D1FAE5', boxShadow: '0 10px 24px rgba(15,23,42,0.14)' }}>
                  <span style={{ color: '#102D23' }}>{item.icon}</span>
                </div>
                <h3 className="font-bold text-sm" style={{ color: '#F8FAFC' }}>{item.name}</h3>
                <p className="text-xs mt-1" style={{ color: '#C8D4E0' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. TRUST — PASTEL GRADIENT ═══════════ */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #F0FDF4 0%, #DCFCE7 50%, #F0FDF4 100%)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <ShieldCheck className="w-3.5 h-3.5" /> Trusted by Indian Businesses
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em' }}>De-risk your onboarding decision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { metric: "5,000+", label: "Employees Onboarded", desc: "Across startups, mid-market, and enterprises" },
              { metric: "3 days", label: "Avg Onboarding Time", desc: "From offer acceptance to productive employee" },
              { metric: "91%", label: "Doc Completion Rate", desc: "First-time digital collection without follow-ups" },
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
              { name: "ISO 27001", desc: "Information Security" },
              { name: "256-bit Encryption", desc: "Data Protection" },
              { name: "GDPR Compliant", desc: "Data Privacy" },
              { name: "EPFO Ready", desc: "Statutory Compliance" },
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
              { quote: "We onboarded 40 engineers in one week during our Series B hiring spree. Every laptop, email, and access card was ready on Day 1. Zero complaints.", name: "Rajesh Nair", role: "VP Engineering, SaaS Startup" },
              { quote: "Document collection used to take 2 weeks with constant follow-ups. Now Aadhaar and PAN are verified digitally in hours. Our HR team handles 3x the volume.", name: "Meera Sharma", role: "CHRO, Manufacturing Company" },
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

      {/* ═══════════ 7. COMPARISON — 3 CARDS ON LIME ═══════════ */}
      <section className="py-24" style={{ background: '#E3FE7A' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#FFFFFF', border: '1px solid #BFEA4D', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <CheckCircle2 className="w-3.5 h-3.5" /> Compare & Choose
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>Digital onboarding vs the old way</h2>
            <p style={{ fontSize: '16px', color: '#3D5A1E', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>See why HR teams are switching from paper-based onboarding.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div style={{ padding: '32px 28px', borderRadius: '24px', background: '#FFFFFF', boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Manual / Paper</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#DC2626', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#DC2626', fontWeight: 700 }}>45-day onboarding · 20% drop-off</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {['Digital Offer Letters', 'E-Sign', 'Auto Doc Collection', 'Pre-Boarding Portal', 'Induction Checklists', 'IT Provisioning', 'BGV Integration', 'Compliance Tracking'].map((f) => (
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
                  <span style={{ fontSize: '12px', color: '#CFF25E', fontWeight: 700 }}>Live in 3–5 days · Free 14-day trial</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.12)', marginBottom: '20px' }} />
              <div className="space-y-4">
                {['Digital Offer Letters', 'E-Sign', 'Auto Doc Collection', 'Pre-Boarding Portal', 'Induction Checklists', 'IT Provisioning', 'BGV Integration', 'Compliance Tracking'].map((f) => (
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
                  <span style={{ fontSize: '12px', color: '#EA580C', fontWeight: 700 }}>No pre-boarding · Paper-heavy process</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  { text: 'Digital Offer Letters', s: 'Basic' }, { text: 'E-Sign', s: null }, { text: 'Auto Doc Collection', s: null },
                  { text: 'Pre-Boarding Portal', s: null }, { text: 'Induction Checklists', s: 'Limited' }, { text: 'IT Provisioning', s: null },
                  { text: 'BGV Integration', s: 'Add-on' }, { text: 'Compliance Tracking', s: 'Partial' },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    {f.s ? (<><div style={{ width: 16, height: 16, borderRadius: '50%', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><div style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706' }} /></div><span style={{ fontSize: '14px', color: '#64748B' }}>{f.text}</span><span style={{ fontSize: '11px', color: '#D97706', fontWeight: 600, marginLeft: 'auto' }}>{f.s}</span></>) : (<><XCircle className="w-4 h-4 shrink-0" style={{ color: '#E2E8F0' }} /><span style={{ fontSize: '14px', color: '#94A3B8' }}>{f.text}</span></>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center" style={{ marginTop: '32px', fontSize: '13px', color: '#3D5A1E' }}>Based on industry averages. Pricing may vary.</p>
        </div>
      </section>

      {/* ═══════════ 8. MOBILE APP — DARK ═══════════ */}
      <section style={{ padding: "88px 0", background: "#102D23", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, borderRadius: "50%", background: "rgba(96,209,132,0.08)" }} />
        <div style={{ position: "absolute", left: -120, bottom: -120, width: 280, height: 280, borderRadius: "50%", background: "rgba(207,242,94,0.06)" }} />
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", border: "1px solid rgba(134,239,172,0.22)", color: "#86EFAC", fontSize: "12px", fontWeight: 700, marginBottom: "16px" }}>New Joiner App</span>
              <h2 style={{ fontSize: "clamp(30px, 3.9vw, 46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "18px", color: "#F8FAFC", letterSpacing: "-0.03em", maxWidth: "620px" }}>
                Onboarding starts before Day 1.
                <span style={{ display: "block", color: "#CFF25E", marginTop: "8px" }}>Accept. Upload. Get ready.</span>
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "26px", maxWidth: "620px" }}>
                New joiners accept offers, upload documents, complete pre-boarding tasks, and connect with their team — all from their phone before walking through the door.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: "24px" }}>
                {["Offer letter status", "Document upload", "Induction checklist", "Welcome messages"].map((item) => (
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
                          <p style={{ fontSize: "10px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>Onboarding Hub</p>
                          <p style={{ fontSize: "20px", color: "#102D23", fontWeight: 800, marginTop: "2px" }}>Welcome, Rahul!</p>
                        </div>
                        <div style={{ width: 40, height: 40, borderRadius: "14px", background: "#EAF8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#102D23" }}>
                          <UserPlus className="w-5 h-5" />
                        </div>
                      </div>
                      <div style={{ padding: "16px", borderRadius: "22px", background: "linear-gradient(135deg, #102D23 0%, #1A3F32 100%)", border: "1px solid rgba(96,209,132,0.3)", marginBottom: "14px" }}>
                        <p style={{ fontSize: "10px", color: "#BFEA4D", marginBottom: "4px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Offer Status</p>
                        <p style={{ fontSize: "34px", fontWeight: 800, color: "#F8FAFC", lineHeight: 1 }}>Accepted</p>
                        <div className="flex items-center justify-between" style={{ marginTop: "10px" }}>
                          <p style={{ fontSize: "11px", color: "#60D184", fontWeight: 700 }}>Start date: April 15</p>
                          <span style={{ fontSize: "10px", padding: "4px 10px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", color: "#60D184", fontWeight: 700, border: "1px solid rgba(96,209,132,0.25)" }}>E-Signed</span>
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Docs Uploaded</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>4/5</p>
                          <p style={{ fontSize: "10px", color: "#60D184", marginTop: "2px", fontWeight: 700 }}>80% done</p>
                        </div>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Induction</p>
                          <p style={{ fontSize: "18px", color: "#D97706", fontWeight: 800, marginTop: "4px" }}>Day 1</p>
                          <p style={{ fontSize: "10px", color: "#64748B", marginTop: "2px" }}>April 15, 9 AM</p>
                        </div>
                      </div>
                      <div style={{ padding: "14px", borderRadius: "18px", border: "1px solid #DDE7DE", background: "#FFFFFF" }}>
                        <p style={{ fontSize: "12px", fontWeight: 800, color: "#102D23", marginBottom: "10px" }}>Pre-Boarding Tasks</p>
                        <div className="space-y-3">
                          {[
                            { label: "Upload PAN card", color: "#059669", done: true },
                            { label: "Upload Aadhaar", color: "#059669", done: true },
                            { label: "Bank details form", color: "#D97706", done: false },
                            { label: "Welcome message from manager", color: "#059669", done: true },
                          ].map((r) => (
                            <div key={r.label} className="flex items-center gap-2" style={{ fontSize: "12px" }}>
                              {r.done ? (
                                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: r.color }} />
                              ) : (
                                <div style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid #D97706", flexShrink: 0 }} />
                              )}
                              <span style={{ color: r.done ? "#64748B" : "#1E293B", textDecoration: r.done ? "line-through" : "none", textDecorationColor: "rgba(100,116,139,0.4)" }}>{r.label}</span>
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

      {/* ═══════════ 9. BEFORE/AFTER — WARM WHITE ═══════════ */}
      <section className="relative py-28 overflow-hidden" style={{ background: '#FAF9F5' }}>
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,209,132,0.06) 0%, transparent 70%)' }} />
        </div>
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-[720px] mx-auto" style={{ marginBottom: '56px' }}>
            <span className="inline-flex items-center gap-2 mb-6" style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Zap className="w-3.5 h-3.5" /> The Smart Advantage
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '18px' }}>
              What changes when onboarding runs <span style={{ color: '#3CB371' }}>digitally</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#64748B', lineHeight: 1.75, maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>Five areas where automation replaces weeks of manual work.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT: Advantage cards */}
            <div className="flex flex-col gap-4">
              {[
                { num: '01', title: 'Offer Letters', before: 'Manual Word docs emailed back and forth', after: 'Digital offer letters with e-sign in minutes', icon: <Send className="w-5 h-5" /> },
                { num: '02', title: 'Documents', before: 'Physical copies collected over 2 weeks', after: 'Digital collection with instant Aadhaar/PAN verification', icon: <Upload className="w-5 h-5" /> },
                { num: '03', title: 'Pre-Boarding', before: 'No preparation, new hires arrive clueless', after: 'Welcome portal with org chart, policies, and team intros', icon: <BookOpen className="w-5 h-5" /> },
                { num: '04', title: 'Induction', before: 'Ad-hoc introductions, no structure', after: 'Structured workflow with checklists and buddy assignment', icon: <ClipboardCheck className="w-5 h-5" /> },
                { num: '05', title: 'Compliance', before: 'Manual BGV taking weeks to complete', after: 'Auto-verification with EPFO, DigiLocker, and BGV partners', icon: <ShieldCheck className="w-5 h-5" /> },
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

            {/* RIGHT: Dashboard mockup */}
            <div className="flex justify-center lg:sticky lg:top-32">
              <div style={{ width: '100%', maxWidth: '480px' }}>
                <div style={{ background: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)' }}>
                  <div className="flex items-center justify-between" style={{ padding: '14px 20px', background: '#0E3B32', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-[5px]">
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} />
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFBD2E' }} />
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28CA42' }} />
                      </div>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginLeft: '8px' }}>onboarding-engine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CFF25E' }} />
                      <span style={{ fontSize: '10px', color: '#CFF25E', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Live</span>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
                      <div>
                        <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>April 2026 Batch</p>
                        <p style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>23 New Joiners</p>
                      </div>
                      <div style={{ padding: '6px 14px', borderRadius: '999px', background: '#D1FAE5', color: '#059669', fontSize: '11px', fontWeight: 700 }}>On Track</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3" style={{ marginBottom: '20px' }}>
                      {[
                        { label: 'Offers Sent', value: '23', color: '#059669' },
                        { label: 'Docs Done', value: '91%', color: '#0EA5E9' },
                        { label: 'Avg Days', value: '3', color: '#8B5CF6' },
                      ].map((kpi) => (
                        <div key={kpi.label} style={{ padding: '14px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                          <p style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{kpi.label}</p>
                          <p style={{ fontSize: '20px', fontWeight: 800, color: kpi.color, marginTop: '4px' }}>{kpi.value}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: '16px', borderRadius: '14px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Automation Status</p>
                      <div className="space-y-2">
                        {['Digital Offer Letters \u2014 Active', 'Doc Collection \u2014 Auto', 'Aadhaar/PAN Verification \u2014 Live', 'IT Provisioning \u2014 Triggered', 'Induction Workflow \u2014 Scheduled'].map((task) => (
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
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 600 }}>91% doc completion</div>
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#0E3B32', fontSize: '12px', fontWeight: 600 }}>3-day onboarding</div>
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
        <div style={{ position: "absolute", right: "-140px", bottom: "-180px", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(207,242,94,0.06), transparent)" }} />
        <div className="max-w-[900px] mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <div style={{ width: 56, height: 56, borderRadius: "16px", background: "rgba(255,255,255,0.06)", color: "#CFF25E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <UserPlus style={{ width: 28, height: 28 }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Ready to onboard employees in days, not weeks?
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", marginBottom: "32px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Join Indian businesses that turned chaotic paper-based onboarding into a seamless digital experience. Free setup, no credit card.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="cta-base cta-secondary cta-lg">
              Book a Free Demo <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              View Pricing <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2" style={{ marginTop: "24px" }}>
            {["No credit card required", "Setup in 1-3 days", "Free onboarding audit"].map((t) => (
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
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>Everything About Employee Onboarding</h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Common questions about onboarding time, offer letters, and compliance.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { q: "How long does onboarding take with this software?", a: "Average onboarding time drops from 45 days to 3 days. Offer letters go out instantly, documents are collected digitally, and induction starts on Day 1 with pre-configured workflows." },
              { q: "How do digital offer letters work?", a: "Generate branded offer letters with CTC breakdowns, terms, and conditions. Candidates receive a link, review the offer, and e-sign from any device. Auto-reminders follow up until acceptance." },
              { q: "How is document verification handled?", a: "Employees upload Aadhaar, PAN, bank details, and educational certificates. The system verifies documents against government databases in real-time, flags mismatches instantly." },
              { q: "Do you support Aadhaar and PAN verification?", a: "Yes. Direct integration with DigiLocker and UIDAI for Aadhaar verification and income tax database for PAN. Both verified digitally without manual checks." },
              { q: "What about background verification (BGV)?", a: "Integrated with leading BGV providers in India. Criminal record, education, employment history, and address verification triggered automatically at the document collection stage." },
              { q: "What does the pre-boarding portal include?", a: "Company welcome kit, org chart, reporting manager details, team introductions, company policies, culture videos, and pre-joining tasks — all accessible from mobile before Day 1." },
              { q: "Is the software EPFO and compliance ready?", a: "Fully. Auto-generates UAN for new employees, links EPFO accounts, handles Form 11 and nomination forms digitally. Complete audit trail for labour law compliance." },
              { q: "How quickly can we go live?", a: "1-3 days. We configure your offer letter templates, document checklists, induction workflows, and integrations. Data migration and training included free." },
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

      {/* ═══════════ SEO SCHEMA ═══════════ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "SoftwareApplication", "name": "HRMS Software in India - Employee Onboarding Module", "applicationCategory": "BusinessApplication", "operatingSystem": "Web, iOS, Android", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "2800" } },
          { "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "How long does onboarding take with this software?", "acceptedAnswer": { "@type": "Answer", "text": "Average onboarding time drops from 45 days to 3 days with digital offer letters, automated document collection, and pre-configured induction workflows." } },
            { "@type": "Question", "name": "How do digital offer letters work?", "acceptedAnswer": { "@type": "Answer", "text": "Generate branded offer letters with CTC breakdowns. Candidates e-sign from any device with auto-reminders until acceptance." } },
            { "@type": "Question", "name": "Do you support Aadhaar and PAN verification?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Direct integration with DigiLocker and UIDAI for Aadhaar and income tax database for PAN verification." } },
            { "@type": "Question", "name": "How quickly can we go live?", "acceptedAnswer": { "@type": "Answer", "text": "1-3 days including offer letter templates, document checklists, induction workflows, and free data migration." } }
          ]}
        ]
      })}} />
    </main>
  );
}
