import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRiders: builder.query({
      query: () => ({
        url: "/user/all-user?role=RIDER",
        method: "GET",
      }),
      providesTags: [{type: 'USER'}]
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "/user/all-user",
        method: "GET",
      }),
      providesTags: [{type: 'USER'}]
    }),
     getSingleUser: builder.query({
      query: (id: string) => ({
        url: `/user/${id}`,
        method: "GET",
      }),
      providesTags: [{ type: 'USER' }]
    }),
    updateUser: builder.mutation({
      query: ({ id, changeData }) => ({
          url: `/user/${id}`,
          method: 'PATCH',
          data: changeData,
      }),
      invalidatesTags: [{ type: 'USER' }]
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: 'USER' }], 
    }),

  }),
});


export const {
  useGetAllRidersQuery,
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,

} = userApi;