import { IconType } from "react-icons";

interface DesktopItemProps {
  label: string;
  href: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const DesktopItem = ({
  label,
  href,
  icon,
  active,
  onClick,
}: DesktopItemProps) => {
  return <div>{label}</div>;
};

export default DesktopItem;
