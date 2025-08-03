"use client";
import {
  Badge,
  Heart,
  Search,
  SearchIcon,
  ShoppingBag,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

export default function RightActions() {
  const [cartItems] = useState(3); // ✅ State to track cart count
  return (
    <div className="flex items-center space-x-4">
      {/* Search */}
      <Button>
        <SearchIcon />
      </Button>
      {/* Wishlist */}
      <Button>
        <Heart />
      </Button>
      {/* User */}
      <Button>
        <User />
      </Button>
      {/* Cart */}
      <Button>
        <ShoppingBag />
        <Badge />
      </Button>
      RightActions
    </div>
  );
}
