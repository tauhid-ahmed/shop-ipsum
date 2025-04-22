"use client";

export default function RootErrorPage({ error }: { error: Error }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.name}</p>
      <p>{error.message}</p>
    </div>
  );
}
