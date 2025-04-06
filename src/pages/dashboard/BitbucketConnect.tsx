
import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const BitbucketConnect = () => {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientId || !clientSecret) {
      toast({
        title: "Error",
        description: "Please provide both Client ID and Client Secret",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, we would validate these credentials with Bitbucket
    console.log("Connecting with:", { clientId, clientSecret });
    
    // Simulate successful connection
    setTimeout(() => {
      setIsConnected(true);
      toast({
        title: "Success",
        description: "Successfully connected to Bitbucket!",
      });
    }, 1500);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setClientId('');
    setClientSecret('');
    toast({
      title: "Disconnected",
      description: "Bitbucket account has been disconnected",
    });
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Connect to Bitbucket</h1>
            <p className="text-muted-foreground">
              Connect your Bitbucket account to analyze your pull requests
            </p>
          </div>
          
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>{isConnected ? "Bitbucket Connection" : "Connect Your Bitbucket Account"}</CardTitle>
              <CardDescription>
                {isConnected 
                  ? "Your Bitbucket account is currently connected" 
                  : "Provide your Bitbucket OAuth credentials to connect your account"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isConnected ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500/20 text-green-600 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span>Connected to Bitbucket</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Client ID</p>
                    <p className="font-mono text-sm bg-muted p-2 rounded">
                      {clientId.slice(0, 4)}...{clientId.slice(-4)}
                    </p>
                  </div>
                  <Button onClick={handleDisconnect} variant="destructive" className="w-full">
                    Disconnect Account
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleConnect} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="clientId" className="text-sm font-medium">
                      Client ID
                    </label>
                    <Input
                      id="clientId"
                      value={clientId}
                      onChange={(e) => setClientId(e.target.value)}
                      placeholder="Enter your Bitbucket Client ID"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="clientSecret" className="text-sm font-medium">
                      Client Secret
                    </label>
                    <Input
                      id="clientSecret"
                      value={clientSecret}
                      onChange={(e) => setClientSecret(e.target.value)}
                      type="password"
                      placeholder="Enter your Bitbucket Client Secret"
                      required
                    />
                  </div>
                  <div className="pt-2">
                    <Button type="submit" className="w-full">
                      Connect to Bitbucket
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
          
          <div className="mt-8 max-w-md mx-auto">
            <h3 className="text-lg font-medium mb-3">How to get your Bitbucket credentials</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Log in to your Bitbucket account</li>
              <li>Navigate to Bitbucket Settings &gt; Workspace settings &gt; OAuth consumers</li>
              <li>Click "Add consumer" and fill in the required information</li>
              <li>Set the callback URL to: <code className="bg-muted p-1 rounded text-xs">https://your-domain.com/auth/callback</code></li>
              <li>Grant the required permissions for repository and pull request access</li>
              <li>Once created, copy the "Key" (Client ID) and "Secret" (Client Secret)</li>
              <li>Paste these values in the form above</li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BitbucketConnect;
