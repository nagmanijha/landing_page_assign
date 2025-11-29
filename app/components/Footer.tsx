import { 
  Zap
} from 'lucide-react';


export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-indigo-600 flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">TaskFlow</span>
            </div>
            <p className="text-sm text-slate-500">
              Making teamwork less work.<br />
              © 2024 TaskFlow Inc.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600">Integrations</a></li>
              <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-600">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
              <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};