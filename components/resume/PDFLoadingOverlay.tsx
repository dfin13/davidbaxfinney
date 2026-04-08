"use client";

import { motion, AnimatePresence } from "framer-motion";

const resumeLines = [
  { w: "45%", delay: 0.0 },
  { w: "62%", delay: 0.07 },
  { w: "38%", delay: 0.14 },
  { w: "55%", delay: 0.21 },
  { w: "70%", delay: 0.28 },
  { w: "42%", delay: 0.35 },
  { w: "58%", delay: 0.42 },
  { w: "30%", delay: 0.49 },
];

export default function PDFLoadingOverlay({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: "rgba(6,11,24,0.97)",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* Ambient radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 35% at 50% 50%, rgba(200,152,58,0.09) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-10">
            {/* ── Rings + icon ─────────────────────────── */}
            <div className="relative flex items-center justify-center w-24 h-24">
              {/* Expanding pulse rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-gold-400/25"
                  initial={{ width: 72, height: 72, opacity: 0 }}
                  animate={{
                    width: [72, 160, 220],
                    height: [72, 160, 220],
                    opacity: [0, 0.45, 0],
                  }}
                  transition={{
                    duration: 2.4,
                    delay: i * 0.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Rotating arc */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(from 0deg, #C8983A 0deg, rgba(200,152,58,0.15) 80deg, transparent 110deg)",
                  borderRadius: "50%",
                  padding: 1.5,
                }}
              />

              {/* Static inner ring */}
              <div
                className="absolute inset-1 rounded-full"
                style={{ background: "rgba(6,11,24,1)" }}
              />

              {/* Document icon */}
              <motion.div
                className="relative z-10 w-8 h-10 rounded flex flex-col gap-1 items-start justify-center px-1.5"
                style={{
                  background: "rgba(11,18,33,1)",
                  border: "1px solid rgba(200,152,58,0.5)",
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                {[1, 0.7, 0.85, 0.6].map((w, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: `${w * 100}%`,
                      height: 1.5,
                      background: i === 0 ? "#C8983A" : "rgba(255,255,255,0.2)",
                      transformOrigin: "left",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + i * 0.08,
                      repeat: Infinity,
                      repeatDelay: 2.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* ── Label ───────────────────────────────── */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1">
                <motion.p
                  className="text-white font-black text-4xl tracking-widest"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ letterSpacing: "0.2em" }}
                >
                  <span style={{ color: "#C8983A" }}>D</span>
                  <span>B</span>
                  <span style={{ color: "#C8983A" }}>F</span>
                </motion.p>
                <div className="flex gap-0.5 ml-0.5 mt-0.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1 h-1 rounded-full bg-gold-400"
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 1,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-500 text-sm tracking-widest uppercase" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>David Bax Finney</p>
            </div>

            {/* ── Animated resume skeleton lines ───────── */}
            <div className="flex flex-col gap-2.5 w-52">
              {resumeLines.map((line, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(90deg,#C8983A,#D4A843)"
                          : "rgba(255,255,255,0.13)",
                      width: line.w,
                    }}
                    initial={{ x: "-110%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      duration: 0.5,
                      delay: line.delay,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      repeat: Infinity,
                      repeatDelay: resumeLines.length * 0.07 + 1,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* ── Wordmark ─────────────────────────────── */}
            <motion.p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#334155" }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              David Finney<span style={{ color: "#C8983A" }}>.</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
