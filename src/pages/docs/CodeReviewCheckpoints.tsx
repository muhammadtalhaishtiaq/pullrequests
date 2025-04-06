
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CodeReviewCheckpoints = () => {
  const checkpoints = [
    {
      category: "Code Quality Review",
      checks: [
        "Code follows naming conventions and formatting standards.",
        "Code is modular, well-structured, and follows best practices.",
        "No unused variables, functions, or commented-out code."
      ]
    },
    {
      category: "Functional Review",
      checks: [
        "Code meets business requirements as per Jira ticket.",
        "Proper error handling and validation are implemented.",
        "Edge cases and failure scenarios are considered."
      ]
    },
    {
      category: "Security Review",
      checks: [
        "No hardcoded credentials or sensitive data in the code.",
        "Input validation is implemented to prevent vulnerabilities (SQL Injection, XSS, etc.).",
        "Authorization and authentication mechanisms are correctly applied."
      ]
    },
    {
      category: "Performance Review",
      checks: [
        "Code is optimized for performance (avoid unnecessary loops, excessive DB queries).",
        "Caching mechanisms are implemented where applicable.",
        "Database queries are optimized (avoid N+1 query issues)."
      ]
    },
    {
      category: "Test Coverage Review",
      checks: [
        "Unit and integration tests are written and passing.",
        "Code covers positive, negative, and edge cases."
      ]
    },
    {
      category: "Compliance with Coding Standards",
      checks: [
        "Code follows the team's defined (PSR) coding standards and best practices.",
        "Linting and static code analysis tools (ESLint, SonarQube, PHPStan, etc.) are used."
      ]
    },
    {
      category: "Dependency & Third-Party Library Review",
      checks: [
        "No unnecessary or outdated dependencies are used.",
        "No security vulnerabilities introduced by external libraries."
      ]
    },
    {
      category: "Documentation & Comments Review",
      checks: [
        "Code is well-documented with meaningful comments where necessary.",
        "README or API documentation is updated if required."
      ]
    },
    {
      category: "UI/UX Review (For Frontend Code)",
      checks: [
        "UI matches design specs and is responsive across devices.",
        "User experience is intuitive and accessible."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Code Review Checkpoints</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our comprehensive code review process evaluates PRs based on the following checkpoints.
              These criteria help ensure high-quality, secure, and maintainable code.
            </p>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How Scoring Works</CardTitle>
                <CardDescription>
                  PRQuality analyzes each pull request against the applicable checkpoints. 
                  Not all checkpoints apply to every PR - we intelligently determine which 
                  criteria are relevant based on the code changes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Each applicable checkpoint category contributes to the overall score. 
                  The system will analyze your code and determine which checkpoints are relevant, 
                  then score each category based on how well your code meets those criteria.
                </p>
                <p className="mt-3">
                  A high score (green, 80-100) indicates excellent code quality, while medium scores 
                  (yellow, 50-79) suggest areas for improvement. Low scores (red, below 50) 
                  indicate significant issues that should be addressed.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-12">
              {checkpoints.map((checkpoint, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-semibold mb-4">{checkpoint.category}</h2>
                  <Separator className="mb-4" />
                  <ul className="space-y-3 pl-4">
                    {checkpoint.checks.map((check, i) => (
                      <li key={i} className="list-disc text-lg ml-4">{check}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CodeReviewCheckpoints;
