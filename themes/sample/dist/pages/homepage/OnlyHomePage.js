import React from 'react';
import { Truck, ShieldCheck, Headphones, ArrowRight, Sparkles, Building2, Award, CheckCircle2, Boxes, Percent } from 'lucide-react';
export default function OnlyHomePage() {
    const valueProps = [
        {
            icon: /*#__PURE__*/ React.createElement(Truck, {
                className: "w-6 h-6 text-indigo-500"
            }),
            title: 'Same-Day Dispatch',
            desc: 'Orders placed before 2 PM EST ship out the very same business day.'
        },
        {
            icon: /*#__PURE__*/ React.createElement(Percent, {
                className: "w-6 h-6 text-emerald-500"
            }),
            title: 'Tiered Bulk Pricing',
            desc: 'Transparent volume price breaks automatically applied at checkout.'
        },
        {
            icon: /*#__PURE__*/ React.createElement(ShieldCheck, {
                className: "w-6 h-6 text-blue-500"
            }),
            title: 'Guaranteed Quality',
            desc: 'Every item is lab-tested and backed by our 30-day satisfaction warranty.'
        },
        {
            icon: /*#__PURE__*/ React.createElement(Headphones, {
                className: "w-6 h-6 text-violet-500"
            }),
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
    return /*#__PURE__*/ React.createElement("div", {
        className: "w-full space-y-16 py-4"
    }, /*#__PURE__*/ React.createElement("section", {
        className: "relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl border border-slate-800"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "absolute bottom-0 left-10 -ml-20 -mb-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "relative z-10 px-6 sm:px-12 py-16 lg:py-20 max-w-6xl mx-auto flex flex-col items-center text-center"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
    }, /*#__PURE__*/ React.createElement(Sparkles, {
        className: "w-4 h-4 text-indigo-400"
    }), /*#__PURE__*/ React.createElement("span", null, "North America's Premier Supply & Wholesale Partner")), /*#__PURE__*/ React.createElement("h1", {
        className: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15]"
    }, "Procure Smarter. Scale Faster with", ' ', /*#__PURE__*/ React.createElement("span", {
        className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200"
    }, "SupplyKing")), /*#__PURE__*/ React.createElement("p", {
        className: "mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
    }, "High-grade supplies, enterprise-ready volume discounts, and verified next-day fulfillment. Everything your business needs to stay fully stocked."), /*#__PURE__*/ React.createElement("div", {
        className: "mt-8 flex flex-wrap items-center justify-center gap-4"
    }, /*#__PURE__*/ React.createElement("a", {
        href: "/accessories",
        className: "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 shadow-lg shadow-indigo-600/30 transition-all duration-200 text-sm sm:text-base"
    }, /*#__PURE__*/ React.createElement(Boxes, {
        className: "w-5 h-5"
    }), /*#__PURE__*/ React.createElement("span", null, "Explore All Products"), /*#__PURE__*/ React.createElement(ArrowRight, {
        className: "w-4 h-4"
    })), /*#__PURE__*/ React.createElement("a", {
        href: "/contact",
        className: "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700 active:scale-95 transition-all duration-200 text-sm sm:text-base backdrop-blur-sm"
    }, /*#__PURE__*/ React.createElement(Building2, {
        className: "w-5 h-5 text-slate-400"
    }), /*#__PURE__*/ React.createElement("span", null, "Wholesale Inquiry"))), /*#__PURE__*/ React.createElement("div", {
        className: "mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl text-left"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "text-2xl sm:text-3xl font-extrabold text-white"
    }, "10,000+"), /*#__PURE__*/ React.createElement("span", {
        className: "text-xs sm:text-sm text-slate-400 mt-1"
    }, "In-Stock SKUs")), /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "text-2xl sm:text-3xl font-extrabold text-emerald-400"
    }, "99.8%"), /*#__PURE__*/ React.createElement("span", {
        className: "text-xs sm:text-sm text-slate-400 mt-1"
    }, "On-Time Fulfillment")), /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "text-2xl sm:text-3xl font-extrabold text-sky-400"
    }, "< 24 Hrs"), /*#__PURE__*/ React.createElement("span", {
        className: "text-xs sm:text-sm text-slate-400 mt-1"
    }, "Order Dispatch")), /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "text-2xl sm:text-3xl font-extrabold text-amber-400"
    }, "4.9 / 5"), /*#__PURE__*/ React.createElement("span", {
        className: "text-xs sm:text-sm text-slate-400 mt-1"
    }, "Verified Client Rating"))))), /*#__PURE__*/ React.createElement("section", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    }, valueProps.map((item, idx)=>/*#__PURE__*/ React.createElement("div", {
            key: idx,
            className: "group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center transition-transform group-hover:scale-110 duration-200"
        }, item.icon), /*#__PURE__*/ React.createElement("h2", {
            className: "text-base font-bold text-slate-900 dark:text-white mt-1"
        }, item.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
        }, item.desc)))), /*#__PURE__*/ React.createElement("section", {
        className: "space-y-6"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4"
    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("div", {
        className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400"
    }, /*#__PURE__*/ React.createElement(Award, {
        className: "w-4 h-4"
    }), /*#__PURE__*/ React.createElement("span", null, "Browse by Category")), /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1 tracking-tight"
    }, "Essential Procurement Catalog")), /*#__PURE__*/ React.createElement("a", {
        href: "/accessories",
        className: "inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 transition-colors"
    }, /*#__PURE__*/ React.createElement("span", null, "View All Categories"), /*#__PURE__*/ React.createElement(ArrowRight, {
        className: "w-4 h-4"
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    }, categories.map((cat, idx)=>/*#__PURE__*/ React.createElement("a", {
            key: idx,
            href: cat.href,
            className: `group relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b ${cat.bgGradient} bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden`
        }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center justify-between mb-4"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
        }, cat.tag), /*#__PURE__*/ React.createElement("span", {
            className: "text-xs text-slate-600 dark:text-slate-400 font-medium"
        }, cat.count)), /*#__PURE__*/ React.createElement("h3", {
            className: "text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
        }, cat.title), /*#__PURE__*/ React.createElement("p", {
            className: "text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed"
        }, cat.desc)), /*#__PURE__*/ React.createElement("div", {
            className: "mt-6 flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all"
        }, /*#__PURE__*/ React.createElement("span", null, "Explore Selection"), /*#__PURE__*/ React.createElement(ArrowRight, {
            className: "w-4 h-4"
        })))))), /*#__PURE__*/ React.createElement("section", {
        className: "relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-950 text-white p-8 sm:p-12 border border-indigo-950 shadow-xl"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "lg:col-span-7 space-y-4"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider"
    }, /*#__PURE__*/ React.createElement(Building2, {
        className: "w-3.5 h-3.5"
    }), /*#__PURE__*/ React.createElement("span", null, "B2B Commercial Accounts")), /*#__PURE__*/ React.createElement("h2", {
        className: "text-2xl sm:text-4xl font-extrabold text-white leading-tight"
    }, "Purchasing for an Organization or Facility?"), /*#__PURE__*/ React.createElement("p", {
        className: "text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl"
    }, "Unlock corporate pricing, net credit payment terms, dedicated account representation, and recurring schedule reorders tailored specifically to your supply needs."), /*#__PURE__*/ React.createElement("ul", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
    }, highlights.map((h, i)=>/*#__PURE__*/ React.createElement("li", {
            key: i,
            className: "flex items-start gap-2 text-xs sm:text-sm text-slate-200"
        }, /*#__PURE__*/ React.createElement(CheckCircle2, {
            className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"
        }), /*#__PURE__*/ React.createElement("span", null, h))))), /*#__PURE__*/ React.createElement("div", {
        className: "lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-start lg:items-end"
    }, /*#__PURE__*/ React.createElement("a", {
        href: "/contact",
        className: "w-full sm:w-auto lg:w-full text-center px-8 py-4 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-lg active:scale-95 transition-all duration-200 text-sm sm:text-base"
    }, "Apply for Trade Credit"), /*#__PURE__*/ React.createElement("a", {
        href: "/accessories",
        className: "w-full sm:w-auto lg:w-full text-center px-8 py-3.5 rounded-xl font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 active:scale-95 transition-all duration-200 text-sm"
    }, "Browse Stock Catalog")))), /*#__PURE__*/ React.createElement("section", {
        className: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-8 text-center space-y-6"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "max-w-2xl mx-auto space-y-2"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
    }, "Trusted by Procurement Managers Across Industries"), /*#__PURE__*/ React.createElement("p", {
        className: "text-xs sm:text-sm text-slate-600 dark:text-slate-400"
    }, "From regional facilities to corporate headquarters, SupplyKing delivers reliable supply lines without friction.")), /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto pt-2"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center gap-1 text-amber-500 mb-2"
    }, '★★★★★'), /*#__PURE__*/ React.createElement("p", {
        className: "text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic mb-3"
    }, '"SupplyKing cut our procurement turnaround in half. Bulk discounts and reliable dispatch keep our operations fully stocked."'), /*#__PURE__*/ React.createElement("div", {
        className: "text-xs font-semibold text-slate-900 dark:text-white"
    }, "Marcus V. — Operations Lead")), /*#__PURE__*/ React.createElement("div", {
        className: "p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center gap-1 text-amber-500 mb-2"
    }, '★★★★★'), /*#__PURE__*/ React.createElement("p", {
        className: "text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic mb-3"
    }, '"Top tier product quality and excellent customer service. Having net payment terms makes budgeting so much simpler."'), /*#__PURE__*/ React.createElement("div", {
        className: "text-xs font-semibold text-slate-900 dark:text-white"
    }, "Elena R. — Facility Procurement Director")), /*#__PURE__*/ React.createElement("div", {
        className: "p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center gap-1 text-amber-500 mb-2"
    }, '★★★★★'), /*#__PURE__*/ React.createElement("p", {
        className: "text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic mb-3"
    }, '"Zero hassle with order accuracy or shipping delays. SupplyKing has become our primary vendor for all facility supplies."'), /*#__PURE__*/ React.createElement("div", {
        className: "text-xs font-semibold text-slate-900 dark:text-white"
    }, "David K. — Logistics Manager")))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 5
};
