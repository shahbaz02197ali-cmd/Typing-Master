const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

export const siteUrl = configuredSiteUrl
  ? new URL(configuredSiteUrl.startsWith("http") ? configuredSiteUrl : `https://${configuredSiteUrl}`)
  : new URL("http://localhost:3000");

export const siteName = "Typing Master";
