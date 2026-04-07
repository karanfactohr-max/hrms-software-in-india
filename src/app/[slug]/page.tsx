import { notFound } from "next/navigation"
import Link from "next/link"
import { products } from "@/lib/data/products"
import { hubPages } from "@/lib/data/navigation"
import {
  ArrowRight, CheckCircle2, ChevronDown, ShieldCheck, XCircle, IndianRupee, Landmark,
  FileCheck2, Wallet, Workflow, Languages, Building2, Smartphone, Bot, Fingerprint,
  Clock3, Scale, BadgeCheck,
} from "lucide-react"
import type { Metadata } from "next"

// Generate static pages for all products + hubs
export function generateStaticParams() {
  const productSlugs = products.map((p) => ({ slug: p.slug }))
  const hubSlugs = hubPages.map((h) => ({ slug: h.slug }))
  const otherSlugs = [
    "pricing", "demo", "about", "contact",
  ].map((s) => ({ slug: s }))
  return [...productSlugs, ...hubSlugs, ...otherSlugs]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  if (slug === "payroll-software") {
    return {
      title: "Payroll Software India | Automated Payroll, PF, ESI, PT, TDS",
      description:
        "Run 100% accurate Indian payroll in minutes. Automate PF, ESI, PT for 19 states, TDS, Form 16, arrears, and multi-bank salary disbursement with built-in compliance.",
      keywords: [
        "payroll software india",
        "automated payroll software",
        "pf esi pt tds software",
        "form 16 generation software",
        "multi state payroll india",
      ],
    }
  }
  const product = products.find((p) => p.slug === slug)
  if (product) {
    return {
      title: `${product.name} India | HRMS Software in India`,
      description: product.description,
    }
  }
  const hub = hubPages.find((h) => h.slug === slug)
  if (hub) {
    return {
      title: `${hub.name} | Free HR Resources India`,
      description: hub.description,
    }
  }
  const titles: Record<string, string> = {
    pricing: "Pricing Plans | HRMS Software in India",
    demo: "Book a Demo | HRMS Software in India",
    about: "About Us | HRMS Software in India",
    contact: "Contact Us | HRMS Software in India",
  }
  return { title: titles[slug] || "HRMS Software in India" }
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (slug === "payroll-software") return <PayrollSoftwarePage />

  const product = products.find((p) => p.slug === slug)
  if (product) return <ProductPage product={product} />

  const hub = hubPages.find((h) => h.slug === slug)
  if (hub) return <HubPage hub={hub} />

  if (slug === "pricing") return <PricingPage />
  if (slug === "demo") return <DemoPage />
  if (slug === "about") return <AboutPage />
  if (slug === "contact") return <ContactPage />

  notFound()
}

// ==================== PRODUCT PAGE ====================
function PayrollSoftwarePage() {
  const payroll = products.find((p) => p.slug === "payroll-software")
  if (!payroll) notFound()

  const featureCards = [
    {
      title: "Unlimited Salary Components & Custom CTC",
      desc: "Build flexible compensation structures with unlimited earning and deduction components such as basic, HRA, gratuity, special allowance, retention pay, and policy-specific components.",
      icon: <Wallet style={{ width: 18, height: 18 }} />,
    },
    {
      title: "Automated Arrears & Retroactive Pay",
      desc: "Late attendance sync, salary revisions, missed payouts, and policy corrections are auto-calculated with statutory impact so HR and finance teams avoid manual back-calculation.",
      icon: <Clock3 style={{ width: 18, height: 18 }} />,
    },
    {
      title: "Vernacular & Multilingual Payslips",
      desc: "Deliver clear and localized payslips to diverse teams so every employee understands gross pay, deductions, net pay, and tax breakup without confusion.",
      icon: <Languages style={{ width: 18, height: 18 }} />,
    },
    {
      title: "Maker-Checker Workflow & Audit Trails",
      desc: "Configure approval layers for payroll lock and bank payout. Every change, approver, and status is tracked for internal controls and audit preparedness.",
      icon: <Workflow style={{ width: 18, height: 18 }} />,
    },
    {
      title: "Single-Click, Multi-Bank Disbursement",
      desc: "Generate secure payout files for major Indian banks and disburse salaries in one controlled cycle with clear file status and reconciliation checkpoints.",
      icon: <Building2 style={{ width: 18, height: 18 }} />,
    },
    {
      title: "Performance-Linked Variable Pay",
      desc: "Connect incentives and bonus payouts to goals and performance outcomes so variable compensation is transparent, formula-driven, and payroll-ready.",
      icon: <IndianRupee style={{ width: 18, height: 18 }} />,
    },
  ]

  const payrollFaqs = [
    {
      q: "Can I process payroll for employees in multiple Indian states?",
      a: "Yes. The payroll engine automatically applies state-specific compliance rules, including Professional Tax slabs for 19 states, helping distributed teams run payroll without manual policy switching.",
    },
    {
      q: "How does the software handle arrears and retroactive changes?",
      a: "Arrears are auto-processed from late attendance sync, leave corrections, payroll inputs, and salary revisions. The system recalculates statutory impact so payroll remains accurate and compliant.",
    },
    {
      q: "Do you support old vs new tax regime selection?",
      a: "Yes. Employees can compare old and new tax regimes in ESS and submit preferences. TDS projections and monthly deductions update automatically based on declarations.",
    },
    {
      q: "Can we create custom salary components and policies?",
      a: "Absolutely. You can define unlimited custom earnings and deductions, configure policy rules, and tailor payroll structures for business units, grades, and entities.",
    },
  ]

  return (
    <>
      <section className="hero-gradient" style={{ padding: "84px 0 68px" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ maxWidth: "980px", margin: "0 auto" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "6px 14px", borderRadius: "999px", border: "1px solid #BBF7D0", background: "#F0FDF4", color: "#166534", fontSize: "12px", fontWeight: 800, letterSpacing: "0.7px", textTransform: "uppercase", marginBottom: "16px" }}>
              <ShieldCheck style={{ width: 14, height: 14 }} />
              Payroll Software for India
            </span>
            <h1 style={{ fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.08, letterSpacing: "-1.8px", marginBottom: "16px" }}>
              Process 100% Accurate Indian Payroll in Minutes, Not Days.
            </h1>
            <p style={{ fontSize: "18px", color: "#475569", lineHeight: 1.75, maxWidth: "860px", margin: "0 auto 28px" }}>
              Eliminate spreadsheet errors and compliance anxiety. Our automated payroll software syncs attendance and leave data, handles PF, ESI, PT, TDS, and ensures employees are paid on time, every cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ marginBottom: "18px" }}>
              <Link href="/demo" className="cta-base cta-primary cta-lg">
                Start 14-Day Free Trial
                <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
              </Link>
              <Link href="/demo" className="cta-base cta-secondary cta-lg">
                See a Live Demo
                <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {["99.9% Processing Accuracy", "Supports 19 States PT", "Zero Compliance Penalties"].map((badge) => (
                <span key={badge} style={{ border: "1px solid #BBF7D0", background: "#FFFFFF", borderRadius: "999px", padding: "6px 11px", fontSize: "12px", fontWeight: 700, color: "#166534" }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "74px 0" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "28px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.14, marginBottom: "10px" }}>
              Stop Letting Payroll Run Your Life
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.75, maxWidth: "760px", margin: "0 auto" }}>
              Compare manual payroll chaos with a modern payroll automation engine designed for Indian HR, finance, and compliance operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div style={{ border: "1px solid #FECACA", borderRadius: "16px", background: "#FFF6F6", padding: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: 800, color: "#B91C1C", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px" }}>
                Manual Payroll Nightmares
              </p>
              <div className="space-y-3">
                {[
                  "Juggling spreadsheets for attendance, leaves, reimbursements, and variable pay inputs",
                  "Manually calculating arrears and retroactive pay across payroll cycles",
                  "Tracking changing tax slabs and state-wise PT rules with constant rework",
                  "Spending days on ECR files, Form 16 preparation, and audit paperwork",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <XCircle style={{ width: 16, height: 16, color: "#DC2626", marginTop: "2px", flexShrink: 0 }} />
                    <p style={{ fontSize: "14px", color: "#7F1D1D", lineHeight: 1.7 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ border: "1px solid #86EFAC", borderRadius: "16px", background: "linear-gradient(135deg, #F0FDF4, #DCFCE7)", padding: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: 800, color: "#166534", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "12px" }}>
                Our Automated Payroll Engine
              </p>
              <div className="space-y-3">
                {[
                  "Real-time sync from biometric and mobile attendance into payroll inputs",
                  "Smart rules auto-calculate missed punches, LOP, overtime, and salary revisions",
                  "Always updated with the latest Indian statutory payroll and tax requirements",
                  "One-click generation of audit-ready challans, reports, and compliance files",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 style={{ width: 16, height: 16, color: "#16A34A", marginTop: "2px", flexShrink: 0 }} />
                    <p style={{ fontSize: "14px", color: "#14532D", lineHeight: 1.7 }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "78px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "28px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.16, marginBottom: "10px" }}>
              A Payroll Engine Built for Indian Businesses
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.75, maxWidth: "820px", margin: "0 auto" }}>
              Configure, process, approve, and disburse payroll with confidence using a payroll software stack optimized for Indian tax, compliance, and organizational complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {featureCards.map((feature) => (
              <div key={feature.title} style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#FFFFFF", padding: "18px", boxShadow: "0 10px 28px rgba(15,23,42,0.05)" }}>
                <span style={{ width: 34, height: 34, borderRadius: "10px", background: "#F0FDF4", color: "#16A34A", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                  {feature.icon}
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0F172A", lineHeight: 1.3, marginBottom: "8px" }}>{feature.title}</h3>
                <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.72 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #052E24 0%, #064E3B 55%, #022C22 100%)" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "26px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#ECFDF5", lineHeight: 1.16, marginBottom: "10px" }}>
              100% Statutory Compliance. Zero Penalties. Guaranteed.
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(220,252,231,0.85)", lineHeight: 1.75, maxWidth: "820px", margin: "0 auto" }}>
              Stay ahead of PF, ESI, PT, TDS, and year-end tax documentation without hiring extra compliance specialists. This payroll software handles the heavy lifting end-to-end.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "PF & ESI Automation", desc: "Auto-calculate contributions and generate upload-ready ECR files.", icon: <ShieldCheck style={{ width: 16, height: 16 }} /> },
              { title: "19-State Professional Tax", desc: "Apply correct PT slabs automatically across supported states.", icon: <Landmark style={{ width: 16, height: 16 }} /> },
              { title: "TDS & Tax Management", desc: "Manage monthly TDS with declaration workflows and projections.", icon: <IndianRupee style={{ width: 16, height: 16 }} /> },
              { title: "Automated Form 16", desc: "Generate Form 16 Part A & B and Form 12BB at financial year close.", icon: <FileCheck2 style={{ width: 16, height: 16 }} /> },
              { title: "LWF, Gratuity, Bonus", desc: "Comply with LWF, gratuity, bonus, and overtime-linked obligations.", icon: <Scale style={{ width: 16, height: 16 }} /> },
              { title: "Audit-Ready Trails", desc: "Maintain maker-checker logs and approval history for every cycle.", icon: <BadgeCheck style={{ width: 16, height: 16 }} /> },
            ].map((item) => (
              <div key={item.title} style={{ border: "1px solid rgba(134,239,172,0.35)", borderRadius: "13px", background: "rgba(255,255,255,0.06)", padding: "14px" }}>
                <div className="flex items-center gap-2" style={{ marginBottom: "6px", color: "#A7F3D0" }}>
                  {item.icon}
                  <p style={{ fontSize: "15px", fontWeight: 700, color: "#ECFDF5" }}>{item.title}</p>
                </div>
                <p style={{ fontSize: "13px", color: "rgba(220,252,231,0.86)", lineHeight: 1.66 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "76px 0" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "26px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: "10px" }}>
              Connected to the Tools You Already Use
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "820px", margin: "0 auto", lineHeight: 1.75 }}>
              Payroll should never live in a silo. Sync attendance, leave, expenses, and accounting tools for consistent, error-free salary closure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#FFFFFF", padding: "18px" }}>
              <p style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>HR Data Sync</p>
              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7, marginBottom: "10px" }}>
                Pull accurate LOP, overtime, and exception data directly from attendance, leave, geo-tracking, and timesheet workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Biometric", "Geo Attendance", "Leave Management", "Timesheets", "Expense Claims"].map((item) => (
                  <span key={item} style={{ border: "1px solid #D1FAE5", borderRadius: "999px", background: "#F0FDF4", padding: "5px 10px", fontSize: "12px", fontWeight: 700, color: "#166534" }}>{item}</span>
                ))}
              </div>
            </div>
            <div style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#FFFFFF", padding: "18px" }}>
              <p style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>Accounting Ready</p>
              <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7, marginBottom: "10px" }}>
                Push payroll journal entries and payout-ready data into finance systems to remove duplicate manual posting and reconciliation delays.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Tally", "QuickBooks", "SAP", "Oracle", "API Connectors"].map((item) => (
                  <span key={item} style={{ border: "1px solid #DBEAFE", borderRadius: "999px", background: "#EFF6FF", padding: "5px 10px", fontSize: "12px", fontWeight: 700, color: "#1D4ED8" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "82px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: "10px" }}>
                Put Payroll Power in Your Employees&apos; Pockets
              </h2>
              <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.75, marginBottom: "16px" }}>
                Reduce repetitive HR tickets with ESS and mobile-first payroll access. Employees can manage tax declarations, compare tax regimes, and fetch payroll documents instantly.
              </p>
              <div className="space-y-3">
                {[
                  "Old vs New Tax Regime comparison for informed salary tax planning",
                  "Digital tax declaration and proof uploads (80C/80D) via mobile",
                  "24/7 access to payslips, tax summaries, and historical payroll documents",
                  "AI chatbot for instant answers to routine payroll and deduction queries",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 style={{ width: 16, height: 16, color: "#16A34A", marginTop: "2px", flexShrink: 0 }} />
                    <p style={{ fontSize: "14px", color: "#334155", lineHeight: 1.65 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: "16px", border: "1px solid #E2E8F0", background: "#FFFFFF", padding: "18px", boxShadow: "0 10px 28px rgba(15,23,42,0.08)" }}>
              <p style={{ fontSize: "12px", color: "#16A34A", fontWeight: 800, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px" }}>Employee Self-Service Preview</p>
              <div style={{ borderRadius: "12px", border: "1px solid #DCFCE7", background: "#F0FDF4", padding: "12px", marginBottom: "10px" }}>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#14532D" }}>Tax Regime Comparison</span>
                  <Fingerprint style={{ width: 14, height: 14, color: "#16A34A" }} />
                </div>
                <p style={{ fontSize: "12px", color: "#166534", marginTop: "5px" }}>Old Regime: ₹2,18,000 tax | New Regime: ₹1,92,000 tax</p>
              </div>
              <div style={{ borderRadius: "12px", border: "1px solid #E2E8F0", background: "#F8FAFC", padding: "12px", marginBottom: "10px" }}>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Payslip Download</span>
                  <Smartphone style={{ width: 14, height: 14, color: "#475569" }} />
                </div>
                <p style={{ fontSize: "12px", color: "#64748B", marginTop: "5px" }}>March 2026 Payslip ready with full earning and deduction breakup.</p>
              </div>
              <div style={{ borderRadius: "12px", border: "1px solid #E2E8F0", background: "#FFFFFF", padding: "12px" }}>
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#0F172A" }}>Payroll Chatbot</span>
                  <Bot style={{ width: 14, height: 14, color: "#0F172A" }} />
                </div>
                <p style={{ fontSize: "12px", color: "#64748B", marginTop: "5px" }}>&ldquo;Why is my PT amount higher this month?&rdquo; answered instantly with state slab explanation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "76px 0" }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: "8px" }}>
              Run Payroll in 3 Simple Steps
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", lineHeight: 1.75, maxWidth: "760px", margin: "0 auto" }}>
              Move from payroll preparation to payout and compliance filing in one streamlined workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Sync & Validate",
                desc: "Attendance, leave, and expense inputs auto-flow into payroll. The engine flags anomalies for quick review.",
              },
              {
                step: "02",
                title: "Process & Approve",
                desc: "Earnings, deductions, PT, PF, ESI, and TDS are calculated. Route payroll through maker-checker approvals.",
              },
              {
                step: "03",
                title: "Disburse & File",
                desc: "Generate bank payout files, publish digital payslips, and download statutory reports and challans.",
              },
            ].map((item) => (
              <div key={item.step} style={{ border: "1px solid #E2E8F0", borderRadius: "14px", background: "#FFFFFF", padding: "18px" }}>
                <span style={{ width: 34, height: 34, borderRadius: "999px", background: "#0E3B32", color: "#CFF25E", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, marginBottom: "10px" }}>{item.step}</span>
                <p style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", lineHeight: 1.25, marginBottom: "8px" }}>{item.title}</p>
                <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.68 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "76px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="max-w-[980px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: "8px" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: "15px", color: "#64748B", lineHeight: 1.72 }}>
              Common payroll software questions from HR and finance teams running Indian payroll.
            </p>
          </div>
          <div className="space-y-3">
            {payrollFaqs.map((faq) => (
              <details key={faq.q} className="group" style={{ borderRadius: "12px", border: "1px solid #E2E8F0", background: "#FFFFFF", overflow: "hidden" }}>
                <summary className="flex items-center justify-between gap-4 cursor-pointer" style={{ padding: "15px 16px" }}>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A" }}>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div style={{ padding: "0 16px 15px", fontSize: "14px", color: "#64748B", lineHeight: 1.72 }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0", background: "#FFFFFF" }}>
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.14, marginBottom: "10px" }}>
            Ready to Modernize Payroll for Your Team?
          </h2>
          <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "700px", margin: "0 auto 24px", lineHeight: 1.75 }}>
            Deploy payroll software built for India-first compliance, fast salary closures, and employee-friendly payroll experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Start 14-Day Free Trial
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              View Pricing
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ==================== PRODUCT PAGE ====================
function ProductPage({ product }: { product: (typeof products)[0] }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/" className="text-blue-300 text-sm hover:text-white mb-4 inline-block">&larr; All Products</Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-blue-200 mb-6">{product.tagline}</p>
            <p className="text-blue-100 mb-8 leading-relaxed max-w-2xl">{product.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/demo" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue-400 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">Indian Compliance Built-In</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every compliance requirement handled automatically — so you never miss a deadline or face a penalty.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {product.compliance.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-green-200 text-sm font-medium text-green-800">
                <CheckCircle2 className="w-4 h-4" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {product.faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left">
                  <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      {product.hubLinks.length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-semibold text-gray-900 mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-3">
              {product.hubLinks.map((link) => (
                <Link key={link.href} href={link.href} className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm text-blue-700 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Try {product.name} Free for 14 Days</h2>
          <p className="text-blue-200 mb-8">No credit card required. Full access to all features.</p>
          <Link href="/demo" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 text-lg">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

// ==================== HUB PAGE ====================
function HubPage({ hub }: { hub: (typeof hubPages)[0] }) {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-gray-400 text-sm hover:text-white mb-4 inline-block">&larr; Home</Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{hub.name}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">{hub.description}</p>
          <p className="text-sm text-gray-400 mt-4">{hub.count} available</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-6">We are building {hub.count} of {hub.name.toLowerCase()} content. Subscribe to get notified when they go live.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors text-sm">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ==================== PRICING PAGE ====================
function PricingPage() {
  const plans = [
    { name: "Starter", price: "49", period: "/employee/month", desc: "For small teams up to 50 employees", features: ["Core HR & Employee Database", "Payroll with PF & ESI", "Attendance (Web + Mobile)", "Leave Management", "Employee Self-Service", "Basic Reports", "Email Support"] },
    { name: "Professional", price: "99", period: "/employee/month", desc: "For growing companies 50-500 employees", badge: "Most Popular", features: ["Everything in Starter +", "Performance Management (OKR)", "Recruitment & Onboarding", "Expense Management", "PT for all 19 states", "TDS & Form 16 automation", "HR Analytics Dashboard", "Priority Support"] },
    { name: "Enterprise", price: "Custom", period: "", desc: "For large organizations 500+ employees", features: ["Everything in Professional +", "Timesheet & Project Tracking", "Custom Workflows", "API Access & Integrations", "Multi-Entity Payroll", "Dedicated Account Manager", "Custom Reports & Dashboards", "SLA-Backed Support", "On-Premise Option"] },
  ]
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600">No hidden fees. No setup charges. Start with a 14-day free trial.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative bg-white rounded-2xl border-2 p-8 ${plan.badge ? "border-blue-600 shadow-xl" : "border-gray-200"}`}>
                {plan.badge && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">{plan.badge}</span>}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                <div className="mb-6">
                  {plan.price === "Custom" ? (
                    <span className="text-3xl font-bold text-gray-900">Custom</span>
                  ) : (
                    <><span className="text-sm text-gray-500">&#8377;</span><span className="text-4xl font-bold text-gray-900">{plan.price}</span><span className="text-sm text-gray-500">{plan.period}</span></>
                  )}
                </div>
                <Link href="/demo" className={`block w-full text-center py-3 rounded-xl font-medium transition-colors mb-6 ${plan.badge ? "bg-blue-700 text-white hover:bg-blue-800" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ==================== DEMO PAGE ====================
function DemoPage() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Book a Free Demo</h1>
            <p className="text-lg text-gray-600 mb-8">See how our HRMS automates payroll, compliance, and HR operations for Indian companies. 30-minute personalized walkthrough.</p>
            <div className="space-y-4">
              {["See all 9 modules in action", "Indian compliance demo (PF, ESI, PT, TDS)", "Pricing discussion for your team size", "Migration planning if switching HRMS", "Q&A with our product expert"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Request Your Demo</h2>
            <form className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label><input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label><input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@company.com" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label><input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your company" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Number of Employees *</label><select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"><option>Select</option><option>1-50</option><option>51-200</option><option>201-500</option><option>501-1000</option><option>1000+</option></select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label><input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91" /></div>
              <button type="submit" className="w-full py-3.5 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors">Book My Free Demo</button>
              <p className="text-xs text-gray-500 text-center">No commitment. No credit card. Just a conversation.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== ABOUT PAGE ====================
function AboutPage() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About HRMS Software in India</h1>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>We are building India&apos;s most compliant HRMS platform — purpose-built for Indian businesses that need payroll, attendance, compliance, and HR automation that actually understands Indian labour laws.</p>
            <p>Unlike global HR platforms that treat India as an afterthought, every feature we build starts with Indian statutory compliance — PF, ESI, Professional Tax across 19 states, TDS, LWF, Gratuity, POSH Act, and all four Labour Codes 2020.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
            <p>To make HR compliance effortless for every Indian company — from 10-person startups to 10,000-employee enterprises — so HR teams can focus on people, not paperwork.</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8">What Makes Us Different</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>India-first: Built for Indian compliance from day one, not retrofitted</li>
              <li>10 free resource hubs: Glossary, letter templates, policies, calculators, JDs, and more</li>
              <li>Transparent pricing in INR: No hidden costs, no per-module charges</li>
              <li>State-wise compliance: Professional Tax for 19 states, LWF, minimum wages for all 28 states</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

// ==================== CONTACT PAGE ====================
function ContactPage() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8">Have questions about our HRMS? We&apos;re here to help. Reach out and we&apos;ll respond within 2 hours during business hours.</p>
            <div className="space-y-6">
              <div><h3 className="font-semibold text-gray-900 mb-1">Email</h3><p className="text-gray-600">hello@hrmssoftwareinindia.com</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">Phone</h3><p className="text-gray-600">+91-XXXXXXXXXX</p></div>
              <div><h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3><p className="text-gray-600">Monday to Friday, 9:00 AM - 6:00 PM IST</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Name *</label><input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Subject</label><input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Message *</label><textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /></div>
              <button type="submit" className="w-full py-3.5 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
