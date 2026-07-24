export function Header() {
  const navItems = [
    ["Overview", "#overview"],
    ["Capabilities", "#capabilities"],
    ["Approach", "#approach"],
    ["About", "#about"],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#overview" aria-label="IOA Corporation home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span className="brand-text">IOA <span>Corporation</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a className="nav-contact" href="#contact">Contact</a>
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
