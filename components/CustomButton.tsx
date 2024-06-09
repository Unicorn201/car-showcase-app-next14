"use client";

import type { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {/* biome-ignore lint/style/noUnusedTemplateLiteral: <explanation> */}
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
