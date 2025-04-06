
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const Analytics = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Analytics</h1>
            <p className="text-muted-foreground">
              View analytics and metrics for your pull requests and code quality
            </p>
          </div>
          
          <div className="bg-muted/40 rounded-lg p-8 text-center">
            <h2 className="text-xl font-medium mb-2">Analytics Coming Soon</h2>
            <p className="text-muted-foreground mb-4">
              In-depth analytics and reporting will be available in the next update.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
