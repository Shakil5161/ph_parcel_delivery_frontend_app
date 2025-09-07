
import MyParcel from "@/pages/user/MyParcel";
import UpdateParcel from "@/pages/user/UpdateParcel";
import type { ISidebarItem } from "@/types/auth.type";


export const receiverSidebarItems: ISidebarItem[] = [
    {
      title: "History",
      items: [
        {
          title: "All Parcel",
          url: "/user/my-parcel",
          component: MyParcel
        },
        {
          title: "Update Parcel",
          url: "/user/update-parcel",
          component: UpdateParcel
        }
      ],
    },
    
  ]