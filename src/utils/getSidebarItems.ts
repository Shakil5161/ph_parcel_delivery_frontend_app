import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { receiverSidebarItems } from "@/routes/receiverSidebarItems";
import { riderSidebarItems } from "@/routes/riderSidebarItems";
import { senderSidebarItems } from "@/routes/senderSidebarItems";
import type { TRole } from "@/types/auth.type";


export const getSidebarItems = (userRole: TRole) => {
    switch(userRole){
        case role.SUPER_ADMIN:
            return [...adminSidebarItems];
        case role.ADMIN:
            return [...adminSidebarItems];
        case role.SENDERS:
            return [...senderSidebarItems];
        case role.RECEIVER:
            return [...receiverSidebarItems];
        case role.RIDER:
            return [...riderSidebarItems];
        default:
            return []
        
    }
}