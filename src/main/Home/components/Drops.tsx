import { useRef } from "react";
import { ScrollAnim } from "../../../assets/ScrollAnims";

export default function Drops() {
  const anim = useRef<null | HTMLDivElement>(null);
  ScrollAnim(anim, "anim2", 40);
  return (
    <div ref={anim} className="flex justify-center">
      <svg
        className="w-full h-auto transition-transform duration-1000 ease-out anim2"
        viewBox="0 0 1718 294"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_145_2)">
          <rect y="-24" width="40" height="257" rx="20" fill="#40AAFD" />
          <rect
            x="1453"
            y="-61"
            width="40"
            height="166"
            rx="20"
            fill="#40AAFD"
          />
          <rect
            x="1268"
            y="-44"
            width="40"
            height="210"
            rx="20"
            fill="#40AAFD"
          />
          <rect
            x="1083"
            y="-27"
            width="40"
            height="119"
            rx="20"
            fill="#40AAFD"
          />
          <rect
            x="1083"
            y="105"
            width="40"
            height="40"
            rx="20"
            fill="#40AAFD"
          />
          <rect
            x="640"
            y="-36"
            width="40"
            height="141"
            rx="20"
            fill="#40AAFD"
          />
          <rect
            x="408"
            y="-28"
            width="40"
            height="240"
            rx="20"
            fill="#40AAFD"
          />
          <rect
            x="197"
            y="-36"
            width="40"
            height="202"
            rx="20"
            fill="#40AAFD"
          />
          <rect
            x="917"
            y="-51"
            width="40"
            height="255"
            rx="20"
            fill="#40AAFD"
          />
          <rect
            x="1678"
            y="-61"
            width="40"
            height="202"
            rx="20"
            fill="#40AAFD"
          />
          <rect
            x="1678"
            y="151"
            width="40"
            height="40"
            rx="20"
            fill="#40AAFD"
          />
          <rect y="254" width="40" height="40" rx="20" fill="#40AAFD" />
        </g>
        <defs>
          <clipPath id="clip0_145_2">
            <rect width="1718" height="294" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
