import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/landing";
import AdminLogin from "@/pages/auth/admin-login";
import ConsumerLogin from "@/pages/auth/consumer-login";
import AdminDashboard from "@/pages/admin/dashboard";
import ConsumerDashboard from "@/pages/consumer/dashboard";

import AuthOptions from "@/pages/auth-options";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/auth-options" component={AuthOptions} />
      
      {/* Auth Routes */}
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/consumer/login" component={ConsumerLogin} />
      
      {/* Dashboard Routes */}
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/consumer/dashboard" component={ConsumerDashboard} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
