import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 max-w-2xl mx-auto my-12 bg-slate-900 border border-red-500/40 rounded-2xl text-red-200 shadow-2xl space-y-4 font-sans">
          <h2 className="text-xl font-bold text-red-400">EXAM VERSE Error Boundary Triggered</h2>
          <p className="text-sm font-mono bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-300">
            {this.state.error && this.state.error.toString()}
          </p>
          {this.state.errorInfo && (
            <pre className="text-xs font-mono bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-400 overflow-x-auto max-h-48">
              {this.state.errorInfo.componentStack}
            </pre>
          )}
          <button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg"
          >
            Reset App Data & Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
