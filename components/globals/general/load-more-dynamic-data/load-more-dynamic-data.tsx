import React from "react";

interface LoadMoreDynamicDataProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function LoadMoreDynamicData({
  children,
  ...props
}: LoadMoreDynamicDataProps) {
  return (
    <button
      className="w-full h-fit py-[clamp(24px,5.33vw,48px)] border-b border-[#083376] text-[#2DE046] text-[clamp(14px,4vw,36px)] tracking-[calc(clamp(14px,4vw,36px)*-0.04)] uppercase text-pretty underline"
      {...props}
    >
      {children}
    </button>
  );
}
