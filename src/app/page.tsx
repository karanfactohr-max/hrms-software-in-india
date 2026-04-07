import Image from "next/image"
import Link from "next/link"
import HeroDashboard from "@/components/sections/HeroDashboard"
import ModuleTabs from "@/components/sections/ModuleTabs"
import StatsCounterBar from "@/components/sections/StatsCounterBar"
import OldVsNewShowcase from "@/components/sections/OldVsNewShowcase"
import {
  ArrowRight, Check, Star, ChevronDown, Apple,
  BookOpen, FileText, ScrollText, Briefcase, Scale, Landmark,
  Calculator, GitCompare, Newspaper, Shield, Zap, Clock,
  IndianRupee, TrendingUp, Users, Timer, Receipt,
  Smartphone, ShieldCheck, BarChart3, Building2, Factory,
  GraduationCap, Stethoscope, Truck, ShoppingCart,
  Globe, CheckCircle, Award, Sparkles, Play, Layers,
  Wifi, MessageSquare, ArrowUpRight,
} from "lucide-react"

const trustedClientLogos = [
  { src: "/integration/client-logo/asics.webp", name: "ASICS", alt: "Customer partner logo for ASICS organization" },
  { src: "/integration/client-logo/bluedart.webp", name: "Blue Dart", alt: "Customer partner logo for Blue Dart team" },
  { src: "/integration/client-logo/brakes-india-private-limited.webp", name: "Brakes India", alt: "Customer partner logo for Brakes India operations" },
  { src: "/integration/client-logo/bse.webp", name: "BSE", alt: "Customer partner logo for BSE enterprise" },
  { src: "/integration/client-logo/cycle-agarbathies.webp", name: "Cycle Agarbathies", alt: "Customer partner logo for Cycle Agarbathies group" },
  { src: "/integration/client-logo/mercedes-benz.webp", name: "Mercedes-Benz", alt: "Customer partner logo for Mercedes-Benz India" },
  { src: "/integration/client-logo/mgf-group.webp", name: "MGF Group", alt: "Customer partner logo for MGF Group business" },
  { src: "/integration/client-logo/murugappa.webp", name: "Murugappa", alt: "Customer partner logo for Murugappa company" },
  { src: "/integration/client-logo/nivea.webp", name: "NIVEA", alt: "Customer partner logo for NIVEA business unit" },
  { src: "/integration/client-logo/siemens.webp", name: "Siemens", alt: "Customer partner logo for Siemens operations" },
  { src: "/integration/client-logo/soch.webp", name: "Soch", alt: "Customer partner logo for Soch retail brand" },
  { src: "/integration/client-logo/susrut.webp", name: "Susrut", alt: "Customer partner logo for Susrut healthcare group" },
  { src: "/integration/client-logo/tata-steel-bsl.webp", name: "Tata Steel BSL", alt: "Customer partner logo for Tata Steel BSL team" },
  { src: "/integration/client-logo/titan-company.webp", name: "Titan Company", alt: "Customer partner logo for Titan Company operations" },
  { src: "/integration/client-logo/tvs-sundaram-clayton.webp", name: "TVS Sundaram Clayton", alt: "Customer partner logo for TVS Sundaram Clayton business" },
  { src: "/integration/client-logo/wipro.webp", name: "Wipro", alt: "Customer partner logo for Wipro enterprise" },
]

const integrationPartnerLogos = [
  { src: "/integration/int-tally.webp", name: "Tally", alt: "Accounting integration logo for Tally platform" },
  { src: "/integration/int-quickbooks.webp", name: "QuickBooks", alt: "Accounting integration logo for QuickBooks platform" },
  { src: "/integration/int-xero.webp", name: "Xero", alt: "Cloud accounting integration logo for Xero platform" },
  { src: "/integration/int-msteams.webp", name: "Microsoft Teams", alt: "Collaboration integration logo for Microsoft Teams" },
  { src: "/integration/int-zoom.webp", name: "Zoom", alt: "Video collaboration integration logo for Zoom platform" },
  { src: "/integration/int-gmeet.webp", name: "Google Meet", alt: "Meeting tool integration logo for Google Meet" },
  { src: "/integration/int-gcalendar.webp", name: "Google Calendar", alt: "Calendar sync integration logo for Google Calendar" },
  { src: "/integration/int-gworkspace.webp", name: "Google Workspace", alt: "Workspace suite integration logo for Google Workspace" },
  { src: "/integration/int-microsoft.webp", name: "Microsoft", alt: "Enterprise suite integration logo for Microsoft ecosystem" },
  { src: "/integration/int-oracle.webp", name: "Oracle", alt: "Enterprise software integration logo for Oracle stack" },
  { src: "/integration/int-sap.webp", name: "SAP", alt: "ERP integration logo for SAP suite" },
  { src: "/integration/int-successfactors.webp", name: "SuccessFactors", alt: "HCM integration logo for SuccessFactors cloud" },
  { src: "/integration/int-auth0.webp", name: "Auth0", alt: "Identity access integration logo for Auth0 platform" },
  { src: "/integration/int-entraid.webp", name: "Entra ID", alt: "Identity access integration logo for Entra ID platform" },
  { src: "/integration/int-okta.webp", name: "Okta", alt: "Identity security integration logo for Okta platform" },
  { src: "/integration/int-onelogin.webp", name: "OneLogin", alt: "Identity access integration logo for OneLogin platform" },
  { src: "/integration/int-miniorange.webp", name: "miniOrange", alt: "Single sign-on integration logo for miniOrange platform" },
  { src: "/integration/int-ongrid.webp", name: "OnGrid", alt: "Verification integration logo for OnGrid service" },
  { src: "/integration/int-springverify.webp", name: "SpringVerify", alt: "Verification integration logo for SpringVerify service" },
  { src: "/integration/int-vantagecircle.webp", name: "Vantage Circle", alt: "Engagement integration logo for Vantage Circle platform" },
  { src: "/integration/int-xoxoday.webp", name: "Xoxoday", alt: "Rewards integration logo for Xoxoday platform" },
  { src: "/integration/int-learnteq.webp", name: "Learnteq", alt: "Learning platform integration logo for Learnteq" },
]

const reviewFaces = [
  { src: "https://i.pravatar.cc/72?img=12", alt: "Profile photo of HR leader who reviewed the platform" },
  { src: "https://i.pravatar.cc/72?img=32", alt: "Profile photo of payroll manager who reviewed the software" },
  { src: "https://i.pravatar.cc/72?img=47", alt: "Profile photo of operations head who reviewed the HRMS" },
  { src: "https://i.pravatar.cc/72?img=56", alt: "Profile photo of finance admin who reviewed the product" },
]

const integrationCategories = [
  {
    title: "Strategic Partnership",
    blurb: "Enterprise ecosystems and platform alliances",
    icon: Building2,
    items: ["Microsoft", "Google Workspace", "SAP"],
  },
  {
    title: "HCM",
    blurb: "Core workforce systems that sync with HR data",
    icon: Users,
    items: ["SuccessFactors", "Oracle"],
  },
  {
    title: "Learning Management (LMS)",
    blurb: "Learning tools for upskilling and role readiness",
    icon: GraduationCap,
    items: ["Learnteq"],
  },
  {
    title: "Rewards and Recognition",
    blurb: "Recognition stacks for engagement and retention",
    icon: Award,
    items: ["Vantage Circle", "Xoxoday"],
  },
  {
    title: "Background Verification",
    blurb: "Verification workflows for compliant hiring",
    icon: ShieldCheck,
    items: ["OnGrid", "SpringVerify"],
  },
  {
    title: "Accounting",
    blurb: "Payroll-ready accounting and finance connectors",
    icon: IndianRupee,
    items: ["Tally", "QuickBooks", "Xero"],
  },
  {
    title: "Hiring & Onboarding",
    blurb: "Collaboration tools for recruiting and onboarding",
    icon: Briefcase,
    items: ["Microsoft Teams", "Zoom", "Google Meet"],
  },
  {
    title: "Single Sign-On",
    blurb: "Identity and access platforms for secure login",
    icon: Layers,
    items: ["Auth0", "Entra ID", "Okta", "OneLogin", "miniOrange"],
  },
]

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: "80px", paddingBottom: "0" }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2" style={{
            padding: "6px 16px", borderRadius: "9999px",
            background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)",
            border: "1px solid #E2E8F0", fontSize: "13px", fontWeight: 600, color: "#1E293B",
            marginBottom: "28px",
          }}>
            <Sparkles style={{ width: 14, height: 14, color: "#D97706" }} />
            #1 Rated HRMS Software in India
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: "clamp(38px, 5.5vw, 64px)", fontWeight: 800,
            color: "#1E293B", lineHeight: 1.1, letterSpacing: "-2.5px",
            marginBottom: "20px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto",
          }}>
            Automate Your Entire HR, Payroll and Compliance
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(16px, 1.8vw, 18px)", color: "#64748B",
            lineHeight: 1.7, maxWidth: "560px", marginLeft: "auto", marginRight: "auto",
            marginBottom: "32px",
          }}>
            One platform for payroll processing, attendance tracking, leave management, and full Indian statutory compliance across all 28 states.
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
              View Pricing
              <span className="cta-arrow">
                <ArrowRight style={{ width: 14, height: 14 }} />
              </span>
            </Link>
          </div>

          {/* Avatar Trust Row */}
          <div className="flex items-center justify-center gap-3" style={{ marginBottom: "56px" }}>
            <div className="flex -space-x-2">
              {reviewFaces.map((face) => (
                <div key={face.src} style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid #fff", overflow: "hidden", boxShadow: "0 4px 10px rgba(15,23,42,0.15)" }}>
                  <img
                    src={face.src}
                    alt={face.alt}
                    width={36}
                    height={36}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
            <div style={{ textAlign: "left" }}>
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} style={{ width: 12, height: 12, fill: "#FBBF24", color: "#FBBF24" }} />)}
              </div>
              <p style={{ fontSize: "12px", color: "#64748B", fontWeight: 500 }}>Trusted by 500+ happy customers</p>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup - 3D floating */}
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6" style={{ paddingBottom: "100px", position: "relative", zIndex: 1 }}>
          <div className="dashboard-3d" style={{ borderRadius: "16px", overflow: "hidden", background: "#fff" }}>
            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST STRIP ═══════════ */}
      <section style={{ padding: "16px 0", borderBottom: "1px solid #E2E8F0", background: "#EEF2F7" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div style={{ border: "1px solid #DBE4EE", borderRadius: "12px", background: "#F3F6FA", padding: "12px 14px" }}>
            <div className="flex flex-col lg:flex-row lg:items-center gap-3">
              <div className="flex items-center gap-3 lg:min-w-[270px]">
                <p style={{ fontSize: "40px", fontWeight: 800, lineHeight: 1, color: "#0F172A" }}>10,000+</p>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>Trusted</p>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>Organizations</p>
                </div>
              </div>
              <div className="hidden lg:block" style={{ width: 1, alignSelf: "stretch", background: "#CBD5E1" }} />
              <div className="relative overflow-hidden flex-1" style={{ minHeight: "46px" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 42, background: "linear-gradient(90deg, #F3F6FA 30%, rgba(243,246,250,0))", pointerEvents: "none", zIndex: 2 }} />
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 42, background: "linear-gradient(270deg, #F3F6FA 30%, rgba(243,246,250,0))", pointerEvents: "none", zIndex: 2 }} />
                <div className="flex items-center gap-12" style={{ width: "max-content", animation: "trustedLogosTicker 54s linear infinite" }}>
                  {[...trustedClientLogos, ...trustedClientLogos].map((logo, i) => (
                    <div key={`${logo.src}-${i}`} className="flex items-center justify-center" style={{ minWidth: "126px", height: "46px" }}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={118}
                        height={30}
                        style={{ width: "auto", height: "28px", objectFit: "contain" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes trustedLogosTicker {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </section>

      <OldVsNewShowcase />

      {/* ═══════════ 9 MODULES - Interactive Tabs ═══════════ */}
      <section style={{ padding: "88px 0", background: "#fff" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "38px" }}>
            <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "8px", background: "linear-gradient(135deg, #F0FDF4, #BBF7D0)", color: "#3CB371", fontSize: "12px", fontWeight: 700, marginBottom: "14px", letterSpacing: "0.4px" }}>
              How It Works
            </span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#1E293B", lineHeight: 1.2, marginBottom: "10px" }}>
              HRMS Implementation Workflow for Indian Payroll Teams
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "620px", margin: "0 auto", lineHeight: 1.75 }}>
              Launch faster with structured onboarding, automate daily HR workflows, and keep PF, ESI, PT, and TDS compliance audit-ready every cycle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Onboard Workforce Data",
                desc: "Migrate employee records, salary structures, policies, and org hierarchy into one Core HR system with guided implementation.",
                icon: <Users style={{ width: 24, height: 24 }} />,
                tint: "#F0FDF4",
                tone: "#3CB371",
              },
              {
                step: "02",
                title: "Run Daily HR Automation",
                desc: "Automate Attendance Management, Leave Tracking, payroll inputs, reimbursements, and manager approvals across web and mobile.",
                icon: <Zap style={{ width: 24, height: 24 }} />,
                tint: "#FEF3C7",
                tone: "#D97706",
              },
              {
                step: "03",
                title: "Maintain Statutory Compliance",
                desc: "Stay aligned with Indian payroll compliance deadlines for PF, ESI, PT, TDS, and statutory filings using proactive checks.",
                icon: <ShieldCheck style={{ width: 24, height: 24 }} />,
                tint: "#E0F2FE",
                tone: "#047857",
              },
            ].map((item) => (
              <div key={item.step} style={{ border: "1px solid #E2E8F0", borderRadius: "16px", padding: "24px", background: "#fff", boxShadow: "0 10px 30px rgba(15,23,42,0.04)" }}>
                <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                  <span style={{ width: 46, height: 46, borderRadius: "14px", background: item.tint, color: item.tone, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    {item.icon}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: 800, color: "#94A3B8", letterSpacing: "0.8px" }}>{item.step}</span>
                </div>
                <h3 style={{ fontSize: "21px", fontWeight: 800, color: "#1E293B", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center" style={{ marginTop: "26px" }}>
            <Link href="/demo" className="cta-base cta-primary cta-md">
              See How It Works in a Live Demo
              <span className="cta-arrow">
                <ArrowRight style={{ width: 13, height: 13 }} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ModuleTabs />

      {/* ═══════════ STATS BAR - Pastel with animated numbers ═══════════ */}
      <StatsCounterBar />

      {/* ═══════════ COMPLIANCE CTA BANNER ═══════════ */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #052E16 0%, #166534 50%, #3CB371 100%)", position: "relative", overflow: "hidden" }}>
        
        <div className="max-w-[900px] mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <div style={{ width: 56, height: 56, borderRadius: "16px", background: "rgba(255,255,255,0.1)", color: "#86EFAC", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <ShieldCheck style={{ width: 28, height: 28 }} />
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px", marginBottom: "16px", fontStyle: "italic", textShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
            100% Statutory Compliance. Zero Penalties. Guaranteed.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", textShadow: "0 2px 10px rgba(0,0,0,0.1)", marginBottom: "32px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            We handle PF, ESI, PT across 19 states, TDS, LWF, Gratuity, and every Indian labour law so your HR team can stop firefighting compliance and focus on growing your business.
          </p>
          <Link href="/demo" className="cta-base group bg-[#CFF25E] text-[#0E3B32] border-none shadow-[0_12px_24px_rgba(207,242,94,0.3)] transition-transform duration-300 hover:scale-[1.02]" style={{ padding: "16px 36px", fontSize: "16px", fontWeight: 800 }}>
            Get Compliant Today &mdash; Book Demo
            <span className="cta-arrow transition-all duration-300 bg-[rgba(14,59,50,0.1)] text-[#0E3B32] group-hover:bg-white" style={{ width: 26, height: 26 }}>
              <ArrowRight style={{ width: 14, height: 14 }} />
            </span>
          </Link>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2" style={{ marginTop: "24px" }}>
            {["No penalty since launch", "Compliance engine updated same-day on law changes", "500+ companies trust us with compliance"].map((t) => (
              <span key={t} className="flex items-center gap-2" style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                <CheckCircle style={{ width: 14, height: 14, color: "#86EFAC" }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ INDUSTRIES ═══════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "#F0FDF4", color: "#3CB371", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>Industries We Serve</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Built for Every Industry Across India
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "IT and Software", icon: <Globe style={{ width: 22, height: 22 }} />, desc: "Variable pay, bench management, multi-location TDS, WFH tracking for distributed tech teams across India", color: "#3CB371", bg: "#DCFCE7" },
              { name: "Manufacturing", icon: <Factory style={{ width: 22, height: 22 }} />, desc: "Shift rostering, Factories Act overtime at double rate, ESI for factory workers, muster roll compliance", color: "#B45309", bg: "#FEF3C7" },
              { name: "Healthcare", icon: <Stethoscope style={{ width: 22, height: 22 }} />, desc: "24x7 nurse rostering, credential management, hazard pay, infection control compliance, ESI hospital tracking", color: "#DC2626", bg: "#FEE2E2" },
              { name: "Education", icon: <GraduationCap style={{ width: 22, height: 22 }} />, desc: "UGC and AICTE compliance, vacation and sabbatical tracking, teaching vs non-teaching staff management", color: "#166534", bg: "#EDE9FE" },
              { name: "Retail and FMCG", icon: <ShoppingCart style={{ width: 22, height: 22 }} />, desc: "Multi-store attendance, part-time and seasonal workforce management, Shops and Establishments Act compliance", color: "#047857", bg: "#E0F2FE" },
              { name: "Logistics and Transport", icon: <Truck style={{ width: 22, height: 22 }} />, desc: "Driver and fleet HR management, multi-depot attendance, inter-state migrant worker compliance tracking", color: "#1E293B", bg: "#F1F5F9" },
              { name: "Banking and Finance", icon: <Building2 style={{ width: 22, height: 22 }} />, desc: "RBI and IRDAI compliance for banking and insurance sector, variable bonus structures, comprehensive audit trails", color: "#9F1239", bg: "#D1FAE5" },
              { name: "Startups", icon: <Zap style={{ width: 22, height: 22 }} />, desc: "Start with 10 employees, scale to 1,000 on the same platform. ESOP management, rapid bulk onboarding, flexible policies", color: "#EA580C", bg: "#FFEDD5" },
            ].map((ind) => (
              <div key={ind.name} style={{ padding: "24px", borderRadius: "16px", border: "1px solid #E2E8F0", background: "#fff", transition: "all 0.25s" }} className="hover:shadow-lg hover:-translate-y-1">
                <div style={{ width: 48, height: 48, borderRadius: "14px", background: ind.bg, display: "flex", alignItems: "center", justifyContent: "center", color: ind.color, marginBottom: "16px" }}>
                  {ind.icon}
                </div>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#1E293B", marginBottom: "6px" }}>{ind.name}</p>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.65 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MOBILE APP ═══════════ */}
      <section style={{ padding: "92px 0", background: "linear-gradient(135deg, #052E24 0%, #064E3B 45%, #022C22 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-160px", left: "-130px", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(74, 222, 128, 0.2), rgba(74, 222, 128, 0))" }} />
        <div style={{ position: "absolute", right: "-140px", bottom: "-180px", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(16, 185, 129, 0.16), rgba(16, 185, 129, 0))" }} />
        <div className="max-w-[1280px] mx-auto px-6 relative" style={{ zIndex: 1 }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: "10px", background: "rgba(167,243,208,0.12)", border: "1px solid rgba(167,243,208,0.35)", color: "#A7F3D0", fontSize: "12px", fontWeight: 700, marginBottom: "14px" }}>Mobile App</span>
              <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#ECFDF5", lineHeight: 1.3, marginBottom: "12px" }}>
                HR on the Go for Employees and Managers
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(220,252,231,0.85)", lineHeight: 1.78, marginBottom: "22px" }}>
                Employees mark GPS attendance, apply leaves, download payslips, and submit tax declarations. Managers approve requests and track team performance from anywhere.
              </p>
              <div className="grid grid-cols-2 gap-2" style={{ marginBottom: "24px" }}>
                {["GPS + selfie attendance", "Leave apply and approval", "Payslip download", "Tax declarations (80C/80D)", "Manager approvals", "Push notifications"].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle style={{ width: 14, height: 14, color: "#86EFAC", flexShrink: 0 }} />
                    <span style={{ fontSize: "12px", color: "#D1FAE5" }}>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/demo" className="cta-base cta-secondary cta-sm">
                  <Smartphone style={{ width: 14, height: 14 }} />
                  Download for Android
                  <span className="cta-arrow">
                    <ArrowRight style={{ width: 12, height: 12 }} />
                  </span>
                </Link>
                <Link href="/demo" className="cta-base cta-primary cta-sm">
                  <Apple style={{ width: 14, height: 14 }} />
                  Download for iOS
                  <span className="cta-arrow">
                    <ArrowRight style={{ width: 12, height: 12 }} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div style={{ position: "relative", width: "336px" }}>
                <div style={{ position: "absolute", inset: "-36px -40px -30px -40px", borderRadius: "62px", background: "radial-gradient(circle at 48% 14%, rgba(74,222,128,0.36), rgba(16,185,129,0.26), rgba(52,211,153,0.08))", filter: "blur(24px)" }} />
                <span style={{ position: "absolute", left: "-2px", top: "122px", width: "4px", height: "44px", borderRadius: "6px", background: "rgba(203,213,225,0.35)" }} />
                <span style={{ position: "absolute", right: "-2px", top: "168px", width: "4px", height: "62px", borderRadius: "6px", background: "rgba(203,213,225,0.35)" }} />
                <div style={{ position: "absolute", top: "8px", left: "18px", right: "18px", height: "20px", borderRadius: "999px", background: "linear-gradient(90deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04), rgba(255,255,255,0.18))", filter: "blur(0.6px)" }} />
                <div style={{ position: "relative", width: "100%", borderRadius: "48px", padding: "10px", background: "linear-gradient(165deg, #020617 0%, #0B1220 38%, #1F2937 80%, #334155 100%)", border: "1px solid #1F2937", boxShadow: "0 34px 95px rgba(2,6,23,0.52), inset 0 1px 0 rgba(255,255,255,0.1)" }}>
                  <div style={{ height: "20px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                    <div style={{ width: "116px", height: "17px", borderRadius: "9999px", background: "linear-gradient(180deg, #020617, #111827)", position: "relative" }}>
                      <span style={{ position: "absolute", right: "10px", top: "5px", width: "6px", height: "6px", borderRadius: "50%", background: "#2563EB", boxShadow: "0 0 0 2px rgba(59,130,246,0.16)" }} />
                    </div>
                  </div>
                  <div style={{ borderRadius: "34px", background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)", overflow: "hidden", border: "1px solid #E2E8F0", minHeight: "602px", position: "relative" }}>
                    <div style={{ padding: "10px 14px 0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", borderRadius: "999px", border: "1px solid #E2E8F0", background: "#F8FAFC", padding: "8px 10px" }}>
                        <span style={{ width: 22, height: 22, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                          <img src={reviewFaces[0].src} alt="Team member avatar in app search bar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </span>
                        <span style={{ fontSize: "11px", color: "#64748B", flex: 1 }}>Search your colleagues</span>
                        <Clock style={{ width: 12, height: 12, color: "#94A3B8" }} />
                      </div>
                    </div>

                    <div style={{ position: "absolute", top: "56px", left: "10px", right: "10px", borderRadius: "14px", background: "#fff", border: "1px solid #E2E8F0", boxShadow: "0 14px 34px rgba(15,23,42,0.16)", padding: "11px", zIndex: 2 }}>
                      <p style={{ fontSize: "9px", fontWeight: 800, color: "#94A3B8", textAlign: "center", letterSpacing: "0.8px", marginBottom: "9px" }}>RECENT ACTIONS</p>
                      <div className="grid grid-cols-5 gap-1">
                        {[
                          { label: "Apply Leave", icon: <FileText style={{ width: 11, height: 11 }} /> },
                          { label: "Apply WFH", icon: <Clock style={{ width: 11, height: 11 }} /> },
                          { label: "View Payslip", icon: <Receipt style={{ width: 11, height: 11 }} /> },
                          { label: "Raise Ticket", icon: <MessageSquare style={{ width: 11, height: 11 }} /> },
                          { label: "Raise Expense", icon: <IndianRupee style={{ width: 11, height: 11 }} /> },
                        ].map((item) => (
                          <div key={item.label} style={{ textAlign: "center" }}>
                            <span style={{ width: 29, height: 29, borderRadius: "50%", background: "#F0FDF4", color: "#3CB371", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "5px", boxShadow: "inset 0 0 0 1px rgba(16,185,129,0.12)" }}>
                              {item.icon}
                            </span>
                            <p style={{ fontSize: "8px", color: "#64748B", fontWeight: 700, lineHeight: 1.15 }}>{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: "146px 14px 12px" }}>
                      <div style={{ borderRadius: "12px", border: "1px solid #BBF7D0", background: "linear-gradient(135deg, #F0FDF4, #DCFCE7)", padding: "10px", marginBottom: "11px" }}>
                        <p style={{ fontSize: "9px", color: "#64748B", fontWeight: 700, marginBottom: "5px" }}>SHIFT TODAY - GENERAL (9:00 AM - 5:30 PM)</p>
                        <div className="flex items-center justify-between" style={{ marginBottom: "8px" }}>
                          <div>
                            <p style={{ fontSize: "11px", fontWeight: 700, color: "#1E293B" }}>2 Jan Tuesday</p>
                            <p style={{ fontSize: "9px", color: "#64748B" }}>0h / 8h</p>
                          </div>
                          <ArrowRight style={{ width: 12, height: 12, color: "#86EFAC" }} />
                        </div>
                        <button style={{ width: "100%", border: "none", borderRadius: "8px", background: "linear-gradient(135deg, #16A34A, #4ADE80)", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "7px 0" }}>
                          Clock in
                        </button>
                      </div>

                      <div style={{ marginBottom: "10px" }}>
                        <p style={{ fontSize: "10px", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>On leave this week</p>
                        <div className="flex items-center gap-2">
                          {reviewFaces.slice(0, 3).map((face, i) => (
                            <span key={`${face.src}-${i}`} style={{ width: 30, height: 30, borderRadius: "50%", overflow: "hidden", border: "1px solid #DCFCE7" }}>
                              <img src={face.src} alt="Team member avatar in leave list" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </span>
                          ))}
                          <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#F1F5F9", color: "#64748B", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700 }}>+6</span>
                        </div>
                      </div>

                      <div style={{ borderRadius: "10px", border: "1px solid #E2E8F0", background: "#fff", padding: "10px", marginBottom: "12px" }}>
                        <p style={{ fontSize: "10px", fontWeight: 700, color: "#334155", marginBottom: "6px" }}>Announcements</p>
                        <div style={{ borderRadius: "8px", background: "#F8FAFC", border: "1px solid #E2E8F0", padding: "8px" }}>
                          <p style={{ fontSize: "10px", fontWeight: 700, color: "#0F172A", marginBottom: "3px" }}>Surya Jayaraman made an announcement</p>
                          <p style={{ fontSize: "9px", color: "#64748B", marginBottom: "5px" }}>23 May</p>
                          <div style={{ height: "34px", borderRadius: "6px", background: "linear-gradient(135deg, #E2E8F0, #CBD5E1)" }} />
                        </div>
                      </div>

                      <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "8px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "4px" }}>
                        {["Home", "Inbox", "Me", "My Team"].map((item, i) => (
                          <div key={item} style={{ textAlign: "center", color: i === 0 ? "#16A34A" : "#94A3B8" }}>
                            <span style={{ width: 18, height: 18, borderRadius: "50%", background: i === 0 ? "#DCFCE7" : "#F1F5F9", display: "inline-flex", marginBottom: "3px", boxShadow: i === 0 ? "0 0 0 1px rgba(22,163,74,0.15) inset" : "none" }} />
                            <p style={{ fontSize: "8px", fontWeight: i === 0 ? 700 : 600 }}>{item}</p>
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

      {/* ═══════════ SECURITY PROOF (Minimal) ═══════════ */}
      <section style={{ padding: "50px 0 26px" }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "24px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 13px", borderRadius: "999px", background: "#F0FDF4", border: "1px solid #BBF7D0", color: "#3CB371", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "10px" }}>
              <ShieldCheck style={{ width: 13, height: 13 }} /> Security and Compliance Proof
            </span>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: "8px" }}>
              Secure HRMS for Indian Payroll & Compliance
            </h2>
            <p style={{ fontSize: "15px", color: "#64748B", maxWidth: "720px", margin: "0 auto", lineHeight: 1.7 }}>
              Minimal controls, clear evidence, and enterprise-ready posture for audits, privacy, and uptime.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "ISO / SOC Ready", desc: "Audit-aligned security controls", icon: <ShieldCheck style={{ width: 18, height: 18 }} />, tone: "#3CB371", tint: "#DCFCE7" },
              { title: "DPDP Privacy", desc: "Consent and retention workflows", icon: <CheckCircle style={{ width: 18, height: 18 }} />, tone: "#047857", tint: "#E0F2FE" },
              { title: "India Data Residency", desc: "Region-aware data options", icon: <Landmark style={{ width: 18, height: 18 }} />, tone: "#166534", tint: "#EDE9FE" },
              { title: "99.9% Uptime SLA", desc: "Proactive reliability operations", icon: <Timer style={{ width: 18, height: 18 }} />, tone: "#B45309", tint: "#FEF3C7" },
            ].map((item) => (
              <div key={item.title} style={{ borderRadius: "14px", border: "1px solid #E2E8F0", background: "#fff", padding: "16px", textAlign: "center", boxShadow: "0 8px 22px rgba(15,23,42,0.05)" }}>
                <span style={{ width: 46, height: 46, borderRadius: "50%", background: item.tint, color: item.tone, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>
                  {item.icon}
                </span>
                <p style={{ fontSize: "15px", fontWeight: 800, color: "#0F172A", marginBottom: "4px" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "56px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: "999px", background: "#F0FDF4", border: "1px solid #BBF7D0", color: "#15803D", fontSize: "12px", fontWeight: 700, marginBottom: "16px", letterSpacing: "0.8px", textTransform: "uppercase" }}>
              Integrations
            </span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: "14px" }}>
              Connects Seamlessly With Your Existing Tools
            </h2>
            <p style={{ fontSize: "16px", color: "#64748B", maxWidth: "580px", margin: "0 auto", lineHeight: 1.7 }}>
              Pre-built connectors organized by category — find your exact stack in seconds.
            </p>
          </div>

          {/* Integration grid — 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {integrationCategories.map((category) => {
              const CategoryIcon = category.icon
              return (
                <div
                  key={category.title}
                  className="compliance-card"
                  style={{
                    borderRadius: "20px",
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    padding: "24px",
                    boxShadow: "0 4px 16px rgba(15,23,42,0.04)",
                  }}
                >
                  {/* Category header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "18px" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "#0E3B32", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CategoryIcon style={{ width: 20, height: 20, color: "#CFF25E" }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "16px", fontWeight: 800, color: "#0F172A", lineHeight: 1.3 }}>
                        {category.title}
                      </p>
                      <p style={{ fontSize: "12px", color: "#94A3B8", lineHeight: 1.4, marginTop: "2px" }}>
                        {category.blurb}
                      </p>
                    </div>
                  </div>

                  {/* Logo tiles */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {category.items.map((itemName) => {
                      const logo = integrationPartnerLogos.find((x) => x.name === itemName)
                      if (!logo) return null
                      return (
                        <div
                          key={`${category.title}-${logo.name}`}
                          className="compliance-card"
                          style={{
                            border: "1px solid #F1F5F9",
                            borderRadius: "14px",
                            background: "#FAFBFC",
                            padding: "14px 20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "60px",
                            flex: category.items.length <= 2 ? "1 1 calc(50% - 4px)" : "1 1 calc(33.333% - 6px)",
                            minWidth: "100px",
                          }}
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={160}
                            height={40}
                            quality={100}
                            style={{ width: "auto", maxWidth: "100%", height: "30px", objectFit: "contain", flexShrink: 0 }}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom trust bar */}
          <div style={{ marginTop: 40, textAlign: "center", padding: "20px 0", borderTop: "1px solid #E2E8F0" }}>
            <p style={{ fontSize: 14, color: "#94A3B8" }}>
              Don&apos;t see your tool? <Link href="/contact" style={{ color: "#3CB371", fontWeight: 700, textDecoration: "none" }}>Request an integration</Link> — most custom connectors ship in 2 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS - Marquee scroll ═══════════ */}
      <section style={{ padding: "100px 0", background: "#D7F266", borderTop: "1px solid rgba(15,23,42,0.08)", borderBottom: "1px solid rgba(15,23,42,0.08)", overflow: "hidden" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "48px" }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "#F0FDF4", color: "#3CB371", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>Customer Stories</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Loved by HR Teams Across India
            </h2>
          </div>
        </div>
        {/* Two rows scrolling in opposite directions */}
        <div className="space-y-4" style={{ maxWidth: "100vw" }}>
          {[
            [
              { name: "Priya Sharma", role: "HR Head, TechVentures", quote: "The compliance automation saved us from 3 penalty notices in our first quarter. PT for all our 6 state offices handled automatically." },
              { name: "Rajesh Kumar", role: "CFO, ManufactureIndia", quote: "Switched from GreytHR. Payroll processing went from 5 days to 4 hours. ECR generation and Form 16 on autopilot." },
              { name: "Anita Desai", role: "HR Manager, StartupHub", quote: "As a 40-person startup we needed compliance automation without hiring an expert. This platform handled everything from day one." },
              { name: "Vikram Singh", role: "COO, RetailMax Chain", quote: "Managing 2,000 employees across 45 stores was chaos. Now attendance, shifts, and payroll run like clockwork every single month." },
              { name: "Deepa Nair", role: "CHRO, FinServe Corp", quote: "The 19-state Professional Tax engine alone is worth the investment. We operate in 8 states and every PT slab is handled accurately." },
              { name: "Arjun Mehta", role: "Founder, TechStartup", quote: "We went from 15 to 200 employees in 18 months. The platform scaled with us. Never had to switch or rebuild anything." },
              { name: "Kavita Reddy", role: "HR Lead, EduPro", quote: "The letter templates and policy documents saved us over 15 hours every month. Previously we were creating everything from scratch." },
            ],
            [
              { name: "Suresh Patel", role: "VP HR, HealthCorp", quote: "24x7 nurse rostering was our biggest headache. The shift management module solved it completely with automatic overtime calculation." },
              { name: "Nisha Agarwal", role: "HR Director, LogiTrans", quote: "GPS attendance for 800 delivery partners across 12 cities. Real-time tracking, geo-fencing, and automatic payroll integration." },
              { name: "Rohit Kapoor", role: "CFO, BuildIndia", quote: "Construction worker compliance under BOCW Act was manual and risky. Now contractor management and muster rolls are fully automated." },
              { name: "Meera Iyer", role: "HR Manager, SaaS Co", quote: "The ESS portal is excellent. Employees handle their own tax declarations, leave requests, and payslip downloads without bothering HR." },
              { name: "Amit Joshi", role: "CEO, ConsultFirm", quote: "Timesheet management with billable hours tracking transformed our project profitability analysis. We finally know where time goes." },
              { name: "Shreya Das", role: "HR Head, BFSI Corp", quote: "RBI compliance requirements for our banking operations are strict. The audit trails and compliance dashboard give us complete confidence." },
              { name: "Ravi Kumar", role: "Ops Head, Factory", quote: "Factories Act overtime compliance was giving us sleepless nights. Now double-rate calculations and weekly hour caps are automated." },
            ],
          ].map((row, ri) => (
            <div key={ri} className="flex gap-4" style={{
              animation: `scroll${ri === 0 ? "Left" : "Right"} 60s linear infinite`,
              width: "max-content",
            }}>
              {[...row, ...row].map((t, ti) => (
                <div key={`${t.name}-${ti}`} style={{ width: "340px", flexShrink: 0, padding: "24px", borderRadius: "14px", border: "1px solid #E2E8F0", background: "#fff" }}>
                  <div className="flex gap-0.5" style={{ marginBottom: "12px" }}>
                    {[1,2,3,4,5].map(s => <Star key={s} style={{ width: 12, height: 12, fill: "#FBBF24", color: "#FBBF24" }} />)}
                  </div>
                  <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.7, marginBottom: "16px" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div style={{ width: 32, height: 32, borderRadius: "8px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#475569" }}>
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p style={{ fontSize: "12px", fontWeight: 600, color: "#1E293B" }}>{t.name}</p>
                      <p style={{ fontSize: "10px", color: "#94A3B8" }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes scrollLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes scrollRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        `}</style>
      </section>

      {/* ═══════════ CTA — HOMEPAGE ONLY ═══════════ */}
      <section style={{ background: "linear-gradient(135deg, #F0FDF4, #DCFCE7, #BBF7D0, #E0F2FE)", padding: "72px 0", position: "relative", overflow: "hidden", borderTop: "1px solid #E2E8F0" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, borderRadius: "50%", background: "rgba(96,209,132,0.12)" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 250, height: 250, borderRadius: "50%", background: "rgba(134,239,172,0.10)" }} />
        <div className="max-w-[1280px] mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2, letterSpacing: "-0.5px", marginBottom: "14px" }}>
            Ready to Transform Your HR Operations?
          </h2>
          <p style={{ fontSize: "16px", color: "#64748B", marginBottom: "32px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
            Join 500+ Indian companies. 14-day free trial with full access to all 9 modules.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Start Free Trial
              <span className="cta-arrow"><ArrowRight style={{ width: 13, height: 13 }} /></span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              View Pricing
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ - 2 Column Grid (Pocket HRMS style) ═══════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "14px" }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "#F1F5F9", color: "#475569", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Everything You Need to Know About Our HRMS
            </h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Find answers to the most common questions about our HRMS software, compliance features, and how to get started.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { q: "What is HRMS Software?", a: "HRMS (Human Resource Management System) is an all-in-one platform that automates your entire HR workflow including payroll, attendance, leave, performance, recruitment, and statutory compliance. Indian companies need it because India has 29+ labour laws that vary by state, industry, and company size." },
              { q: "What compliance does it cover?", a: "Every major Indian compliance: EPF under the EPF Act 1952, ESI under the ESI Act 1948, Professional Tax for all 19 states, TDS under Section 192 with Form 16, LWF, Gratuity, Bonus Act 1965, POSH Act 2013, Shops and Establishments Act, Minimum Wages, and all four Labour Codes 2020." },
              { q: "Can I run multi-state payroll?", a: "Yes. Our engine auto-applies correct PT slabs for each state, manages different LWF rates, ensures minimum wage compliance per state, and handles inter-state PF transfers. Works for employees in Maharashtra, Karnataka, Tamil Nadu, or any other state." },
              { q: "How long does setup take?", a: "Most companies go live within 2 to 5 business days. We handle complete data migration from Excel, GreytHR, Keka, Zoho People, or any existing system. We configure salary structures and compliance rules for your states." },
              { q: "Do you support biometric attendance?", a: "Yes. We integrate with eSSL, ZKTeco, Realtime, and HikVision devices. Our mobile app supports GPS attendance with geo-fencing, selfie capture, and location trail for field employees across multiple sites." },
              { q: "What makes you different from competitors?", a: "Three things: (1) PT for all 19 states, not just top 5. (2) 10 free resource hubs with templates, calculators, and guides no competitor offers. (3) Built India-first with compliance at the core, not bolted on to a global product." },
              { q: "Is there a free trial?", a: "Yes. 14-day free trial with full access to all 9 modules and every compliance feature. No credit card required. Import data, run test payroll, configure compliance, and evaluate before any commitment." },
              { q: "Do you generate Form 16?", a: "Yes. Form 16 Part A via TRACES integration and Part B with complete salary breakup, tax declarations (80C, 80D, HRA), deduction summaries, and full tax computation. Supports digital signature for bulk distribution." },
              { q: "Can I access it on mobile?", a: "Yes. Native iOS and Android apps for employees (GPS attendance, leave apply, payslip download, tax declaration) and managers (approvals, team dashboards). Full functionality on the go." },
              { q: "How secure is my employee data?", a: "Enterprise-grade security with ISO 27001 practices, SOC 2 compliance readiness, DPDP Act compliance for employee data protection, encrypted data at rest and in transit, role-based access controls, and comprehensive audit trails." },
            ].map((faq) => (
              <details key={faq.q} className="group" style={{ borderRadius: "12px", background: "#F8FAFC", border: "1px solid #E2E8F0", overflow: "hidden", transition: "all 0.2s" }}>
                <summary className="flex items-center gap-3 cursor-pointer" style={{ padding: "16px 20px" }}>
                  <span style={{ width: 28, height: 28, borderRadius: "8px", background: "#EAF8F0", color: "#166534", border: "1px solid #BFEA4D", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px", transition: "all 0.2s" }} className="group-open:bg-[#0E3B32] group-open:text-[#CFF25E] group-open:border-[#0E3B32]">
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A" }}>{faq.q}</span>
                </summary>
                <div style={{ padding: "0 20px 16px 64px", fontSize: "13px", color: "#64748B", lineHeight: 1.75 }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
