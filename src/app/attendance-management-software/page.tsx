import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight, Clock, MapPin, ShieldCheck, Users, FileText, CheckCircle2,
  ChevronDown, Zap, Network, Star, Smartphone, Building2, XCircle,
  Fingerprint, Globe, Timer, TrendingUp, AlertTriangle, BarChart3,
  ScanFace, Workflow, Calendar, Eye, Receipt, CreditCard, Calculator
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Best Attendance Management Software in India | Biometric, GPS & Geo-Fencing",
  description: "Automate attendance tracking for Indian businesses. Biometric integration, GPS tracking, geo-fencing, shift rostering, overtime calculation, and Shops & Establishments Act compliance.",
  keywords: "attendance management software india, biometric attendance, geo-fencing attendance, GPS attendance tracking, shift management, overtime calculation, attendance regularization, work from home attendance, Shops and Establishments Act",
  openGraph: {
    title: "Best Attendance Management Software in India | Zero Proxy Attendance",
    description: "Biometric, GPS, geo-fencing attendance tracking with shift rostering and Indian labour law compliance.",
    url: 'https://hrmssoftwareinindia.com/attendance-management-software',
    siteName: 'HRMS Software in India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AttendanceManagementPage() {
  return (
    <main style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen font-sans overflow-hidden">

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-3 p-1 pr-5 rounded-full mb-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase" style={{ backgroundColor: '#0E3B32', color: '#FFFFFF' }}>
              <Fingerprint className="w-3.5 h-3.5" />
              Attendance Engine
            </div>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#0F172A' }}>Zero Proxy, 100% Accurate</span>
          </div>

          <h1 style={{ fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 800, color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2.5px", marginBottom: "20px", maxWidth: "880px", marginLeft: "auto", marginRight: "auto" }}>
            {"Attendance That "}
            <span style={{ color: "var(--rose-dark)" }}>Tracks Itself.</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 1.8vw, 18px)", color: "#64748B", lineHeight: 1.7, maxWidth: "620px", marginLeft: "auto", marginRight: "auto", marginBottom: "32px" }}>
            Biometric, GPS, geo-fencing, and facial recognition, all synced to payroll in real time. No manual registers, no buddy punching, no reconciliation headaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ marginBottom: "28px" }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Get Started for Free <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              See How it Works <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
          <p style={{ fontSize: "13px", color: "#94A3B8", fontWeight: 500, marginBottom: "56px" }}>Biometric ready | Geo-fencing | Payroll sync</p>
        </div>

        {/* Dashboard Mockup */}
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6" style={{ paddingBottom: "88px", position: "relative", zIndex: 1 }}>
          <div
            className="dashboard-3d"
            style={{
              borderRadius: "28px",
              overflow: "hidden",
              background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.96) 100%)",
              border: "1px solid rgba(226,232,240,0.9)",
              boxShadow: "0 40px 100px rgba(14,59,50,0.10), 0 8px 24px rgba(15,23,42,0.05)",
            }}
          >
            <div style={{ padding: "14px 18px", borderBottom: "1px solid #E2E8F0", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(10px)" }}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex gap-[6px] shrink-0">
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA42" }} />
                  </div>
                  <div style={{ background: "#FFFFFF", borderRadius: "999px", padding: "6px 14px", border: "1px solid #E2E8F0", fontSize: "11px", color: "#64748B", fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    app.hrmssuite.in/attendance-live
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div style={{ padding: "6px 12px", borderRadius: "999px", background: "#EAF8F0", color: "#166534", fontSize: "11px", fontWeight: 700 }}>
                    Live sync active
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
                    { label: "Live Tracking", active: true },
                    { label: "Geo-Fence", active: false },
                    { label: "Shift Roster", active: false },
                    { label: "Regularization", active: false },
                    { label: "Overtime", active: false },
                    { label: "Reports", active: false },
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
                  <p style={{ fontWeight: 700, fontSize: "12px", marginBottom: 4 }}>Today&apos;s workforce</p>
                  <p style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1, marginBottom: 6 }}>1,189</p>
                  <p style={{ fontSize: "11px", opacity: 0.78, lineHeight: 1.5 }}>present across 4 locations with live geo and biometric sync</p>
                </div>
              </div>

              <div style={{ flex: 1, padding: "22px", minWidth: 0, background: "linear-gradient(180deg, #FFFFFF 0%, #FCFDFC 100%)" }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4" style={{ marginBottom: "18px" }}>
                  <div>
                    <p style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A", marginBottom: 4 }}>Attendance dashboard | March 2026</p>
                    <p style={{ fontSize: "12px", color: "#64748B" }}>1,247 employees | 3 active shifts | 4 monitored locations</p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "6px 12px", borderRadius: "9999px", color: "#059669", background: "#D1FAE5" }}>
                      95.3% present
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: 700, padding: "6px 12px", borderRadius: "9999px", color: "#0F766E", background: "#CCFBF1" }}>
                      Payroll-ready feed
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ marginBottom: "18px" }}>
                  {[
                    { label: "Checked In", value: "1,189", hint: "95.3% tracked", color: "#059669", bg: "#ECFDF5" },
                    { label: "Geo Verified", value: "842", hint: "field punches", color: "#0EA5E9", bg: "#E0F2FE" },
                    { label: "Leave Cases", value: "35", hint: "approved and pending", color: "#7C3AED", bg: "#F3E8FF" },
                    { label: "Exceptions", value: "23", hint: "late and missing", color: "#D97706", bg: "#FEF3C7" },
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
                        <p style={{ fontSize: "13px", fontWeight: 800, color: "#0F172A" }}>Live punch stream</p>
                        <p style={{ fontSize: "11px", color: "#94A3B8", marginTop: "2px" }}>Biometric, GPS, face ID, and geo-fence entries updating live</p>
                      </div>
                      <span style={{ fontSize: "10px", fontWeight: 800, padding: "5px 10px", borderRadius: "999px", color: "#166534", background: "#EAF8F0" }}>
                        4 sources active
                      </span>
                    </div>

                    <div className="space-y-[8px]">
                      {[
                        { name: "Rahul S.", dept: "Warehouse", time: "09:02 AM", method: "Biometric", status: "On Time", sC: "#059669", sB: "#D1FAE5" },
                        { name: "Priya M.", dept: "Field Sales", time: "09:18 AM", method: "GPS", status: "Late", sC: "#D97706", sB: "#FEF3C7" },
                        { name: "Amit K.", dept: "Projects", time: "08:55 AM", method: "Geo-Fence", status: "On Time", sC: "#059669", sB: "#D1FAE5" },
                        { name: "Sneha R.", dept: "Support", time: "09:31 AM", method: "Face ID", status: "Late", sC: "#D97706", sB: "#FEF3C7" },
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
                              <span style={{ fontSize: "10px", color: "#64748B" }}>{item.dept}</span>
                              <span style={{ fontSize: "10px", color: "#64748B" }}>In: {item.time}</span>
                              <span style={{ fontSize: "10px", color: "#0E7490", fontWeight: 600 }}>{item.method}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "18px", border: "1px solid #E2E8F0", boxShadow: "0 10px 30px rgba(15,23,42,0.05)" }}>
                      <p style={{ fontSize: "13px", fontWeight: 800, color: "#0F172A", marginBottom: "12px" }}>Shift distribution</p>
                      <div className="space-y-[10px]">
                        {[
                          { label: "General shift", value: "847", pct: 68, color: "#0E3B32" },
                          { label: "Morning shift", value: "215", pct: 17, color: "#60D184" },
                          { label: "Night shift", value: "185", pct: 15, color: "#0EA5E9" },
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
                          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>Attendance intelligence</p>
                          <p style={{ fontSize: "20px", fontWeight: 800, marginTop: "2px" }}>Payroll sync ready</p>
                        </div>
                        <div style={{ width: 42, height: 42, borderRadius: "14px", background: "rgba(255,255,255,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Workflow className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="space-y-[9px]">
                        {[
                          "Late deductions auto-calculated",
                          "LOP days pre-validated",
                          "Overtime hours pushed to payroll",
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

      {/* ═══════════ 2. PAIN — STAT CARDS ═══════════ */}
      <section className="py-24" style={{ background: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="inline-flex items-center gap-2 mb-5" style={{ padding: '6px 16px', borderRadius: '999px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#DC2626', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <AlertTriangle className="w-3.5 h-3.5" /> The Hidden Cost
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              What manual attendance tracking actually costs you
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              Buddy punching, lost registers, and payroll mismatches add up every single month.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: '40px' }}>
            {[
              { stat: '5-8%', label: 'Payroll leakage', sub: 'from buddy punching & time theft', color: '#DC2626' },
              { stat: '20+ hrs', label: 'Monthly reconciliation', sub: 'matching registers to payroll', color: '#D97706' },
              { stat: '₹4.2L', label: 'Lost per year', sub: 'in overtime errors alone', color: '#9333EA' },
              { stat: '67%', label: 'Disputes monthly', sub: 'from missing or wrong punch data', color: '#0EA5E9' },
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
              { title: 'Buddy Punching', items: ['Employees punch in for absent colleagues', 'No way to verify actual presence', 'Payroll inflated by ghost attendance'], icon: <Fingerprint className="w-5 h-5" />, accent: '#DC2626', accentBg: '#FEF2F2' },
              { title: 'Manual Registers', items: ['Paper registers lost or tampered', 'HR spends days on data entry', 'Mismatch between register and payroll'], icon: <FileText className="w-5 h-5" />, accent: '#D97706', accentBg: '#FFFBEB' },
              { title: 'Overtime Chaos', items: ['No accurate tracking of extra hours', 'Disputes between employees and managers', 'Compliance violations under Shops Act'], icon: <Timer className="w-5 h-5" />, accent: '#9333EA', accentBg: '#FAF5FF' },
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
            <p style={{ fontSize: '15px', color: '#64748B' }}>Eliminate all of this with automated attendance.{' '}<Link href="/demo" style={{ color: '#3CB371', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '3px' }}>See how →</Link></p>
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
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              Complete attendance tracking for Indian businesses
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              Biometric to geo-fencing — every method, every shift, every location.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Biometric Integration", desc: "Fingerprint, face recognition, and iris scanners. Real-time sync with zero buddy punching.", icon: <Fingerprint className="w-5 h-5" />, iconBg: '#EFF6FF', iconColor: '#2563EB' },
              { title: "GPS & Geo-Fencing", desc: "Track field employees with live GPS. Auto-punch when entering/exiting geo-fenced zones.", icon: <MapPin className="w-5 h-5" />, iconBg: '#EAF8F0', iconColor: '#059669' },
              { title: "Shift Rostering", desc: "Rotate shifts across teams, locations, and weeks. Auto-assign with conflict detection.", icon: <Calendar className="w-5 h-5" />, iconBg: '#F0FDFA', iconColor: '#0D9488' },
              { title: "Overtime Calculation", desc: "Auto-calculate OT based on Shops Act rules. Daily, weekly, and monthly thresholds.", icon: <Timer className="w-5 h-5" />, iconBg: '#FAF5FF', iconColor: '#9333EA' },
              { title: "WFH & Hybrid Tracking", desc: "Web check-in, activity logs, and productivity snapshots for remote employees.", icon: <Globe className="w-5 h-5" />, iconBg: '#FDF2F8', iconColor: '#DB2777' },
              { title: "Payroll Auto-Sync", desc: "Attendance feeds directly into payroll. LOP, late deductions, OT pay — all automated.", icon: <TrendingUp className="w-5 h-5" />, iconBg: '#FFF7ED', iconColor: '#EA580C' },
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
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>
              From punch-in to payroll in 4 steps
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>Fully automated attendance lifecycle — zero manual intervention.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Multi-Mode Capture', desc: 'Biometric, face ID, GPS, geo-fence, or web check-in — pick what fits each location.', icon: <Fingerprint className="w-6 h-6" /> },
              { step: '02', title: 'Real-Time Processing', desc: 'Every punch validated instantly. Late marks, half-days, and regularizations auto-applied.', icon: <Zap className="w-6 h-6" /> },
              { step: '03', title: 'Shift & OT Engine', desc: 'Roster assignments, shift swaps, and overtime calculated per Shops & Establishments Act.', icon: <Timer className="w-6 h-6" /> },
              { step: '04', title: 'Payroll Feed', desc: 'Clean attendance data flows to payroll. LOP, OT, deductions — all pre-calculated.', icon: <TrendingUp className="w-6 h-6" /> },
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
              <Network className="w-4 h-4" /> Device & Software Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#F8FAFC' }}>Works with your existing hardware</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B9C7D6' }}>Biometric devices, access control systems, and payroll tools — all connected.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "ZKTeco", desc: "Biometric devices" }, { name: "eSSL", desc: "Fingerprint scanners" },
              { name: "HikVision", desc: "Face recognition" }, { name: "Suprema", desc: "Access control" },
              { name: "Payroll Module", desc: "Auto-sync" }, { name: "HRMS Core", desc: "Employee data" },
              { name: "Google Workspace", desc: "Calendar sync" }, { name: "Microsoft Teams", desc: "Notifications" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.34) 0%, rgba(15,23,42,0.56) 100%)', border: '1px solid rgba(148,163,184,0.4)' }}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #D1FAE5' }}>
                  <Fingerprint className="w-6 h-6" style={{ color: '#102D23' }} />
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
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em' }}>De-risk your attendance management decision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { metric: "1.2M+", label: "Punches Daily", desc: "Processed across 500+ companies" },
              { metric: "99.8%", label: "Accuracy Rate", desc: "Zero untracked attendance" },
              { metric: "15+ hrs", label: "Saved Monthly", desc: "Per HR team on reconciliation" },
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
              { name: "Shops & Establishments", desc: "Act compliant" }, { name: "ISO 27001", desc: "Security certified" },
              { name: "GDPR Ready", desc: "Data privacy" }, { name: "256-bit Encryption", desc: "Data protection" },
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
              { quote: "Buddy punching dropped to zero the week we installed biometric sync. Payroll accuracy went from 92% to 99.8%.", name: "Vikram Sinha", role: "HR Director, Manufacturing Company" },
              { quote: "Managing 3 shifts across 4 locations was a nightmare. The auto-rostering and geo-fencing changed everything.", name: "Deepa Nair", role: "People Ops, Retail Chain" },
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
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 44px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.12, letterSpacing: '-0.03em', marginBottom: '14px' }}>Automated attendance vs the old way</h2>
            <p style={{ fontSize: '16px', color: '#3D5A1E', lineHeight: 1.7, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>See why companies are ditching registers and spreadsheets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div style={{ padding: '32px 28px', borderRadius: '24px', background: '#FFFFFF', boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Manual / Registers</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '6px 12px', marginTop: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#DC2626', flexShrink: 0 }} />
                  <span style={{ fontSize: '12px', color: '#DC2626', fontWeight: 700 }}>Buddy punching · No geo-verification</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {['Biometric Integration', 'GPS & Geo-Fencing', 'Auto Shift Rostering', 'Overtime Calculation', 'WFH Tracking', 'Payroll Auto-Sync', 'Regularization Flow', 'Compliance Reports'].map((f) => (
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
                  <span style={{ fontSize: '12px', color: '#CFF25E', fontWeight: 700 }}>Live in 2–3 days · Free 14-day trial</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.12)', marginBottom: '20px' }} />
              <div className="space-y-4">
                {['Biometric Integration', 'GPS & Geo-Fencing', 'Auto Shift Rostering', 'Overtime Calculation', 'WFH Tracking', 'Payroll Auto-Sync', 'Regularization Flow', 'Compliance Reports'].map((f) => (
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
                  <span style={{ fontSize: '12px', color: '#EA580C', fontWeight: 700 }}>Hardware-locked · Costly replacements</span>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: '#F1F5F9', marginBottom: '20px' }} />
              <div className="space-y-4">
                {[
                  { t: 'Biometric Integration', s: 'Basic' }, { t: 'GPS & Geo-Fencing', s: null }, { t: 'Auto Shift Rostering', s: 'Manual' },
                  { t: 'Overtime Calculation', s: 'Partial' }, { t: 'WFH Tracking', s: null }, { t: 'Payroll Auto-Sync', s: 'Limited' },
                  { t: 'Regularization Flow', s: 'Manual' }, { t: 'Compliance Reports', s: 'Basic' },
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
              <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", border: "1px solid rgba(134,239,172,0.22)", color: "#86EFAC", fontSize: "12px", fontWeight: 700, marginBottom: "16px" }}>Employee Attendance App</span>
              <h2 style={{ fontSize: "clamp(30px, 3.9vw, 46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: "18px", color: "#F8FAFC", letterSpacing: "-0.03em", maxWidth: "620px" }}>
                Punch in from anywhere.
                <span style={{ display: "block", color: "#CFF25E", marginTop: "8px" }}>GPS. Face ID. One tap.</span>
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "26px", maxWidth: "620px" }}>
                Employees punch in via GPS, face recognition, or geo-fence. Managers track live attendance, approve regularizations, and view shift schedules — all on mobile.
              </p>
              <div className="flex flex-wrap gap-3" style={{ marginBottom: "24px" }}>
                {["GPS punch-in", "Face recognition", "Live dashboard", "Regularization"].map((item) => (
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
                          <p style={{ fontSize: "10px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>Attendance</p>
                          <p style={{ fontSize: "20px", color: "#102D23", fontWeight: 800, marginTop: "2px" }}>Today</p>
                        </div>
                        <div style={{ width: 40, height: 40, borderRadius: "14px", background: "#EAF8F0", display: "flex", alignItems: "center", justifyContent: "center", color: "#102D23" }}>
                          <Fingerprint className="w-5 h-5" />
                        </div>
                      </div>
                      <div style={{ padding: "16px", borderRadius: "22px", background: "linear-gradient(135deg, #102D23 0%, #1A3F32 100%)", border: "1px solid rgba(96,209,132,0.3)", marginBottom: "14px" }}>
                        <p style={{ fontSize: "10px", color: "#BFEA4D", marginBottom: "4px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Punched in at</p>
                        <p style={{ fontSize: "34px", fontWeight: 800, color: "#F8FAFC", lineHeight: 1 }}>09:02 AM</p>
                        <div className="flex items-center justify-between" style={{ marginTop: "10px" }}>
                          <p style={{ fontSize: "11px", color: "#60D184", fontWeight: 700 }}>GPS verified · Office</p>
                          <span style={{ fontSize: "10px", padding: "4px 10px", borderRadius: "999px", background: "rgba(96,209,132,0.15)", color: "#60D184", fontWeight: 700, border: "1px solid rgba(96,209,132,0.25)" }}>On Time</span>
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Hours today</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>6h 42m</p>
                          <p style={{ fontSize: "10px", color: "#64748B", marginTop: "2px" }}>of 9h shift</p>
                        </div>
                        <div style={{ padding: "12px", borderRadius: "16px", background: "#FFFFFF", border: "1px solid #DDE7DE" }}>
                          <p style={{ fontSize: "10px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>This month</p>
                          <p style={{ fontSize: "18px", color: "#102D23", fontWeight: 800, marginTop: "4px" }}>22/23</p>
                          <p style={{ fontSize: "10px", color: "#60D184", marginTop: "2px", fontWeight: 700 }}>days present</p>
                        </div>
                      </div>
                      <div style={{ padding: "14px", borderRadius: "18px", border: "1px solid #DDE7DE", background: "#FFFFFF" }}>
                        <p style={{ fontSize: "12px", fontWeight: 800, color: "#102D23", marginBottom: "10px" }}>This Week</p>
                        <div className="space-y-3">
                          {["Mon — 9:01 AM · 6:05 PM", "Tue — 8:58 AM · 6:12 PM", "Wed — 9:02 AM · In progress"].map((r) => (
                            <div key={r} className="flex items-center gap-2" style={{ fontSize: "12px" }}>
                              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#059669" }} />
                              <span style={{ color: "#64748B" }}>{r}</span>
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
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-[720px] mx-auto" style={{ marginBottom: '56px' }}>
            <span className="inline-flex items-center gap-2 mb-6" style={{ padding: '6px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Zap className="w-3.5 h-3.5" /> The Smart Advantage
            </span>
            <h2 style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', fontWeight: 800, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '18px' }}>
              What changes when attendance tracks <span style={{ color: '#3CB371' }}>itself</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#64748B', lineHeight: 1.75, maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>Five areas where automation replaces manual chaos.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              {[
                { num: '01', title: 'Punch Accuracy', before: 'Buddy punching, proxy attendance', after: 'Biometric + face ID = zero fraud', icon: <Fingerprint className="w-5 h-5" /> },
                { num: '02', title: 'Data Capture', before: 'Paper registers entered manually', after: 'Real-time digital capture across all modes', icon: <Smartphone className="w-5 h-5" /> },
                { num: '03', title: 'Shift Management', before: 'Excel rosters with constant conflicts', after: 'Auto-rostering with swap management', icon: <Calendar className="w-5 h-5" /> },
                { num: '04', title: 'Overtime Tracking', before: 'Disputes over extra hours worked', after: 'Auto OT calculation per Shops Act rules', icon: <Timer className="w-5 h-5" /> },
                { num: '05', title: 'Payroll Sync', before: 'Days reconciling attendance to salary', after: 'Real-time feed — LOP, OT, deductions auto', icon: <TrendingUp className="w-5 h-5" /> },
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
                      <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', marginLeft: '8px' }}>attendance-engine</span>
                    </div>
                    <div className="flex items-center gap-2"><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#CFF25E' }} /><span style={{ fontSize: '10px', color: '#CFF25E', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Live</span></div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
                      <div>
                        <p style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>March 2026</p>
                        <p style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginTop: '2px' }}>95.3% Present</p>
                      </div>
                      <div style={{ padding: '6px 14px', borderRadius: '999px', background: '#D1FAE5', color: '#059669', fontSize: '11px', fontWeight: 700 }}>Healthy</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3" style={{ marginBottom: '20px' }}>
                      {[
                        { label: 'On Time', value: '94%', color: '#059669' },
                        { label: 'Late', value: '1.8%', color: '#D97706' },
                        { label: 'Absent', value: '0%', color: '#DC2626' },
                      ].map((kpi) => (
                        <div key={kpi.label} style={{ padding: '14px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                          <p style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{kpi.label}</p>
                          <p style={{ fontSize: '20px', fontWeight: 800, color: kpi.color, marginTop: '4px' }}>{kpi.value}</p>
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: '16px', borderRadius: '14px', background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                      <p style={{ fontSize: '11px', fontWeight: 700, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>System Status</p>
                      <div className="space-y-2">
                        {['Biometric Sync — Active', 'GPS Tracking — Live', 'Geo-Fences — 4 Zones Set', 'Shift Engine — 3 Rotations', 'Payroll Feed — Real-time'].map((task) => (
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
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#F0FDF4', border: '1px solid #BBF7D0', color: '#166534', fontSize: '12px', fontWeight: 600 }}>Zero buddy punching</div>
                  <div style={{ padding: '8px 16px', borderRadius: '999px', background: '#EAF8F0', border: '1px solid #BBF7D0', color: '#0E3B32', fontSize: '12px', fontWeight: 600 }}>99.8% accuracy</div>
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
            <Fingerprint style={{ width: 28, height: 28 }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, letterSpacing: "-0.03em", marginBottom: "16px" }}>Ready to eliminate attendance fraud?</h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", marginBottom: "32px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Join 500+ Indian businesses with zero buddy punching and 99.8% attendance accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="cta-base cta-secondary cta-lg">Book a Free Demo <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span></Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">View Pricing <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span></Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2" style={{ marginTop: "24px" }}>
            {["No credit card required", "Setup in 2-3 days", "Free attendance audit"].map((t) => (
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
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>Everything About Attendance Management</h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>Common questions about biometric attendance, geo-fencing, and shift management.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { q: "What biometric devices do you support?", a: "ZKTeco, eSSL, HikVision, Suprema, and any device with API or push-data capability. Fingerprint, face, and iris scanners all supported." },
              { q: "How does geo-fencing work?", a: "Define virtual boundaries around office locations. Employees auto-punch when entering/exiting the zone via their phone's GPS." },
              { q: "Can I manage multiple shifts and locations?", a: "Yes. Create unlimited shift patterns, rotate weekly or monthly, and manage across all locations from one dashboard." },
              { q: "How is overtime calculated?", a: "Based on your configured rules per Shops & Establishments Act — daily, weekly, or monthly thresholds with auto-pay calculation." },
              { q: "Does it work for WFH and hybrid employees?", a: "Yes. Web check-in, GPS tracking, and activity snapshots for remote employees. Same accuracy as office-based tracking." },
              { q: "How does attendance sync with payroll?", a: "Real-time feed. LOP, late deductions, OT pay, and half-day calculations are pre-processed before payroll runs." },
              { q: "Can employees request regularization?", a: "Yes. Mobile app lets employees submit regularization with reason. Manager approves/rejects with one tap." },
              { q: "How quickly can we go live?", a: "2-3 days including device integration, shift setup, and geo-fence configuration. Training included." },
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
          { "@type": "SoftwareApplication", "name": "HRMS Software in India - Attendance Management Module", "applicationCategory": "BusinessApplication", "operatingSystem": "Web, iOS, Android", "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "3800" } },
          { "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "What biometric devices do you support?", "acceptedAnswer": { "@type": "Answer", "text": "ZKTeco, eSSL, HikVision, Suprema, and any API-compatible device." } },
            { "@type": "Question", "name": "How does geo-fencing work?", "acceptedAnswer": { "@type": "Answer", "text": "Define virtual boundaries around offices. Employees auto-punch via GPS when entering/exiting." } },
            { "@type": "Question", "name": "Does it work for WFH employees?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Web check-in, GPS tracking, and activity snapshots for remote workers." } },
            { "@type": "Question", "name": "How quickly can we go live?", "acceptedAnswer": { "@type": "Answer", "text": "2-3 days including device integration, shift setup, and geo-fence configuration." } }
          ]}
        ]
      })}} />
    </main>
  );
}
