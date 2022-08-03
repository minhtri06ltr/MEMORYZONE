export const structure1 = {
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": process.env.NEXT_PUBLIC_CLIENT_URL,
        name: "Home page",
      },
    },
  ],
};
