"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, X,
  Database, Fingerprint, CalendarClock,
  ReceiptIndianRupee, UserCheck, TrendingUp,
} from "lucide-react"

type ModuleItem = {
  id: string
  title: string
  subtitle: string
  color: string
  colorLight: string
  icon: React.ReactNode
  mockup: React.ReactNode
  oldPoints: string[]
  newPoints: string[]
  outcome: string
}

/* ── mini CSS-only mockups for each module ── */

const CoreHRMockup = () => (
  <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", height: "100%" }}>
    {/* Old: scattered files */}
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <div style={{ width: 56, height: 64, background: "#FEE2E2", borderRadius: 10, border: "1px solid #FECACA", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 6 }}>
        <div style={{ width: 28, height: 3, background: "#FCA5A5", borderRadius: 2, marginBottom: 4 }} />
        <div style={{ width: 22, height: 3, background: "#FCA5A5", borderRadius: 2, marginBottom: 4 }} />
        <div style={{ width: 18, height: 3, background: "#FECACA", borderRadius: 2 }} />
        <X style={{ width: 14, height: 14, color: "#EF4444", marginTop: 6 }} />
      </div>
      <span style={{ fontSize: 9, color: "#94A3B8", fontWeight: 600 }}>Scattered</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #FECACA, #86EFAC)", borderRadius: 2 }} />
      <ArrowRight style={{ width: 14, height: 14, color: "#CBD5E1" }} />
    </div>
    {/* New: unified dashboard */}
    <div style={{ width: 100, background: "#F0FDF4", borderRadius: 12, border: "1px solid #BBF7D0", padding: 8, boxShadow: "0 4px 16px rgba(22,163,74,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 18, height: 18, background: "#0E3B32", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Database style={{ width: 10, height: 10, color: "#CFF25E" }} />
        </div>
        <span style={{ fontSize: 8, fontWeight: 800, color: "#0E3B32" }}>UNIFIED HR</span>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
        <div style={{ flex: 1, height: 20, background: "#DCFCE7", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, fontWeight: 700, color: "#15803D" }}>142</span>
        </div>
        <div style={{ flex: 1, height: 20, background: "#D1FAE5", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, fontWeight: 700, color: "#059669" }}>Active</span>
        </div>
      </div>
      <div style={{ height: 3, background: "#BBF7D0", borderRadius: 2 }}>
        <div style={{ height: 3, width: "85%", background: "#16A34A", borderRadius: 2 }} />
      </div>
    </div>
  </div>
)

const AttendanceMockup = () => (
  <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", height: "100%" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <div style={{ width: 56, height: 64, background: "#FEF2F2", borderRadius: 10, border: "1px dashed #FECACA", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 16, fontWeight: 800, color: "#F87171" }}>9:15</span>
        <span style={{ fontSize: 7, color: "#DC2626", fontWeight: 700 }}>MISMATCH</span>
      </div>
      <span style={{ fontSize: 9, color: "#94A3B8", fontWeight: 600 }}>Manual</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #FECACA, #93C5FD)", borderRadius: 2 }} />
      <ArrowRight style={{ width: 14, height: 14, color: "#CBD5E1" }} />
    </div>
    <div style={{ width: 100, background: "#EFF6FF", borderRadius: 12, border: "1px solid #BFDBFE", padding: 8, boxShadow: "0 4px 16px rgba(59,130,246,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 18, height: 18, background: "#1E40AF", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Fingerprint style={{ width: 10, height: 10, color: "#fff" }} />
        </div>
        <span style={{ fontSize: 8, fontWeight: 800, color: "#1E40AF" }}>GPS PUNCH</span>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
        <div style={{ flex: 1, height: 20, background: "#DBEAFE", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, fontWeight: 700, color: "#2563EB" }}>9:01</span>
        </div>
        <div style={{ flex: 1, height: 20, background: "#D1FAE5", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CheckCircle2 style={{ width: 10, height: 10, color: "#16A34A" }} />
        </div>
      </div>
      <div style={{ height: 3, background: "#BFDBFE", borderRadius: 2 }}>
        <div style={{ height: 3, width: "99%", background: "#3B82F6", borderRadius: 2 }} />
      </div>
    </div>
  </div>
)

const LeaveMockup = () => (
  <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", height: "100%" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <div style={{ width: 56, height: 64, background: "#FDF4FF", borderRadius: 10, border: "1px dashed #E9D5FF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, padding: 6 }}>
        <div style={{ width: 32, height: 3, background: "#E9D5FF", borderRadius: 2 }} />
        <div style={{ width: 24, height: 3, background: "#DDD6FE", borderRadius: 2 }} />
        <div style={{ width: 28, height: 3, background: "#FCA5A5", borderRadius: 2 }} />
        <span style={{ fontSize: 7, color: "#DC2626", fontWeight: 700, marginTop: 2 }}>WRONG BAL.</span>
      </div>
      <span style={{ fontSize: 9, color: "#94A3B8", fontWeight: 600 }}>Excel</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #E9D5FF, #C4B5FD)", borderRadius: 2 }} />
      <ArrowRight style={{ width: 14, height: 14, color: "#CBD5E1" }} />
    </div>
    <div style={{ width: 100, background: "#F5F3FF", borderRadius: 12, border: "1px solid #DDD6FE", padding: 8, boxShadow: "0 4px 16px rgba(139,92,246,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 18, height: 18, background: "#6D28D9", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CalendarClock style={{ width: 10, height: 10, color: "#fff" }} />
        </div>
        <span style={{ fontSize: 8, fontWeight: 800, color: "#6D28D9" }}>AUTO-SYNC</span>
      </div>
      {[
        { type: "EL", days: "12", pct: 80, c: "#8B5CF6" },
        { type: "SL", days: "4", pct: 33, c: "#A78BFA" },
      ].map((l) => (
        <div key={l.type} style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}>
          <span style={{ fontSize: 7, fontWeight: 700, color: "#6D28D9", width: 14 }}>{l.type}</span>
          <div style={{ flex: 1, height: 4, background: "#EDE9FE", borderRadius: 2 }}>
            <div style={{ height: 4, width: `${l.pct}%`, background: l.c, borderRadius: 2 }} />
          </div>
          <span style={{ fontSize: 7, fontWeight: 700, color: "#5B21B6" }}>{l.days}</span>
        </div>
      ))}
    </div>
  </div>
)

const PayrollMockup = () => (
  <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", height: "100%" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <div style={{ width: 56, height: 64, background: "#FFF7ED", borderRadius: 10, border: "1px dashed #FED7AA", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 9, fontWeight: 800, color: "#EA580C" }}>PF</span>
        <span style={{ fontSize: 7, color: "#DC2626", fontWeight: 700 }}>MANUAL ✕</span>
        <span style={{ fontSize: 9, fontWeight: 800, color: "#EA580C", marginTop: 2 }}>TDS</span>
        <span style={{ fontSize: 7, color: "#DC2626", fontWeight: 700 }}>ERROR ✕</span>
      </div>
      <span style={{ fontSize: 9, color: "#94A3B8", fontWeight: 600 }}>Manual</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #FED7AA, #FDBA74)", borderRadius: 2 }} />
      <ArrowRight style={{ width: 14, height: 14, color: "#CBD5E1" }} />
    </div>
    <div style={{ width: 100, background: "#FFF7ED", borderRadius: 12, border: "1px solid #FED7AA", padding: 8, boxShadow: "0 4px 16px rgba(234,88,12,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 18, height: 18, background: "#C2410C", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ReceiptIndianRupee style={{ width: 10, height: 10, color: "#fff" }} />
        </div>
        <span style={{ fontSize: 8, fontWeight: 800, color: "#C2410C" }}>AUTO-CALC</span>
      </div>
      {["PF ✓", "ESI ✓", "PT ✓", "TDS ✓"].map((item) => (
        <div key={item} style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D1FAE5", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CheckCircle2 style={{ width: 6, height: 6, color: "#16A34A" }} />
          </div>
          <span style={{ fontSize: 8, fontWeight: 700, color: "#9A3412" }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
)

const OnboardingMockup = () => (
  <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", height: "100%" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <div style={{ width: 56, height: 64, background: "#F0FDFA", borderRadius: 10, border: "1px dashed #99F6E4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, padding: 6 }}>
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#CCFBF1", border: "2px dashed #5EEAD4", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 8, color: "#94A3B8" }}>?</span>
        </div>
        <span style={{ fontSize: 7, color: "#DC2626", fontWeight: 700 }}>NO DATA</span>
      </div>
      <span style={{ fontSize: 9, color: "#94A3B8", fontWeight: 600 }}>Email</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #99F6E4, #5EEAD4)", borderRadius: 2 }} />
      <ArrowRight style={{ width: 14, height: 14, color: "#CBD5E1" }} />
    </div>
    <div style={{ width: 100, background: "#F0FDFA", borderRadius: 12, border: "1px solid #99F6E4", padding: 8, boxShadow: "0 4px 16px rgba(20,184,166,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 18, height: 18, background: "#0F766E", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <UserCheck style={{ width: 10, height: 10, color: "#fff" }} />
        </div>
        <span style={{ fontSize: 8, fontWeight: 800, color: "#0F766E" }}>ONBOARD</span>
      </div>
      {["Offer sent", "Docs collected", "IT setup", "Day 1 ready"].map((item, i) => (
        <div key={item} style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: i < 3 ? "#D1FAE5" : "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 5, color: i < 3 ? "#16A34A" : "#D97706", fontWeight: 900 }}>{i < 3 ? "✓" : "…"}</span>
          </div>
          <span style={{ fontSize: 8, fontWeight: 600, color: "#134E4A" }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
)

const PerformanceMockup = () => (
  <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: "center", height: "100%" }}>
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
      <div style={{ width: 56, height: 64, background: "#FFF1F2", borderRadius: 10, border: "1px dashed #FECDD3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}>
        <span style={{ fontSize: 16, fontWeight: 800, color: "#F43F5E" }}>1×</span>
        <span style={{ fontSize: 7, color: "#E11D48", fontWeight: 700 }}>PER YEAR</span>
      </div>
      <span style={{ fontSize: 9, color: "#94A3B8", fontWeight: 600 }}>Annual</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <div style={{ width: 36, height: 2, background: "linear-gradient(90deg, #FECDD3, #F9A8D4)", borderRadius: 2 }} />
      <ArrowRight style={{ width: 14, height: 14, color: "#CBD5E1" }} />
    </div>
    <div style={{ width: 100, background: "#FFF1F2", borderRadius: 12, border: "1px solid #FECDD3", padding: 8, boxShadow: "0 4px 16px rgba(244,63,94,0.1)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <div style={{ width: 18, height: 18, background: "#BE123C", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <TrendingUp style={{ width: 10, height: 10, color: "#fff" }} />
        </div>
        <span style={{ fontSize: 8, fontWeight: 800, color: "#BE123C" }}>CONTINUOUS</span>
      </div>
      <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
        <div style={{ flex: 1, height: 20, background: "#FCE7F3", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, fontWeight: 700, color: "#BE185D" }}>OKR</span>
        </div>
        <div style={{ flex: 1, height: 20, background: "#D1FAE5", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 7, fontWeight: 700, color: "#059669" }}>89%</span>
        </div>
      </div>
      <div style={{ height: 3, background: "#FECDD3", borderRadius: 2 }}>
        <div style={{ height: 3, width: "89%", background: "#F43F5E", borderRadius: 2 }} />
      </div>
    </div>
  </div>
)

const MODULES: ModuleItem[] = [
  {
    id: "core-hr",
    title: "Core HR Operations",
    subtitle: "Centralized employee data",
    color: "#0E3B32",
    colorLight: "#F0FDF4",
    icon: <Database style={{ width: 18, height: 18 }} />,
    mockup: <CoreHRMockup />,
    oldPoints: [
      "Employee records scattered across spreadsheets and folders",
      "Policy tracking and org updates happen completely manually",
      "HR spends hours answering repetitive employee queries",
    ],
    newPoints: [
      "One centralized HR master for all employee data and documents",
      "Automated policy flows and real-time org chart visibility",
      "Self-service profiles reduce HR queries by 80%",
    ],
    outcome: "Core HR runs on a single source of truth — zero duplication",
  },
  {
    id: "attendance",
    title: "Attendance Management",
    subtitle: "GPS, biometric, geo-fencing",
    color: "#1E40AF",
    colorLight: "#EFF6FF",
    icon: <Fingerprint style={{ width: 18, height: 18 }} />,
    mockup: <AttendanceMockup />,
    oldPoints: [
      "Biometric and mobile records don't match consistently",
      "Overtime approvals lack clear audit trail and visibility",
      "Payroll team loses days reconciling attendance each cycle",
    ],
    newPoints: [
      "Centralized shift, roster, and geo-fencing rules sync instantly",
      "Approval workflows create instant transparent audit history",
      "Accurate payable days flow directly into payroll — no rework",
    ],
    outcome: "Attendance becomes 100% accurate, auditable, and payroll-ready",
  },
  {
    id: "leave",
    title: "Leave Management",
    subtitle: "Policies, sandwich rules, accruals",
    color: "#6D28D9",
    colorLight: "#F5F3FF",
    icon: <CalendarClock style={{ width: 18, height: 18 }} />,
    mockup: <LeaveMockup />,
    oldPoints: [
      "Leave balances maintained in disconnected sheets per team",
      "Approval delays due to unclear routing and ownership rules",
      "Payroll deductions fail when records aren't updated on time",
    ],
    newPoints: [
      "Real-time leave balances for all employees and managers",
      "Policy-driven accruals and automated multi-level approvals",
      "Leave data auto-syncs instantly with payroll processing",
    ],
    outcome: "Leave tracking is transparent for employees, frictionless for HR",
  },
  {
    id: "payroll",
    title: "Payroll & Compliance",
    subtitle: "PF, ESI, PT, TDS automated",
    color: "#C2410C",
    colorLight: "#FFF7ED",
    icon: <ReceiptIndianRupee style={{ width: 18, height: 18 }} />,
    mockup: <PayrollMockup />,
    oldPoints: [
      "PF, ESI, PT, and TDS calculations validated manually each month",
      "State-wise compliance creates dependency on external consultants",
      "Last-minute corrections delay payslip publishing every cycle",
    ],
    newPoints: [
      "India-ready payroll engine automates all statutory calculations",
      "Built-in validation catches errors before payroll lock",
      "Audit-ready returns and Form 16 generated on demand",
    ],
    outcome: "Payroll closes in hours — not days — with zero compliance risk",
  },
  {
    id: "onboarding",
    title: "Recruitment & Onboarding",
    subtitle: "ATS to Day 1 automation",
    color: "#0F766E",
    colorLight: "#F0FDFA",
    icon: <UserCheck style={{ width: 18, height: 18 }} />,
    mockup: <OnboardingMockup />,
    oldPoints: [
      "Candidate handoffs are manual and prone to data loss",
      "Offer letters and joining docs tracked via email threads",
      "New joiners wait days for portal access and policy docs",
    ],
    newPoints: [
      "ATS-to-HR integration creates employee profiles automatically",
      "Centralized checklists and digital document collection",
      "Day-1 readiness with automated welcome and onboarding flows",
    ],
    outcome: "Hiring-to-onboarding moves from manual chaos to structured execution",
  },
  {
    id: "lifecycle",
    title: "Lifecycle & Performance",
    subtitle: "Continuous OKR, 360 reviews",
    color: "#BE123C",
    colorLight: "#FFF1F2",
    icon: <TrendingUp style={{ width: 18, height: 18 }} />,
    mockup: <PerformanceMockup />,
    oldPoints: [
      "Performance reviews happen once a year — too late to act",
      "Promotion decisions are tracked manually with no data trail",
      "Attrition risks identified only after the employee has resigned",
    ],
    newPoints: [
      "Continuous review cycles with OKR tracking tied to HR data",
      "System-driven promotion and compensation change workflows",
      "Real-time retention indicators and predictive analytics",
    ],
    outcome: "People decisions become faster, fairer, and fully data-informed",
  },
]

const AUTO_ROTATE_MS = 7000

export default function OldVsNewShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [slideDir, setSlideDir] = useState<"up" | "down">("down")
  const [isAnimating, setIsAnimating] = useState(false)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((idx: number) => {
    if (idx === activeIndex || isAnimating) return
    setSlideDir(idx > activeIndex ? "down" : "up")
    setIsAnimating(true)
    setProgress(0)
    setTimeout(() => {
      setActiveIndex(idx)
      setTimeout(() => setIsAnimating(false), 60)
    }, 280)
  }, [activeIndex, isAnimating])

  /* progress bar + auto-rotate */
  useEffect(() => {
    setProgress(0)
    if (progressRef.current) clearInterval(progressRef.current)
    if (timerRef.current) clearTimeout(timerRef.current)

    const step = 50 // ms per tick
    const ticks = AUTO_ROTATE_MS / step
    let current = 0
    progressRef.current = setInterval(() => {
      current++
      setProgress(Math.min((current / ticks) * 100, 100))
    }, step)

    timerRef.current = setTimeout(() => {
      goTo((activeIndex + 1) % MODULES.length)
    }, AUTO_ROTATE_MS)

    return () => {
      if (progressRef.current) clearInterval(progressRef.current)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [activeIndex, goTo])

  const active = MODULES[activeIndex]

  return (
    <section style={{ padding: "100px 0 90px", background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)", position: "relative", overflow: "hidden" }}>
      {/* Subtle bg decoration */}
      <div style={{ position: "absolute", top: 60, right: -120, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(207,242,94,0.06), transparent)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 40, left: -100, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(60,179,113,0.05), transparent)", pointerEvents: "none" }} />

      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 56 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 999, background: "#F0FDF4", border: "1px solid #BBF7D0", color: "#15803D", fontSize: 12, fontWeight: 700, marginBottom: 16, letterSpacing: "0.8px", textTransform: "uppercase" }}>
            Why Companies Switch
          </span>
          <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.14, letterSpacing: "-0.5px", marginBottom: 12 }}>
            Manual HR vs <span style={{ color: "#3CB371" }}>Modern HRMS</span>
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.8, maxWidth: 680, margin: "0 auto" }}>
            See the transformation across 6 core modules — from scattered spreadsheets to one unified, India-compliant platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">

          {/* ── LEFT NAV ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {MODULES.map((item, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={item.id}
                  onClick={() => goTo(idx)}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 18px",
                    borderRadius: 14,
                    border: isActive ? `1.5px solid ${item.color}20` : "1.5px solid transparent",
                    background: isActive ? item.colorLight : "transparent",
                    cursor: "pointer",
                    transition: "all 400ms cubic-bezier(0.4,0,0.2,1)",
                    overflow: "hidden",
                    textAlign: "left",
                  }}
                >
                  {/* progress bar behind active tab */}
                  {isActive && (
                    <div style={{ position: "absolute", bottom: 0, left: 0, height: 3, width: `${progress}%`, background: item.color, borderRadius: "0 2px 2px 0", transition: "width 60ms linear", opacity: 0.25 }} />
                  )}

                  <div style={{
                    width: 40, height: 40, borderRadius: 12,
                    background: isActive ? item.color : "#F1F5F9",
                    color: isActive ? "#fff" : "#94A3B8",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 400ms cubic-bezier(0.4,0,0.2,1)",
                    boxShadow: isActive ? `0 4px 14px ${item.color}30` : "none",
                  }}>
                    {item.icon}
                  </div>

                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: isActive ? "#0F172A" : "#475569", lineHeight: 1.3, transition: "color 300ms ease", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.title}
                    </p>
                    {isActive && (
                      <p style={{ fontSize: 11, color: "#64748B", marginTop: 2, fontWeight: 500 }}>
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  {isActive && (
                    <ArrowRight style={{ width: 16, height: 16, color: item.color, flexShrink: 0 }} />
                  )}
                </button>
              )
            })}
          </div>

          {/* ── RIGHT PANEL ── */}
          <div style={{
            borderRadius: 24,
            border: "1px solid #E2E8F0",
            background: "#fff",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(15,23,42,0.07), 0 2px 6px rgba(0,0,0,0.04)",
            minHeight: 520,
            display: "flex",
            flexDirection: "column",
          }}>
            {/* Panel header */}
            <div style={{ padding: "16px 24px", borderBottom: "1px solid #F1F5F9", background: "#FAFBFC", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: active.color, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 400ms ease" }}>
                  <span style={{ color: "#fff", display: "flex" }}>{active.icon}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 800, color: active.color, letterSpacing: "0.6px", textTransform: "uppercase", transition: "color 400ms ease" }}>
                  {active.title}
                </span>
              </div>
              {/* Dot indicator */}
              <div style={{ display: "flex", gap: 5 }}>
                {MODULES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    style={{
                      width: idx === activeIndex ? 22 : 6,
                      height: 6,
                      borderRadius: 999,
                      background: idx === activeIndex ? active.color : "#CBD5E1",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 500ms cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Animated content area */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <div
                key={activeIndex}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  animation: `slideIn${slideDir === "down" ? "Down" : "Up"} 0.45s cubic-bezier(0.22,1,0.36,1) forwards`,
                }}
              >
                {/* Illustration area */}
                <div style={{
                  padding: "32px 24px",
                  background: `linear-gradient(135deg, ${active.colorLight}, #FFFFFF)`,
                  borderBottom: "1px solid #F1F5F9",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 120,
                  transition: "background 400ms ease",
                }}>
                  {active.mockup}
                </div>

                {/* Comparison grid */}
                <div className="grid md:grid-cols-2" style={{ flex: 1 }}>
                  {/* Old Way */}
                  <div style={{ padding: "28px 24px", background: "#FFFBFB", borderRight: "1px solid #F1F5F9" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <X style={{ width: 14, height: 14, color: "#DC2626" }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 800, color: "#991B1B", textTransform: "uppercase", letterSpacing: "1.2px" }}>Before</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {active.oldPoints.map((pt, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            animation: `fadeSlideIn 0.4s ease-out ${0.1 + i * 0.08}s both`,
                          }}
                        >
                          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                            <span style={{ fontSize: 10, color: "#DC2626", fontWeight: 900 }}>×</span>
                          </div>
                          <span style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6, fontWeight: 500 }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* New Way */}
                  <div style={{ padding: "28px 24px", background: `linear-gradient(180deg, ${active.colorLight}80, #FFFFFF)` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 8, background: "#D1FAE5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <CheckCircle2 style={{ width: 14, height: 14, color: "#16A34A" }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 800, color: "#15803D", textTransform: "uppercase", letterSpacing: "1.2px" }}>After</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {active.newPoints.map((pt, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            animation: `fadeSlideIn 0.4s ease-out ${0.25 + i * 0.08}s both`,
                          }}
                        >
                          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#D1FAE5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                            <CheckCircle2 style={{ width: 12, height: 12, color: "#16A34A" }} />
                          </div>
                          <span style={{ fontSize: 14, color: "#1E293B", lineHeight: 1.6, fontWeight: 600 }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcome footer */}
                <div style={{ padding: "16px 24px", background: "#0E3B32", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(207,242,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <TrendingUp style={{ width: 16, height: 16, color: "#CFF25E" }} />
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#E2E8F0", lineHeight: 1.5 }}>{active.outcome}</p>
                  </div>
                  <Link href="/demo" className="cta-base cta-secondary" style={{ flexShrink: 0, padding: "8px 16px", fontSize: 12, height: "auto" }}>
                    See Demo
                    <span className="cta-arrow" style={{ width: 22, height: 22 }}>
                      <ArrowRight style={{ width: 11, height: 11 }} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateX(8px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(-16px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  )
}
