
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const Integrations = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Integrations</h1>
            <p className="text-muted-foreground">
              Manage integrations with third-party services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-sm text-muted-foreground">Connect your GitHub repositories</p>
                </div>
                <div className="ml-auto">
                  <button className="text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-md">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/10 p-2 rounded text-blue-500">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M2.65,0L0.53,7.53l3.12-0.01L1.54,15.5l8.15-12.37H4.81L7.84,0H2.65z M11.4,0l-2.72,4.45L11.88,9l3.04-3.07L11.4,0z M18.13,5.54L13.76,9.87l6.1,9.46L24,7.53L18.13,5.54z M0,16.38l4.18,3.96L6.88,16.4L0,16.38z M7.54,16.83l-1.82,5.3h8.78l-3.08-4.71L7.54,16.83z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Bitbucket</h3>
                  <p className="text-sm text-muted-foreground">Connect your Bitbucket repositories</p>
                </div>
                <div className="ml-auto">
                  <a href="/dashboard/bitbucket-connect" className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-md">
                    Connect
                  </a>
                </div>
              </div>
            </div>
{/*             
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-muted p-2 rounded">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Jira</h3>
                  <p className="text-sm text-muted-foreground">Link PR analysis to Jira tickets</p>
                </div>
                <div className="ml-auto">
                  <button className="text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-md">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div> */}
            
            {/* <div className="border border-border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-muted p-2 rounded">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M7 8h10M7 12h10M7 16h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Slack</h3>
                  <p className="text-sm text-muted-foreground">Get PR analysis notifications</p>
                </div>
                <div className="ml-auto">
                  <button className="text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-md">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Integrations;
