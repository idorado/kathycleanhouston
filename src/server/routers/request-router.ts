import { desc } from "drizzle-orm"
import { z } from "zod"
import { j, publicProcedure } from "../jstack"
import { Resend } from "resend";

const roomTypes = [
    "Kitchen",
    "Bathrooms",
    "Conference Room",
    "Lobby",
    "Offices",
    "Retail Showroom",
];

const frequencies = ["Daily", "Weekly", "Bi-Weekly", "Monthly", "Other"];

export const requestRouter = j.router({
    create: publicProcedure.input(z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        company: z.string().optional(),
        address: z.string().min(1, "Street address is required"),
        city: z.string().min(1, "City, State and Zip Code is required"),
        phone: z.string().min(1, "Phone number is required"),
        email: z.string().email("Invalid email").optional().or(z.literal("")),
        propertyType: z.enum(["Office", "Retail"], { required_error: "Type of property is required" }),
        rooms: z.array(z.enum(roomTypes as [string, ...string[]]), { required_error: "Select at least one room type" }).min(1, "Select at least one room type"),
        frequency: z.array(z.enum(frequencies as [string, ...string[]]), { required_error: "Select at least one frequency" }).min(1, "Select at least one frequency"),
        people: z.string().optional(),
        sqft: z.string().min(1, "Square footage is required"),
        bathrooms: z.string().min(1, "Number of bathrooms is required"),
        referral: z.string().optional(),
        notes: z.string().optional(),
    })).post(async ({ ctx, c, input }) => {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { firstName, lastName, company, address, city, phone, email, propertyType, rooms, frequency, people, sqft, bathrooms, referral, notes } = input
        console.log(input)
        const { data, error } = await resend.emails.send({
            from: 'Kathy Clean <requests@support.kathyclean.com>',
            to: ['ljaramillo@kathyclean.com'],
            subject: `New Request by ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <div style="background-color: #f8f8f8; padding: 15px; border-radius: 6px 6px 0 0; border-bottom: 2px solid #007bff;">
                        <h2 style="color: #333; margin: 0;">New Cleaning Request</h2>
                        <p style="color: #666; margin: 5px 0 0;">From: ${firstName} ${lastName}${company ? ` - ${company}` : ''}</p>
                    </div>
                    <div style="padding: 20px;">
                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px;">Contact Information</h3>
                        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                        <p><strong>Address:</strong> ${address}, ${city}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}

                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 20px;">Property Details</h3>
                        <p><strong>Property Type:</strong> ${propertyType}</p>
                        <p><strong>Square Footage:</strong> ${sqft}</p>
                        <p><strong>Bathrooms:</strong> ${bathrooms}</p>
                        ${people ? `<p><strong>Number of People:</strong> ${people}</p>` : ''}

                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 20px;">Service Requirements</h3>
                        <p><strong>Rooms to Clean:</strong> ${rooms.join(', ')}</p>
                        <p><strong>Cleaning Frequency:</strong> ${frequency.join(', ')}</p>

                        ${referral ? `<p><strong>Referral Source:</strong> ${referral}</p>` : ''}
                        ${notes ? `
                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 20px;">Additional Notes</h3>
                        <p>${notes}</p>` : ''}
                    </div>
                    <div style="background-color: #f8f8f8; padding: 15px; border-radius: 0 0 6px 6px; text-align: center; font-size: 12px; color: #666;">
                        <p>This request was submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            return console.error({ error });
        }

        console.log({ data });
        return c.json({ data, error });
    })
})
