import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase';
import { hashPassword, validateEmail, validatePassword, validateUsername } from '@/lib/utils';

const Register = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const navigate = useNavigate();
  
  const validateForm = (formData: FormData) => {
    const errors: typeof formErrors = {};
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    // if (!validateUsername(username)) {
    //   errors.username = 'Username must be 3-20 characters and contain only letters and numbers';
    // }

    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    // if (!validatePassword(password)) {
    //   errors.password = 'Password must be at least 8 characters with uppercase, lowercase, and number';
    // }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    
    // Get form data
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Validate form
    if (!validateForm(formData)) {
      setLoading(false);
      return;
    }

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const username = formData.get('username') as string;
    const hashedPassword = await hashPassword(password);

    try {
      // First, create the auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username
          }
        }
      });

      if (authError) {
        throw authError;
      }

      if (!authData.user) {
        throw new Error('Failed to create auth user');
      }

      // Then, create the user in the users table with the auth user's UUID
      const { error: userError } = await supabase
        .from('users')
        .insert([
          {
            email,
            username,
            password: hashedPassword,
            uuid: authData.user.id // Use the auth user's UUID
          }
        ]);

      if (userError) {
        // If user creation fails, delete the auth user
        await supabase.auth.admin.deleteUser(authData.user.id);
        throw userError;
      }

      toast({
        title: "Success",
        description: "Registration successful! Please check your email to verify your account.",
      });
      navigate('/login');
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Error",
        description: error.message || "An error occurred during registration",
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
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>Enter your details to get started</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form className="space-y-4" onSubmit={handleRegisterSubmit}>
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  placeholder="johndoe"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  required
                  disabled={loading}
                />
                {formErrors.username && (
                  <p className="text-sm text-red-500">{formErrors.username}</p>
                )}
              </div>
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
                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
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
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Confirm Password
                </label>
                <Input 
                  id="confirmPassword" 
                  name="confirmPassword"
                  type="password" 
                  required
                  disabled={loading}
                />
                {formErrors.confirmPassword && (
                  <p className="text-sm text-red-500">{formErrors.confirmPassword}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col">
            <div className="text-center text-sm text-muted-foreground mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
