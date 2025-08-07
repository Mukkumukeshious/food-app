"use client";
import { Ghost, Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const cart = [1, 2, 3, 4];
  const [menuOpen, setMenu] = useState(false);
  return (
    <header className="sticky z-50 top-0 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex mx-auto h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* left side of navbar */}
          <Link href={"/"} className="font-bold text-lg">
            Foodyy
          </Link>

          {/* Menu item for desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href={"/menu"} className="text-sm font-medium">
              Menu
            </Link>
            <Link href={"/about"} className="text-sm font-medium">
              About
            </Link>
            <Link href={"/admin"} className="text-sm font-medium">
              Admin
            </Link>
          </div>
        </div>
        {/* Right side of navbar */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/3 -translate-y-1 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search here...."
              className="pl-10 w-[150px] md:w-[240px]"
            />
          </div>
          {/* cart */}
          <Link href={"/cart"} className="relative">
            <Button variant={"ghost"}>
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-red-500 rounded-full text-xs text-white">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>

          {/* user auth */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Mobile device */}
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => setMenu(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 py-2 border-t bg-background space-y-2">
          <Link href={"/menu"} className="block text-sm font-medium">
            Menu
          </Link>
          <Link href={"/about"} className="block text-sm font-medium">
            About
          </Link>
          <Link href={"/admin"} className="block text-sm font-medium">
            Admin
          </Link>

          <div className="relative">
            <Search className="absolute left-3 top-1/3 -translate-y-1 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search here...." className="pl-10 w-full" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
