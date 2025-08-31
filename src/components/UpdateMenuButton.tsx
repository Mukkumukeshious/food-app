"use client";
import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { Textarea } from "./ui/textarea";
import {
  UpdateMenuAction,
  UpdateMenuFormState,
} from "../../actions/update-menu";
import { MenuItem } from "@/generated/prisma";

const categories = ["Pizza", "Burger", "Pasta", "Salad", "Dessert"];

const UpdateMenuButton = ({ item }: { item: MenuItem }) => {
  const [formState, action, isPending] = useActionState(
    async (prevState: UpdateMenuFormState, formData: FormData) =>
      await UpdateMenuAction(prevState, formData, item.id),
    { errors: {} }
  );
  
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Pencil className="h-4 w-4 border-none" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action={action}>
            <DialogHeader>
              <DialogTitle>Edit Menu-Item</DialogTitle>
              <DialogDescription>
                Edit your item here Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue={item.name} />
                {formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {formState.errors.name}
                  </p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  defaultValue={item.description ?? ""}
                  placeholder="Enter your description"
                />
                {formState.errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {formState.errors.description}
                  </p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  name="price"
                  defaultValue={item.price}
                  placeholder="Enter your price"
                />
                {formState.errors.price && (
                  <p className="text-red-500 text-sm mt-1">
                    {formState.errors.price}
                  </p>
                )}
              </div>
              <div className="grid gap-3">
                <Label htmlFor="category">Category</Label>
                <Select name="category" defaultValue={item.category}>
                  <SelectTrigger id="category" className="mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
                    <SelectGroup>
                      {categories.map((item, index) => (
                        <SelectItem
                          key={index}
                          value={item}
                          className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                        >
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {formState.errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    {formState.errors.category}
                  </p>
                )}
              </div>
            </div>
            <Button disabled={isPending} className="w-full mt-4" type="submit">
              {isPending ? "Saving..." : "Save"}
            </Button>
            {formState.errors.formError && (
              <p className="text-red-500 text-sm mt-1">
                {formState.errors.formError[0]}
              </p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateMenuButton;