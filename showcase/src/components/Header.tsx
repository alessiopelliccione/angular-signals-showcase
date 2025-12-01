import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "signals", label: "Signals" },
    { id: "signal-forms", label: "Forms" },
    { id: "why", label: "Why" },
    { id: "coding", label: "Code" },
    { id: "tips", label: "Tips" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-sm font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-muted-foreground">//</span> Signal Forms
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="font-mono text-xs text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all relative group"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-[70%] transition-all duration-300" />
              </Button>
            ))}
          </nav>

          {/* Right side - Event info */}
          <div className="hidden lg:block font-mono text-xs text-muted-foreground">
            <span className="text-muted-foreground">//</span> Dec 2, 2025 | 12:00-13:00
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
