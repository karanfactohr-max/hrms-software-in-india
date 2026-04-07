import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight, Clock, Calendar, MapPin, ShieldCheck, Users,
  FileText, CheckCircle2, ChevronDown, Zap, Network, Star,
  Calculator, Bell, Smartphone, Building2, XCircle,
  Fingerprint, Globe, Timer, TrendingUp, AlertTriangle,
  BarChart3, Check, ScanFace, LogIn, Workflow
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Best Attendance & Leave Management Software in India | Geo-Fencing, Biometric & Shift Rostering",
  description: "Automate attendance tracking, leave management, and shift rostering for Indian businesses. Biometric integration, geo-fencing, overtime calculation, and Shops & Establishments Act compliance. Save 15+ hours monthly.",
  keywords: "attendance management software india, leave management system, biometric attendance, geo-fencing attendance, shift management, overtime calculation, attendance regularization, work from home attendance, half-day leave policy, Shops and Establishments Act compliance, HRMS attendance module",
  openGraph: {
    title: "Best Attendance & Leave Management Software in India",
    description: "Automate attendance tracking, leave management, and shift rostering. Biometric, geo-fencing, and full Indian labour law compliance.",
    url: 'https://hrmssoftwareinindia.com/attendance-leave-software',
    siteName: 'HRMS Software in India',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AttendanceLeavePage() {
  return (
    <main style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }} className="min-h-screen font-sans overflow-hidden">

      {/* ═══════════ 1. HERO SECTION ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-3 p-1 pr-5 rounded-full mb-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest uppercase" style={{ backgroundColor: '#166534', color: '#FFFFFF' }}>
              <Fingerprint className="w-3.5 h-3.5" />
              Attendance + Leave
            </div>
            <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#0F172A' }}>
              Smart Workforce Tracking
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 800,
            color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2.5px",
            marginBottom: "20px", maxWidth: "860px", marginLeft: "auto", marginRight: "auto",
          }}>
            {"Track Attendance. "}<span style={{ color: "var(--rose-dark, #E11D48)" }}>Manage Leaves.</span>{" Zero Disputes."}
          </h1>

          <p style={{
            fontSize: "clamp(16px, 1.8vw, 18px)", color: "#64748B",
            lineHeight: 1.7, maxWidth: "620px", marginLeft: "auto", marginRight: "auto",
            marginBottom: "32px",
          }}>
            Biometric, GPS, and web-clock attendance with automated leave accrual, shift rostering, and overtime calculation. Built for Indian labour law compliance across every state and industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ marginBottom: "28px" }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Get Started for Free
              <span className="cta-arrow" style={{ width: 28, height: 28 }}>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              View Pricing
              <span className="cta-arrow">
                <ArrowRight style={{ width: 14, height: 14 }} />
              </span>
            </Link>
          </div>

          <p style={{ fontSize: "13px", color: "#94A3B8", fontWeight: 500, marginBottom: "56px" }}>Save 15+ hours monthly on attendance reconciliation</p>
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
                    app.hrmssuite.in/attendance
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
                      { label: "Attendance", active: true },
                      { label: "Leave Management", active: false },
                      { label: "Shift Roster", active: false },
                      { label: "Overtime", active: false },
                      { label: "Regularization", active: false },
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
                    <p style={{ fontWeight: 600, fontSize: "12px", marginBottom: 2 }}>Live Tracking</p>
                    <p style={{ fontSize: "10px", opacity: 0.8, lineHeight: 1.4 }}>847 of 1,247 checked in</p>
                  </div>
                </div>

                <div style={{ flex: 1, padding: "20px", minWidth: 0, background: "#fff" }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A2E" }}>Attendance — March 2026</p>
                      <p style={{ fontSize: "12px", color: "#8E8EA0" }}>1,247 employees across 6 locations</p>
                    </div>
                    <div style={{ fontSize: "10px", fontWeight: 600, padding: "4px 12px", borderRadius: "9999px", color: "#059669", background: "#D1FAE5" }}>
                      92% Present Today
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ marginBottom: "20px" }}>
                    {[
                      { label: "Present Today", value: "1,147", change: "+3.2% vs last week", color: "#059669", bg: "#D1FAE5" },
                      { label: "On Leave", value: "68", change: "12 approved, 56 pending", color: "#0EA5E9", bg: "#E0F2FE" },
                      { label: "Absent", value: "32", change: "2.6% absenteeism rate", color: "#DC2626", bg: "#FEE2E2" },
                      { label: "Late Arrivals", value: "41", change: "3.3% of workforce", color: "#D97706", bg: "#FEF3C7" },
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
                          <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E" }}>Today&apos;s Attendance Log</p>
                        </div>
                        <span style={{ fontSize: "11px", color: "#3CB371", fontWeight: 600 }}>Live</span>
                      </div>
                      <div className="space-y-[6px]">
                        {[
                          { emp: "Priya Sharma", dept: "Engineering", in: "08:52 AM", out: "—", status: "On Time", sColor: "#059669", sBg: "#D1FAE5", method: "Biometric" },
                          { emp: "Rajesh Kumar", dept: "Operations", in: "09:18 AM", out: "—", status: "Late", sColor: "#D97706", sBg: "#FEF3C7", method: "GPS" },
                          { emp: "Anita Desai", dept: "HR", in: "—", out: "—", status: "On Leave", sColor: "#0EA5E9", sBg: "#E0F2FE", method: "Sick Leave" },
                          { emp: "Vikram Singh", dept: "Sales", in: "08:45 AM", out: "—", status: "On Time", sColor: "#059669", sBg: "#D1FAE5", method: "Web Clock" },
                          { emp: "Deepa Nair", dept: "Finance", in: "09:32 AM", out: "—", status: "Late", sColor: "#D97706", sBg: "#FEF3C7", method: "Mobile App" },
                        ].map((item) => (
                          <div key={item.emp} className="flex items-center gap-3" style={{ padding: "10px 12px", borderRadius: "8px", background: "#FAFAFC", border: "1px solid #F0F0F5" }}>
                            <div style={{ width: 30, height: 30, borderRadius: "50%", background: item.sBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "10px", fontWeight: 700, color: item.sColor }}>
                              {item.emp.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between" style={{ marginBottom: "2px" }}>
                                <p style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 600 }}>{item.emp}</p>
                                <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 10px", borderRadius: "9999px", color: item.sColor, background: item.sBg, flexShrink: 0, marginLeft: 8 }}>
                                  {item.status}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span style={{ fontSize: "10px", color: "#8E8EA0" }}>{item.dept}</span>
                                <span style={{ fontSize: "10px", color: "#8E8EA0" }}>In: {item.in}</span>
                                <span style={{ fontSize: "10px", color: "#8E8EA0" }}>{item.method}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "12px" }}>Leave Balance Summary</p>
                        <div className="space-y-[8px]">
                          {[
                            { label: "Casual Leave", value: "8 / 12", pct: 67, color: "#3CB371" },
                            { label: "Sick Leave", value: "5 / 10", pct: 50, color: "#0EA5E9" },
                            { label: "Earned Leave", value: "14 / 18", pct: 78, color: "#8B5CF6" },
                            { label: "Comp Off", value: "2 / 4", pct: 50, color: "#D97706" },
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
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>Pending Approvals</p>
                        <div className="space-y-[8px]">
                          {[
                            { action: "CL - Priya Sharma", time: "2 Mar - 4 Mar", initials: "CL", bg: "#FEF3C7", color: "#D97706" },
                            { action: "WFH - Rajesh K.", time: "5 Mar", initials: "WF", bg: "#E0F2FE", color: "#0EA5E9" },
                            { action: "SL - Anita Desai", time: "3 Mar", initials: "SL", bg: "#FEE2E2", color: "#DC2626" },
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

      {/* ═══════════ 2. PAIN / AGITATION SECTION ═══════════ */}
      <section className="py-24" style={{ background: '#E3FE7A' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Still managing attendance with registers, Excel, and WhatsApp messages?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Manual attendance tracking costs Indian businesses 15+ hours per month in reconciliation, salary disputes, and compliance errors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Buddy Punching & Time Theft",
                desc: "Employees clocking in for absent colleagues costs companies up to 5% of payroll annually. Manual registers and shared biometric devices offer zero accountability.",
                icon: <AlertTriangle className="w-8 h-8" />,
                cardBg: "#F7F6F4",
                borderColor: "#CFE5D6",
                iconBg: "#EAF8F0",
                iconColor: "#102D23",
              },
              {
                title: "Leave Policy Confusion",
                desc: "Different leave types — casual, sick, earned, maternity, comp-off — tracked across spreadsheets. Employees don't know their balance. HR spends days reconciling before payroll.",
                icon: <FileText className="w-8 h-8" />,
                cardBg: "#FFFFFF",
                borderColor: "#CFE5D6",
                iconBg: "#E3FE7A",
                iconColor: "#102D23",
              },
              {
                title: "Shift Rostering Chaos",
                desc: "Manufacturing, retail, and healthcare teams need 24/7 shift coverage. Manual rostering leads to understaffed shifts, overtime disputes, and Shops and Establishments Act violations.",
                icon: <Clock className="w-8 h-8" />,
                cardBg: "#EEF6F1",
                borderColor: "#BFEA4D",
                iconBg: "#F7F6F4",
                iconColor: "#102D23",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                style={{ background: item.cardBg, border: `1px solid ${item.borderColor}` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: item.iconBg, color: item.iconColor, border: `1px solid ${item.borderColor}` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 3. FEATURES GRID ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-semibold text-emerald-700 mb-4">
              <ShieldCheck className="w-4 h-4" /> Complete Attendance & Leave Suite
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Everything You Need for Workforce Time Management
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From biometric clock-in to automated leave accrual, every feature designed for Indian workforce management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Multi-Mode Attendance Capture",
                desc: "Biometric devices, GPS geo-fencing, web clock-in, mobile app selfie attendance, and Wi-Fi-based tracking. Choose the right method for each team and location.",
                keywords: "biometric, GPS, geo-fencing, selfie, web clock",
                icon: <Fingerprint className="w-6 h-6" />,
                color: "emerald",
              },
              {
                title: "Geo-Fencing & Location Tracking",
                desc: "Define virtual perimeters for office, client sites, and field locations. Employees can only clock in within approved zones. Perfect for sales teams, delivery staff, and remote workers.",
                keywords: "geo-fencing, GPS tracking, location-based",
                icon: <MapPin className="w-6 h-6" />,
                color: "blue",
              },
              {
                title: "Automated Leave Management",
                desc: "Configure leave policies by department, grade, or location. Auto-accrual of casual leave, sick leave, earned leave, and maternity leave as per Indian labour laws.",
                keywords: "leave policy, accrual, CL, SL, EL, maternity",
                icon: <Calendar className="w-6 h-6" />,
                color: "teal",
              },
              {
                title: "Shift Management & Rostering",
                desc: "Create general, rotational, night, and custom shifts. Auto-assign shifts based on department rules. Handle shift swaps, split shifts, and 24/7 operations with compliance checks.",
                keywords: "shift roster, rotational, night shift, split shift",
                icon: <Clock className="w-6 h-6" />,
                color: "orange",
              },
              {
                title: "Overtime Calculation",
                desc: "Automatic overtime detection and calculation as per Factories Act and state-specific rules. Double-rate overtime for hours beyond 9/day or 48/week. Real-time OT alerts to managers.",
                keywords: "overtime, double rate, Factories Act, OT calculation",
                icon: <Calculator className="w-6 h-6" />,
                color: "purple",
              },
              {
                title: "Attendance Regularization",
                desc: "Employees can request regularization for missed punches, forgotten clock-outs, or system errors. Manager approval workflow with audit trail for every correction.",
                keywords: "regularization, missed punch, correction, approval",
                icon: <FileText className="w-6 h-6" />,
                color: "pink",
              },
              {
                title: "Work From Home Attendance",
                desc: "Track remote workforce with GPS + selfie verification. Set WFH policies with daily limits, require manager pre-approval, and auto-sync with leave balances.",
                keywords: "WFH, remote work, work from home, hybrid",
                icon: <Smartphone className="w-6 h-6" />,
                color: "indigo",
              },
              {
                title: "Real-Time Alerts & Notifications",
                desc: "Instant push notifications for late arrivals, early departures, absenteeism patterns, and leave balance warnings. Keep managers and HR informed without manual follow-ups.",
                keywords: "alerts, notifications, absentee alerts, push",
                icon: <Bell className="w-6 h-6" />,
                color: "rose",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-50 flex items-center justify-center mb-4 text-${item.color}-600`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.keywords.split(", ").map((kw, j) => (
                    <span key={j} className="text-[11px] px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 4. HOW IT WORKS ═══════════ */}
      <section className="py-24" style={{ background: '#F7F6F4' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: '#EAF8F0', border: '1px solid #BFEA4D', color: '#102D23' }}>
              <Workflow className="w-4 h-4" /> How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              From Clock-In to Payroll-Ready in Four Steps
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Set up your attendance and leave system in under a day. No hardware dependency, no complex configuration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Configure Attendance Rules",
                desc: "Define working hours, grace periods, half-day thresholds, and late-mark rules. Set up geo-fences for each office location or assign biometric devices.",
                icon: <LogIn className="w-8 h-8" />,
                accent: "#60D184",
                iconBg: "#EAF8F0",
                iconColor: "#102D23",
                chip: "5-minute setup",
              },
              {
                step: "02",
                title: "Define Leave Policies",
                desc: "Set up leave types — CL, SL, EL, maternity, paternity, comp-off — with accrual rates, carry-forward limits, and encashment rules as per your company policy and state laws.",
                icon: <Calendar className="w-8 h-8" />,
                accent: "#48BFA7",
                iconBg: "#EAF8F0",
                iconColor: "#102D23",
                chip: "Policy-ready templates",
              },
              {
                step: "03",
                title: "Employees Clock In Daily",
                desc: "Your team marks attendance via biometric, GPS, mobile app, or web clock. Real-time dashboards show who's in, who's late, and who's on leave. No manual tracking needed.",
                icon: <ScanFace className="w-8 h-8" />,
                accent: "#BFEA4D",
                iconBg: "#F3FCD1",
                iconColor: "#102D23",
                chip: "Multi-mode tracking",
              },
              {
                step: "04",
                title: "Auto-Sync to Payroll",
                desc: "Attendance data flows directly to payroll — LOP, overtime, half-day deductions calculated automatically. One-click attendance lock before each salary cycle.",
                icon: <TrendingUp className="w-8 h-8" />,
                accent: "#8AD9AE",
                iconBg: "#EAF8F0",
                iconColor: "#102D23",
                chip: "Zero manual reconciliation",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative h-full overflow-hidden rounded-[22px] border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,45,35,0.12)]"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #F7F6F4 100%)",
                  borderColor: "#CFE5D6",
                }}
              >
                <div className="absolute left-0 top-0 h-1.5 w-full" style={{ background: item.accent }} />
                <div className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-extrabold" style={{ background: '#102D23', color: '#F8FAFC' }}>
                  {item.step}
                </div>

                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border"
                  style={{ background: item.iconBg, color: item.iconColor, borderColor: '#CFE5D6' }}
                >
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold leading-tight" style={{ color: '#102D23' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#5B667A' }}>
                  {item.desc}
                </p>

                <div
                  className="mt-5 inline-flex h-9 w-[180px] items-center justify-center rounded-full px-4 text-xs font-semibold whitespace-nowrap"
                  style={{ background: '#EAF8F0', color: '#102D23' }}
                >
                  {item.chip}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center" style={{ marginTop: "32px" }}>
            <Link href="/demo" className="cta-base cta-primary cta-md">
              See How It Works in a Live Demo
              <span className="cta-arrow">
                <ArrowRight style={{ width: 13, height: 13 }} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ 5. INTEGRATIONS ═══════════ */}
      <section className="py-24 text-white" style={{ background: '#102D23' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ background: 'rgba(247,246,244,0.12)', border: '1px solid rgba(247,246,244,0.2)', color: '#E6EDF3' }}>
              <Network className="w-4 h-4" /> Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#F8FAFC' }}>
              Connects With Your Biometric Devices and Tools
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#B9C7D6' }}>
              Works with popular biometric hardware, calendar platforms, and payroll systems Indian businesses already use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { name: "Biometric Devices", desc: "ZKTeco, eSSL, Matrix, Hikvision", icon: <Fingerprint className="w-6 h-6" /> },
              { name: "Google Calendar", desc: "Auto-sync leave with calendar", icon: <Calendar className="w-6 h-6" /> },
              { name: "Microsoft Teams", desc: "Clock-in via Teams bot", icon: <Building2 className="w-6 h-6" /> },
              { name: "Slack", desc: "Attendance alerts in channels", icon: <Bell className="w-6 h-6" /> },
              { name: "Tally", desc: "Attendance to payroll sync", icon: <Calculator className="w-6 h-6" /> },
              { name: "QuickBooks", desc: "Payroll integration", icon: <BarChart3 className="w-6 h-6" /> },
              { name: "Zoho People", desc: "Data migration support", icon: <Users className="w-6 h-6" /> },
              { name: "SAP SuccessFactors", desc: "Enterprise HCM sync", icon: <Network className="w-6 h-6" /> },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]"
                style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.34) 0%, rgba(15,23,42,0.56) 100%)', border: '1px solid rgba(148,163,184,0.4)' }}
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ background: '#FFFFFF', border: '1px solid #D1FAE5', boxShadow: '0 10px 24px rgba(15,23,42,0.14)' }}
                >
                  <span style={{ color: '#102D23' }}>{item.icon}</span>
                </div>
                <h3 className="font-bold text-sm" style={{ color: '#F8FAFC' }}>{item.name}</h3>
                <p className="text-xs mt-1" style={{ color: '#C8D4E0' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. TRUST SIGNALS ═══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm font-semibold text-emerald-700 mb-4">
              <ShieldCheck className="w-4 h-4" /> Trusted by Indian Businesses
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              De-Risk Your Attendance Management Decision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                metric: "15+ Hours",
                label: "Saved Monthly",
                desc: "Per HR executive on attendance reconciliation",
              },
              {
                metric: "99.8%",
                label: "Attendance Accuracy",
                desc: "Eliminating buddy punching and manual errors",
              },
              {
                metric: "500+",
                label: "Companies Trust Us",
                desc: "From 20-employee startups to 10,000+ workforce enterprises",
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-200">
                <p className="text-4xl font-extrabold text-emerald-600 mb-2">{item.metric}</p>
                <p className="text-lg font-bold text-slate-900 mb-1">{item.label}</p>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { name: "Shops & Establishments Act", desc: "Compliant attendance records" },
              { name: "Factories Act", desc: "OT and working hours tracking" },
              { name: "Biometric Integration", desc: "ZKTeco, eSSL, Matrix" },
              { name: "GPS Geo-Fencing", desc: "Location-verified attendance" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-200 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "We eliminated buddy punching across our 3 factory locations. Biometric + GPS combo gave us 99.8% attendance accuracy. Payroll disputes dropped to near zero.",
                name: "Suresh Patel",
                role: "Plant Head, Manufacturing Unit",
              },
              {
                quote: "Our field sales team of 120 people now marks GPS attendance from client locations. Geo-fencing ensures they're actually at the site. Manager approvals happen on the app.",
                name: "Nisha Agarwal",
                role: "Sales Operations Head, FMCG",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">&ldquo;{item.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 7. COMPARISON TABLE ═══════════ */}
      <section className="py-24" style={{ background: '#F7F6F4' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Why Automated Attendance Beats Manual Methods
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See the clear difference between our platform and traditional attendance tracking approaches.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-slate-100 rounded-tl-xl">Feature</th>
                  <th className="text-center p-4 bg-emerald-600 text-white">Our Platform</th>
                  <th className="text-center p-4 bg-slate-100">Manual Register/Excel</th>
                  <th className="text-center p-4 bg-slate-100 rounded-tr-xl">Legacy Attendance Software</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Biometric Device Integration", hrms: true, manual: false, legacy: "Partial" },
                  { feature: "GPS Geo-Fencing Attendance", hrms: true, manual: false, legacy: false },
                  { feature: "Automated Leave Accrual", hrms: true, manual: false, legacy: "Basic" },
                  { feature: "Shift Rostering & Rotation", hrms: true, manual: false, legacy: "Limited" },
                  { feature: "Overtime Auto-Calculation", hrms: true, manual: false, legacy: "Manual" },
                  { feature: "Attendance Regularization Workflow", hrms: true, manual: false, legacy: false },
                  { feature: "Work From Home Tracking", hrms: true, manual: false, legacy: false },
                  { feature: "Half-Day Auto-Detection", hrms: true, manual: false, legacy: "Manual" },
                  { feature: "Payroll Sync (LOP, OT, Deductions)", hrms: true, manual: false, legacy: "Add-on" },
                  { feature: "Real-Time Manager Alerts", hrms: true, manual: false, legacy: false },
                  { feature: "Shops & Establishments Compliance", hrms: true, manual: false, legacy: "Partial" },
                  { feature: "Cost per Employee/Month", hrms: "₹30-60", manual: "₹100+", legacy: "₹50-80" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-200">
                    <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.hrms === "boolean" ? (
                        row.hrms ? <Check className="w-5 h-5 text-emerald-600 mx-auto" /> : <XCircle className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-emerald-600 font-semibold">{row.hrms}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.manual === "boolean" ? (
                        row.manual ? <Check className="w-5 h-5 text-emerald-600 mx-auto" /> : <XCircle className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-slate-600">{row.manual}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.legacy === "boolean" ? (
                        row.legacy ? <Check className="w-5 h-5 text-emerald-600 mx-auto" /> : <XCircle className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-slate-600">{row.legacy}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════ 8. CTA SECTION ═══════════ */}
      <section style={{ padding: "88px 0", background: "linear-gradient(135deg, #052E16 0%, #166534 50%, #3CB371 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-160px", left: "-130px", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(74, 222, 128, 0.2), rgba(74, 222, 128, 0))" }} />
        <div style={{ position: "absolute", right: "-140px", bottom: "-180px", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.16), rgba(16, 185, 129, 0))" }} />

        <div className="max-w-[900px] mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <div style={{ width: 56, height: 56, borderRadius: "16px", background: "rgba(255,255,255,0.1)", color: "#86EFAC", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <Clock style={{ width: 28, height: 28 }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px", marginBottom: "16px", fontStyle: "italic", textShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
            Stop Wasting 15+ Hours Every Month on Attendance Reconciliation
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", textShadow: "0 2px 10px rgba(0,0,0,0.1)", marginBottom: "32px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Automate attendance tracking, leave management, shift rostering, and overtime calculation. Built for Indian businesses with full Shops and Establishments Act compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="cta-base group bg-[#CFF25E] text-[#0E3B32] border-none shadow-[0_12px_24px_rgba(207,242,94,0.3)] transition-transform duration-300 hover:scale-[1.02]">
              Get Started for Free &mdash; Book Demo
              <span className="cta-arrow transition-all duration-300 bg-[rgba(14,59,50,0.1)] text-[#0E3B32] group-hover:bg-white" style={{ width: 26, height: 26 }}>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              View Pricing Plans
              <span className="cta-arrow">
                <ArrowRight style={{ width: 14, height: 14 }} />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2" style={{ marginTop: "24px" }}>
            {["No credit card required", "Setup in under 1 day", "Free data migration from Excel"].map((t) => (
              <span key={t} className="flex items-center gap-2" style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                <CheckCircle2 style={{ width: 14, height: 14, color: "#86EFAC" }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 9. FAQ SECTION ═══════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "14px" }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "#F1F5F9", color: "#475569", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Everything You Need to Know About Attendance & Leave Management
            </h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Find answers to common questions about attendance tracking, leave policies, and compliance for Indian businesses.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { q: "What attendance methods does the software support?", a: "We support biometric devices (ZKTeco, eSSL, Matrix, Hikvision), GPS geo-fencing, web clock-in, mobile app with selfie verification, and Wi-Fi-based attendance. You can use multiple methods simultaneously for different teams and locations." },
              { q: "How does geo-fencing attendance work?", a: "You define virtual perimeters around your office, client sites, or field locations on a map. Employees can only clock in when their GPS location falls within the approved zone. This is ideal for sales teams, delivery personnel, and remote workers who need location-verified attendance." },
              { q: "Can the software handle Indian leave policies?", a: "Yes. Configure casual leave, sick leave, earned/privilege leave, maternity leave, paternity leave, comp-off, and loss of pay. Set auto-accrual rates, carry-forward limits, encashment rules, and probation-period restrictions as per your company policy and state-specific labour laws." },
              { q: "Does it calculate overtime as per Indian labour laws?", a: "Absolutely. The system auto-detects overtime when employees work beyond 9 hours per day or 48 hours per week as per the Factories Act. Overtime is calculated at double the ordinary rate of wages. State-specific rules for Shops and Establishments Act are also supported." },
              { q: "What is attendance regularization?", a: "When employees forget to clock in or out, or when biometric devices fail, they can submit a regularization request through the portal or mobile app. Managers review and approve these requests with a full audit trail. This prevents unfair LOP deductions for genuine cases." },
              { q: "How does work from home attendance tracking work?", a: "Employees working from home can mark attendance via the mobile app with GPS + selfie verification. You can set daily WFH limits, require manager pre-approval, and auto-sync WFH days with leave balances. Perfect for hybrid work policies." },
              { q: "Can it handle half-day attendance automatically?", a: "Yes. Configure your half-day threshold — for example, if an employee works less than 4 hours in an 8-hour shift, the system auto-marks it as a half-day. This is reflected in leave deduction and payroll calculations automatically." },
              { q: "How long does it take to set up attendance and leave management?", a: "Most companies go live within 1-3 business days. We handle biometric device integration, geo-fence configuration, leave policy setup, and shift roster creation. Data migration from Excel or existing systems is included." },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                "name": "HRMS Software in India - Attendance & Leave Management Module",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, iOS, Android",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "INR"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "5000"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What attendance methods does the software support?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We support biometric devices (ZKTeco, eSSL, Matrix, Hikvision), GPS geo-fencing, web clock-in, mobile app with selfie verification, and Wi-Fi-based attendance."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does geo-fencing attendance work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You define virtual perimeters around your office, client sites, or field locations. Employees can only clock in when their GPS location falls within the approved zone."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can the software handle Indian leave policies?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Configure casual leave, sick leave, earned leave, maternity leave, paternity leave, and comp-off with auto-accrual rates and carry-forward limits as per Indian labour laws."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does it calculate overtime as per Indian labour laws?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The system auto-detects overtime beyond 9 hours per day or 48 hours per week as per the Factories Act, calculated at double the ordinary rate of wages."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is attendance regularization?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "When employees forget to clock in or out, they can submit a regularization request through the portal. Managers review and approve with a full audit trail."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does work from home attendance tracking work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Employees mark attendance via mobile app with GPS and selfie verification. You can set daily WFH limits and require manager pre-approval."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </main>
  );
}
