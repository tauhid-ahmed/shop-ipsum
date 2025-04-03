/**
 * Creates a debounced version of a function that delays its execution until after
 * the specified wait time has elapsed since the last time it was invoked.
 *
 * @param fn - The function to debounce
 * @param delay - The number of milliseconds to delay (default: 1000)
 * @returns A debounced version of the provided function
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay = 1000
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return function debouncedFn(this: unknown, ...args: Parameters<T>): void {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
