"use client";

import IconButton from "@/components/ui/icon-button";
import { Duration, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { on } from "events";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";
import { Button } from "@/components/ui/button";

interface MobileFiltersProps {
  sizes: Size[];
  durations: Duration[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, durations }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className="
                    relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6"
          >
            <div className="flex icen justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />

              <Filter valueKey="durationId" name="Durations" data={durations} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
