const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="text-xl font-bold">
            <span className="text-gradient-neon">Roxo</span>
            <span className="text-foreground">soft</span>
          </a>
          <p className="text-xs text-muted-foreground mt-2">Custom Software Development Partner</p>
        </div>
        <nav className="flex gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cases</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 Roxosoft. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
