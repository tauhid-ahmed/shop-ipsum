export function FormErrors({
  errors = [
    "Password must be at least 4 characters long",
    "Password must contain at least one uppercase letter",
    "Password must contain at least one lowercase letter",
    "Password must contain at least one number",
    "Password must contain at least one special character (@$!%*?&)",
  ],
}: {
  errors: string[];
}) {
  return (
    <ul className="text-xs text-destructive">
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
}
