import React from "react";

const Template4 = ({ formData }) => {
  return (
    <div className="min-h-screen bg-[#5b0f13] flex justify-center py-16">
      <div className="w-[390px] bg-[#f8f5f2] rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,.45)] overflow-hidden relative">

        {/* ===== DECOR PNG (GIỮ NGUYÊN) ===== */}
        <img
          src="https://png.pngtree.com/png-clipart/20230710/ourmid/pngtree-flowers-png-image_7506581.png"
          className="absolute -top-4 -left-4 w-36 opacity-80 pointer-events-none"
        />
        <img
          src="https://img.freepik.com/free-psd/floral-heart-frame-design_23-2151934505.jpg?semt=ais_hybrid&w=740&q=80"
          className="absolute bottom-28 left-1 w-24 opacity-70 pointer-events-none"
        />
        <img
          src="https://pngimg.com/uploads/angel/angel_PNG47.png"
          className="absolute bottom-28 right-1 w-24 opacity-70 pointer-events-none"
        />

        {/* ===== IMAGE ===== */}
        <div className="relative h-[340px] overflow-hidden">
          <img
            src={
              formData.coupleImage ||
              "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57"
            }
            className="w-full h-full object-cover scale-[1.05]"
          />

          <div
            className="absolute bottom-0 left-0 w-full h-14 bg-[#f8f5f2]"
            style={{
              clipPath:
                "polygon(0 45%, 6% 62%, 14% 48%, 22% 68%, 30% 52%, 38% 72%, 46% 56%, 54% 74%, 62% 54%, 70% 70%, 78% 52%, 86% 68%, 94% 48%, 100% 60%, 100% 100%, 0 100%)",
            }}
          />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="px-9 pt-8 text-center">
          <p className="uppercase tracking-[5px] text-[11px] text-gray-500">
            Thiệp mời đám cưới
          </p>

          <h1
            className="text-[44px] mt-5"
            style={{ fontFamily: "Allura" }}
          >
            {formData.groomName || "Thắng"}
          </h1>

          <p className="text-gray-400 my-1 text-lg">&</p>

          <h1
            className="text-[44px]"
            style={{ fontFamily: "Allura" }}
          >
            {formData.brideName || "Thu"}
          </h1>

          <p
            className="mt-4 text-sm tracking-[3px] text-gray-600"
            style={{ fontFamily: "Playfair Display" }}
          >
            {formData.weddingDate
              ? new Date(formData.weddingDate).toLocaleDateString("vi-VN")
              : "16 / 07 / 2025"}
          </p>

          <p
            className="text-[14px] text-gray-600 leading-[1.8] mt-6 px-3"
            style={{ fontFamily: "Playfair Display" }}
          >
            Trân trọng kính mời quý khách đến chung vui cùng gia đình chúng tôi
            trong ngày trọng đại này. Sự hiện diện của bạn là niềm hạnh phúc lớn
            nhất dành cho chúng tôi.
          </p>
        </div>

        {/* ===== RED BLOCK ===== */}
        <div className="relative bg-[#7a0f14] mt-12 text-white px-9 py-12">

          <div
            className="absolute top-0 left-0 w-full h-12 bg-[#f8f5f2]"
            style={{
              clipPath:
                "polygon(0 100%, 8% 72%, 16% 94%, 24% 70%, 32% 92%, 40% 72%, 48% 94%, 56% 70%, 64% 90%, 72% 72%, 80% 94%, 88% 74%, 96% 92%, 100% 76%, 100% 0, 0 0)",
            }}
          />

          <p className="uppercase tracking-[4px] text-xs text-center mb-4 opacity-80">
            Địa điểm tổ chức
          </p>

          <h3
            className="text-lg text-center"
            style={{ fontFamily: "Playfair Display" }}
          >
            {formData.venue || "Nhà hàng Nam Nho"}
          </h3>

          <p className="text-sm text-center mt-2 opacity-80">
            {formData.address || "Quận 1, TP. Hồ Chí Minh"}
          </p>
        </div>

        {/* ===== FOOTER IMAGE ===== */}
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={
              formData.footerImage ||
              "https://susanstripling.com/wp-content/uploads/2024/08/171_SusanStripling_Weddings-scaled.jpg"
            }
            className="w-full h-full object-cover scale-[1.05]"
          />

          <div
            className="absolute top-0 left-0 w-full h-12 bg-[#f8f5f2]"
            style={{
              clipPath:
                "polygon(0 0, 6% 38%, 14% 18%, 22% 40%, 30% 22%, 38% 42%, 46% 24%, 54% 40%, 62% 20%, 70% 38%, 78% 22%, 86% 36%, 94% 24%, 100% 32%, 100% 0, 0 0)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Template4;
