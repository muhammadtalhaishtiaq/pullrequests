
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { FileCode, TestTube, CheckSquare, BrainCircuit } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import TestCaseGenerator from "@/components/dashboard/TestCaseGenerator";

const TestCaseGeneration = () => {
  const sampleCode = `function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/docs" className="text-muted-foreground hover:text-foreground mb-2 inline-flex items-center">
              <span className="mr-2">←</span> Back to Documentation
            </Link>
            
            <h1 className="text-4xl font-bold mt-4 mb-6">Test Case Generation</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Learn how PRQuality automatically generates comprehensive test cases for your code.
            </p>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
                <p className="mb-8">
                  PRQuality's test case generator uses advanced AI to analyze your code and create 
                  relevant tests that help ensure functionality and catch potential bugs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <FileCode className="text-primary mr-3 h-6 w-6" />
                      <h3 className="text-lg font-medium">Code Analysis</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Our AI parses and understands your code structure, identifying functions,
                      methods, inputs, outputs, and edge cases.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <BrainCircuit className="text-primary mr-3 h-6 w-6" />
                      <h3 className="text-lg font-medium">Test Strategy</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Based on the analysis, our system determines appropriate test strategies 
                      for different parts of your code, prioritizing critical paths.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <TestTube className="text-primary mr-3 h-6 w-6" />
                      <h3 className="text-lg font-medium">Test Generation</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Test cases are generated at multiple levels: unit tests for functions, 
                      integration tests for components, and E2E tests for workflows.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6">Types of Tests Generated</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <CheckSquare className="text-primary mr-2 h-5 w-5" />
                      Unit Tests
                    </h3>
                    <p className="mb-2">
                      Tests for individual functions or methods in isolation. These verify that each 
                      piece of code works correctly on its own.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>Input validation tests</li>
                      <li>Return value verification</li>
                      <li>Exception handling tests</li>
                      <li>Edge case scenarios</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <CheckSquare className="text-primary mr-2 h-5 w-5" />
                      Integration Tests
                    </h3>
                    <p className="mb-2">
                      Tests that verify multiple components work together correctly. These focus on 
                      the interactions between functions, modules, or services.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>Component interaction tests</li>
                      <li>API communication tests</li>
                      <li>Database interaction tests</li>
                      <li>State management tests</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 flex items-center">
                      <CheckSquare className="text-primary mr-2 h-5 w-5" />
                      End-to-End Tests
                    </h3>
                    <p className="mb-2">
                      Tests that simulate real user scenarios. These verify that complete workflows 
                      function as expected from a user's perspective.
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground">
                      <li>User journey tests</li>
                      <li>Form submission tests</li>
                      <li>Authentication flows</li>
                      <li>Critical business workflows</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Try It Out</h2>
                <Alert className="mb-6">
                  <AlertTitle>Demo Version</AlertTitle>
                  <AlertDescription>
                    This is a simplified demo of our test case generation feature. In the full version, 
                    the AI adapts to your specific codebase and testing framework.
                  </AlertDescription>
                </Alert>
                
                <TestCaseGenerator codeSnippet={sampleCode} />
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
                <p className="mb-6">
                  While our AI can generate comprehensive tests, here are some tips to get the most out of this feature:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckSquare className="text-primary mr-3 h-5 w-5 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Review Generated Tests</h4>
                      <p className="text-muted-foreground">
                        Always review and potentially modify generated tests to ensure they meet your specific requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckSquare className="text-primary mr-3 h-5 w-5 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Add Business Logic Tests</h4>
                      <p className="text-muted-foreground">
                        Supplement generated tests with tests that verify specific business requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckSquare className="text-primary mr-3 h-5 w-5 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Integrate with CI/CD</h4>
                      <p className="text-muted-foreground">
                        Add generated tests to your CI/CD pipeline to ensure continuous quality checks.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestCaseGeneration;
