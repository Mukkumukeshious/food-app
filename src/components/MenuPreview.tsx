import { prisma } from "@/lib/prisma";
import React from "react";
import { Image, ImageKitProvider } from "@imagekit/next";
import { ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const MenuPreview = async () => {
    const MenuItems = await prisma.menuItem.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: 3,
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            category: true,
            imageUrl: true,
        },
    });
    return (
        <div className="container mx-auto px-4 py-12 sm:py-16">
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Menu Preview</h2>
                <p className="text-muted-foreground mb-6 sm:mb-8">
                    Explore our delicious menu items below.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {MenuItems.map((item) => (
                    <div
                        className="group overflow-hidden rounded-xl shadow-md bg-white flex flex-col"
                        key={item.id}
                    >
                        <div className="relative aspect-w-1 aspect-h-1 w-full">
                            <ImageKitProvider urlEndpoint={process.env.IMAGEKIT_URL_ENDPOINT!}>
                                <Image
                                    src={item.imageUrl!}
                                    width={400}
                                    height={400}
                                    alt={item.name}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </ImageKitProvider>
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-base sm:text-lg">{item.name}</h3>
                                <span className="font-bold text-primary text-sm sm:text-base">
                                    ${item.price}
                                </span>
                            </div>
                            <p className="text-muted-foreground text-xs sm:text-sm mb-2 flex-1">
                                {item.description}
                            </p>
                            <div className="flex items-center mt-auto">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                {/* Add rating value if available */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Link href={"/menu"}> View Full Menu</Link>
                    <ChevronRight className="ml-2 h-4 w-4" />

                </Button>

            </div>
        </div>
    );
};

export default MenuPreview;