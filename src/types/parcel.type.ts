import { z } from "zod";

// export const parcelFormSchema = z.object({
//   title: z.string().min(1, "Title is required"),
//   description: z.string().optional(),
//   weight: z.coerce.number().min(0, "Weight must be a positive number"),
//   fee: z.coerce.number().min(0, "Fee must be a positive number"),
//   dimensions: z.object({
//     length: z.coerce.number().min(0, "Length must be a positive number"),
//     width: z.coerce.number().min(0, "Width must be a positive number"),
//     height: z.coerce.number().min(0, "Height must be a positive number"),
//   }),
//   receiver: z.object({
//     email: z.string().email("Invalid email"),
//     address: z.string().min(1, "Location is required"),
//     name: z.string().optional(),
//     phone: z
//       .string()
//       .min(1, "Phone number is required")
//       .regex(/^\+?[0-9]{7,15}$/, "Please enter a valid phone number"),
//   }),
//   pickupDate: z.string().min(1, "Pickup date is required").optional(),
//   expectedDeliveryDate: z.string().min(1, "Expected delivery date is required").optional(),
//   assignedTo: z.string().optional(),
//   status: z.enum([
//     "Requested",
//     "Approved",
//     "Dispatched",
//     "In Transit",
//     "Delivered",
//     "Canceled",
//     "Returned",
//     "Held",
//     "Blocked",
//   ]).optional(),
//   isCanceled: z.boolean().optional(),
//   isReturned: z.boolean().optional(),
//   isBlocked: z.boolean().optional(),
//   isHeld: z.boolean().optional(),
//   isDelivered: z.boolean().optional(),
// });


// export type ParcelFormValues = z.infer<typeof parcelFormSchema>;


export const parcelFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  weight: z.coerce.number().min(0, "Weight must be a positive number"),
  fee: z.coerce.number().min(0, "Fee must be a positive number"),
  dimensions: z.object({
    length: z.coerce.number().min(0, "Length must be a positive number"),
    width: z.coerce.number().min(0, "Width must be a positive number"),
    height: z.coerce.number().min(0, "Height must be a positive number"),
  }),
  receiver: z.object({
    email: z.string().email("Invalid email"),
    address: z.string().min(1, "Location is required"),
    name: z.string().optional(),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\+?[0-9]{7,15}$/, "Please enter a valid phone number"),
  }),
  pickupDate: z.string().optional(),
  expectedDeliveryDate: z.string().optional(),
  assignedTo: z.string().optional(),
  status: z.enum([
    "Requested",
    "Approved",
    "Dispatched",
    "In Transit",
    "Delivered",
    "Canceled",
    "Returned",
    "Held",
    "Blocked",
  ]).optional(),
  isCanceled: z.boolean().optional(),
  isReturned: z.boolean().optional(),
  isBlocked: z.boolean().optional(),
  isHeld: z.boolean().optional(),
  isDelivered: z.boolean().optional(),
})

// For admin: allow assignedTo
export const adminParcelFormSchema = parcelFormSchema.extend({
  assignedTo: z.string().min(1, "Assigned rider is required"),
});

// For users → just reuse base schema
export const userParcelFormSchema = parcelFormSchema;

export const parcelUpdateSchemaForUser = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  weight: z.coerce.number().min(0, "Weight must be a positive number"),
  fee: z.coerce.number().min(0, "Fee must be a positive number"),
  dimensions: z.object({
    length: z.coerce.number().min(0, "Length must be a positive number"),
    width: z.coerce.number().min(0, "Width must be a positive number"),
    height: z.coerce.number().min(0, "Height must be a positive number"),
  }),
  receiver: z.object({
    email: z.string().email("Invalid email"),
    address: z.string().min(1, "Location is required"),
    name: z.string().optional(),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\+?[0-9]{7,15}$/, "Please enter a valid phone number"),
  }),
 
  status: z.enum([
    "Requested",
    "Approved",
    "Dispatched",
    "In Transit",
    "Delivered",
    "Canceled",
    "Returned",
    "Held",
    "Blocked",
  ]).optional(),
  isCanceled: z.boolean().optional(),
  isReturned: z.boolean().optional(),
  isBlocked: z.boolean().optional(),
  isHeld: z.boolean().optional(),
  isDelivered: z.boolean().optional(),
});