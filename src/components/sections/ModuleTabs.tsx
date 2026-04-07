"use client"

import { useState } from "react"
import Link from "next/link"
import {
  IndianRupee, Clock, ShieldCheck, Users, TrendingUp,
  Timer, Receipt, Smartphone, BarChart3, ArrowRight, CheckCircle,
} from "lucide-react"

const modules = [
  {
    id: "payroll", label: "Payroll", icon: <IndianRupee style={{ width: 16, height: 16 }} />,
    slug: "payroll-software", title: "Payroll Software",
    desc: "Process salaries with auto PF, ESI, PT for 19 states, TDS, and Form 16. Generate ECR files, multi-bank disbursement, and digital salary slips.",
    features: ["CTC structuring with tax optimization", "PF/ESI auto-calculation + ECR", "PT for all 19 states", "Form 16 Part A and B", "Multi-bank NEFT/RTGS files", "Arrear and retroactive pay"],
    stats: [{ label: "Payroll Accuracy", value: "99.9%" }, { label: "Processing Time", value: "< 30 min" }, { label: "States Covered", value: "28+" }],
    mockup: {
      header: "Payroll Dashboard", sub: "March 2025 Run", color: "#60D184",
      cols: ["COMPONENT", "AMOUNT", "STATUS"],
      rows: [
        ["Gross Salary", "₹1,24,50,000", "Calculated"],
        ["PF Deductions", "₹14,94,000", "Auto"],
        ["ESI Deductions", "₹2,80,125", "Auto"],
        ["PT (19 States)", "₹3,11,500", "Applied"],
        ["TDS Deducted", "₹18,67,200", "Sec 192"],
        ["Net Payable", "₹84,97,175", "Ready"],
      ],
    },
  },
  {
    id: "attendance", label: "Attendance", icon: <Clock style={{ width: 16, height: 16 }} />,
    slug: "attendance-leave-management", title: "Attendance and Leave",
    desc: "Track attendance via biometric, GPS, QR code. Configure all leave types per Indian law including 26-week maternity. Shift roster and overtime per Factories Act.",
    features: ["Biometric + GPS geo-fencing", "Maternity leave (26 weeks)", "Shift rostering + overtime", "Sandwich leave rules", "Leave encashment", "Auto payroll sync"],
    stats: [{ label: "Attendance Rate", value: "96.4%" }, { label: "Buddy Punching", value: "0" }, { label: "Leave Types", value: "15+" }],
    mockup: {
      header: "Leave Requests", sub: "This Week | Pending approvals", color: "#86EFAC",
      cols: ["EMPLOYEE", "LEAVE TYPE", "BALANCE", "STATUS"],
      rows: [
        ["Sneha Gupta | Sick Leave | 2 days", "Sick Leave", "8 days", "Approved"],
        ["Rohit Arora | Earned Leave | 5 days", "Earned Leave", "12 days", "Pending"],
        ["Kavita Rao | Casual Leave | 1 day", "Casual Leave", "3 days", "Approved"],
        ["Vikram Mehta | Maternity | 90 days", "Maternity", "90 days", "Approved"],
      ],
    },
  },
  {
    id: "compliance", label: "Compliance", icon: <ShieldCheck style={{ width: 16, height: 16 }} />,
    slug: "hr-compliance-management", title: "HR Compliance",
    desc: "Auto-manage all 29+ Indian labour laws: EPF, ESI, PT (19 states), TDS, LWF, Gratuity, Bonus, POSH, and all four Labour Codes 2020.",
    features: ["EPF/ESI + ECR filing", "PT engine for 19 states", "POSH Act + ICC tracking", "Labour Codes 2020 ready", "Deadline alerts", "Min wage checker (28 states)"],
    stats: [{ label: "Compliance Score", value: "98.7%" }, { label: "Laws Covered", value: "29+" }, { label: "States Active", value: "19" }],
    mockup: {
      header: "Compliance Tracker", sub: "Real-time filing status", color: "#60D184",
      cols: ["FILING", "DUE DATE", "STATUS"],
      rows: [
        ["PF ECR - March 2025", "15 Apr", "Filed"],
        ["ESI Half-Yearly Return", "15 Apr", "Pending"],
        ["PT Maharashtra Q4", "30 Mar", "Filed"],
        ["TDS 24Q - Q4 FY25", "31 May", "In Progress"],
        ["Form 16 Generation", "15 Jun", "Queued"],
      ],
    },
  },
  {
    id: "recruitment", label: "Recruitment", icon: <Users style={{ width: 16, height: 16 }} />,
    slug: "recruitment-onboarding-software", title: "Recruitment and Onboarding",
    desc: "Post to Naukri, LinkedIn, Indeed. Visual ATS with AI resume parsing. Offer letter CTC builder. Digital onboarding with Aadhaar eKYC and BGV.",
    features: ["Multi-channel job posting", "AI resume parsing", "CTC offer letter builder", "Aadhaar eKYC onboarding", "BGV integration", "Pre-boarding portal"],
    stats: [{ label: "Time to Hire", value: "18 days" }, { label: "Offer Accept", value: "89%" }, { label: "Onboarding", value: "< 1 day" }],
    mockup: {
      header: "Recruitment Pipeline", sub: "Active hiring", color: "#86EFAC",
      cols: ["ROLE", "APPLICANTS", "STATUS"],
      rows: [
        ["Senior Developer (BLR)", "23", "Active"],
        ["HR Manager (Mumbai)", "15", "Screening"],
        ["Sales Lead (Delhi)", "31", "Active"],
        ["Finance Analyst (Pune)", "8", "Interview"],
      ],
    },
  },
  {
    id: "performance", label: "Performance", icon: <TrendingUp style={{ width: 16, height: 16 }} />,
    slug: "performance-management-software", title: "Performance Management",
    desc: "OKR goals with cascading alignment, KPI dashboards, bell curve appraisals, 360-degree feedback, continuous check-ins, and PIP management.",
    features: ["OKR goal cascading", "360 multi-rater feedback", "Bell curve normalization", "Continuous check-ins", "PIP documentation", "Compensation reviews"],
    stats: [{ label: "Goal Completion", value: "82%" }, { label: "Review Cycle", value: "Quarterly" }, { label: "Feedback Rate", value: "94%" }],
    mockup: {
      header: "Appraisal Cycle", sub: "Q4 FY25", color: "#60D184",
      cols: ["METRIC", "VALUE", "STATUS"],
      rows: [
        ["Self-assessments done", "1,180 / 1,247", "95%"],
        ["Manager reviews", "980 / 1,247", "79%"],
        ["Top Performers", "187", "15%"],
        ["PIPs Active", "23", "Tracked"],
      ],
    },
  },
  {
    id: "timesheet", label: "Timesheets", icon: <Timer style={{ width: 16, height: 16 }} />,
    slug: "timesheet-management-software", title: "Timesheet Management",
    desc: "Log billable vs non-billable hours per project. Utilization dashboards, approval workflows, and auto-overtime calculation for payroll.",
    features: ["Project time logging", "Billable vs non-billable", "Utilization dashboards", "Mobile entry", "Overtime auto-calc", "Client billing export"],
    stats: [{ label: "Utilization", value: "78%" }, { label: "Billable Ratio", value: "72%" }, { label: "Projects", value: "34" }],
    mockup: {
      header: "Timesheet Summary", sub: "This week", color: "#86EFAC",
      cols: ["PROJECT", "HOURS", "TYPE"],
      rows: [
        ["Project Alpha (TechCo)", "342 hrs", "Billable"],
        ["Internal Dev", "128 hrs", "Non-Bill"],
        ["Client Support", "96 hrs", "Billable"],
        ["Training", "45 hrs", "Non-Bill"],
      ],
    },
  },
  {
    id: "expense", label: "Expenses", icon: <Receipt style={{ width: 16, height: 16 }} />,
    slug: "expense-management-software", title: "Expense Management",
    desc: "Receipt OCR, GST input credit tracking, travel pre-approval, per diem management, and auto-reimbursement through payroll.",
    features: ["Receipt OCR scanning", "GST input credit", "Travel pre-approval", "Per diem by city", "Policy auto-validation", "Payroll reimbursement"],
    stats: [{ label: "Approval Time", value: "< 2 days" }, { label: "GST Recovered", value: "₹4.2L" }, { label: "Paper Free", value: "100%" }],
    mockup: {
      header: "Expense Claims", sub: "March 2025", color: "#60D184",
      cols: ["CATEGORY", "AMOUNT", "STATUS"],
      rows: [
        ["Total Submitted", "₹8,45,000", "142 claims"],
        ["Approved", "₹6,20,000", "108 claims"],
        ["Pending", "₹1,85,000", "28 claims"],
        ["GST Credit", "₹72,400", "Recovered"],
      ],
    },
  },
  {
    id: "ess", label: "Self-Service", icon: <Smartphone style={{ width: 16, height: 16 }} />,
    slug: "employee-self-service", title: "Employee Self-Service",
    desc: "Employees download payslips, apply leaves, submit 80C/80D tax declarations, upload proofs, and raise HR tickets from mobile or web.",
    features: ["Payslip download", "Leave apply + balance", "Tax declaration (80C/80D)", "Proof upload", "HR helpdesk tickets", "Manager approvals"],
    stats: [{ label: "Adoption", value: "97%" }, { label: "HR Tickets Down", value: "65%" }, { label: "Self-Service", value: "89%" }],
    mockup: {
      header: "Employee Portal", sub: "This month activity", color: "#86EFAC",
      cols: ["ACTION", "COUNT", "RATE"],
      rows: [
        ["Payslips Downloaded", "1,180", "95%"],
        ["Leave Applications", "234", "Auto-routed"],
        ["Tax Declarations", "1,102", "88%"],
        ["HR Tickets", "45", "4hr SLA"],
      ],
    },
  },
  {
    id: "analytics", label: "Analytics", icon: <BarChart3 style={{ width: 16, height: 16 }} />,
    slug: "hr-analytics-reporting", title: "HR Analytics",
    desc: "Executive dashboards, attrition prediction, gender pay audit, custom report builder, and compliance filing status center.",
    features: ["Executive dashboards", "Attrition AI prediction", "Gender pay audit", "Custom report builder", "Compliance center", "Scheduled reports"],
    stats: [{ label: "Reports", value: "2,400+" }, { label: "Accuracy", value: "87%" }, { label: "Dashboards", value: "35" }],
    mockup: {
      header: "Analytics Dashboard", sub: "FY25 insights", color: "#60D184",
      cols: ["METRIC", "VALUE", "TREND"],
      rows: [
        ["Headcount", "1,247", "+12 MoM"],
        ["Attrition Rate", "14.2%", "Industry: 18%"],
        ["Cost per Hire", "₹38,500", "Down 12%"],
        ["Gender Ratio", "38:62", "Improving"],
      ],
    },
  },
]

const statusStyle = (s: string) => {
  if (["Filed", "Approved", "Calculated", "Ready", "Applied", "Active", "Recovered", "Auto-routed", "Improving"].includes(s))
    return { bg: "#F0FDF4", color: "#3CB371" }
  if (["Pending", "Queued", "Screening"].includes(s))
    return { bg: "#FEF3C7", color: "#D97706" }
  if (["Auto", "In Progress", "Interview", "Tracked", "Sec 192", "Non-Bill"].includes(s))
    return { bg: "#BBF7D0", color: "#166534" }
  return { bg: "#F1F5F9", color: "#64748B" }
}

export default function ModuleTabs() {
  const [active, setActive] = useState("payroll")
  const m = modules.find((x) => x.id === active) || modules[0]

  return (
    <section style={{ padding: "80px 0", background: "#F8FAFC" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center" style={{ marginBottom: "32px" }}>
          <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "linear-gradient(135deg, #F0FDF4, #BBF7D0)", color: "#3CB371", fontSize: "12px", fontWeight: 600, marginBottom: "12px" }}>Complete Platform</span>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
            The Complete HR and HRMS Suite for India
          </h2>
        </div>

        {/* Tab Bar - with background card and separator line */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #E2E8F0", padding: "6px", boxShadow: "0 2px 8px rgba(0,0,0,0.03)", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <div className="flex gap-1 justify-center" style={{ minWidth: "max-content" }}>
              {modules.map((mod) => (
                <button key={mod.id} onClick={() => setActive(mod.id)} style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "10px 18px", borderRadius: "12px",
                  fontSize: "13px", fontWeight: 600, cursor: "pointer",
                  border: "none", whiteSpace: "nowrap",
                  background: active === mod.id ? "linear-gradient(135deg, #60D184, #86EFAC)" : "transparent",
                  color: active === mod.id ? "#fff" : "#64748B",
                  transition: "all 0.2s",
                }}>
                  {mod.icon} {mod.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: "10px" }}>
              <div style={{ width: 40, height: 40, borderRadius: "10px", background: "linear-gradient(135deg, #F0FDF4, #BBF7D0)", color: "#60D184", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {m.icon}
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#1E293B" }}>{m.title}</h3>
            </div>

            <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7, marginBottom: "18px" }}>{m.desc}</p>

            <div className="grid grid-cols-2 gap-2" style={{ marginBottom: "18px" }}>
              {m.features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle style={{ width: 13, height: 13, color: "#60D184", flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", color: "#475569" }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Stats CARDS */}
            <div className="grid grid-cols-3 gap-3" style={{ marginBottom: "18px" }}>
              {m.stats.map((s) => (
                <div key={s.label} style={{ padding: "14px", borderRadius: "12px", background: "#fff", border: "1px solid #E2E8F0", textAlign: "center" }}>
                  <p style={{ fontSize: "22px", fontWeight: 800, color: "#1E293B", lineHeight: 1, marginBottom: "4px" }}>{s.value}</p>
                  <p style={{ fontSize: "10px", color: "#94A3B8", fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>

            <Link href={`/${m.slug}`} className="cta-base cta-primary cta-sm">
              Explore {m.label}
              <span className="cta-arrow" style={{ width: 22, height: 22 }}>
                <ArrowRight style={{ width: 12, height: 12 }} />
              </span>
            </Link>
          </div>

          {/* Right - Dashboard mockup like hrsoftwaredelhi */}
          <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
            {/* Browser chrome */}
            <div style={{ padding: "10px 16px", borderBottom: "1px solid #F1F5F9", background: "#FAFBFC", display: "flex", alignItems: "center", gap: "8px" }}>
              <div className="flex gap-[5px]">
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F57" }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E" }} />
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28CA42" }} />
              </div>
              <span style={{ fontSize: "10px", color: "#94A3B8", fontFamily: "monospace" }}>hrmssoftwareinindia.com/dashboard</span>
            </div>

            {/* Card header */}
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div className="flex items-center gap-2">
                <div style={{ width: 32, height: 32, borderRadius: "8px", background: m.mockup.color + "18", color: m.mockup.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {m.icon}
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#1E293B" }}>{m.mockup.header}</p>
                  <p style={{ fontSize: "10px", color: "#94A3B8" }}>{m.mockup.sub}</p>
                </div>
              </div>
              <span style={{ padding: "4px 10px", borderRadius: "6px", background: "#F0FDF4", color: "#3CB371", fontSize: "10px", fontWeight: 600 }}>This Week</span>
            </div>

            {/* Table column headers */}
            <div className="flex items-center" style={{ padding: "8px 20px", background: "#F8FAFC", borderBottom: "1px solid #F1F5F9" }}>
              {m.mockup.cols.map((col, i) => (
                <span key={col} style={{ flex: i === 0 ? 2 : 1, fontSize: "10px", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.5px" }}>{col}</span>
              ))}
            </div>

            {/* Table data rows */}
            {m.mockup.rows.map((row, ri) => {
              const st = statusStyle(row[row.length - 1])
              return (
                <div key={ri} className="flex items-center" style={{ padding: "12px 20px", borderBottom: ri < m.mockup.rows.length - 1 ? "1px solid #F8FAFC" : "none" }}>
                  {row.map((cell, ci) => {
                    if (ci === 0) {
                      const parts = cell.split(" | ")
                      return (
                        <div key={ci} style={{ flex: 2, display: "flex", alignItems: "center", gap: "8px" }}>
                          {parts.length > 1 && (
                            <span style={{ width: 28, height: 28, borderRadius: "50%", background: ["#F0FDF4", "#BBF7D0", "#FEF3C7", "#E0F2FE", "#F0FDF4", "#BBF7D0"][ri % 6], color: ["#3CB371", "#166534", "#D97706", "#0369A1", "#3CB371", "#166534"][ri % 6], display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 700, flexShrink: 0 }}>
                              {parts[0].split(" ").map(w => w[0]).join("").slice(0, 2)}
                            </span>
                          )}
                          <div>
                            <p style={{ fontSize: "13px", fontWeight: 600, color: "#1E293B" }}>{parts[0]}</p>
                            {parts.length > 1 && <p style={{ fontSize: "10px", color: "#94A3B8" }}>{parts.slice(1).join(" | ")}</p>}
                          </div>
                        </div>
                      )
                    }
                    if (ci === row.length - 1) {
                      return <span key={ci} style={{ flex: 1 }}><span style={{ padding: "3px 10px", borderRadius: "6px", background: st.bg, color: st.color, fontSize: "11px", fontWeight: 600 }}>{cell}</span></span>
                    }
                    return <span key={ci} style={{ flex: 1, fontSize: "13px", fontWeight: 500, color: "#475569" }}>{cell}</span>
                  })}
                </div>
              )
            })}

            {/* Footer */}
            <div style={{ padding: "12px 20px", borderTop: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FAFBFC" }}>
              <button type="button" className="cta-base cta-secondary cta-sm" style={{ padding: "6px 12px", fontSize: "11px" }}>
                View Full Report
                <span className="cta-arrow" style={{ width: 20, height: 20 }}>
                  <ArrowRight style={{ width: 11, height: 11 }} />
                </span>
              </button>
              <span style={{ fontSize: "10px", color: "#94A3B8" }}>Updated just now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
