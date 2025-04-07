import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase';
import { hashPassword, validateEmail } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const navigate = useNavigate();
  const location = useLocation();
  const { session } = useAuth();
  
  // If user is already logged in, redirect to dashboard
  React.useEffect(() => {
    if (session) {
      navigate('/dashboard');
    }
  }, [session, navigate]);

  const validateForm = (formData: FormData) => {
    const errors: typeof formErrors = {};
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(formData)) {
      setLoading(false);
      return;
    }

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const hashedPassword = await hashPassword(password);

    try {
      // First, check if user exists in users table
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .eq('password', hashedPassword)
        .single();

      if (userError || !userData) {
        throw new Error('Invalid email or password');
      }

      // Then, sign in with Supabase auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (authError) {
        throw authError;
      }

      if (authData?.user) {
        toast({
          title: "Success",
          description: "Login successful!",
        });
        
        // Redirect to the page they tried to visit or dashboard
        const from = (location.state as any)?.from?.pathname || '/dashboard';
        navigate(from, { replace: true });
      }
    } catch (error: any) {
      console.error('Login error:', error);
      toast({
        title: "Error",
        description: error.message || "An error occurred during login",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative">
        {/* Background elements */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="credentials" className="w-full">
            <TabsList className="grid grid-cols-1 mb-4">
              <TabsTrigger value="credentials">Credentials</TabsTrigger>
            </TabsList>
            
            <TabsContent value="credentials">
              <CardContent>
                <form className="space-y-4" onSubmit={handleLoginSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="example@company.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      required
                      disabled={loading}
                    />
                    {formErrors.email && (
                      <p className="text-sm text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Password
                      </label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      name="password"
                      type="password" 
                      required
                      disabled={loading}
                    />
                    {formErrors.password && (
                      <p className="text-sm text-red-500">{formErrors.password}</p>
                    )}
                  </div>
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Sign In"}
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm">
                    <Link 
                      to="/forgot-password" 
                      className="text-primary hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
          
          <CardFooter className="flex flex-col">
            <div className="text-center text-sm text-muted-foreground mt-4">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
