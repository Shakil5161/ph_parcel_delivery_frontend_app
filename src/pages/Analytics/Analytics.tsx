import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllParcelQuery } from "@/redux/features/parcel/parcel.api";
import { useGetAllUserQuery } from "@/redux/features/user/user.api";
import { AnalyticsBarChart } from "./AnalyticsBarChart";
import AnalyticsChart from "./AnalyticsChart";

function Analytics() {

    const { data: apiData, isLoading: parcelLoading } = useGetAllParcelQuery(undefined);
    const parcels = apiData?.data?.data ?? [];

    const { data: allUser, isLoading: userLoading } = useGetAllUserQuery(undefined)
    const users = allUser?.data ?? [];

    return (
        <div>
           <div className="border flex flex-col md:flex-row gap-10 p-5 pb-25">
                {
                    parcelLoading 
                    ? <Skeleton className="h-[250px] w-[250px] rounded-xl" /> :
                    <AnalyticsChart data={parcels} />
                }
                {
                    userLoading 
                    ? <Skeleton className="h-[250px] w-[250px] rounded-xl" /> :
                    <AnalyticsBarChart data={users}/>
                }
                
                
           </div>
        </div>
    );
}

export default Analytics;   