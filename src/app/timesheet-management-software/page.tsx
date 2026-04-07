import React from "react"
import Link from "next/link"
import { Metadata } from "next"
import {
  ArrowRight, Timer, Clock, BarChart3, ChevronDown,
  Star, ShieldCheck, Users, IndianRupee, Zap,
  Smartphone, FileText, Calendar, Receipt,
  TrendingUp, PieChart, CheckCircle2, AlertTriangle,
  Briefcase, Globe, Lock, Bell, Play, Pause,
  CreditCard, FolderOpen, ChevronRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Timesheet Management Software India | Billable Hours, Project Tracking & Client Billing",
  description: "Automate timesheet management with real-time time tracking, billable hours, project costing, and client billing. Reduce timesheet errors by 90% and get payroll-ready data instantly.",
  keywords: "timesheet management software India, employee time tracking, billable hours software, project time tracking, client billing software, online timesheet India, work hours tracker, payroll timesheet integration",
  openGraph: {
    title: "Timesheet Management Software India | Billable Hours & Project Tracking",
    description: "Real-time time tracking, project costing, and client billing. Eliminate timesheet errors and automate payroll integration.",
    url: "https://hrmssoftwareinindia.com/timesheet-management-software",
    siteName: "HRMS Software in India",
    locale: "en_IN",
    type: "website",
  },
}

const painPoints = [
  {
    icon: FileText,
    title: "Excel Timesheets Filed on Fridays",
    desc: "Employees guess-fill hours at week end. No real-time data. Managers approve without visibility. Billing disputes with clients are common.",
    iconBg: "#FEF2F2",
    iconColor: "#DC2626",
  },
  {
    icon: AlertTriangle,
    title: "Billing Disputes & Revenue Leakage",
    desc: "Untracked hours mean unbilled work. Clients dispute invoices without time logs. Agencies and IT firms lose 15-20% revenue to poor tracking.",
    iconBg: "#FFF7ED",
    iconColor: "#EA580C",
  },
  {
    icon: IndianRupee,
    title: "No Project Profitability Visibility",
    desc: "Finance has no idea which projects are profitable. Hours aren't mapped to costs. Project managers make resourcing decisions blindly.",
    iconBg: "#FEF9C3",
    iconColor: "#CA8A04",
  },
  {
    icon: Clock,
    title: "Manual Payroll Calculation from Timesheets",
    desc: "HR teams manually calculate overtime and shift differentials from spreadsheets. Errors are frequent. Payroll runs late every month.",
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
  },
]

const features = [
  {
    icon: Play,
    title: "One-Click Time Tracking",
    desc: "Start/stop timers for any task or project. Log time manually or via browser extension. Employees never lose a billable minute.",
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
  },
  {
    icon: Briefcase,
    title: "Project & Task Management",
    desc: "Create projects, assign tasks, set budgets, and track hours per task. Real-time project burn rate and completion % always visible.",
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    icon: IndianRupee,
    title: "Billable Hours & Client Billing",
    desc: "Mark hours billable or non-billable per project. Auto-generate invoices based on logged hours and agreed billing rates. GST-ready.",
    iconBg: "#FFF7ED",
    iconColor: "#EA580C",
  },
  {
    icon: BarChart3,
    title: "Project Cost & Profitability Reports",
    desc: "Compare actual hours vs planned. Track cost per project using employee cost rates. Know which clients are profitable before it's too late.",
    iconBg: "#FDF4FF",
    iconColor: "#9333EA",
  },
  {
    icon: Smartphone,
    title: "Mobile Time Tracking",
    desc: "Field teams log hours from Android or iOS. GPS-tagged entries for site work. Offline mode syncs when back online. No excuses for missing entries.",
    iconBg: "#FEF2F2",
    iconColor: "#DC2626",
  },
  {
    icon: TrendingUp,
    title: "Payroll & Attendance Sync",
    desc: "Approved timesheets auto-feed into payroll. Overtime hours calculated automatically. Attendance reconciliation happens without any manual step.",
    iconBg: "#F0FDF4",
    iconColor: "#0E3B32",
  },
]

const stats = [
  { value: "90%", label: "Reduction in Timesheet Errors" },
  { value: "3×", label: "Faster Client Invoice Generation" },
  { value: "15%", label: "More Billable Hours Captured" },
  { value: "100%", label: "Payroll Accuracy from Timesheets" },
]

const whyChooseItems = [
  {
    icon: Globe,
    title: "Web, Mobile & Desktop",
    desc: "Track time anywhere — web dashboard, native Android/iOS app, or browser extension. Offline support for sites with no connectivity.",
  },
  {
    icon: Briefcase,
    title: "Multi-Project Support",
    desc: "Handle unlimited projects and clients simultaneously. Set billing rates per project, per employee, or per task. Full budget tracking.",
  },
  {
    icon: Lock,
    title: "Manager Approval Workflow",
    desc: "Weekly timesheets go to managers for review before approval. Managers can reject with comments, employees resubmit. Full audit trail.",
  },
  {
    icon: Zap,
    title: "Payroll-Ready Integration",
    desc: "Approved timesheets sync directly to payroll. Overtime, shift hours, and project allocation auto-calculated. Zero manual re-entry.",
  },
  {
    icon: IndianRupee,
    title: "GST-Ready Client Invoicing",
    desc: "Generate professional invoices from approved timesheets. IGST/CGST/SGST support. PDF export for client billing with hour breakdowns.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Live dashboards for utilization rates, project health, employee productivity, and overtime trends. Export to Excel or schedule email reports.",
  },
]

const mobileFeatures = [
  { icon: Play, text: "Start/stop timer for any project" },
  { icon: Clock, text: "Log hours manually or via timer" },
  { icon: Briefcase, text: "Switch between multiple projects" },
  { icon: Calendar, text: "View weekly timesheet summary" },
  { icon: Bell, text: "Deadline reminders to submit timesheets" },
  { icon: CheckCircle2, text: "Track approval status in real time" },
]

const advantageCards = [
  {
    label: "Without Timesheet Software",
    bg: "#F8FAFC",
    border: "#E2E8F0",
    points: [
      { text: "Employees fill timesheets on Fridays from memory", bad: true },
      { text: "Client billing disputes due to missing time logs", bad: true },
      { text: "No visibility into project profitability or burn rate", bad: true },
      { text: "HR manually calculates overtime from spreadsheets", bad: true },
      { text: "15-20% billable hours go unbilled every month", bad: true },
    ],
  },
  {
    label: "With Timesheet Software",
    bg: "#0E3B32",
    border: "#0E3B32",
    points: [
      { text: "Real-time time tracking — every minute captured accurately", bad: false },
      { text: "Client invoices auto-generated from approved timesheets", bad: false },
      { text: "Live project cost vs revenue dashboard per client", bad: false },
      { text: "Payroll overtime calculated automatically — zero errors", bad: false },
      { text: "100% billable hours tracked, zero revenue leakage", bad: false },
    ],
  },
]

const faqData = [
  {
    q: "What is timesheet management software?",
    a: "Timesheet management software lets employees log work hours against projects and tasks in real time or manually. Managers approve weekly timesheets, which then auto-feed into payroll, client invoicing, and project cost reports — eliminating manual Excel-based tracking.",
  },
  {
    q: "Can employees track time on mobile?",
    a: "Yes. Native Android and iOS apps with start/stop timers, manual entry, and project switching. Field employees get GPS-tagged entries. Offline mode syncs automatically when connectivity is restored. No more calling to report hours.",
  },
  {
    q: "How does billable hours tracking work?",
    a: "Each project and task is marked as billable or non-billable. When employees log time, billable hours are captured separately. Client invoices are auto-generated from approved billable hours with your agreed billing rate, supporting GST calculations.",
  },
  {
    q: "Does timesheet data integrate with payroll?",
    a: "Yes. Once a manager approves a weekly timesheet, hours automatically sync to payroll. Overtime hours are calculated per your policy. Salary processing uses timesheet data — no manual transfer of hours to payroll system.",
  },
  {
    q: "Can I track project profitability?",
    a: "Yes. Map employee cost rates to projects. The system compares actual hours logged (at cost) against billed hours (at client rate) to give you real-time project margin. Know which clients and projects are profitable before month-end.",
  },
  {
    q: "What approval workflow does the timesheet system support?",
    a: "Employees submit weekly timesheets for manager review. Managers can approve, partially approve, or reject with comments. Employees get notified instantly and can resubmit. Approved timesheets are locked and auto-fed into payroll and billing.",
  },
  {
    q: "Can I generate GST invoices from timesheets?",
    a: "Yes. Once billable timesheets are approved, generate PDF invoices with hour breakdowns, billing rates, IGST/CGST/SGST split, and your company branding. Invoices can be emailed directly to clients or exported for your accounting system.",
  },
  {
    q: "How long does setup take?",
    a: "Most companies are live within 3-5 days. We import your project list, set up billing rates, configure approval workflows, and train employees and managers. Full support throughout onboarding.",
  },
]

export default function TimesheetManagementPage() {
  return (
    <main className="min-h-screen font-sans overflow-hidden">

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>

          <div className="inline-flex items-center gap-3 p-1 pr-5 rounded-full mb-8 shadow-sm" style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0" }}>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full" style={{ backgroundColor: "#0E3B32", color: "#CFF25E", fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
              <Timer style={{ width: 12, height: 12 }} />
              Timesheet Engine
            </div>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#0F172A" }}>
              Zero Revenue Leakage — Every Minute Tracked
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 800, color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2.5px", marginBottom: "20px", maxWidth: "860px", marginLeft: "auto", marginRight: "auto" }}>
            Track Every Hour. Bill Every Minute.{" "}
            <span style={{ color: "#3CB371" }}>Zero Guesswork.</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 1.8vw, 18px)", color: "#64748B", lineHeight: 1.7, maxWidth: "640px", marginLeft: "auto", marginRight: "auto", marginBottom: "32px" }}>
            Real-time time tracking, project costing, client billing, and payroll sync — all in one platform. Stop losing 15-20% of billable revenue to poor timesheet management.
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

          <p style={{ fontSize: "13px", color: "#94A3B8", fontWeight: 500, marginBottom: "56px" }}>
            Real-time tracking | Billable hours | Payroll sync | GST invoicing
          </p>
        </div>

        {/* Hero Dashboard Mockup */}
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6" style={{ paddingBottom: "100px", position: "relative", zIndex: 1 }}>
          <div className="dashboard-3d" style={{ borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
            <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #E8E8EF", overflow: "hidden", boxShadow: "0 32px 80px rgba(14,59,50,0.1), 0 1px 3px rgba(0,0,0,0.04)" }}>
              {/* Browser chrome */}
              <div className="flex items-center justify-between" style={{ padding: "12px 20px", borderBottom: "1px solid #E8E8EF", background: "#FAFAFC" }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-[6px]">
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA42" }} />
                  </div>
                  <div style={{ background: "#fff", borderRadius: "8px", padding: "5px 14px", border: "1px solid #E8E8EF", fontSize: "11px", color: "#8E8EA0", fontFamily: "monospace" }}>
                    app.hrmssoftwareinindia.com/timesheet
                  </div>
                </div>
                <div style={{ width: 28, height: 28, borderRadius: "8px", background: "#3CB371", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff" }}>HR</div>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col justify-between" style={{ width: "190px", padding: "16px 12px", borderRight: "1px solid #E8E8EF", background: "#FAFAFC", flexShrink: 0 }}>
                  <div className="space-y-[2px]">
                    {[
                      { label: "Dashboard", active: false },
                      { label: "My Timesheet", active: true },
                      { label: "Projects", active: false },
                      { label: "Team Hours", active: false },
                      { label: "Approvals", active: false },
                      { label: "Client Billing", active: false },
                      { label: "Reports", active: false },
                      { label: "Settings", active: false },
                    ].map((item) => (
                      <div key={item.label} style={{ padding: "9px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: item.active ? 600 : 400, color: item.active ? "#3CB371" : "#5A5A7A", background: item.active ? "#E0F7ED" : "transparent", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: item.active ? "#3CB371" : "transparent" }} />
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "12px", borderRadius: "10px", background: "linear-gradient(135deg, #0E3B32, #1A5C46)", color: "#fff" }}>
                    <p style={{ fontWeight: 600, fontSize: "12px", marginBottom: 2 }}>Week 15 — Apr 2026</p>
                    <p style={{ fontSize: "10px", opacity: 0.8, lineHeight: 1.4 }}>38.5 / 40 hrs logged</p>
                  </div>
                </div>

                {/* Main content */}
                <div style={{ flex: 1, padding: "20px", minWidth: 0, background: "#fff" }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A2E" }}>My Timesheet — Week 15</p>
                      <p style={{ fontSize: "12px", color: "#8E8EA0" }}>Apr 7 – Apr 13, 2026 · 4 projects active</p>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#FEF3C7", border: "1px solid #FDE68A", borderRadius: 8, padding: "5px 12px" }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} />
                        <span style={{ fontSize: "11px", fontWeight: 700, color: "#92400E" }}>Pending Approval</span>
                      </div>
                      <div style={{ background: "#0E3B32", borderRadius: 8, padding: "5px 12px", fontSize: "11px", fontWeight: 700, color: "#CFF25E" }}>Submit Week</div>
                    </div>
                  </div>

                  {/* Stat cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ marginBottom: "20px" }}>
                    {[
                      { label: "Hours Logged", value: "38.5h", change: "96% of target", color: "#059669", bg: "#D1FAE5" },
                      { label: "Billable Hours", value: "31.0h", change: "80.5% utilization", color: "#0EA5E9", bg: "#E0F2FE" },
                      { label: "Projects Active", value: "4", change: "₹2.4L in billing", color: "#8B5CF6", bg: "#EDE9FE" },
                      { label: "Overtime", value: "2.5h", change: "Auto-added to payroll", color: "#D97706", bg: "#FEF3C7" },
                    ].map((stat) => (
                      <div key={stat.label} style={{ background: "#fff", borderRadius: "12px", padding: "16px", border: "1px solid #E8E8EF", borderLeft: `3px solid ${stat.color}` }}>
                        <span style={{ fontSize: "11px", color: "#8E8EA0", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>{stat.label}</span>
                        <p style={{ fontSize: "26px", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.5px", lineHeight: 1, margin: "6px 0 4px" }}>{stat.value}</p>
                        <span style={{ fontSize: "11px", color: stat.color, fontWeight: 500 }}>{stat.change}</span>
                      </div>
                    ))}
                  </div>

                  {/* Daily timesheet grid + project breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <div className="md:col-span-3" style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                      <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                        <div className="flex items-center gap-2">
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3CB371" }} />
                          <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E" }}>Daily Time Log</p>
                        </div>
                        <span style={{ fontSize: "11px", color: "#3CB371", fontWeight: 600 }}>This Week</span>
                      </div>
                      <div className="space-y-[6px]">
                        {[
                          { day: "Monday", project: "Zomato — API Integration", hours: "8.0h", billable: true, status: "Logged", sColor: "#059669", sBg: "#D1FAE5" },
                          { day: "Tuesday", project: "Swiggy — Dashboard Redesign", hours: "7.5h", billable: true, status: "Logged", sColor: "#059669", sBg: "#D1FAE5" },
                          { day: "Wednesday", project: "Internal — Team Meeting", hours: "6.0h", billable: false, status: "Logged", sColor: "#8B5CF6", sBg: "#EDE9FE" },
                          { day: "Thursday", project: "Zomato — API Integration", hours: "9.0h", billable: true, status: "Overtime", sColor: "#D97706", sBg: "#FEF3C7" },
                          { day: "Friday", project: "Paytm — Security Audit", hours: "8.0h", billable: true, status: "Logged", sColor: "#059669", sBg: "#D1FAE5" },
                        ].map((item) => (
                          <div key={item.day} className="flex items-center gap-3" style={{ padding: "10px 12px", borderRadius: "8px", background: "#FAFAFC", border: "1px solid #F0F0F5" }}>
                            <div style={{ width: 56, fontSize: "10px", fontWeight: 700, color: "#8E8EA0", flexShrink: 0 }}>{item.day}</div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <p style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.project}</p>
                              <p style={{ fontSize: "10px", color: item.billable ? "#059669" : "#8B5CF6" }}>{item.billable ? "Billable" : "Non-billable"}</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                              <span style={{ fontSize: "12px", fontWeight: 700, color: "#1A1A2E" }}>{item.hours}</span>
                              <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 8px", borderRadius: "9999px", color: item.sColor, background: item.sBg }}>{item.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                        <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "12px" }}>Project Breakdown</p>
                        <div className="space-y-[8px]">
                          {[
                            { label: "Zomato — API", value: "17.0h", pct: 44, color: "#059669" },
                            { label: "Swiggy — Dashboard", value: "7.5h", pct: 19, color: "#0EA5E9" },
                            { label: "Paytm — Audit", value: "8.0h", pct: 21, color: "#8B5CF6" },
                            { label: "Internal", value: "6.0h", pct: 16, color: "#D97706" },
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
                      <div style={{ background: "#0E3B32", borderRadius: "12px", padding: "18px" }}>
                        <p style={{ fontSize: "12px", fontWeight: 700, color: "#CFF25E", marginBottom: "8px" }}>Active Timer</p>
                        <p style={{ fontSize: "22px", fontWeight: 800, color: "#fff", fontFamily: "monospace", marginBottom: 6 }}>02:14:37</p>
                        <p style={{ fontSize: "11px", color: "#94A3B8", marginBottom: 12 }}>Zomato — API Integration</p>
                        <div style={{ display: "flex", gap: 8 }}>
                          <div style={{ background: "#FEF2F2", borderRadius: 8, padding: "6px 12px", fontSize: "11px", fontWeight: 700, color: "#DC2626", cursor: "pointer" }}>⏸ Pause</div>
                          <div style={{ background: "rgba(207,242,94,0.15)", borderRadius: 8, padding: "6px 12px", fontSize: "11px", fontWeight: 700, color: "#CFF25E", cursor: "pointer" }}>✓ Stop & Log</div>
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

      {/* ═══════════ 2. PAIN POINTS ═══════════ */}
      <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-14">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.8px" }}>The Problem</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: 14 }}>
              Manual Timesheets Are Costing You More Than You Think
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              IT firms, agencies, and consultancies lose 15-20% of billable revenue every month to inaccurate time tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="compliance-card" style={{ background: "#FAFAFA", borderRadius: 16, padding: "28px 24px", border: "1px solid #F1F5F9" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Icon style={{ width: 22, height: 22, color: item.iconColor }} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1E293B", marginBottom: 10, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 3. FEATURES ═══════════ */}
      <section className="main-vertical-lines" style={{ background: "#F8FAFC", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-14">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.8px" }}>Timesheet Features</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: 14 }}>
              Everything You Need to Track Time Accurately
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              From one-click timers to GST-ready client invoices — complete timesheet management in one platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="compliance-card" style={{ background: "#FFFFFF", borderRadius: 16, padding: "28px 26px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: item.iconBg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                    <Icon style={{ width: 24, height: 24, color: item.iconColor }} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1E293B", marginBottom: 10, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 4. INTEGRATION ═══════════ */}
      <section style={{ background: "#F0FDF4", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#DCFCE7", border: "1px solid #BBF7D0", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.8px" }}>Seamless Integration</span>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: 16 }}>
                Timesheets That Flow Into Payroll, Billing & Projects
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.7, marginBottom: 28 }}>
                No more copying hours from one system to another. Approved timesheets auto-sync everywhere — payroll runs without manual input, invoices generate themselves.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: IndianRupee, text: "Overtime & shift hours auto-calculated in payroll", color: "#16A34A" },
                  { icon: Receipt, text: "Client invoices generated from approved billable hours", color: "#EA580C" },
                  { icon: BarChart3, text: "Project cost reports update in real time", color: "#7C3AED" },
                  { icon: Calendar, text: "Attendance records reconciled against timesheet entries", color: "#0369A1" },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "#fff", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon style={{ width: 16, height: 16, color: item.color }} />
                      </div>
                      <span style={{ fontSize: 15, color: "#334155", lineHeight: 1.6, paddingTop: 8 }}>{item.text}</span>
                    </div>
                  )
                })}
              </div>
              <div style={{ marginTop: 32 }}>
                <Link href="/demo" className="cta-base cta-primary cta-md">
                  See Integration Demo
                  <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { name: "Payroll Engine", icon: IndianRupee, desc: "Overtime auto-calculated, no manual entry", color: "#16A34A", bg: "#F0FDF4" },
                { name: "Client Billing", icon: Receipt, desc: "GST invoices from approved hours", color: "#EA580C", bg: "#FFF7ED" },
                { name: "Project Costing", icon: BarChart3, desc: "Real-time margin per project & client", color: "#7C3AED", bg: "#F5F3FF" },
                { name: "Attendance", icon: Clock, desc: "Hours reconciled with punches", color: "#0369A1", bg: "#EFF6FF" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="compliance-card" style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                      <Icon style={{ width: 22, height: 22, color: item.color }} />
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1E293B", marginBottom: 6 }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 5. STATS ═══════════ */}
      <section style={{ background: "#102D23", padding: "64px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "20px 16px", borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                <div style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 900, color: "#CFF25E", lineHeight: 1, marginBottom: 10 }}>{s.value}</div>
                <div style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. WHY CHOOSE US ═══════════ */}
      <section style={{ background: "linear-gradient(135deg, #F0FDF4, #DCFCE7, #F0FDF4)", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-14">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#DCFCE7", border: "1px solid #BBF7D0", borderRadius: 100, padding: "6px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.8px" }}>Why Choose Us</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: 14 }}>
              Built for Indian IT, Agency & Service Teams
            </h2>
            <p style={{ fontSize: 17, color: "#475569", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Indian billing rates, GST invoicing, multi-client projects, and payroll compliance — all in one timesheet platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="advantage-card" style={{ background: "#fff", borderRadius: 16, padding: "28px 26px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#F0FDF4", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Icon style={{ width: 22, height: 22, color: "#0E3B32" }} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1E293B", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 7. TESTIMONIALS / LIME ═══════════ */}
      <section style={{ background: "#CFF25E", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0E3B32", lineHeight: 1.2, marginBottom: 12 }}>
              Revenue Recovered. Projects Delivered.
            </h2>
            <p style={{ fontSize: 17, color: "#1A4A38", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              What happens when every hour gets tracked accurately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "We were losing ₹3-4 lakhs per month in unbilled client hours. Within 60 days of switching, our billing accuracy hit 98% and disputes dropped to zero.",
                name: "Karthik Rajan",
                role: "CEO, 85-person IT services firm, Chennai",
                stars: 5,
              },
              {
                quote: "The project profitability dashboard changed how we bid for projects. We now know our exact cost per hour before we quote. Margins up 22% in 6 months.",
                name: "Pallavi Shah",
                role: "Operations Director, Digital Agency, Mumbai",
                stars: 5,
              },
              {
                quote: "Payroll used to take 3 days because HR was manually pulling timesheet data. Now it takes 3 hours. Overtime is calculated automatically. No fights.",
                name: "Suresh Menon",
                role: "HR Manager, Consulting firm, Bangalore",
                stars: 5,
              },
            ].map((t, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 20, padding: "28px 26px", boxShadow: "0 8px 32px rgba(14,59,50,0.1)" }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} style={{ width: 16, height: 16, color: "#F59E0B", fill: "#F59E0B" }} />
                  ))}
                </div>
                <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.7, marginBottom: 18, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#64748B" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 8. MOBILE DARK SECTION ═══════════ */}
      <section style={{ background: "#102D23", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(207,242,94,0.15)", border: "1px solid rgba(207,242,94,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
                <Smartphone style={{ width: 12, height: 12, color: "#CFF25E" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#CFF25E", textTransform: "uppercase", letterSpacing: "0.8px" }}>Mobile App</span>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 16 }}>
                Track Hours From Any Job Site, Anytime
              </h2>
              <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.7, marginBottom: 32 }}>
                Native Android & iOS app. Start timers, switch projects, and submit timesheets from the field. GPS-tagged entries for site work. Offline mode — syncs when back online.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
                {mobileFeatures.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(207,242,94,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon style={{ width: 16, height: 16, color: "#CFF25E" }} />
                      </div>
                      <span style={{ fontSize: 15, color: "#CBD5E1" }}>{item.text}</span>
                    </div>
                  )
                })}
              </div>
              <Link href="/demo" className="cta-base cta-secondary cta-md">
                Try Mobile Timesheet
                <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
              </Link>
            </div>

            {/* Phone mockup */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 280, background: "#0F172A", borderRadius: 36, padding: "12px", boxShadow: "0 40px 100px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.08)" }}>
                <div style={{ background: "#1E293B", borderRadius: 28, overflow: "hidden" }}>
                  <div style={{ background: "#0F172A", padding: "14px 20px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 600 }}>9:41 AM</span>
                    <div style={{ width: 60, height: 18, background: "#0F172A", borderRadius: 9 }} />
                    <div style={{ width: 14, height: 10, background: "#CFF25E", borderRadius: 2 }} />
                  </div>
                  <div style={{ background: "#0E3B32", padding: "16px 20px 20px" }}>
                    <div style={{ fontSize: 11, color: "#CFF25E", fontWeight: 600, marginBottom: 4 }}>Active Timer</div>
                    <div style={{ fontSize: 28, color: "#fff", fontWeight: 800, fontFamily: "monospace" }}>02:14:37</div>
                    <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 4 }}>Zomato — API Integration</div>
                  </div>
                  <div style={{ background: "#F8FAFC", padding: "16px" }}>
                    <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                      <div style={{ flex: 1, background: "#FEF2F2", borderRadius: 10, padding: "10px", textAlign: "center" }}>
                        <div style={{ fontSize: 18 }}>⏸</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#DC2626", marginTop: 2 }}>Pause</div>
                      </div>
                      <div style={{ flex: 1, background: "#F0FDF4", borderRadius: 10, padding: "10px", textAlign: "center" }}>
                        <div style={{ fontSize: 18 }}>✓</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#16A34A", marginTop: 2 }}>Stop & Log</div>
                      </div>
                      <div style={{ flex: 1, background: "#EFF6FF", borderRadius: 10, padding: "10px", textAlign: "center" }}>
                        <div style={{ fontSize: 18 }}>➕</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: "#2563EB", marginTop: 2 }}>New Task</div>
                      </div>
                    </div>
                    <div style={{ background: "#fff", borderRadius: 12, padding: "12px", border: "1px solid #E2E8F0" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#1E293B", marginBottom: 8 }}>Today&apos;s Hours</div>
                      {[
                        { project: "Zomato — API", hours: "2h 14m", color: "#16A34A" },
                        { project: "Swiggy — Design", hours: "3h 30m", color: "#0369A1" },
                        { project: "Team Meeting", hours: "1h 00m", color: "#7C3AED" },
                      ].map((l, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: i < 2 ? "1px solid #F1F5F9" : "none" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: l.color }} />
                            <span style={{ fontSize: 11, color: "#334155" }}>{l.project}</span>
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 700, color: "#1E293B" }}>{l.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 9. BEFORE / AFTER ═══════════ */}
      <section style={{ background: "#FAF9F5", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: 12 }}>
              Before vs After Timesheet Software
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", maxWidth: 480, margin: "0 auto" }}>
              See what changes when every hour is tracked in real time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {advantageCards.map((card, ci) => (
              <div key={ci} style={{ background: card.bg, borderRadius: 20, padding: "32px 28px", border: `1px solid ${card.border}`, boxShadow: ci === 1 ? "0 20px 60px rgba(14,59,50,0.25)" : "0 4px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ci === 1 ? "rgba(207,242,94,0.15)" : "#F1F5F9", borderRadius: 8, padding: "6px 14px", marginBottom: 20 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: ci === 1 ? "#CFF25E" : "#64748B", textTransform: "uppercase", letterSpacing: "0.8px" }}>{card.label}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {card.points.map((pt, pi) => (
                    <div key={pi} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: pt.bad ? "#FEE2E2" : "rgba(207,242,94,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <span style={{ fontSize: 10, color: pt.bad ? "#DC2626" : "#CFF25E", fontWeight: 900 }}>{pt.bad ? "✕" : "✓"}</span>
                      </div>
                      <span style={{ fontSize: 14, color: ci === 1 ? "#CBD5E1" : "#475569", lineHeight: 1.6 }}>{pt.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 10. CTA ═══════════ */}
      <section style={{ background: "#0E3B32", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(207,242,94,0.15)", border: "1px solid rgba(207,242,94,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <Timer style={{ width: 12, height: 12, color: "#CFF25E" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#CFF25E", textTransform: "uppercase", letterSpacing: "0.8px" }}>Start Tracking Today</span>
          </div>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, marginBottom: 16, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            Stop Losing Revenue to<br />
            <span style={{ color: "#CFF25E" }}>Inaccurate Timesheets.</span>
          </h2>
          <p style={{ fontSize: 18, color: "#94A3B8", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Track every billable hour, invoice every client accurately, and sync payroll automatically — starting today.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/demo" className="cta-base cta-secondary cta-lg">
              Start Free Trial
              <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/demo" className="cta-base cta-secondary cta-lg">
              Schedule a Demo
              <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { icon: ShieldCheck, text: "No credit card required" },
              { icon: Users, text: "Setup in 3-5 days" },
              { icon: TrendingUp, text: "15% more billable hours" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon style={{ width: 16, height: 16, color: "#CFF25E" }} />
                  <span style={{ fontSize: 14, color: "#94A3B8" }}>{item.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 11. FAQ ═══════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "14px" }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "#F1F5F9", color: "#475569", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Everything You Need to Know About Timesheet Management
            </h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Answers to common questions about time tracking, billable hours, project costing, and payroll integration.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {faqData.map((item) => (
              <details key={item.q} className="group" style={{ borderRadius: "12px", background: "#F8FAFC", border: "1px solid #E2E8F0", overflow: "hidden", transition: "all 0.2s" }}>
                <summary className="flex items-center gap-3 cursor-pointer" style={{ padding: "16px 20px" }}>
                  <span style={{ width: 28, height: 28, borderRadius: "8px", background: "#EAF8F0", color: "#166534", border: "1px solid #BFEA4D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px", transition: "all 0.2s" }} className="group-open:bg-[#0E3B32] group-open:text-[#CFF25E] group-open:border-[#0E3B32]">
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A" }}>{item.q}</span>
                </summary>
                <div style={{ padding: "0 20px 16px 64px", fontSize: "13px", color: "#64748B", lineHeight: 1.75 }}>{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
