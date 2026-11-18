import React from 'react';
import katex from 'katex';
import { publicAsset } from '../utils/publicAsset';

/**
 * Parses raw text containing inline $...$ or block $$...$$ and renders LaTeX using KaTeX.
 * Also supports multi-line markdown headers (###, ####), bullet points (-), numbered lists (1.), 
 * bold (**text**), Markdown Tables (| Col1 | Col2 |), and vertical spacing.
 * Auto-detects un-delimited LaTeX strings containing backslashes (e.g. \text, \xrightarrow, \downarrow).
 */
export default function KatexRenderer({ text = '', className = '', inline = false }) {
  if (text === null || text === undefined || text === '') return null;
  // Normalize literal escaped newlines (e.g. '\\n' in JSON or markdown tables)
  // while preserving valid LaTeX commands starting with \n (such as \ne, \neq, \neg, \nu, \notin, \nabla, etc.)
  const validLatexNCommands = /^(nabla|natural|neq|ne|neg|notin|nu|nRightarrow|nrightarrow|nLeftarrow|nleftarrow|nLeftrightarrow|nleftrightarrow|nexists|normalsize|not|ni|nsim|ncong|nmid|nparallel|nvdash|nvDash|nVdash|nVDash|nsubseteq|nsupseteq|nprec|nsucc)(?![a-zA-Z])/;

  let strText = String(text)
    .replace(/\x0b/g, '\\v')
    .replace(/\x0c/g, '\\f')
    .replace(/\x08/g, '\\b')
    .replace(/\x07/g, '\\a')
    .replace(/\t(ext|imes|heta|an|au|o\b)/g, '\\t$1')
    .replace(/\text/g, '\\text')
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, (match, offset, fullStr) => {
      const rest = fullStr.slice(offset + 1);
      // Preserve any LaTeX command starting with \n
      if (validLatexNCommands.test(rest)) {
        return match;
      }
      return '\n';
    });

  // Helper to render a KaTeX math string safely
  const renderMath = (mathStr, isBlock = false) => {
    if (!mathStr) return '';
    // Clean up mathStr: replace real newlines inside math blocks with spaces
    let cleaned = mathStr.replace(/\r?\n/g, ' ').trim();

    // Strip outer dollars if passed accidentally
    cleaned = cleaned.replace(/^\$+|\$+$/g, '').trim();
    if (!cleaned) return '';

    // Auto-fix double backslashes before LaTeX commands (e.g. \\text -> \text, \\Delta -> \Delta)
    cleaned = cleaned.replace(/\\\\([a-zA-Z]+)/g, '\\$1');

    try {
      const html = katex.renderToString(cleaned, {
        displayMode: isBlock,
        throwOnError: false,
        macros: {
          "\\centernot": "\\not",
          "\\nimplies": "\\nRightarrow",
          "\\land": "\\wedge",
          "\\lor": "\\vee",
          "\\le": "\\leq",
          "\\ge": "\\geq",
        },
      });

      // If KaTeX generated an error span (katex-error), attempt recovery passes
      if (html.includes('katex-error')) {
        // Recovery 1: Escape unescaped '&'
        let recovered = katex.renderToString(cleaned.replace(/&/g, '\\&'), {
          displayMode: isBlock,
          throwOnError: false,
        });
        if (!recovered.includes('katex-error')) return recovered;

        // Recovery 2: Fix backslashes followed by space
        recovered = katex.renderToString(cleaned.replace(/\\\s+/g, ' '), {
          displayMode: isBlock,
          throwOnError: false,
        });
        if (!recovered.includes('katex-error')) return recovered;

        // Recovery 3: Fix double superscripts (e.g. \pi^*_{2p_x}^1 -> {\pi^*_{2p_x}}^1)
        const fixedDoubleSup = cleaned.replace(/(\\[a-zA-Z]+(?:\^\*|\*)_\{[^}]+\})\^([0-9a-zA-Z]+)/g, '{$1}^$2');
        recovered = katex.renderToString(fixedDoubleSup, {
          displayMode: isBlock,
          throwOnError: false,
        });
        if (!recovered.includes('katex-error')) return recovered;

        // Recovery 4: Replace katex-error class and inline red styles with clean slate text
        return html
          .replace(/class="katex-error"[^>]*>/g, 'class="text-slate-300">')
          .replace(/color:\s*#[0-9a-fA-F]{3,6}/g, 'color: inherit');
      }
      return html;
    } catch (e) {
      console.error("KaTeX error:", e);
      return `<span class="text-slate-300">${cleaned}</span>`;
    }
  };

  // Helper to auto-balance unclosed dollars in a line
  const autoBalanceDollars = (str) => {
    if (!str) return str;
    // Count unescaped dollars
    const matches = str.match(/(?<!\\)\$/g);
    if (matches && matches.length % 2 !== 0) {
      // Append missing closing dollar at the end
      return str + '$';
    }
    return str;
  };

  // Helper to render inline LaTeX ($...$, $$...$$) and bold (**...**)
  const renderInlineLatexAndBold = (lineText) => {
    if (!lineText) return null;

    // Convert literal &nbsp; HTML entity to Unicode non-breaking space \u00A0
    // and normalize any double-escaped LaTeX commands (e.g. \\text -> \text)
    const textWithoutEntities = lineText
      .replace(/&nbsp;/g, '\u00A0')
      .replace(/\\\\([a-zA-Z]+)/g, '\\$1');

    // First auto-balance any unclosed single dollar in lineText
    const balancedText = autoBalanceDollars(textWithoutEntities);

    // Regex matching $$block$$, $inline$, **bold**, or ![alt](url)
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$|\*\*.*?\*\*|!\[.*?\]\(.*?\))/g;
    const parts = balancedText.split(regex);

    return parts.map((part, index) => {
      if (!part) return null;
      if (part.startsWith('![') && part.includes('](') && part.endsWith(')')) {
        const m = part.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (m) {
          return (
            <span key={index} className="inline-block my-1 align-middle">
              <img 
                src={publicAsset(m[2])} 
                alt={m[1] || 'Diagram'} 
                className="max-h-28 sm:max-h-32 object-contain bg-white p-1 rounded-lg border border-slate-700/80 inline-block shadow-sm"
                loading="lazy"
              />
            </span>
          );
        }
      } else if (part.startsWith('$$') && part.endsWith('$$')) {
        const math = part.slice(2, -2).trim();
        return (
          <span
            key={index}
            className="block my-2.5 overflow-x-auto text-center py-1"
            dangerouslySetInnerHTML={{ __html: renderMath(math, true) }}
          />
        );
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1).trim();
        return (
          <span
            key={index}
            className="inline-block px-0.5"
            dangerouslySetInnerHTML={{ __html: renderMath(math, false) }}
          />
        );
      } else if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return <strong key={index} className="font-extrabold text-slate-100">{renderInlineLatexAndBold(boldText)}</strong>;
      } else {
        // Auto-detect raw LaTeX math commands (e.g. \vec, \frac, \hat, \int, \sum, \alpha, \beta, \sim, \vee, \wedge, etc.)
        // But exclude plain text words like \n or \t
        const hasMathCmd = /\\(vec|frac|hat|int|sum|alpha|beta|gamma|delta|theta|lambda|pi|sigma|omega|sqrt|right|left|times|cdot|implies|text|Omega|mu|lambda|le|ge|neq|approx|infty|sin|cos|tan|sec|csc|cot|quad|pm|mp|sim|vee|wedge|neg|land|lor|forall|exists|subset|supset|cap|cup|leftrightarrow|Leftrightarrow|to|rightarrow|leftarrow|longrightarrow|longleftarrow|xrightarrow|xleftarrow|rightleftharpoons|uparrow|downarrow|lim|ln|log|in|notin|circ|iff|mathbb|mathbf|mathrm|bar|overline|underline|begin|end|matrix|vmatrix|pmatrix|bmatrix|partial|nabla|because|therefore|bullet)/.test(part);
        
        if (hasMathCmd) {
          // A sentence contains natural language prose words (outside LaTeX commands or \text{...})
          // If part is an English sentence containing math commands, split out the math tokens.
          // Otherwise, treat the entire mathematical formula as a unified KaTeX math expression.
          const textWithoutLatex = part.replace(/\\text\{[^}]*\}/g, '').replace(/\\[a-zA-Z]+(\{[^}]*\})?/g, '');
          const proseWords = textWithoutLatex.match(/\b[A-Za-z]{3,}\b/g) || [];
          const hasCommonEnglishWord = /\b(is|are|in|on|at|to|of|by|for|with|and|the|a|an|across|between|when|where|what|which|then|from|such|that|resistor|battery|current|voltage|circuit|length|wire)\b/i.test(textWithoutLatex);
          const isSentence = proseWords.length >= 2 || hasCommonEnglishWord;

          if (isSentence) {
            // Split out isolated math tokens and render surrounding text normally
            const tokenRegex = /(\\[a-zA-Z]+(?:\{[^}]*\}|\[[^\]]*\])*|\b[a-zA-Z0-9_\^\/]+(?:\\[a-zA-Z]+)+(?:\{[^}]*\}|\[[^\]]*\])*)/;
            const subParts = part.split(tokenRegex);
            return (
              <span key={index}>
                {subParts.map((sub, sIdx) => {
                  if (!sub) return null;
                  if (/^(\\[a-zA-Z]|[0-9]+[\^_])/.test(sub.trim())) {
                    return (
                      <span
                        key={sIdx}
                        className="inline-block px-0.5"
                        dangerouslySetInnerHTML={{ __html: renderMath(sub.trim(), false) }}
                      />
                    );
                  }
                  return <span key={sIdx}>{sub}</span>;
                })}
              </span>
            );
          }

          // Otherwise, it's a standalone raw LaTeX expression (e.g. \frac{1}{2} or \alpha + \beta or complex equation)
          return (
            <span
              key={index}
              className="inline-block px-0.5 font-sans overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: renderMath(part.trim(), false) }}
            />
          );
        }
        return <span key={index}>{part}</span>;
      }
    });
  };

  // If inline mode is explicitly requested, return single inline span
  if (inline) {
    return <span className={className}>{renderInlineLatexAndBold(strText)}</span>;
  }

  // Parse lines and group Markdown Table rows
  const rawLines = strText.split('\n');
  const blocks = [];
  let currentTableRows = null;

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!currentTableRows) {
        currentTableRows = [];
      }
      currentTableRows.push(trimmed);
    } else {
      if (currentTableRows) {
        blocks.push({ type: 'table', rows: currentTableRows });
        currentTableRows = null;
      }
      blocks.push({ type: 'line', text: line });
    }
  }
  if (currentTableRows) {
    blocks.push({ type: 'table', rows: currentTableRows });
  }

  return (
    <div className={`space-y-2 text-slate-200 ${className}`}>
      {blocks.map((block, bIdx) => {
        // --- Render Markdown Table ---
        if (block.type === 'table') {
          const validRows = block.rows.filter(r => !r.includes(':---') && !r.includes('---'));
          if (validRows.length === 0) return null;

          const splitTableRow = (rowStr) => {
            let inner = rowStr.trim();
            if (inner.startsWith('|')) inner = inner.slice(1);
            if (inner.endsWith('|')) inner = inner.slice(0, -1);

            const cells = [];
            let current = '';
            let inDoubleMath = false;
            let inSingleMath = false;

            for (let i = 0; i < inner.length; i++) {
              const char = inner[i];
              const nextChar = i < inner.length - 1 ? inner[i + 1] : '';
              const prevChar = i > 0 ? inner[i - 1] : '';

              if (char === '$' && nextChar === '$' && prevChar !== '\\' && !inSingleMath) {
                inDoubleMath = !inDoubleMath;
                current += '$$';
                i++; // skip next $
                continue;
              } else if (char === '$' && prevChar !== '\\' && !inDoubleMath) {
                inSingleMath = !inSingleMath;
                current += char;
                continue;
              }

              const inMath = inDoubleMath || inSingleMath;
              if (char === '|' && (inMath || prevChar === '\\')) {
                // Pipe inside math or escaped with backslash
                current += char;
              } else if (char === '|') {
                cells.push(current.trim());
                current = '';
              } else {
                current += char;
              }
            }
            cells.push(current.trim());
            return cells;
          };

          const headerCells = splitTableRow(validRows[0]);
          const numCols = headerCells.length;
          const bodyRows = validRows.slice(1).map(r => {
            const cells = splitTableRow(r);
            while (cells.length < numCols) cells.push('');
            return cells;
          });

          return (
            <div key={bIdx} className="my-4 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-1.5 shadow-lg">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/90 text-indigo-300 font-extrabold uppercase tracking-wider">
                    {headerCells.map((cell, cIdx) => (
                      <th key={cIdx} className="px-4 py-3 border-r border-slate-800/60 last:border-r-0">
                        {renderInlineLatexAndBold(cell)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-200">
                  {bodyRows.map((rowCells, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-900/50 transition-colors">
                      {rowCells.map((cell, cIdx) => {
                        const trimmedCell = cell ? cell.trim() : '';
                        const isBlank = !trimmedCell || trimmedCell === '&nbsp;' || trimmedCell === '\u00A0' || trimmedCell.replace(/&nbsp;|\u00A0/g, '').trim() === '';
                        return (
                          <td key={cIdx} className="px-4 py-3 border-r border-slate-800/40 last:border-r-0 font-medium">
                            {isBlank ? null : renderInlineLatexAndBold(cell)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // --- Render Line ---
        const lineText = block.text;
        const trimmed = lineText.trim();
        if (!trimmed) return <div key={bIdx} className="h-1.5" />;

        // Header 3: ### Title
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={bIdx} className="text-base font-extrabold text-emerald-400 mt-4 mb-2 border-b border-emerald-500/20 pb-1.5 flex items-center gap-2">
              {renderInlineLatexAndBold(trimmed.slice(4))}
            </h3>
          );
        }

        // Header 4: #### Title
        if (trimmed.startsWith('#### ')) {
          return (
            <h4 key={bIdx} className="text-sm font-bold text-amber-300 mt-3 mb-1.5">
              {renderInlineLatexAndBold(trimmed.slice(5))}
            </h4>
          );
        }

        // Bullet items: - Item
        if (trimmed.startsWith('- ')) {
          return (
            <div key={bIdx} className="flex items-start space-x-2.5 ml-2 my-1 text-slate-200 text-xs sm:text-sm">
              <span className="text-emerald-400 font-bold text-base leading-none mt-0.5">•</span>
              <div className="flex-1 leading-relaxed">{renderInlineLatexAndBold(trimmed.slice(2))}</div>
            </div>
          );
        }

        // Numbered list: 1. Item
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={bIdx} className="flex items-start space-x-2.5 ml-2 my-1 text-slate-200 text-xs sm:text-sm">
              <span className="font-mono font-bold text-indigo-400 text-xs mt-0.5">{numMatch[1]}.</span>
              <div className="flex-1 leading-relaxed">{renderInlineLatexAndBold(numMatch[2])}</div>
            </div>
          );
        }

        // Standard Paragraph Line
        return (
          <p key={bIdx} className="leading-relaxed">
            {renderInlineLatexAndBold(lineText)}
          </p>
        );
      })}
    </div>
  );
}
