// ProposeToSadia.jsx
// Single-file React component (default export) you can paste into a Vite/CRA project.
// Requires: Tailwind CSS and framer-motion installed in your project.
// Usage: import ProposeToSadia from './ProposeToSadia'; then render <ProposeToSadia /> in your app.

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProposeToSadia() {
  const [started, setStarted] = useState(false);
  const [showRing, setShowRing] = useState(false);
  const [accepted, setAccepted] = useState(null); // null | true | false
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-indigo-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-2xl shadow-2xl bg-white/80 backdrop-blur-lg border border-white/40 overflow-hidden">
        {/* Header */}
        <header className="p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            For <span className="text-rose-600">Sadia</span>, with all my heart
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-700">A little page I made to ask something very important.</p>
        </header>

        <main className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left: Visual / Animation */}
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-rose-300 to-pink-100 flex items-center justify-center shadow-lg"
            >
              <svg viewBox="0 0 200 200" className="w-40 h-40">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ff6b81" />
                    <stop offset="100%" stopColor="#ff9bb3" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M100 170 C30 120 20 70 65 40 C100 15 130 40 135 55 C170 40 190 70 170 100 C140 140 110 165 100 170Z"
                  fill="url(#g1)"
                  initial={{ y: 6 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </motion.div>

            <div className="text-center">
              <p className="text-gray-600">Click the button to reveal a message.</p>
            </div>

            <button
              onClick={() => setStarted(true)}
              className="px-6 py-3 rounded-full bg-rose-600 text-white font-semibold shadow hover:scale-105 active:scale-95 transition"
            >
              Start
            </button>

            <small className="text-xs text-gray-500">Tip: play soft music while she reads (optional)</small>
          </div>

          {/* Right: Message Card */}
          <div className="p-4 md:p-8 bg-white rounded-xl shadow-inner border border-gray-100">
            <AnimatePresence>
              {!started && (
                <motion.div
                  key="closed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-xl font-bold">A little secret</h2>
                  <p className="mt-3 text-gray-600">When you're ready, press "Start" and I'll tell you everything I feel.</p>
                </motion.div>
              )}

              {started && (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <h2 className="text-2xl font-bold text-rose-600">Sadia,</h2>
                  <p className="mt-4 text-gray-700">I've been wanting to tell you this for a long time. Your smile brightens my day, your kindness warms my heart, and every small moment with you feels like a beautiful memory.</p>

                  <motion.blockquote
                    className="mt-6 p-4 rounded-lg bg-rose-50 border-l-4 border-rose-200 text-gray-800"
                    initial={{ scale: 0.98 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    "I love how your laughter makes even ordinary days feel magical."
                  </motion.blockquote>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setShowRing(true)}
                      className="px-5 py-2 rounded-full bg-rose-600 text-white font-semibold shadow hover:brightness-105 transition"
                    >
                      Ask the question
                    </button>

                    <button
                      onClick={() => { setStarted(false); setShowRing(false); setAccepted(null); }}
                      className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-medium hover:scale-102 transition"
                    >
                      Not yet
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ring / Proposal Modal */}
            <AnimatePresence>
              {showRing && (
                <motion.div
                  key="modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
                  >
                    <h3 className="text-center text-2xl font-bold text-rose-600">Will you be mine?</h3>
                    <p className="mt-3 text-center text-gray-700">Sadia, I promise to care for you, laugh with you, and make everyday a little more special. Will you marry me?</p>

                    <div className="mt-6 flex justify-center gap-4">
                      <button
                        onClick={() => setAccepted(true)}
                        className="px-6 py-2 rounded-full bg-rose-600 text-white font-semibold shadow hover:scale-105 transition"
                      >
                        Yes ❤️
                      </button>

                      <button
                        onClick={() => setAccepted(false)}
                        className="px-5 py-2 rounded-full bg-gray-200 text-gray-800 font-medium"
                      >
                        Maybe later
                      </button>

                      <button
                        onClick={() => { setShowRing(false); setAccepted(null); }}
                        className="px-4 py-2 rounded-full bg-white text-gray-600 border"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-400">(You can customize the message and buttons in the code.)</div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Outcome */}
            <div className="mt-6">
              <AnimatePresence>
                {accepted === true && (
                  <motion.div
                    key="accepted"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-rose-50 border-l-4 border-rose-200"
                  >
                    <h4 className="font-bold text-rose-600">She said yes!</h4>
                    <p className="mt-2 text-gray-700">This moment will be remembered forever. Celebrate with a warm hug and maybe some sweets ❤️.</p>
                  </motion.div>
                )}

                {accepted === false && (
                  <motion.div
                    key="declined"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-gray-50 border-l-4 border-gray-200"
                  >
                    <h4 className="font-bold text-gray-700">It's okay</h4>
                    <p className="mt-2 text-gray-700">The most important thing is honesty. Thank her and be kind — feelings can change with time.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </main>

        <footer className="p-6 text-center text-sm text-gray-500">Made with ♥ just for Sadia. — (Customize fonts, images, and music to make it perfect.)</footer>
      </div>

      {/* Decorative floating hearts */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <svg className="absolute left-8 top-10 opacity-30" width="120" height="120" viewBox="0 0 24 24"><path fill="#ff7a91" d="M12.1 21.35l-1.1-1.02C5.14 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.04.99 3.6 2.44h1.8C13.46 4.99 14.76 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.14 6.86-8.9 11.83l-1 .02z"/></svg>
        <svg className="absolute right-12 bottom-12 opacity-25" width="160" height="160" viewBox="0 0 24 24"><path fill="#ffd1dc" d="M12.1 21.35l-1.1-1.02C5.14 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.04.99 3.6 2.44h1.8C13.46 4.99 14.76 4 16.5 4 19 4 21 6 21 8.5c0 3.78-3.14 6.86-8.9 11.83l-1 .02z"/></svg>
      </div>
    </div>
  );
}

/*
Instructions (short):
1) Create a Vite or Create-React-App project.
2) Install Tailwind CSS (official docs) and add the base styles.
3) Install framer-motion: npm i framer-motion
4) Save this file as ProposeToSadia.jsx and import into your app.

Optional polish ideas:
- Add a custom font (Google Fonts) for more romance.
- Add a background audio tag with a soft song; autoplay is often blocked so provide a play button.
- Replace the SVG heart with an image of you two (if you want personal touch).
- Add confetti on accepted: you can use a small confetti library or CSS animations.
*/
