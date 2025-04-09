ALTER TABLE "kathyclean_profiles" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "kathyclean_profiles" DROP COLUMN "first_name";--> statement-breakpoint
ALTER TABLE "kathyclean_profiles" DROP COLUMN "last_name";