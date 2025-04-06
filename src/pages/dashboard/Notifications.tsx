
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const Notifications = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">
              Manage notification settings and view recent notifications
            </p>
          </div>
          
          <div className="bg-muted/40 rounded-lg p-8 text-center">
            <h2 className="text-xl font-medium mb-2">No Notifications</h2>
            <p className="text-muted-foreground">
              You don't have any notifications yet. Connect your repositories to start receiving updates on your pull requests.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;
