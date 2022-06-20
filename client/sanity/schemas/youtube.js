import React from "react";
import getYoutubeId from "get-youtube-id";

const YoutubePreview = ({ value }) => {
  const id = getYoutubeId(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id)
    return <span>Missing Youtube URL</span>;
  return (
    <iframe
      width="500"
      height="300"
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default {
  name: "youtube",
  title: "Youtube Embed",
  type: "object",

  fields: [
    {
      name: "youtubeURL",
      title: "Youtube URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "youtubeURL",
    },
    component: YoutubePreview,
  },
};
