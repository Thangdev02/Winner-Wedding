'use client';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInvitation } from '../context/InvitationContext';
import InvitationForm from '../components/InvitationForm';
import InvitationPreview from '../components/InvitationPreview';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';

const CreateInvitation = () => {
  const navigate = useNavigate();
  const { invitation } = useInvitation();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 'basic', label: 'Thông Tin Cơ Bản' },
    { id: 'details', label: 'Chi Tiết Đám Cưới' },
    { id: 'style', label: 'Phong Cách & Màu Sắc' },
    { id: 'images', label: 'Hình Ảnh' },
  ];

  // Check if template is selected
  useEffect(() => {
    if (!invitation.template) {
      console.warn('No template selected, redirecting...');
      navigate('/templates');
    } else {
      console.log('Current template:', invitation.template);
      console.log('Current form data:', invitation.formData);
    }
  }, [invitation.template, navigate]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    console.log('Saving invitation:', invitation);
    navigate('/summary');
  };

  const isFormValid = () => {
    const { groomName, brideName, weddingDate, venue } = invitation.formData;
    return groomName && brideName && weddingDate && venue;
  };

  if (!invitation.template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8f6f3] to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#8B9D83] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="font-serif text-2xl text-[#2d3436]">
            Đang tải...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f3] via-white to-[#f0ede8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1
            className="font-serif text-4xl md:text-5xl font-light text-[#2d3436] mb-4 text-center tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Tạo Thiệp Mời
          </h1>
          <p className="text-center text-[#636e72] mb-2">
            Mẫu: {invitation.template ? invitation.template.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : ''}
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between gap-2 md:gap-4 mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <motion.div
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold cursor-pointer transition-all ${
                    index <= currentStep
                      ? 'bg-[#8B9D83] text-white shadow-lg'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                  onClick={() => index < currentStep && setCurrentStep(index)}
                  whileHover={index < currentStep ? { scale: 1.1 } : {}}
                  whileTap={index < currentStep ? { scale: 0.95 } : {}}
                >
                  {index + 1}
                </motion.div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded transition-colors ${
                      index < currentStep ? 'bg-[#8B9D83]' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#636e72] font-medium">
              Bước {currentStep + 1} / {steps.length}: {steps[currentStep].label}
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form Section */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#8B9D83]/10"
          >
            <InvitationForm currentStep={currentStep} />

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentStep === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                <ArrowLeft size={18} />
                Quay lại
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#8B9D83] text-white rounded-lg font-semibold hover:bg-[#6d7d6a] transition-all hover:shadow-lg"
                >
                  Tiếp theo
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  disabled={!isFormValid()}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    isFormValid()
                      ? 'bg-[#8B9D83] text-white hover:bg-[#6d7d6a] hover:shadow-lg'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Save size={18} />
                  Hoàn thành
                </button>
              )}
            </div>

            {/* Validation message */}
            {currentStep === steps.length - 1 && !isFormValid() && (
              <p className="text-sm text-red-600 mt-3 text-center">
                Vui lòng điền đầy đủ: Tên cô dâu, chú rể, ngày cưới và địa điểm
              </p>
            )}
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="sticky top-24 h-fit"
          >
            <InvitationPreview />
            
            {/* Quick Actions */}
            <div className="mt-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-[#2d3436] mb-3 text-sm">Hành động nhanh</h4>
              <div className="space-y-2 text-xs">
                <button
                  onClick={() => navigate('/templates')}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-[#636e72] transition-colors"
                >
                  🔄 Đổi mẫu thiệp
                </button>
                <button
                  onClick={handleSave}
                  disabled={!isFormValid()}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    isFormValid()
                      ? 'hover:bg-gray-50 text-[#636e72]'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                >
                  💾 Lưu & xem kết quả
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvitation;