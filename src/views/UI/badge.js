export function Badge({ children, className = "", ...props }) {
    return (
      <span
        className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
  