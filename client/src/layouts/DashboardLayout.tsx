import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger size={"lg"} />
      {/* <main className="p-4">
        <SidebarTrigger />
      </main> */}
      <Outlet />
    </SidebarProvider>
  );
};

export default DashboardLayout;
