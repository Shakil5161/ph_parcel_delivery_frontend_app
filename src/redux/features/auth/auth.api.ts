import { baseApi } from "@/redux/baseApi";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo,
                credentials: "include",
            })
        }),
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo
            }),
            invalidatesTags: [{ type: 'USER' }]
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
                credentials: "include",
            })
        }),
        userInfo: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
                credentials: "include",
            })
        })
    
    })
})


export const {

    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useUserInfoQuery,

} = authApi