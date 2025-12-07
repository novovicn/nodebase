import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();
  return(
    <div className="text-red-500 font-bold">
      Hello World
      {JSON.stringify(users)}
      <Button>Click me</Button>
    </div>
  )
}
export default Page;