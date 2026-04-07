"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, TrendingUp, Users, IndianRupee, Minus, Plus } from "lucide-react"

const PLANS = [
  { name: "Core", base: 4999, perExtra: 69, color: "#3CB371" },
  { name: "Premium", base: 5999, perExtra: 89, color: "#CFF25E" },
  { name: "Ultimate", base: 6999, perExtra: 119, color: "#60D184" },
]

const MANUAL_COST_PER_EMP = 1250 // ₹/month avg manual HR cost per employee

function formatINR(n: number) {
  return n.toLocaleString("en-IN")
}

export default function PricingCalculator() {
  const [employees, setEmployees] = useState(100)
  const [planIdx, setPlanIdx] = useState(1) // default Premium

  const plan = PLANS[planIdx]
  const extraEmps = Math.max(0, employees - 50)
  const monthlyCost = plan.base + extraEmps * plan.perExtra
  const annualCost = monthlyCost * 12
  const manualAnnual = employees * MANUAL_COST_PER_EMP * 12
  const savings = Math.max(0, manualAnnual - annualCost)
  const savingsPct = manualAnnual > 0 ? Math.round((savings / manualAnnual) * 100) : 0

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="grid-cols-1 lg:grid-cols-2">

      {/* Left: Controls */}
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
          <IndianRupee style={{ width: 14, height: 14, color: "#15803D" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.8px" }}>ROI Calculator</span>
        </div>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#0F172A", lineHeight: 1.2, marginBottom: 16 }}>
          Calculate Your <span style={{ color: "#3CB371" }}>Actual Savings</span>
        </h2>
        <p style={{ fontSize: 16, color: "#64748B", lineHeight: 1.7, marginBottom: 32 }}>
          See exactly how much your business saves by switching from manual HR to our HRMS — based on your team size and chosen plan.
        </p>

        {/* Employee count control */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", marginBottom: 12, display: "block" }}>
            Number of Employees
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button
              onClick={() => setEmployees(Math.max(10, employees - 10))}
              style={{ width: 40, height: 40, borderRadius: 12, background: "#F1F5F9", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <Minus style={{ width: 16, height: 16, color: "#475569" }} />
            </button>
            <div style={{ flex: 1, position: "relative" }}>
              <input
                type="range"
                min={10}
                max={1000}
                step={10}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-[#3CB371]"
                style={{ height: 8 }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <span style={{ fontSize: 11, color: "#94A3B8" }}>10</span>
                <span style={{ fontSize: 11, color: "#94A3B8" }}>1,000</span>
              </div>
            </div>
            <button
              onClick={() => setEmployees(Math.min(1000, employees + 10))}
              style={{ width: 40, height: 40, borderRadius: 12, background: "#F1F5F9", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <Plus style={{ width: 16, height: 16, color: "#475569" }} />
            </button>
          </div>
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 900, color: "#0E3B32" }}>{employees}</span>
            <span style={{ fontSize: 14, color: "#64748B", marginLeft: 6 }}>employees</span>
          </div>
        </div>

        {/* Plan selector */}
        <div style={{ marginBottom: 8 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: "#1E293B", marginBottom: 12, display: "block" }}>
            Select Plan
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {PLANS.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setPlanIdx(i)}
                style={{
                  padding: "14px 12px",
                  borderRadius: 14,
                  border: i === planIdx ? "2px solid #0E3B32" : "1px solid #E2E8F0",
                  background: i === planIdx ? "#F0FDF4" : "#fff",
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, color: i === planIdx ? "#0E3B32" : "#475569" }}>{p.name}</div>
                <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 2 }}>₹{formatINR(p.base)}/mo</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Results card */}
      <div style={{ background: "#0E3B32", borderRadius: 28, padding: "36px", color: "#fff", boxShadow: "0 32px 80px rgba(14,59,50,0.25)" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
          <div>
            <p style={{ fontSize: 12, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px" }}>Your Savings with {plan.name}</p>
            <p style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>{employees} employees · billed quarterly</p>
          </div>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(207,242,94,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users style={{ width: 20, height: 20, color: "#CFF25E" }} />
          </div>
        </div>

        {/* Cost comparison */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontSize: 11, color: "#64748B", marginBottom: 8, fontWeight: 600 }}>Manual HR Cost / Year</p>
            <p style={{ fontSize: 26, fontWeight: 800, color: "#F87171", letterSpacing: "-1px" }}>₹{formatINR(manualAnnual)}</p>
            <p style={{ fontSize: 10, color: "#64748B", marginTop: 4 }}>₹{formatINR(MANUAL_COST_PER_EMP)}/emp/month avg</p>
          </div>
          <div style={{ background: "rgba(207,242,94,0.08)", borderRadius: 16, padding: "20px", border: "1px solid rgba(207,242,94,0.15)" }}>
            <p style={{ fontSize: 11, color: "#CFF25E", marginBottom: 8, fontWeight: 600 }}>With HRMS ({plan.name})</p>
            <p style={{ fontSize: 26, fontWeight: 800, color: "#CFF25E", letterSpacing: "-1px" }}>₹{formatINR(annualCost)}</p>
            <p style={{ fontSize: 10, color: "#64748B", marginTop: 4 }}>₹{formatINR(monthlyCost)}/month total</p>
          </div>
        </div>

        {/* Monthly breakdown */}
        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "16px 20px", marginBottom: 16, border: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "#94A3B8" }}>Base (50 employees)</span>
            <span style={{ fontSize: 12, color: "#CBD5E1", fontWeight: 700 }}>₹{formatINR(plan.base)}</span>
          </div>
          {extraEmps > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: "#94A3B8" }}>+{extraEmps} extra × ₹{plan.perExtra}</span>
              <span style={{ fontSize: 12, color: "#CBD5E1", fontWeight: 700 }}>₹{formatINR(extraEmps * plan.perExtra)}</span>
            </div>
          )}
          <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "8px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 13, color: "#fff", fontWeight: 700 }}>Monthly Total</span>
            <span style={{ fontSize: 13, color: "#CFF25E", fontWeight: 800 }}>₹{formatINR(monthlyCost)}</span>
          </div>
        </div>

        {/* Savings highlight */}
        <div style={{ background: "rgba(207,242,94,0.1)", borderRadius: 18, padding: "24px", marginBottom: 20, border: "1px solid rgba(207,242,94,0.2)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: 12, color: "#94A3B8", marginBottom: 6 }}>Annual Savings</p>
              <p style={{ fontSize: 36, fontWeight: 900, color: "#CFF25E", letterSpacing: "-1.5px", lineHeight: 1 }}>₹{formatINR(savings)}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(207,242,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp style={{ width: 24, height: 24, color: "#CFF25E" }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#CFF25E" }}>{savingsPct}%</span>
            </div>
          </div>
          <div style={{ marginTop: 12, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.08)" }}>
            <div style={{ height: 6, borderRadius: 3, background: "#CFF25E", width: `${savingsPct}%`, transition: "width 400ms ease", maxWidth: "100%" }} />
          </div>
        </div>

        <Link href="/demo" className="cta-base cta-secondary cta-lg" style={{ width: "100%", justifyContent: "center" }}>
          Get Custom Quote
          <span className="cta-arrow" style={{ width: 24, height: 24 }}><ArrowRight style={{ width: 12, height: 12 }} /></span>
        </Link>
      </div>
    </div>
  )
}
