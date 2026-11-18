
import React, { useState } from 'react';
import { GraduationCap, Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';
import { API_BASE_URL } from '../config';

export default function Auth({ onLogin }) {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (mode === 'register' && name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }

    if (password.length < 8) {
      setError('Password must contain at least 8 characters.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/auth/${mode}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...(mode === 'register' ? { name: name.trim() } : {}),
            email: email.trim(),
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Authentication failed.');
      }

      onLogin(data.token, data.user);
    } catch (err) {
      setError(err.message || 'Unable to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-5">
      <div className="w-full max-w-5xl grid md:grid-cols-2 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        <div className="hidden md:flex flex-col justify-between p-12 bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-950">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-white/10">
                <GraduationCap size={30} />
              </div>
              <span className="text-2xl font-bold tracking-wide">ExamVerse</span>
            </div>

            <div className="mt-24">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-indigo-100">
                <Sparkles size={16} />
                Your preparation, elevated
              </div>

              <h1 className="mt-7 text-4xl font-bold leading-tight">
                Prepare smarter.
                <br />
                Perform better.
                <br />
                Achieve more.
              </h1>

              <p className="mt-6 text-indigo-100 leading-7">
                Your all-in-one learning space for JEE Main, JEE Advanced
                and AP EAPCET preparation.
              </p>
            </div>
          </div>

          <p className="text-sm text-indigo-200">
            Learn consistently. Track your progress. Reach your goals.
          </p>
        </div>

        <div className="p-7 sm:p-12">
          <div className="md:hidden flex items-center gap-3 mb-10">
            <GraduationCap className="text-indigo-400" size={30} />
            <span className="text-2xl font-bold">ExamVerse</span>
          </div>

          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
              Welcome to ExamVerse
            </p>

            <h2 className="text-3xl font-bold mt-3">
              {mode === 'login' ? 'Welcome back!' : 'Create account'}
            </h2>

            <p className="text-slate-400 mt-2">
              {mode === 'login'
                ? 'Sign in to continue your preparation.'
                : 'Join ExamVerse and start your preparation journey.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-800 mt-8">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
              }}
              className={`py-3 rounded-lg font-semibold transition ${
                mode === 'login'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => {
                setMode('register');
                setError('');
              }}
              className={`py-3 rounded-lg font-semibold transition ${
                mode === 'register'
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            {mode === 'register' && (
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Full name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={19} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3.5 pl-12 pr-4 text-white outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={19} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3.5 pl-12 pr-4 text-white outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={19} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  required
                  minLength={8}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3.5 pl-12 pr-12 text-white outline-none focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 py-4 font-semibold transition"
            >
              {loading
                ? 'Please wait...'
                : mode === 'login'
                  ? 'Sign in'
                  : 'Create account'}
              {!loading && <ArrowRight size={19} />}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-8">
            By continuing, you agree to use ExamVerse responsibly.
          </p>
        </div>
      </div>
    </div>
  );
}
