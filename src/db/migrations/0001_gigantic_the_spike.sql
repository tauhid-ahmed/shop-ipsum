ALTER TABLE "authentication"."user" ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "authentication"."user" ADD COLUMN "created_at" timestamp DEFAULT now();