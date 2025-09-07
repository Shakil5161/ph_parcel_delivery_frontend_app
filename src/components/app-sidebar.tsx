import Logo from "@/assets/icons/Logo";
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { getSidebarItems } from "@/utils/getSidebarItems";
import * as React from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "./ui/sidebar";




export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const { data: userData } = useUserInfoQuery(undefined);
const [ logout ] = useLogoutMutation();
  const dispatch = useAppDispatch()
const navigate = useNavigate();

const handleLogout = async () => {
  await logout(undefined)
  dispatch(authApi.util.resetApiState())
  navigate("/")
  console.log(data, 'userData after logout')
}
// This is sample data.
const data = {
  navMain: getSidebarItems(userData?.data?.role),
}

  return (
    <Sidebar {...props}>
      <SidebarHeader>
      <Link to="/">
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild >
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <Button onClick={handleLogout} variant="outline"  className="text-sm m-4">
                Logout
              </Button>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
