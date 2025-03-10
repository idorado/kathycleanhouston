import {j, publicProcedure} from "../jstack";
import { schema } from "../db";
import { desc } from "drizzle-orm"

export const testimonialsRouter = j.router({
  recent: publicProcedure.query(async ({ c, ctx }) => {
    const testimonials = await ctx.db.select().from(schema.testimonials).orderBy(desc(schema.testimonials.createdAt))

    return c.superjson(testimonials)
  }),


})