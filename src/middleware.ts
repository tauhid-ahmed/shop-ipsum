import { auth } from "./auth.config";

export default async function middleware() {
  const session = await auth();
  console.log({ session });
}
