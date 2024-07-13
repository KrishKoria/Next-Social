import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-144px)] items-center justify-center">
      <SignUp />;
    </div>
  );
}
