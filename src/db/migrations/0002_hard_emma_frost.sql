ALTER TABLE "authentication"."user" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "authentication"."user" ADD COLUMN "terms_accepted" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "authentication"."user" ADD COLUMN "terms_accepted_at" timestamp DEFAULT now();