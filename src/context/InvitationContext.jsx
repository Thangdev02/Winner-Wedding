import React, { createContext, useContext, useState } from 'react';

const InvitationContext = createContext();

export const useInvitation = () => {
  const context = useContext(InvitationContext);
  if (!context) {
    throw new Error('useInvitation must be used within InvitationProvider');
  }
  return context;
};

export const InvitationProvider = ({ children }) => {
  const [invitation, setInvitation] = useState({
    package: null,
    template: null,
    formData: {
      groomName: '',
      brideName: '',
      weddingDate: '',
      ceremonyTime: '',
      receptionTime: '',
      venue: '',
      address: '',
      rsvpDate: '',
      color: '#8B9D83',
      coupleImage: null,
      image: null,
      email: '',
      phone: '',
    },
  });

  // Update package selection
  const updatePackage = (packageId) => {
    setInvitation(prev => ({
      ...prev,
      package: packageId,
    }));
  };

  // Update template selection
  const updateTemplate = (templateId) => {
    setInvitation(prev => ({
      ...prev,
      template: templateId,
    }));
  };

  // Update entire invitation object
  const updateInvitation = (updates) => {
    setInvitation(prev => ({
      ...prev,
      ...updates,
    }));
  };

  // Update form data
  const updateFormData = (updates) => {
    setInvitation(prev => ({
      ...prev,
      formData: {
        ...prev.formData,
        ...updates,
      },
    }));
  };

  // Reset invitation
  const resetInvitation = () => {
    setInvitation({
      package: null,
      template: null,
      formData: {
        groomName: '',
        brideName: '',
        weddingDate: '',
        ceremonyTime: '',
        receptionTime: '',
        venue: '',
        address: '',
        rsvpDate: '',
        color: '#8B9D83',
        coupleImage: null,
        image: null,
        email: '',
        phone: '',
      },
    });
  };

  const value = {
    invitation,
    updatePackage,
    updateTemplate,
    updateInvitation,
    updateFormData,
    resetInvitation,
  };

  return (
    <InvitationContext.Provider value={value}>
      {children}
    </InvitationContext.Provider>
  );
};

export default InvitationContext;