"use client";

import type { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, containerStyles, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {/* biome-ignore lint/style/noUnusedTemplateLiteral: <explanation> */}
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
