import AddParcel from "@/pages/admin/AddParcel";
import AllParcel from "@/pages/admin/AllParcel";
import AddUser from "@/pages/admin/manageUser/AddUser";
import AllUser from "@/pages/admin/manageUser/AllUser";
import UpdateUser from "@/pages/admin/manageUser/UpdateUser";
import UpdateParcel from "@/pages/admin/UpdateParcel";
import type { ISidebarItem } from "@/types/auth.type";
// import Analytics from "@/pages/Analytics/Analytics";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Analytics/Analytics"))

export const adminSidebarItems: ISidebarItem[] = [
    {
      title: "Dashboard",
      items: [
        {
          title: "Analytics",
          url: "/admin/analytics",
          component: Analytics
        }
      ],
    },
    {
      title: "Manage Parcel",
      items: [
        {
          title: "All Parcel",
          url: "/admin/all-parcel",
          component: AllParcel
        },
        {
          title: "Add Parcel",
          url: "/admin/add-parcel",
          component: AddParcel
        },
        {
          title: "Update Parcel",
          url: "/admin/update-parcel",
          component: UpdateParcel
        },
        
      ],
    },
    {
      title: "Manage User",
      items: [
        {
          title: "All User",
          url: "/admin/all-user",
          component: AllUser
        },
        {
          title: "Add User",
          url: "/admin/add-user",
          component: AddUser
        },
        {
          title: "Update User",
          url: "/admin/update-user/:id",
          component: UpdateUser
        },
      ],
    },
    
  ]