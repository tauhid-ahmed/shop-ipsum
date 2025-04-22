"use client";

import Error from "@/components/error";
import { env } from "@/constants/env";

export default function RootErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const extendedMessage =
    env.NEXT_PUBLIC_NODE_ENV === "development" ? error.stack : undefined;

  return (
    <Error
      title={error.name}
      message={error.message}
      extendedMessage={extendedMessage}
      reset={reset}
    />
  );
}
