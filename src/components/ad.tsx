import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <Card className="rounded-lg bg-white text-sm shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between font-medium text-gray-500">
          <CardTitle className="text-sm">Sponsored Ads</CardTitle>
          <Image src={"/more.png"} alt="" width={16} height={16} />
        </div>
      </CardHeader>
      <CardContent
        className={`mt-4 flex flex-col ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}
        >
          <Image
            src={
              "https://images.pexels.com/photos/15740861/pexels-photo-15740861/free-photo-of-couple-at-scenic-viewpoint-overlooking-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            fill
            className="rounded-lg object-cover"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/15740861/pexels-photo-15740861/free-photo-of-couple-at-scenic-viewpoint-overlooking-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            width={24}
            height={24}
            className="h-6 w-6 rounded-full object-cover"
            alt=""
          />
          <span className="font-medium text-blue-500">Ava Addams</span>
        </div>
        <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, nisi
          velit animi tempora voluptas quidem ipsum est officia quibusdam
          facilis ab aut dolorem quaerat earum. Voluptate dicta exercitationem
          ab libero.
        </p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full rounded-lg bg-gray-200 text-xs text-gray-500"
          variant="outline"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
