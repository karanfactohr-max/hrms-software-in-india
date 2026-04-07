import { Check, Clock, TrendingUp, Users, AlertCircle, Bell, Search, ArrowUpRight, Calendar, FileText, Building2, UserCheck } from "lucide-react"

export default function HeroDashboard() {
  return (
    <div className="relative">
      {/* Glow behind dashboard */}
      <div className="absolute -inset-6 rounded-[32px] -z-10" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(108,60,225,0.08) 0%, transparent 70%)" }} />

      {/* Main frame */}
      <div style={{
        background: "#fff", borderRadius: "20px",
        border: "1px solid #E8E8EF",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(26,26,46,0.08), 0 1px 3px rgba(26,26,46,0.04)",
      }}>
        {/* Top bar */}
        <div className="flex items-center justify-between" style={{ padding: "12px 20px", borderBottom: "1px solid #E8E8EF", background: "#FAFAFC" }}>
          <div className="flex items-center gap-3">
            <div className="flex gap-[6px]">
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28CA42" }} />
            </div>
            <div style={{ background: "#fff", borderRadius: "8px", padding: "5px 14px", border: "1px solid #E8E8EF", fontSize: "11px", color: "#8E8EA0", fontFamily: "monospace" }}>
              app.hrmssoftwareinindia.com/dashboard
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div style={{ position: "relative" }}>
              <Bell style={{ width: 15, height: 15, color: "#8E8EA0" }} />
              <span style={{ position: "absolute", top: -2, right: -2, width: 7, height: 7, borderRadius: "50%", background: "#DC2626", border: "2px solid #FAFAFC" }} />
            </div>
            <div style={{ width: 28, height: 28, borderRadius: "8px", background: "#3CB371", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff" }}>
              PS
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:flex flex-col justify-between" style={{ width: "190px", padding: "16px 12px", borderRight: "1px solid #E8E8EF", background: "#FAFAFC", flexShrink: 0 }}>
            <div className="space-y-[2px]">
              {[
                { label: "Dashboard", active: true, icon: "grid" },
                { label: "Employees", active: false, icon: "users" },
                { label: "Payroll", active: false, icon: "wallet" },
                { label: "Attendance", active: false, icon: "clock" },
                { label: "Leave Mgmt", active: false, icon: "calendar" },
                { label: "Compliance", active: false, icon: "shield" },
                { label: "Performance", active: false, icon: "trending" },
                { label: "Reports", active: false, icon: "chart" },
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
              <p style={{ fontWeight: 600, fontSize: "12px", marginBottom: 2 }}>Upgrade Plan</p>
              <p style={{ fontSize: "10px", opacity: 0.8, lineHeight: 1.4 }}>Get advanced analytics & AI insights</p>
            </div>
          </div>

          {/* Main content */}
          <div style={{ flex: 1, padding: "20px", minWidth: 0, background: "#fff" }}>
            {/* Welcome bar */}
            <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
              <div>
                <p style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A2E" }}>Good Morning, Priya</p>
                <p style={{ fontSize: "12px", color: "#8E8EA0" }}>Wednesday, 2 April 2025 &middot; Your HR overview</p>
              </div>
              <div className="hidden md:flex items-center gap-2" style={{ background: "#F7F7FA", borderRadius: "10px", padding: "8px 16px", border: "1px solid #E8E8EF" }}>
                <Search style={{ width: 13, height: 13, color: "#8E8EA0" }} />
                <span style={{ fontSize: "12px", color: "#8E8EA0" }}>Search anything...</span>
              </div>
            </div>

            {/* KPI Cards — white with colored left accent */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" style={{ marginBottom: "20px" }}>
              {[
                { label: "Total Employees", value: "1,247", change: "+12 this month", color: "#3CB371", bgColor: "#E0F2FE", icon: <Users style={{ width: 14, height: 14 }} /> },
                { label: "Payroll Processed", value: "₹2.4 Cr", change: "March — On Time", color: "#059669", bgColor: "#D1FAE5", icon: <FileText style={{ width: 14, height: 14 }} /> },
                { label: "Active Leaves", value: "23", change: "5 pending approval", color: "#D97706", bgColor: "#FEF3C7", icon: <Calendar style={{ width: 14, height: 14 }} /> },
                { label: "Compliance", value: "98%", change: "1 filing due", color: "#0EA5E9", bgColor: "#E0F2FE", icon: <Check style={{ width: 14, height: 14 }} /> },
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: "#fff", borderRadius: "12px", padding: "16px",
                  border: "1px solid #E8E8EF", borderLeft: `3px solid ${stat.color}`,
                }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: "10px" }}>
                    <span style={{ fontSize: "11px", color: "#8E8EA0", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>{stat.label}</span>
                    <span style={{ width: 28, height: 28, borderRadius: "8px", background: stat.bgColor, color: stat.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {stat.icon}
                    </span>
                  </div>
                  <p style={{ fontSize: "26px", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: "4px" }}>{stat.value}</p>
                  <div className="flex items-center gap-1">
                    <ArrowUpRight style={{ width: 11, height: 11, color: stat.color }} />
                    <span style={{ fontSize: "11px", color: stat.color, fontWeight: 500 }}>{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Two column: Compliance + Quick Actions + Team */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {/* Compliance Tracker — 3/5 */}
              <div className="md:col-span-3" style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                  <div className="flex items-center gap-2">
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3CB371" }} />
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E" }}>Compliance Tracker</p>
                  </div>
                  <span style={{ fontSize: "11px", color: "#3CB371", fontWeight: 600, cursor: "pointer" }}>View All &rarr;</span>
                </div>
                <div className="space-y-[6px]">
                  {[
                    { task: "PF ECR — March 2025", status: "Filed", sColor: "#059669", sBg: "#D1FAE5", progress: 100 },
                    { task: "ESI Half-Yearly Return", status: "Due Apr 15", sColor: "#D97706", sBg: "#FEF3C7", progress: 65 },
                    { task: "PT Maharashtra — Q4", status: "Filed", sColor: "#059669", sBg: "#D1FAE5", progress: 100 },
                    { task: "TDS 24Q — Q4 FY25", status: "In Progress", sColor: "#0EA5E9", sBg: "#E0F2FE", progress: 72 },
                    { task: "Form 16 Generation", status: "Pending", sColor: "#D97706", sBg: "#FEF3C7", progress: 10 },
                  ].map((item) => (
                    <div key={item.task} className="flex items-center gap-3" style={{ padding: "10px 12px", borderRadius: "8px", background: "#FAFAFC", border: "1px solid #F0F0F5" }}>
                      <div style={{ width: 30, height: 30, borderRadius: "8px", background: item.sBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {item.progress === 100 ? <Check style={{ width: 13, height: 13, color: item.sColor }} /> : <Clock style={{ width: 13, height: 13, color: item.sColor }} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between" style={{ marginBottom: "4px" }}>
                          <p style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 600 }}>{item.task}</p>
                          <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 10px", borderRadius: "9999px", color: item.sColor, background: item.sBg, flexShrink: 0, marginLeft: 8 }}>
                            {item.status}
                          </span>
                        </div>
                        <div style={{ width: "100%", height: 4, borderRadius: 2, background: "#E8E8EF" }}>
                          <div style={{ width: `${item.progress}%`, height: "100%", borderRadius: 2, background: item.sColor }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — 2/5 */}
              <div className="md:col-span-2 space-y-3">
                {/* Quick Actions */}
                <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "12px" }}>Quick Actions</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Run Payroll", icon: <FileText style={{ width: 16, height: 16 }} />, color: "#3CB371", bg: "#E0F2FE" },
                      { label: "New Hire", icon: <UserCheck style={{ width: 16, height: 16 }} />, color: "#059669", bg: "#D1FAE5" },
                      { label: "Leave Requests", icon: <Calendar style={{ width: 16, height: 16 }} />, color: "#D97706", bg: "#FEF3C7" },
                      { label: "File Returns", icon: <Building2 style={{ width: 16, height: 16 }} />, color: "#0EA5E9", bg: "#E0F2FE" },
                    ].map((action) => (
                      <div key={action.label} style={{
                        padding: "14px 12px", borderRadius: "10px", background: "#FAFAFC", border: "1px solid #F0F0F5",
                        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer",
                      }}>
                        <span style={{ width: 36, height: 36, borderRadius: "10px", background: action.bg, color: action.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {action.icon}
                        </span>
                        <span style={{ fontSize: "11px", color: "#5A5A7A", fontWeight: 600 }}>{action.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Today */}
                <div style={{ background: "#fff", borderRadius: "12px", padding: "18px", border: "1px solid #E8E8EF" }}>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", marginBottom: "10px" }}>Team Today</p>
                  <div className="space-y-[8px]">
                    {[
                      { name: "Rahul Singh", status: "On Leave", sColor: "#D97706", initials: "RS", bg: "#FEF3C7" },
                      { name: "Meera Patel", status: "Present", sColor: "#059669", initials: "MP", bg: "#D1FAE5" },
                      { name: "Amit Sharma", status: "Present", sColor: "#059669", initials: "AS", bg: "#D1FAE5" },
                      { name: "Sneha Gupta", status: "WFH", sColor: "#0EA5E9", initials: "SG", bg: "#E0F2FE" },
                    ].map((person) => (
                      <div key={person.name} className="flex items-center justify-between" style={{ padding: "6px 0" }}>
                        <div className="flex items-center gap-[10px]">
                          <span style={{ width: 30, height: 30, borderRadius: "8px", background: person.bg, color: person.sColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700 }}>
                            {person.initials}
                          </span>
                          <span style={{ fontSize: "12px", color: "#1A1A2E", fontWeight: 500 }}>{person.name}</span>
                        </div>
                        <span style={{ fontSize: "10px", fontWeight: 600, color: person.sColor }}>{person.status}</span>
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
  )
}
