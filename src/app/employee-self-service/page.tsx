import React from "react"
import Link from "next/link"
import { Metadata } from "next"
import {
  ArrowRight, Smartphone, FileText, CheckCircle2, ChevronDown,
  Star, ShieldCheck, Users, Bell, Calendar,
  Receipt, Download, Clock, IndianRupee, Lock,
  BarChart3, Zap, Phone, Tablet, Globe, TrendingUp,
  UserCheck, PieChart, FolderOpen, CreditCard, MessageSquare,
  Building2, ChevronRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Employee Self Service (ESS) Portal India | Payslips, Leave & Tax Declarations",
  description: "Empower employees with 24/7 self-service access to payslips, leave, tax declarations, reimbursements, and attendance. Reduce HR helpdesk tickets by 80% with India's best ESS portal.",
  keywords: "employee self service portal India, ESS app, payslip download online, leave application portal, tax declaration online, IT declaration portal, reimbursement claim app, HR self service India",
  openGraph: {
    title: "Employee Self Service Portal India | ESS Mobile App",
    description: "Give every employee 24/7 access to payslips, leave, tax declarations, and more. Cut HR workload by 80%.",
    url: "https://hrmssoftwareinindia.com/employee-self-service",
    siteName: "HRMS Software in India",
    locale: "en_IN",
    type: "website",
  },
}

const painPoints = [
  {
    icon: MessageSquare,
    title: "HR Drowning in Repetitive Queries",
    desc: "\"What's my leave balance?\" \"Can you send my payslip?\" — same questions every single day stealing hours from real HR work.",
    iconBg: "#FEF2F2",
    iconColor: "#DC2626",
  },
  {
    icon: FileText,
    title: "Paper Proofs & Manual IT Declarations",
    desc: "Employees submit physical investment proofs in envelopes. HR manually enters 80C, HRA, 80D data into payroll. Zero audit trail.",
    iconBg: "#FFF7ED",
    iconColor: "#EA580C",
  },
  {
    icon: Clock,
    title: "Payslip Requests via WhatsApp",
    desc: "Employees message HR on WhatsApp for payslips. Finance forwards PDFs manually. No version control, no security, no efficiency.",
    iconBg: "#FEF9C3",
    iconColor: "#CA8A04",
  },
  {
    icon: Receipt,
    title: "Excel-Based Reimbursement Chaos",
    desc: "Claim forms submitted via email. Finance team reconciles manually in Excel. Month-end is always a mess of missing bills and duplicate entries.",
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
  },
]

const features = [
  {
    icon: IndianRupee,
    title: "Payslip Downloads",
    desc: "Password-protected PDF payslips accessible anytime. Full breakdown: Basic, HRA, DA, PF, ESI, PT, TDS, and net pay. 36-month history available.",
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
  },
  {
    icon: FileText,
    title: "IT & Investment Declarations",
    desc: "Declare 80C, 80D, HRA, LTA, home loan interest online. Upload proof documents (PDF/image). Track verification status in real time.",
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    icon: Calendar,
    title: "Leave Application Portal",
    desc: "Apply for casual, sick, earned, or maternity leave. Real-time balance display. Manager approval workflow with push notifications at every stage.",
    iconBg: "#FFF7ED",
    iconColor: "#EA580C",
  },
  {
    icon: Receipt,
    title: "Expense & Reimbursement Claims",
    desc: "Submit travel, medical, food, and phone claims with bill uploads. Approved amounts auto-flow into next payroll. Complete claim history.",
    iconBg: "#FDF4FF",
    iconColor: "#9333EA",
  },
  {
    icon: Download,
    title: "Form 16 & Tax Documents",
    desc: "Download Form 16 Part A & B in one click. Access TDS certificates, salary certificates, and employment letters without contacting HR.",
    iconBg: "#FEF2F2",
    iconColor: "#DC2626",
  },
  {
    icon: BarChart3,
    title: "Salary History & CTC Breakup",
    desc: "Full salary history with year-on-year comparison. View CTC vs take-home breakdown, annual bonus tracker, and increment records.",
    iconBg: "#F0FDF4",
    iconColor: "#0E3B32",
  },
]

const stats = [
  { value: "80%", label: "Reduction in HR Helpdesk Tickets" },
  { value: "24/7", label: "Employee Self-Service Access" },
  { value: "3 min", label: "Average Time to Submit IT Declaration" },
  { value: "1-click", label: "Payslip & Form 16 Download" },
]

const whyChooseItems = [
  {
    icon: Globe,
    title: "Web + Mobile App",
    desc: "Native Android & iOS app plus a responsive web portal. Employees access everything from phone, tablet, or desktop — wherever they are.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    desc: "256-bit AES encryption, multi-factor authentication, role-based access, and full audit logs. Every document access is tracked.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    desc: "Push notifications, email alerts, and in-app messages for leave approvals, payslip availability, tax deadline reminders, and claim status.",
  },
  {
    icon: Zap,
    title: "Payroll Auto-Sync",
    desc: "IT declarations and approved claims auto-sync with payroll engine. No manual re-entry. Tax calculations update instantly when declarations change.",
  },
  {
    icon: FolderOpen,
    title: "Document Vault",
    desc: "Secure employee document storage — offer letters, appointment letters, appraisal letters, Form 16, salary slips — all in one place.",
  },
  {
    icon: UserCheck,
    title: "Manager Dashboard",
    desc: "Managers view team attendance, approve leave, review claims, and track performance — all from a single mobile-friendly dashboard.",
  },
]

const mobileFeatures = [
  { icon: IndianRupee, text: "View & download payslips instantly" },
  { icon: Calendar, text: "Apply for leave on-the-go" },
  { icon: Receipt, text: "Capture bills and submit claims" },
  { icon: FileText, text: "Upload IT declaration proofs" },
  { icon: Download, text: "Download Form 16 & tax docs" },
  { icon: Bell, text: "Real-time approval notifications" },
]

const advantageCards = [
  {
    label: "Without ESS Portal",
    bg: "#F8FAFC",
    border: "#E2E8F0",
    points: [
      { text: "HR spends 3+ hours/day answering payslip & leave queries", bad: true },
      { text: "IT declarations submitted on paper, manually entered", bad: true },
      { text: "Payslips shared via WhatsApp or email — no security", bad: true },
      { text: "Reimbursements take 2-3 weeks to process", bad: true },
      { text: "Employees visit HR in-person for every document", bad: true },
    ],
  },
  {
    label: "With ESS Portal",
    bg: "#0E3B32",
    border: "#0E3B32",
    points: [
      { text: "Employees self-serve payslips, leave, and docs in seconds", bad: false },
      { text: "IT declarations done online in 3 minutes with proof uploads", bad: false },
      { text: "Encrypted password-protected payslip downloads anytime", bad: false },
      { text: "Claims approved in 24 hours, auto-added to payroll", bad: false },
      { text: "Complete document vault — zero HR intervention needed", bad: false },
    ],
  },
]

const faqData = [
  {
    q: "What is an Employee Self Service (ESS) portal?",
    a: "An ESS portal is a web and mobile platform that lets employees independently access HR information — payslips, leave balances, attendance records, tax declarations, and reimbursement claims — without contacting HR. It reduces repetitive HR queries by up to 80%.",
  },
  {
    q: "Can employees download payslips from the ESS app?",
    a: "Yes. Employees can view and download password-protected PDF payslips for any month directly from the mobile app or web portal. Each payslip includes earnings, deductions, and year-to-date totals. A 36-month history is available.",
  },
  {
    q: "How does online leave application work?",
    a: "Employees select leave type (casual, sick, earned, maternity, etc.), choose dates, add a reason, and submit. The request routes to their reporting manager for approval. Real-time leave balances show before submission, with notifications at every stage.",
  },
  {
    q: "Can employees submit tax (IT) declarations online?",
    a: "Absolutely. Employees declare 80C, 80D, HRA, LTA, and home loan interest directly in the portal. They upload supporting proofs (PDFs, images) and track verification status in real time. Approved declarations auto-update TDS calculations in payroll.",
  },
  {
    q: "How does the reimbursement claim process work?",
    a: "Employees select claim type (travel, medical, food, phone), enter amount, upload bills, and submit. Claims route through configured approval workflows. Once approved, amounts are automatically included in the next payroll cycle.",
  },
  {
    q: "Is the ESS portal available as a mobile app?",
    a: "Yes. Available as a native Android and iOS app plus a responsive web portal. Employees access all features on-the-go — submit claims, check attendance, download documents, and receive push notifications for approvals.",
  },
  {
    q: "Is employee data secure?",
    a: "All data is encrypted with 256-bit AES in transit and at rest. The portal supports multi-factor authentication, role-based access control, and full audit logs for every action. Compliant with Indian data protection regulations.",
  },
  {
    q: "How quickly can we deploy the ESS portal?",
    a: "Most organizations are live within 1-2 weeks. Our team handles employee data import, leave policy configuration, approval workflow setup, and provides training for HR admins and employees. Dedicated support throughout.",
  },
]

export default function EmployeeSelfServicePage() {
  return (
    <main className="min-h-screen font-sans overflow-hidden">

      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "72px" }}>
        <div className="max-w-[1280px] mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-3 p-1 pr-5 rounded-full mb-8 shadow-sm" style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0" }}>
            <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full" style={{ backgroundColor: "#0E3B32", color: "#CFF25E", fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
              <Smartphone style={{ width: 12, height: 12 }} />
              ESS Portal
            </div>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#0F172A" }}>
              80% Fewer HR Helpdesk Tickets — Guaranteed
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(36px, 5.5vw, 62px)", fontWeight: 800, color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: "20px", maxWidth: "820px", marginLeft: "auto", marginRight: "auto" }}>
            Give Every Employee{" "}
            <span style={{ color: "#3CB371" }}>24/7 Self-Service</span>{" "}
            Access — Zero HR Intervention
          </h1>

          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#475569", maxWidth: "640px", margin: "0 auto 36px", lineHeight: 1.7 }}>
            Payslips, leave, IT declarations, Form 16, expense claims — all on web & mobile. Stop answering the same 10 questions. Let your employees help themselves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Start Free Trial
              <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/demo" className="cta-base cta-secondary cta-lg">
              Watch ESS Demo
              <span className="cta-arrow" style={{ width: 28, height: 28 }}><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>

          {/* Hero Dashboard Mockup */}
          <div className="dashboard-3d max-w-[900px] mx-auto" style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 40px 120px rgba(14,59,50,0.18), 0 12px 40px rgba(0,0,0,0.08)", border: "1px solid #E2E8F0" }}>
            {/* Browser chrome */}
            <div style={{ background: "#F1F5F9", padding: "12px 16px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FCA5A5" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FCD34D" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#86EFAC" }} />
              </div>
              <div style={{ flex: 1, background: "#fff", borderRadius: 6, padding: "4px 12px", fontSize: 12, color: "#94A3B8", textAlign: "center", border: "1px solid #E2E8F0" }}>
                app.hrmssoftwareinindia.com/self-service
              </div>
            </div>
            {/* Dashboard content */}
            <div style={{ background: "#FAFBFC", padding: "24px" }}>
              {/* Top welcome bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#0F172A" }}>Good Morning, Rajesh 👋</div>
                  <div style={{ fontSize: 13, color: "#64748B" }}>Senior Engineer · EmployeeID: EMP00142</div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: "#15803D" }}>April 2025 Payslip ✓</div>
                  <div style={{ background: "#0E3B32", borderRadius: 8, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: "#CFF25E" }}>Download Form 16</div>
                </div>
              </div>
              {/* Quick stat cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 20 }}>
                {[
                  { label: "Leave Balance", value: "12 days", sub: "Earned Leave", color: "#0E3B32", bg: "#F0FDF4" },
                  { label: "Pending Claims", value: "₹4,200", sub: "2 awaiting approval", color: "#7C3AED", bg: "#F5F3FF" },
                  { label: "TDS Deducted", value: "₹18,500", sub: "FY 2024-25", color: "#B45309", bg: "#FFFBEB" },
                  { label: "IT Declaration", value: "₹1.5L", sub: "80C declared", color: "#0369A1", bg: "#EFF6FF" },
                ].map((s, i) => (
                  <div key={i} style={{ background: s.bg, borderRadius: 12, padding: "14px 16px", border: "1px solid #E2E8F0" }}>
                    <div style={{ fontSize: 11, color: "#64748B", fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
              {/* Bottom action rows */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: "#fff", borderRadius: 12, padding: "16px", border: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", marginBottom: 10 }}>Quick Actions</div>
                  {[
                    { label: "Apply Leave", icon: "📅" },
                    { label: "Submit Expense Claim", icon: "🧾" },
                    { label: "Download Payslip", icon: "📄" },
                    { label: "Update IT Declaration", icon: "📊" },
                  ].map((a, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0", borderBottom: i < 3 ? "1px solid #F1F5F9" : "none" }}>
                      <span style={{ fontSize: 14 }}>{a.icon}</span>
                      <span style={{ fontSize: 13, color: "#334155", fontWeight: 500 }}>{a.label}</span>
                      <ChevronRight style={{ width: 14, height: 14, color: "#CBD5E1", marginLeft: "auto" }} />
                    </div>
                  ))}
                </div>
                <div style={{ background: "#fff", borderRadius: 12, padding: "16px", border: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", marginBottom: 10 }}>Recent Activity</div>
                  {[
                    { text: "Payslip March 2025 downloaded", time: "2h ago", dot: "#16A34A" },
                    { text: "Leave approved by Priya Sharma", time: "Yesterday", dot: "#3B82F6" },
                    { text: "Medical claim ₹2,500 approved", time: "3 days ago", dot: "#8B5CF6" },
                    { text: "Form 16 FY24 available", time: "5 days ago", dot: "#F59E0B" },
                  ].map((a, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 0", borderBottom: i < 3 ? "1px solid #F1F5F9" : "none" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: a.dot, marginTop: 4, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 12, color: "#334155" }}>{a.text}</div>
                        <div style={{ fontSize: 11, color: "#94A3B8" }}>{a.time}</div>
                      </div>
                    </div>
                  ))}
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
              HR Teams Are Stuck on Repeat
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              70% of HR helpdesk tickets are the same 4-5 questions. Every. Single. Day. There's a better way.
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
              <span style={{ fontSize: 12, fontWeight: 700, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.8px" }}>ESS Features</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: 14 }}>
              Everything Employees Need, In One Portal
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              From payslips to IT declarations — complete self-service that works on web and mobile.
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

      {/* ═══════════ 4. INTEGRATIONS ═══════════ */}
      <section style={{ background: "#F0FDF4", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-cols-1 lg:grid-cols-2">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#DCFCE7", border: "1px solid #BBF7D0", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.8px" }}>Deep Integration</span>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: 16 }}>
                Connected to Every Module — No Data Silos
              </h2>
              <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.7, marginBottom: 28 }}>
                ESS isn't a standalone portal. It's deeply integrated with Payroll, Attendance, Leave, and Expense engines — so changes reflect instantly, everywhere.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: IndianRupee, text: "IT declarations auto-update TDS in payroll engine", color: "#16A34A" },
                  { icon: Receipt, text: "Approved expense claims post directly to payroll", color: "#7C3AED" },
                  { icon: Calendar, text: "Leave balances sync with attendance in real time", color: "#EA580C" },
                  { icon: Download, text: "Form 16 auto-generated after payroll closure", color: "#0369A1" },
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
                  <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { name: "Payroll Engine", icon: IndianRupee, desc: "TDS auto-calculated from declarations", color: "#16A34A", bg: "#F0FDF4" },
                { name: "Attendance", icon: Clock, desc: "Real-time punch & regularization", color: "#0369A1", bg: "#EFF6FF" },
                { name: "Leave Module", icon: Calendar, desc: "Balance, history, encashment", color: "#EA580C", bg: "#FFF7ED" },
                { name: "Expense Claims", icon: Receipt, desc: "Bill upload, OCR, approval flow", color: "#7C3AED", bg: "#F5F3FF" },
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }} className="grid grid-cols-2 lg:grid-cols-4">
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
              Built for Indian Employees & HR Teams
            </h2>
            <p style={{ fontSize: 17, color: "#475569", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Not a US product retrofitted for India. Purpose-built for Indian payroll laws, Indian tax declarations, and Indian compliance workflows.
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
              HR Teams Love the Silence
            </h2>
            <p style={{ fontSize: 17, color: "#1A4A38", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              Fewer queries. Fewer emails. More strategic work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Our HR helpdesk tickets dropped by 78% in the first month. Employees now download payslips themselves — we barely get a call.",
                name: "Deepika Menon",
                role: "HR Head, 620-employee IT company, Hyderabad",
                stars: 5,
              },
              {
                quote: "IT declaration season used to be a nightmare — papers everywhere. Now employees upload proofs themselves, HR just verifies. Game changer.",
                name: "Rajan Pillai",
                role: "Finance Manager, Manufacturing firm, Pune",
                stars: 5,
              },
              {
                quote: "The mobile app is what sold it for us. Our field sales team submits expense claims from their phones the same day. Approvals in hours, not weeks.",
                name: "Sneha Agarwal",
                role: "Admin Director, FMCG company, Delhi",
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
                Full ESS Power in Your Pocket
              </h2>
              <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.7, marginBottom: 32 }}>
                Native Android & iOS app. Everything your employees need — offline payslip access, one-tap leave apply, instant claim submission — all without opening a laptop.
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
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#1E293B", border: "1px solid #334155", borderRadius: 12, padding: "10px 18px" }}>
                  <Phone style={{ width: 18, height: 18, color: "#CFF25E" }} />
                  <div>
                    <div style={{ fontSize: 10, color: "#64748B", fontWeight: 600 }}>Download on</div>
                    <div style={{ fontSize: 14, color: "#fff", fontWeight: 700 }}>Google Play</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#1E293B", border: "1px solid #334155", borderRadius: 12, padding: "10px 18px" }}>
                  <Tablet style={{ width: 18, height: 18, color: "#CFF25E" }} />
                  <div>
                    <div style={{ fontSize: 10, color: "#64748B", fontWeight: 600 }}>Download on</div>
                    <div style={{ fontSize: 14, color: "#fff", fontWeight: 700 }}>App Store</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 280, background: "#0F172A", borderRadius: 36, padding: "12px", boxShadow: "0 40px 100px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.08)" }}>
                <div style={{ background: "#1E293B", borderRadius: 28, overflow: "hidden" }}>
                  {/* Phone status bar */}
                  <div style={{ background: "#0F172A", padding: "14px 20px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#94A3B8", fontWeight: 600 }}>9:41 AM</span>
                    <div style={{ width: 60, height: 18, background: "#0F172A", borderRadius: 9 }} />
                    <div style={{ display: "flex", gap: 4 }}>
                      <div style={{ width: 14, height: 10, background: "#CFF25E", borderRadius: 2 }} />
                    </div>
                  </div>
                  {/* App header */}
                  <div style={{ background: "#0E3B32", padding: "16px 20px 20px" }}>
                    <div style={{ fontSize: 11, color: "#CFF25E", fontWeight: 600, marginBottom: 4 }}>Hi, Rajesh 👋</div>
                    <div style={{ fontSize: 18, color: "#fff", fontWeight: 800 }}>My Self Service</div>
                  </div>
                  {/* App body */}
                  <div style={{ background: "#F8FAFC", padding: "16px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                      {[
                        { icon: "💰", label: "Payslip", color: "#F0FDF4" },
                        { icon: "📅", label: "Leave", color: "#FFF7ED" },
                        { icon: "🧾", label: "Claims", color: "#F5F3FF" },
                        { icon: "📊", label: "IT Decl.", color: "#EFF6FF" },
                      ].map((a, i) => (
                        <div key={i} style={{ background: a.color, borderRadius: 12, padding: "14px", textAlign: "center", border: "1px solid #E2E8F0" }}>
                          <div style={{ fontSize: 22, marginBottom: 4 }}>{a.icon}</div>
                          <div style={{ fontSize: 11, fontWeight: 700, color: "#1E293B" }}>{a.label}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ background: "#fff", borderRadius: 12, padding: "12px", border: "1px solid #E2E8F0" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#1E293B", marginBottom: 8 }}>Leave Balance</div>
                      {[
                        { type: "Earned Leave", days: "12", pct: 80, color: "#16A34A" },
                        { type: "Sick Leave", days: "4", pct: 40, color: "#3B82F6" },
                        { type: "Casual Leave", days: "2", pct: 20, color: "#F59E0B" },
                      ].map((l, i) => (
                        <div key={i} style={{ marginBottom: 8 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                            <span style={{ fontSize: 10, color: "#64748B" }}>{l.type}</span>
                            <span style={{ fontSize: 10, fontWeight: 700, color: "#1E293B" }}>{l.days} days</span>
                          </div>
                          <div style={{ height: 4, background: "#F1F5F9", borderRadius: 2 }}>
                            <div style={{ height: 4, width: `${l.pct}%`, background: l.color, borderRadius: 2 }} />
                          </div>
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
              Before vs After ESS Portal
            </h2>
            <p style={{ fontSize: 17, color: "#64748B", maxWidth: 480, margin: "0 auto" }}>
              See what changes when every employee is empowered to self-serve.
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
            <Smartphone style={{ width: 12, height: 12, color: "#CFF25E" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#CFF25E", textTransform: "uppercase", letterSpacing: "0.8px" }}>Get Started Today</span>
          </div>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, marginBottom: 16, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            Stop Answering the Same Questions.<br />
            <span style={{ color: "#CFF25E" }}>Let Employees Self-Serve.</span>
          </h2>
          <p style={{ fontSize: 18, color: "#94A3B8", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Deploy the ESS portal in 1-2 weeks. Reduce HR helpdesk tickets by 80% from day one.
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
              { icon: Users, text: "Setup in 1-2 weeks" },
              { icon: TrendingUp, text: "80% fewer HR tickets" },
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
              Everything You Need to Know About ESS Portal
            </h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Find answers to common questions about payslips, leave, IT declarations, expense claims, and mobile access.
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
