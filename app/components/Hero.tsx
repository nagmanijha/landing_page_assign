import { 
  ArrowRight,
  BarChart3
} from 'lucide-react';

import {Badge} from './Badge'
import { Button} from './Button';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Badge>Version 2.0 Now Live</Badge>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Manage projects without <br className="hidden sm:inline" />
          <span className="text-indigo-600">the total chaos.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
          Streamline your team&apos;s workflow with an intuitive platform designed for speed, clarity, and collaboration. Stop managing the tool and start doing the work.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="h-12 px-8 text-base w-full sm:w-auto">
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="secondary" className="h-12 px-8 text-base w-full sm:w-auto">
            View Demo
          </Button>
        </div>
        
        {/* Mock Dashboard Image */}
        <div className="mt-16 md:mt-20 relative mx-auto max-w-5xl rounded-xl border border-slate-200 bg-slate-50 p-2 sm:p-4 shadow-2xl">
          <div className="aspect-[16/9] overflow-hidden rounded-lg bg-white border border-slate-200 relative">
             <div className="absolute inset-0 flex items-center justify-center text-slate-300 bg-slate-50">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <span className="text-lg font-medium">Dashboard Preview</span>
                </div>
             </div>
             {/* Abstract UI Elements to simulate a dashboard */}
             <div className="absolute top-4 left-4 right-4 h-8 bg-slate-100 rounded animate-pulse w-3/4"></div>
             <div className="absolute top-16 left-4 w-1/4 h-32 bg-indigo-50 rounded animate-pulse"></div>
             <div className="absolute top-16 left-[30%] right-4 h-32 bg-slate-100 rounded animate-pulse"></div>
             <div className="absolute top-52 left-4 right-4 h-40 bg-slate-100 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-indigo-500/10 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[30%] -translate-y-[20%] rounded-full bg-pink-500/10 blur-[80px]"></div>
      </div>
    </section>
  );
};