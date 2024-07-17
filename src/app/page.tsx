import AddPosts from "@/components/addPosts";
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftmenu/leftmenu";
import RightMenu from "@/components/rightmenu/rightmenu";
import Stories from "@/components/stories";

export default function Homepage() {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden w-[20%] xl:block">
        <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPosts />
          <Feed />
        </div>
      </div>
      <div className="hidden w-[30%] lg:block">
        <RightMenu />
      </div>
    </div>
  );
}
