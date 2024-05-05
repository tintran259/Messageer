"use client";
// libs
import { useState } from "react";
// hooks
import { useRoutes } from "@/hooks";
// components
import DesktopItem from "./DesktopItem";

const DeskTopSidebar = () => {
  const routers = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-center">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-center space-y-1">
          {routers.map((router, index) => (
            <DesktopItem
              href={router.href}
              onClick={router.onClick}
              active={router.active}
              label={router.label}
              key={index}
              icon={router.icon}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DeskTopSidebar;
