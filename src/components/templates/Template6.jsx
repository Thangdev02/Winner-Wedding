import React from "react";

const Template6 = ({ formData }) => {
  const formatDate = (date) => {
    if (!date) return "23 Tháng 12, 2024";
    return new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-xl overflow-hidden font-serif">

      {/* ===== HERO ===== */}
      <div className="relative h-[520px]">
        <img
          src={formData.coupleImage || "/placeholder.svg"}
          className="w-full h-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-black/35 flex flex-col justify-center items-center text-white px-6 text-center">
          <p className="tracking-[4px] text-xs mb-3 uppercase">
            Save The Date
          </p>

          <h1 className="font-[cursive] text-4xl mb-4">
            {formData.brideName || "Cô Dâu"} & {formData.groomName || "Chú Rể"}
          </h1>

          <p className="tracking-widest text-sm">
            {formatDate(formData.weddingDate)}
          </p>
        </div>
      </div>

      {/* ===== INVITE ===== */}
      <div className="px-8 py-14 text-center">
        <h2 className="font-[cursive] text-3xl mb-4">
          Chúng tôi sắp kết hôn
        </h2>

        <p className="text-xs text-gray-500 leading-relaxed mb-6">
          Trân trọng kính mời bạn và gia đình đến tham dự lễ cưới của chúng tôi.
          Sự hiện diện của bạn là niềm vinh hạnh cho gia đình hai bên.
        </p>

        <div className="space-y-2 text-sm tracking-widest">
          <p>Ngày {formatDate(formData.weddingDate)}</p>
          <p>{formData.venue || "Địa điểm tổ chức lễ cưới"}</p>
          <p className="text-xs text-gray-500">
            {formData.address || "Địa chỉ chi tiết"}
          </p>
        </div>

        <button className="mt-8 border px-10 py-2 text-xs tracking-widest hover:bg-black hover:text-white transition">
          XÁC NHẬN THAM DỰ
        </button>
      </div>

      {/* ===== DIVIDER IMAGE ===== */}
      <div className="h-[240px]">
        <img
          src={formData.storyImage || formData.coupleImage || "/placeholder.svg"}
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* ===== STORY ===== */}
      <div className="px-8 py-14 text-center">
        <h2 className="font-[cursive] text-3xl mb-6">Câu chuyện của chúng tôi</h2>

        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          {formData.story ||
            "Chúng tôi gặp nhau như một định mệnh. Từ những điều giản dị nhất, tình yêu lớn dần và đưa chúng tôi đến ngày hôm nay."}
        </p>

        <p className="text-xs text-gray-500 leading-relaxed">
          {formData.story2 ||
            "Hôn nhân không chỉ là tình yêu, mà còn là sự đồng hành, chia sẻ và cùng nhau già đi theo năm tháng."}
        </p>
      </div>

      {/* ===== SCHEDULE ===== */}
      <div className="px-8 py-14 bg-gray-50 text-center">
        <h2 className="font-[cursive] text-3xl mb-8">Chương trình lễ cưới</h2>

        <div className="space-y-6 text-sm">
          <div>
            <p className="tracking-widest">LỄ GIA TIÊN</p>
            <p className="text-xs text-gray-500">
              {formData.ceremonyTime || "08:00 - Tại nhà riêng"}
            </p>
          </div>

          <div>
            <p className="tracking-widest">LỄ THÀNH HÔN</p>
            <p className="text-xs text-gray-500">
              {formData.weddingTime || "10:00 - Tại nhà hàng"}
            </p>
          </div>

          <div>
            <p className="tracking-widest">TIỆC CƯỚI</p>
            <p className="text-xs text-gray-500">
              {formData.receptionTime || "18:00 - Khai tiệc"}
            </p>
          </div>
        </div>
      </div>

      {/* ===== GALLERY ===== */}
      <div className="px-6 py-14">
        <h2 className="font-[cursive] text-3xl text-center mb-6">
          Khoảnh khắc
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={formData.gallery?.[i] || formData.coupleImage || "/placeholder.svg"}
              className="h-40 w-full object-cover grayscale"
            />
          ))}
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div className="px-8 py-14 text-center bg-gray-100">
        <h2 className="font-[cursive] text-3xl mb-4">
          {formData.brideName || "Cô Dâu"} & {formData.groomName || "Chú Rể"}
        </h2>

        <p className="text-xs text-gray-500 mb-4">
          Rất hân hạnh được đón tiếp bạn trong ngày trọng đại của chúng tôi.
        </p>

        <p className="tracking-widest text-xs">Trân trọng</p>
      </div>
    </div>
  );
};

export default Template6;
