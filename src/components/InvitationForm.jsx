'use client';

import React from 'react';
import { useInvitation } from '../context/InvitationContext';
import { Upload } from 'lucide-react';

const InvitationForm = ({ currentStep }) => {
  const { invitation, updateFormData } = useInvitation();
  const { formData } = invitation;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleImageUpload = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateFormData({ [imageType]: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <AnimateSteps currentStep={currentStep}>
        {/* Step 0: Basic Information */}
        {currentStep === 0 && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-sage-900 mb-6">
              Thông Tin Cô Dâu & Chú Rễ
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tên Chú Rễ *
              </label>
              <input
                type="text"
                name="groomName"
                value={formData.groomName}
                onChange={handleInputChange}
                placeholder="Enter groom's name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tên Cô Dâu *
              </label>
              <input
                type="text"
                name="brideName"
                value={formData.brideName}
                onChange={handleInputChange}
                placeholder="Enter bride's name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        )}

        {/* Step 1: Wedding Details */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-sage-900 mb-6">
              Thông Tin Lễ Cưới
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ngày Cưới *
              </label>
              <input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lễ Cưới
              </label>
              <input
                type="time"
                name="ceremonyTime"
                value={formData.ceremonyTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tiệc Cưới
              </label>
              <input
                type="time"
                name="receptionTime"
                value={formData.receptionTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Địa Điểm *
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                placeholder="Enter venue name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Địa Chỉ
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter venue address"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition"
              ></textarea>
            </div>

           
          </div>
        )}

        {/* Step 2: Style & Colors */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-sage-900 mb-6">
             Chọn Dress code ( Nếu Cần )
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Màu Cơ Bản
              </label>
              <div className="flex gap-4 flex-wrap">
                {[
                  { name: 'Sage', value: '#5d9141' },
                  { name: 'Blush', value: '#e8a8b0' },
                  { name: 'Navy', value: '#1e293b' },
                  { name: 'Cream', value: '#e8ddb3' },
                  { name: 'Emerald', value: '#047857' },
                ].map(color => (
                  <button
                    key={color.value}
                    onClick={() => updateFormData({ color: color.value })}
                    className={`w-12 h-12 rounded-full border-2 transition-transform ${
                      formData.color === color.value
                        ? 'border-gray-800 scale-110'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <div className="mt-4">
                <input
                  type="color"
                  value={formData.color}
                  onChange={(e) => updateFormData({ color: e.target.value })}
                  className="w-16 h-16 cursor-pointer rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Images */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-sage-900 mb-6">
             Thêm Hình Ảnh Cưới
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Ảnh Cặp Dôi
              </label>
              <label className="block border-2 border-dashed border-sage-300 rounded-lg p-6 text-center cursor-pointer hover:border-sage-500 transition">
                <Upload size={32} className="mx-auto mb-2 text-sage-600" />
                <span className="text-gray-700">
                  {formData.coupleImage ? 'Đổi Ảnh' : 'Click to upload couple photo'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'coupleImage')}
                  className="hidden"
                />
              </label>
              {formData.coupleImage && (
                <img
                  src={formData.coupleImage || "/placeholder.svg"}
                  alt="Couple"
                  className="mt-4 w-full h-40 object-cover rounded-lg"
                />
              )}
            </div>

            
          </div>
        )}
      </AnimateSteps>
    </div>
  );
};

// Animation wrapper for steps
const AnimateSteps = ({ children, currentStep }) => {
  return (
    <>
      {children}
    </>
  );
};

export default InvitationForm;
