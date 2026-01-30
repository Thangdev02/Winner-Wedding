import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PublicInvitation = () => {
  const { id } = useParams();
  const [invitation, setInvitation] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(`invitation_${id}`);
    if (saved) {
      setInvitation(JSON.parse(saved));
    }
  }, [id]);

  if (!invitation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Không tìm thấy thiệp
      </div>
    );
  }

  const { groomName, brideName, weddingDate, venue, address } = invitation.formData;

  return (
    <div className="min-h-screen bg-[#f8f6f3] flex justify-center p-10">
      <div className="bg-white rounded-xl shadow-xl p-10 max-w-xl w-full text-center">
        <h1 className="text-3xl font-serif mb-4">
          {groomName} ❤️ {brideName}
        </h1>

        <p className="text-gray-600 mb-2">Ngày cưới</p>
        <p className="font-semibold mb-4">{weddingDate}</p>

        <p className="text-gray-600 mb-2">Địa điểm</p>
        <p className="font-semibold">{venue}</p>
        <p className="text-sm text-gray-500">{address}</p>
      </div>
    </div>
  );
};

export default PublicInvitation;
