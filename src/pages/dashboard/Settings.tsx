
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
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
              <TabsTrigger value="preferences" className="flex-1">Preferences</TabsTrigger>
              <TabsTrigger value="notifications" className="flex-1">Notifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="johndoe" />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john@example.com" />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    
                    <div>
                      <Button type="submit">Save Changes</Button>
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
