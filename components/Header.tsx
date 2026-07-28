export function Header() {
  const navItems = [
    ["Capabilities", "#capabilities"],
    ["Approach", "#approach"],
    ["Company", "#company"],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#overview" aria-label="Integrated Operations Advisory home">
          IOA <span>Integrated Operations Advisory</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a href="#contact">Contact</a>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div>
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            <a href="#contact">Contact</a>
          </div>
        </details>
      </div>
    </header>
  );
}
