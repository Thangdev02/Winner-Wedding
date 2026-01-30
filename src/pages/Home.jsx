'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, MapPin, Gift, Users, MessageCircle, Image as ImageIcon, Heart, Music, Camera, Utensils, Star } from 'lucide-react';
import InvitationCard3D from '../components/InvitationCard3D';

const Home = () => {
  const [currentSection, setCurrentSection] = useState('invitation');

  const sections = [
    {
      id: 'invitation',
      title: 'THIỆP CƯỚI',
      icon: Calendar,
      content: {
        title: 'Trân Trọng Kính Mời',
        description:
          'Chúng tôi rất hân hạnh được mời bạn đến chung vui trong ngày trọng đại của mình.',
        details: ['Trang phục lịch sự', 'Dùng tiệc', 'Khiêu vũ'],
      },
    },
    {
      id: 'dresscode',
      title: 'TRANG PHỤC',
      icon: Users,
      content: {
        title: 'Phong Cách',
        description: 'Gam màu pastel, nhẹ nhàng và tinh tế.',
        colors: ['#8B9D83', '#A8B5A0', '#C9B8A8', '#D4A88C'],
        colorNames: ['Sage', 'Rêu', 'Cát', 'Đất'],
      },
    },
    {
      id: 'program',
      title: 'CHƯƠNG TRÌNH',
      icon: Calendar,
      content: {
        title: 'Lịch Trình',
        schedule: [
          { time: '14:00', event: 'Đón khách' },
          { time: '15:00', event: 'Lễ cưới' },
          { time: '17:00', event: 'Khai tiệc' },
        ],
      },
    },
    {
      id: 'location',
      title: 'ĐỊA ĐIỂM',
      icon: MapPin,
      content: {
        title: 'Château de Lumière',
        address: '123 Garden Lane',
        city: 'Provence',
        description: 'Không gian cổ kính, lãng mạn.',
      },
    },
  ];

  const features = [
    {
      icon: Heart,
      title: 'Thiết Kế Độc Đáo',
      description: 'Mỗi thiệp cưới được thiết kế riêng biệt, phản ánh cá tính của từng cặp đôi'
    },
    {
      icon: Camera,
      title: 'Tương Tác 3D',
      description: 'Khách mời có thể xoay, kéo và khám phá thiệp cưới theo cách hoàn toàn mới'
    },
    {
      icon: Music,
      title: 'Nhạc Nền',
      description: 'Tùy chỉnh nhạc nền yêu thích để tạo không khí lãng mạn'
    },
    {
      icon: Gift,
      title: 'Quà Tặng Số',
      description: 'Nhận lời chúc và quà cưới trực tuyến một cách tiện lợi'
    },
    {
      icon: MessageCircle,
      title: 'Xác Nhận Tham Dự',
      description: 'Khách mời dễ dàng xác nhận tham dự qua thiệp điện tử'
    },
    {
      icon: ImageIcon,
      title: 'Thư Viện Ảnh',
      description: 'Chia sẻ những khoảnh khắc đẹp của hai bạn với mọi người'
    }
  ];

  const testimonials = [
    {
      name: 'Minh & Hương',
      date: 'Tháng 12, 2024',
      text: 'Thiệp cưới 3D thật tuyệt vời! Bạn bè và gia đình đều rất ấn tượng với sự sáng tạo này.',
      rating: 5
    },
    {
      name: 'Tuấn & Linh',
      date: 'Tháng 11, 2024',
      text: 'Dịch vụ chuyên nghiệp, thiết kế đẹp. Chúng tôi rất hài lòng với lựa chọn của mình.',
      rating: 5
    },
    {
      name: 'Hoàng & Mai',
      date: 'Tháng 10, 2024',
      text: 'Thiệp cưới hiện đại, sang trọng. Đội ngũ hỗ trợ rất nhiệt tình và nhanh chóng.',
      rating: 5
    }
  ];

  const packages = [
    {
      name: 'Cơ Bản',
      price: '2.990.000đ',
      features: [
        'Thiết kế 3D cơ bản',
        'Tối đa 4 trang nội dung',
        'Nhạc nền 1 bài',
        'Hỗ trợ kỹ thuật',
        'Miễn phí hosting 1 năm'
      ]
    },
    {
      name: 'Cao Cấp',
      price: '4.990.000đ',
      features: [
        'Thiết kế 3D độc quyền',
        'Không giới hạn trang',
        'Nhạc nền tùy chỉnh',
        'Thư viện ảnh',
        'Form xác nhận tham dự',
        'Hỗ trợ 24/7',
        'Miễn phí hosting 2 năm'
      ],
      popular: true
    },
    {
      name: 'Doanh Nghiệp',
      price: 'Liên hệ',
      features: [
        'Thiết kế hoàn toàn custom',
        'Tích hợp API riêng',
        'Video 3D',
        'Analytics chi tiết',
        'Chuyên viên tư vấn riêng',
        'Hosting không giới hạn'
      ]
    }
  ];

  const stats = [
    { number: '1,500+', label: 'Cặp đôi tin tưởng' },
    { number: '98%', label: 'Khách hàng hài lòng' },
    { number: '24/7', label: 'Hỗ trợ nhanh chóng' },
    { number: '100%', label: 'Thiết kế độc quyền' }
  ];

  const [content, setContent] = useState({
  groomName: "Muhamad Reyhan",
  brideName: "Junitasari Rahmayanti",
  date: "07.08.2021",
  venue: "Masjid Istiqlal Islam",
  message: "Baarakallahu laka wa baaraka 'alaika"
});


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f3] via-white to-[#f0ede8]">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl w-full">

          {/* 3D INVITATION CARD */}
          <div className="flex justify-center">
            <InvitationCard3D
  currentSection={currentSection}
  customContent={content}
/>

          </div>

          {/* CONTENT */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-6xl mb-6"
            >
              Tạo <span className="text-[#8B9D83]">Thiệp Cưới 3D</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8 max-w-lg text-lg"
            >
              Thiệp có thể xoay, kéo, tương tác như sản phẩm 3D hiện đại. Tạo ấn tượng đặc biệt cho khách mời trong ngày trọng đại của bạn.
            </motion.p>

            <div className="space-y-3 mb-8">
              {sections.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <motion.button
                    key={s.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    onClick={() => setCurrentSection(s.id)}
                    className={`w-full flex justify-between p-4 rounded-lg transition-all ${
                      currentSection === s.id
                        ? 'bg-[#8B9D83] text-white shadow-lg'
                        : 'bg-white border hover:border-[#8B9D83]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={18} /> {s.title}
                    </span>
                    <ChevronRight size={18} />
                  </motion.button>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <Link to="/packages" className="bg-[#8B9D83] text-white px-8 py-4 rounded-lg hover:bg-[#7a8c74] transition-colors shadow-lg">
                Bắt đầu ngay
              </Link>
              <Link to="/about" className="border border-[#8B9D83] px-8 py-4 rounded-lg hover:bg-[#8B9D83] hover:text-white transition-colors">
                Tìm hiểu thêm
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#8B9D83] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif mb-4">Tính Năng Nổi Bật</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Khám phá những tính năng độc đáo giúp thiệp cưới của bạn trở nên đặc biệt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#8B9D83] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-[#8B9D83]" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif mb-4">Cảm Nhận Khách Hàng</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hàng ngàn cặp đôi đã tin tưởng và hài lòng với dịch vụ của chúng tôi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-[#f8f6f3] to-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#8B9D83" className="text-[#8B9D83]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#8B9D83] to-[#6d7d6a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif mb-6">
              Sẵn sàng tạo thiệp cưới độc đáo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Bắt đầu ngay hôm nay và tạo ấn tượng khó quên cho khách mời của bạn
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/packages" 
                className="bg-white text-[#8B9D83] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Bắt đầu miễn phí
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#8B9D83] transition-colors"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-[#2d3436] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Thiệp Cưới 3D</h3>
              <p className="text-gray-400">
                Tạo những thiệp cưới độc đáo và đầy ấn tượng cho ngày trọng đại của bạn
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/packages" className="hover:text-white">Gói dịch vụ</Link></li>
                <li><Link to="/templates" className="hover:text-white">Mẫu thiệp</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Bảng giá</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/faq" className="hover:text-white">Câu hỏi thường gặp</Link></li>
                <li><Link to="/contact" className="hover:text-white">Liên hệ</Link></li>
                <li><Link to="/guide" className="hover:text-white">Hướng dẫn</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kết nối</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Thiệp Cưới 3D. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;