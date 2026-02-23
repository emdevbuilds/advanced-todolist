import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CircleCheckBig,
  Plus,
  CircleCheck,
  SquareCheckBig,
  User2,
} from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex gap-x-2 items-center text-olive-800">
          <h1 className="text-2xl">Todolist</h1> <CircleCheckBig />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="pl-4">
          <SidebarGroupContent className="flex flex-col gap-y-4">
            <div className="flex items-center gap-2 text-base">
              <Plus strokeWidth={2} />
              <span className="">Add Task</span>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="px-4">
          <SidebarGroupContent className="flex flex-col gap-y-4">
            <div className="flex items-center gap-2 text-base">
              <CircleCheck strokeWidth={1} />
              <span>Tasks</span>
              <span className="ml-auto">3</span>
            </div>

            <div className="flex items-center gap-2 text-base">
              <SquareCheckBig strokeWidth={1} />
              <span className="">Completed task</span>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <div className="flex items-center gap-2 text-base">
                <User2 strokeWidth={1} />
                <span>User</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
