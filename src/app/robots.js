export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://fotografi-companyprofile.vercel.app/sitemap.xml",
  };
}
