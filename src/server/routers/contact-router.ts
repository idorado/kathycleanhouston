import { j, publicProcedure } from "../jstack";
import { Resend } from "resend";
import { z } from "zod";


export const contactRouter = j.router({
    create: publicProcedure.input(z.object({
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email("Invalid email").min(1, "Email is required"),
    })).post( async ({ ctx, c, input }) => {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { fullName, email } = input;
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
                        <p>The user would like to be contacted at: <strong>${email}</strong></p>
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

    calculator: publicProcedure.input(z.object({
        serviceType: z.enum(['residential', 'other']),
        squareFeet: z.number().min(700).max(10000),
        frequency: z.enum(['weekly', 'bi-weekly', 'monthly', 'one-time']),
        otherService: z.enum(['deep', 'move-in-out', 'post-construction', 'pressure-washing', 'solar-panel', 'window-washing']).optional(),
        windowPanes: z.number().min(0).max(100).optional(),
        windowPanesOneSide: z.number().min(0).max(100).optional(),
        numPets: z.number().min(0).max(10).default(0),
        numBathrooms: z.number().min(0).max(20).default(0),
        numBedrooms: z.number().min(0).max(20).default(0),
        additionalServices: z.array(z.string()).default([]),
        steamCleaningBeds: z.number().min(0).max(10).default(0),
        steamCleaningFurniture: z.number().min(0).max(20).default(0),
        totalPrice: z.number().optional(),
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email("Invalid email").min(1, "Email is required"),
        phone: z.string().min(1, "Phone number is required"),
    })).post(async ({ ctx, c, input }) => {
        const { 
            serviceType, squareFeet, frequency, otherService, 
            numPets, additionalServices, steamCleaningBeds, 
            steamCleaningFurniture, windowPanes, windowPanesOneSide,
            totalPrice, numBathrooms, numBedrooms, fullName, email, phone
        } = input;
        
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { data, error } = await resend.emails.send({
            from: 'Kathy Clean <quotes@support.kathyclean.com>',
            to: ['ljaramillo@kathyclean.com'],
            subject: `New Price Estimate - ${serviceType} Cleaning`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                    <div style="background-color: #f8f8f8; padding: 15px; border-radius: 6px 6px 0 0; border-bottom: 2px solid #007bff;">
                        <h2 style="color: #333; margin: 0;">New Cleaning Estimate Request</h2>
                        <p style="color: #666; margin: 5px 0 0;">From: ${fullName}</p>
                    </div>
                    <div style="padding: 20px;">
                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px;">Contact Information</h3>
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        
                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 20px;">Service Details</h3>
                        <p><strong>Service Type:</strong> ${serviceType}${otherService ? ` (${otherService})` : ''}</p>
                        <p><strong>Square Footage:</strong> ${squareFeet} sq ft</p>
                        <p><strong>Frequency:</strong> ${frequency}</p>
                        <p><strong>Bedrooms:</strong> ${numBedrooms}</p>
                        <p><strong>Bathrooms:</strong> ${numBathrooms}</p>
                        <p><strong>Pets:</strong> ${numPets}</p>
                        
                        ${additionalServices.length > 0 ? `
                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 20px;">Additional Services</h3>
                        <ul>
                            ${additionalServices.map(service => `<li>${service}</li>`).join('')}
                        </ul>` : ''}
                        
                        ${(steamCleaningBeds > 0 || steamCleaningFurniture > 0 || windowPanes > 0 || windowPanesOneSide > 0) ? `
                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 20px;">Extras</h3>
                        ${steamCleaningBeds > 0 ? `<p><strong>Steam Cleaning (Beds):</strong> ${steamCleaningBeds}</p>` : ''}
                        ${steamCleaningFurniture > 0 ? `<p><strong>Steam Cleaning (Furniture):</strong> ${steamCleaningFurniture}</p>` : ''}
                        ${windowPanes > 0 ? `<p><strong>Window Panes (Both Sides):</strong> ${windowPanes}</p>` : ''}
                        ${windowPanesOneSide > 0 ? `<p><strong>Window Panes (One Side):</strong> ${windowPanesOneSide}</p>` : ''}` : ''}
                        
                        <h3 style="color: #007bff; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 20px;">Pricing</h3>
                        <p style="font-size: 18px;"><strong>Estimated Price:</strong> $${totalPrice}</p>
                    </div>
                    <div style="background-color: #f8f8f8; padding: 15px; border-radius: 0 0 6px 6px; text-align: center; font-size: 12px; color: #666;">
                        <p>This estimate was generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
                    </div>
                </div>
            `,
        });
        
        if (error) {
            console.error("Failed to send estimate email:", error);
        }
        
        return c.json({ success: !error, totalPrice, data });
        
    }),
});


