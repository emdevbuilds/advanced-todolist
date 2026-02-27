import { NavLink } from "react-router";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CircleCheckBig,
  Plus,
  CircleCheck,
  SquareCheckBig,
  // User2,
} from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <NavLink to="/">
          <div className="flex gap-x-2 items-center text-olive-800">
            <h1 className="text-2xl">Todolist</h1> <CircleCheckBig />
          </div>
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="pl-4">
          <SidebarGroupContent className="flex flex-col gap-y-4">
            <NavLink to="/add-task" end>
              <div className="flex items-center gap-2 text-base">
                <Plus strokeWidth={2} />
                <span className="">Add Task</span>
              </div>
            </NavLink>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="px-4">
          <SidebarGroupContent className="flex flex-col gap-y-4">
            <NavLink to="/tasks" end>
              <div className="flex items-center gap-2 text-base">
                <CircleCheck strokeWidth={1} />
                <span>Tasks</span>
                <span className="ml-auto">3</span>
              </div>
            </NavLink>
            <NavLink to="/completed-tasks" end>
              <div className="flex items-center gap-2 text-base">
                <SquareCheckBig strokeWidth={1} />
                <span className="">Completed tasks</span>
              </div>
            </NavLink>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <NavLink to="/user" end>
                <div className="flex items-center gap-2 text-base">
                  <Avatar>
                    <AvatarImage src="https://githu.com/shadcn.png" />
                    <AvatarFallback className="text-gray-800">U</AvatarFallback>
                  </Avatar>
                  <span>User</span>
                </div>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
