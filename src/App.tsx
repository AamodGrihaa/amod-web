import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Import Navbar
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SocietyRegistration from "./pages/SocietyReg/Signup"; // ✅ Import Society Registration Page
import LoginPage from "./pages/SocietyReg/Login";
import ContactPage from "./pages/contactPage/contactpage";
const queryClient = new QueryClient();

const Layout = () => {
  const location = useLocation(); // ✅ Get current route

  return (
    <>
      {/* ✅ Show Navbar only if NOT on Society Registration page */}
      {location.pathname !== "/register-society" && <Navbar />}
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register-society" element={<SocietyRegistration />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage/>}/>
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
