import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger size={"lg"} />
      {/* <main className="p-4">
        <SidebarTrigger />
      </main> */}
    </SidebarProvider>
  );
};

export default DashboardLayout;
