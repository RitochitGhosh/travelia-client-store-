import { create } from "zustand";

import { Package } from  "@/types";

interface PreviewModalProps {
    isOpen: boolean;
    data?: Package;
    onOpen: ( data: Package ) => void;
    onClose: () => void;
};

const usePreviewModal = create<PreviewModalProps>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Package) => set({ data: data, isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default usePreviewModal;