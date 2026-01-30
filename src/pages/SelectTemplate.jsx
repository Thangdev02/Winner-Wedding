'use client';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useInvitation } from '../context/InvitationContext';

const SelectTemplate = () => {
  const navigate = useNavigate();
  const { invitation, updateTemplate } = useInvitation();

  const templates = [
    {
      id: 'elegant-sage',
      name: 'Đơn Giản - Basic',
      description: 'Tông trắng kem tinh tế, hiển thị cơ bản',
      preview: 'bg-gradient-to-br from-[#f1ead7] to-white',
      features: ['Lịch sự kiện', 'Bảng màu'],
    },
    {
      id: 'minimal-cream',
      name: 'Xanh Thiên Nhiên',
      description: 'Phong cách lãng mạn, nhẹ nhàng với gam kem - xanh',
      preview: 'bg-gradient-to-br from-[#6f7f5a] to-[#6f7f5a]',
      features: ['Thiết kế màu sắc', 'Hiện đại', 'Lãng mạn'],
    },
    {
      id: 'vintage-blush',
      name: 'Xanh Đen Sang Trọng',
      description: 'Sang trọng với sắc xanh đen thanh lịch',
      preview: 'bg-gradient-to-br from-[#475569] to-[#1e293b]',
      features: ['Bộ đếm ngược', 'Thanh lịch', 'Nam tính'],
    },
    {
      id: 'modern-navy',
      name: 'Đỏ Đô Hiện Đại',
      description: 'Đỏ dô sang trọng hiện đại cùng điểm nhấn trắng kem',
      preview: 'bg-gradient-to-br from-[#7a0f14] to-[#7a0f14]',
      features: ['Sang trọng', 'Hiện đại', 'Ánh kim'],
    },
     {
      id: 'black',
      name: 'Đen',
      description: 'Đen và Trắng sang trọng hiện đại',
      preview: 'bg-gradient-to-br from-[#ffffff] to-[#000000]',
      features: ['Sang trọng', 'Hiện đại', 'Ánh kim'],
    },
     {
      id: 'black-white',
      name: 'Đen Và Trắng',
      description: 'Đen và Trắng sang trọng hiện đại',
      preview: 'bg-gradient-to-br from-[#ffffff] to-[#000000]',
      features: ['Sang trọng', 'Hiện đại', 'Ánh kim'],
    },
  ];

  const handleSelectTemplate = (templateId) => {
    // Update template in context
    updateTemplate(templateId);
    console.log('Template selected:', templateId); // Debug log
    
    // Navigate to create page after a brief delay to ensure state updates
    setTimeout(() => {
      navigate('/create');
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f3] via-white to-[#f0ede8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#2d3436] mb-4 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Chọn Mẫu Thiệp
          </h1>
          <p className="text-lg text-[#636e72] max-w-2xl mx-auto">
            Lựa chọn phong cách thiệp cưới phù hợp nhất cho câu chuyện tình yêu của bạn.
          </p>
          
          {/* Show selected package if available */}
          {invitation.package && (
            <div className="mt-4 inline-flex items-center gap-2 bg-[#8B9D83] text-white px-4 py-2 rounded-full text-sm">
              <Check size={16} />
              <span>Package: {invitation.package}</span>
            </div>
          )}
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {templates.map((template, index) => {
            const isSelected = invitation.template === template.id;
            
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group cursor-pointer relative ${isSelected ? 'ring-4 ring-[#8B9D83] rounded-3xl' : ''}`}
                onClick={() => handleSelectTemplate(template.id)}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">

                  {/* Selected Badge */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 z-20 bg-[#8B9D83] text-white p-2 rounded-full">
                      <Check size={20} />
                    </div>
                  )}

                  {/* PREVIEW */}
                  <div className={`h-72 ${template.preview} relative flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all" />

                    <div className="z-10 text-center opacity-0 group-hover:opacity-100 transition-all">
                      <h3
                        className="font-serif text-2xl text-white mb-2 tracking-wide"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {template.name}
                      </h3>
                      <span className="text-sm text-white/80">
                        Xem trước mẫu
                      </span>
                    </div>

                    {/* Feature tags */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-all z-10">
                      {template.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/90 text-[#2d3436] text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 bg-white">
                    <h3
                      className="font-serif text-xl text-[#2d3436] mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {template.name}
                    </h3>

                    <p className="text-sm text-[#636e72] mb-5">
                      {template.description}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTemplate(template.id);
                      }}
                      className={`inline-flex items-center gap-2 font-medium transition-all w-full justify-center py-2 rounded-lg ${
                        isSelected
                          ? 'bg-[#8B9D83] text-white'
                          : 'text-[#8B9D83] hover:bg-[#8B9D83] hover:text-white border border-[#8B9D83]'
                      }`}
                    >
                      {isSelected ? 'Đã chọn' : 'Chọn mẫu này'}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continue Button */}
        {invitation.template && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <button
              onClick={() => navigate('/create')}
              className="bg-[#8B9D83] hover:bg-[#6d7d6a] text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl inline-flex items-center gap-3"
            >
              Tiếp tục tùy chỉnh
              <ArrowRight size={24} />
            </button>
          </motion.div>
        )}

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-xl"
        >
          <h3
            className="font-serif text-2xl text-[#2d3436] mb-8 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Tính Năng Mẫu Thiệp
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-medium text-[#2d3436] mb-4">
                Mỗi mẫu bao gồm:
              </h4>

              <ul className="space-y-3">
                {[
                  'Tuỳ chỉnh tên cô dâu & chú rể',
                  'Thay đổi màu sắc linh hoạt',
                  'Khu vực tải ảnh cưới',
                  'Thông tin lễ cưới đầy đủ',
                  'Tích hợp RSVP',
                  'Hiển thị đẹp trên mobile',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#8B9D83] rounded-full" />
                    <span className="text-[#636e72] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-[#2d3436] mb-4">
                Sau khi hoàn tất:
              </h4>

              <ul className="space-y-3">
                {[
                  'Tải ảnh PNG hoặc JPEG',
                  'Chia sẻ link thiệp online',
                  'Khách mời RSVP trực tuyến',
                  'Theo dõi phản hồi',
                  'Xuất nhiều định dạng',
                  'Chất lượng in ấn cao',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#8B9D83] rounded-full" />
                    <span className="text-[#636e72] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SelectTemplate;