export default function sitemap() {
  const baseUrl = "https://fotografi-companyprofile.vercel.app";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/service/wedding`, lastModified: new Date() },
    { url: `${baseUrl}/service/graduation`, lastModified: new Date() },
    { url: `${baseUrl}/service/company`, lastModified: new Date() },
    { url: `${baseUrl}/service/engagement`, lastModified: new Date() },
    { url: `${baseUrl}/service/event`, lastModified: new Date() },
    { url: `${baseUrl}/portofolio`, lastModified: new Date() },
  ];
}