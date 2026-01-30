'use client';

import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Edit2, Share2, Home as HomeIcon, Mail, Phone, Download } from 'lucide-react';
import { useInvitation } from '../context/InvitationContext';
import Template1 from '../components/templates/Template1';
import Template2 from '../components/templates/Template2';
import Template3 from '../components/templates/Template3';
import Template4 from '../components/templates/Template4';
import Template5 from '../components/templates/Template5';

const SummaryPage = () => {
  const navigate = useNavigate();
  const { invitation } = useInvitation();
  const previewRef = useRef(null);

  // Consistent template mapping
  const templateMap = {
    'elegant-sage': Template1,
    'minimal-cream': Template2,
    'vintage-blush': Template3,
    'modern-navy': Template4,
    'black-white': Template5,
  };

  const SelectedTemplate = templateMap[invitation.template] || Template1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getTemplateName = (templateId) => {
    const names = {
      'elegant-sage': 'Sage Thanh Lịch',
      'minimal-cream': 'Kem Tối Giản',
      'vintage-blush': 'Blush Cổ Điển',
      'modern-navy': 'Navy Hiện Đại',
    };
    return names[templateId] || templateId;
  };

  return (
    <div className="bg-gradient-to-br from-[#f8f6f3] via-white to-[#f0ede8] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 bg-[#8B9D83]/10 rounded-full flex items-center justify-center">
              <CheckCircle className="text-[#8B9D83]" size={32} />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl md:text-5xl font-light text-[#2d3436] mb-4 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Thiệp Của Bạn Đã Sẵn Sàng!
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#636e72] max-w-2xl mx-auto mb-8"
          >
            Thiệp cưới đẹp của bạn đã được tạo thành công. Xem trước bên dưới và chia sẻ với khách mời.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Main Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8 border-2 border-[#8B9D83]/10"
          >
            <h2
              className="font-serif text-2xl font-light text-[#2d3436] mb-6 text-center tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Xem Trước Thiệp
            </h2>
            
            <div
              ref={previewRef}
              className="flex justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 min-h-96"
            >
              <div className="w-full max-w-sm">
                <SelectedTemplate formData={invitation.formData} />
              </div>
            </div>

            <p className="text-xs text-[#636e72] text-center mt-4">
              Đây là cách thiệp của bạn sẽ hiển thị cho khách mời
            </p>

            {/* Debug info */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-500 border border-gray-200">
                <p><strong>Template ID:</strong> {invitation.template}</p>
                <p><strong>Component:</strong> {SelectedTemplate.name}</p>
                <p><strong>Data Fields:</strong> {Object.keys(invitation.formData).filter(k => invitation.formData[k]).join(', ')}</p>
              </div>
            )}
          </motion.div>

          {/* Details Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            
            {/* Wedding Details Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#8B9D83]">
              <h3
                className="font-serif text-lg font-medium text-[#2d3436] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Chi Tiết Đám Cưới
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-[#636e72] uppercase tracking-wide text-xs font-semibold mb-1">Cặp đôi</p>
                  <p className="text-[#2d3436] font-semibold">
                    {invitation.formData.groomName || 'Chú rể'} & {invitation.formData.brideName || 'Cô dâu'}
                  </p>
                </div>

                {invitation.formData.weddingDate && (
                  <div>
                    <p className="text-[#636e72] uppercase tracking-wide text-xs font-semibold mb-1">Ngày</p>
                    <p className="text-[#2d3436] font-semibold">
                      {new Date(invitation.formData.weddingDate).toLocaleDateString('vi-VN', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                )}

                {invitation.formData.venue && (
                  <div>
                    <p className="text-[#636e72] uppercase tracking-wide text-xs font-semibold mb-1">Địa điểm</p>
                    <p className="text-[#2d3436] font-semibold">{invitation.formData.venue}</p>
                  </div>
                )}

                {invitation.formData.ceremonyTime && (
                  <div>
                    <p className="text-[#636e72] uppercase tracking-wide text-xs font-semibold mb-1">Giờ lễ</p>
                    <p className="text-[#2d3436] font-semibold">{invitation.formData.ceremonyTime}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Template Info Card */}
            <div className="bg-gradient-to-br from-[#8B9D83]/5 to-[#f8f6f3] rounded-xl shadow-lg p-6 border border-[#8B9D83]/20">
              <h3
                className="font-serif text-lg font-medium text-[#2d3436] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Mẫu Đã Chọn
              </h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#8B9D83]"></div>
                  <span className="text-[#2d3436] font-semibold">
                    {getTemplateName(invitation.template)}
                  </span>
                </div>
                <p className="text-[#636e72] text-xs">Thiết kế chuyên nghiệp với các yếu tố tùy chỉnh</p>
              </div>
            </div>

            {/* Contact Info Card */}
            {(invitation.formData.email || invitation.formData.phone) && (
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
                <h3
                  className="font-serif text-lg font-medium text-[#2d3436] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Thông Tin Liên Hệ
                </h3>

                <div className="space-y-3 text-sm">
                  {invitation.formData.email && (
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                      <p className="text-[#2d3436]">{invitation.formData.email}</p>
                    </div>
                  )}

                  {invitation.formData.phone && (
                    <div className="flex items-start gap-3">
                      <Phone size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                      <p className="text-[#2d3436]">{invitation.formData.phone}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-[#8B9D83]/10"
        >
          <h3
            className="font-serif text-2xl font-light text-[#2d3436] mb-6 text-center tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Bước Tiếp Theo?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* View & Download */}
            <Link
              to="/view/current"
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-[#8B9D83]/5 to-[#f8f6f3] border-2 border-[#8B9D83]/20 hover:border-[#8B9D83] hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-[#8B9D83]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#8B9D83] group-hover:text-white transition-colors">
                <Download size={24} />
              </div>
              <h4 className="font-semibold text-[#2d3436] mb-2">Xem & Tải Thiệp</h4>
              <p className="text-sm text-[#636e72] text-center">
                Xem chi tiết và tải PNG hoặc mã QR
              </p>
            </Link>

            {/* Edit Invitation */}
            <button
              onClick={() => navigate('/create')}
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Edit2 size={24} />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">Chỉnh Sửa</h4>
              <p className="text-sm text-blue-700 text-center">
                Thay đổi thiết kế của bạn
              </p>
            </button>

            {/* Create Another */}
            <Link
              to="/packages"
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 hover:border-amber-600 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Share2 size={24} />
              </div>
              <h4 className="font-semibold text-amber-900 mb-2">Tạo Thiệp Khác</h4>
              <p className="text-sm text-amber-700 text-center">
                Bắt đầu với mẫu khác
              </p>
            </Link>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-[#8B9D83] hover:text-[#6d7d6a] font-semibold transition-colors"
          >
            <HomeIcon size={20} />
            Về Trang Chủ
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SummaryPage;