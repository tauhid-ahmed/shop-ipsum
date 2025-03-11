export type NotifyType = { type: "error" | "success"; message: string };

export type AuthResponseType =
  | Record<string, string[] | undefined>
  | undefined
  | {
      notify: NotifyType;
    };
