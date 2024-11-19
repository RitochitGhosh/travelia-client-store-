"use client";

import { Package as PackageType } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { Luggage } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps {
  data: PackageType;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data)
  };
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-900"> {data.name} </h1>
      <div className="mt-3 flex iend justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black ">Sizes: </h3>
          <div className="">{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black ">Duration: </h3>
          <div className="">{data?.duration?.days}</div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={onAddToCart} >
            Add to Bag
            <Luggage /> 
        </Button>
      </div>
    </div>
  );
};

export default Info;
