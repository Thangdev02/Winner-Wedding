'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Welcome = () => {
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0f0f0f]">
      {/* BACKGROUND */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://avaloneventsorganisation.com/wp-content/uploads/2023/08/Villa-Ephrussi-Rotschild-wedding.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
      </motion.div>

      {/* FLOATING LIGHTS */}
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/40 blur-sm"
          style={{
            top: `${20 + i * 8}%`,
            left: `${10 + i * 10}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl"
        >
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl text-white tracking-wider mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            THIỆP
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="font-serif text-6xl md:text-7xl text-white/90 tracking-widest mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ĐÁM CƯỚI
          </motion.h2>

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ delay: 0.6 }}
            className="h-px bg-white/40 mx-auto mb-10"
          />

          {/* SUB */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="font-serif text-2xl text-white/90 tracking-wide mb-3"
          >
            Anna & Andrew
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="font-serif text-xl tracking-widest text-white/70 mb-14"
          >
            21 · 07 · 2025
          </motion.p>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
          >
            <Link
              to="/home"
              className="group inline-flex items-center gap-4 px-12 py-4 bg-white/90 backdrop-blur-md text-black tracking-widest font-serif shadow-2xl"
            >
              KHÁM PHÁ
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL */}
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-14 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Welcome;
