import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

type ButtonIconProps = {
  children: React.ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
  href?: string;
};

const ButtonIcon = ({ children, Icon, href }: ButtonIconProps) => {
  return (
    <a href={href}>
      <button
        className={`btn bg-azul-marino text-white justify-between border-3 btn-circle text-[16px] px-4 py-6 btn-neutral group flex hover:bg-primary-pink hover:bg-marron-claro w-fit ${inter.className}`}
      >
        {children}
        <span className="bg-white rounded-full ml-auto p-0.5 flex items-center justify-center group-hover:bg-black group-hover:text-black">
          <Icon className="text-black w-5 h-5 group-hover:text-white " />
        </span>
      </button>
    </a>
  );
};

export default ButtonIcon;
