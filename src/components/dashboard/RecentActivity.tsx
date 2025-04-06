
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCode, Check, AlertTriangle } from "lucide-react";

const activities = [
  {
    type: "analysis",
    repo: "user/repo",
    pr: "Update authentication flow",
    timeAgo: "10 minutes ago",
    icon: FileCode,
  },
  {
    type: "improvement",
    repo: "user/repo",
    pr: "Fix pagination in user list",
    timeAgo: "1 hour ago",
    icon: Check,
  },
  {
    type: "warning",
    repo: "user/other-repo",
    pr: "Add payment integration",
    timeAgo: "3 hours ago",
    icon: AlertTriangle,
  },
  {
    type: "analysis",
    repo: "user/demo-repo",
    pr: "Refactor components",
    timeAgo: "5 hours ago",
    icon: FileCode,
  },
];

const RecentActivity = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <div key={i} className="flex">
              <div className="mr-4">
                <div className={`h-9 w-9 rounded-full flex items-center justify-center ${
                  activity.type === 'warning' 
                    ? 'bg-amber-500/20 text-amber-500' 
                    : activity.type === 'improvement' 
                      ? 'bg-green-500/20 text-green-500' 
                      : 'bg-blue-500/20 text-blue-500'
                }`}>
                  <activity.icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="font-medium">
                  {activity.type === 'analysis' && 'New analysis completed'}
                  {activity.type === 'improvement' && 'Code improvement accepted'}
                  {activity.type === 'warning' && 'Potential issue detected'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.repo}: {activity.pr}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{activity.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
