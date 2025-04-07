import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileCode, Settings, LogOut, PieChart, Users, GitPullRequest, Server, Shield, Bell } from 'lucide-react';
import { cn } from "@/lib/utils";
import { LogoutButton } from "@/components/LogoutButton";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Pull Requests",
    href: "/dashboard/pull-requests",
    icon: GitPullRequest,
  },
  // {
  //   title: "Repositories",
  //   href: "/dashboard/repositories",
  //   icon: FileCode,
  // },
  // {
  //   title: "Team",
  //   href: "/dashboard/team",
  //   icon: Users,
  // },
  // {
  //   title: "Analytics",
  //   href: "/dashboard/analytics",
  //   icon: PieChart,
  // },
  {
    title: "Integrations",
    href: "/dashboard/integrations",
    icon: Server,
  },
  {
    title: "Bitbucket Connect",
    href: "/dashboard/bitbucket-connect",
    icon: Server,
  },
  // {
  //   title: "Security",
  //   href: "/dashboard/security",
  //   icon: Shield,
  // },
  // {
  //   title: "Notifications",
  //   href: "/dashboard/notifications",
  //   icon: Bell,
  // },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-64 border-r border-border/60 h-full">
      <div className="flex items-center gap-2 px-6 h-16">
        <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">
          <span className="text-primary-foreground font-bold text-sm">PR</span>
        </div>
        <Link to="/" className="font-semibold text-xl">PRQuality</Link>
      </div>
      
      <nav className="px-4 pb-4">
        <div className="py-4">
          <p className="text-xs font-medium text-muted-foreground mb-3 px-2">MAIN MENU</p>
          <ul className="space-y-1">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    location.pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4">
          <LogoutButton
            className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
            variant="ghost"
          >
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </LogoutButton>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
