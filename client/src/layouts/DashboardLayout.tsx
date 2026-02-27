import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="p-4">
        <SidebarTrigger size={"lg"} />
      </div>
      <main className="p-4">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
