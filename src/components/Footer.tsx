
import React from "react";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-primary-foreground font-bold text-sm">PR</span>
            </div>
            <span className="font-semibold text-lg">PRQuality</span>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            Improving code quality with AI-powered analysis and recommendations.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/features" className="text-muted-foreground hover:text-foreground">
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/docs" className="text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/docs" className="text-muted-foreground hover:text-foreground">
                Guides
              </Link>
            </li>
            <li>
              <Link to="/docs" className="text-muted-foreground hover:text-foreground">
                API Reference
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-border/60">
        <p className="text-center text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} PRQuality. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
