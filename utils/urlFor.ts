import { SourceSchema } from "@/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/lib/client";

const builder = imageUrlBuilder(client);

export function urlFor(source: SourceSchema) {
  return builder.image(source);
}
