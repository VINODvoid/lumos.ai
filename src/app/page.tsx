import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogoutButton from "./logout";

/**
 * Page component that enforces authentication, fetches user data, and renders it with a logout button.
 *
 * The component ensures the current user is authenticated, retrieves user information, and displays
 * the serialized data alongside a logout control.
 *
 * @returns A JSX element that renders the fetched user data as JSON and a `LogoutButton` component.
 */
export default  async function Home() {
  await requireAuth();
  const data = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center flex-col">
      {JSON.stringify(data)}
      <LogoutButton/>    
    </div>
  );
}