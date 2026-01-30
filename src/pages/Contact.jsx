'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-sage-900 mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-lg text-gray-600">
            WinnerWedding luôn sẵn sàng hỗ trợ bạn mọi lúc.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-serif text-2xl font-bold text-sage-900 mb-8">
                Thông tin liên hệ
              </h2>

              {[
                { icon: Mail, label: 'Email', value: 'thangdev02@gmail.com.com' },
                { icon: Phone, label: 'Điện thoại', value: '+84 949 450 800' },
                { icon: MapPin, label: 'Địa chỉ', value: 'Rạch Giá, An Giang, Việt Nam' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
                      <Icon className="text-sage-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sage-900">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-sage-50 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-sage-900 mb-4">
                Giờ làm việc
              </h3>
              <p><b>Thứ 2 - Thứ 6:</b> 9:00 - 18:00</p>
              <p><b>Thứ 7:</b> 9:00 - 16:00</p>
              <p><b>Chủ nhật:</b> Nghỉ</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="font-serif text-2xl font-bold text-sage-900 mb-6">
              Gửi tin nhắn cho chúng tôi
            </h2>

            {submitted ? (
              <div className="bg-sage-50 p-6 rounded-xl text-center">
                <p className="font-semibold text-sage-900">
                  Gửi thành công!
                </p>
                <p className="text-gray-600">
                  Chúng tôi sẽ phản hồi bạn sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: 'Họ tên', name: 'name', placeholder: 'Nhập họ tên' },
                  { label: 'Email', name: 'email', placeholder: 'Email của bạn' },
                  { label: 'Tiêu đề', name: 'subject', placeholder: 'Nội dung liên hệ' }
                ].map((f, i) => (
                  <div key={i}>
                    <label className="text-sm font-semibold">{f.label}</label>
                    <input
                      name={f.name}
                      value={formData[f.name]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-500 outline-none"
                    />
                  </div>
                ))}

                <div>
                  <label className="text-sm font-semibold">Tin nhắn</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nhập nội dung..."
                    className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sage-500 outline-none resize-none"
                  />
                </div>

                <button className="w-full bg-sage-600 text-white py-3 rounded-lg flex justify-center gap-2 hover:bg-sage-700">
                  <Send size={18} /> Gửi liên hệ
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
