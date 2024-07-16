import Feed from "@/components/Feed";
import LeftMenu from "@/components/leftmenu";
import RightMenu from "@/components/rightmenu";

export default function ProfilePage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden w-[20%] xl:block">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden w-[30%] lg:block">
        <RightMenu userId="test" />
      </div>
    </div>
  );
}
