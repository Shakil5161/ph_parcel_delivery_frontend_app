import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types/auth.type";
import type { ComponentType } from "react";
import { Navigate } from "react-router";


export const withAuth = (Component: ComponentType, requiredRoles?: TRole[]) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);

    if (isLoading) return <div>Loading...</div>;

    if (!data?.data?.email) {
      return <Navigate to="/login" />;
    }

    if (
      requiredRoles &&
      !requiredRoles.includes(data?.data?.role)
    ) {
      return <Navigate to="/unauthorized" />;
    }

    return <Component />;
  };
};