
export default function LinkAsButton({ children, className = '', ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...rest} className={`btn rounded-none ${className}`}>
      {children}
    </a >
  );
}
