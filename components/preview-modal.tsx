"use client"

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "@/components/ui/modal";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

const PreviewModal = () => {

    const previewMoal = usePreviewModal();
    const packagee = usePreviewModal((state) => state.data)

    if(!packagee) {
        return null;
    }
    return ( 
        <Modal
            open={previewMoal.isOpen}
            onClose={previewMoal.onClose}

        >
            <div className="grid w-full grid-cols-1  items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    <Gallery images={packagee.images} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <Info data={packagee} />
                </div>
            </div>

        </Modal>
     );
}
 
export default PreviewModal;