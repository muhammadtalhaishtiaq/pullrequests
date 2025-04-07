import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import Dashboard from "./pages/dashboard/Dashboard";
import PullRequests from "./pages/dashboard/PullRequests";
import PullRequestDetail from "./pages/dashboard/PullRequestDetail";
import Repositories from "./pages/dashboard/Repositories";
import Team from "./pages/dashboard/Team";
import Analytics from "./pages/dashboard/Analytics";
import Integrations from "./pages/dashboard/Integrations";
import BitbucketConnect from "./pages/dashboard/BitbucketConnect";
import Security from "./pages/dashboard/Security";
import Notifications from "./pages/dashboard/Notifications";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

// Documentation pages
import GettingStarted from "./pages/docs/GettingStarted";
import PRAnalysis from "./pages/docs/PRAnalysis";
import TestCaseGeneration from "./pages/docs/TestCaseGeneration";
import CodeReviewCheckpoints from "./pages/docs/CodeReviewCheckpoints";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            
            {/* Documentation routes */}
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/getting-started" element={<GettingStarted />} />
            <Route path="/docs/pr-analysis" element={<PRAnalysis />} />
            <Route path="/docs/test-case-generation" element={<TestCaseGeneration />} />
            <Route path="/docs/code-review-checkpoints" element={<CodeReviewCheckpoints />} />
            
            {/* Dashboard routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/dashboard/pull-requests" element={<PullRequests />} />
            <Route path="/dashboard/pull-requests/:prId" element={<PullRequestDetail />} />
            <Route path="/dashboard/repositories" element={<Repositories />} />
            <Route path="/dashboard/team" element={<Team />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/integrations" element={<Integrations />} />
            <Route path="/dashboard/bitbucket-connect" element={<ProtectedRoute><BitbucketConnect /></ProtectedRoute>} />
            <Route path="/dashboard/security" element={<Security />} />
            <Route path="/dashboard/notifications" element={<Notifications />} />
            <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
