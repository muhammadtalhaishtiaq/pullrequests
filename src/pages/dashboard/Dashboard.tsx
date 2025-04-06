
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatCard from '@/components/dashboard/StatCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';
import PRCard from '@/components/dashboard/PRCard';
import { GitPullRequest, GitMerge, AlertTriangle, CheckCircle } from 'lucide-react';

// Mock data for pull requests
const recentPRs = [
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
];

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Dashboard Overview</h1>
            <p className="text-muted-foreground">
              Monitor your repositories and pull requests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Open PRs"
              value="12"
              icon={GitPullRequest}
              trendValue="+2"
              trendDirection="up"
            />
            <StatCard
              title="Merged PRs (This Week)"
              value="24"
              icon={GitMerge}
              trendValue="+5"
              trendDirection="up"
            />
            <StatCard
              title="Issues Identified"
              value="8"
              icon={AlertTriangle}
              trendValue="-3"
              trendDirection="down"
            />
            <StatCard
              title="Avg. Quality Score"
              value="76"
              description="Across all repositories"
              icon={CheckCircle}
              trendValue="+2.5"
              trendDirection="up"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <RecentActivity />
            <QuickActions />
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Recent Pull Requests</h2>
            <div className="grid grid-cols-1 gap-4">
              {recentPRs.map((pr) => (
                <PRCard key={pr.id} {...pr} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
