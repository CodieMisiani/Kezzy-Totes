// src/components/layout/Header.tsx

import React from "react";

export default function Header() {
  return (
    <header>
      <div>LOGO</div>

      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
      </nav>

      <div>
        <a href="/cart">🛒</a>
        <a href="/auth">Login</a>
      </div>
    </header>
  );
}
