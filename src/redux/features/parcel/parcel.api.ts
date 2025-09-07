import { baseApi } from "@/redux/baseApi";


export const parcelApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getAllParcel: builder.query({
      query: (params?: { trackingId?: string }) => {
        const queryParams = new URLSearchParams();
        if (params?.trackingId) {
          queryParams.append('trackingId', params.trackingId);
        }
        
        const url = params?.trackingId 
          ? `/parcels/all?${queryParams.toString()}`
          : '/parcels/all';
          
        return {
          url,
          method: "GET",
        };
      },
      
      providesTags: ( arg) => {
        if (arg?.trackingId) {
          return [{ type: 'PARCEL' as const, id: arg.trackingId }];
        }
        return [{ type: 'PARCEL' as const, id: 'LIST' }];
      },
    }),
        
        addParcel: builder.mutation({
            query: (parcelInfo) => ({
                url: "/parcels/create",
                method: "POST",
                data: parcelInfo,
                
            }),
            invalidatesTags: [{ type: 'PARCEL', id: 'LIST' }],
        }),

         updateParcel: builder.mutation({
            query: ({ id, changeData }) => ({
                url: `/parcels/${id}`,
                method: 'PATCH',
                data: changeData,
            }),
      invalidatesTags: [{ type: 'PARCEL', id: 'LIST' }],

    }),

    getMyParcel: builder.query({
       query: (params?: { trackingId?: string }) => {
        const queryParams = new URLSearchParams();
        if (params?.trackingId) {
          queryParams.append('trackingId', params.trackingId);
        }
        
        const url = params?.trackingId 
          ? `/parcels/me?${queryParams.toString()}`
          : '/parcels/me';
          
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ( arg) => {
        if (arg?.trackingId) {
          return [{ type: 'PARCEL' as const, id: arg.trackingId }];
        }
        return [{ type: 'PARCEL' as const, id: 'LIST' }];
      },
    }),

    })
})



export const {

    useGetAllParcelQuery,
    useAddParcelMutation,
    useUpdateParcelMutation,
    useGetMyParcelQuery,
     

} = parcelApi