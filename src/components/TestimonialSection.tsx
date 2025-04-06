
import React from 'react';

const testimonials = [
  {
    quote: "PRQuality has transformed our code review process. The AI suggestions are spot-on, and our code quality has improved significantly.",
    author: "Sarah Chen",
    title: "Lead Developer, TechCorp"
  },
  {
    quote: "The automatic test case generation has saved us countless hours and caught bugs we would have missed. It's become an essential part of our workflow.",
    author: "Marcus Johnson",
    title: "Engineering Manager, DevWorks"
  },
  {
    quote: "As a startup with a small team, PRQuality acts like an extra team member constantly watching over code quality. It's been invaluable.",
    author: "Leila Patel",
    title: "CTO, LaunchFast"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how PRQuality is helping teams improve their code quality and development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 rounded-lg">
              <div className="text-xl mb-6">"{testimonial.quote}"</div>
              <div className="mt-4">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
