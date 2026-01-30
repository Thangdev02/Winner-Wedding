'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-16"
        >
          <h1 className="font-serif text-5xl font-bold text-sage-900 mb-4">
            Về WinnerWedding
          </h1>
          <p className="text-lg text-gray-600">
            Nền tảng tạo thiệp cưới hiện đại và tinh tế cho các cặp đôi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="font-serif text-3xl font-bold mb-4">Sứ mệnh</h2>
            <p className="text-gray-600 mb-4">
              WinnerWedding giúp các cặp đôi tạo thiệp cưới đẹp, cá nhân hoá và tiết kiệm thời gian.
            </p>
            <p className="text-gray-600">
              Chúng tôi mang đến trải nghiệm thiết kế đơn giản, nhanh chóng và đầy cảm xúc.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-6">
              Vì sao chọn chúng tôi?
            </h3>
            <ul className="space-y-3">
              {[
                'Kho mẫu thiệp cao cấp',
                'Tùy chỉnh dễ dàng',
                'Xuất file nhanh chóng',
                'Chi phí hợp lý',
                'Hỗ trợ tận tâm',
              ].map((i, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-sage-600">✔</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { number: '5000+', label: 'Cặp đôi hài lòng' },
            { number: '15+', label: 'Mẫu thiệp đẹp' },
            { number: '99%', label: 'Tỷ lệ hài lòng' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <p className="font-serif text-4xl text-sage-600 mb-2">{stat.number}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="bg-sage-50 rounded-2xl p-10"
        >
          <h2 className="font-serif text-3xl font-bold mb-4">
            Câu chuyện của chúng tôi
          </h2>
          <p className="text-gray-700 leading-relaxed">
            WinnerWedding ra đời nhằm giúp các cặp đôi tạo thiệp cưới đẹp mà không cần tốn nhiều chi phí hay kỹ năng thiết kế. 
            Chúng tôi kết hợp công nghệ hiện đại và thẩm mỹ tinh tế để mang lại trải nghiệm tuyệt vời nhất cho ngày trọng đại của bạn.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
