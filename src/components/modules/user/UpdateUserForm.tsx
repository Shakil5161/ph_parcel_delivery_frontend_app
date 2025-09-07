import { Button } from "@/components/ui/button";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useGetSingleUserQuery, useUpdateUserMutation } from "@/redux/features/user/user.api";
import { Role } from "@/types";
import { getChangedFields } from "@/utils/diff";
import { useEffect } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";


export function UpdateUserForm() {

  const { id } = useParams<{ id: string }>();

   if (id === ":id") return <p className="flex justify-center">Please select a user from all user</p>;
    
      const { data: singleUser } = useGetSingleUserQuery(id!, { skip: !id });

   
const { data: user } = useUserInfoQuery(undefined)
const [updateUser] = useUpdateUserMutation();

const navigate = useNavigate();


 const form = useForm({
  defaultValues: {
    name: "",
    email: "",
    role: "",
    phone: "",
    isActive: "ACTIVE",
    isDeleted: false,
    isVerified:false,
  },
});

 useEffect(() => {
    if (singleUser?.data) {
      form.reset({
        name: singleUser.data.name || "",
        email: singleUser.data.email || "",
        role: singleUser.data.role || "",
        phone: singleUser.data.phone || "",
        isActive: singleUser.data.isActive || "ACTIVE",
        isDeleted: singleUser.data.isDeleted || false,
        isVerified: singleUser.data.isVerified || false,
      });
    }
  }, [singleUser, form]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  try {
    if (!singleUser) return;

    

    const changedFields = getChangedFields(singleUser, data);

     if (Object.keys(changedFields).length === 0) {
      toast.info("No changes were made");
      return;
    }

    const res = await updateUser({
      id: singleUser?.data?._id,
      changeData: changedFields // This should be {status: "Approved"} for your example
    }).unwrap();

    console.log("Update response:", res);
    toast.success("User updated successfully");
    navigate("/admin/all-user");
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
           
            
            
           
            <div className="flex gap-4 flex-col md:flex-row">
                 <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input 
                    required 
                    placeholder="User Title" 
                    {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>User Email</FormLabel>
                    <FormControl>
                      <Input required type="email" placeholder="jon@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             
       
            </div>
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                <FormItem className="flex-1">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                    <Input 
                         
                        type="tel" 
                        placeholder="017XXXXXXXXX" 
                        {...field} 
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

        
                {(user?.role === 'ADMIN' || 'SUPER_ADMIN') && (
                    <>
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                <SelectValue placeholder="Select Role" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                               <SelectItem value={Role.SUPER_ADMIN}>Super Admin</SelectItem>
    <SelectItem value={Role.ADMIN}>Admin</SelectItem>
    <SelectItem value={Role.RECEIVER}>Receiver</SelectItem>
    <SelectItem value={Role.SENDERS}>Senders</SelectItem>
    <SelectItem value={Role.RIDER}>Rider</SelectItem>
                               
                            </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="isActive"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Activity</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                <SelectValue placeholder="Select Role" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="ACTIVE">Active</SelectItem>
                                <SelectItem value="INACTIVE">Inactive</SelectItem>
                                <SelectItem value="BLOCKED">Blocked</SelectItem>
                                
                            </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    </>
                    )}
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" form="update-parcel-form">
          Update User
        </Button>
      </CardFooter>
    </Card>
  );
}

export default UpdateUserForm;