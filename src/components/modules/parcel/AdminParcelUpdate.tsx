import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useGetAllParcelQuery, useUpdateParcelMutation } from "@/redux/features/parcel/parcel.api";
import { useGetAllRidersQuery } from "@/redux/features/user/user.api";
import { parcelFormSchema } from "@/types/parcel.type";
import { getChangedFields } from "@/utils/diff";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";


export function AdminParcelUpdate() {

  const { data: riderData, isLoading: riderLoading } = useGetAllRidersQuery(undefined);
  const { data: user } = useUserInfoQuery(undefined)
  const [searchParams] = useSearchParams();
  const trackingId = searchParams.get('trackingId');

  console.log('trackingId', trackingId)
  if(trackingId == null){
    return ( <p className="flex justify-center">Please select a Parcel from all parcel</p> )
  }
  const { data: parcel } = useGetAllParcelQuery(
    trackingId ? { trackingId } : undefined
  );
  const singleParcel = parcel?.data?.data[0]
  console.log("Single Parcel-", singleParcel?.status )
  const [updateParcel] = useUpdateParcelMutation();
  
const navigate = useNavigate();
 const riderOptions = riderData?.data?.map( (item: {_id: string, name: string}) => ({
      value: item._id,
      label: item.name,
    })
  )

//   console.log("useGetAllRidersQuery", riderData)

 const form = useForm({
  resolver: zodResolver(parcelFormSchema),
  defaultValues: {
    title: "",
    description: "",
    weight: .5,
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
    },
    fee: "",
    receiver: {
      email: "",
      address: "",
      name:"",
      phone: "",
    },
    pickupDate: "",
    expectedDeliveryDate: "",
    assignedTo: "",
    status: "Requested",
    isCanceled: false,
    isReturned: false,
    isBlocked: false,
    isHeld: false,
    isDelivered: false,
  },
});

 useEffect(() => {
    if (singleParcel) {
      form.reset({
        title: singleParcel.title || "",
        description: singleParcel.description || "",
        weight: singleParcel.weight || 0.5,
        dimensions: {
            length: singleParcel.dimensions?.length || 0,
            width: singleParcel.dimensions?.width || 0,
            height: singleParcel.dimensions?.height || 0,
        },
        fee: singleParcel.fee || "",
        receiver: {
          email: singleParcel.receiver?.email || "",
          address: singleParcel.receiver?.address || "",
          name: singleParcel.receiver?.name || "",
          phone: singleParcel.receiver?.phone || "",
        },
        pickupDate: singleParcel.pickupDate || "",
        expectedDeliveryDate: singleParcel.expectedDeliveryDate || "",
        assignedTo: singleParcel.assignedTo || "",
        status: singleParcel.status || "Requested",
      });
    }
  }, [singleParcel, form]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  try {
    if (!singleParcel) return;

    const changedFields = getChangedFields(singleParcel, data);

     if (Object.keys(changedFields).length === 0) {
      console.log("No fields changed.");
      toast.info("No changes were made");
      return;
    }

   
    console.log("Changed fields:", changedFields);

    const res = await updateParcel({
      id: singleParcel._id,
      changeData: changedFields // This should be {status: "Approved"} for your example
    }).unwrap();

    console.log("Update response:", res);
    toast.success("Parcel updated successfully");
    navigate("/admin/all-parcel");
  } catch (error: any) {
    console.error("Update error:", error);
     if (error.data) {
      console.error("Server error response:", error.data);
    }
    
    toast.error(error.data?.message || "Failed to update parcel");
  }
};

  return (
    <Card className="w-full max-w-3xl mx-auto px-5 mt-10">
      <CardHeader>
        <CardTitle>Update Parcel</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-5" id="update-parcel-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parcel Name</FormLabel>
                  <FormControl>
                    <Input 
                    required 
                    placeholder="Parcel Title" 
                    {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea className="p-3 border rounded-sm" placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input
          type="number"
          placeholder="Weight"
          {...field}
          value={field.value as number | string} // <-- Ensure value is string/number, not undefined/unknown
        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fee"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Delivery Fee</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Fee" {...field} value={field.value as number | string}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="dimensions.length"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Length (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Length" {...field} 
                      value={field.value as number ?? 0}
                      onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
          />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dimensions.width"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Width (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Width" {...field} value={field.value as number | string}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dimensions.height"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Height" {...field} value={field.value as number | string}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex gap-4 flex-col md:flex-row">
              <FormField
                control={form.control}
                name="receiver.email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Receiver Email</FormLabel>
                    <FormControl>
                      <Input required type="email" placeholder="jon@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="receiver.name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Receiver Name</FormLabel>
                    <FormControl>
                      <Input required placeholder="Jon" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
       
            </div>
                   <div className="flex gap-4 flex-col md:flex-row">
                    <FormField
                control={form.control}
                name="receiver.address"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Receiver Address</FormLabel>
                    <FormControl>
                      <Input required placeholder="Dhaka" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

  <FormField
    control={form.control}
    name="receiver.phone"
    render={({ field }) => (
      <FormItem className="flex-1">
        <FormLabel>Receiver Phone</FormLabel>
        <FormControl>
          <Input 
            required 
            type="tel" 
            placeholder="01641969790" 
            {...field} 
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</div>
            <div className="flex gap-4 flex-col md:flex-row">
              <FormField
                control={form.control}
                name="pickupDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Pickup Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(new Date(field.value), "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => {
                            field.onChange(date ? date.toISOString() : "");
                          }}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectedDeliveryDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Expected Delivery Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(new Date(field.value), "PPP")
                            ) : (
                              <span>Expected Delivery Date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => {
                            field.onChange(date ? date.toISOString() : "");
                          }}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          

            <FormField
                  control={form.control}
                  name="assignedTo"
                  render={({ field }) => (
                    <FormItem className="flex-1 ">
                      <FormLabel>Assigned Rider</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={riderLoading}
                        
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {riderOptions?.map(
                            (item: { label: string; value: string }) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {(user?.role === 'ADMIN' || 'SUPER_ADMIN') && (
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="Requested">Requested</SelectItem>
                                <SelectItem value="Approved">Approved</SelectItem>
                                <SelectItem value="Dispatched">Dispatched</SelectItem>
                                <SelectItem value="In Transit">In Transit</SelectItem>
                                <SelectItem value="Delivered">Delivered</SelectItem>
                                <SelectItem value="Canceled">Canceled</SelectItem>
                                <SelectItem value="Returned">Returned</SelectItem>
                                <SelectItem value="Held">Held</SelectItem>
                                <SelectItem value="Blocked">Blocked</SelectItem>
                            </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    )}
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" form="update-parcel-form">
          Update Parcel
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AdminParcelUpdate;