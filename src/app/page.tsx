import Image from "next/image";
import {Button} from "@/components/ui/button"
import { caller } from "@/trpc/server";
export default async function Home() {
  const users = await caller.hello({text:"Hello world"})
  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <Button>

      hello world
      </Button>
      {JSON.stringify(users)}
      
    </div>
  );
}
