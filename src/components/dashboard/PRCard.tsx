
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { GitPullRequest, GitMerge, Clock, User } from "lucide-react";

type PRCardProps = {
  id: string;
  repo: string;
  title: string;
  author: string;
  createdAt: string;
  score: number;
  status: "open" | "merged" | "closed";
};

const PRCard = ({ id, repo, title, author, createdAt, score, status }: PRCardProps) => {
  const getScoreBadgeClass = () => {
    if (score >= 80) return "score-badge score-high";
    if (score >= 50) return "score-badge score-medium";
    return "score-badge score-low";
  };

  const getStatusIcon = () => {
    switch (status) {
      case "merged":
        return <GitMerge className="h-4 w-4 text-purple-400" />;
      case "closed":
        return <GitPullRequest className="h-4 w-4 text-red-400" />;
      default:
        return <GitPullRequest className="h-4 w-4 text-green-400" />;
    }
  };

  return (
    <Link to={`/dashboard/pull-requests/${id}`}>
      <Card className="hover:bg-accent/30 transition-colors p-4 cursor-pointer">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-muted-foreground">{repo}</div>
            <h3 className="text-base font-medium mt-1">{title}</h3>
            
            <div className="flex items-center mt-3 space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-3.5 w-3.5 mr-1" />
                <span>{author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>{createdAt}</span>
              </div>
              <div className="flex items-center">
                {getStatusIcon()}
                <span className="ml-1 capitalize">{status}</span>
              </div>
            </div>
          </div>
          
          <div className={getScoreBadgeClass()}>{score}</div>
        </div>
      </Card>
    </Link>
  );
};

export default PRCard;
