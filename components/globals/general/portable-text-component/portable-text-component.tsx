"use client";
import { ImageSchema, type VideoSchema } from "@/types/types";
import { PortableText } from "@portabletext/react";
import ReactPlayer from "react-player";
import { TypedObject } from "sanity";
import { urlFor } from "@/utils/urlFor";
import CallToActionBlock from "./call-to-action-block";

const components = {
  types: {
    image: ({ value }: { value: ImageSchema }) => {
      if (!value || !value.asset) {
        console.error("value or value.asset is missing", value);
        return null;
      }

      return (
        <img
          className="max-w-[1090px] w-full h-auto my-4 mx-auto border"
          src={urlFor(value.asset).url()}
          alt={value.caption || "Imagem without description"}
        />
      );
    },

    video: ({ value }: { value: VideoSchema }) => {
      return (
        <div
          id="portable-react-player"
          className="max-w-[1090px] w-full h-full mx-auto"
        >
          <ReactPlayer controls url={value.url} />
        </div>
      );
    },

    callToActionBlock: () => (
      <div className="w-[calc(100%_+_32px)] -translate-x-4">
        <CallToActionBlock />
      </div>
    ),
  },
};

interface PortableTextComponentProps {
  content: TypedObject | TypedObject[];
}

export default function PortableTextComponent({
  content,
}: PortableTextComponentProps) {
  return (
    <div id="portable-text-wrapper">
      {content && <PortableText value={content} components={components} />}
    </div>
  );
}
