
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to improve your code quality?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are using PRQuality to write better code,
            streamline reviews, and ship with confidence.
          </p>
          <Link to="/login">
            <Button size="lg" className="px-8 py-6 text-lg">
              Get Started For Free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
