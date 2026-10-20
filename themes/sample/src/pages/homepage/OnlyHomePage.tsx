import React from 'react';
import {
  Truck,
  ShieldCheck,
  TrendingUp,
  Headphones,
  ArrowRight,
  Sparkles,
  PackageCheck,
  Building2,
  Clock,
  Award,
  CheckCircle2,
  Boxes,
  Percent,
  Search
} from 'lucide-react';

export default function OnlyHomePage() {
  const valueProps = [
    {
      icon: <Truck className="w-6 h-6 text-indigo-500" />,
      title: 'Same-Day Dispatch',
      desc: 'Orders placed before 2 PM EST ship out the very same business day.'
    },
    {
      icon: <Percent className="w-6 h-6 text-emerald-500" />,
      title: 'Tiered Bulk Pricing',
      desc: 'Transparent volume price breaks automatically applied at checkout.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: 'Guaranteed Quality',
      desc: 'Every item is lab-tested and backed by our 30-day satisfaction warranty.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-violet-500" />,
      title: '24/7 Procurement Desk',
      desc: 'Direct line to dedicated supply specialists ready to assist your team.'
    }
  ];

  const categories = [
    {
      title: 'Commercial Drinkware & Ceramics',
      count: '32+ Items',
      desc: 'Heavy-duty porcelain mugs, insulated tumblers & cups for busy spaces.',
      href: '/accessories',
      tag: 'Best Seller',
      bgGradient: 'from-amber-500/10 via-orange-500/5 to-transparent'
    },
    {
      title: 'Office & Desk Organization',
      count: '48+ Items',
      desc: 'Precision holders, executive desk sets & ergonomic stationery.',
      href: '/accessories',
      tag: 'Trending',
      bgGradient: 'from-blue-500/10 via-indigo-500/5 to-transparent'
    },
    {
      title: 'Packaging & Warehouse Logistics',
      count: '60+ Items',
      desc: 'Industrial carton sealers, protective wrap & heavy storage supplies.',
      href: '/accessories',
      tag: 'Essential',
      bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent'
    },
    {
      title: 'Hospitality & Tabletop Essentials',
      count: '24+ Items',
      desc: 'Commercial bowls, serving vessels & dining accessories.',
      href: '/accessories',
      tag: 'Popular',
      bgGradient: 'from-rose-500/10 via-pink-500/5 to-transparent'
    }
  ];

  const highlights = [
    'Net 30 & Net 60 Terms for Verified Commercial Accounts',
    'Custom Pallet & LTL Freight Shipping Coordination',
    'Tax Exemption Certificate Auto-Validation',
    'Instant Digital Invoicing & EDI Integration'
  ];

  return (
    <div className="w-full space-y-16 py-4">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl border border-slate-800">
        {/* Ambient Decorative Lighting */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 -ml-20 -mb-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 px-6 sm:px-12 py-16 lg:py-20 max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>North America's Premier Supply & Wholesale Partner</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]">
            Procure Smarter. Scale Faster with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">
              SupplyKing
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
            High-grade supplies, enterprise-ready volume discounts, and verified next-day
            fulfillment. Everything your business needs to stay fully stocked.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/accessories"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 shadow-lg shadow-indigo-600/30 transition-all duration-200 text-sm sm:text-base"
            >
              <Boxes className="w-5 h-5" />
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700 active:scale-95 transition-all duration-200 text-sm sm:text-base backdrop-blur-sm"
            >
              <Building2 className="w-5 h-5 text-slate-400" />
              <span>Wholesale Inquiry</span>
            </a>
          </div>

          {/* Metrics Strip */}
          <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl text-left">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">10,000+</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">In-Stock SKUs</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">99.8%</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">On-Time Fulfillment</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-400">&lt; 24 Hrs</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Order Dispatch</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400">4.9 / 5</span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1">Verified Client Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION PILLARS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {valueProps.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
              {item.icon}
            </div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {item.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* 3. CURATED CATEGORIES GRID */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              <Award className="w-4 h-4" />
              <span>Browse by Category</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1 tracking-tight">
              Essential Procurement Catalog
            </h2>
          </div>
          <a
            href="/accessories"
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.href}
              className={`group relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b ${cat.bgGradient} bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {cat.tag}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {cat.count}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all">
                <span>Explore Selection</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. ENTERPRISE WHOLESALE PROMOTION CARD */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 border border-indigo-950 shadow-xl">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B Commercial Accounts</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Purchasing for an Organization or Facility?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Unlock corporate pricing, net credit payment terms, dedicated account representation,
              and recurring schedule reorders tailored specifically to your supply needs.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-start lg:items-end">
            <a
              href="/contact"
              className="w-full sm:w-auto lg:w-full text-center px-8 py-4 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-lg active:scale-95 transition-all duration-200 text-sm sm:text-base"
            >
              Apply for Trade Credit
            </a>
            <a
              href="/accessories"
              className="w-full sm:w-auto lg:w-full text-center px-8 py-3.5 rounded-xl font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 active:scale-95 transition-all duration-200 text-sm"
            >
              Browse Stock Catalog
            </a>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE SUPPLYKING STRIP */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-8 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Trusted by Procurement Managers Across Industries
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            From regional facilities to corporate headquarters, SupplyKing delivers reliable supply lines without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto pt-2">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500 mb-2">
              {'★★★★★'}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic mb-3">
              "SupplyKing cut our procurement turnaround in half. Bulk discounts and reliable dispatch keep our operations fully stocked."
            </p>
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              Marcus V. — Operations Lead
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500 mb-2">
              {'★★★★★'}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic mb-3">
              "Top tier product quality and excellent customer service. Having net payment terms makes budgeting so much simpler."
            </p>
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              Elena R. — Facility Procurement Director
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500 mb-2">
              {'★★★★★'}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic mb-3">
              "Zero hassle with order accuracy or shipping delays. SupplyKing has become our primary vendor for all facility supplies."
            </p>
            <div className="text-xs font-semibold text-slate-900 dark:text-white">
              David K. — Logistics Manager
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 5
};
