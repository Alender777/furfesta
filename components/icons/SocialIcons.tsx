import type { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";
import { SiFacebook, SiPlurk } from "react-icons/si";

type IconProps = { size?: number; className?: string };

function withSize(Icon: IconType, size = 24, className?: string) {
  return <Icon size={size} aria-hidden="true" className={className} />;
}

export function EmailIcon({ size = 24, className }: IconProps) {
  return withSize(MdEmail, size, className);
}

export function PlurkIcon({ size = 24, className }: IconProps) {
  return withSize(SiPlurk, size, className);
}

export function FacebookIcon({ size = 24, className }: IconProps) {
  return withSize(SiFacebook, size, className);
}
