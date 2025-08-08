import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import UploadExample from "@/components/UploadImage";
import { SelectContent } from "@radix-ui/react-select";
import Link from "next/link";
import React from "react";

const categories = ["Pizza", "Burger", "Pasta", "Salad", "Dessert"];

const page = () => {
    const isPading = false;
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <Card className="w-full max-w-xl">
                <CardHeader>
                    <CardTitle>
                        <div className="flex justify-between items-center w-full">
                            <h1>Add Menu Item</h1>
                            <Link href={"/admin/menu"}>
                                <Button
                                    variant={"link"}
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    Menu List
                                </Button>
                            </Link>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form action="">
                        <div className="space-y-4">
                            <Label>Item Name</Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="e.g Pizza"
                                className="mt-2"
                            />
                        </div>

                        <div className="space-y-4 mt-4">
                            <Label>Description</Label>
                            <Textarea
                                name="description"
                                placeholder="Description of item"
                                className="mt-2"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="space-y-4">
                                <Label>Price ($)</Label>
                                <Input
                                    type="number"
                                    name="price"
                                    placeholder="0.00"
                                    className="mt-2"
                                />
                            </div>

                            <div className="space-y-4">
                                <Label>Category</Label>
                                <Select name="category">
                                    <SelectTrigger className="mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
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
                            </div>
                        </div>
                        {/* Upload image */}
                        <UploadExample/>
                        <Button
                            disabled={isPading}
                            type="submit"
                            variant={"ghost"}
                            className="w-full mt-4"
                        >
                            {isPading ? "Loading..." : "Add Item"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default page;
