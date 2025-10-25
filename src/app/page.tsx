"use client"
import { Button } from "@/components/ui/button";
import LogoutButton from "./logout";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

/**
 * Page component that enforces authentication, fetches user data, and renders it with a logout button.
 *
 * The component ensures the current user is authenticated, retrieves user information, and displays
 * the serialized data alongside a logout control.
 *
 * @returns A JSX element that renders the fetched user data as JSON and a `LogoutButton` component.
 */
export default   function Home() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const {data} = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(trpc.createWorkflow.mutationOptions(
    {
      onSuccess:()=>{
        toast.success("Workflow created");
      }
    }
  ))
  const testAi = useMutation(trpc.testAi.mutationOptions(
    {
      onSuccess:()=>{
        toast.success("AI test successful");
      }
    }
  ))

  
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center flex-col gap-y-6">
      <div>
        {JSON.stringify(data,null,2)}
      </div>
      <Button disabled={create.isPending} onClick={()=>create.mutate()}>Create Workflow</Button>
      <Button disabled={testAi.isPending} onClick={()=>testAi.mutate()}>Test AI</Button>
      <LogoutButton/>
    </div>
  );
}