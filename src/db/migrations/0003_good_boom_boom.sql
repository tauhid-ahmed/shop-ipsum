ALTER TABLE "account" RENAME COLUMN "providerAccountId" TO "provider_account_id";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "credentialID" TO "credential_id";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "providerAccountId" TO "provider_account_id";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "credentialPublicKey" TO "credential_publicKey";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "credentialDeviceType" TO "credential_device_type";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "credentialBackedUp" TO "credential_backedUp";--> statement-breakpoint
ALTER TABLE "session" RENAME COLUMN "sessionToken" TO "session_token";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "emailVerified" TO "email_verified";--> statement-breakpoint
ALTER TABLE "authenticator" DROP CONSTRAINT "authenticator_credentialID_unique";--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_credential_id_unique" UNIQUE("credential_id");