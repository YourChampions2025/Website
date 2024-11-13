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
      className="w-full h-fit py-12 border-b border-[#083376] text-[#2DE046] text-[36px] tracking-[calc(36px*-0.04)] uppercase text-pretty underline"
      {...props}
    >
      {children}
    </button>
  );
}
