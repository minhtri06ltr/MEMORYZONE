const test = {
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": "https://memoryzone.com.vn",
        name: "Trang chủ",
      },
    },

    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id":
          "https://memoryzone.com.vn/tin-tuc",
        name: "Tin tức",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@id":
          "https://memoryzone.com.vn/o-cung-di-dong-external-ssd-crucial-x8-usb-3-2-gen-2",
        name: "Ổ cứng di động External SSD Crucial X8 USB 3.2 Gen 2",
      },
    },
  ],
};
