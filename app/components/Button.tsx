// @ts-ignore
export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm cursor-pointer",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-100 shadow-sm",
    ghost: "hover:bg-slate-100 text-slate-700",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-900"
  };
  return (
  // @ts-ignore
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
