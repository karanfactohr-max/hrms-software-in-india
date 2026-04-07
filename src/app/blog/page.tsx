import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowRight, Search, FileText, Calendar, Clock, Tag,
  Download, Mail, BookOpen, ShieldCheck, TrendingUp, Users,
  ChevronDown, Star, Building2, CheckCircle, IndianRupee,
  FileCheck, ClipboardList, BarChart3, Zap, ArrowUpRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Resources | HRMS Software in India - Payroll, Compliance & HR Guides',
  description: 'Expert HRMS blog articles, payroll guides, compliance resources, and downloadable templates for Indian HR professionals. Stay updated on PF, ESI, TDS, and labour law changes.',
  keywords: 'HRMS blog, payroll guide India, compliance resources, HR articles, PF compliance, ESI filing, TDS guide, labour law India, HR best practices',
  openGraph: {
    title: 'Blog & Resources | HRMS Software in India',
    description: 'Expert HRMS blog articles, payroll guides, compliance resources, and downloadable templates for Indian HR professionals.',
    type: 'website',
  },
};

const categories = [
  'All',
  'Payroll',
  'Compliance',
  'HR Best Practices',
  'Attendance',
  'Leave',
  'Performance',
];

const featuredArticles = [
  {
    slug: '/blog/complete-guide-pf-esi-compliance-india-2026',
    category: 'Compliance',
    categoryColor: '#047857',
    categoryBg: '#DCFCE7',
    title: 'Complete Guide to PF & ESI Compliance in India for 2026',
    excerpt: 'Everything HR teams need to know about EPF and ESI contribution rates, wage ceiling changes, ECR filing deadlines, and common compliance mistakes that trigger penalties.',
    date: 'Mar 28, 2026',
    readTime: '12 min read',
    icon: ShieldCheck,
  },
  {
    slug: '/blog/payroll-automation-guide-indian-companies',
    category: 'Payroll',
    categoryColor: '#D97706',
    categoryBg: '#FEF3C7',
    title: 'How Indian Companies Can Automate Payroll Processing End-to-End',
    excerpt: 'Step-by-step guide to moving from Excel-based payroll to a fully automated system covering salary structures, TDS calculation, reimbursements, and Form 16 generation.',
    date: 'Mar 15, 2026',
    readTime: '10 min read',
    icon: IndianRupee,
  },
  {
    slug: '/blog/hr-best-practices-startups-india',
    category: 'HR Best Practices',
    categoryColor: '#7C3AED',
    categoryBg: '#EDE9FE',
    title: 'HR Best Practices Every Indian Startup Must Follow in 2026',
    excerpt: 'From building your first HR policy manual to implementing performance reviews and employee engagement programs that scale from 10 to 500 employees.',
    date: 'Mar 02, 2026',
    readTime: '8 min read',
    icon: Users,
  },
];

const articles = [
  {
    slug: '/blog/tds-calculation-section-192-guide',
    category: 'Payroll',
    categoryColor: '#D97706',
    categoryBg: '#FEF3C7',
    title: 'TDS Calculation Under Section 192: A Practical Guide for HR Teams',
    excerpt: 'Learn how to calculate TDS on salary, factor in 80C and 80D deductions, handle investment declarations, and generate Form 16 correctly every financial year.',
    date: 'Mar 25, 2026',
    readTime: '9 min read',
    icon: FileCheck,
  },
  {
    slug: '/blog/attendance-management-best-practices',
    category: 'Attendance',
    categoryColor: '#0284C7',
    categoryBg: '#E0F2FE',
    title: 'Attendance Management Best Practices for Multi-Location Teams',
    excerpt: 'How to implement GPS-based attendance, biometric integration, shift management, and late-arrival policies across offices in multiple Indian cities.',
    date: 'Mar 20, 2026',
    readTime: '7 min read',
    icon: Clock,
  },
  {
    slug: '/blog/leave-policy-design-india',
    category: 'Leave',
    categoryColor: '#DC2626',
    categoryBg: '#FEE2E2',
    title: 'How to Design a Leave Policy That Complies with Indian Labour Laws',
    excerpt: 'Understand earned leave, sick leave, casual leave, maternity leave under the Maternity Benefit Act, and state-specific leave entitlements for your HR policy.',
    date: 'Mar 12, 2026',
    readTime: '8 min read',
    icon: Calendar,
  },
  {
    slug: '/blog/professional-tax-all-states-india',
    category: 'Compliance',
    categoryColor: '#047857',
    categoryBg: '#DCFCE7',
    title: 'Professional Tax Slabs Across All 19 States in India for 2026',
    excerpt: 'A comprehensive reference for PT rates in Maharashtra, Karnataka, Tamil Nadu, Gujarat, and every state where professional tax applies to employee salaries.',
    date: 'Mar 08, 2026',
    readTime: '6 min read',
    icon: Building2,
  },
  {
    slug: '/blog/performance-review-framework',
    category: 'Performance',
    categoryColor: '#7C3AED',
    categoryBg: '#EDE9FE',
    title: 'Building a Performance Review Framework That Actually Works',
    excerpt: 'Move beyond annual appraisals. Implement quarterly check-ins, 360-degree feedback, OKR tracking, and continuous performance management for better outcomes.',
    date: 'Feb 28, 2026',
    readTime: '10 min read',
    icon: TrendingUp,
  },
  {
    slug: '/blog/payroll-outsourcing-vs-in-house',
    category: 'Payroll',
    categoryColor: '#D97706',
    categoryBg: '#FEF3C7',
    title: 'Payroll Outsourcing vs In-House: What Works Best for Indian SMEs',
    excerpt: 'A cost-benefit analysis comparing outsourced payroll providers versus in-house HRMS platforms for companies with 50 to 500 employees across India.',
    date: 'Feb 22, 2026',
    readTime: '7 min read',
    icon: BarChart3,
  },
  {
    slug: '/blog/new-labour-codes-impact-hrms',
    category: 'Compliance',
    categoryColor: '#047857',
    categoryBg: '#DCFCE7',
    title: 'How the New Labour Codes 2020 Will Change Payroll and HR in India',
    excerpt: 'Understand the four new labour codes, their impact on minimum wage, social security, occupational safety, and industrial relations for Indian employers.',
    date: 'Feb 15, 2026',
    readTime: '11 min read',
    icon: ShieldCheck,
  },
  {
    slug: '/blog/employee-retention-strategies-india',
    category: 'HR Best Practices',
    categoryColor: '#7C3AED',
    categoryBg: '#EDE9FE',
    title: 'Employee Retention Strategies That Work in the Indian Job Market',
    excerpt: 'With attrition rates hitting 25% in IT and 30% in BPO, learn proven retention strategies including flexible work, career pathing, and recognition programs.',
    date: 'Feb 08, 2026',
    readTime: '8 min read',
    icon: Users,
  },
  {
    slug: '/blog/shift-scheduling-manufacturing',
    category: 'Attendance',
    categoryColor: '#0284C7',
    categoryBg: '#E0F2FE',
    title: 'Shift Scheduling for Manufacturing: Compliance and Efficiency',
    excerpt: 'Manage rotating shifts, weekly offs, overtime under the Factories Act, and muster roll compliance for manufacturing units across India.',
    date: 'Feb 01, 2026',
    readTime: '9 min read',
    icon: Zap,
  },
  {
    slug: '/blog/maternity-leave-compliance-india',
    category: 'Leave',
    categoryColor: '#DC2626',
    categoryBg: '#FEE2E2',
    title: 'Maternity Leave in India: Employer Obligations Under the 2017 Amendment',
    excerpt: '26 weeks of paid maternity leave, creche facility requirements, work-from-home options for new mothers, and how to stay compliant while supporting employees.',
    date: 'Jan 25, 2026',
    readTime: '7 min read',
    icon: Calendar,
  },
  {
    slug: '/blog/okr-vs-kpi-performance-management',
    category: 'Performance',
    categoryColor: '#7C3AED',
    categoryBg: '#EDE9FE',
    title: 'OKR vs KPI: Choosing the Right Performance Framework for Your Team',
    excerpt: 'Understand the difference between OKRs and KPIs, when to use each, and how Indian companies are adopting modern performance management practices.',
    date: 'Jan 18, 2026',
    readTime: '6 min read',
    icon: TrendingUp,
  },
  {
    slug: '/blog/gratuity-calculation-payment-rules',
    category: 'Payroll',
    categoryColor: '#D97706',
    categoryBg: '#FEF3C7',
    title: 'Gratuity Calculation and Payment Rules Under the 1972 Act',
    excerpt: 'Who is eligible for gratuity, how to calculate the amount, tax exemptions under Section 10, and the latest wage ceiling revision for Indian employees.',
    date: 'Jan 10, 2026',
    readTime: '8 min read',
    icon: IndianRupee,
  },
];

const resources = [
  {
    title: 'Indian Payroll Compliance Calendar 2026',
    description: 'Month-by-month deadlines for PF, ESI, TDS, PT, and all statutory filings. Print-ready PDF for your HR desk.',
    type: 'PDF Guide',
    size: '2.4 MB',
    icon: Calendar,
  },
  {
    title: 'HR Policy Template Pack for Indian Companies',
    description: 'Ready-to-use templates for leave policy, attendance policy, code of conduct, POSH policy, and remote work guidelines.',
    type: 'DOCX Templates',
    size: '5.1 MB',
    icon: FileText,
  },
  {
    title: 'Statutory Compliance Checklist for Startups',
    description: 'A step-by-step checklist covering every registration, filing, and compliance requirement from company incorporation to monthly payroll.',
    type: 'Checklist',
    size: '890 KB',
    icon: ClipboardList,
  },
  {
    title: 'Complete Guide to Indian Labour Laws 2026',
    description: 'Comprehensive 60-page e-book covering all central and state labour laws, recent amendments, and practical compliance guidance.',
    type: 'E-Book',
    size: '8.3 MB',
    icon: BookOpen,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="hero-gradient" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
        <div className="relative max-w-[1280px] mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-2" style={{
            padding: '6px 16px', borderRadius: '9999px',
            background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)',
            border: '1px solid #E2E8F0', fontSize: '13px', fontWeight: 600, color: '#1E293B',
            marginBottom: '24px',
          }}>
            <BookOpen style={{ width: 14, height: 14, color: '#3CB371' }} />
            HR & Payroll Knowledge Hub
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800,
            color: '#141413', lineHeight: 1.1, letterSpacing: '-2px',
            marginBottom: '20px', maxWidth: '780px', marginLeft: 'auto', marginRight: 'auto',
          }}>
            Resources & Insights for Indian HR Teams
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 18px)', color: '#6A7282',
            lineHeight: 1.7, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto',
            marginBottom: '36px',
          }}>
            Expert articles, compliance guides, downloadable templates, and practical insights to help you manage payroll, stay compliant, and build a better workplace across India.
          </p>

          {/* Search Bar */}
          <div className="max-w-[560px] mx-auto" style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '14px 20px', borderRadius: '16px',
              background: '#fff', border: '1px solid #E2E8F0',
              boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
            }}>
              <Search style={{ width: 20, height: 20, color: '#94A3B8', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search articles, guides, templates..."
                style={{
                  flex: 1, border: 'none', outline: 'none', background: 'transparent',
                  fontSize: '15px', color: '#141413', fontFamily: '"Public Sans", system-ui, sans-serif',
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6" style={{ fontSize: '13px', color: '#94A3B8' }}>
            <span className="flex items-center gap-1.5">
              <FileText style={{ width: 14, height: 14 }} /> 50+ Articles
            </span>
            <span className="flex items-center gap-1.5">
              <Download style={{ width: 14, height: 14 }} /> 12 Free Resources
            </span>
            <span className="flex items-center gap-1.5">
              <Star style={{ width: 14, height: 14 }} /> Updated Weekly
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED ARTICLES ═══════════ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
              background: '#F0FDF4', color: '#3CB371', fontSize: '12px', fontWeight: 600,
              marginBottom: '14px',
            }}>
              Featured
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
              color: '#141413', lineHeight: 1.2, marginBottom: '10px',
            }}>
              Must-Read Articles
            </h2>
            <p style={{ fontSize: '16px', color: '#6A7282', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Our most popular and impactful content for HR and payroll professionals in India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="group"
                  style={{
                    borderRadius: '20px', border: '1px solid #E2E8F0',
                    background: '#fff', overflow: 'hidden',
                    transition: 'all 0.25s',
                    boxShadow: '0 8px 24px rgba(15,23,42,0.04)',
                  }}
                >
                  {/* Image Placeholder */}
                  <div style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #F0FDF4, #DCFCE7, #BBF7D0)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      width: '64px', height: '64px', borderRadius: '16px',
                      background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#3CB371',
                      border: '1px solid rgba(255,255,255,0.6)',
                    }}>
                      <Icon style={{ width: 28, height: 28 }} />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span style={{
                        padding: '4px 12px', borderRadius: '9999px',
                        background: article.categoryBg, color: article.categoryColor,
                        fontSize: '11px', fontWeight: 700,
                      }}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: '24px' }}>
                    <div className="flex items-center gap-3" style={{ marginBottom: '12px', fontSize: '12px', color: '#94A3B8' }}>
                      <span className="flex items-center gap-1">
                        <Calendar style={{ width: 12, height: 12 }} /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock style={{ width: 12, height: 12 }} /> {article.readTime}
                      </span>
                    </div>
                    <h3 style={{
                      fontSize: '18px', fontWeight: 800, color: '#141413',
                      lineHeight: 1.35, marginBottom: '10px',
                      transition: 'color 0.2s',
                    }}
                      className="group-hover:text-[#3CB371]"
                    >
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6A7282', lineHeight: 1.7, marginBottom: '16px' }}>
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5" style={{
                      fontSize: '13px', fontWeight: 700, color: '#3CB371',
                    }}>
                      Read Article
                      <ArrowRight style={{ width: 14, height: 14, transition: 'transform 0.2s' }} className="group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CATEGORY FILTER + ARTICLE GRID ═══════════ */}
      <section style={{ padding: '80px 0', background: '#F7F6F4' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
              color: '#141413', lineHeight: 1.2, marginBottom: '10px',
            }}>
              Browse All Articles
            </h2>
            <p style={{ fontSize: '16px', color: '#6A7282', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Filter by topic to find the exact guidance your HR team needs.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2" style={{ marginBottom: '48px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px', borderRadius: '9999px',
                  fontSize: '13px', fontWeight: 600,
                  border: activeCategory === cat ? '1.5px solid #0E3B32' : '1.5px solid #E2E8F0',
                  background: activeCategory === cat ? '#0E3B32' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#6A7282',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: '"Public Sans", system-ui, sans-serif',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredArticles.map((article) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="group"
                  style={{
                    borderRadius: '16px', border: '1px solid #E2E8F0',
                    background: '#fff', padding: '24px',
                    transition: 'all 0.25s',
                    boxShadow: '0 4px 16px rgba(15,23,42,0.03)',
                  }}
                >
                  <div className="flex items-center gap-2" style={{ marginBottom: '14px' }}>
                    <span style={{
                      padding: '4px 10px', borderRadius: '9999px',
                      background: article.categoryBg, color: article.categoryColor,
                      fontSize: '11px', fontWeight: 700,
                    }}>
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1" style={{ fontSize: '12px', color: '#94A3B8', marginLeft: 'auto' }}>
                      <Clock style={{ width: 12, height: 12 }} /> {article.readTime}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '16px', fontWeight: 800, color: '#141413',
                    lineHeight: 1.35, marginBottom: '10px',
                    transition: 'color 0.2s',
                  }}
                    className="group-hover:text-[#3CB371]"
                  >
                    {article.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: '#6A7282', lineHeight: 1.7, marginBottom: '16px' }}>
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1" style={{ fontSize: '12px', color: '#94A3B8' }}>
                      <Calendar style={{ width: 12, height: 12 }} /> {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1" style={{
                      fontSize: '12px', fontWeight: 700, color: '#3CB371',
                    }}>
                      Read More
                      <ArrowUpRight style={{ width: 12, height: 12, transition: 'transform 0.2s' }} className="group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center" style={{ padding: '60px 0' }}>
              <Tag style={{ width: 40, height: 40, color: '#94A3B8', margin: '0 auto 16px' }} />
              <p style={{ fontSize: '16px', color: '#94A3B8', fontWeight: 600 }}>
                No articles found in this category yet.
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8' }}>
                Check back soon or browse all articles.
              </p>
            </div>
          )}

          <div className="flex justify-center" style={{ marginTop: '48px' }}>
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              See HRMS in Action
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ NEWSLETTER ═══════════ */}
      <section style={{ padding: '80px 0', background: '#0E3B32', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-120px', right: '-120px', width: 400, height: 400,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,209,132,0.15), rgba(96,209,132,0))',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', left: '-100px', width: 350, height: 350,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(207,242,94,0.1), rgba(207,242,94,0))',
        }} />
        <div className="max-w-[700px] mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '16px',
            background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px', color: '#86EFAC',
          }}>
            <Mail style={{ width: 24, height: 24 }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800,
            color: '#fff', lineHeight: 1.2, marginBottom: '12px',
          }}>
            Stay Ahead of Compliance Changes
          </h2>
          <p style={{
            fontSize: '16px', color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.7, marginBottom: '32px', maxWidth: '520px', margin: '0 auto 32px',
          }}>
            Get weekly insights on payroll compliance, labour law updates, and HR best practices delivered straight to your inbox. Join 5,000+ HR professionals across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              style={{
                flex: 1, padding: '14px 20px', borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)',
                color: '#fff', fontSize: '15px', outline: 'none',
                fontFamily: '"Public Sans", system-ui, sans-serif',
              }}
            />
            <button
              className="cta-base cta-secondary cta-lg"
              style={{ whiteSpace: 'nowrap' }}
            >
              Subscribe
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6" style={{ marginTop: '20px' }}>
            {['No spam, ever', 'Unsubscribe anytime', 'Weekly digest'].map((item) => (
              <span key={item} className="flex items-center gap-1.5" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                <CheckCircle style={{ width: 12, height: 12, color: '#86EFAC' }} /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ RESOURCE DOWNLOADS ═══════════ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', padding: '5px 14px', borderRadius: '8px',
              background: '#F0FDF4', color: '#3CB371', fontSize: '12px', fontWeight: 600,
              marginBottom: '14px',
            }}>
              Free Downloads
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
              color: '#141413', lineHeight: 1.2, marginBottom: '10px',
            }}>
              Resource Library
            </h2>
            <p style={{ fontSize: '16px', color: '#6A7282', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Practical guides, templates, and checklists you can use immediately in your HR operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.title}
                  style={{
                    borderRadius: '16px', border: '1px solid #E2E8F0',
                    background: '#fff', padding: '28px',
                    display: 'flex', gap: '20px', alignItems: 'flex-start',
                    transition: 'all 0.25s',
                    boxShadow: '0 4px 16px rgba(15,23,42,0.03)',
                  }}
                  className="hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#3CB371', flexShrink: 0,
                    border: '1px solid #BBF7D0',
                  }}>
                    <Icon style={{ width: 22, height: 22 }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
                      <span style={{
                        padding: '3px 10px', borderRadius: '9999px',
                        background: '#F0FDF4', color: '#3CB371',
                        fontSize: '11px', fontWeight: 700,
                      }}>
                        {resource.type}
                      </span>
                      <span style={{ fontSize: '11px', color: '#94A3B8' }}>{resource.size}</span>
                    </div>
                    <h3 style={{
                      fontSize: '17px', fontWeight: 800, color: '#141413',
                      lineHeight: 1.35, marginBottom: '8px',
                    }}>
                      {resource.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#6A7282', lineHeight: 1.7, marginBottom: '14px' }}>
                      {resource.description}
                    </p>
                    <button
                      className="inline-flex items-center gap-2"
                      style={{
                        padding: '8px 18px', borderRadius: '9999px',
                        background: '#0E3B32', color: '#fff',
                        fontSize: '13px', fontWeight: 700, border: 'none',
                        cursor: 'pointer',
                        fontFamily: '"Public Sans", system-ui, sans-serif',
                        transition: 'background 0.2s',
                      }}
                    >
                      <Download style={{ width: 14, height: 14 }} />
                      Download Free
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <section style={{ padding: '80px 0', background: '#F7F6F4' }}>
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800,
            color: '#141413', lineHeight: 1.2, marginBottom: '16px',
          }}>
            Ready to Transform Your HR Operations?
          </h2>
          <p style={{
            fontSize: '16px', color: '#6A7282', lineHeight: 1.7,
            maxWidth: '560px', margin: '0 auto 32px',
          }}>
            Join 10,000+ Indian organizations using our HRMS platform for payroll, compliance, attendance, and performance management.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="cta-base cta-primary cta-lg">
              Get Started for Free
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
            <Link href="/pricing" className="cta-base cta-secondary cta-lg">
              View Pricing
              <span className="cta-arrow"><ArrowRight style={{ width: 14, height: 14 }} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
