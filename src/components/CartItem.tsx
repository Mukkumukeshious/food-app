import React from "react";
import { CartItem as Item, useCartStore } from "../../store/store";
import Image from "next/image";
import { Button } from "./ui/button";
import { Minus, Plus, X } from "lucide-react";
import { Input } from "./ui/input";

const CartItem = ({ item }: { item: Item }) => {
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const increaseQuantity = useCartStore((s) => s.increaseQuantity);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);

  return (
    <div className="flex items-stretch gap-4 border p-4 rounded">
      <div className="relative w-24 h-24">
        <Image
          src={item.imageUrl ?? "/fallback.png"}
          alt={item.name}
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-muted-foreground">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.id)}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="mt-4 flex items-center">
          <Button onClick={() => decreaseQuantity(item.id)} size="icon" variant="ghost">
            <Minus className="w-4 h-4" />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            min={1}
            readOnly
            className="w-12 h-10 text-center"
          />
          <Button onClick={() => increaseQuantity(item.id)} size="icon" variant="ghost">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
