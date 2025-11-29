import { 
  Menu, 
  X,  
  Zap
} from 'lucide-react';

import { useState } from "react";
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">TaskFlow</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
            <Button variant="primary" className="ml-2" href="#">Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-6 space-y-4">
          <a href="#" className="block text-sm font-medium text-slate-600">Features</a>
          <a href="#" className="block text-sm font-medium text-slate-600">Testimonials</a>
          <a href="#" className="block text-sm font-medium text-slate-600">Pricing</a>
          <Button className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};
