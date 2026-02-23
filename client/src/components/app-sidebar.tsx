import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { CircleCheckBig, CirclePlus } from "lucide-react";

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
          <SidebarGroupContent>
            <div className="flex items-center gap-2 text-blue-700">
              <CirclePlus />
              <h3 className="font-medium text-lg">Add task</h3>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="pl-4">
          <SidebarGroupContent className="">
            <div className="flex items-center gap-2">
              <CirclePlus />
              <span className="font-medium text-base">Inbox</span>
            </div>

            <div className="flex items-center gap-2">
              <CirclePlus />
              <span className="font-medium text-base">Completed</span>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* <SidebarGroup className="bg-green-300">
          <SidebarGroupContent className="bg-blue-300">
            <div className="flex items-center gap-2">
              <h3>Add task</h3>
              <Plus />
            </div>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
