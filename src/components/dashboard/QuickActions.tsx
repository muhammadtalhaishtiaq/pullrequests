
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CirclePlus, RefreshCw, GitPullRequest, Filter } from "lucide-react";

const QuickActions = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-2">
          <Button variant="outline" className="justify-start">
            <CirclePlus className="mr-2 h-4 w-4" />
            Connect New Repository
          </Button>
          <Button variant="outline" className="justify-start">
            <RefreshCw className="mr-2 h-4 w-4" />
            Re-Analyze Latest PRs
          </Button>
          <Button variant="outline" className="justify-start">
            <GitPullRequest className="mr-2 h-4 w-4" />
            Create Report
          </Button>
          <Button variant="outline" className="justify-start">
            <Filter className="mr-2 h-4 w-4" />
            Customize Analysis Rules
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
