import {
  AdminContainer,
  AdminHeader,
  Sidebar,
  SidebarProvider,
} from "./_components";

export default function AdminDashboardLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <SidebarProvider>
        <AdminContainer>
          <Sidebar />
          <div className="px-[var(--_sidebar-spacing)]">
            <AdminHeader />
            {children}
          </div>
        </AdminContainer>
      </SidebarProvider>
    </>
  );
}
