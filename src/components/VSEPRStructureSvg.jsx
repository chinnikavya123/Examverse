import React from 'react';

/**
 * Renders custom 2D Vector SVG diagrams for all VSEPR & Inorganic Molecular Structures.
 * Displays exact central atom symbols (C, N, O, B, P, S, Cl, Xe, I), bonds, and lone pairs.
 */
export default function VSEPRStructureSvg({ moleculeName }) {
  const name = (moleculeName || '').toLowerCase();

  // 1. Methane (CH4) - Tetrahedral
  if (name.includes('methane') || name.includes('ch4')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-indigo-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-indigo-500/20 stroke-indigo-400" />
        <text x="60" y="64" textAnchor="middle" className="text-xs font-bold fill-indigo-300 stroke-none">C</text>
        <line x1="60" y1="46" x2="60" y2="18" />
        <circle cx="60" cy="14" r="6" className="fill-purple-500/30 stroke-purple-400" />
        <text x="60" y="17" textAnchor="middle" className="text-[9px] font-bold fill-purple-200 stroke-none">H</text>
        <line x1="48" y1="68" x2="24" y2="92" />
        <circle cx="20" cy="96" r="6" className="fill-purple-500/30 stroke-purple-400" />
        <text x="20" y="99" textAnchor="middle" className="text-[9px] font-bold fill-purple-200 stroke-none">H</text>
        <line x1="72" y1="68" x2="96" y2="92" />
        <circle cx="100" cy="96" r="6" className="fill-purple-500/30 stroke-purple-400" />
        <text x="100" y="99" textAnchor="middle" className="text-[9px] font-bold fill-purple-200 stroke-none">H</text>
        <line x1="60" y1="60" x2="40" y2="78" strokeDasharray="3 3" />
        <circle cx="36" cy="82" r="6" className="fill-purple-500/30 stroke-purple-400" />
        <text x="36" y="85" textAnchor="middle" className="text-[9px] font-bold fill-purple-200 stroke-none">H</text>
      </svg>
    );
  }

  // 2. Ammonia (NH3) - Trigonal Pyramidal
  if (name.includes('ammonia') || name.includes('nh3')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-purple-400 fill-none stroke-2">
        <circle cx="60" cy="65" r="14" className="fill-purple-500/20 stroke-purple-400" />
        <text x="60" y="69" textAnchor="middle" className="text-xs font-bold fill-purple-300 stroke-none">N</text>
        {/* Lone pair */}
        <path d="M 54 42 C 54 28, 66 28, 66 42 Z" className="fill-amber-400/30 stroke-amber-400" />
        <circle cx="60" cy="34" r="2" className="fill-amber-400 stroke-none" />
        <line x1="48" y1="72" x2="24" y2="96" />
        <circle cx="20" cy="100" r="6" className="fill-indigo-500/30 stroke-indigo-400" />
        <text x="20" y="103" textAnchor="middle" className="text-[9px] font-bold fill-indigo-200 stroke-none">H</text>
        <line x1="72" y1="72" x2="96" y2="96" />
        <circle cx="100" cy="100" r="6" className="fill-indigo-500/30 stroke-indigo-400" />
        <text x="100" y="103" textAnchor="middle" className="text-[9px] font-bold fill-indigo-200 stroke-none">H</text>
        <line x1="60" y1="79" x2="60" y2="102" strokeDasharray="3 3" />
        <circle cx="60" cy="106" r="6" className="fill-indigo-500/30 stroke-indigo-400" />
        <text x="60" y="109" textAnchor="middle" className="text-[9px] font-bold fill-indigo-200 stroke-none">H</text>
      </svg>
    );
  }

  // 3. Water (H2O) - Bent / V-shaped
  if (name.includes('water') || name.includes('h2o')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-cyan-400 fill-none stroke-2">
        <circle cx="60" cy="50" r="14" className="fill-cyan-500/20 stroke-cyan-400" />
        <text x="60" y="54" textAnchor="middle" className="text-xs font-bold fill-cyan-300 stroke-none">O</text>
        {/* Two lone pairs */}
        <path d="M 40 38 C 30 25, 45 15, 52 35 Z" className="fill-amber-400/30 stroke-amber-400" />
        <path d="M 80 38 C 90 25, 75 15, 68 35 Z" className="fill-amber-400/30 stroke-amber-400" />
        <line x1="48" y1="60" x2="26" y2="85" />
        <circle cx="22" cy="90" r="6" className="fill-indigo-500/30 stroke-indigo-400" />
        <text x="22" y="93" textAnchor="middle" className="text-[9px] font-bold fill-indigo-200 stroke-none">H</text>
        <line x1="72" y1="60" x2="94" y2="85" />
        <circle cx="98" cy="90" r="6" className="fill-indigo-500/30 stroke-indigo-400" />
        <text x="98" y="93" textAnchor="middle" className="text-[9px] font-bold fill-indigo-200 stroke-none">H</text>
      </svg>
    );
  }

  // 4. Boron Trifluoride (BF3) - Trigonal Planar
  if (name.includes('boron trifluoride') || name.includes('bf3')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-emerald-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-emerald-500/20 stroke-emerald-400" />
        <text x="60" y="64" textAnchor="middle" className="text-xs font-bold fill-emerald-300 stroke-none">B</text>
        <line x1="60" y1="46" x2="60" y2="18" />
        <circle cx="60" cy="14" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="60" y="17" textAnchor="middle" className="text-[9px] font-bold fill-emerald-200 stroke-none">F</text>
        <line x1="48" y1="68" x2="24" y2="84" />
        <circle cx="20" cy="86" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="20" y="89" textAnchor="middle" className="text-[9px] font-bold fill-emerald-200 stroke-none">F</text>
        <line x1="72" y1="68" x2="96" y2="84" />
        <circle cx="100" cy="86" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="100" y="89" textAnchor="middle" className="text-[9px] font-bold fill-emerald-200 stroke-none">F</text>
      </svg>
    );
  }

  // 5. Phosphorus Pentachloride (PCl5) - Trigonal Bipyramidal
  if (name.includes('phosphorus pentachloride') || name.includes('pcl5')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-amber-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-amber-500/20 stroke-amber-400" />
        <text x="60" y="64" textAnchor="middle" className="text-xs font-bold fill-amber-300 stroke-none">P</text>
        {/* 2 Axial Cl */}
        <line x1="60" y1="46" x2="60" y2="14" />
        <circle cx="60" cy="10" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="60" y="13" textAnchor="middle" className="text-[8px] font-bold fill-emerald-200 stroke-none">Cl</text>
        <line x1="60" y1="74" x2="60" y2="106" />
        <circle cx="60" cy="110" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="60" y="113" textAnchor="middle" className="text-[8px] font-bold fill-emerald-200 stroke-none">Cl</text>
        {/* 3 Equatorial Cl */}
        <line x1="46" y1="60" x2="18" y2="60" />
        <circle cx="14" cy="60" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="14" y="63" textAnchor="middle" className="text-[8px] font-bold fill-emerald-200 stroke-none">Cl</text>
        <line x1="72" y1="68" x2="94" y2="82" />
        <circle cx="98" cy="84" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="98" y="87" textAnchor="middle" className="text-[8px] font-bold fill-emerald-200 stroke-none">Cl</text>
        <line x1="72" y1="52" x2="94" y2="38" strokeDasharray="3 3" />
        <circle cx="98" cy="36" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="98" y="39" textAnchor="middle" className="text-[8px] font-bold fill-emerald-200 stroke-none">Cl</text>
      </svg>
    );
  }

  // 6. Sulfur Hexafluoride (SF6) - Octahedral
  if (name.includes('sulfur hexafluoride') || name.includes('sf6')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-rose-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-rose-500/20 stroke-rose-400" />
        <text x="60" y="64" textAnchor="middle" className="text-xs font-bold fill-rose-300 stroke-none">S</text>
        {/* Axial F */}
        <line x1="60" y1="46" x2="60" y2="16" />
        <circle cx="60" cy="12" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="15" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="60" y1="74" x2="60" y2="104" />
        <circle cx="60" cy="108" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="111" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        {/* Equatorial 4 F */}
        <line x1="46" y1="46" x2="22" y2="28" />
        <circle cx="18" cy="25" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="18" y="28" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="74" y1="46" x2="98" y2="28" />
        <circle cx="102" cy="25" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="102" y="28" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="46" y1="74" x2="22" y2="92" />
        <circle cx="18" cy="95" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="18" y="98" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="74" y1="74" x2="98" y2="92" />
        <circle cx="102" cy="95" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="102" y="98" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
      </svg>
    );
  }

  // 7. Xenon Difluoride (XeF2) - Linear (3 equatorial lp, 2 axial F)
  if (name.includes('xenon difluoride') || name.includes('xef2')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-teal-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-teal-500/20 stroke-teal-400" />
        <text x="60" y="64" textAnchor="middle" className="text-[10px] font-bold fill-teal-300 stroke-none">Xe</text>
        {/* 2 Axial F */}
        <line x1="60" y1="46" x2="60" y2="16" />
        <circle cx="60" cy="12" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="60" y="15" textAnchor="middle" className="text-[9px] font-bold fill-emerald-200 stroke-none">F</text>
        <line x1="60" y1="74" x2="60" y2="104" />
        <circle cx="60" cy="108" r="6" className="fill-emerald-500/30 stroke-emerald-400" />
        <text x="60" y="111" textAnchor="middle" className="text-[9px] font-bold fill-emerald-200 stroke-none">F</text>
        {/* 3 Equatorial Lone Pairs */}
        <ellipse cx="28" cy="60" rx="10" ry="5" className="fill-amber-400/30 stroke-amber-400" />
        <ellipse cx="92" cy="48" rx="10" ry="5" transform="rotate(30 92 48)" className="fill-amber-400/30 stroke-amber-400" />
        <ellipse cx="92" cy="72" rx="10" ry="5" transform="rotate(-30 92 72)" className="fill-amber-400/30 stroke-amber-400" />
      </svg>
    );
  }

  // 8. Xenon Tetrafluoride (XeF4) - Square Planar
  if (name.includes('xenon tetrafluoride') || name.includes('xef4')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-teal-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-teal-500/20 stroke-teal-400" />
        <text x="60" y="64" textAnchor="middle" className="text-[10px] font-bold fill-teal-300 stroke-none">Xe</text>
        <line x1="46" y1="46" x2="22" y2="22" />
        <circle cx="18" cy="18" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="18" y="21" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="74" y1="46" x2="98" y2="22" />
        <circle cx="102" cy="18" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="102" y="21" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="46" y1="74" x2="22" y2="98" />
        <circle cx="18" cy="102" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="18" y="105" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="74" y1="74" x2="98" y2="98" />
        <circle cx="102" cy="102" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="102" y="105" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        {/* Top and Bottom axial lone pairs */}
        <ellipse cx="60" cy="30" rx="5" ry="10" className="fill-amber-400/30 stroke-amber-400" />
        <ellipse cx="60" cy="90" rx="5" ry="10" className="fill-amber-400/30 stroke-amber-400" />
      </svg>
    );
  }

  // 9. Xenon Hexafluoride (XeF6) - Distorted Octahedral
  if (name.includes('xenon hexafluoride') || name.includes('xef6')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-teal-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-teal-500/20 stroke-teal-400" />
        <text x="60" y="64" textAnchor="middle" className="text-[10px] font-bold fill-teal-300 stroke-none">Xe</text>
        <line x1="60" y1="46" x2="60" y2="16" />
        <circle cx="60" cy="12" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="15" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="46" y1="50" x2="22" y2="34" />
        <circle cx="18" cy="31" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="18" y="34" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="74" y1="50" x2="98" y2="34" />
        <circle cx="102" cy="31" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="102" y="34" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="46" y1="70" x2="22" y2="86" />
        <circle cx="18" cy="89" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="18" y="92" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="74" y1="70" x2="98" y2="86" />
        <circle cx="102" cy="89" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="102" y="92" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="60" y1="74" x2="60" y2="104" />
        <circle cx="60" cy="108" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="111" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        {/* Distorting Lone Pair */}
        <ellipse cx="38" cy="44" rx="4" ry="7" transform="rotate(-45 38 44)" className="fill-amber-400/30 stroke-amber-400" />
      </svg>
    );
  }

  // 10. Sulfur Tetrafluoride (SF4) - Seesaw
  if (name.includes('sulfur tetrafluoride') || name.includes('sf4')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-rose-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-rose-500/20 stroke-rose-400" />
        <text x="60" y="64" textAnchor="middle" className="text-xs font-bold fill-rose-300 stroke-none">S</text>
        {/* 2 Axial F */}
        <line x1="60" y1="46" x2="60" y2="16" />
        <circle cx="60" cy="12" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="15" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="60" y1="74" x2="60" y2="104" />
        <circle cx="60" cy="108" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="111" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        {/* 2 Equatorial F */}
        <line x1="72" y1="52" x2="96" y2="38" />
        <circle cx="100" cy="35" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="100" y="38" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="72" y1="68" x2="96" y2="82" />
        <circle cx="100" cy="85" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="100" y="88" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        {/* 1 Equatorial Lone Pair */}
        <ellipse cx="28" cy="60" rx="10" ry="5" className="fill-amber-400/30 stroke-amber-400" />
      </svg>
    );
  }

  // 11. Chlorine Trifluoride (ClF3) - T-Shaped
  if (name.includes('chlorine trifluoride') || name.includes('clf3')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-emerald-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-emerald-500/20 stroke-emerald-400" />
        <text x="60" y="64" textAnchor="middle" className="text-[10px] font-bold fill-emerald-300 stroke-none">Cl</text>
        {/* 2 Axial F */}
        <line x1="60" y1="46" x2="60" y2="16" />
        <circle cx="60" cy="12" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="15" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="60" y1="74" x2="60" y2="104" />
        <circle cx="60" cy="108" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="111" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        {/* 1 Equatorial F */}
        <line x1="74" y1="60" x2="100" y2="60" />
        <circle cx="104" cy="60" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="104" y="63" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">F</text>
        {/* 2 Equatorial Lone Pairs */}
        <ellipse cx="32" cy="46" rx="9" ry="5" transform="rotate(-30 32 46)" className="fill-amber-400/30 stroke-amber-400" />
        <ellipse cx="32" cy="74" rx="9" ry="5" transform="rotate(30 32 74)" className="fill-amber-400/30 stroke-amber-400" />
      </svg>
    );
  }

  // 12. Carbon Dioxide (CO2) - Linear
  if (name.includes('carbon dioxide') || name.includes('co2')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-indigo-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-indigo-500/20 stroke-indigo-400" />
        <text x="60" y="64" textAnchor="middle" className="text-xs font-bold fill-indigo-300 stroke-none">C</text>
        {/* Double bond left */}
        <line x1="46" y1="56" x2="24" y2="56" />
        <line x1="46" y1="64" x2="24" y2="64" />
        <circle cx="18" cy="60" r="7" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="18" y="64" textAnchor="middle" className="text-xs font-bold fill-cyan-200 stroke-none">O</text>
        {/* Double bond right */}
        <line x1="74" y1="56" x2="96" y2="56" />
        <line x1="74" y1="64" x2="96" y2="64" />
        <circle cx="102" cy="60" r="7" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="102" y="64" textAnchor="middle" className="text-xs font-bold fill-cyan-200 stroke-none">O</text>
      </svg>
    );
  }

  // 13. Xenon Trioxide (XeO3) - Trigonal Pyramidal (3 double bonds)
  if (name.includes('xenon trioxide') || name.includes('xeo3')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-teal-400 fill-none stroke-2">
        <circle cx="60" cy="55" r="14" className="fill-teal-500/20 stroke-teal-400" />
        <text x="60" y="59" textAnchor="middle" className="text-[10px] font-bold fill-teal-300 stroke-none">Xe</text>
        {/* Lone pair */}
        <path d="M 54 34 C 54 20, 66 20, 66 34 Z" className="fill-amber-400/30 stroke-amber-400" />
        {/* 3 Double bonds to O */}
        <line x1="48" y1="63" x2="26" y2="87" />
        <line x1="53" y1="67" x2="31" y2="91" />
        <circle cx="24" cy="94" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="24" y="97" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">O</text>
        <line x1="72" y1="63" x2="94" y2="87" />
        <line x1="67" y1="67" x2="89" y2="91" />
        <circle cx="96" cy="94" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="96" y="97" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">O</text>
        <line x1="57" y1="69" x2="57" y2="98" />
        <line x1="63" y1="69" x2="63" y2="98" />
        <circle cx="60" cy="104" r="6" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="107" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">O</text>
      </svg>
    );
  }

  // 14. Iodine Heptafluoride (IF7) - Pentagonal Bipyramidal
  if (name.includes('iodine heptafluoride') || name.includes('if7')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-indigo-400 fill-none stroke-2">
        <circle cx="60" cy="60" r="14" className="fill-indigo-500/20 stroke-indigo-400" />
        <text x="60" y="64" textAnchor="middle" className="text-xs font-bold fill-indigo-300 stroke-none">I</text>
        {/* 2 Axial F */}
        <line x1="60" y1="46" x2="60" y2="14" />
        <circle cx="60" cy="10" r="5" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="13" textAnchor="middle" className="text-[8px] font-bold fill-cyan-200 stroke-none">F</text>
        <line x1="60" y1="74" x2="60" y2="106" />
        <circle cx="60" cy="110" r="5" className="fill-cyan-500/30 stroke-cyan-400" />
        <text x="60" y="113" textAnchor="middle" className="text-[8px] font-bold fill-cyan-200 stroke-none">F</text>
        {/* 5 Equatorial F in pentagon */}
        <line x1="46" y1="52" x2="22" y2="38" />
        <circle cx="18" cy="35" r="5" className="fill-cyan-500/30 stroke-cyan-400" />
        <line x1="74" y1="52" x2="98" y2="38" />
        <circle cx="102" cy="35" r="5" className="fill-cyan-500/30 stroke-cyan-400" />
        <line x1="46" y1="68" x2="20" y2="76" />
        <circle cx="16" cy="78" r="5" className="fill-cyan-500/30 stroke-cyan-400" />
        <line x1="74" y1="68" x2="100" y2="76" />
        <circle cx="104" cy="78" r="5" className="fill-cyan-500/30 stroke-cyan-400" />
        <line x1="56" y1="73" x2="42" y2="98" />
        <circle cx="40" cy="102" r="5" className="fill-cyan-500/30 stroke-cyan-400" />
      </svg>
    );
  }

  // 15. Benzene (C6H6) - Hexagonal Aromatic Ring
  if (name.includes('benzene') && !name.includes('chloro') && !name.includes('methyl') && !name.includes('amino')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-emerald-400 fill-none stroke-2">
        <polygon points="60,22 92,40 92,78 60,96 28,78 28,40" className="fill-emerald-500/10 stroke-emerald-400" />
        <circle cx="60" cy="59" r="18" className="stroke-emerald-400/70 stroke-dasharray-2 fill-none" strokeDasharray="4 3" />
        <text x="60" y="63" textAnchor="middle" className="text-[10px] font-extrabold fill-emerald-300 stroke-none">C₆H₆</text>
      </svg>
    );
  }

  // 16. Phenol (C6H5OH)
  if (name.includes('phenol')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-rose-400 fill-none stroke-2">
        <polygon points="60,40 88,56 88,88 60,104 32,88 32,56" className="fill-rose-500/10 stroke-rose-400" />
        <circle cx="60" cy="72" r="14" strokeDasharray="3 2" className="stroke-rose-400/60" />
        <line x1="60" y1="40" x2="60" y2="22" />
        <circle cx="60" cy="15" r="9" className="fill-rose-950 stroke-rose-400" />
        <text x="60" y="18" textAnchor="middle" className="text-[9px] font-bold fill-rose-200 stroke-none">OH</text>
      </svg>
    );
  }

  // 17. Aniline (C6H5NH2)
  if (name.includes('aniline')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-purple-400 fill-none stroke-2">
        <polygon points="60,40 88,56 88,88 60,104 32,88 32,56" className="fill-purple-500/10 stroke-purple-400" />
        <circle cx="60" cy="72" r="14" strokeDasharray="3 2" className="stroke-purple-400/60" />
        <line x1="60" y1="40" x2="60" y2="22" />
        <circle cx="60" cy="15" r="10" className="fill-purple-950 stroke-purple-400" />
        <text x="60" y="18" textAnchor="middle" className="text-[8px] font-bold fill-purple-200 stroke-none">NH₂</text>
      </svg>
    );
  }

  // 18. Benzoic Acid (C6H5COOH)
  if (name.includes('benzoic')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-indigo-400 fill-none stroke-2">
        <polygon points="60,44 88,60 88,92 60,108 32,92 32,60" className="fill-indigo-500/10 stroke-indigo-400" />
        <circle cx="60" cy="76" r="14" strokeDasharray="3 2" className="stroke-indigo-400/60" />
        <line x1="60" y1="44" x2="60" y2="24" />
        <rect x="42" y="6" width="36" height="18" rx="6" className="fill-indigo-950 stroke-indigo-400" />
        <text x="60" y="18" textAnchor="middle" className="text-[8px] font-bold fill-indigo-200 stroke-none">COOH</text>
      </svg>
    );
  }

  // 19. Toluene (C6H5CH3)
  if (name.includes('toluene') || name.includes('methylbenzene')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-amber-400 fill-none stroke-2">
        <polygon points="60,40 88,56 88,88 60,104 32,88 32,56" className="fill-amber-500/10 stroke-amber-400" />
        <circle cx="60" cy="72" r="14" strokeDasharray="3 2" className="stroke-amber-400/60" />
        <line x1="60" y1="40" x2="60" y2="22" />
        <circle cx="60" cy="15" r="10" className="fill-amber-950 stroke-amber-400" />
        <text x="60" y="18" textAnchor="middle" className="text-[8px] font-bold fill-amber-200 stroke-none">CH₃</text>
      </svg>
    );
  }

  // 20. Chlorobenzene (C6H5Cl)
  if (name.includes('chlorobenzene')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-teal-400 fill-none stroke-2">
        <polygon points="60,40 88,56 88,88 60,104 32,88 32,56" className="fill-teal-500/10 stroke-teal-400" />
        <circle cx="60" cy="72" r="14" strokeDasharray="3 2" className="stroke-teal-400/60" />
        <line x1="60" y1="40" x2="60" y2="22" />
        <circle cx="60" cy="15" r="9" className="fill-teal-950 stroke-teal-400" />
        <text x="60" y="18" textAnchor="middle" className="text-[9px] font-bold fill-teal-200 stroke-none">Cl</text>
      </svg>
    );
  }

  // 21. Ethene / Ethylene (C2H4)
  if (name.includes('ethene') || name.includes('ethylene')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-cyan-400 fill-none stroke-2">
        {/* C=C double bond */}
        <line x1="44" y1="56" x2="76" y2="56" />
        <line x1="44" y1="64" x2="76" y2="64" />
        <circle cx="40" cy="60" r="10" className="fill-cyan-950 stroke-cyan-400" />
        <text x="40" y="63" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">C</text>
        <circle cx="80" cy="60" r="10" className="fill-cyan-950 stroke-cyan-400" />
        <text x="80" y="63" textAnchor="middle" className="text-[9px] font-bold fill-cyan-200 stroke-none">C</text>
        {/* H bonds */}
        <line x1="32" y1="52" x2="16" y2="34" />
        <circle cx="12" cy="30" r="5" className="fill-purple-500/30 stroke-purple-400" />
        <line x1="32" y1="68" x2="16" y2="86" />
        <circle cx="12" cy="90" r="5" className="fill-purple-500/30 stroke-purple-400" />
        <line x1="88" y1="52" x2="104" y2="34" />
        <circle cx="108" cy="30" r="5" className="fill-purple-500/30 stroke-purple-400" />
        <line x1="88" y1="68" x2="104" y2="86" />
        <circle cx="108" cy="90" r="5" className="fill-purple-500/30 stroke-purple-400" />
      </svg>
    );
  }

  // 22. Ethyne / Acetylene (C2H2)
  if (name.includes('ethyne') || name.includes('acetylene')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-amber-400 fill-none stroke-2">
        {/* C≡C triple bond */}
        <line x1="44" y1="54" x2="76" y2="54" />
        <line x1="44" y1="60" x2="76" y2="60" />
        <line x1="44" y1="66" x2="76" y2="66" />
        <circle cx="40" cy="60" r="10" className="fill-amber-950 stroke-amber-400" />
        <text x="40" y="63" textAnchor="middle" className="text-[9px] font-bold fill-amber-200 stroke-none">C</text>
        <circle cx="80" cy="60" r="10" className="fill-amber-950 stroke-amber-400" />
        <text x="80" y="63" textAnchor="middle" className="text-[9px] font-bold fill-amber-200 stroke-none">C</text>
        <line x1="30" y1="60" x2="16" y2="60" />
        <circle cx="10" cy="60" r="5" className="fill-purple-500/30 stroke-purple-400" />
        <line x1="90" y1="60" x2="104" y2="60" />
        <circle cx="110" cy="60" r="5" className="fill-purple-500/30 stroke-purple-400" />
      </svg>
    );
  }

  // 23. D-Glucose (Pyranose Ring)
  if (name.includes('glucose') || name.includes('pyranose')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-sky-400 fill-none stroke-2">
        <polygon points="60,25 90,42 90,78 60,95 30,78 30,42" className="fill-sky-500/10 stroke-sky-400" />
        <circle cx="90" cy="42" r="7" className="fill-sky-950 stroke-sky-300" />
        <text x="90" y="45" textAnchor="middle" className="text-[8px] font-bold fill-sky-200 stroke-none">O</text>
        <text x="60" y="64" textAnchor="middle" className="text-[9px] font-extrabold fill-sky-300 stroke-none">Glucose</text>
      </svg>
    );
  }

  // 24. Aspirin
  if (name.includes('aspirin')) {
    return (
      <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-purple-400 fill-none stroke-2">
        <polygon points="50,44 78,60 78,92 50,108 22,92 22,60" className="fill-purple-500/10 stroke-purple-400" />
        <circle cx="50" cy="76" r="12" strokeDasharray="3 2" className="stroke-purple-400/60" />
        <line x1="50" y1="44" x2="50" y2="24" />
        <rect x="32" y="6" width="36" height="18" rx="6" className="fill-purple-950 stroke-purple-400" />
        <text x="50" y="18" textAnchor="middle" className="text-[7px] font-bold fill-purple-200 stroke-none">COOH</text>
        <line x1="78" y1="60" x2="94" y2="48" />
        <rect x="90" y="36" width="28" height="16" rx="4" className="fill-indigo-950 stroke-indigo-400" />
        <text x="104" y="47" textAnchor="middle" className="text-[6px] font-bold fill-indigo-200 stroke-none">OAc</text>
      </svg>
    );
  }

  // Fallback: Smart Geometry Generator based on molecule name or central atom symbol
  let centerSymbol = 'M';
  if (name.includes('p4o10') || name.includes('phosphorus pentoxide')) centerSymbol = 'P';
  else if (name.includes('h3po4') || name.includes('h3po3') || name.includes('h3po2')) centerSymbol = 'P';
  else if (name.includes('h2so4') || name.includes('h2s2o7')) centerSymbol = 'S';
  else if (name.includes('o3') || name.includes('ozone')) centerSymbol = 'O';

  return (
    <svg viewBox="0 0 120 120" className="w-24 h-24 stroke-purple-400 fill-none stroke-2">
      <circle cx="60" cy="60" r="14" className="fill-purple-500/20 stroke-purple-400" />
      <text x="60" y="64" textAnchor="middle" className="text-xs font-bold fill-purple-300 stroke-none">{centerSymbol}</text>
      <line x1="60" y1="46" x2="60" y2="18" />
      <circle cx="60" cy="14" r="6" className="fill-indigo-500/30 stroke-indigo-400" />
      <line x1="46" y1="68" x2="22" y2="92" />
      <circle cx="18" cy="96" r="6" className="fill-indigo-500/30 stroke-indigo-400" />
      <line x1="74" y1="68" x2="98" y2="92" />
      <circle cx="102" cy="96" r="6" className="fill-indigo-500/30 stroke-indigo-400" />
    </svg>
  );
}
