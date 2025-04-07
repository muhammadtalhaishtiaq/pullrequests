import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    try {
      // First, check if the user exists in the users table
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('uuid')
        .eq('email', email)
        .single();

      if (userError) {
        console.error('Error fetching user:', userError);
        throw new Error('Error checking user account');
      }

      if (!userData) {
        throw new Error('No account found with this email address');
      }

      // Delete all existing reset tokens for this user
      const { error: deleteError } = await supabase
        .from('password_reset_tokens')
        .delete()
        .eq('user_id', userData.uuid);

      if (deleteError) {
        console.error('Error deleting old tokens:', deleteError);
        throw new Error('Error preparing password reset');
      }

      // Generate a unique token
      const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
      
      // Store the token in our table first
      const { error: insertError } = await supabase
        .from('password_reset_tokens')
        .insert({
          user_id: userData.uuid,
          token: token,
          expires_at: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
          used: false
        });

      if (insertError) {
        console.error('Error storing reset token:', insertError);
        throw new Error('Error preparing password reset');
      }

      // Use Supabase's built-in password reset functionality with our token
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password?token=${token}&type=recovery`
      });

      if (error) {
        console.error('Error sending reset email:', error);
        throw error;
      }

      setEmailSent(true);
      toast({
        title: "Success",
        description: "Password reset email sent! Please check your inbox.",
      });
    } catch (error: any) {
      console.error('Error in handleSubmit:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send reset email",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold mb-2">Forgot Password</h1>
          <p className="text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              {emailSent 
                ? "Check your email for the password reset link"
                : "Enter your email address to receive a password reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {emailSent ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500/20 text-green-600 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span>Reset email sent successfully!</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
                </p>
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setEmailSent(false)}
                  >
                    Send Another Email
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-sm">
          <Link 
            to="/login" 
            className="text-primary hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 