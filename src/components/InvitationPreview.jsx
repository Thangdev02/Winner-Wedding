import React from 'react';
import { useInvitation } from '../context/InvitationContext';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';
import Template5 from './templates/Template5';
import Template6 from './templates/Template6';

const InvitationPreview = () => {
  const { invitation } = useInvitation();
  const { template, formData } = invitation;

  // Map template IDs to components - matching SelectTemplate.jsx
  const templates = {
    'elegant-sage': Template1,
    'minimal-cream': Template2,
    'vintage-blush': Template3,
    'modern-navy': Template4,
    'black': Template5,
    'black-white': Template6,
  };

  const SelectedTemplate = templates[template] || Template1;

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="p-4 bg-gradient-to-r from-[#8B9D83] to-[#6d7d6a] border-b border-gray-200">
        <h3 className="font-serif text-white text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Live Preview
        </h3>
        <p className="text-white/80 text-sm mt-1">
          Template: {template ? template.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Not selected'}
        </p>
      </div>
      <div className="p-4 bg-gray-100 min-h-96 flex items-center justify-center overflow-auto">
        <div className="w-full max-w-sm transform scale-90 origin-top">
          <SelectedTemplate formData={formData} />
        </div>
      </div>
      
      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="p-3 bg-gray-50 border-t text-xs text-gray-500">
          <p>Template ID: {template || 'none'}</p>
          <p>Form Data: {Object.keys(formData).length} fields</p>
        </div>
      )}
    </div>
  );
};

export default InvitationPreview;