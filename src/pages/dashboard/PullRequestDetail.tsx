
import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { GitPullRequest, GitBranch, Clock, MessageSquare, File, FileCode } from 'lucide-react';
import TestCaseGenerator from '@/components/dashboard/TestCaseGenerator';

// Mock data for PR details
const prDetails = {
  id: "pr1",
  repo: "user/repo",
  title: "Update authentication flow and user session management",
  description: "This PR implements a more secure authentication flow using JWT tokens and improved session management. It also adds refresh token functionality and better error handling for auth failures.",
  author: "johndoe",
  createdAt: "2023-04-05T08:32:15Z",
  status: "open",
  branch: "feature/auth-improvements",
  targetBranch: "main",
  score: 85,
  commits: 4,
  changedFiles: 7,
  comments: 3,
  analysis: {
    summary: "Overall good quality code with some minor improvements suggested. Authentication logic is well structured with proper security considerations.",
    improvements: [
      "Consider adding additional validation for refresh tokens",
      "Some functions could be broken down into smaller, more focused units",
      "Add more comprehensive error handling for network failures"
    ],
    criticalIssues: [],
    suggestions: [
      {
        file: "src/services/auth.js",
        line: 45,
        code: "function validateToken(token) { /* ... */ }",
        suggestion: "Consider using a try/catch block to handle potential JSON parsing errors"
      },
      {
        file: "src/hooks/useAuth.js",
        line: 23,
        code: "const handleLogin = async (credentials) => { /* ... */ }",
        suggestion: "Add specific error types for different authentication failures (invalid credentials, network issues, server errors)"
      }
    ],
    score: {
      overall: 85,
      security: 90,
      performance: 78,
      maintainability: 88
    }
  }
};

const PullRequestDetail = () => {
  const { prId } = useParams();
  
  // In a real app, we would fetch the PR details using the prId
  // For now, we'll just use the mock data
  
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <GitPullRequest className="h-4 w-4" />
                <span>{prDetails.repo}</span>
                <span>•</span>
                <span>Pull Request #{prId}</span>
              </div>
              <h1 className="text-2xl font-bold mb-1">{prDetails.title}</h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <GitBranch className="h-3.5 w-3.5" />
                  <span>{prDetails.branch} → {prDetails.targetBranch}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Created {new Date(prDetails.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                prDetails.status === "open" ? "bg-green-500/20 text-green-500" :
                prDetails.status === "merged" ? "bg-purple-500/20 text-purple-500" :
                "bg-red-500/20 text-red-500"
              }`}>
                {prDetails.status.charAt(0).toUpperCase() + prDetails.status.slice(1)}
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                prDetails.analysis.score.overall >= 80 ? "bg-green-500/20 text-green-500" :
                prDetails.analysis.score.overall >= 50 ? "bg-yellow-500/20 text-yellow-500" :
                "bg-red-500/20 text-red-500"
              }`}>
                Score: {prDetails.analysis.score.overall}/100
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-muted-foreground">
              {prDetails.description}
            </p>
          </div>
          
          <Tabs defaultValue="analysis">
            <TabsList className="mb-6">
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="changes">Changes</TabsTrigger>
              <TabsTrigger value="tests">Test Cases</TabsTrigger>
              <TabsTrigger value="comments">Comments ({prDetails.comments})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analysis" className="space-y-6">
              <div className="bg-card rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Analysis Summary</h2>
                <p className="mb-6">{prDetails.analysis.summary}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-background rounded-md p-4 border">
                    <h3 className="text-sm font-medium mb-2">Overall Score</h3>
                    <div className="text-2xl font-bold">{prDetails.analysis.score.overall}/100</div>
                  </div>
                  <div className="bg-background rounded-md p-4 border">
                    <h3 className="text-sm font-medium mb-2">Security</h3>
                    <div className="text-2xl font-bold">{prDetails.analysis.score.security}/100</div>
                  </div>
                  <div className="bg-background rounded-md p-4 border">
                    <h3 className="text-sm font-medium mb-2">Performance</h3>
                    <div className="text-2xl font-bold">{prDetails.analysis.score.performance}/100</div>
                  </div>
                  <div className="bg-background rounded-md p-4 border">
                    <h3 className="text-sm font-medium mb-2">Maintainability</h3>
                    <div className="text-2xl font-bold">{prDetails.analysis.score.maintainability}/100</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3">Suggested Improvements</h3>
                <ul className="space-y-2 mb-6">
                  {prDetails.analysis.improvements.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {prDetails.analysis.criticalIssues.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mb-3">Critical Issues</h3>
                    <ul className="space-y-2 mb-6">
                      {prDetails.analysis.criticalIssues.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                <h3 className="text-lg font-semibold mb-3">Code Suggestions</h3>
                {prDetails.analysis.suggestions.map((suggestion, i) => (
                  <div key={i} className="mb-4 border rounded-md p-4 bg-background">
                    <div className="flex items-center text-sm mb-2">
                      <File className="h-3.5 w-3.5 mr-1.5" />
                      <span className="font-mono">{suggestion.file}:{suggestion.line}</span>
                    </div>
                    <div className="bg-accent p-3 rounded-md mb-2">
                      <code className="font-mono text-xs">{suggestion.code}</code>
                    </div>
                    <div className="pl-4 border-l-2 border-primary">
                      <p className="text-sm">{suggestion.suggestion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="changes">
              <div className="bg-card rounded-lg border p-6 min-h-[400px]">
                <h2 className="text-xl font-semibold mb-4">Changes</h2>
                <div className="flex items-center gap-3 mb-6">
                  <Button variant="outline" size="sm">
                    <FileCode className="mr-2 h-4 w-4" />
                    {prDetails.changedFiles} Changed Files
                  </Button>
                  <Button variant="outline" size="sm">
                    <GitBranch className="mr-2 h-4 w-4" />
                    {prDetails.commits} Commits
                  </Button>
                </div>
                <div className="text-center text-muted-foreground py-12">
                  File diff viewer would be displayed here in the complete application.
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tests">
              <div className="bg-card rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-6">Test Case Generator</h2>
                <TestCaseGenerator prId={prId} />
              </div>
            </TabsContent>
            
            <TabsContent value="comments">
              <div className="bg-card rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="h-4 w-4" />
                  <span>{prDetails.comments} comments</span>
                </div>
                <div className="text-center text-muted-foreground py-12">
                  Comments would be displayed here in the complete application.
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default PullRequestDetail;
