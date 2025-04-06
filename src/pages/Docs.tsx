
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FileText, GitPullRequest, ShieldCheck, Settings, BarChart4 } from "lucide-react";

const Docs = () => {
  const docSections = [
    {
      title: "Getting Started",
      description: "Learn how to set up PRQuality and connect your repositories.",
      icon: FileText,
      link: "/docs/getting-started"
    },
    {
      title: "Pull Request Analysis",
      description: "Understand how our AI analyzes your pull requests and provides feedback.",
      icon: GitPullRequest,
      link: "/docs/pr-analysis"
    },
    {
      title: "Security & Compliance",
      description: "Learn about our security measures and compliance features.",
      icon: ShieldCheck,
      link: "/docs/security"
    },
    {
      title: "Configuration",
      description: "Customize PRQuality to fit your team's workflow and standards.",
      icon: Settings,
      link: "/docs/configuration"
    },
    {
      title: "Code Review Checkpoints",
      description: "Comprehensive guide to our code review evaluation process.",
      icon: BarChart4,
      link: "/docs/code-review-checkpoints"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about using PRQuality effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {docSections.map((section, index) => (
              <Link to={section.link} key={index}>
                <div className="border rounded-lg p-6 hover:border-primary transition-colors h-full">
                  <div className="flex items-center mb-4">
                    <section.icon className="text-primary mr-3 h-6 w-6" />
                    <h3 className="font-medium text-lg">{section.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
