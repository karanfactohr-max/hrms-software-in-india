import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight, Target, Users, ShieldCheck, Zap, Star,
  Building2, Award, Heart, Lightbulb, Globe2, TrendingUp,
  CheckCircle2, Quote
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Leading HRMS Company in India',
  description: 'Learn about our mission to simplify HR and payroll compliance for Indian businesses. Trusted by 500+ companies across 28 states with 99.9% uptime.',
  keywords: 'HRMS company India, payroll software company, Indian HR tech, compliance automation, about us, HRMS software',
};

const values = [
  {
    icon: Target,
    title: 'India-First Compliance',
    desc: 'Built from the ground up for Indian labour laws, PF, ESI, PT across all 28 states and 8 union territories. We speak your compliance language.',
    tint: '#F0FDF4',
    tone: '#3CB371',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Compromise Security',
    desc: 'Enterprise-grade data protection with India data residency options. Your employee data never leaves the boundaries you set.',
    tint: '#E0F2FE',
    tone: '#047857',
  },
  {
    icon: Zap,
    title: 'Speed Without Complexity',
    desc: 'Go live in 2 to 5 days, not months. Our guided onboarding gets your HR team productive from day one with zero learning curve.',
    tint: '#FEF3C7',
    tone: '#D97706',
  },
  {
    icon: Heart,
    title: 'Customer Obsession',
    desc: 'Dedicated implementation managers, 24/7 support, and quarterly business reviews. Your success is our only metric that matters.',
    tint: '#FCE7F3',
    tone: '#BE185D',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    desc: 'Our platform updates the same day labour laws change. We invest heavily in R&D so you never fall behind on compliance.',
    tint: '#EDE9FE',
    tone: '#7C3AED',
  },
  {
    icon: Globe2,
    title: 'Built to Scale',
    desc: 'From 10-employee startups to 50,000-employee enterprises. Our architecture grows with you without any platform migration.',
    tint: '#DCFCE7',
    tone: '#16A34A',
  },
];

const team = [
  { name: 'Rajesh Mehta', role: 'Founder & CEO', initials: 'RM', bio: '15+ years in HR tech. Built payroll systems serving 2M+ employees.' },
  { name: 'Priya Subramaniam', role: 'Chief Product Officer', initials: 'PS', bio: 'Former VP at a top HR SaaS company. Product visionary for Indian compliance.' },
  { name: 'Amit Kapoor', role: 'CTO', initials: 'AK', bio: 'Ex-AWS architect. Built scalable multi-tenant platforms for enterprise.' },
  { name: 'Deepa Krishnamurthy', role: 'Head of Customer Success', initials: 'DK', bio: '12 years managing enterprise HR transformations across India.' },
];

const testimonials = [
  {
    name: 'Suresh Patel',
    role: 'VP HR, HealthCorp India',
    quote: 'We evaluated five HRMS platforms before choosing this one. The compliance engine for multi-state operations is unmatched. Professional Tax across 8 states handled flawlessly from day one.',
  },
  {
    name: 'Nisha Agarwal',
    role: 'HR Director, LogiTrans Pvt Ltd',
    quote: 'Managing attendance and payroll for 800 delivery partners across 12 cities was our biggest challenge. GPS tracking with geo-fencing and automatic payroll integration solved it completely.',
  },
  {
    name: 'Vikram Singh',
    role: 'COO, RetailMax Chain',
    quote: 'Switched from a legacy HRMS and the difference is night and day. Payroll processing went from 5 days to under 4 hours. Our HR team finally has time for strategic initiatives.',
  },
  {
    name: 'Kavita Reddy',
    role: 'HR Lead, EduPro Institutions',
    quote: 'The letter templates, policy documents, and compliance dashboards saved us over 20 hours every month. For an education institution with limited HR staff, this platform is a lifesaver.',
  },
];

export default function AboutPage() {
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
            <Building2 style={{ width: 14, height: 14, color: '#3CB371' }} />
            About Our Company
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 60px)', fontWeight: 800,
            color: '#141413', lineHeight: 1.1, letterSpacing: '-2.5px',
            marginBottom: '20px', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto',
          }}>
            Building India&apos;s Most Trusted HRMS
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#6A7282',
            lineHeight: 1.75, maxWidth: '620px', marginLeft: 'auto', marginRight: 'auto',
            marginBottom: '36px',
          }}>
            We are the HRMS company India trusts to automate payroll, attendance, and statutory compliance for businesses of every size. From startups to enterprises, we help HR teams work smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ marginBottom: '28px' }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Book a Free Demo
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/contact" className="cta-base cta-secondary cta-lg">
              Talk to Our Team
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 flex-wrap" style={{ marginTop: '12px' }}>
            {['Trusted by 500+ businesses', '99.9% uptime guaranteed', '28 states covered'].map((t) => (
              <span key={t} className="flex items-center gap-1.5" style={{ fontSize: '13px', color: '#64748B', fontWeight: 500 }}>
                <CheckCircle2 style={{ width: 14, height: 14, color: '#3CB371' }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 2. OUR STORY ═══════════ */}
      <section style={{ padding: '88px 0', background: '#fff' }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span style={{
                display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
                background: '#F0FDF4', color: '#3CB371', fontSize: '12px', fontWeight: 600, marginBottom: '16px',
              }}>
                Our Story
              </span>
              <h2 style={{
                fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
                color: '#141413', lineHeight: 1.15, marginBottom: '20px',
              }}>
                We Built What Indian HR Teams Actually Needed
              </h2>
              <div style={{ fontSize: '15px', color: '#6A7282', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '16px' }}>
                  In 2018, our founder Rajesh Mehta was leading HR operations for a 2,000-employee manufacturing company across six states. Every payroll cycle meant late nights, manual PF calculations, and the constant fear of missing a Professional Tax deadline in one of the states they operated in.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  The existing HRMS platforms were either built for Western markets and ignored Indian compliance entirely, or they were legacy on-premise systems that required a dedicated IT team to maintain. Neither option worked.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  So we built our own. A cloud-native HRMS and payroll software company designed specifically for Indian businesses. One that handles EPF, ESI, Professional Tax across all 19 states, TDS, LWF, Gratuity, and every labour law update automatically.
                </p>
                <p>
                  Today, we serve 500+ businesses across 28 states, processing payroll for over 2 lakh employees every month. And we are just getting started.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { year: '2018', title: 'The Problem We Saw', desc: 'Indian businesses struggled with compliance-heavy payroll on outdated systems. No modern, cloud-native HRMS existed for India.' },
                { year: '2019', title: 'First Version Launched', desc: 'Built core payroll engine with PF, ESI, and PT automation for 6 states. Onboarded first 25 customers.' },
                { year: '2021', title: 'Pan-India Coverage', desc: 'Expanded to all 28 states and 8 union territories. Crossed 100 businesses and 50,000 employees on the platform.' },
                { year: '2023', title: 'Enterprise Ready', desc: 'Launched advanced modules: performance management, expense tracking, and employee self-service portal.' },
                { year: '2025', title: '500+ Businesses Trust Us', desc: 'Processing payroll for 2 lakh+ employees monthly. 99.9% uptime. Zero compliance penalties for our customers.' },
              ].map((item, i) => (
                <div key={item.year} className="flex gap-4" style={{
                  padding: '20px', borderRadius: '14px',
                  border: '1px solid #E2E8F0', background: i % 2 === 0 ? '#fff' : '#F7F6F4',
                }}>
                  <div style={{
                    minWidth: '56px', height: '56px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0E3B32, #3CB371)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px', fontWeight: 800, flexShrink: 0,
                  }}>
                    {item.year}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#141413', marginBottom: '4px' }}>{item.title}</h3>
                    <p style={{ fontSize: '13px', color: '#6A7282', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ 3. MISSION & VALUES ═══════════ */}
      <section style={{ padding: '88px 0', background: '#F7F6F4' }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
              background: '#DCFCE7', color: '#16A34A', fontSize: '12px', fontWeight: 600, marginBottom: '14px',
            }}>
              Mission & Values
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
              color: '#141413', lineHeight: 1.15, marginBottom: '12px',
            }}>
              What Drives Everything We Build
            </h2>
            <p style={{ fontSize: '16px', color: '#6A7282', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
              Our mission as an Indian HR tech company is simple: eliminate compliance anxiety for every HR team in India and let them focus on what matters most, their people.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} style={{
                  padding: '28px', borderRadius: '16px',
                  border: '1px solid #E2E8F0', background: '#fff',
                  boxShadow: '0 10px 30px rgba(15,23,42,0.04)',
                  transition: 'all 0.25s',
                }} className="hover:shadow-lg hover:-translate-y-1">
                  <div style={{
                    width: 52, height: 52, borderRadius: '14px',
                    background: v.tint, color: v.tone,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px',
                  }}>
                    <Icon style={{ width: 24, height: 24 }} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#141413', marginBottom: '8px' }}>{v.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6A7282', lineHeight: 1.75 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 4. BY THE NUMBERS ═══════════ */}
      <section style={{ padding: '88px 0', background: '#fff' }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
              background: '#F0FDF4', color: '#3CB371', fontSize: '12px', fontWeight: 600, marginBottom: '14px',
            }}>
              By The Numbers
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
              color: '#141413', lineHeight: 1.15, marginBottom: '12px',
            }}>
              The Impact We Have Delivered
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { metric: '500+', label: 'Businesses Served', sub: 'Across every industry vertical', icon: Building2, tint: '#F0FDF4', tone: '#3CB371' },
              { metric: '2,00,000+', label: 'Employees Covered', sub: 'Payroll processed monthly', icon: Users, tint: '#E0F2FE', tone: '#047857' },
              { metric: '28', label: 'States Covered', sub: 'Full statutory compliance', icon: Globe2, tint: '#FEF3C7', tone: '#D97706' },
              { metric: '99.9%', label: 'Platform Uptime', sub: 'Enterprise-grade reliability', icon: TrendingUp, tint: '#DCFCE7', tone: '#16A34A' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} style={{
                  padding: '28px', borderRadius: '16px',
                  border: '1px solid #E2E8F0', background: '#fff',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(15,23,42,0.04)',
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '14px',
                    background: item.tint, color: item.tone,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
                  }}>
                    <Icon style={{ width: 24, height: 24 }} />
                  </div>
                  <p style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#141413', lineHeight: 1, marginBottom: '6px' }}>{item.metric}</p>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#141413', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ fontSize: '13px', color: '#6A7282', lineHeight: 1.6 }}>{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. LEADERSHIP TEAM ═══════════ */}
      <section style={{ padding: '88px 0', background: '#F7F6F4' }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
              background: '#DCFCE7', color: '#16A34A', fontSize: '12px', fontWeight: 600, marginBottom: '14px',
            }}>
              Leadership Team
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
              color: '#141413', lineHeight: 1.15, marginBottom: '12px',
            }}>
              The People Behind the Platform
            </h2>
            <p style={{ fontSize: '16px', color: '#6A7282', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
              Our leadership team brings decades of experience in HR technology, enterprise software, and Indian compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div key={member.name} style={{
                padding: '28px', borderRadius: '16px',
                border: '1px solid #E2E8F0', background: '#fff',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(15,23,42,0.04)',
                transition: 'all 0.25s',
              }} className="hover:shadow-lg hover:-translate-y-1">
                <div style={{
                  width: 88, height: 88, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0E3B32, #3CB371)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '18px',
                  boxShadow: '0 8px 24px rgba(14,59,50,0.15)',
                }}>
                  <span style={{ fontSize: '28px', fontWeight: 800, color: '#fff' }}>{member.initials}</span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#141413', marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#3CB371', marginBottom: '10px' }}>{member.role}</p>
                <p style={{ fontSize: '13px', color: '#6A7282', lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6. WHAT MAKES US DIFFERENT ═══════════ */}
      <section style={{ padding: '88px 0', background: '#fff' }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
              background: '#F0FDF4', color: '#3CB371', fontSize: '12px', fontWeight: 600, marginBottom: '14px',
            }}>
              Why Choose Us
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
              color: '#141413', lineHeight: 1.15, marginBottom: '12px',
            }}>
              What Makes Us Different From Other HRMS Providers
            </h2>
            <p style={{ fontSize: '16px', color: '#6A7282', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
              While other payroll software companies bolt on Indian compliance as an afterthought, we built it into our DNA from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Compliance Updated Same Day',
                desc: 'When the government changes a PF rate or PT slab, our platform updates the same day. No waiting for quarterly patches or manual configuration.',
                icon: ShieldCheck,
                tint: '#F0FDF4',
                tone: '#3CB371',
              },
              {
                title: 'Built for Indian Complexity',
                desc: 'Multi-state payroll, variable pay structures, gratuity calculations, bonus act compliance, and all four Labour Codes 2020 handled natively.',
                icon: Building2,
                tint: '#E0F2FE',
                tone: '#047857',
              },
              {
                title: 'Go Live in Days, Not Months',
                desc: 'Guided data migration from Excel, GreytHR, Keka, or Zoho People. Most customers are fully operational within 2 to 5 business days.',
                icon: Zap,
                tint: '#FEF3C7',
                tone: '#D97706',
              },
              {
                title: 'No Hidden Costs, Ever',
                desc: 'Transparent pricing per employee per month. No setup fees, no module lock-ins, no surprise charges for compliance updates or support.',
                icon: Award,
                tint: '#EDE9FE',
                tone: '#7C3AED',
              },
              {
                title: 'Dedicated Indian Support Team',
                desc: '24/7 support from a team that understands Indian HR challenges. No offshore call centers. Real HRMS experts who know your compliance needs.',
                icon: Heart,
                tint: '#FCE7F3',
                tone: '#BE185D',
              },
              {
                title: 'Enterprise Security Standards',
                desc: 'ISO-aligned controls, DPDP Act compliance, India data residency options, and 99.9% uptime SLA backed by financial guarantees.',
                icon: Target,
                tint: '#DCFCE7',
                tone: '#16A34A',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4" style={{
                  padding: '24px', borderRadius: '16px',
                  border: '1px solid #E2E8F0', background: '#fff',
                  boxShadow: '0 10px 30px rgba(15,23,42,0.04)',
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '14px', flexShrink: 0,
                    background: item.tint, color: item.tone,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon style={{ width: 22, height: 22 }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#141413', marginBottom: '6px' }}>{item.title}</h3>
                    <p style={{ fontSize: '14px', color: '#6A7282', lineHeight: 1.75 }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 7. TESTIMONIALS ═══════════ */}
      <section style={{ padding: '88px 0', background: '#F7F6F4' }}>
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
              background: '#DCFCE7', color: '#16A34A', fontSize: '12px', fontWeight: 600, marginBottom: '14px',
            }}>
              Client Testimonials
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
              color: '#141413', lineHeight: 1.15, marginBottom: '12px',
            }}>
              Trusted by HR Leaders Across India
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} style={{
                padding: '28px', borderRadius: '16px',
                border: '1px solid #E2E8F0', background: '#fff',
                boxShadow: '0 10px 30px rgba(15,23,42,0.04)',
              }}>
                <div className="flex gap-0.5" style={{ marginBottom: '16px' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} style={{ width: 14, height: 14, fill: '#FBBF24', color: '#FBBF24' }} />
                  ))}
                </div>
                <div style={{ marginBottom: '16px', position: 'relative' }}>
                  <Quote style={{ width: 20, height: 20, color: '#DCFCE7', position: 'absolute', top: '-4px', left: '-4px' }} />
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.8, paddingLeft: '20px' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div style={{
                    width: 40, height: 40, borderRadius: '10px',
                    background: 'linear-gradient(135deg, #0E3B32, #3CB371)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: 800, color: '#fff', flexShrink: 0,
                  }}>
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#141413' }}>{t.name}</p>
                    <p style={{ fontSize: '12px', color: '#94A3B8' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 8. CTA SECTION ═══════════ */}
    </main>
  );
}
