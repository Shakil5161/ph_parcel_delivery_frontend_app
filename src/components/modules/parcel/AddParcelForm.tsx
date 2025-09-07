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
import { useAddParcelMutation } from "@/redux/features/parcel/parcel.api";
import { useGetAllRidersQuery } from "@/redux/features/user/user.api";
import { adminParcelFormSchema, userParcelFormSchema } from "@/types/parcel.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";



export function AddParcelForm() {

  const navigate = useNavigate();
  const [ addParcel ] = useAddParcelMutation()
  
  const { data: user } = useUserInfoQuery(undefined);
  const isAdmin = user?.data?.role === "SUPER_ADMIN" || user?.data?.role === "ADMIN";

  // Only fetch riders if user is admin
  const { data: riderData, isLoading: riderLoading } = useGetAllRidersQuery(undefined, {
    skip: !isAdmin
  });

  // Create rider options only for admin users
  const riderOptions = isAdmin ? riderData?.data?.map((item: {_id: string, name: string}) => ({
    value: item._id,
    label: item.name,
  })) : [];

  console.log("useGetAllRidersQuery", riderData)

 const form = useForm({
  resolver: zodResolver(isAdmin ? adminParcelFormSchema : userParcelFormSchema),
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
    status: "Requested",
    isCanceled: false,
    isReturned: false,
    isBlocked: false,
    isHeld: false,
    isDelivered: false,
    ...(isAdmin ? { assignedTo: "" } : {}),
  },
});

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Format dates if needed
    // Send data to your API
    console.log("Parcel Data:", data);
    // TODO: Call your mutation here
    try {
        const res = await addParcel(data).unwrap()
        console.log("Registration res", res)
        toast.success("Parcel created successfully")
        if( isAdmin ){
          navigate("/admin/all-parcel")
        } else {
          navigate("/user/all-parcel")
        }
        
    } catch (error) {
        console.log('error', error)
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto px-5 mt-10">
      <CardHeader>
        <CardTitle>Add New Parcel</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-5" id="add-parcel-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parcel Name</FormLabel>
                  <FormControl>
                    <Input required placeholder="Parcel Title" {...field} />
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
                  <FormItem className={isAdmin ? 'flex-1' : 'pointer-events-none opacity-25 flex-1'}>
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
                      <Input type="number" placeholder="Length" {...field} value={field.value as number | string}/>
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
          
          {isAdmin && (
  <FormField
    control={form.control}
    name={"assignedTo" as const} 
    render={({ field }) => (
      <FormItem className="flex-1">
        <FormLabel>Assigned Rider</FormLabel>
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value}
          disabled={riderLoading}
        >
          <FormControl>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {riderOptions?.map((item: { label: string; value: string }) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
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
        <Button type="submit" form="add-parcel-form">
          Create Parcel
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AddParcelForm;