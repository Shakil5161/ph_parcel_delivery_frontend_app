import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/components/modules/about/About";
import Contact from "@/components/modules/contact/Contact";
import { role } from "@/constants/role";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Unauthorized from "@/pages/Unauthorized";
import type { TRole } from "@/types/auth.type";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import { senderSidebarItems } from "./senderSidebarItems";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            }
        ]
    },
    {
        path: "/admin",
        Component: withAuth(DashboardLayout, (role.SUPER_ADMIN as TRole|| role.ADMIN as TRole)),
        children: [
            { 
                index: true, 
                element: <Navigate to="/admin/analytics" />
            },
            ...generateRoutes(adminSidebarItems)
        ]
    },
    {
    path: "/user",
    Component: withAuth(DashboardLayout, (role.SENDERS as TRole, role.RECEIVER as TRole)),
    children: [
            {
                index: true,
                element: <Navigate to="/user/my-parcel" />
            },
            ...generateRoutes(senderSidebarItems),
            ...generateRoutes(receiverSidebarItems)
        ]
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/register",
        Component: Register
    },
    {
        path: '/unauthorized',
        Component: Unauthorized
    },

])