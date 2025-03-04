export function BrandLogoSmall({
  width = 32,
  height = 32,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 42 40"
      {...props}
      className="text-primary"
    >
      <path
        d="M40 13.468a13.333 13.333 0 00-23.158-9.015H0V40h35.56V23.387A13.32 13.32 0 0040 13.468zm-6.842 0a6.505 6.505 0 11-13.01.027 6.505 6.505 0 0113.01-.027zm-4.44 19.69H6.842V11.295h6.667a12.895 12.895 0 00-.203 2.173 13.36 13.36 0 0013.347 13.347 13.042 13.042 0 002.065-.175v6.518z"
        fill="currentColor"
      />
    </svg>
  );
}
