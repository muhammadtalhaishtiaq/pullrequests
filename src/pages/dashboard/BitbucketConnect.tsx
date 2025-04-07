import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';

const BitbucketConnect = () => {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    const fetchCredentials = async () => {
      if (!user) {
        setFetching(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('bitbucket_credentials')
          .select('client_id, client_secret')
          .eq('user_id', user.id)
          .single();

        if (error) {
          if (error.code === 'PGRST116') { // No rows returned
            // No credentials found, which is fine
            setClientId('');
            setClientSecret('');
          } else {
            throw error;
          }
        } else if (data) {
          setClientId(data.client_id);
          setClientSecret(data.client_secret);
        }
      } catch (error) {
        console.error('Error fetching credentials:', error);
        toast({
          title: "Error",
          description: "Failed to load Bitbucket credentials",
          variant: "destructive"
        });
      } finally {
        setFetching(false);
      }
    };

    fetchCredentials();
  }, [user, toast]);

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to connect Bitbucket",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    if (!clientId || !clientSecret) {
      toast({
        title: "Error",
        description: "Please provide both Client ID and Client Secret",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    try {
      // Always try to update first
      const { error: updateError } = await supabase
        .from('bitbucket_credentials')
        .update({
          client_id: clientId,
          client_secret: clientSecret
        })
        .eq('user_id', user.id);

      // If no rows were updated (user doesn't have credentials yet), insert
      if (updateError || updateError?.code === 'PGRST116') {
        const { error: insertError } = await supabase
          .from('bitbucket_credentials')
          .insert({
            user_id: user.id,
            client_id: clientId,
            client_secret: clientSecret
          });

        if (insertError) throw insertError;
      }

      toast({
        title: "Success",
        description: "Bitbucket credentials saved successfully!",
      });
    } catch (error: any) {
      console.error('Error saving credentials:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save Bitbucket credentials",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
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
              <CardTitle>Connect Your Bitbucket Account</CardTitle>
              <CardDescription>
                Provide your Bitbucket OAuth credentials to connect your account
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                    disabled={loading || fetching}
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
                    disabled={loading || fetching}
                  />
                </div>
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={loading || fetching}
                  >
                    {loading ? "Saving..." : fetching ? "Loading..." : "Save Credentials"}
                  </Button>
                </div>
              </form>
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
