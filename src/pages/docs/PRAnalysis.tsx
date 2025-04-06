
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { GitPullRequest, Code, LightbulbIcon, BarChart4, FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PRAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/docs" className="text-muted-foreground hover:text-foreground mb-2 inline-flex items-center">
              <span className="mr-2">←</span> Back to Documentation
            </Link>
            
            <h1 className="text-4xl font-bold mt-4 mb-6">Pull Request Analysis</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Learn how PRQuality analyzes your pull requests and provides actionable insights.
            </p>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
                <p className="mb-8">
                  PRQuality uses advanced AI algorithms to analyze your code changes and provide
                  detailed feedback and recommendations. Here's a breakdown of the analysis process:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <GitPullRequest className="text-primary mr-3 h-6 w-6 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg mb-1">PR Detection</h3>
                          <p className="text-muted-foreground">
                            PRQuality monitors your connected repositories and automatically 
                            detects when new pull requests are created.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <Code className="text-primary mr-3 h-6 w-6 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg mb-1">Code Analysis</h3>
                          <p className="text-muted-foreground">
                            Our AI engine examines the code changes for patterns, potential issues,
                            and adherence to best practices.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <LightbulbIcon className="text-primary mr-3 h-6 w-6 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg mb-1">Recommendations</h3>
                          <p className="text-muted-foreground">
                            Based on the analysis, PRQuality generates specific suggestions 
                            to improve code quality, security, and performance.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <BarChart4 className="text-primary mr-3 h-6 w-6 mt-1" />
                        <div>
                          <h3 className="font-medium text-lg mb-1">Quality Scoring</h3>
                          <p className="text-muted-foreground">
                            A comprehensive quality score is calculated based on multiple factors,
                            giving an objective measure of the code quality.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6">Understanding PR Analysis Results</h2>
                <p className="mb-8">
                  After analysis, PRQuality provides a detailed breakdown of findings. Here's how to interpret the results:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Quality Score</h3>
                    <p className="mb-3">
                      The quality score is a number from 0-100 that represents the overall quality of the code changes:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                        <span><strong>80-100:</strong> Excellent code quality</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-yellow-500 mr-3"></div>
                        <span><strong>50-79:</strong> Good quality with some issues</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                        <span><strong>0-49:</strong> Significant issues that should be addressed</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3">Code Issues</h3>
                    <p>
                      PRQuality identifies specific issues in your code and categorizes them by severity:
                    </p>
                    <ul className="space-y-2 mt-3">
                      <li><strong>Critical:</strong> Issues that could cause crashes, security vulnerabilities, or serious bugs</li>
                      <li><strong>Major:</strong> Code smells or anti-patterns that could lead to maintenance problems</li>
                      <li><strong>Minor:</strong> Style issues or minor inefficiencies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3">Recommendations</h3>
                    <p>
                      For each issue identified, PRQuality provides specific recommendations on how to fix the problem.
                      These recommendations may include code examples and explanations.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6">Test Case Generation</h2>
                <div className="flex items-center mb-4">
                  <FileCode className="text-primary mr-3 h-6 w-6" />
                  <p>
                    PRQuality can automatically generate test cases for your code changes, helping ensure 
                    comprehensive test coverage and reducing bugs.
                  </p>
                </div>
                <Link to="/docs/test-case-generation" className="text-primary hover:underline">
                  Learn more about test case generation →
                </Link>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PRAnalysis;
