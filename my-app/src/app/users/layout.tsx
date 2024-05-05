// components
import SideBar from "@/components/SideBar";

const UsersLayout = async ({ children }: { children: React.ReactElement }) => {
  return (
    <SideBar>
      <div className="h-full">{children}</div>
    </SideBar>
  );
};

export default UsersLayout;
