import ParcelTable from '@/components/modules/parcel/ParcelTable';
import { useGetAllParcelQuery } from '@/redux/features/parcel/parcel.api';

function AllParcel() {

  const { data: apiData, isLoading } = useGetAllParcelQuery(undefined);

  const parcels = apiData?.data?.data ?? [];

  return (
    <div>
      <ParcelTable data={parcels} isLoading={isLoading} />
    </div>
  );
}

export default AllParcel;