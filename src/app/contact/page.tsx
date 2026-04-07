import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight, Phone, Mail, MapPin, Clock, Building2,
  ShieldCheck, Zap, Users, CheckCircle2, ChevronDown, Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | HRMS Demo & Payroll Software Demo India',
  description: 'Contact our HRMS experts for a free payroll software demo. Get in touch for HRMS pricing, implementation support, and compliance consultation across India.',
  keywords: 'HRMS demo, payroll software demo, contact HRMS India, HR software consultation, HRMS pricing India',
};

const faqs = [
  {
    q: 'How quickly can I get a personalized HRMS demo?',
    a: 'We schedule HRMS demos within 24 hours of your request. Our product specialist will walk you through payroll, attendance, leave management, and compliance modules tailored to your industry and employee count.',
  },
  {
    q: 'Do you offer a free trial before committing?',
    a: 'Yes, we provide a 14-day free trial with full access to all modules. No credit card required. You can explore payroll processing, employee self-service, expense management, and performance tracking at your own pace.',
  },
  {
    q: 'Which Indian states does your payroll software support?',
    a: 'Our platform covers all 28 states and 8 union territories with automatic compliance for PF, ESI, Professional Tax, TDS, Labour Welfare Fund, and Gratuity. We update the platform the same day any labour law changes.',
  },
  {
    q: 'Can you migrate data from our current HRMS or Excel?',
    a: 'Absolutely. We provide guided data migration from GreytHR, Keka, Zoho People, SAP, and Excel spreadsheets. Most migrations complete within 2 to 5 business days with zero data loss and full validation.',
  },
  {
    q: 'What is the pricing structure for your HRMS?',
    a: 'We charge a transparent per-employee-per-month fee with no hidden costs. No setup fees, no module lock-ins, and no extra charges for compliance updates or support. Volume discounts available for 500+ employees.',
  },
  {
    q: 'Do you provide implementation and onboarding support?',
    a: 'Every customer gets a dedicated implementation manager who handles configuration, data migration, policy setup, and team training. We also provide 24/7 support from our India-based HRMS experts.',
  },
];

const employeeCounts = [
  'Select employee count',
  '1-50',
  '51-200',
  '201-500',
  '501-1000',
  '1001-5000',
  '5000+',
];

export default function ContactPage() {
  return (
    <main>
      {/* ═══════════ 1. HERO ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1180px] mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div className="inline-flex items-center gap-2" style={{
            padding: '6px 16px', borderRadius: '9999px',
            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)',
            border: '1px solid #E2E8F0', fontSize: '13px', fontWeight: 600, color: '#1E293B',
            marginBottom: '28px',
          }}>
            <Mail style={{ width: 14, height: 14, color: '#3CB371' }} />
            Get in Touch
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 60px)', fontWeight: 800,
            color: '#141413', lineHeight: 1.1, letterSpacing: '-2.5px',
            marginBottom: '20px', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto',
          }}>
            Let&apos;s Transform Your HR
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#6A7282',
            lineHeight: 1.75, maxWidth: '620px', marginLeft: 'auto', marginRight: 'auto',
            marginBottom: '36px',
          }}>
            Ready to simplify payroll, attendance, and compliance for your Indian business? Reach out for a free HRMS demo, pricing details, or implementation guidance. Our team responds within 2 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ marginBottom: '28px' }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Book a Free HRMS Demo
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              View Pricing Plans
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 flex-wrap" style={{ marginTop: '12px' }}>
            {['Response within 2 hours', 'Free payroll software demo', 'No commitment required'].map((t) => (
              <span key={t} className="flex items-center gap-1.5" style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>
                <CheckCircle2 style={{ width: 14, height: 14, color: '#3CB371' }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 2. CONTACT FORM + INFO ═══════════ */}
      <section style={{ padding: '88px 0', background: '#fff' }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Left: Form */}
            <div className="lg:col-span-3">
              <span style={{
                display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
                background: '#F0FDF4', color: '#3CB371', fontSize: '12px', fontWeight: 600, marginBottom: '14px',
              }}>
                Send Us a Message
              </span>
              <h2 style={{
                fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800,
                color: '#141413', lineHeight: 1.15, marginBottom: '8px',
              }}>
                Tell Us About Your HR Needs
              </h2>
              <p style={{ fontSize: '15px', color: '#6A7282', lineHeight: 1.75, marginBottom: '32px' }}>
                Fill out the form below and our HRMS specialists will get back to you with a tailored solution for your business. Whether you need a payroll software demo or compliance consultation, we are here to help.
              </p>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#141413', marginBottom: '6px' }}>
                      Full Name <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      style={{
                        width: '100%', padding: '12px 16px', borderRadius: '10px',
                        border: '1.5px solid #E2E8F0', fontSize: '14px', color: '#141413',
                        background: '#FAF9F5', transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#141413', marginBottom: '6px' }}>
                      Work Email <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. rajesh@company.com"
                      style={{
                        width: '100%', padding: '12px 16px', borderRadius: '10px',
                        border: '1.5px solid #E2E8F0', fontSize: '14px', color: '#141413',
                        background: '#FAF9F5', transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#141413', marginBottom: '6px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      style={{
                        width: '100%', padding: '12px 16px', borderRadius: '10px',
                        border: '1.5px solid #E2E8F0', fontSize: '14px', color: '#141413',
                        background: '#FAF9F5', transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#141413', marginBottom: '6px' }}>
                      Company Name <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="e.g. Acme Technologies Pvt Ltd"
                      style={{
                        width: '100%', padding: '12px 16px', borderRadius: '10px',
                        border: '1.5px solid #E2E8F0', fontSize: '14px', color: '#141413',
                        background: '#FAF9F5', transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="employees" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#141413', marginBottom: '6px' }}>
                    Employee Count <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    required
                    defaultValue=""
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1.5px solid #E2E8F0', fontSize: '14px', color: '#141413',
                      background: '#FAF9F5', transition: 'border-color 0.2s, box-shadow 0.2s',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236A7282' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      paddingRight: '40px',
                    }}
                  >
                    <option value="" disabled>Select employee count</option>
                    {employeeCounts.slice(1).map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#141413', marginBottom: '6px' }}>
                    How Can We Help? <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your HR challenges, modules you are interested in, or any questions about our payroll software demo..."
                    style={{
                      width: '100%', padding: '12px 16px', borderRadius: '10px',
                      border: '1.5px solid #E2E8F0', fontSize: '14px', color: '#141413',
                      background: '#FAF9F5', transition: 'border-color 0.2s, box-shadow 0.2s',
                      resize: 'vertical', fontFamily: 'inherit',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="cta-base cta-primary cta-lg"
                  style={{ alignSelf: 'flex-start', cursor: 'pointer', border: 'none' }}
                >
                  Send Message
                  <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
                </button>

                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6 }}>
                  By submitting this form, you agree to our privacy policy. We will only use your information to respond to your inquiry about our HRMS platform.
                </p>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-2">
              <div style={{
                padding: '32px', borderRadius: '20px',
                border: '1px solid #E2E8F0', background: '#F7F6F4',
                position: 'sticky', top: '24px',
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#141413', marginBottom: '6px' }}>
                  Contact Information
                </h3>
                <p style={{ fontSize: '14px', color: '#6A7282', lineHeight: 1.7, marginBottom: '28px' }}>
                  Reach out directly or fill out the form. We typically respond to HRMS demo requests within 2 business hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div className="flex gap-4">
                    <div style={{
                      width: 48, height: 48, borderRadius: '14px', flexShrink: 0,
                      background: '#F0FDF4', color: '#3CB371',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Phone style={{ width: 22, height: 22 }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#141413', marginBottom: '2px' }}>Phone</p>
                      <a href="tel:+918012345678" style={{ fontSize: '14px', color: '#3CB371', fontWeight: 600, textDecoration: 'none' }}>
                        +91 80 1234 5678
                      </a>
                      <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>Mon-Sat, 9 AM to 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div style={{
                      width: 48, height: 48, borderRadius: '14px', flexShrink: 0,
                      background: '#E0F2FE', color: '#047857',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Mail style={{ width: 22, height: 22 }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#141413', marginBottom: '2px' }}>Email</p>
                      <a href="mailto:info@hrmssoftwareinindia.com" style={{ fontSize: '14px', color: '#3CB371', fontWeight: 600, textDecoration: 'none' }}>
                        info@hrmssoftwareinindia.com
                      </a>
                      <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>We reply within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div style={{
                      width: 48, height: 48, borderRadius: '14px', flexShrink: 0,
                      background: '#FEF3C7', color: '#D97706',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <MapPin style={{ width: 22, height: 22 }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#141413', marginBottom: '2px' }}>Head Office</p>
                      <p style={{ fontSize: '14px', color: '#6A7282', lineHeight: 1.6 }}>
                        4th Floor, Tech Park, Outer Ring Road,<br />
                        Marathahalli, Bengaluru 560037,<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div style={{
                      width: 48, height: 48, borderRadius: '14px', flexShrink: 0,
                      background: '#DCFCE7', color: '#16A34A',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Clock style={{ width: 22, height: 22 }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#141413', marginBottom: '2px' }}>Business Hours</p>
                      <p style={{ fontSize: '14px', color: '#6A7282', lineHeight: 1.6 }}>
                        Monday to Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 10:00 AM - 4:00 PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '28px', paddingTop: '24px',
                  borderTop: '1px solid #E2E8F0',
                }}>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#141413', marginBottom: '10px' }}>
                    Prefer a quick call?
                  </p>
                  <p style={{ fontSize: '13px', color: '#6A7282', lineHeight: 1.6, marginBottom: '14px' }}>
                    Schedule a 15-minute discovery call with our HRMS specialist. No sales pitch, just a conversation about your needs.
                  </p>
                  <Link href="/demo" className="cta-base cta-secondary cta-sm" style={{ fontSize: '13px', padding: '10px 20px' }}>
                    Schedule a Call
                    <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. WHY CHOOSE US ═══════════ */}
      <section style={{ padding: '88px 0', background: '#F7F6F4' }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
              background: '#DCFCE7', color: '#16A34A', fontSize: '12px', fontWeight: 600, marginBottom: '14px',
            }}>
              Why Choose Us
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
              color: '#141413', lineHeight: 1.15, marginBottom: '12px',
            }}>
              Why 500+ Indian Businesses Trust Our HRMS
            </h2>
            <p style={{ fontSize: '16px', color: '#6A7282', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
              From startups in Bengaluru to enterprises in Mumbai, our payroll software and HRMS platform delivers measurable results from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: ShieldCheck,
                title: '100% Statutory Compliance',
                desc: 'PF, ESI, PT, TDS, LWF, Gratuity across all 28 states. Auto-updated the same day laws change. Zero penalty risk.',
                tint: '#F0FDF4',
                tone: '#3CB371',
              },
              {
                icon: Zap,
                title: 'Go Live in 5 Days',
                desc: 'Guided onboarding with data migration from any existing system. Most customers process their first payroll within a week.',
                tint: '#FEF3C7',
                tone: '#D97706',
              },
              {
                icon: Users,
                title: '24/7 India-Based Support',
                desc: 'Real HRMS experts who understand Indian compliance challenges. No offshore call centers, no ticket black holes.',
                tint: '#E0F2FE',
                tone: '#047857',
              },
              {
                icon: Building2,
                title: 'Built for India, by India',
                desc: 'Designed from the ground up for Indian labour laws, multi-state payroll, and the four Labour Codes 2020.',
                tint: '#EDE9FE',
                tone: '#7C3AED',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} style={{
                  padding: '28px', borderRadius: '16px',
                  border: '1px solid #E2E8F0', background: '#fff',
                  boxShadow: '0 10px 30px rgba(15,23,42,0.04)',
                  transition: 'all 0.25s',
                }} className="hover:shadow-lg hover:-translate-y-1">
                  <div style={{
                    width: 52, height: 52, borderRadius: '14px',
                    background: item.tint, color: item.tone,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px',
                  }}>
                    <Icon style={{ width: 24, height: 24 }} />
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#141413', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6A7282', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 4. FAQ SECTION ═══════════ */}
      <section style={{ padding: "100px 0" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: "14px" }}>
            <span style={{ display: "inline-block", padding: "5px 14px", borderRadius: "8px", background: "#F1F5F9", color: "#475569", fontSize: "12px", fontWeight: 600, marginBottom: "14px" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 36px)", fontWeight: 700, color: "#1E293B", lineHeight: 1.2 }}>
              Common Questions About Our HRMS
            </h2>
          </div>
          <p className="text-center" style={{ fontSize: "15px", color: "#94A3B8", marginBottom: "40px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            Everything you need to know before requesting a demo or starting your HRMS journey with us.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {faqs.map((faq) => (
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

          <div className="text-center" style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '15px', color: '#6A7282', marginBottom: '16px' }}>
              Still have questions? Our team is ready to help.
            </p>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Get in Touch
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ 5. CTA SECTION ═══════════ */}
      <section style={{
        padding: '88px 0',
        background: 'linear-gradient(135deg, #0E3B32 0%, #0B332B 50%, #072420 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-120px', left: '-100px', width: 360, height: 360,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,209,132,0.15), transparent)',
        }} />
        <div style={{
          position: 'absolute', right: '-100px', bottom: '-120px', width: 400, height: 400,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(207,242,94,0.1), transparent)',
        }} />

        <div className="max-w-[800px] mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            width: 56, height: 56, borderRadius: '16px',
            background: 'rgba(255,255,255,0.08)', color: '#60D184',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <Star style={{ width: 28, height: 28 }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
            color: '#fff', lineHeight: 1.15, letterSpacing: '-1px',
            marginBottom: '16px',
          }}>
            Start Your HRMS Journey Today
          </h2>

          <p style={{
            fontSize: '16px', color: 'rgba(255,255,255,0.7)',
            marginBottom: '36px', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto',
            lineHeight: 1.75,
          }}>
            Join 500+ Indian businesses that have transformed their HR operations with our payroll software. Book a free demo and see the difference in action.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ marginBottom: '28px' }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Book Your Free Demo
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/contact" className="cta-base cta-secondary cta-lg">
              Contact Our Team
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['Free 14-day trial', 'No credit card required', 'Setup in under 5 days'].map((t) => (
              <span key={t} className="flex items-center gap-1.5" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                <CheckCircle2 style={{ width: 14, height: 14, color: '#60D184' }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
