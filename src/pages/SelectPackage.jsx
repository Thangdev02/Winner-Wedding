'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useInvitation } from '../context/InvitationContext';

const SelectPackage = () => {
  const { updateInvitation } = useInvitation();

  const packages = [
    {
      id: 'classic',
      name: 'Cổ Điển',
      price: '449.000đ',
      description: 'Thanh lịch, nhẹ nhàng, truyền thống',
      features: [
        '2 mẫu thiệp đẹp',
        'Tuỳ chỉnh nội dung',
        'Tải ảnh & văn bản',
        'Tải PNG chất lượng cao',
        'Chia sẻ mạng xã hội',
      ],
      featured: false,
    },
    {
      id: 'premium',
      name: 'Cao Cấp',
      price: '599.000đ',
      description: 'Đầy đủ cho ngày trọng đại',
      features: [
        'Mẫu thiệp cao cấp',
        'Nhập tên khách mời không giới hạn',
        'Tuỳ chỉnh không giới hạn',
        'Ảnh HD',
        'Xuất nhiều định dạng',
        'Link web riêng',
        'Thu thập RSVP',
        'Hỗ trợ ưu tiên',
      ],
      featured: true,
    },
    {
      id: 'luxury',
      name: 'Sang Trọng',
      price: '999.000đ',
      description: 'Trải nghiệm đẳng cấp nhất',
      features: [
        '6 mẫu độc quyền',
        'Nhập tên khách mời không giới hạn',
        'Thiết kế theo yêu cầu',
        'Chỉnh sửa không giới hạn',
        'Xuất mọi định dạng',
        'RSVP nâng cao',
        'Quản lý khách mời',
        'Hỗ trợ riêng',
        'Album số cưới',
      ],
      featured: false,
    },
  ];

  const handleSelectPackage = (packageId) => {
    updateInvitation({ package: packageId });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f3] via-white to-[#f0ede8] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
            Chọn Gói Thiệp Cưới
          </h1>
          <p className="text-lg text-[#636e72] max-w-2xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp để tạo nên thiệp cưới hoàn hảo cho ngày trọng đại của bạn.
          </p>
        </motion.div>

        {/* PACKAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl overflow-hidden transition-all ${
                pkg.featured
                  ? 'ring-2 ring-[#8B9D83] shadow-2xl scale-105'
                  : 'shadow-xl hover:shadow-2xl hover:-translate-y-1'
              }`}
            >
              {pkg.featured && (
                <div className="bg-[#8B9D83] text-white text-center py-2 font-medium tracking-wide">
                  Phổ Biến Nhất
                </div>
              )}

              <div className="bg-gradient-to-br from-[#f8f6f3] to-white p-8">
                <h2
                  className="font-serif text-2xl font-medium text-[#2d3436] mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {pkg.name}
                </h2>

                <p className="text-[#636e72] text-sm mb-6">
                  {pkg.description}
                </p>

                <div className="mb-8">
                  <span
                    className="font-serif text-5xl font-light text-[#8B9D83]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {pkg.price}
                  </span>
                </div>

                <Link
                  to="/templates"
                  onClick={() => handleSelectPackage(pkg.id)}
                  className={`block w-full py-3 rounded-lg font-medium text-center transition-all mb-8 ${
                    pkg.featured
                      ? 'bg-[#8B9D83] text-white hover:bg-[#6d7d6a]'
                      : 'border border-[#8B9D83] text-[#8B9D83] hover:bg-[#f8f6f3]'
                  }`}
                >
                  Chọn Gói
                </Link>

                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-[#8B9D83] flex-shrink-0 mt-1" size={18} />
                      <span className="text-[#636e72] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-10 shadow-xl"
        >
          <h3
            className="font-serif text-2xl font-medium text-[#2d3436] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Tất Cả Gói Bao Gồm
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Mẫu thiệp thiết kế chuyên nghiệp',
              'Tuỳ chỉnh nội dung & màu sắc',
              'Tải ảnh và bố cục linh hoạt',
              'Xem trước thời gian thực',
              'Tải ảnh chất lượng cao',
              'Hiển thị đẹp trên mobile',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#8B9D83] rounded-full" />
                <span className="text-[#636e72] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SelectPackage;
