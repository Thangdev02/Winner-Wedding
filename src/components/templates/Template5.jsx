// Template5.jsx
import React from "react";

const Template5 = ({ formData }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-black text-white rounded-xl shadow-2xl overflow-hidden font-serif">
      {/* HERO IMAGE */}
      <div className="relative h-[420px]">
        <img
          src={formData.coupleImage || "/placeholder.svg"}
          alt="Couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute bottom-6 left-0 right-0 text-center px-6">
          <h1 className="text-3xl tracking-widest">
            {formData.groomName || "Dmitry"} & {formData.brideName || "Emilia"}
          </h1>
          <p className="mt-2 text-sm tracking-widest opacity-80">Dear guests</p>
        </div>
      </div>

      {/* DATE */}
      <div className="py-6 text-center border-b border-white/20">
        <p className="text-lg tracking-widest">
          {formData.weddingDate
            ? new Date(formData.weddingDate).toLocaleDateString("vi-VN")
            : "17.09.2026"}
        </p>
        <p className="text-xs mt-2 opacity-70">
          We want to share this special day with you
        </p>
      </div>

      {/* LOCATION */}
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h3 className="tracking-widest text-sm mb-3">LOCATION</h3>
          <div className="rounded-xl overflow-hidden mb-3">
            <img
              src={formData.image || formData.coupleImage || "/placeholder.svg"}
              className="h-40 w-full object-cover"
            />
          </div>
          <p className="text-sm">{formData.venue || "Wedding Hall"}</p>
          <p className="text-xs opacity-70">{formData.address}</p>
        </div>

        {/* DRESSCODE */}
        <div className="text-center">
          <h3 className="tracking-widest text-sm mb-2">DRESSCODE</h3>
          <p className="text-xs opacity-70 mb-3">
            We will be very glad if you support our color palette
          </p>
          <div className="flex justify-center gap-3">
            {["#111", "#5c5c5c", "#b08d57", "#eee"].map((c, i) => (
              <span
                key={i}
                className="w-5 h-5 rounded-full border border-white/30"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>

        {/* LOVE IMAGE */}
        <div className="rounded-full overflow-hidden w-44 h-44 mx-auto border-4 border-white/20">
          <img
            src={formData.coupleImage || "/placeholder.svg"}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-center italic text-sm opacity-80">
          We are waiting for you
        </p>

        {/* PROGRAM */}
        <div className="bg-white/5 rounded-xl p-4 text-center">
          <h3 className="tracking-widest text-sm mb-3">PROGRAM</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Ceremony</span>
              <span>{formData.ceremonyTime || "15:00"}</span>
            </div>
            <div className="flex justify-between">
              <span>Reception</span>
              <span>{formData.receptionTime || "16:00"}</span>
            </div>
            <div className="flex justify-between">
              <span>Banquet</span>
              <span>19:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="py-4 text-center border-t border-white/20">
        <p className="tracking-widest text-lg">
          {formData.groomName || "DM"} & {formData.brideName || "EM"}
        </p>
      </div>
    </div>
  );
};

export default Template5;
