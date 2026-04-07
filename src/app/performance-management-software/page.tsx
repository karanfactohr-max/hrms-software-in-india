import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight, Target, TrendingUp, Users, FileText,
  CheckCircle2, ChevronDown, Zap, Network, Star,
  BarChart3, Award, MessageSquare, Calendar, ShieldCheck,
  Briefcase, Clock, Smartphone, Building2, XCircle,
  UserCheck, GitBranch, Eye, Layers, ClipboardCheck,
  Workflow, Search, AlertTriangle, RefreshCw, BookOpen,
  ReceiptIndianRupee, Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Best Performance Management Software in India | OKR, 360 Feedback & KPI Tracking",
  description: "Drive high-performance culture with continuous feedback, OKR tracking, 360-degree reviews, and competency mapping. Replace annual appraisal chaos with real-time talent management built for Indian businesses.",
  keywords: "performance appraisal software india, OKR tracking, 360 degree feedback, KPI management, employee goals, annual review software, continuous feedback, competency framework, succession planning, PIP tracking, talent management India",
  openGraph: {
    title: "Best Performance Management Software in India | Drive High Performance",
    description: "Replace annual review chaos with continuous performance management. OKR tracking, 360 feedback, competency mapping, and succession planning for Indian businesses.",
    url: 'https://hrmssoftwareinindia.com/performance-management-software',
    siteName: 'HRMS Software in India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PerformanceManagementPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen font-sans overflow-hidden">

      {/* ═══════════ 1. HERO SECTION (KEEP AS-IS) ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-3 p-1 pr-5 rounded-full mb-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase" style={{ backgroundColor: '#166534', color: '#FFFFFF' }}>
              <Target className="w-3.5 h-3.5" />
              Performance Engine
            </div>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#0F172A' }}>
              Continuous Performance Management
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 800,
            color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2.5px",
            marginBottom: "20px", maxWidth: "880px", marginLeft: "auto", marginRight: "auto",
          }}>
            {"Turn Annual Reviews Into "}<span style={{ color: "var(--rose-dark, #E11D48)" }}>Continuous Growth.</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 1.8vw, 18px)", color: "#64748B",
            lineHeight: 1.7, maxWidth: "640px", marginLeft: "auto", marginRight: "auto",
            marginBottom: "32px",
          }}>
            OKR tracking, 360-degree feedback, competency mapping, and real-time analytics in one platform. Replace once-a-year appraisal anxiety with a culture of continuous performance improvement.
          </p>

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

          <p style={{ fontSize: "13px", color: "#94A3B8", fontWeight: 500, marginBottom: "56px" }}>40% faster review cycles with continuous feedback</p>
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
                  <div style={{ background: "#fff", borderRadius: "8px", padding: "5px 14px", border: "1px solid #E8E8EF", fontSize: "11px", color: "#8E8EA0", fontFamily: "monospace" }}>
                    app.hrmssuite.in/performance
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{ width: 28, height: 28, borderRadius: "8px", background: "#3CB371", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff" }}>HR</div>
                </div>
              </div>

              <div className="flex">
                <div className="hidden sm:flex flex-col justify-between" style={{ width: "190px", padding: "16px 12px", borderRight: "1px solid #E8E8EF", background: "#FAFAFC", flexShrink: 0 }}>
                  <div className="space-y-[2px]">
                    {[
                      { label: "Dashboard", active: false },
                      { label: "OKR Tracking", active: true },
                      { label: "360 Feedback", active: false },
                      { label: "Reviews", active: false },
                      { label: "Competencies", active: false },
                      { label: "Succession Plan", active: false },
                      { label: "Analytics", active: false },
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
                    <p style={{ fontWeight: 600, fontSize: "12px", marginBottom: 2 }}>Q2 Review Cycle</p>
                    <p style={{ fontSize: "10px", opacity: 0.8, lineHeight: 1.4 }}>78% completed on time</p>
                  </div>
                </div>

                <div style={{ flex: 1, padding: "20px", minWidth: 0, background: "#fff" }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A2E" }}>Performance — Q2 2026</p>
                      <p style={{ fontSize: "12px", color: "#8E8EA0" }}>1,247 employees across 8 departments</p>
                    </div>
                    <div style={{ fontSize: "10px", fontWeight: 600, padding: "4px 12px", borderRadius: "9999px", color: "#059669", background: "#D1FAE5" }}>
                      89% On Track
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ marginBottom: "20px" }}>
                    {[
                      { label: "OKRs On Track", value: "89%", change: "+12% vs Q1", color: "#059669", bg: "#D1FAE5" },
                      { label: "Reviews Done", value: "982", change: "78.7% completion", color: "#0EA5E9", bg: "#E0F2FE" },
                      { label: "Avg Rating", value: "3.8/5", change: "+0.3 improvement", color: "#8B5CF6", bg: "#EDE9FE" },
                      { label: "High Performers", value: "247", change: "19.8% of workforce", color: "#D97706", bg: "#FEF3C7" },
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

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div className="md:col-span-3" style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                      <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                        <div className="flex items-center gap-2">
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3CB371" }} />
                          <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E" }}>Top OKRs This Quarter</p>
                        </div>
                        <span style={{ fontSize: "11px", color: "#3CB371", fontWeight: 600 }}>Q2 2026</span>
                      </div>
                      <div className="space-y-[6px]">
                        {[
                          { obj: "Revenue Growth", dept: "Sales", progress: 82, status: "On Track", sColor: "#059669", sBg: "#D1FAE5" },
                          { obj: "Product Launch v3.0", dept: "Engineering", progress: 65, status: "In Progress", sColor: "#D97706", sBg: "#FEF3C7" },
                          { obj: "Customer NPS > 60", dept: "Support", progress: 91, status: "Ahead", sColor: "#059669", sBg: "#D1FAE5" },
                          { obj: "Hiring 50 Engineers", dept: "HR", progress: 44, status: "At Risk", sColor: "#DC2626", sBg: "#FEE2E2" },
                          { obj: "Market Expansion", dept: "Strategy", progress: 73, status: "On Track", sColor: "#059669", sBg: "#D1FAE5" },
                        ].map((item) => (
                          <div key={item.obj} className="flex items-center gap-3" style={{ padding: "10px 12px", borderRadius: "8px", background: "#FAFAFC", border: "1px solid #F0F0F5" }}>
                            <div style={{ width: 30, height: 30, borderRadius: "8px", background: item.sBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "10px", fontWeight: 700, color: item.sColor }}>
                              {item.obj.split(" ").map(n => n[0]).join("").slice(0, 2)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between" style={{ marginBottom: "4px" }}>
                                <p style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 600 }}>{item.obj}</p>
                                <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 10px", borderRadius: "9999px", color: item.sColor, background: item.sBg, flexShrink: 0, marginLeft: 8 }}>
                                  {item.status}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span style={{ fontSize: "10px", color: "#8E8EA0" }}>{item.dept}</span>
                                <div style={{ flex: 1, height: 4, borderRadius: 2, background: "#E8E8EF" }}>
                                  <div style={{ width: `${item.progress}%`, height: "100%", borderRadius: 2, background: item.sColor }} />
                                </div>
                                <span style={{ fontSize: "10px", color: "#1A1A2E", fontWeight: 700 }}>{item.progress}%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "12px" }}>Performance Distribution</p>
                        <div className="space-y-[8px]">
                          {[
                            { label: "Exceeds Expectations", value: "19.8%", pct: 20, color: "#059669" },
                            { label: "Meets Expectations", value: "52.3%", pct: 52, color: "#0EA5E9" },
                            { label: "Developing", value: "21.4%", pct: 21, color: "#D97706" },
                            { label: "Needs Improvement", value: "6.5%", pct: 7, color: "#DC2626" },
                          ].map((item) => (
                            <div key={item.label}>
                              <div className="flex items-center justify-between" style={{ marginBottom: "4px" }}>
                                <span style={{ fontSize: "11px", color: "#5A5A7A", fontWeight: 500 }}>{item.label}</span>
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
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>Recent Feedback</p>
                        <div className="space-y-[8px]">
                          {[
                            { action: "360 review completed", time: "5 min ago", initials: "36", bg: "#D1FAE5", color: "#059669" },
                            { action: "OKR check-in submitted", time: "22 min ago", initials: "OK", bg: "#E0F2FE", color: "#0EA5E9" },
                            { action: "Manager 1:1 logged", time: "1 hr ago", initials: "1:1", bg: "#EDE9FE", color: "#8B5CF6" },
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

      {/* ═══════════ 2. PAIN SECTION — STAT CARDS + PROBLEM CARDS ═══════════ */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <AlertTriangle className="w-3.5 h-3.5" /> The Hidden Cost
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              What annual reviews actually cost you
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              Bias, disengagement, and missed growth add up fast. Here&apos;s what companies lose every cycle.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: '40px' }}>
            {[
              { stat: '11 months', label: 'Without feedback', sub: 'between annual reviews', color: '#DC2626' },
              { stat: '65%', label: 'Employees disengaged', sub: 'due to lack of recognition', color: '#D97706' },
              { stat: '3 weeks', label: 'Manager time wasted', sub: 'on year-end review paperwork', color: '#9333EA' },
              { stat: '74%', label: 'Ratings biased', sub: 'by recency & favoritism', color: '#0EA5E9' },
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
              {
                title: 'Annual Review Fatigue',
                items: ['Managers rush 20+ reviews in one week', 'Recency bias replaces year-round data', '12-month wait for actionable feedback'],
                icon: <Calendar className="w-5 h-5" />, accent: '#DC2626', accentBg: '#FEF2F2',
              },
              {
                title: 'Biased Evaluations',
                items: ['No structured competency rubrics', 'Halo effect & manager favoritism', 'Single-rater reviews miss the full picture'],
                icon: <AlertTriangle className="w-5 h-5" />, accent: '#D97706', accentBg: '#FFFBEB',
              },
              {
                title: 'Zero Goal Visibility',
                items: ['OKRs set in January, forgotten by March', 'No connection between work and company goals', 'Mid-year panic when nobody tracked progress'],
                icon: <Eye className="w-5 h-5" />, accent: '#9333EA', accentBg: '#FAF5FF',
              },
            ].map((card) => (
              <div key={card.title} style={{ padding: '28px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderTop: `3px solid ${card.accent}` }}>
                <div className="flex items-center gap-3" style={{ marginBottom: '18px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: card.accentBg, color: card.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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

          <div className="text-center" style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '15px', color: '#64748B' }}>
              Fix all of this with continuous performance management.{' '}
              <Link href="/demo" style={{ color: '#3CB371', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>See how →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. FEATURES — 6 CLEAN CARDS ═══════════ */}
      <section className="py-24" style={{ backgroundColor: '#F8FAFC', backgroundImage: 'repeating-linear-gradient(90deg, rgba(15,23,42,0.06) 0px, rgba(15,23,42,0.06) 1px, transparent 1px, transparent 84px)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <ShieldCheck className="w-3.5 h-3.5" /> Complete Performance Suite
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              Everything for talent performance management
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              From OKR alignment to succession planning — built for Indian organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "OKR Tracking", desc: "Set, cascade, and track Objectives & Key Results with real-time progress dashboards.", icon: <Target className="w-5 h-5" />, iconBg: '#EFF6FF', iconColor: '#2563EB' },
              { title: "360-Degree Feedback", desc: "Structured peer, manager, and self-assessments with anonymity and sentiment analysis.", icon: <Users className="w-5 h-5" />, iconBg: '#EAF8F0', iconColor: '#059669' },
              { title: "Continuous Reviews", desc: "Replace annual cycles with quarterly check-ins, 1:1 templates, and auto reminders.", icon: <RefreshCw className="w-5 h-5" />, iconBg: '#F0FDFA', iconColor: '#0D9488' },
              { title: "Competency Mapping", desc: "Role-specific skill matrices with proficiency levels and gap analysis.", icon: <Layers className="w-5 h-5" />, iconBg: '#FAF5FF', iconColor: '#9333EA' },
              { title: "PIP & Improvement Plans", desc: "Structured plans with milestones, check-ins, and auto-escalation.", icon: <ClipboardCheck className="w-5 h-5" />, iconBg: '#FDF2F8', iconColor: '#DB2777' },
              { title: "Succession Planning", desc: "Nine-box grid, talent pools, and leadership pipeline for critical roles.", icon: <Award className="w-5 h-5" />, iconBg: '#FFF7ED', iconColor: '#EA580C' },
            ].map((item, i) => (
              <div key={i} className="compliance-card" style={{ padding: '28px', borderRadius: '16px', background: '#FFFFFF', border: '1px solid #E2E8F0', transition: 'all 0.3s ease' }}>
                <div className="flex items-center gap-3" style={{ marginBottom: '14px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: item.iconBg, color: item.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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

      {/* ═══════════ 4. HOW IT WORKS — NUMBERED STEPS ═══════════ */}
      <section className="py-24" style={{ background: '#F0FDF4' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#FFFFFF', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <Workflow className="w-3.5 h-3.5" /> How It Works
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              From goal setting to performance excellence
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              Build a continuous performance culture in four steps. No disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Define Goals', desc: 'Set company OKRs and cascade to teams. Build competency frameworks per role.', icon: <Target className="w-6 h-6" /> },
              { step: '02', title: 'Continuous Feedback', desc: 'Real-time peer feedback, manager 1:1s, and automated check-in prompts.', icon: <MessageSquare className="w-6 h-6" /> },
              { step: '03', title: 'Structured Reviews', desc: 'Quarterly 360-degree reviews with calibration tools for fair ratings.', icon: <ClipboardCheck className="w-6 h-6" /> },
              { step: '04', title: 'Act on Insights', desc: 'Drive compensation, training, succession, and development from data.', icon: <TrendingUp className="w-6 h-6" /> },
            ].map((item, i) => (
              <div key={i} className="compliance-card" style={{ padding: '32px 28px', borderRadius: '20px', background: '#FFFFFF', border: '1px solid #E2E8F0', transition: 'all 0.3s ease', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '64px', fontWeight: 900, color: '#F0FDF4', lineHeight: 1, pointerEvents: 'none', letterSpacing: '-0.04em' }}>{item.step}</div>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#0E3B32', color: '#CFF25E', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 8px 20px rgba(14,59,50,0.15)' }}>
                  {item.icon}
                </div>
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#F8FAFC' }}>
              Connects with your HR tech stack
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B9C7D6' }}>
              Performance data flows across payroll, learning, and collaboration tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Payroll System", desc: "Link performance to compensation", icon: <Briefcase className="w-6 h-6" /> },
              { name: "Learning (LMS)", desc: "Auto-assign training from PIPs", icon: <BookOpen className="w-6 h-6" /> },
              { name: "HRMS Core", desc: "Unified employee data sync", icon: <Building2 className="w-6 h-6" /> },
              { name: "Google Workspace", desc: "Review scheduling via Calendar", icon: <Calendar className="w-6 h-6" /> },
              { name: "Microsoft Teams", desc: "Feedback prompts in Teams", icon: <MessageSquare className="w-6 h-6" /> },
              { name: "Slack", desc: "Recognition and kudos in channels", icon: <Zap className="w-6 h-6" /> },
              { name: "Talent Analytics", desc: "BI dashboards and exports", icon: <BarChart3 className="w-6 h-6" /> },
              { name: "SAP SuccessFactors", desc: "Enterprise HCM integration", icon: <Network className="w-6 h-6" /> },
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
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em' }}>
              De-risk your performance management decision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { metric: "40% Faster", label: "Review Cycles", desc: "Continuous reviews replace annual bottlenecks" },
              { metric: "3.2x", label: "Employee Engagement", desc: "Regular feedback drives meaningful engagement" },
              { metric: "750+", label: "Companies Transformed", desc: "From startups to 10,000+ employee enterprises" },
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
              { name: "Bias-Free Reviews", desc: "Calibration & structured rubrics" },
              { name: "GDPR Compliant", desc: "Data privacy management" },
              { name: "ISO 27001", desc: "Information security certified" },
              { name: "SOC 2 Type II", desc: "Security standards audited" },
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
              { quote: "We moved from annual to quarterly reviews and saw a dramatic shift in team engagement. The 360 feedback changed our culture.", name: "Priya Krishnamurthy", role: "CHRO, IT Services Company" },
              { quote: "The OKR cascade helped our 500-person team align with company strategy. Every developer knows how their sprint matters.", name: "Arjun Mehta", role: "VP Engineering, SaaS Startup" },
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
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              Continuous performance vs the old way
            </h2>
            <p style={{ fontSize: '16px', color: '#3D5A1E', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              See why leading teams are switching from annual reviews to continuous management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div style={{ padding: '32px 28px', borderRadius: '24px', background: '#FFFFFF', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Annual Reviews Only</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#DC2626', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#DC2626', fontWeight: 700 }}>Bias-prone · Once-a-year, too late</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {['OKR Tracking', '360 Feedback', 'Continuous Check-ins', 'Competency Mapping', 'PIP Tracking', 'Succession Planning', 'Bias-Free Calibration', 'Real-Time Analytics'].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <XCircle className="w-4 h-4 shrink-0" style={{ color: '#E2E8F0' }} />
                    <span style={{ fontSize: '14px', color: '#94A3B8' }}>{f}</span>
                  </div>
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
                {['OKR Tracking & Cascade', '360-Degree Feedback', 'Continuous Check-ins', 'Competency Mapping', 'PIP & Milestones', 'Succession Planning', 'Bias-Free Calibration', 'Real-Time Analytics'].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#CFF25E' }} />
                    <span style={{ fontSize: '14px', color: '#E2E8F0', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link href="/demo" className="cta-base cta-secondary cta-md" style={{ width: '100%', justifyContent: 'center' }}>
                  Start Free Trial <span className="cta-arrow" style={{ width: 24, height: 24 }}><ArrowRight style={{ width: 12, height: 12 }} /></span>
                </Link>
              </div>
            </div>

            <div style={{ padding: '32px 28px', borderRadius: '24px', background: '#FFFFFF', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Spreadsheets</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EA580C', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#EA580C', fontWeight: 700 }}>No real-time OKRs · No feedback loop</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  { text: 'OKR Tracking', status: null },
                  { text: '360 Feedback', status: null },
                  { text: 'Continuous Check-ins', status: null },
                  { text: 'Competency Mapping', status: 'Manual' },
                  { text: 'PIP Tracking', status: 'Manual' },
                  { text: 'Succession Planning', status: null },
                  { text: 'Bias-Free Calibration', status: null },
                  { text: 'Real-Time Analytics', status: 'Basic' },
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
                        <XCircle className="w-4 h-4 shrink-0" style={{ color: '#E2E8F0' }} />
                        <span style={{ fontSize: '14px', color: '#94A3B8' }}>{f.text}</span>
                      </>
                    )}
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
              <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", border: "1px solid rgba(134,239,172,0.22)", color: "#86EFAC", fontSize: "12px", fontWeight: 700, marginBottom: "16px" }}>Manager & Employee App</span>
              <h2 style={{ fontSize: "clamp(30px, 3.9vw, 46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "18px", color: "#F8FAFC", letterSpacing: "-0.03em", maxWidth: "620px" }}>
                Performance management in every pocket.
                <span style={{ display: "block", color: "#CFF25E", marginTop: "8px" }}>Check-ins. Feedback. OKR updates. Anywhere.</span>
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "26px", maxWidth: "620px" }}>
                Managers give feedback on the go. Employees track OKRs, submit self-assessments, and view their performance history — all from their phone.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: "24px" }}>
                {["OKR check-ins", "Peer feedback", "Review submissions", "Goal tracking"].map((item) => (
                  <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderRadius: "999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", color: "#E2E8F0", fontSize: "13px", fontWeight: 600 }}>
                    <CheckCircle2 className="w-4 h-4" style={{ color: "#CFF25E" }} />{item}
                  </span>
                ))}
              </div>
              <Link href="/demo" className="cta-base cta-secondary cta-md">
                Try the App <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
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
                          <p style={{ fontSize: "10px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>Performance Hub</p>
                          <p style={{ fontSize: "20px", color: "#102D23", fontWeight: 800, marginTop: "2px" }}>Q2 2026</p>
                        </div>
                        <div style={{ width: 40, height: 40, borderRadius: "14px", background: "#EAF8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#102D23" }}>
                          <Target className="w-5 h-5" />
                        </div>
                      </div>

                      <div style={{ padding: "16px", borderRadius: "22px", background: "linear-gradient(135deg, #102D23 0%, #1A3F32 100%)", border: "1px solid rgba(96,209,132,0.3)", marginBottom: "14px" }}>
                        <p style={{ fontSize: "10px", color: "#BFEA4D", marginBottom: "4px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Overall OKR Progress</p>
                        <p style={{ fontSize: "34px", fontWeight: 800, color: "#F8FAFC", lineHeight: 1 }}>89%</p>
                        <div className="flex items-center justify-between" style={{ marginTop: "10px" }}>
                          <p style={{ fontSize: "11px", color: "#60D184", fontWeight: 700 }}>On track for Q2</p>
                          <span style={{ fontSize: "10px", padding: "4px 10px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", color: "#60D184", fontWeight: 700, border: "1px solid rgba(96,209,132,0.25)" }}>+12%</span>
                        </div>
                      </div>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>My Rating</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>4.2/5</p>
                          <p style={{ fontSize: "10px", color: "#60D184", marginTop: "2px", fontWeight: 700 }}>exceeds</p>
                        </div>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Feedback</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>12</p>
                          <p style={{ fontSize: "10px", color: "#64748B", marginTop: "2px" }}>this quarter</p>
                        </div>
                      </div>

                      <div style={{ padding: "14px", borderRadius: "18px", border: "1px solid #DDE7DE", background: "#FFFFFF" }}>
                        <p style={{ fontSize: "12px", fontWeight: 800, color: "#102D23", marginBottom: "10px" }}>Pending Actions</p>
                        <div className="space-y-3">
                          {[
                            { label: "Submit Q2 self-review", color: "#D97706" },
                            { label: "Give peer feedback (3)", color: "#0EA5E9" },
                            { label: "Update OKR progress", color: "#059669" },
                          ].map((r) => (
                            <div key={r.label} className="flex items-center gap-2" style={{ fontSize: "12px" }}>
                              <div style={{ width: 8, height: 8, borderRadius: "50%", background: r.color, flexShrink: 0 }} />
                              <span style={{ color: "#475569" }}>{r.label}</span>
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

      {/* ═══════════ 9. BEFORE/AFTER ADVANTAGE — WARM WHITE ═══════════ */}
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
              What changes when reviews run <span style={{ color: '#3CB371' }}>continuously</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#64748B', lineHeight: 1.75, maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
              Five areas where automation replaces annual chaos with ongoing clarity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              {[
                { num: '01', title: 'Review Frequency', before: '1 review per year, full of recency bias', after: 'Continuous check-ins with real-time data', icon: <RefreshCw className="w-5 h-5" /> },
                { num: '02', title: 'Goal Visibility', before: 'OKRs set and forgotten by Q2', after: 'Live OKR dashboards with progress tracking', icon: <Target className="w-5 h-5" /> },
                { num: '03', title: 'Feedback Quality', before: 'Single manager opinion, no structure', after: '360-degree input with calibration tools', icon: <Users className="w-5 h-5" /> },
                { num: '04', title: 'Talent Decisions', before: 'Gut-feel promotions and raises', after: 'Data-driven compensation and succession', icon: <TrendingUp className="w-5 h-5" /> },
                { num: '05', title: 'Employee Growth', before: 'No development plans until PIP', after: 'Continuous competency tracking and coaching', icon: <Award className="w-5 h-5" /> },
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
                  <div className="flex items-center justify-between" style={{ padding: '14px 20px', background: '#0E3B32', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-[5px]">
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57' }} />
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFBD2E' }} />
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28CA42' }} />
                      </div>
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginLeft: '8px' }}>performance-engine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CFF25E' }} />
                      <span style={{ fontSize: '10px', color: '#CFF25E', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Live</span>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
                      <div>
                        <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Q2 2026 Performance</p>
                        <p style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>89% On Track</p>
                      </div>
                      <div style={{ padding: '6px 14px', borderRadius: '999px', background: '#D1FAE5', color: '#059669', fontSize: '11px', fontWeight: 700 }}>Healthy</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3" style={{ marginBottom: '20px' }}>
                      {[
                        { label: 'Reviews Done', value: '982', color: '#059669' },
                        { label: 'Avg Rating', value: '3.8', color: '#0EA5E9' },
                        { label: 'High Perf.', value: '247', color: '#8B5CF6' },
                      ].map((kpi) => (
                        <div key={kpi.label} style={{ padding: '14px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                          <p style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{kpi.label}</p>
                          <p style={{ fontSize: '20px', fontWeight: 800, color: kpi.color, marginTop: '4px' }}>{kpi.value}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: '16px', borderRadius: '14px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Review Cycle Status</p>
                      <div className="space-y-2">
                        {['360 Feedback — Collected', 'Self-Assessment — 94% Done', 'Manager Reviews — In Progress', 'Calibration — Scheduled', 'Results — Publishing Soon'].map((task) => (
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
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 600 }}>40% faster cycles</div>
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#0E3B32', fontSize: '12px', fontWeight: 600 }}>Zero bias</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '56px' }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              See the Engine in Action
              <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ 10. CTA — DARK ═══════════ */}
      <section style={{ padding: "88px 0", background: "#102D23", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-160px", left: "-130px", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,209,132,0.1), transparent)" }} />
        <div style={{ position: "absolute", right: "-140px", bottom: "-180px", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(207,242,94,0.06), transparent)" }} />
        <div className="max-w-[900px] mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <div style={{ width: 56, height: 56, borderRadius: "16px", background: "rgba(255,255,255,0.06)", color: "#CFF25E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <TrendingUp style={{ width: 28, height: 28 }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Stop waiting 12 months to recognize great work
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", marginBottom: "32px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Build a culture of continuous feedback, OKR alignment, and data-driven talent decisions. Built for Indian businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="cta-base cta-secondary cta-lg">
              Book a Free Demo
              <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              View Pricing
              <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2" style={{ marginTop: "24px" }}>
            {["No credit card required", "Setup in under 5 days", "Free performance audit"].map((t) => (
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
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Everything You Need to Know About Performance Management
            </h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Common questions about OKR tracking, 360 feedback, and continuous reviews.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { q: "What's the difference between OKR and KPI tracking?", a: "OKRs are aspirational quarterly goals that push teams to grow. KPIs measure ongoing operations. Our platform supports both — you can link KPIs as key results within OKRs." },
              { q: "How does 360-degree feedback work?", a: "Configure role-specific questionnaires. The system invites peers, managers, and direct reports to submit anonymous feedback, then aggregates it with sentiment analysis." },
              { q: "Can we replace annual appraisals with continuous reviews?", a: "Yes. Many clients run quarterly or monthly cycles. The system maintains rolling history that feeds into compensation, promotions, and development planning." },
              { q: "How do you prevent bias in evaluations?", a: "Structured rubrics, 360-degree input, calibration sessions, recency-bias warnings, and AI anomaly detection that flags unusual rating patterns." },
              { q: "What is a PIP and how does the system handle it?", a: "A Performance Improvement Plan with milestone tracking, manager check-ins, and auto-escalation. Fully documented for legal compliance and fairness." },
              { q: "How does succession planning work?", a: "Nine-box grid maps employees by performance and potential. You identify critical roles, assess successor readiness, and build development plans." },
              { q: "Does performance integrate with payroll?", a: "Yes. Ratings, OKR scores, and competency assessments link to payroll for merit increases, bonuses, and promotion-linked adjustments." },
              { q: "How long does implementation take?", a: "5-10 business days including OKR setup, competency frameworks, review cycle design, and manager training. Industry templates included." },
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
          { "@type": "SoftwareApplication", "name": "HRMS Software in India - Performance Management Module", "applicationCategory": "BusinessApplication", "operatingSystem": "Web, iOS, Android", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "4500" } },
          { "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What is the difference between OKR and KPI tracking?", "acceptedAnswer": { "@type": "Answer", "text": "OKRs are aspirational goals set quarterly. KPIs measure ongoing operational performance. Our platform supports both." } },
            { "@type": "Question", "name": "How does 360-degree feedback work?", "acceptedAnswer": { "@type": "Answer", "text": "Configure role-specific questionnaires. The system invites peers, managers, and direct reports for anonymous feedback with sentiment analysis." } },
            { "@type": "Question", "name": "Can we replace annual appraisals?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many clients run quarterly or monthly review cycles with rolling performance history." } },
            { "@type": "Question", "name": "How do you prevent bias?", "acceptedAnswer": { "@type": "Answer", "text": "Structured rubrics, 360-degree input, calibration sessions, and AI-powered anomaly detection." } }
          ]}
        ]
      })}} />
    </main>
  );
}
