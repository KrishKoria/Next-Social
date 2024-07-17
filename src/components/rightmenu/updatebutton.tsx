"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function UpdateButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-2 rounded-md bg-blue-500 p-2 text-white disabled:cursor-not-allowed disabled:bg-opacity-50"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update"}
    </Button>
  );
}
