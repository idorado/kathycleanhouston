import { j, publicProcedure } from "../jstack";
import { Resend } from "resend";
import { z } from "zod";


export const contactRouter = j.router({
    create: publicProcedure.input(z.object({
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email("Invalid email").optional().or(z.literal("")),
        phone: z.string().regex(/^\+?[0-9]{7,15}$/, "Invalid phone number").optional().or(z.literal("")),
    })).post( async ({ ctx, c, input }) => {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { fullName, email, phone } = input
        const { data, error } = await resend.emails.send({
            from: 'Kathy Clean <requests@support.kathyclean.com>',
            to: ['ljaramillo@kathyclean.com'],
            subject: `New Contact Request by ${fullName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <div style="background-color: #f8f8f8; padding: 15px; border-radius: 6px 6px 0 0; border-bottom: 2px solid #007bff;">
                        <h2 style="color: #333; margin: 0;">New Contact Request</h2>
                        <p style="color: #666; margin: 5px 0 0;">From: ${fullName}</p>
                    </div>
                    <div style="padding: 20px;">
                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px;">Contact Information</h3>
                        <p><strong>Name:</strong> ${fullName}</p>
                        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
                        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                    </div>
                    <div style="background-color: #f8f8f8; padding: 15px; border-radius: 0 0 6px 6px; text-align: center; font-size: 12px; color: #666;">
                        <p>This request was submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            return c.json({ data, error, message: "Failed to send contact request" });
        }

        console.log({ data });
        return c.json({ data, error, message: "Contact request sent successfully" });
    }),
});


