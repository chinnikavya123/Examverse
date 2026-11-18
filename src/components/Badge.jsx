import React from 'react';

export default function Badge({ children, variant = 'brand' }) {
  const variants = {
    brand: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    amber: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    sky: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
  };
  return (
    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded border inline-flex items-center gap-1 ${variants[variant] || variants.brand}`}>
      {children}
    </span>
  );
}
