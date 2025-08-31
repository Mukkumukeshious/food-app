"use client"
import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useCartStore } from "../../store/store";

const CartSummary = () => {
    const cartItems = useCartStore((store) => store.cart);
    const subtotal = cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0);
    const tax = subtotal * 0.08; // Assuming an 8% tax rate
    const total = subtotal + tax;
  return (
    <div className="space-y-4 p-4 border rounded">
      <h3 className="font-semibold text-lg">Order Summary</h3>
      <div className=" space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxt (8%) </span>
          <span>${tax}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total}</span>

        </div>
        <Button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
