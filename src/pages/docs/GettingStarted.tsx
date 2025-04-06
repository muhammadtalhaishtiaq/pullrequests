
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, GitlabIcon, GitBranch, CheckCircle } from "lucide-react";

const GettingStarted = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/docs" className="text-muted-foreground hover:text-foreground mb-2 inline-flex items-center">
              <span className="mr-2">←</span> Back to Documentation
            </Link>
            
            <h1 className="text-4xl font-bold mt-4 mb-6">Getting Started with PRQuality</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Follow these steps to set up PRQuality and integrate it with your repositories.
            </p>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-semibold mb-6">1. Create an Account</h2>
                <p className="mb-4">
                  Start by creating a PRQuality account. You can sign up using your email or via GitHub/BitBucket authentication.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button asChild>
                    <Link to="/login">Sign Up for Free</Link>
                  </Button>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6">2. Connect Your Repository</h2>
                <p className="mb-4">
                  PRQuality works with GitHub and BitBucket repositories. You can connect as many repositories as your plan allows.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Github className="mr-2 h-6 w-6" />
                      <h3 className="text-lg font-medium">GitHub Integration</h3>
                    </div>
                    <ol className="space-y-3 list-decimal ml-5">
                      <li>Go to your Dashboard</li>
                      <li>Click "Connect Repository"</li>
                      <li>Select GitHub and authorize PRQuality</li>
                      <li>Choose repositories to analyze</li>
                    </ol>
                  </div>
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <GitlabIcon className="mr-2 h-6 w-6" />
                      <h3 className="text-lg font-medium">BitBucket Integration</h3>
                    </div>
                    <ol className="space-y-3 list-decimal ml-5">
                      <li>Go to your Dashboard</li>
                      <li>Click "Connect Repository"</li>
                      <li>Select BitBucket and authorize PRQuality</li>
                      <li>Choose repositories to analyze</li>
                    </ol>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6">3. Configure Your Analysis Settings</h2>
                <p className="mb-4">
                  Customize how PRQuality analyzes your code by setting up your preferences.
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex">
                    <CheckCircle className="text-primary mr-2 h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Choose Programming Languages</h4>
                      <p className="text-muted-foreground">Select which languages should be analyzed</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-primary mr-2 h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Set Quality Thresholds</h4>
                      <p className="text-muted-foreground">Define your own standards for code quality scoring</p>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="text-primary mr-2 h-5 w-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Configure Review Depth</h4>
                      <p className="text-muted-foreground">Set how detailed the code analysis should be</p>
                    </div>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6">4. Start Analyzing Pull Requests</h2>
                <p className="mb-8">
                  Once configured, PRQuality will automatically begin analyzing your pull requests. 
                  You can view the analysis results in your dashboard.
                </p>
                
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <GitBranch className="mr-2 h-5 w-5" /> Ready to get started?
                  </h3>
                  <p className="mb-4">
                    Follow our detailed setup guide or contact our support team if you need assistance.
                  </p>
                  <Button asChild>
                    <Link to="/login">Set Up PRQuality Now</Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GettingStarted;
