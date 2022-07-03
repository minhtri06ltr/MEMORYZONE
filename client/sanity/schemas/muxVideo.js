export default {
  name: "muxVideo",
  type: "object",
  title: "Mux Video",
  fields: [
    {
      name: "video",
      title: "Video",
      type: "mux.video",
    },
    {
      name: "videoThumbnail",
      type: "image",
      title: "Video Thumbnail",
      description:
        "Add your image when you want different thumbnail instead default",
      options: {
        hotspot: true,
      },
    },
    {
      name: "altText",
      title: "Alternative Text",
      type: "string",
      description:
        "Make sure your video get friend with SEO",
    },
    {
      name: "autoLoad",
      title: "Auto Load",
      description:
        "Enable this to make you video auto prepare content",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "autoPlay",
      title: "Auto Play",
      description:
        "Enable this to make you video auto play when user access",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "loop",
      title: "Loop",
      type: "boolean",
      description:
        "Enable this to make you video loop",
      initialValue: false,
    },
    {
      name: "muted",
      title: "Muted",
      type: "boolean",
      description:
        "Enable this to muted your video",
      initialValue: false,
    },
    {
      name: "showControls",
      title: "Show Controls",
      type: "boolean",
      description:
        "Enable this so user can controls video",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "altText",
      media: "videoThumbnail",
    },
    prepare: (selection) => {
      return {
        title: selection.title
          ? selection.title
          : "Missing Alternative text for video",
        media: selection.media
          ? selection.media
          : "🎬",
      };
    },
  },
};
