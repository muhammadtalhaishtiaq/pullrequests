
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  trendValue?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
};

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon,
  trendValue,
  trendDirection
}: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trendValue && trendDirection && (
          <div className={`text-xs flex items-center mt-1 ${
            trendDirection === 'up' ? 'text-success' :
            trendDirection === 'down' ? 'text-danger' :
            'text-muted-foreground'
          }`}>
            <span>{trendValue}</span>
            <span className="ml-1">{trendDirection === 'up' ? '↑' : trendDirection === 'down' ? '↓' : '→'}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
