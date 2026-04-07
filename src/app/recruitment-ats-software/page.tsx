import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  ArrowRight, Users, FileText, CheckCircle2, ChevronDown,
  Zap, Network, Star, ShieldCheck, Smartphone, Building2,
  XCircle, Workflow, AlertTriangle, BarChart3, Calendar,
  Search, BriefcaseBusiness, UserCheck, ClipboardCheck,
  Send, Video, Globe2, Sparkles, Clock, UserPlus,
  MessageSquare, Bell, Filter, Award, Handshake,
  TrendingUp, Eye, CircleDot
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Best Recruitment & ATS Software in India | AI Resume Screening & Job Board Integration",
  description: "Hire smarter with India's top Applicant Tracking System. AI resume screening, Naukri & LinkedIn integration, interview scheduling, offer letter automation. Book a free demo.",
  keywords: "recruitment software india, ATS software, applicant tracking system, AI resume screening, Naukri integration, LinkedIn hiring, interview scheduling, offer letter automation, HRMS india, hiring platform",
  openGraph: {
    title: "Best Recruitment & ATS Software in India | Hire Smarter",
    description: "AI-powered applicant tracking with Naukri, LinkedIn & Indeed integration. Screen resumes, schedule interviews, automate offers.",
    url: 'https://hrmssoftwareinindia.com/recruitment-ats-software',
    siteName: 'HRMS Software in India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RecruitmentATSPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen font-sans overflow-hidden">

      {/* ═══════════ 1. HERO SECTION ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 p-1 pr-5 rounded-full mb-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase" style={{ backgroundColor: '#0E3B32', color: '#FFFFFF' }}>
              <Zap className="w-3.5 h-3.5 fill-current" />
              ATS Engine
            </div>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#0F172A' }}>
              AI-Powered Recruitment Platform
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 800,
            color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2.5px",
            marginBottom: "20px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto",
          }}>
            {"Hire Smarter. "}<span style={{ color: "#0E3B32" }}>Onboard Faster.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(16px, 1.8vw, 18px)", color: "#64748B",
            lineHeight: 1.7, maxWidth: "600px", marginLeft: "auto", marginRight: "auto",
            marginBottom: "32px",
          }}>
            AI resume screening, multi-board job posting to Naukri &amp; LinkedIn, automated interview scheduling, and digital offer letters — all in one ATS built for Indian hiring teams.
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

          <p style={{ fontSize: "13px", color: "#94A3B8", fontWeight: 500, marginBottom: "56px" }}>{"✓ Guided setup with recruitment expert onboarding"}</p>
        </div>

        {/* Dashboard Mockup */}
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
                    app.hrmssuite.in/recruitment
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
                      { label: "Job Openings", active: false },
                      { label: "Candidate Pipeline", active: true },
                      { label: "Interview Schedule", active: false },
                      { label: "Offer Letters", active: false },
                      { label: "Talent Pool", active: false },
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
                    <p style={{ fontSize: "10px", opacity: 0.8, lineHeight: 1.4 }}>Get AI-powered hiring insights</p>
                  </div>
                </div>

                {/* Main Content */}
                <div style={{ flex: 1, padding: "20px", minWidth: 0, background: "#fff" }}>
                  {/* Welcome bar */}
                  <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A2E" }}>Candidate Pipeline — Q1 2026</p>
                      <p style={{ fontSize: "12px", color: "#8E8EA0" }}>{"47 open positions · 1,284 applications"}</p>
                    </div>
                    <div style={{ fontSize: "10px", fontWeight: 600, padding: "4px 12px", borderRadius: "9999px", color: "#059669", background: "#D1FAE5" }}>
                      Active Hiring
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ marginBottom: "20px" }}>
                    {[
                      { label: "Open Positions", value: "47", change: "12 urgent", color: "#0EA5E9", bg: "#E0F2FE" },
                      { label: "Applications", value: "1,284", change: "+218 this week", color: "#3CB371", bg: "#D1FAE5" },
                      { label: "Avg Time to Hire", value: "18 days", change: "Down from 34", color: "#8B5CF6", bg: "#F3E8FF" },
                      { label: "Offer Acceptance", value: "87%", change: "Above industry", color: "#059669", bg: "#D1FAE5" },
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

                  {/* Two columns: Pipeline Steps + Recent Activity */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {/* Pipeline Stages — 3/5 */}
                    <div className="md:col-span-3" style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                      <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                        <div className="flex items-center gap-2">
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3CB371" }} />
                          <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E" }}>Candidate Pipeline Stages</p>
                        </div>
                        <span style={{ fontSize: "11px", color: "#3CB371", fontWeight: 600 }}>5 Stages</span>
                      </div>
                      <div className="space-y-[6px]">
                        {[
                          { task: "Sourced", status: "482", sColor: "#0EA5E9", sBg: "#E0F2FE", progress: 100 },
                          { task: "Screened (AI)", status: "341", sColor: "#8B5CF6", sBg: "#F3E8FF", progress: 71 },
                          { task: "Interview", status: "186", sColor: "#D97706", sBg: "#FEF3C7", progress: 39 },
                          { task: "Offer Sent", status: "64", sColor: "#059669", sBg: "#D1FAE5", progress: 13 },
                          { task: "Joined", status: "38", sColor: "#3CB371", sBg: "#D1FAE5", progress: 8 },
                        ].map((item) => (
                          <div key={item.task} className="flex items-center gap-3" style={{ padding: "10px 12px", borderRadius: "8px", background: "#FAFAFC", border: "1px solid #F0F0F5" }}>
                            <div style={{ width: 30, height: 30, borderRadius: "8px", background: item.sBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "11px", fontWeight: 700, color: item.sColor }}>
                              {item.progress === 100 ? "●" : "○"}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between" style={{ marginBottom: "4px" }}>
                                <p style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 600 }}>{item.task}</p>
                                <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 10px", borderRadius: "9999px", color: item.sColor, background: item.sBg, flexShrink: 0, marginLeft: 8 }}>
                                  {item.status} candidates
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
                      {/* Source Breakdown */}
                      <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "12px" }}>Source Breakdown</p>
                        <div className="space-y-[8px]">
                          {[
                            { label: "Naukri", value: "512", pct: 40, color: "#0EA5E9" },
                            { label: "LinkedIn", value: "334", pct: 26, color: "#3CB371" },
                            { label: "Indeed", value: "231", pct: 18, color: "#8B5CF6" },
                            { label: "Career Page", value: "207", pct: 16, color: "#D97706" },
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
                            { action: "Offer sent to Priya S.", time: "5 min ago", initials: "OL", bg: "#D1FAE5", color: "#059669" },
                            { action: "AI screened 42 resumes", time: "22 min ago", initials: "AI", bg: "#E0F2FE", color: "#0EA5E9" },
                            { action: "Interview scheduled (3)", time: "1 hr ago", initials: "IS", bg: "#FEF3C7", color: "#D97706" },
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

      {/* ═══════════ 2. PAIN SECTION (White BG) ═══════════ */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Header */}
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <AlertTriangle className="w-3.5 h-3.5" /> The Hidden Cost
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              What manual hiring actually costs you
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              Slow pipelines, lost candidates, and bad hires drain your budget every quarter. Here&apos;s the real picture.
            </p>
          </div>

          {/* Top stat row — 4 big numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: '40px' }}>
            {[
              { stat: '45+ days', label: 'Avg time to hire', sub: 'with manual screening', color: '#DC2626' },
              { stat: '60%', label: 'Candidates ghosted', sub: 'due to slow follow-ups', color: '#D97706' },
              { stat: '25+ hrs', label: 'Wasted per week', sub: 'on manual resume screening', color: '#9333EA' },
              { stat: '₹3.5L', label: 'Cost per bad hire', sub: 'including rehiring expenses', color: '#0EA5E9' },
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
                title: 'Resume Chaos',
                items: ['Resumes scattered across email, WhatsApp & portals', 'No standardized screening or scoring criteria', 'Duplicate profiles waste recruiter time daily'],
                icon: <AlertTriangle className="w-5 h-5" />,
                accent: '#DC2626',
                accentBg: '#FEF2F2',
              },
              {
                title: 'Interview Bottlenecks',
                items: ['Email chains to schedule one interview slot', 'Panel availability unknown until last minute', 'Candidates drop off waiting for interview dates'],
                icon: <Clock className="w-5 h-5" />,
                accent: '#D97706',
                accentBg: '#FFFBEB',
              },
              {
                title: 'Offer Letter Delays',
                items: ['Manual offer generation takes 2-3 days', 'Approval loops with HR, finance & leadership', 'Candidates accept other offers while you wait'],
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
              Automate your entire hiring pipeline in under 15 minutes.{' '}
              <Link href="/demo" style={{ color: '#3CB371', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                See how &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* --- END SECTION 2 --- */}

      {/* ═══════════ 3. FEATURES (#F8FAFC lines BG) ═══════════ */}
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

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <Sparkles className="w-3.5 h-3.5" /> Smart Recruitment
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              Everything you need to hire at scale
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              Six powerful modules designed for Indian hiring teams — from sourcing to joining.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "AI Resume Screening",
                desc: "Automatically parse, score, and rank resumes against job descriptions using AI. Screen 500+ applications in minutes.",
                icon: <Search className="w-5 h-5" />,
                iconBg: '#EFF6FF', iconColor: '#2563EB',
              },
              {
                title: "Multi-Channel Job Posting",
                desc: "Post to Naukri, LinkedIn, Indeed, Google Jobs, and your career page from one click. Unified candidate inbox.",
                icon: <Globe2 className="w-5 h-5" />,
                iconBg: '#EAF8F0', iconColor: '#059669',
              },
              {
                title: "Interview Scheduling",
                desc: "Auto-detect panel availability. Send calendar invites with Zoom/Meet links. Candidates self-book preferred slots.",
                icon: <Calendar className="w-5 h-5" />,
                iconBg: '#F0FDFA', iconColor: '#0D9488',
              },
              {
                title: "Candidate Scorecards",
                desc: "Structured evaluation forms for every interview round. Compare candidates objectively with weighted scoring.",
                icon: <ClipboardCheck className="w-5 h-5" />,
                iconBg: '#FFF7ED', iconColor: '#EA580C',
              },
              {
                title: "Offer Letter Automation",
                desc: "Generate branded offer letters with dynamic CTC breakdowns. Digital acceptance with e-signatures and audit trails.",
                icon: <Send className="w-5 h-5" />,
                iconBg: '#FAF5FF', iconColor: '#9333EA',
              },
              {
                title: "Analytics Dashboard",
                desc: "Track time-to-hire, source effectiveness, stage drop-offs, and recruiter performance with real-time charts.",
                icon: <BarChart3 className="w-5 h-5" />,
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

      {/* ═══════════ 4. HOW IT WORKS (#F0FDF4) ═══════════ */}
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
              From job posting to offer acceptance
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              Four precise steps. Fewer handoffs. Faster, smarter hiring decisions.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Post Jobs',
                desc: 'Create a requisition and publish to Naukri, LinkedIn, Indeed, and Google Jobs in one click.',
                icon: <BriefcaseBusiness className="w-6 h-6" />,
              },
              {
                step: '02',
                title: 'Screen & Shortlist',
                desc: 'AI parses resumes, ranks by fitment, and auto-shortlists top candidates for your review.',
                icon: <Filter className="w-6 h-6" />,
              },
              {
                step: '03',
                title: 'Interview & Evaluate',
                desc: 'Auto-schedule interviews with panel availability. Use scorecards for structured feedback.',
                icon: <Video className="w-6 h-6" />,
              },
              {
                step: '04',
                title: 'Offer & Hire',
                desc: 'Generate CTC-based offer letters. Track acceptance digitally and trigger onboarding.',
                icon: <Handshake className="w-6 h-6" />,
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

      {/* ═══════════ 5. INTEGRATIONS (Dark #102D23) ═══════════ */}
      <section className="py-24 text-white" style={{ background: '#102D23' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(247,246,244,0.12)', border: '1px solid rgba(247,246,244,0.2)', color: '#E6EDF3' }}>
              <Network className="w-4 h-4" /> Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#F8FAFC' }}>
              Connected to India&apos;s Top Hiring Channels
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B9C7D6' }}>
              Seamless connections with the job boards and tools Indian recruiters already use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Naukri", category: "Job Board", logo: "/integration/int-naukri.webp" },
              { name: "LinkedIn", category: "Professional Network", logo: "/integration/int-linkedin.webp" },
              { name: "Indeed", category: "Job Board", logo: "/integration/int-indeed.webp" },
              { name: "Google Jobs", category: "Search Integration", logo: "/integration/int-googlejobs.webp" },
              { name: "Microsoft Teams", category: "Collaboration", logo: "/integration/int-msteams.webp" },
              { name: "Zoom", category: "Video Interview", logo: "/integration/int-zoom.webp" },
              { name: "Google Meet", category: "Video Interview", logo: "/integration/int-gmeet.webp" },
              { name: "HRMS Core", category: "Employee Onboarding", logo: "/integration/int-hrmscore.webp" },
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

      {/* ═══════════ 6. TRUST (Pastel Gradient) ═══════════ */}
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
              Proven Recruitment Results
            </h2>
          </div>

          {/* 3 stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { metric: "10,000+", label: "Hires Completed", desc: "Across IT, manufacturing, and services" },
              { metric: "18 days", label: "Avg Time to Hire", desc: "Down from 45+ days with manual process" },
              { metric: "87%", label: "Offer Acceptance Rate", desc: "Industry average is 65%" },
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
              { name: "GDPR Compliant", desc: "Candidate Privacy" },
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
                quote: "We cut our hiring cycle from 42 days to 16 days. The AI screening alone saves our recruiters 20+ hours per week on resume shortlisting.",
                name: "Ananya Krishnan",
                role: "Talent Acquisition Lead, IT Services Firm",
              },
              {
                quote: "The Naukri and LinkedIn integration means we no longer juggle multiple portals. One dashboard, all candidates, complete visibility.",
                name: "Rajesh Gupta",
                role: "HR Director, Manufacturing Company",
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

      {/* ═══════════ 7. COMPARISON (Lime #E3FE7A) ═══════════ */}
      <section className="py-24" style={{ background: '#E3FE7A' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span
              className="inline-flex items-center gap-2 mb-5"
              style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              <CheckCircle2 className="w-3.5 h-3.5" /> Compare &amp; Choose
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              See the difference at a glance
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              How our ATS compares to spreadsheets and legacy recruitment tools.
            </p>
          </div>

          {/* 3-Column Card Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 1: Manual/Spreadsheet */}
            <div style={{
              padding: '32px 28px',
              borderRadius: '24px',
              background: '#FFFFFF',
              border: 'none',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
            }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Manual / Spreadsheet</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#DC2626', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#DC2626', fontWeight: 700 }}>No pipeline visibility · Lost candidates</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  'AI Screening',
                  'Multi-Board Posting',
                  'Auto Scheduling',
                  'Scorecards',
                  'Offer Automation',
                  'Analytics',
                  'Mobile App',
                  'Compliance',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <XCircle className="w-4 h-4 shrink-0" style={{ color: '#E2E8F0' }} />
                    <span style={{ fontSize: '14px', color: '#94A3B8' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: HRMS ATS — HERO card (dark, 3D lift) */}
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
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#86EFAC', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>HRMS ATS Software</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(207,242,94,0.2)', border: '1px solid rgba(207,242,94,0.4)', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CFF25E', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#CFF25E', fontWeight: 700 }}>Live in 2–4 days · Free 14-day trial</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.12)', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  'AI Screening',
                  'Multi-Board Posting',
                  'Auto Scheduling',
                  'Scorecards',
                  'Offer Automation',
                  'Full Analytics',
                  'Mobile App',
                  'GDPR & Compliance',
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

            {/* Card 3: Legacy ATS */}
            <div style={{
              padding: '32px 28px',
              borderRadius: '24px',
              background: '#FFFFFF',
              border: 'none',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
            }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Legacy ATS</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EA580C', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#EA580C', fontWeight: 700 }}>Slow setup · Limited Indian job boards</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#E2E8F0', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  { text: 'AI Screening', status: null },
                  { text: 'Multi-Board Posting', status: 'Limited' },
                  { text: 'Auto Scheduling', status: 'Manual' },
                  { text: 'Scorecards', status: 'Basic' },
                  { text: 'Offer Automation', status: 'Partial' },
                  { text: 'Analytics', status: 'Basic' },
                  { text: 'Mobile App', status: null },
                  { text: 'Compliance', status: 'Limited' },
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
            Based on industry averages for companies hiring 50+ roles/year. Pricing may vary.
          </p>
        </div>
      </section>
      {/* --- END SECTION 7 --- */}

      {/* ═══════════ 8. MOBILE (Dark #102D23) ═══════════ */}
      <section style={{ padding: "88px 0", background: "#102D23", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, borderRadius: "50%", background: "rgba(96,209,132,0.08)" }} />
        <div style={{ position: "absolute", left: -120, bottom: -120, width: 280, height: 280, borderRadius: "50%", background: "rgba(207,242,94,0.06)" }} />
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", border: "1px solid rgba(134,239,172,0.22)", color: "#86EFAC", fontSize: "12px", fontWeight: 700, marginBottom: "16px" }}>Mobile Recruiting</span>
              <h2 style={{ fontSize: "clamp(30px, 3.9vw, 46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "18px", color: "#F8FAFC", letterSpacing: "-0.03em", maxWidth: "620px" }}>
                Recruit from anywhere.
                <span style={{ display: "block", color: "#CFF25E", marginTop: "8px" }}>
                  Review, schedule, and hire on the go.
                </span>
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "26px", maxWidth: "620px" }}>
                Recruiters can review candidate profiles, approve shortlists, schedule interviews, send offers, and get real-time notifications for new applications — all from their mobile device.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: "24px", maxWidth: "640px" }}>
                {["Candidate status", "Interview schedule", "Offer tracking", "Push notifications"].map((item) => (
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
                {["Shortlist on the go", "One-tap interview confirm", "Offer letter approval", "Real-time application alerts"].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#CFF25E" }} />
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.76)", lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/demo" className="cta-base cta-secondary cta-md">
                Try Mobile ATS <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
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
                          <p style={{ fontSize: "10px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>Recruitment Hub</p>
                          <p style={{ fontSize: "20px", color: "#102D23", fontWeight: 800, marginTop: "2px" }}>Hiring Q1</p>
                        </div>
                        <div style={{ width: 40, height: 40, borderRadius: "14px", background: "#EAF8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#102D23" }}>
                          <BriefcaseBusiness className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Active pipeline card */}
                      <div style={{ padding: "16px", borderRadius: "22px", background: "linear-gradient(135deg, #102D23 0%, #1A3F32 100%)", border: "1px solid rgba(96,209,132,0.3)", marginBottom: "14px" }}>
                        <p style={{ fontSize: "10px", color: "#BFEA4D", marginBottom: "4px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Active pipeline</p>
                        <p style={{ fontSize: "34px", fontWeight: 800, color: "#F8FAFC", lineHeight: 1 }}>1,284</p>
                        <div className="flex items-center justify-between" style={{ marginTop: "10px" }}>
                          <p style={{ fontSize: "11px", color: "#60D184", fontWeight: 700 }}>47 open positions</p>
                          <span style={{ fontSize: "10px", padding: "4px 10px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", color: "#60D184", fontWeight: 700, border: "1px solid rgba(96,209,132,0.25)" }}>Live</span>
                        </div>
                      </div>

                      {/* Mini stat cards */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Interviews</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>12</p>
                          <p style={{ fontSize: "10px", color: "#64748B", marginTop: "2px" }}>scheduled today</p>
                        </div>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Offers pending</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>8</p>
                          <p style={{ fontSize: "10px", color: "#60D184", marginTop: "2px", fontWeight: 700 }}>action needed</p>
                        </div>
                      </div>

                      {/* Today&apos;s interviews */}
                      <div style={{ padding: "14px", borderRadius: "18px", border: "1px solid #DDE7DE", background: "#FFFFFF", boxShadow: "0 10px 24px rgba(15,23,42,0.04)" }}>
                        <div className="flex items-center justify-between" style={{ marginBottom: "10px" }}>
                          <p style={{ fontSize: "12px", fontWeight: 800, color: "#102D23" }}>Today&apos;s Interviews</p>
                          <span style={{ fontSize: "10px", fontWeight: 700, color: "#64748B" }}>3 upcoming</span>
                        </div>
                        <div className="space-y-3">
                          {[
                            { label: "Priya S. — Frontend", val: "10:30 AM" },
                            { label: "Rahul M. — Backend", val: "2:00 PM" },
                            { label: "Sneha K. — Design", val: "4:30 PM" },
                          ].map((r) => (
                            <div key={r.label} className="flex justify-between" style={{ fontSize: "12px" }}>
                              <span style={{ color: "#64748B" }}>{r.label}</span>
                              <span style={{ fontWeight: 800, color: "#102D23" }}>{r.val}</span>
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
                          View full schedule
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

      {/* ═══════════ 9. BEFORE/AFTER (#FAF9F5) ═══════════ */}
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
              What changes when hiring runs{' '}
              <span style={{ color: '#3CB371' }}>itself</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#64748B', lineHeight: 1.75, maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
              Five areas where automation replaces hours of manual recruiting work with single-click precision.
            </p>
          </div>

          {/* Main 2-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: Compact advantage cards */}
            <div className="flex flex-col gap-4">
              {[
                { num: '01', title: 'Resume Processing', before: 'Manual review of 500+ resumes per role', after: 'AI screens, scores, and ranks in under 2 minutes', icon: <Search className="w-5 h-5" /> },
                { num: '02', title: 'Job Posting', before: 'Post one-by-one on each portal separately', after: 'Multi-board posting to Naukri, LinkedIn, Indeed in one click', icon: <Globe2 className="w-5 h-5" /> },
                { num: '03', title: 'Scheduling', before: 'Endless email chains to find interview slots', after: 'Auto-slot matching with calendar integration', icon: <Calendar className="w-5 h-5" /> },
                { num: '04', title: 'Evaluation', before: 'Gut feel and unstructured interview notes', after: 'Weighted scorecards with objective comparison', icon: <ClipboardCheck className="w-5 h-5" /> },
                { num: '05', title: 'Offer Process', before: 'Manual document creation and approval loops', after: 'Digital offer letters with e-sign and CTC builder', icon: <Send className="w-5 h-5" /> },
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

            {/* RIGHT: Premium dashboard mockup */}
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
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginLeft: '8px' }}>recruitment-engine</span>
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
                        <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Q1 2026 Hiring</p>
                        <p style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>47 Roles</p>
                      </div>
                      <div style={{ padding: '6px 14px', borderRadius: '999px', background: '#D1FAE5', color: '#059669', fontSize: '11px', fontWeight: 700 }}>
                        On Track
                      </div>
                    </div>

                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-3" style={{ marginBottom: '20px' }}>
                      {[
                        { label: 'Time to Hire', value: '18d', color: '#059669' },
                        { label: 'Acceptance', value: '87%', color: '#0EA5E9' },
                        { label: 'AI Screened', value: '1,284', color: '#8B5CF6' },
                      ].map((kpi) => (
                        <div key={kpi.label} style={{ padding: '14px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                          <p style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{kpi.label}</p>
                          <p style={{ fontSize: '20px', fontWeight: 800, color: kpi.color, marginTop: '4px' }}>{kpi.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Pipeline status */}
                    <div style={{ padding: '16px', borderRadius: '14px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Pipeline Status</p>
                      <div className="space-y-2">
                        {[
                          { task: 'Sourced — 482 candidates', done: true },
                          { task: 'AI Screened — 341 shortlisted', done: true },
                          { task: 'Interviews — 186 scheduled', done: true },
                          { task: 'Offers Sent — 64 candidates', done: true },
                          { task: 'Joined — 38 confirmed', done: true },
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
                        <UserPlus className="w-4 h-4" style={{ color: '#CFF25E' }} />
                        <span style={{ fontSize: '12px', color: '#E2E8F0', fontWeight: 600 }}>Onboarding ready</span>
                      </div>
                      <span style={{ fontSize: '11px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(207,242,94,0.15)', color: '#CFF25E', fontWeight: 700, border: '1px solid rgba(207,242,94,0.25)' }}>Auto-Trigger</span>
                    </div>
                  </div>
                </div>

                {/* Floating stat badges */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 600 }}>
                    60% faster hiring
                  </div>
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#0E3B32', fontSize: '12px', fontWeight: 600 }}>
                    Zero candidate drop-off
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

      {/* ═══════════ 10. CTA (Dark #102D23) ═══════════ */}
      <section
        className="relative overflow-hidden py-24"
        style={{ background: '#102D23' }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,209,132,0.12) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(207,242,94,0.08) 0%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span
                className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em]"
                style={{ background: 'rgba(96,209,132,0.15)', color: '#86EFAC', border: '1px solid rgba(134,239,172,0.22)' }}
              >
                <UserCheck className="h-4 w-4" /> Talk to an Expert
              </span>

              <h2
                style={{ fontSize: 'clamp(32px, 3.8vw, 52px)', fontWeight: 800, color: '#F8FAFC', lineHeight: 1.05, letterSpacing: '-0.04em' }}
              >
                Transform Your Hiring
                <span className="block" style={{ color: '#CFF25E' }}>
                  Starting Today
                </span>
              </h2>

              <p className="mt-5 max-w-[520px] text-lg leading-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Get a customized walkthrough of how our ATS handles your recruitment volume,
                multi-channel sourcing, and offer management workflows.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/demo"
                  className="cta-base cta-primary cta-lg"
                >
                  Book a Free Demo
                  <span className="cta-arrow">
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="cta-base cta-secondary cta-lg"
                >
                  Call Us Now
                  <span className="cta-arrow">
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </span>
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black" style={{ color: '#CFF25E' }}>10,000+</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>hires completed</span>
                </div>
                <div className="h-6 w-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className="text-yellow-400 text-sm">&#9733;</span>
                  ))}
                  <span className="ml-1 text-sm font-bold" style={{ color: '#F8FAFC' }}>4.9/5</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[440px]">
                <div
                  className="relative rounded-[30px] border p-8"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                    borderColor: 'rgba(255,255,255,0.1)',
                    boxShadow: '0 28px 70px rgba(0,0,0,0.3)',
                  }}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ background: 'rgba(96,209,132,0.15)', border: '1px solid rgba(134,239,172,0.25)' }}
                    >
                      <UserCheck className="h-7 w-7" style={{ color: '#86EFAC' }} />
                    </div>
                    <div>
                      <p className="text-base font-extrabold" style={{ color: '#F8FAFC' }}>Recruitment Consultant</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Available Mon-Sat, 9AM-7PM IST</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: <Search className="h-5 w-5" />, text: 'Audit your current hiring process' },
                      { icon: <BarChart3 className="h-5 w-5" />, text: 'Identify pipeline bottlenecks' },
                      { icon: <TrendingUp className="h-5 w-5" />, text: 'Show exact time-to-hire savings' },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="flex items-start gap-3 rounded-xl border px-4 py-3.5"
                        style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
                      >
                        <div
                          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                          style={{ background: 'rgba(96,209,132,0.15)', color: '#86EFAC' }}
                        >
                          {item.icon}
                        </div>
                        <p className="text-sm font-semibold leading-relaxed" style={{ color: '#E2E8F0' }}>{item.text}</p>
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

      {/* ═══════════ 11. FAQ ═══════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "14px" }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "#F1F5F9", color: "#475569", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Everything You Need to Know About ATS
            </h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Find answers to common questions about applicant tracking, AI screening, and getting started.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { q: "What is an Applicant Tracking System (ATS)?", a: "An ATS is a recruitment platform that automates the entire hiring lifecycle — from job posting and resume collection to interview scheduling, evaluation, and offer management. It replaces spreadsheets and email-based tracking with a centralized candidate pipeline." },
              { q: "How does AI resume screening work?", a: "Our AI engine parses uploaded resumes, extracts key skills, experience, and qualifications, then scores each candidate against the job description. It ranks applicants by fitment percentage so recruiters can focus on the top matches instantly." },
              { q: "Does the ATS integrate with Naukri and LinkedIn?", a: "Yes. You can post jobs to Naukri, LinkedIn, Indeed, and Google Jobs from a single dashboard. Applications from all channels flow into one unified inbox, eliminating portal-hopping." },
              { q: "Is candidate data GDPR compliant?", a: "Absolutely. All candidate data is encrypted at rest and in transit. The platform supports consent management, data retention policies, and right-to-erasure requests to meet GDPR and Indian data privacy requirements." },
              { q: "How quickly can we go live with the ATS?", a: "Most teams are live within 3-5 business days. Our onboarding team handles job template setup, user roles, integration configuration, and data migration from your existing system." },
              { q: "How does interview scheduling automation work?", a: "The system syncs with Google Calendar and Outlook to detect panel availability. Candidates receive self-booking links with available slots. Zoom or Google Meet links are auto-generated and attached to calendar invites." },
              { q: "Can I automate offer letters?", a: "Yes. Create branded offer letter templates with dynamic CTC breakdowns, joining dates, and terms. Offers are sent digitally for e-signature acceptance, with full audit trails and version tracking." },
              { q: "Does the ATS support compliance and audit trails?", a: "Yes. Every action — resume upload, status change, interview feedback, offer sent — is logged with timestamps and user attribution. This ensures complete audit readiness for internal and regulatory compliance." },
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
          {
            "@type": "SoftwareApplication",
            "name": "HRMS Software in India - Recruitment & ATS Module",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "description": "AI-powered Applicant Tracking System for Indian businesses. Features AI resume screening, multi-channel job posting, interview scheduling, candidate scorecards, and offer letter automation.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "description": "Free trial available"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "3200",
              "bestRating": "5"
            },
            "featureList": "AI Resume Screening, Multi-Channel Job Posting, Interview Scheduling, Candidate Scorecards, Offer Letter Automation, Analytics Dashboard, Mobile App, GDPR Compliance"
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is an Applicant Tracking System (ATS)?", "acceptedAnswer": { "@type": "Answer", "text": "An ATS is a recruitment platform that automates the entire hiring lifecycle from job posting and resume collection to interview scheduling, evaluation, and offer management." } },
              { "@type": "Question", "name": "How does AI resume screening work?", "acceptedAnswer": { "@type": "Answer", "text": "Our AI engine parses uploaded resumes, extracts key skills, experience, and qualifications, then scores each candidate against the job description and ranks applicants by fitment percentage." } },
              { "@type": "Question", "name": "Does the ATS integrate with Naukri and LinkedIn?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can post jobs to Naukri, LinkedIn, Indeed, and Google Jobs from a single dashboard. Applications from all channels flow into one unified inbox." } },
              { "@type": "Question", "name": "Is candidate data GDPR compliant?", "acceptedAnswer": { "@type": "Answer", "text": "All candidate data is encrypted at rest and in transit. The platform supports consent management, data retention policies, and right-to-erasure requests." } },
              { "@type": "Question", "name": "How quickly can we go live with the ATS?", "acceptedAnswer": { "@type": "Answer", "text": "Most teams are live within 3-5 business days. Our onboarding team handles job template setup, user roles, integration configuration, and data migration." } },
              { "@type": "Question", "name": "How does interview scheduling automation work?", "acceptedAnswer": { "@type": "Answer", "text": "The system syncs with Google Calendar and Outlook to detect panel availability. Candidates receive self-booking links with available slots and auto-generated video call links." } },
              { "@type": "Question", "name": "Can I automate offer letters?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Create branded offer letter templates with dynamic CTC breakdowns. Offers are sent digitally for e-signature acceptance with full audit trails." } },
              { "@type": "Question", "name": "Does the ATS support compliance and audit trails?", "acceptedAnswer": { "@type": "Answer", "text": "Every action is logged with timestamps and user attribution, ensuring complete audit readiness for internal and regulatory compliance." } }
            ]
          }
        ]
      })}} />
    </main>
  );
}
