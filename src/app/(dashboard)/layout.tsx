import {
  AdminContainer,
  AdminHeader,
  Sidebar,
  SidebarProvider,
} from "./_components/";

export default function AdminDashboardLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <SidebarProvider>
        <AdminContainer>
          <Sidebar />
          <div className="">
            <AdminHeader />
            {children}
          </div>
        </AdminContainer>
      </SidebarProvider>
    </>
  );
}
