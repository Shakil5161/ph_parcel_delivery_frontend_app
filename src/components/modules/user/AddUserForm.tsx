import Password from "@/components/Password";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRegisterMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { IsActive, Role, userFormSchema, type UserSchemaType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function AddUserForm() {
const navigate = useNavigate();
const [ register ] = useRegisterMutation();
const { data: user } = useUserInfoQuery(undefined)

const form = useForm<UserSchemaType>({
  resolver: zodResolver(userFormSchema),
  defaultValues: {
    name: "",
    email: "",
    password: "",
    role: Role.RECEIVER,
    phone: "",
    isActive: IsActive.ACTIVE,
  },
});




 

  const onSubmit: SubmitHandler<UserSchemaType> = async (data) => {
    console.log('user data', data)
  const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      role: data.role,
      isActive: data.isActive,
    }       

    try {
        const res = await register(userInfo).unwrap()
        console.log("Registration res", res)
        toast.success("User created successfully")
        navigate('/admin/all-user')
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
        <CardTitle>Add Parcel</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-5" id="add-user-form" onSubmit={form.handleSubmit(onSubmit)}>
           
            
            
           
            <div className="flex gap-4 flex-col md:flex-row">
                 <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Input 
                     
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
                      <Input  type="email" placeholder="jon@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             
       
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
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
 <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Password</FormLabel>
              <FormControl>
                {/* <Input type="password" placeholder="********" {...field} /> */}
                <Password {...field}/>
              </FormControl>
              <FormDescription className="sr-only"> 
                This is your password field.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
                {(user?.data?.role === 'ADMIN' || user?.data?.role === 'SUPER_ADMIN') && (
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
                                <SelectValue placeholder="Select status" />
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
        <Button type="submit" form="add-user-form">
          Add User
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AddUserForm;