export function Card({ children, className = "", ...props }) {
    return (
      <div className={`rounded-lg shadow-lg bg-background p-4 ${className}`} {...props}>
        {children}
      </div>
    );
  }
  