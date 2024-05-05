"use client";

// components
import EmptyState from "@/components/EmptyState";
// others
import { HOME_PAGE } from "@/constants";

const MainPage = () => {
  return (
    <div className="lg:block lg:pl-80 h-full hidden">
      <EmptyState />
    </div>
  );
};

export default MainPage;
