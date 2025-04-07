import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LogoutButton } from "./LogoutButton";

const Header = () => {
  const { session } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              PullRequests
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/features"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Pricing
            </Link>
            <Link
              to="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Documentation
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add your search component here if needed */}
          </div>
          <nav className="flex items-center space-x-2">
            {session ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <LogoutButton variant="ghost" />
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
