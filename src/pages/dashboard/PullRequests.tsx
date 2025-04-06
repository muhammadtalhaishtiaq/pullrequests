
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import PRCard from '@/components/dashboard/PRCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Filter, GitPullRequest } from 'lucide-react';

// Mock data for pull requests
const pullRequests = [
  {
    id: "pr1",
    repo: "user/repo",
    title: "Update authentication flow and user session management",
    author: "johndoe",
    createdAt: "1 hour ago",
    score: 85,
    status: "open" as const,
  },
  {
    id: "pr2",
    repo: "user/repo",
    title: "Fix pagination in user list component",
    author: "janedoe",
    createdAt: "3 hours ago",
    score: 73,
    status: "open" as const,
  },
  {
    id: "pr3",
    repo: "user/another-repo",
    title: "Add payment integration API",
    author: "alexsmith",
    createdAt: "1 day ago",
    score: 42,
    status: "merged" as const,
  },
  {
    id: "pr4",
    repo: "user/repo",
    title: "Refactor authentication middleware",
    author: "johndoe",
    createdAt: "2 days ago",
    score: 91,
    status: "merged" as const,
  },
  {
    id: "pr5",
    repo: "user/another-repo",
    title: "Fix memory leak in background service",
    author: "sarahparker",
    createdAt: "2 days ago",
    score: 67,
    status: "open" as const,
  },
  {
    id: "pr6",
    repo: "user/demo-repo",
    title: "Update dependencies and security patches",
    author: "mikebrown",
    createdAt: "3 days ago",
    score: 35,
    status: "closed" as const,
  },
];

const PullRequests = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">Pull Requests</h1>
              <p className="text-muted-foreground">
                Manage and analyze your pull requests
              </p>
            </div>
            <Button>
              <GitPullRequest className="mr-2 h-4 w-4" />
              Analyze New PR
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="all">All PRs</TabsTrigger>
                <TabsTrigger value="open">Open</TabsTrigger>
                <TabsTrigger value="merged">Merged</TabsTrigger>
                <TabsTrigger value="closed">Closed</TabsTrigger>
              </TabsList>
              
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search PRs..."
                    className="pl-9 h-9 w-full sm:w-64"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="highest">Highest Score</SelectItem>
                    <SelectItem value="lowest">Lowest Score</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <TabsContent value="all" className="space-y-4">
              {pullRequests.map((pr) => (
                <PRCard key={pr.id} {...pr} />
              ))}
            </TabsContent>
            
            <TabsContent value="open" className="space-y-4">
              {pullRequests
                .filter((pr) => pr.status === "open")
                .map((pr) => (
                  <PRCard key={pr.id} {...pr} />
                ))}
            </TabsContent>
            
            <TabsContent value="merged" className="space-y-4">
              {pullRequests
                .filter((pr) => pr.status === "merged")
                .map((pr) => (
                  <PRCard key={pr.id} {...pr} />
                ))}
            </TabsContent>
            
            <TabsContent value="closed" className="space-y-4">
              {pullRequests
                .filter((pr) => pr.status === "closed")
                .map((pr) => (
                  <PRCard key={pr.id} {...pr} />
                ))}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default PullRequests;
