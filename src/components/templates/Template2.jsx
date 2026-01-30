import React from "react";

const Template2 = ({ formData }) => {
  return (
    <div className="min-h-screen bg-[#6f7f5a] flex items-center justify-center py-14">
      <div className="flex gap-10 scale-[0.95]">

        {/* ================= LEFT CARD ================= */}
        <div className="w-[360px] min-h-[720px] bg-[#f7f8f3] rounded-[28px] p-8 relative shadow-2xl flex flex-col justify-between overflow-hidden">

          {/* flowers */}
          <img
            src="https://png.pngtree.com/png-clipart/20230710/ourmid/pngtree-flowers-png-image_7506581.png"
            className="absolute top-0 left-0 w-40 opacity-80"
          />
          <img
            src="https://www.pikpng.com/pngl/b/379-3798122_pink-flower-png-tumblr.png"
            className="absolute bottom-0 right-0 w-40 opacity-80"
          />

          <div className="text-center space-y-4 z-10">
            <p className="uppercase tracking-[4px] text-xs text-gray-500">
              Thiệp mời đám cưới
            </p>

            <h1 className="font-serif text-4xl tracking-wide">
              {formData.groomName || "Thang"}
            </h1>

            <p className="text-gray-400 text-xl">&</p>

            <h1 className="font-serif text-4xl tracking-wide">
              {formData.brideName || "Thu"}
            </h1>

            <p className="text-sm tracking-widest text-gray-600 mt-2">
              {formData.weddingDate
                ? new Date(formData.weddingDate).toLocaleDateString("vi-VN")
                : "30/01/2026"}
            </p>

            <p className="text-sm leading-relaxed text-gray-600 px-6 mt-6">
              Trân trọng kính mời quý khách đến tham dự lễ thành hôn của chúng tôi.
              Sự hiện diện của bạn là niềm vinh hạnh cho gia đình hai bên.
            </p>
          </div>

          {formData.coupleImage && (
            <img
              src={formData.coupleImage}
              className="w-full h-52 object-cover rounded-2xl mt-6 z-10"
            />
          )}

          <div className="text-center mt-6 z-10">
            <p className="uppercase tracking-widest text-xs text-gray-500">
              Địa điểm tổ chức
            </p>
            <p className="font-serif text-lg mt-1">
              {formData.venue || "Nhà Hàng Nam Nho"}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {formData.address || "123 Nguyễn Văn A, Quận 1, TP.HCM"}
            </p>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="w-[360px] min-h-[720px] bg-[#f7f8f3] rounded-[28px] p-8 relative shadow-2xl overflow-hidden">

          {/* flowers */}
          <img
            src="https://png.pngtree.com/png-clipart/20230710/ourmid/pngtree-flowers-png-image_7506581.png"
            className="absolute top-0 right-0 w-40 opacity-80"
          />
          <img
            src="https://www.pikpng.com/pngl/b/379-3798122_pink-flower-png-tumblr.png"
            className="absolute bottom-0 left-0 w-40 opacity-80"
          />

          <div className="text-center space-y-6 z-10">
            <p className="uppercase tracking-[4px] text-xs text-gray-500">
              Thông tin buổi lễ
            </p>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Thời gian
              </p>
              <p className="font-serif text-xl mt-1">
                {formData.ceremonyTime || "18:00"} -{" "}
                {formData.receptionTime || "21:00"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Ngày cưới
              </p>
              <p className="font-serif text-xl mt-1">
                {formData.weddingDate
                  ? new Date(formData.weddingDate).toLocaleDateString("vi-VN", {
                      weekday: "long",
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                  : "Thứ Sáu, 30/01/2026"}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Địa điểm
              </p>
              <p className="font-serif text-xl mt-1">
                {formData.venue || "Nhà Hàng Nam Nho"}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {formData.address || "123 Nguyễn Văn A, Quận 1, TP.HCM"}
              </p>
            </div>
          </div>

          {formData.coupleImage && (
            <img
              src={formData.coupleImage}
              className="w-full h-60 object-cover rounded-2xl mt-10 z-10"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Template2;
