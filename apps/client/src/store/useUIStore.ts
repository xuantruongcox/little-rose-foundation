import { create } from 'zustand';

interface UIState {
  isQrModalOpen: boolean;
  openQrModal: () => void;
  closeQrModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isQrModalOpen: false,
  openQrModal: () => set({ isQrModalOpen: true }),
  closeQrModal: () => set({ isQrModalOpen: false }),
}));