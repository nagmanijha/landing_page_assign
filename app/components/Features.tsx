import { 
  Zap, 
  BarChart3, 
  MessageSquare
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      title: "Real-time Sync",
      description: "Changes happen instantly across all devices. No refreshing required.",
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: "Deep Analytics",
      description: "Understand where your team spends time with automated reports.",
      icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: "Team Chat",
      description: "Contextual discussions right inside your tasks. Goodbye, email threads.",
      icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to ship faster
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Powerful features packaged in a simple interface.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};