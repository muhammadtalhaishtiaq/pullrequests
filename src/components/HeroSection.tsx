
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-[-1]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-24 right-48 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 left-48 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm mb-8 bg-secondary">
            <span className="bg-primary rounded-full w-2 h-2 mr-2"></span>
            <span>Elevate your code reviews with AI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            AI-Powered Code Review for Perfect Pull Requests
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10">
            PRQuality analyzes your pull requests, suggests improvements, and generates test cases automatically. Boost developer productivity and maintain high code quality standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started for Free
              </Button>
            </Link>
            <Link to="/docs">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Read Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
