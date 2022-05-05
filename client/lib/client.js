import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-05-05",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
