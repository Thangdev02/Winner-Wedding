'use client';

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Share2, Edit2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import { useInvitation } from '../context/InvitationContext';
import Template1 from '../components/templates/Template1';
import Template2 from '../components/templates/Template2';
import Template3 from '../components/templates/Template3';
import Template4 from '../components/templates/Template4';
import Template5 from '../components/templates/Template5';
import Template6 from '../components/templates/Template6';

const ViewInvitation = () => {
  const navigate = useNavigate();
  const invitationRef = useRef(null);
  const { invitation } = useInvitation();
  const { template, formData } = invitation;

  const templates = {
    'elegant-sage': Template1,
    'minimal-cream': Template2,
    'vintage-blush': Template3,
    'modern-navy': Template4,
    'black': Template5,
    'black-white': Template6,

  };

  const SelectedTemplate = templates[template] || Template1;

  const handleDownload = async () => {
    if (!invitationRef.current) return;

    try {
      const canvas = await html2canvas(invitationRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
      });

      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `wedding-invitation-${Date.now()}.png`;
      link.click();
    } catch (error) {
      console.error('Error downloading invitation:', error);
      alert('Error downloading invitation. Please try again.');
    }
  };

  const handleDownloadQR = async () => {
    try {
      // Generate QR code using a simple QR code library approach
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
        window.location.href
      )}`;

      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = `wedding-qr-${Date.now()}.png`;
      link.click();
    } catch (error) {
      console.error('Error downloading QR code:', error);
      alert('Error downloading QR code. Please try again.');
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Wedding Invitation',
          text: `${formData.groomName} & ${formData.brideName} invite you to their wedding!`,
          url: shareUrl,
        });
      } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-sage-900 text-center mb-6">
            Your Wedding Invitation
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-sage-600 text-black px-6 py-3 rounded-lg font-semibold hover:bg-sage-700 transition-all"
            >
              <Download size={20} />
              Download PNG
            </button>

            <button
              onClick={handleDownloadQR}
              className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all"
            >
              <Download size={20} />
              Download QR
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 border-2 border-sage-600 text-sage-600 px-6 py-3 rounded-lg font-semibold hover:bg-sage-50 transition-all"
            >
              <Share2 size={20} />
              Share Link
            </button>

            <button
              onClick={() => navigate('/create')}
              className="flex items-center gap-2 border-2 border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
            >
              <Edit2 size={20} />
              Edit
            </button>
          </div>
        </motion.div>

        {/* Invitation Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div
            ref={invitationRef}
            className="bg-white shadow-2xl rounded-xl overflow-hidden"
          >
            <SelectedTemplate formData={formData} />
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="font-serif text-2xl font-bold text-sage-900 mb-6">
            Next Steps
          </h3>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-sage-900 mb-1">Download or Share</h4>
                <p className="text-gray-600 text-sm">
                  Download your invitation as an image or share the link with your guests.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-sage-900 mb-1">Share with Guests</h4>
                <p className="text-gray-600 text-sm">
                  Send the PNG file or unique link to your guests via email or social media.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-sage-900 mb-1">Collect RSVPs</h4>
                <p className="text-gray-600 text-sm">
                  Guests can RSVP through the web link or contact you directly.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full mt-8 bg-sage-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sage-700 transition-all"
          >
            Create Another Invitation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ViewInvitation;
