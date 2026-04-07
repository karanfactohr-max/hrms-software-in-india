"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Logo } from "@/components/ui/Logo"
import {
  Menu, X, ChevronDown, ArrowRight, Phone, Mail, Calendar, UserCheck,
  IndianRupee, Clock, TrendingUp, Users, Timer, Receipt,
  Smartphone, BookOpen, FileText,
  ScrollText, Briefcase, Scale, Landmark, Calculator, Newspaper,
} from "lucide-react"

const productMenuItems = [
  { name: "Payroll Software", href: "/payroll-software", icon: <IndianRupee style={{ width: 16, height: 16 }} />, desc: "PF, ESI, PT, TDS automated" },
  { name: "Attendance", href: "/attendance-management-software", icon: <Clock style={{ width: 16, height: 16 }} />, desc: "Biometric, GPS, geo-fencing" },
  { name: "Leave Management", href: "/leave-management-software", icon: <Calendar style={{ width: 16, height: 16 }} />, desc: "Policies, approvals, balance" },
  { name: "Performance", href: "/performance-management-software", icon: <TrendingUp style={{ width: 16, height: 16 }} />, desc: "OKR, KPI, 360 feedback" },
  { name: "Recruitment & ATS", href: "/recruitment-ats-software", icon: <Users style={{ width: 16, height: 16 }} />, desc: "ATS, job boards, screening", badge: "New" },
  { name: "Onboarding", href: "/employee-onboarding-software", icon: <UserCheck style={{ width: 16, height: 16 }} />, desc: "Offer letters, docs, induction", badge: "New" },
  { name: "Timesheet", href: "/timesheet-management-software", icon: <Timer style={{ width: 16, height: 16 }} />, desc: "Billable hours, projects" },
  { name: "Expenses", href: "/expense-management-software", icon: <Receipt style={{ width: 16, height: 16 }} />, desc: "Claims, OCR, GST tracking" },
  { name: "Self-Service", href: "/employee-self-service", icon: <Smartphone style={{ width: 16, height: 16 }} />, desc: "Payslip, leave, tax portal" },
]

const resourceMenuItems = [
  { name: "HR Glossary", href: "/glossary", icon: <BookOpen style={{ width: 16, height: 16 }} /> },
  { name: "Letter Templates", href: "/letter-templates", icon: <FileText style={{ width: 16, height: 16 }} /> },
  { name: "HR Policies", href: "/hr-policies", icon: <ScrollText style={{ width: 16, height: 16 }} /> },
  { name: "Minimum Wages", href: "/minimum-wages", icon: <IndianRupee style={{ width: 16, height: 16 }} /> },
  { name: "Job Descriptions", href: "/job-descriptions", icon: <Briefcase style={{ width: 16, height: 16 }} /> },
  { name: "Labour Laws", href: "/labour-laws", icon: <Scale style={{ width: 16, height: 16 }} /> },
  { name: "Professional Tax", href: "/professional-tax", icon: <Landmark style={{ width: 16, height: 16 }} /> },
  { name: "HR Calculators", href: "/calculators", icon: <Calculator style={{ width: 16, height: 16 }} /> },
  { name: "Blog", href: "/blog", icon: <Newspaper style={{ width: 16, height: 16 }} /> },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <header className="sticky top-0 z-50 transition-all duration-300" style={{ background: scrolled ? "rgba(255,255,255,0.92)" : "#fff", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: "1px solid #E2E8F0" }} role="banner">
      {/* Top bar - branded with pastel accent */}
      <div style={{ background: "linear-gradient(90deg, #F0FDF4, #DCFCE7, #BBF7D0)", padding: "6px 0", borderBottom: "1px solid #E2E8F0" }}>
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: 600 }}>
              India&apos;s #1 HRMS for Statutory Compliance
            </span>
            <span className="hidden sm:block" style={{ width: 1, height: 12, background: "#CBD5E1" }} />
            <span className="hidden sm:block" style={{ fontSize: "12px", color: "#3CB371", fontWeight: 700 }}>
              PF | ESI | PT | TDS | Form 16 Automated
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="mailto:hello@hrmssoftwareinindia.com" className="flex items-center gap-1.5" style={{ fontSize: "11px", color: "#64748B" }}>
              <Mail style={{ width: 10, height: 10 }} /> hello@hrmssoftwareinindia.com
            </a>
            <a href="tel:+919999999999" className="flex items-center gap-1.5" style={{ fontSize: "12px", color: "#1E293B", fontWeight: 700 }}>
              <Phone style={{ width: 11, height: 11 }} /> +91 99999 99999
            </a>
          </div>
        </div>
      </div>

      <nav className="max-w-[1280px] mx-auto px-6 flex items-center justify-between" style={{ height: "72px" }}>
        <Link href="/" className="flex items-center flex-shrink-0">
          <span
            className="block sm:w-auto"
            style={{
              overflow: "hidden",
            }}
          >
            <Logo size={54} showText={true} />
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1.5">
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-semibold rounded-full border transition-colors hover:bg-[#F0FDF4]" style={{ color: "#334155", borderColor: "#E2E8F0", background: "#fff" }}>
              Our Platform <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div style={{ background: "#fff", borderRadius: "18px", border: "1px solid #E2E8F0", boxShadow: "0 24px 64px rgba(15,23,42,0.12)", width: "630px", overflow: "hidden" }}>
                <div style={{ padding: "22px 22px 16px", borderBottom: "1px solid #E2E8F0", background: "linear-gradient(135deg, #FFFFFF, #F0FDF4)" }}>
                  <p style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>Our Platform</p>
                  <p style={{ fontSize: "14px", color: "#475569", marginTop: "6px", lineHeight: 1.5 }}>Core modules for payroll, people, and compliance operations</p>
                </div>
                <div style={{ padding: "12px" }}>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {productMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 border border-transparent transition-all hover:bg-[#F0FDF4] hover:border-[#DCFCE7]"
                      >
                        <span className="flex items-center gap-2.5 min-w-0">
                          <span style={{ width: 30, height: 30, borderRadius: "8px", background: "#F8FAFC", color: "#3CB371", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</span>
                          <span style={{ fontSize: "16px", fontWeight: 600, color: "#1E293B", display: "block", lineHeight: 1.3 }} className="truncate">{item.name}</span>
                        </span>
                        {"badge" in item && item.badge ? (
                          <span style={{ fontSize: "12px", fontWeight: 600, color: "#475569", background: "#EEF2F7", padding: "3px 10px", borderRadius: "8px", flexShrink: 0 }}>
                            {item.badge}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1.5" style={{ borderTop: "1px solid #F1F5F9", background: "#fff", padding: "13px 16px" }}>
                  <span style={{ fontSize: "15px", color: "#64748B" }}>Ready to get started?</span>
                  <Link href="/demo" style={{ fontSize: "15px", fontWeight: 700, color: "#3CB371", textDecoration: "none" }}>
                    Get a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-semibold rounded-full border transition-colors hover:bg-[#F0FDF4]" style={{ color: "#334155", borderColor: "#E2E8F0", background: "#fff" }}>
              Resources <ChevronDown className="w-3.5 h-3.5 opacity-50" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div style={{ background: "#fff", borderRadius: "18px", border: "1px solid #E2E8F0", boxShadow: "0 24px 64px rgba(15,23,42,0.12)", width: "630px", overflow: "hidden" }}>
                <div style={{ padding: "22px 22px 16px", borderBottom: "1px solid #E2E8F0", background: "linear-gradient(135deg, #FFFFFF, #F8FAFC)" }}>
                  <p style={{ fontSize: "20px", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>Resources</p>
                  <p style={{ fontSize: "14px", color: "#475569", marginTop: "6px", lineHeight: 1.5 }}>Templates, guides, and practical tools for HR teams</p>
                </div>
                <div style={{ padding: "12px" }}>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                    {resourceMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 border border-transparent transition-all hover:bg-[#F0FDF4] hover:border-[#DCFCE7]"
                      >
                        <span style={{ width: 30, height: 30, borderRadius: "8px", background: "#F8FAFC", color: "#3CB371", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {item.icon}
                        </span>
                        <span style={{ fontSize: "16px", fontWeight: 600, color: "#1E293B", lineHeight: 1.3 }} className="truncate">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1.5" style={{ borderTop: "1px solid #F1F5F9", background: "#fff", padding: "13px 16px" }}>
                  <span style={{ fontSize: "15px", color: "#64748B" }}>Explore all HR resources</span>
                  <Link href="/blog" style={{ fontSize: "15px", fontWeight: 700, color: "#3CB371", textDecoration: "none" }}>
                    Visit Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/pricing" className="px-3 py-2 text-[14px] font-semibold rounded-full transition-colors hover:bg-[#F0FDF4]" style={{ color: "#475569" }}>Pricing</Link>
          <Link href="/about" className="px-3 py-2 text-[14px] font-semibold rounded-full transition-colors hover:bg-[#F0FDF4]" style={{ color: "#475569" }}>About</Link>
          <Link href="/contact" className="px-3 py-2 text-[14px] font-semibold rounded-full transition-colors hover:bg-[#F0FDF4]" style={{ color: "#475569" }}>Contact</Link>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/demo" className="cta-base cta-primary cta-sm" style={{ padding: "9px 20px", fontSize: "14px" }}>
            Start Free Trial
            <span className="cta-arrow" style={{ width: 22, height: 22 }}>
              <ArrowRight style={{ width: 12, height: 12 }} />
            </span>
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" style={{ color: "#475569" }}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[112px] z-50 bg-white overflow-y-auto">
          <div className="max-w-[480px] mx-auto px-6 py-6 space-y-5">
            <div>
              <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#94A3B8", marginBottom: "10px" }}>Platform</p>
              {productMenuItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-2">
                  <div style={{ width: 30, height: 30, borderRadius: "8px", background: "#F1F5F9", color: "#64748B", display: "flex", alignItems: "center", justifyContent: "center" }}>{item.icon}</div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#1E293B" }}>{item.name}</span>
                </Link>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "12px" }} className="space-y-2">
              <Link href="/demo" onClick={() => setMobileOpen(false)} className="cta-base cta-primary" style={{ width: "100%", padding: "12px", fontSize: "14px" }}>
                Start Free Trial
                <span className="cta-arrow" style={{ width: 22, height: 22 }}>
                  <ArrowRight style={{ width: 12, height: 12 }} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
