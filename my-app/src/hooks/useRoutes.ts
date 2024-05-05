import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
// others
import { CONVERSATION, MAIN_PAGE } from "@/constants/nameURL";

const useRoutes = () => {
  const pathName = usePathname();
  const { conversationId } = useConversation();

  const routers = useMemo(
    () => [
      {
        label: "Chat",
        href: CONVERSATION,
        icon: HiChat,
        active: pathName === CONVERSATION || !!conversationId,
      },
      {
        label: "Users",
        href: MAIN_PAGE,
        icon: HiUsers,
        active: pathName === MAIN_PAGE,
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => signOut(),
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathName, conversationId]
  );

  return routers;
};

export default useRoutes;
