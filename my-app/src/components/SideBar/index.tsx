// components
import DeskTopSidebar from "./DesktopSidebar";

const SideBar = async ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="h-full">
      <DeskTopSidebar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default SideBar;
