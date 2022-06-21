import React from "react";
import getYoutubeId from "get-youtube-id";

const YoutubePreview = ({ value }) => {
  const id = getYoutubeId(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id)
    return <span>Missing Youtube URL</span>;
  return (
    <iframe
      style={{ width: "100%", height: "100%" }}
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
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
