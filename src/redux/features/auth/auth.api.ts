import { baseApi } from "@/redux/baseApi";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/auth/login",
                method: "POST",
                data: { email, password },
                
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            })
        }),
        userInfo: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET"
            })
        })
    })
})


export const {

    useLoginMutation,
    useLogoutMutation,
    useUserInfoQuery,

} = authApi