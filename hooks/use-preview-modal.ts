import { create } from 'zustand';

import { Work } from '@/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: Work;
  onOpen: (data: Work) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Work) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
