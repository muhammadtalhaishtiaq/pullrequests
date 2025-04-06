
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const Security = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Security</h1>
            <p className="text-muted-foreground">
              Manage security settings and access controls
            </p>
          </div>
          
          <div className="bg-muted/40 rounded-lg p-8 text-center">
            <h2 className="text-xl font-medium mb-2">Security Features Coming Soon</h2>
            <p className="text-muted-foreground mb-4">
              Advanced security settings will be available in the next update.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Security;
