import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from "@/components/ui/separator";
import { MailQuestion, CheckCircle2, AlertTriangle } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  console.log('ForgotPasswordPage loaded');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsError(false);

    // Simulate API call to send reset link
    console.log('Forgot password request for:', email);
    if (email.includes('@') && email.includes('.')) { // Basic email validation
      setMessage(`If an account with email ${email} exists, a password reset link has been sent.`);
      setIsError(false);
      // setEmail(''); // Optionally clear email field
    } else {
      setMessage('Please enter a valid email address.');
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <MailQuestion className="mx-auto h-12 w-12 mb-4 text-primary" />
          <CardTitle className="text-2xl font-bold">Forgot Your Password?</CardTitle>
          <CardDescription>
            No worries! Enter your email address below and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {message && (
              <Alert variant={isError ? "destructive" : "default"} className={!isError ? "bg-blue-100 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-300" : ""}>
                {isError ? <AlertTriangle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                <AlertTitle>{isError ? "Error" : "Information"}</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
          <Separator className="my-6" />
          <div className="text-center text-sm">
            Remember your password?{' '}
            <Button variant="link" asChild className="px-0">
              <Link to="/login">Back to Login</Link>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="text-center text-xs text-gray-500">
          Ensure you have access to this email account.
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;