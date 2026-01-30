'use client';

import React, { useState, useEffect } from 'react';

const Template3 = ({ formData }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      if (!formData.weddingDate) return;

      const weddingDate = new Date(formData.weddingDate).getTime();
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [formData.weddingDate]);

  return (
    <div className="w-full max-w-sm mx-auto bg-slate-900">
      {/* Header with overlay image */}
      <div className="relative h-64 bg-slate-800 overflow-hidden">
        {formData.coupleImage ? (
          <>
            <img
              src={formData.coupleImage || "/placeholder.svg"}
              alt="Couple"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-slate-700 to-slate-900" />
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
          <p className="text-sm uppercase tracking-widest text-amber-200 mb-2">We are getting married</p>
          <h1 className="font-serif text-4xl font-light mb-1">
            {formData.groomName && formData.brideName
              ? `${formData.groomName} & ${formData.brideName}`
              : 'The Happy Couple'}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="p-8 bg-slate-900 text-white">
        {/* Wedding date */}
        {formData.weddingDate && (
          <div className="text-center mb-8">
            <p className="font-serif text-2xl font-light mb-1">
              {new Date(formData.weddingDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <div className="h-px bg-amber-200 my-3"></div>
          </div>
        )}

        {/* Countdown timer */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 text-center">
          <p className="text-amber-200 text-sm uppercase tracking-widest mb-4">Coming soon</p>
          
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <p className="font-serif text-3xl font-light text-amber-200 leading-none">
                {String(countdown.days).padStart(2, '0')}
              </p>
              <p className="text-xs uppercase text-gray-400 mt-1 font-semibold">Days</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light text-amber-200 leading-none">
                {String(countdown.hours).padStart(2, '0')}
              </p>
              <p className="text-xs uppercase text-gray-400 mt-1 font-semibold">Hours</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light text-amber-200 leading-none">
                {String(countdown.minutes).padStart(2, '0')}
              </p>
              <p className="text-xs uppercase text-gray-400 mt-1 font-semibold">Minutes</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light text-amber-200 leading-none">
                {String(countdown.seconds).padStart(2, '0')}
              </p>
              <p className="text-xs uppercase text-gray-400 mt-1 font-semibold">Seconds</p>
            </div>
          </div>
        </div>

        {/* Venue and times */}
        <div className="mb-8 pb-8 border-b border-slate-700">
          <div className="text-center mb-4">
            {formData.venue && (
              <h2 className="font-serif text-2xl font-light mb-2">{formData.venue}</h2>
            )}
            {formData.address && (
              <p className="text-xs text-gray-300 whitespace-pre-line leading-relaxed">
                {formData.address}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 pt-4 text-center">
            {formData.ceremonyTime && (
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Ceremony</p>
                <p className="font-serif text-lg text-amber-200">{formData.ceremonyTime}</p>
              </div>
            )}
            {formData.receptionTime && (
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Reception</p>
                <p className="font-serif text-lg text-amber-200">{formData.receptionTime}</p>
              </div>
            )}
          </div>
        </div>

        {/* Love Story section */}
        <div className="text-center">
          <h3 className="font-serif text-2xl font-light mb-3">Love Story</h3>
          
          {formData.coupleImage && (
            <img
              src={formData.coupleImage || "/placeholder.svg"}
              alt="Love story"
              className="w-full h-40 object-cover rounded-lg mb-4 shadow-lg"
            />
          )}

          <p className="text-xs text-gray-300 leading-relaxed mb-4">
            Узнайте больше о нашей истории любви и вдохновитесь на нашей свадьбе.
          </p>

          {formData.rsvpDate && (
            <p className="text-xs text-gray-400">
              Please confirm by {new Date(formData.rsvpDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template3;
