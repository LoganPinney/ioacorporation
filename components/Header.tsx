"use client";

import { useRef } from "react";

export function Header() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }
  const navItems = [
    ["Capabilities", "#capabilities"],
    ["Approach", "#approach"],
    ["Systems", "#enterprise-systems"],
    ["Start here", "#first-engagement"],
    ["Company", "#company"],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="#overview"
          aria-label="Integrated Operations Advisory home"
        >
          IOA <span>Integrated Operations Advisory</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
          <a href="#contact">Let’s talk ↗</a>
        </nav>
        <details
          className="mobile-nav"
          ref={menuRef}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeMenu();
              menuRef.current?.querySelector("summary")?.focus({ preventScroll: true });
            }
          }}
        >
          <summary>Menu</summary>
          <div onClick={closeMenu}>
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
            <a href="#contact">Contact</a>
          </div>
        </details>
      </div>
    </header>
  );
}
