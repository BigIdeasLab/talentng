import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordConfirmation from "./pages/ForgotPasswordConfirmation";
import ResetPassword from "./pages/ResetPassword";
import CompleteProfile from "./pages/CompleteProfile";
import MyProfile from "./pages/MyProfile";
import Opportunities from "./pages/Opportunities";
import LearningHub from "./pages/LearningHub";
import Mentorship from "./pages/Mentorship";
import MentorDetail from "./pages/MentorDetail";
import JobDetail from "./pages/JobDetail";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password/confirmation" element={<ForgotPasswordConfirmation />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/mentorship/:id" element={<MentorDetail />} />
          <Route path="/opportunities/:id" element={<JobDetail />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
