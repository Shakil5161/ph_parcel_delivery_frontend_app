import { useGetAllParcelQuery } from "@/redux/features/parcel/parcel.api";
import { useGetAllUserQuery } from "@/redux/features/user/user.api";
import { AnalyticsBarChart } from "./AnalyticsBarChart";
import AnalyticsChart from "./AnalyticsChart";

function Analytics() {

    const { data: apiData } = useGetAllParcelQuery(undefined);
    const parcels = apiData?.data?.data ?? [];

    const { data: allUser } = useGetAllUserQuery(undefined)
    const users = allUser?.data ?? [];

    return (
        <div>
           <div className="border flex flex-col md:flex-row gap-10 p-5 pb-25">
                <AnalyticsChart data={parcels} />
                <AnalyticsBarChart data={users}/>
           </div>
        </div>
    );
}

export default Analytics;   