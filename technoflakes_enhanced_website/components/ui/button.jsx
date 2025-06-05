export function Button({ className = "", children, variant = "default", ...props }) {
  const baseClasses = "rounded-2xl px-5 py-2 text-white shadow-md transition-all";
  const variantClasses =
    variant === "secondary"
      ? "bg-gray-700 hover:bg-gray-600"
      : "bg-blue-600 hover:bg-blue-500";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}