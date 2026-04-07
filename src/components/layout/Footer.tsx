import Link from "next/link"
import { productLinks, resourceLinks, companyLinks } from "@/lib/data/navigation"
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck } from "lucide-react"
import { Logo } from "@/components/ui/Logo"

const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Indore", "Kochi"]

export default function Footer() {
  return (
    <footer role="contentinfo">
      {/* Main Footer Grid */}
      <div style={{ background: "#FFFFFF", padding: "56px 0 32px", borderTop: "1px solid #E2E8F0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Brand + Contact */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  marginBottom: "16px",
                }}
              >
                <Logo size={56} showText={true} />
              </Link>
              <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.7, marginBottom: "16px", maxWidth: "240px" }}>
                India&apos;s most compliant HRMS platform. Automate payroll, attendance, compliance, and HR operations.
              </p>
              <div className="space-y-2">
                <a href="tel:+919999999999" className="flex items-center gap-2" style={{ fontSize: "12px", color: "#64748B" }}>
                  <Phone style={{ width: 12, height: 12 }} /> +91 99999 99999
                </a>
                <a href="mailto:hello@hrmssoftwareinindia.com" className="flex items-center gap-2" style={{ fontSize: "12px", color: "#64748B" }}>
                  <Mail style={{ width: 12, height: 12 }} /> hello@hrmssoftwareinindia.com
                </a>
                <span className="flex items-center gap-2" style={{ fontSize: "12px", color: "#64748B" }}>
                  <MapPin style={{ width: 12, height: 12 }} /> India
                </span>
              </div>
            </div>

            {/* Products */}
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#1E293B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Product</p>
              <ul className="space-y-[10px]">
                {productLinks.map((l) => (
                  <li key={l.href}><Link href={l.href} style={{ fontSize: "13px", color: "#64748B" }} className="hover:text-[#3CB371] transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#1E293B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Resources</p>
              <ul className="space-y-[10px]">
                {resourceLinks.map((l) => (
                  <li key={l.href}><Link href={l.href} style={{ fontSize: "13px", color: "#64748B" }} className="hover:text-[#3CB371] transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#1E293B", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>Company</p>
              <ul className="space-y-[10px]">
                {companyLinks.map((l) => (
                  <li key={l.href}><Link href={l.href} style={{ fontSize: "13px", color: "#64748B" }} className="hover:text-[#3CB371] transition-colors">{l.name}</Link></li>
                ))}
                <li><Link href="/demo" style={{ fontSize: "13px", color: "#64748B" }} className="hover:text-[#3CB371] transition-colors">Request Demo</Link></li>
                <li><Link href="/blog" style={{ fontSize: "13px", color: "#64748B" }} className="hover:text-[#3CB371] transition-colors">Blog</Link></li>
                <li><Link href="/glossary" style={{ fontSize: "13px", color: "#64748B" }} className="hover:text-[#3CB371] transition-colors">HR Glossary</Link></li>
              </ul>
            </div>
          </div>

          {/* City Links */}
          <div className="flex items-center gap-3 flex-wrap justify-center" style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #E2E8F0" }}>
            {cities.map((city, i) => (
              <span key={city}>
                <Link href={`/hrms-software-${city.toLowerCase()}`} style={{ fontSize: "11px", color: "#94A3B8", fontWeight: 500 }} className="hover:text-[#3CB371] transition-colors">
                  {city}
                </Link>
                {i < cities.length - 1 && <span style={{ color: "#CBD5E1", marginLeft: "12px" }}>|</span>}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4" style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #F1F5F9" }}>
            <p style={{ fontSize: "11px", color: "#94A3B8" }}>&copy; {new Date().getFullYear()} HRMS Software in India. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" style={{ fontSize: "11px", color: "#94A3B8" }} className="hover:text-[#3CB371] transition-colors">Privacy Policy</Link>
              <Link href="/terms" style={{ fontSize: "11px", color: "#94A3B8" }} className="hover:text-[#3CB371] transition-colors">Terms of Use</Link>
              <Link href="/sitemap" style={{ fontSize: "11px", color: "#94A3B8" }} className="hover:text-[#3CB371] transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
