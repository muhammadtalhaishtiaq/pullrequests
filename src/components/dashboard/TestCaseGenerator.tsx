
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode, Download, Check, Copy, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TestCaseGeneratorProps {
  prId?: string;
  codeSnippet?: string;
}

const TestCaseGenerator: React.FC<TestCaseGeneratorProps> = ({ 
  prId, 
  codeSnippet = "" 
}) => {
  const [code, setCode] = useState(codeSnippet);
  const [isGenerating, setIsGenerating] = useState(false);
  const [testCases, setTestCases] = useState<{
    unit: string;
    integration: string;
    e2e: string;
  }>({ unit: "", integration: "", e2e: "" });
  const { toast } = useToast();
  
  // Mock function to simulate test case generation
  const generateTestCases = () => {
    if (!code.trim()) {
      toast({
        title: "Error",
        description: "Please provide code to generate test cases.",
        variant: "destructive"
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Mock responses - in a real application, these would come from an API
      const generatedUnitTests = mockUnitTests(code);
      const generatedIntegrationTests = mockIntegrationTests(code);
      const generatedE2ETests = mockE2ETests(code);
      
      setTestCases({
        unit: generatedUnitTests,
        integration: generatedIntegrationTests,
        e2e: generatedE2ETests
      });
      
      setIsGenerating(false);
      
      toast({
        title: "Success",
        description: "Test cases generated successfully!",
        variant: "default" // Changed from "success" to "default"
      });
    }, 2000);
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: "Copied to clipboard",
      duration: 3000,
    });
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Test Case Generator</CardTitle>
        <CardDescription>
          Generate unit, integration, and E2E tests based on your code changes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="code" className="block text-sm font-medium mb-2">
              Input Code
            </label>
            <Textarea
              id="code"
              placeholder="Paste your code here or fetch from PR..."
              className="h-48 font-mono"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          
          {testCases.unit && (
            <Tabs defaultValue="unit" className="mt-8">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="unit">Unit Tests</TabsTrigger>
                <TabsTrigger value="integration">Integration Tests</TabsTrigger>
                <TabsTrigger value="e2e">E2E Tests</TabsTrigger>
              </TabsList>
              
              <TabsContent value="unit" className="relative">
                <div className="absolute top-2 right-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(testCases.unit)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-accent p-4 rounded-md overflow-auto h-64 font-mono text-sm">
                  {testCases.unit}
                </pre>
              </TabsContent>
              
              <TabsContent value="integration" className="relative">
                <div className="absolute top-2 right-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(testCases.integration)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-accent p-4 rounded-md overflow-auto h-64 font-mono text-sm">
                  {testCases.integration}
                </pre>
              </TabsContent>
              
              <TabsContent value="e2e" className="relative">
                <div className="absolute top-2 right-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(testCases.e2e)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="bg-accent p-4 rounded-md overflow-auto h-64 font-mono text-sm">
                  {testCases.e2e}
                </pre>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {prId && (
          <Button variant="outline" disabled={isGenerating}>
            <FileCode className="mr-2 h-4 w-4" />
            Fetch from PR
          </Button>
        )}
        <div className="flex gap-2">
          {testCases.unit && (
            <Button variant="outline" disabled={isGenerating}>
              <Download className="mr-2 h-4 w-4" />
              Download All
            </Button>
          )}
          <Button onClick={generateTestCases} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : testCases.unit ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Regenerate
              </>
            ) : (
              <>
                <Check className="mr-2 h-4 w-4" />
                Generate Tests
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

// Mock functions to generate sample test cases
function mockUnitTests(code: string): string {
  // This would be replaced by actual AI generation in a real implementation
  return `import { test, expect } from 'vitest';
import { functionName } from './path-to-module';

test('functionName should handle normal input correctly', () => {
  const result = functionName('test input');
  expect(result).toBe('expected output');
});

test('functionName should handle edge cases', () => {
  expect(functionName('')).toBe('');
  expect(functionName(null)).toBeNull();
});

test('functionName should throw error for invalid input', () => {
  expect(() => functionName(undefined)).toThrow();
});`;
}

function mockIntegrationTests(code: string): string {
  return `import { test, expect } from 'vitest';
import { moduleA } from './path-to-moduleA';
import { moduleB } from './path-to-moduleB';

test('moduleA should interact correctly with moduleB', async () => {
  const resultA = moduleA.process('input');
  const resultB = await moduleB.handle(resultA);
  expect(resultB.status).toBe('success');
});

test('complete workflow should execute correctly', async () => {
  const input = { data: 'test' };
  const output = await completeWorkflow(input);
  expect(output).toHaveProperty('id');
  expect(output.processed).toBe(true);
});`;
}

function mockE2ETests(code: string): string {
  return `import { test, expect } from '@playwright/test';

test('user can submit the form successfully', async ({ page }) => {
  await page.goto('/form');
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  await expect(page.locator('.success-message')).toBeVisible();
});

test('error is displayed for invalid input', async ({ page }) => {
  await page.goto('/form');
  await page.click('button[type="submit"]');
  await expect(page.locator('.error-message')).toBeVisible();
});`;
}

export default TestCaseGenerator;
