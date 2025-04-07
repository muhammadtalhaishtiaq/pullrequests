import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setUserEmail(user.email || '');
    }
  }, [user]);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to change password",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all password fields",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    try {
      // First, verify the current password
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email!,
        password: currentPassword,
      });

      if (signInError) {
        throw new Error("Current password is incorrect");
      }

      // If current password is correct, update to new password
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (updateError) throw updateError;

      // Clear the form and show success message
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
      toast({
        title: "Success",
        description: "Password updated successfully!",
      });
    } catch (error: any) {
      console.error('Error changing password:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to update password",
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
            <h1 className="text-2xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Manage your account, analysis preferences, and notification settings
            </p>
          </div>
          
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="w-full max-w-md mb-6">
              <TabsTrigger value="account" className="flex-1">Account</TabsTrigger>
              {/* <TabsTrigger value="preferences" className="flex-1">Preferences</TabsTrigger> */}
              {/* <TabsTrigger value="notifications" className="flex-1">Notifications</TabsTrigger> */}
            </TabsList>
            
            <TabsContent value="account">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handlePasswordChange} className="space-y-6">
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={userEmail} 
                        readOnly 
                        className="bg-muted"
                      />
                      <p className="text-sm text-muted-foreground">
                        Email address cannot be changed
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input 
                        id="current-password" 
                        type="password" 
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input 
                        id="new-password" 
                        type="password" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input 
                        id="confirm-password" 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                    
                    <div>
                      <Button 
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Updating..." : "Update Password"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Automatic PR Analysis</h3>
                        <p className="text-sm text-muted-foreground">
                          Automatically analyze pull requests when created
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Generate Test Cases</h3>
                        <p className="text-sm text-muted-foreground">
                          Automatically generate test cases for pull requests
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Dark Theme</h3>
                        <p className="text-sm text-muted-foreground">
                          Use dark theme for the application
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div>
                      <Button>Save Preferences</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-muted-foreground">
                          Receive email notifications for important updates
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">PR Analysis Completed</h3>
                        <p className="text-sm text-muted-foreground">
                          Notification when PR analysis is completed
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Critical Issues</h3>
                        <p className="text-sm text-muted-foreground">
                          Notification for critical issues found in PRs
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div>
                      <Button>Save Notification Settings</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Settings;
