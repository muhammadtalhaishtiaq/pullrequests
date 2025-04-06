
import React from 'react';
import { Github, Code, Bot, CheckCircle, FileCode, Lock } from 'lucide-react';

const features = [
  {
    title: 'GitHub & Bitbucket Integration',
    description: 'Seamlessly connect with your repositories and analyze pull requests from multiple sources.',
    icon: Github
  },
  {
    title: 'AI-Powered Analysis',
    description: 'Our advanced AI analyzes your code for patterns, anti-patterns, and quality issues.',
    icon: Bot
  },
  {
    title: 'Code Quality Score',
    description: 'Every PR gets a quality score helping teams maintain high standards through clear metrics.',
    icon: CheckCircle
  },
  {
    title: 'Auto-Generated Test Cases',
    description: 'Automatically generate test cases based on your code to improve coverage.',
    icon: FileCode
  },
  {
    title: 'Secure Authentication',
    description: 'Protect your code with SSO integration and secure authentication protocols.',
    icon: Lock
  },
  {
    title: 'Intelligent Recommendations',
    description: 'Get actionable suggestions for improving code quality and readability.',
    icon: Code
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Better Code</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            PRQuality combines AI analysis with developer-friendly features to streamline your code review process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-5">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
