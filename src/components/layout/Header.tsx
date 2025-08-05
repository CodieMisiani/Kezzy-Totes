// src/components/layout/Header.tsx

import React from "react";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import RightActions from "../RightActions";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            {/* <img
              src="/logo.svg.png"
              alt="Kezzy-Totes"
              className="h-8 w-auto text-sage"
            /> */}
            <Logo />
          </div>

          {/* Desktop Navigation */}
          {/* <nav>
            <a href="/">Home</a>
            <a href="/products">Products</a>
          </nav> */}
          <NavLinks />
          {/* Right Actions */}
          <RightActions />
          <div>
            <a href="/cart">🛒</a>
            {/* <a href="/auth">Login</a> */}
          </div>
        </div>
      </div>
    </header>
  );
}
