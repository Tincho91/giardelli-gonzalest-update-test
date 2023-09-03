import { create } from 'zustand';

import { Position } from '@/types';

interface PreviewModalPosition {
  isOpen: boolean;
  data?: Position;
  onOpen: (data: Position) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalPosition>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Position) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
