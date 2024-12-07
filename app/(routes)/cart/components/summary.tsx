"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";

const Summary = () => {
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const success = searchParams.get("success");
        const cancelled = searchParams.get("cancelled");

        if (success) {
            toast.success("Payment completed.");
            removeAll();
        }

        if (cancelled) {
            toast.error("Something went wrong.");
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);

    const onCheckout = async () => {

        // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        //     packageIds: items.map((item) => item.id)
        // })

        // window.location = response.data.url


        // Simulating payment gateway process
        setTimeout(() => {
            toast.error("Payment gateway has not yet been integrated, as this is a sample project.");
        }, 2000);

        setTimeout(() => {
            toast.success("Redirecting back to the store.");
            removeAll();
            router.push("/");
        }, 5000);
    };

    return (
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 border border-black">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">Order total:</div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button disabled={items.length === 0} onClick={onCheckout} className="w-full mt-6">
                Checkout
            </Button>
        </div>
    );
};

export default Summary;
