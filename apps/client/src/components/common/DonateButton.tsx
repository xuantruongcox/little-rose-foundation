'use client'; // Bắt buộc vì có tương tác click
import { useUIStore } from '@/store/useUIStore';

export default function DonateButton() {
  const openQrModal = useUIStore((state) => state.openQrModal);

  return (
    <button className="btn btn-warning fw-bold" onClick={openQrModal}>
      Ủng hộ ngay
    </button>
  );
}