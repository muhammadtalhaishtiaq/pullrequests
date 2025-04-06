
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const Repositories = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Repositories</h1>
            <p className="text-muted-foreground">
              Manage and monitor your connected repositories
            </p>
          </div>
          
          <div className="bg-muted/40 rounded-lg p-8 text-center">
            <h2 className="text-xl font-medium mb-2">No Repositories Connected</h2>
            <p className="text-muted-foreground mb-6">
              Connect your Bitbucket account to start analyzing your repositories and pull requests
            </p>
            <div className="flex justify-center">
              <a href="/dashboard/bitbucket-connect" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md">
                Connect Bitbucket
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Repositories;
