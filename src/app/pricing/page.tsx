import React from "react"
import Link from "next/link"
import { Metadata } from "next"
import PricingCalculator from "@/components/PricingCalculator"
import {
  ArrowRight, Check, X, Zap, ShieldCheck, Users, Star,
  Building2, ChevronDown, TrendingUp,
} from "lucide-react"

export const metadata: Metadata = {
  title: "HRMS Pricing India — Affordable Plans Starting ₹4,999/Month",
  description: "Transparent HRMS pricing for Indian businesses. Core, Premium & Ultimate plans with payroll, attendance, compliance & more. No hidden costs. Free trial available.",
  keywords: ["HRMS pricing India", "payroll software cost", "HRMS plans", "affordable HRMS", "HR software pricing India"],
}

const faqs = [
  {
    q: "What is included in the Core plan?",
    a: "The Core plan covers employee onboarding with self-onboarding & joining kits, core HR with salary master & org chart, attendance & leave with biometric integration & shift planning, full payroll with statutory compliance, reports & analytics dashboards, helpdesk ticketing, mobile ESS app, and multi-entity management.",
  },
  {
    q: "Is there a minimum number of employees required?",
    a: "All plans include up to 50 employees in the base price. Additional employees are charged per-head monthly — ₹69 for Core, ₹89 for Premium, and ₹119 for Ultimate. There is no upper limit on employee count.",
  },
  {
    q: "Are there any hidden charges or setup fees?",
    a: "No hidden charges. The price you see is the price you pay. There are no setup fees, no onboarding charges, and no costs for standard support. Data migration from your existing system is included free in Premium and Ultimate plans.",
  },
  {
    q: "Can I switch plans as my company grows?",
    a: "Yes. You can upgrade at any time and the difference is prorated for the remaining billing period. Downgrades take effect at the start of your next billing cycle. All your data is preserved during plan changes.",
  },
  {
    q: "What Indian statutory compliance is covered?",
    a: "Full compliance is built into every plan — PF, ESI, Professional Tax, TDS, Labour Welfare Fund, Gratuity, and all state-specific regulations. Automatic updates ensure you stay compliant with the latest government notifications.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, net banking, UPI, NEFT/RTGS, and wire transfers. All plans are billed quarterly. Enterprise customers can also opt for custom invoicing with purchase order support.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a 14-day free trial on all plans with full feature access. No credit card required to start. Our team will help you set up and import your existing data during the trial period.",
  },
  {
    q: "What kind of customer support do you provide?",
    a: "All plans include email, chat, and helpdesk ticketing. Premium adds priority support and a dedicated account manager. Ultimate customers receive 24/7 support with a named success team and guaranteed SLAs.",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <Zap style={{ width: 14, height: 14, color: "#15803D" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.8px" }}>Transparent Pricing</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 800, color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2px", marginBottom: 16 }}>
            One Platform. Three Plans.<br />
            <span style={{ color: "#3CB371" }}>Zero Hidden Fees.</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "#64748B", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Payroll, attendance, compliance, and everything HR — pick the plan that fits your team. All plans billed quarterly.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ background: "#fff", padding: "64px 0 80px" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* ── CORE ── */}
            <div style={{ background: "#fff", borderRadius: 24, border: "1px solid #E2E8F0", padding: "36px 30px", display: "flex", flexDirection: "column" }} className="hover:shadow-lg transition-shadow">
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F0FDF4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Zap style={{ width: 18, height: 18, color: "#3CB371" }} />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F172A" }}>Core</h3>
                </div>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>Manage HR tasks and empower your growing business</p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontSize: 14, color: "#64748B", fontWeight: 600 }}>₹</span>
                  <span style={{ fontSize: 44, fontWeight: 900, color: "#0F172A", letterSpacing: "-2px", lineHeight: 1 }}>4,999</span>
                  <span style={{ fontSize: 14, color: "#64748B" }}>/month</span>
                </div>
                <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 6 }}>Up to 50 employees included</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8, padding: "5px 12px", marginTop: 8 }}>
                  <span style={{ fontSize: 12, color: "#475569", fontWeight: 600 }}>+₹69/month per additional employee</span>
                </div>
              </div>

              <Link href="/demo" className="cta-base cta-secondary cta-lg" style={{ width: "100%", justifyContent: "center", marginBottom: 28 }}>
                Start Free Trial
                <span className="cta-arrow" style={{ width: 24, height: 24 }}><ArrowRight style={{ width: 12, height: 12 }} /></span>
              </Link>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {[
                  { section: "Employee Onboarding", items: ["Self-onboarding portal", "Joining kit & letter templates", "Document management & asset tracking"] },
                  { section: "Core HR", items: ["Employee database & salary master", "Organization chart & transfers", "Probation, confirmation & offboarding"] },
                  { section: "Attendance & Leave", items: ["Biometric machine integration", "Online attendance & multi-timezone", "Shift planning, roster & approval workflows"] },
                  { section: "Payroll", items: ["Payroll wizard with configurable payslips", "PF, ESI, PT & TDS compliance", "Advance, loan & adhoc payments"] },
                  { section: "More", items: ["Reports & analytics dashboards", "Internal helpdesk ticketing", "Mobile ESS app with GPS punch", "Multi-entity management"] },
                ].map((group) => (
                  <div key={group.section}>
                    <p style={{ fontSize: 11, fontWeight: 800, color: "#0E3B32", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>{group.section}</p>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                        <Check style={{ width: 16, height: 16, color: "#3CB371", flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* ── PREMIUM (FEATURED) ── */}
            <div style={{ background: "#0E3B32", borderRadius: 24, border: "2px solid #3CB371", padding: "36px 30px", display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 32px 80px rgba(14,59,50,0.3), 0 12px 24px rgba(0,0,0,0.08)", transform: "scale(1.03)" }}>
              <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", display: "inline-flex", alignItems: "center", gap: 6, background: "#CFF25E", color: "#0E3B32", fontSize: 11, fontWeight: 800, padding: "6px 20px", borderRadius: 999, letterSpacing: "0.8px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                <Star style={{ width: 12, height: 12 }} /> Most Popular
              </div>

              <div style={{ marginBottom: 24, marginTop: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(207,242,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <TrendingUp style={{ width: 18, height: 18, color: "#CFF25E" }} />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>Premium</h3>
                </div>
                <p style={{ fontSize: 13, color: "#94A3B8", lineHeight: 1.5 }}>Best value plan to maximize efficiency and productivity</p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontSize: 14, color: "#94A3B8", fontWeight: 600 }}>₹</span>
                  <span style={{ fontSize: 44, fontWeight: 900, color: "#fff", letterSpacing: "-2px", lineHeight: 1 }}>5,999</span>
                  <span style={{ fontSize: 14, color: "#94A3B8" }}>/month</span>
                </div>
                <p style={{ fontSize: 12, color: "#64748B", marginTop: 6 }}>Up to 50 employees included</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(207,242,94,0.1)", border: "1px solid rgba(207,242,94,0.25)", borderRadius: 8, padding: "5px 12px", marginTop: 8 }}>
                  <span style={{ fontSize: 12, color: "#CFF25E", fontWeight: 600 }}>+₹89/month per additional employee</span>
                </div>
              </div>

              <Link href="/demo" className="cta-base cta-secondary cta-lg" style={{ width: "100%", justifyContent: "center", marginBottom: 28 }}>
                Start Free Trial
                <span className="cta-arrow" style={{ width: 24, height: 24 }}><ArrowRight style={{ width: 12, height: 12 }} /></span>
              </Link>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#CFF25E", textTransform: "uppercase", letterSpacing: "0.8px" }}>Everything in Core +</span>
                  <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }} />
                </div>
                {[
                  { section: "Travel, Expense & Reimbursement", items: ["Policy configuration & travel application", "Expense claims & reimbursements", "Multiple currency & timezone support", "Eligibility calculation & deviation workflow", "Multiple attachment & mobile app"] },
                  { section: "Geo-Fence", items: ["Create & assign virtual boundaries", "Mobile punch within boundaries", "GPS-tagged attendance tracking"] },
                  { section: "Integrated Attendance", items: ["Travel-linked attendance reconciliation", "Report generation & audit trail"] },
                ].map((group) => (
                  <div key={group.section}>
                    <p style={{ fontSize: 11, fontWeight: 800, color: "#CFF25E", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>{group.section}</p>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                        <Check style={{ width: 16, height: 16, color: "#CFF25E", flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* ── ULTIMATE ── */}
            <div style={{ background: "#fff", borderRadius: 24, border: "1px solid #E2E8F0", padding: "36px 30px", display: "flex", flexDirection: "column" }} className="hover:shadow-lg transition-shadow">
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F0FDF4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Building2 style={{ width: 18, height: 18, color: "#3CB371" }} />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0F172A" }}>Ultimate</h3>
                </div>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>Complete HR solution for total workforce management</p>
              </div>

              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontSize: 14, color: "#64748B", fontWeight: 600 }}>₹</span>
                  <span style={{ fontSize: 44, fontWeight: 900, color: "#0F172A", letterSpacing: "-2px", lineHeight: 1 }}>6,999</span>
                  <span style={{ fontSize: 14, color: "#64748B" }}>/month</span>
                </div>
                <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 6 }}>Up to 50 employees included</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 8, padding: "5px 12px", marginTop: 8 }}>
                  <span style={{ fontSize: 12, color: "#475569", fontWeight: 600 }}>+₹119/month per additional employee</span>
                </div>
              </div>

              <Link href="/demo" className="cta-base cta-secondary cta-lg" style={{ width: "100%", justifyContent: "center", marginBottom: 28 }}>
                Start Free Trial
                <span className="cta-arrow" style={{ width: 24, height: 24 }}><ArrowRight style={{ width: 12, height: 12 }} /></span>
              </Link>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <div style={{ height: 1, flex: 1, background: "#E2E8F0" }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#0E3B32", textTransform: "uppercase", letterSpacing: "0.8px" }}>Everything in Premium +</span>
                  <div style={{ height: 1, flex: 1, background: "#E2E8F0" }} />
                </div>
                {[
                  { section: "Performance Management", items: ["Goals management (KRA/KPI)", "Performance-linked payroll", "Bell curve analysis & configurable review cycles", "Multi-level review & one-on-one meetings", "360-degree & continuous feedback", "Mobile app for reviews"] },
                  { section: "Survey & Acknowledgment", items: ["Scheduling of surveys & acknowledgments", "Anonymous survey with feedback reports", "Mobile app for surveys"] },
                ].map((group) => (
                  <div key={group.section}>
                    <p style={{ fontSize: 11, fontWeight: 800, color: "#0E3B32", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>{group.section}</p>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                        <Check style={{ width: 16, height: 16, color: "#3CB371", flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Billing note */}
          <p style={{ textAlign: "center", fontSize: 13, color: "#94A3B8", marginTop: 32 }}>
            All plans billed quarterly. Prices exclusive of GST. 14-day free trial on all plans — no credit card required.
          </p>
        </div>
      </section>

      {/* ROI Calculator */}
      <section style={{ background: "#F8FAFC", padding: "80px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <PricingCalculator />
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: 14 }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: 8, background: "#F1F5F9", color: "#475569", fontSize: 12, fontWeight: 600, marginBottom: 14 }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Everything You Need to Know About Pricing
            </h2>
          </div>
          <p className="text-center" style={{ fontSize: 15, color: "#94A3B8", marginBottom: 40, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
            Common questions about plans, billing, compliance coverage, and getting started.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group" style={{ borderRadius: 12, background: "#F8FAFC", border: "1px solid #E2E8F0", overflow: "hidden", transition: "all 0.2s" }}>
                <summary className="flex items-center gap-3 cursor-pointer" style={{ padding: "16px 20px" }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "#EAF8F0", color: "#166534", border: "1px solid #BFEA4D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, transition: "all 0.2s" }} className="group-open:bg-[#0E3B32] group-open:text-[#CFF25E] group-open:border-[#0E3B32]">
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#0F172A" }}>{faq.q}</span>
                </summary>
                <div style={{ padding: "0 20px 16px 64px", fontSize: 13, color: "#64748B", lineHeight: 1.75 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 0 100px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #F4FFF4 0%, #E6FAE8 35%, #D2F5D4 65%, #E8F7FF 100%)",
          borderTop: "10px solid #D8F24A",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.7), transparent 38%), radial-gradient(circle at 78% 22%, rgba(187,247,208,0.45), transparent 30%)" }} />
        <div style={{ position: "absolute", inset: "auto 0 0 0", height: 60, backgroundImage: "linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)", backgroundSize: "84px 60px", opacity: 0.55 }} />
        <div className="max-w-[1280px] mx-auto px-6 text-center relative" style={{ paddingTop: 78, paddingBottom: 92, zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 800, color: "#0F2343", lineHeight: 1.15, letterSpacing: "-1.4px", maxWidth: 860, margin: "0 auto 18px" }}>
            Ready to Transform Your HR Operations?
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 34px" }}>
            Join 500+ Indian companies. 14-day free trial with full access to all 9 modules.
          </p>
          <div className="flex justify-center">
            <Link href="/demo" className="cta-base cta-primary cta-lg" style={{ boxShadow: "0 18px 38px rgba(14,59,50,0.22)" }}>
              Start Free Trial
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
