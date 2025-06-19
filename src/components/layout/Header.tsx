import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Button } from '@/components/ui/button';
import { LogOut, LayoutDashboard } from 'lucide-react'; // Example icons

interface HeaderProps {
  // Props can be added here if needed, e.g., for user info or dynamic links
  userName?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, onLogout }) => {
  console.log("Rendering Header component");

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2 text-xl font-semibold text-foreground">
              <LayoutDashboard className="h-6 w-6 text-primary" />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {userName && (
              <span className="text-sm text-muted-foreground">
                Welcome, {userName}
              </span>
            )}
            {onLogout && (
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            )}
            {!onLogout && (
                 <Button variant="outline" size="sm" onClick={() => console.log('Logout placeholder clicked')}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout (Placeholder)
                </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;