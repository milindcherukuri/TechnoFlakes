export function Button({ className, children, variant = "default", ...props }) {
  return (
    <button
      className={`rounded-2xl px-5 py-2 text-white shadow-md transition ${variant === "secondary" ? "bg-gray-700 hover:bg-gray-600" : "bg-blue-600 hover:bg-blue-500"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}