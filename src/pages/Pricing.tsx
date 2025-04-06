
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "For individuals and small teams getting started",
      features: [
        "5 repositories",
        "Basic code analysis",
        "Limited test case generation",
        "Community support",
        "7-day history retention"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "per user / month",
      description: "For growing teams who need more power",
      features: [
        "Unlimited repositories",
        "Advanced AI-powered analysis",
        "Full test case generation",
        "Email support",
        "30-day history retention",
        "Custom rules & scoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "SSO & advanced security",
        "Custom integrations",
        "SLA guarantees",
        "Unlimited history retention",
        "On-premise deployment options"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that's right for your team's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`border rounded-lg p-6 flex flex-col ${
                  plan.popular ? "border-primary shadow-md relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-semibold">
                    POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-primary mr-2 h-4 w-4 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/login">
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
