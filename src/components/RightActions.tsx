"use client";
import {
  Ghost,
  Heart,
  Icon,
  Search,
  SearchIcon,
  ShoppingBag,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";

export default function RightActions() {
  const [cartItems] = useState(3); // ✅ State to track cart count
  return (
    <div className="flex items-center space-x-4">
      {/* Search */}
      <Button
        variant={"ghost"}
        size={"icon"}
        className="hidden md:flex  hover:text-green-600 transition-colors duration-300 cursor-pointer"
      >
        <SearchIcon className="w-5 h-5" />
      </Button>
      {/* Wishlist */}
      <Button
        variant={"ghost"}
        size={"icon"}
        className="  hover:text-green-600 transition-colors duration-300 cursor-pointer"
      >
        <Heart className="w-5 h-5" />
      </Button>
      {/* User */}
      <Button
        variant={"ghost"}
        size={"icon"}
        className="cursor-pointer  hover:text-green-600 transition-colors duration-300"
      >
        <User className="w-5 h-5" />
      </Button>
      {/* Cart */}
      <Button
        variant={"ghost"}
        size={"icon"}
        className=" relative  hover:text-green-600 transition-colors duration-300 cursor-pointer"
      >
        <ShoppingBag className="w-5 h-5" />
        <Badge
          variant={"destructive"}
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
        >
          {cartItems}
        </Badge>
      </Button>
      {/* RightActions */}
    </div>
  );
}
