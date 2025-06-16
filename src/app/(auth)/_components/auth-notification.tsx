import { Alert, AlertDescription } from "@/components/ui/alert";
import { type Notification } from "@/utils/api-responses";
import { AlertCircle } from "lucide-react";

export function AuthNotification({
  notification,
}: {
  notification: Notification;
}) {
  if (!notification?.message) return null;
  return (
    <Alert variant={notification.type === "error" ? "destructive" : "success"}>
      <AlertCircle className="h-4 w-4 -mt-0.5" />
      <AlertDescription>{notification.message}</AlertDescription>
    </Alert>
  );
}
