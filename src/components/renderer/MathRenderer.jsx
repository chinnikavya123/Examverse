import React from 'react';
import KatexRenderer from '../KatexRenderer';

export default function MathRenderer({ text }) {
  if (!text) return null;
  return <KatexRenderer text={text} />;
}
