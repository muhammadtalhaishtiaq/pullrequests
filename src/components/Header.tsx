
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-primary-foreground font-bold text-sm">PR</span>
            </div>
            <span className="font-semibold text-xl">PRQuality</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4 ml-6">
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link to="/login">
            <Button className="flex items-center gap-2">
              <Github size={18} />
              <span>Get Started</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
