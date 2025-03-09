export function FormErrors({ errors = [] }: { errors: string[] }) {
  return (
    <ul className="text-xs text-destructive">
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
}
