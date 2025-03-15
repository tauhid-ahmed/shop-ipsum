ALTER TABLE "account" RENAME COLUMN "provider_account_id" TO "providerAccountId";--> statement-breakpoint
ALTER TABLE "account" RENAME COLUMN "refresh_token" TO "refreshToken";--> statement-breakpoint
ALTER TABLE "account" RENAME COLUMN "access_token" TO "accessToken";--> statement-breakpoint
ALTER TABLE "account" RENAME COLUMN "expires_at" TO "expiresAt";--> statement-breakpoint
ALTER TABLE "account" RENAME COLUMN "token_type" TO "tokenType";--> statement-breakpoint
ALTER TABLE "account" RENAME COLUMN "id_token" TO "idToken";--> statement-breakpoint
ALTER TABLE "account" RENAME COLUMN "session_state" TO "sessionState";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "credential_id" TO "credentialId";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "provider_account_id" TO "providerAccountId";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "credential_publicKey" TO "credentialPublicKey";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "credential_device_type" TO "credentialDeviceType";--> statement-breakpoint
ALTER TABLE "authenticator" RENAME COLUMN "credential_backed_up" TO "credentialBackedUp";--> statement-breakpoint
ALTER TABLE "session" RENAME COLUMN "session_token" TO "sessionToken";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "email_verified" TO "emailVerified";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "created_at" TO "createdAt";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "updated_at" TO "updatedAt";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "terms_accepted" TO "termsAccepted";--> statement-breakpoint
ALTER TABLE "authenticator" DROP CONSTRAINT "authenticator_credential_id_unique";--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_credentialId_unique" UNIQUE("credentialId");