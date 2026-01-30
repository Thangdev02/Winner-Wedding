import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="bg-[var(--olive-dark)] text-black shadow-lg relative overflow-visible"
    >
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide z-10">
          WinnerWedding
        </Link>

        {/* ===== FLOWER HANGING ===== */}
        <motion.img
          src="https://freepngimg.com/download/wedding/28227-9-wedding-flower-image.png"
          alt="flower"
          className="
            absolute 
            left-2/3 
            -translate-x-1/2
            top--2
            w-64 
            opacity-80 
            cursor-pointer
          "
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: 1, 
            y: [0, 6, 0], 
            rotate: [0, 2, 0] 
          }}
      
          whileHover={{ scale: 1.15, rotate: 5 }}
        />

        {/* Menu */}
        <div className="space-x-8 z-10">
          <Link to="/home" className="hover:text-[var(--gold)] transition">Trang Chủ</Link>
          <Link to="/about" className="hover:text-[var(--gold)] transition">Giới thiệu</Link>
          <Link to="/contact" className="hover:text-[var(--gold)] transition">Liên hệ</Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
