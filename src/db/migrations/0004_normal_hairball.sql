ALTER TABLE "authentication"."user" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "authentication"."user" ALTER COLUMN "password" SET NOT NULL;