"use server";

import { Client } from "@notionhq/client";

// This type should match the form values from your page.tsx, excluding the video file.
// We are defining it here to ensure type safety in our server action.
export type ApplicationData = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  ownCar: "yes" | "no";
  legalWork: "yes" | "no";
  days: {
    weekdays: boolean;
    weekends: boolean;
    mornings: boolean;
    afternoons: boolean;
  };
  schedule: string;
  backgroundCheck: "yes" | "no";
  source?: string[];
  notes?: string;
};

export async function addApplicationToNotion(data: ApplicationData) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId || !process.env.NOTION_API_KEY) {
    console.error("Notion API Key or Database ID is not configured in .env.local");
    return { success: false, message: "Server configuration error." };
  }

  // Convert the 'days' object into a comma-separated string for the rich_text field.
  const availabilityDaysArray = [];
  if (data.days.weekdays) availabilityDaysArray.push("Weekdays");
  if (data.days.weekends) availabilityDaysArray.push("Weekends");
  if (data.days.mornings) availabilityDaysArray.push("Mornings");
  if (data.days.afternoons) availabilityDaysArray.push("Afternoons");
  const availabilityDaysString = availabilityDaysArray.join(', ');

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        // Property names are adapted from the user-provided database schema.
        "Full Name": {
          title: [{ text: { content: data.fullName } }],
        },
        "Phone": {
          phone_number: data.phone,
        },
        "Email": {
          email: data.email,
        },
        "Address": {
          rich_text: [{ text: { content: data.address } }],
        },
        "OwnCar": {
          checkbox: data.ownCar === 'yes',
        },
        "LegalWork": {
          checkbox: data.legalWork === 'yes',
        },
        "DaysAvailable": {
          rich_text: [{ text: { content: availabilityDaysString } }],
        },
        "Schedule": {
          rich_text: [{ text: { content: data.schedule } }],
        },
        "agreeBackgroundCheck": {
          checkbox: data.backgroundCheck === 'yes',
        },
        "Video": {
          files: [],
        },
        // New fields from the updated schema
        "Application Date": {
          date: { start: new Date().toISOString() },
        },
        "Source/Channel": {
          multi_select: data.source ? data.source.map(s => ({ name: s })) : [],
        },
        "Notes": {
          rich_text: data.notes ? [{ text: { content: data.notes } }] : [],
        },
        "Interview Stages": {
          multi_select: [], // This field is not in the form yet
        },
      },
    });
    return { success: true, message: "Application submitted successfully!" };
  } catch (error) {
    console.error("Error adding to Notion:", error);
    return { success: false, message: "Failed to submit application." };
  }
}
