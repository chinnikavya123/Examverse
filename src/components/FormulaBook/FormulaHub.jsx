import React, { useState } from 'react';
import ChemistryFormulaBook from './ChemistryFormulaBook';
import PhysicsFormulaBook from './PhysicsFormulaBook';
import MathFormulaBook from './MathFormulaBook';

export default function FormulaHub() {
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');

  if (selectedSubject === 'Chemistry') {
    return (
      <div className="space-y-6 max-w-7xl mx-auto pb-16">
        <ChemistryFormulaBook 
          onSelectSubject={(subj) => setSelectedSubject(subj)} 
        />
      </div>
    );
  }

  if (selectedSubject === 'Physics') {
    return (
      <div className="space-y-6 max-w-7xl mx-auto pb-16">
        <PhysicsFormulaBook 
          onSelectSubject={(subj) => setSelectedSubject(subj)} 
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      <MathFormulaBook 
        onSelectSubject={(subj) => setSelectedSubject(subj)} 
      />
    </div>
  );
}
