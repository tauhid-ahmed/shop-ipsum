export function ProductsGrid({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start">
      {children}
    </div>
  );
}

function Aside({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed md:sticky md:top-20 z-50 h-fit border rounded-lg shadow-sm p-4 overflow-auto max-h-[calc(100vh-120px)] max-md:mb-4">
      {children}
    </div>
  );
}

function Main({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-lg p-4 relative z-10">{children}</div>;
}

ProductsGrid.displayName = "ProductsGrid";
ProductsGrid.Aside = Aside;
ProductsGrid.Main = Main;
