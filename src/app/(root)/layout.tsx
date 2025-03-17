// import Header2 from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TopHeader from "@/components/layout/top-header";
import Header from "@/components/layout/header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <TopHeader /> */}
      <div className="shrink-0 sticky top-0 z-50">
        <Header />
      </div>
      <main className="flex-1">{children}</main>
      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
}
