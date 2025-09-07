import UserTable from "@/components/modules/user/UserTable";
import { useGetAllUserQuery } from "@/redux/features/user/user.api";

function AllUser() {

    const { data: allUser, isLoading } = useGetAllUserQuery(undefined)

    const users = allUser?.data ?? [];
    return (
        <div>
            All User 
            <UserTable data={users} isLoading={isLoading}/>
        </div>
    );
}

export default AllUser;