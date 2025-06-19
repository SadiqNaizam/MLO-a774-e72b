import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header'; // Custom Header
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button'; // For any other buttons on page if needed
import { BarChart, PieChart, Users } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('DashboardPage loaded');

  const handleLogout = () => {
    console.log('Logout initiated');
    // In a real app, clear auth token here
    navigate('/login');
  };

  // Placeholder data for dashboard cards
  const stats = [
    { title: "Total Users", value: "1,234", icon: <Users className="h-6 w-6 text-blue-500" />, trend: "+5% last month" },
    { title: "Active Sessions", value: "567", icon: <BarChart className="h-6 w-6 text-green-500" />, trend: "+12% today" },
    { title: "Conversion Rate", value: "12.5%", icon: <PieChart className="h-6 w-6 text-purple-500" />, trend: "-2% yesterday" },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header userName="Demo User" onLogout={handleLogout} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Welcome to your Dashboard</h1>
        
        {/* Stats Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">{stat.value}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Placeholder content area */}
        <Card>
          <CardHeader>
            <CardTitle>Your Notes / Activity</CardTitle>
            <CardDescription>A simple placeholder for dashboard content.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Type your notes or see recent activity here..."
              className="min-h-[150px] resize-none"
            />
            <div className="flex justify-end">
              <Button>Save Notes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Example of another section */}
         <section className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex space-x-4">
                    <Button variant="outline">View Reports</Button>
                    <Button variant="outline">Manage Settings</Button>
                    <Button variant="secondary">Create New Item</Button>
                </CardContent>
            </Card>
        </section>

      </main>
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        Dashboard Footer © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default DashboardPage;