import React from "react";

const Template1 = ({ formData }) => {
  const getCalendarDays = () => {
    if (!formData.weddingDate) return [];
    const date = new Date(formData.weddingDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const start = (firstDay.getDay() + 6) % 7;

    const days = [];
    for (let i = 0; i < start; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  };

  const calendarDays = getCalendarDays();
  const weddingDay = formData.weddingDate
    ? new Date(formData.weddingDate).getDate()
    : null;

  return (
    <div className="w-full max-w-sm mx-auto bg-[#faf9f7] rounded-xl shadow-xl overflow-hidden">
      {/* IMAGE */}
      <div className="relative h-[420px]">
        <img
          src={formData.coupleImage || "/placeholder.svg"}
          alt="Couple"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        {/* NAMES */}
        <div className="text-center mb-6">
          <h1 className="font-serif text-3xl tracking-widest text-[#3f4a3c]">
            {formData.groomName || "CHÚ RỂ"}
          </h1>
          <p className="my-2 text-[#9b9b9b]">&</p>
          <h1 className="font-serif text-3xl tracking-widest text-[#3f4a3c]">
            {formData.brideName || "CÔ DÂU"}
          </h1>
        </div>

        {/* DATE */}
        {formData.weddingDate && (
          <p className="text-center font-serif text-[#6b6b6b] mb-6 tracking-widest">
            {new Date(formData.weddingDate).toLocaleDateString("vi-VN")}
          </p>
        )}

        {/* COLORS */}
        <div className="flex justify-center gap-3 mb-8">
          {["#6b7b6a", "#efe6d8", "#e7c9c0", "#444"].map((c, i) => (
            <span
              key={i}
              className="w-5 h-5 rounded-full"
              style={{ background: c }}
            />
          ))}
        </div>

        {/* CALENDAR */}
        <div className="mb-8">
          <h3 className="text-center font-serif tracking-widest text-sm mb-4">
            TRÂN TRỌNG KÍNH MỜI
          </h3>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-center text-xs mb-3 tracking-widest">
              {new Date(formData.weddingDate).toLocaleDateString("vi-VN", {
                month: "long",
                year: "numeric",
              })}
            </p>

            <div className="grid grid-cols-7 gap-1 text-xs text-center">
              {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
                <div key={d} className="text-gray-400">
                  {d}
                </div>
              ))}

              {calendarDays.map((day, i) => (
                <div
                  key={i}
                  className={`h-7 flex items-center justify-center rounded-full ${
                    day === weddingDay
                      ? "bg-[#6b7b6a] text-white"
                      : "text-gray-600"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOCATION */}
        {(formData.venue || formData.address) && (
          <div className="mb-8 text-center">
            <h3 className="font-serif tracking-widest mb-4">
              ĐỊA ĐIỂM TỔ CHỨC
            </h3>

            <img
              src={formData.coupleImage || "/placeholder.svg"}
              className="h-32 w-full object-cover rounded-lg mb-3"
            />

            <h4 className="font-serif">{formData.venue}</h4>
            <p className="text-xs text-gray-600">{formData.address}</p>

            <div className="flex justify-around mt-4 text-xs">
              <div>
                <p className="text-gray-400">Lễ cưới</p>
                <p>{formData.ceremonyTime}</p>
              </div>
              <div>
                <p className="text-gray-400">Tiệc cưới</p>
                <p>{formData.receptionTime}</p>
              </div>
            </div>
          </div>
        )}

        {/* RSVP */}
      
      </div>
    </div>
  );
};

export default Template1;
