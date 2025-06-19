import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, LogIn } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('admin@example.com'); // Default credential
  const [password, setPassword] = useState('password');    // Default credential
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  console.log('LoginPage loaded');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    console.log('Login attempt:', { email, password, rememberMe });

    // Simulate API call
    if (email === 'admin@example.com' && password === 'password') {
      console.log('Login successful');
      // In a real app, set auth token here
      navigate('/dashboard');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-16 w-16 mb-4">
            <AvatarImage src="https://placehold.co/100x100/007bff/white?text=App" alt="App Logo" />
            <AvatarFallback><LogIn size={32} /></AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">Login to Your Account</CardTitle>
          <CardDescription>Enter your credentials to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Login Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email / Username</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="rememberMe" className="text-sm font-normal">Remember me</Label>
              </div>
              <Button variant="link" asChild className="px-0 text-sm">
                <Link to="/forgot-password">Forgot password?</Link>
              </Button>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <Separator className="my-6" />
           <div className="text-center text-sm">
            Don't have an account?{' '}
            <Button variant="link" asChild className="px-0">
              <Link to="/register">Sign up</Link>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;