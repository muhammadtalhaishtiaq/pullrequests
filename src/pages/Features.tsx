
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Code Analysis",
      description: "Automatically identify code smells, anti-patterns, and potential bugs using our advanced AI engine.",
    },
    {
      title: "Automated Test Case Generation",
      description: "Generate comprehensive test cases based on your code changes to ensure maximum coverage.",
    },
    {
      title: "Quality Scoring",
      description: "Get objective metrics on your code quality with actionable insights for improvement.",
    },
    {
      title: "Integration with GitHub & Bitbucket",
      description: "Seamlessly connect your repositories and start analyzing PRs with minimal setup.",
    },
    {
      title: "Customizable Rules",
      description: "Define your own code quality rules and standards that match your team's practices.",
    },
    {
      title: "Intelligent Suggestions",
      description: "Receive smart recommendations to improve code quality, performance, and security.",
    },
    {
      title: "Team Collaboration",
      description: "Facilitate team discussions with shared insights and recommendations.",
    },
    {
      title: "Security Scanning",
      description: "Identify security vulnerabilities early in the development process.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Features</h1>
            <p className="text-xl text-muted-foreground">
              Discover how PRQuality improves your code review process and enhances your team's productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="border rounded-lg p-6 hover:border-primary transition-colors">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-primary mr-2 h-5 w-5" />
                  <h3 className="font-medium text-lg">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
