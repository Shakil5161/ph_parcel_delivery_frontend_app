import ParcelTable from "@/components/modules/parcel/ParcelTable";
import { useGetMyParcelQuery } from "@/redux/features/parcel/parcel.api";

function MyParcel() {
     const { data: apiData, isLoading } = useGetMyParcelQuery(undefined);
    
     console.log(apiData, "apiData")
      const parcels = apiData?.data?.data ?? [];
    return (
        <div>
            
            <ParcelTable data={parcels} isLoading={isLoading}/>
        </div>
    );
}

export default MyParcel;